import * as arangojs from "arangojs";
import {graphqlDebug} from "../debug";
import {DocumentHandle} from "arangojs/lib/cjs/collection";
import {DocumentData} from "arangojs/lib/cjs/util/types";
import {aql} from "arangojs";
import errorName from "./../../Lib/Errors/GraphQL/Errors";
import {arangodb} from "../../connectors";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {AqlQuery} from "arangojs/lib/async/aql-query";

export default abstract class baseModel {

    timestamps = true;

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    }

    public async insert(newDocument: DocumentData<any>): Promise<any> {

        if (this.timestamps) {
            if (Array.isArray(newDocument)) {
                newDocument.map(document => this.addDatesToDocument(document));
            } else {
                this.addDatesToDocument(newDocument)
            }
        }

        const result = await this.collection.save(newDocument, {
            returnNew: true
        });
        return result.new;
    }

    public async update(selector: any, newDocument: DocumentData<any>) {

        const document: any = await this.collection.document(selector).catch(reason => {
            return null
        });

        if (document === null) throw new Error(errorName.NOTFOUND);

        newDocument = this.parseUpdate(newDocument);
        if (this.timestamps) {
            newDocument.updatedAt = new Date().toISOString();
        }

        const result: any = await this.collection.update(document, newDocument, {
            returnNew: true
        });
        return result.new;

    }

    public async find(selector: any): Promise<any | null> {
        try {
            return await this.collection.document(selector);
        } catch (err) {
            console.log(err);
            // @TODO Throw error?
            return null;
        }
    }

    // List all entries in a collection with (possibly applied filters)
    public async list(filters: any) {
        // This is a query and not an all function so I can make an paginator soon. The Models already use an paginator schema.
        // @TODO Make paginator
        const query: AqlQuery = aql`
            FOR d IN @@collectionName
            RETURN d
        `;

        query.bindVars = {
            "@collectionName": this.collectionName()
        };

        const result: ArrayCursor = await arangodb.query(query);

        return await result.all();

    }

    public async remove(selector: DocumentHandle): Promise<any | null> {
        if (await this.collection.documentExists(selector)) {
            try {
                return await this.collection.remove(selector);
            } catch (e) {
                console.log(e);
                return false;
            }
        } else return false;
    }


    protected parseInsert(document: any): any {
        return document;
    }

    protected parseUpdate(document: any): any {
        return document;
    }


    protected addDatesToDocument(newDocument: any) {

        newDocument = this.parseInsert(newDocument);

        let now = new Date().toISOString();
        newDocument.createdAt = now;
        newDocument.updatedAt = now;

        return newDocument;

    }

}
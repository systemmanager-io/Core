import * as arangojs from "arangojs";
import * as _ from "lodash";
import { graphqlDebug } from "../debug";
import { DocumentHandle } from "arangojs/lib/cjs/collection";
import { DocumentData } from "arangojs/lib/cjs/util/types";
import { ArrayCursor } from "arangojs/lib/cjs/cursor";

export default abstract class baseModel {

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    }

    public async insert(newDocument: DocumentData<any>): Promise<any> {

        if (Array.isArray(newDocument)) {
            newDocument.map(d => this.addDates(d));
        } else {
            this.addDates(newDocument)
        }

        const result = await this.collection.save(newDocument, {
            returnNew: true
        });
        return result.new;
    }

    public async update() {

    }

    public async find(selector: any): Promise<any | null> {
        try {
            return await this.collection.document(selector);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    // List all entries in a collection with (possibly applied filters)
    public async list() {

        const result: ArrayCursor = await this.collection.all();
        const allDocuments = _.get(result, "_result");
        graphqlDebug(allDocuments);
        return allDocuments;
    }

    public async remove(selector: DocumentHandle): Promise<any | null> {

        if(await this.collection.documentExists(selector)) {
            try {
                return await this.collection.remove(selector);
            } catch (err) {
                console.log(err);
                return false;
            }
        } else {
            return false
        }

    }

    protected parseInsert(document: any): any {
        return document;
    }


    protected addDates(newDocument: any) {

        newDocument = this.parseInsert(newDocument);

        let now = new Date().toISOString();
        newDocument.createdAt = now;
        newDocument.updatedAt = now;

        return newDocument;
    }

}
import * as arangojs from "arangojs";
import {DocumentHandle} from "arangojs/lib/cjs/collection";
import {DocumentData} from "arangojs/lib/cjs/util/types";
import {aql} from "arangojs";
import errorName from "../../Errors/GraphQL/Errors";
import {arangodb} from "../../../connectors";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {AqlQuery} from "arangojs/lib/async/aql-query";
import Joi, {Schema} from "@hapi/joi";

export default abstract class documentModel<DOC extends ArangoDocument> {

    // The CreatedAt and UpdatedAt timestamps
    timestamps = true;

    protected abstract collection: arangojs.DocumentCollection;
    protected modelFields: Schema | undefined;

    // @TODO build a function/thing that will allow models to give their fields, so you wont put be able to put unknown data in the database
    // @TODO This is especially handy if you are going to use certain models for certain stuff in an plugin, idk, have to decide how plugins are going to work.

    // @TODO Also implement something that will ONLY allow the model to insert in their own collection not another collection. Then the purpose of seperate models just goes to shit

    protected collectionName(): string {
        return this.collection.name;
    }

    // public async validateData(data: object) {
    //
    //     const test = this.modelFields.validate(data);
    //     console.log("Result:", test);
    //
    // }

    public async insert(newDocument: Partial<DOC>): Promise<DOC | null> {

        // this.validateData(newDocument);

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

    public async update(selector: any, newDocument: Partial<DOC>): Promise<DOC | null> {

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

    public async find(selector: any): Promise<DOC | null> {
        try {
            return await this.collection.document(selector);
        } catch (err) {
            console.log(err);
            // @TODO Throw error?
            return null;
        }
    }

    public async search(searchFilters: any) {
        // We can use the list for this as well. It I think that is the way to go to be honest. Or we do listing and such jusst in that one.
        // If the list is doing more than just listing we
    }

    // List all entries in a collection with (possibly applied filters)
    public async list(paginator: PaginateType): Promise<DOC | null> {

        console.log(paginator);
        const paginate = paginator !== undefined ? paginator.paginate : {
            last: undefined,
            first: undefined,
            limit: undefined
        };

        const firstFilter = aql.literal(paginate.last !== undefined ? `SORT doc._key ASC LIMIT @last` : ``);
        const lastFilter = aql.literal(paginate.first !== undefined ? `SORT doc._key DESC LIMIT @first` : ``);
        const limitFilter = aql.literal(paginate.limit !== undefined ? `LIMIT @limit` : ``);

        const query: AqlQuery = aql`
            FOR doc IN @@collectionName
            ${lastFilter}
            ${firstFilter}
            ${limitFilter}
            RETURN doc
        `;


        query.bindVars = {
            "@collectionName": this.collectionName(),
            "first": paginate.first,
            "last": paginate.last,
            "limit": paginate.limit
        };

        const result: ArrayCursor = await arangodb.query(query);
        return await result.all();
    }

    public async remove(selector: DocumentHandle | Array<DocumentHandle>): Promise<any> {

        if (Array.isArray(selector)) {

            const result = await selector.map(async (document: DocumentHandle) => {
                return await this.removeItem(document)
            });
            return await Promise.all(result);

        } else {
            return await this.removeItem(selector);
        }
    };

    protected async removeItem(document: DocumentHandle): Promise<true | false> {
        if (await this.collection.documentExists(document)) {
            try {
                return await this.collection.remove(document);
            } catch (e) {
                console.log(e); // @TODO Make better error logging, in case of SystemManager there is error reporting to graphql
                return false;
            }
        } else {
            return false;
        }
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

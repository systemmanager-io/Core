import * as arangojs from "arangojs";
import {graphqlDebug} from "../../Lib/debug";

export default abstract class baseModel {

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    }

    public async insert(newDocument: any): Promise<any> {

        if (Array.isArray(newDocument)) {
            newDocument.map(d => this.addDates(d));
        } else {
            this.addDates(newDocument)
        }
        // console.log(this.collection);
        graphqlDebug("Inserting", newDocument);

        try {
            const result = await this.collection.save(newDocument, {
                returnNew: true
            });
            return result.new;
        } catch (e) {
            console.log(e)
        }
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

    public async list() {

    }

    public async remove() {

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
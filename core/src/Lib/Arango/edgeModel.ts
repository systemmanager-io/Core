import * as arangojs from "arangojs";
import EdgeDocument from "../Types/ArangoDB/EdgeDocument";

export default abstract class edgeModel {

    // The CreatedAt and UpdatedAt timestamps
    timestamps = true;

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    };

    public async createRelation(newDocument: EdgeDocument) {

        if (this.timestamps) {
            if (Array.isArray(newDocument)) {
                newDocument.map(document => this.addDatesToDocument(document));
            } else {
                this.addDatesToDocument(newDocument);
            }
        }

        const result = await this.collection.save(newDocument, {
            returnNew: true
        });
        return result.new;
    };

    // Do we ne
    public async listRelations(_from: String) {

    };

    public async getRelations(_from: String) {

    };

    public async removeRelation(id: String) {

    };

    protected parseInsert(document: any): any {
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

/*

    DEVELOPERS NOTE
    If you want to update an relation with other keys or anything else for what we use edges for now.
    I highly recommend deleting them and creating new ones

 */
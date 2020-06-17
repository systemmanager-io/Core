import * as arangojs from "arangojs";
import {AqlQuery} from "arangojs/lib/async/aql-query";
import {aql} from "arangojs";
import {arangodb} from "../../../connectors";

export default abstract class edgeModel<DOC extends ArangoEdgeDocument> {

    // The CreatedAt and UpdatedAt timestamps
    timestamps = true;

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    };

    public async createRelation(newDocument: ArangoEdgeDocument): Promise<DOC | null> {

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

    public async getRelationsData(_from: String) : Promise<DOC | null> {
        const query: AqlQuery = aql`
            FOR d IN @@collectionName
            FILTER d._from == @_from
            RETURN d
        `;

        query.bindVars = {
            "@collectionName": this.collectionName(),
            "_from": _from,
        };

        return await arangodb.query(query);

    };

    public async getRelations(_from: String) : Promise<DOC | null> {
        const query: AqlQuery = aql`
            FOR d IN @@collectionName
            FILTER d._from == @_from
            RETURN d
        `;

        query.bindVars = {
            "@collectionName": this.collectionName(),
            "_from": _from,
        };

        return await arangodb.query(query);

    };

    public async removeRelation(id: String): Promise<DOC | false> {
        return false;
    };

    protected parseInsert(document: any): any {
        return document;
    }

    protected addDatesToDocument(newDocument: any): any {
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

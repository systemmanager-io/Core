import * as arangojs from "arangojs";


export default abstract class edgeModel {
    timestamps = true;

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    };

    createRelation(_from: String, _to: String) {

    };

    removeRelation(id: String) {};

    getRelation(id: String) {};

    updateRelation(id: String, _from: String, _to: String) {};
}
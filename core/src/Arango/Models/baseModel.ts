import * as arangojs from "arangojs";

export default abstract class baseModel {

    protected abstract collection: arangojs.DocumentCollection;

    protected collectionName(): string {
        return this.collection.name;
    }

    public async insert(newDocument: any) {
        console.log(newDocument);
        const result = await this.collection.save(newDocument, {
            returnNew: true
        });
        console.log(result.new);
        return result.new;
    }

    update() {

    }

    find() {

    }

    list() {

    }

    public async remove() {

    }

}
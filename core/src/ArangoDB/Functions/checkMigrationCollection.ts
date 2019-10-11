import {arangodb} from "../../connectors";
import {response} from "express";

export default async function  () {
    const migrationCollection = arangodb.collection("migrations");

    if(!await migrationCollection.exists()) {
       await migrationCollection.create();
    }

    return
}
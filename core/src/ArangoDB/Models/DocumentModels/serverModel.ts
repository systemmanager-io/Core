import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";
import {string} from "joi";
import Joi from "@hapi/joi";

class ServerModel extends documentModel {

    collection = arangodb.collection("servers");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

    modelFields = Joi.object({});

    // modelFields = {
    //     'permission': string
    // };

}

export default new ServerModel();
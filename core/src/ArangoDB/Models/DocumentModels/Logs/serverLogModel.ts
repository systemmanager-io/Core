import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";
import Joi from "@hapi/joi";

class ServerLogModel extends documentModel {

    collection = arangodb.collection("serverLogs");

    modelFields = Joi.object({});

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerLogModel();
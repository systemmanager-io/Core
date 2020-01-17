import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";
import Joi from "@hapi/joi";

class RoleModel extends documentModel {

    collection = arangodb.collection("roles");

    modelFields = Joi.object({});

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}

export default new RoleModel();
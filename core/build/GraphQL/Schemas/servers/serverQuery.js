"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql = __importStar(require("graphql"));
// import PaginateInputType from "../../Objects/PaginateInputType";
const serverSchema_1 = require("./serverSchema");
// import userModel from "../../../Models/Documents/userModel";
exports.default = {
    type: new graphql.GraphQLObjectType({
        name: 'UserCTRL',
        fields: () => ({
            // list: {
            //     type: UserPaginator,
            //     args: {
            //         params: {
            //             type: UserFiltersInput,
            //             description: 'Filter collection results',
            //         },
            //         paginate: {
            //             type: new graphql.GraphQLNonNull(PaginateInputType),
            //             description: 'Paginate collection params',
            //         },
            //         options: {
            //             type: userSearchOptionsInput,
            //             description: 'Search params',
            //         },
            // },
            // resolve(root, args, context) {
            //     return userModel.paginate(args.paginate, {
            //         [userModel.getDocumentKey()]: args.filters,
            //     }, args.options);
            // }
            // },
            get: {
                type: serverSchema_1.User,
                description: 'Get a User by its _key or _id',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'The _key or _id of this object',
                    },
                },
                resolve(root, args) {
                    // return userModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
};

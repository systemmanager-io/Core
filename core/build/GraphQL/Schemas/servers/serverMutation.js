"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const serverSchema_1 = require("./serverSchema");
// import serverModel from "../../../Models/Documents/serverModel";
exports.default = {
    type: new graphql_1.GraphQLObjectType({
        name: 'UserMutationCTRL',
        fields: () => ({
            create: {
                type: serverSchema_1.User,
                args: {
                    data: {
                        type: new graphql_1.GraphQLNonNull(serverSchema_1.UserCreateInput),
                    },
                },
                resolve(root, args) {
                    // return userModel.insert(args.data);
                },
            },
            update: {
                type: serverSchema_1.User,
                args: {
                    selector: {
                        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                        description: "_id or _key of the object",
                    },
                    data: {
                        type: new graphql_1.GraphQLNonNull(serverSchema_1.UserUpdateInput),
                    },
                },
                resolve(root, args) {
                    // return userModel.update(args.selector, args.data);
                },
            },
            delete: {
                type: graphql_1.GraphQLBoolean,
                args: {
                    selector: {
                        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                        description: "_id or _key of the object",
                    },
                },
                async resolve(root, args) {
                    await removeUser(args.selector);
                    return true;
                }
            },
            deleteMulti: {
                type: graphql_1.GraphQLBoolean,
                args: {
                    selectors: {
                        type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLID))),
                        description: "a list of _id or _key of the object",
                    },
                },
                async resolve(root, args) {
                    await Promise.all(args.selectors.map(removeUser));
                    return true;
                }
            },
        }),
    }),
    resolve: () => ({}),
};
async function removeUser(userId) {
    // const user = await userModel.find(userId);
    // if (user) {
    //     const wait = [];
    // wait.push(userModel.rem/ove(user._id));
    // await Promise.all(wait);
    // }
}

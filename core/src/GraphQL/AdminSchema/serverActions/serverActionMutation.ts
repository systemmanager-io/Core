import {GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLID} from "graphql";
import errorName from "../../../Lib/Errors/GraphQL/Errors";

export default {
    type: new GraphQLObjectType({
        name: "ServerActionMutation",
        fields: () => ({
            shutdown: {
                type: GraphQLBoolean,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "The ID of the server"
                    },
                },
                async resolve(root, args) {

                    return true;
                }
            },
            reboot: {
                type: GraphQLBoolean,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "The ID of the server"
                    },
                },
                async resolve(root, args) {

                    return true;
                }
            }
        })
    }),
    resolve: () => ({}),
}
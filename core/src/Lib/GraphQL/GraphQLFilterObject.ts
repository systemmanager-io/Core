import {GraphQLInputObjectType, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "Filter",
    fields: () =>({
        sort: {type: GraphQLString},
        like: {type: GraphQLString}
    })
});
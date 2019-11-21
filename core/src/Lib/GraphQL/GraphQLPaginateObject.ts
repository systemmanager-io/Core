import {GraphQLInputObjectType, GraphQLInt} from "graphql";

export default new GraphQLInputObjectType({
    name: "Paginator",
    fields: () => ({
        first: {type: GraphQLInt},
        last: {type: GraphQLInt},
        limit: {type: GraphQLInt},
        offset: {type: GraphQLInt}
    })
})

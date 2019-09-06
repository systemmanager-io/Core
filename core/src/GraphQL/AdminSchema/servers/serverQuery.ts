import * as graphql from 'graphql'
import {Server} from './serverSchema'
import serverModel from '../../../Arango/Models/serverModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'ServerQueries',
        fields: () => ({
            // list: {},
            get: {
                type: Server,
                description: 'Retrieve the server information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'The ID or the Key of the server',
                    },
                },
                resolve(root, args) {
                    return serverModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}

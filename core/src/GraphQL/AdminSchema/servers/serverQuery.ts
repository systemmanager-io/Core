import * as graphql from 'graphql'
import {Server, ServerCreateInput, ServerPaginator} from './serverSchema'
import serverModel from '../../../ArangoDB/Models/DocumentModels/serverModel';
import serverHasServerInfo from "../../../ArangoDB/Models/EdgeModels/serverHasServerInfo";

export default {
    type: new graphql.GraphQLObjectType({
        name: 'ServerQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(Server),
                description: "Get a list of current server entries in SystemManager",
                args: {
                    paginator: {
                        type: ServerPaginator,
                        description: "Filter your results"
                    },
                },
                async resolve(root, args) {
                    const serverdata: any = await serverModel.list(args.paginator);

                    return serverdata;
                }
            },
            get: {
                type: Server,
                description: 'Retrieve the server information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an Server entry by its _id or _key',
                    },
                },
                async resolve(root, args) {
                    const serverdata: any = await serverModel.find(args.selector);
                    const serverHasServerInfoData = await serverHasServerInfo.getRelations(serverdata._id);

                    console.log(serverdata, serverHasServerInfoData);
                    return serverdata;
                },
            },
        }),
    }),
    resolve: () => ({}),
}

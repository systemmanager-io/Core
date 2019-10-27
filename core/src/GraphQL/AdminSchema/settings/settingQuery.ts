import * as graphql from 'graphql'
import {Setting, SettingPaginator} from './settingSchema'
import settingModel from '../../../ArangoDB/Models/DocumentModels/settingModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'SettingQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(Setting),
                description: "Get a list of current setting entries in SystemManager",
                args: {
                    paginator: {
                        type: SettingPaginator,
                        description: "Create an new Setting entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return settingModel.list(args.paginator);
                }
            },
            get: {
                type: Setting,
                description: 'Retrieve the setting information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an Setting entry by its _id or _key',
                    },
                },
                resolve(root, args) {
                    return settingModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}

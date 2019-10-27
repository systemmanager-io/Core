import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {SettingUpdateInput, SettingCreateInput, Setting} from './settingSchema'
import settingModel from "../../../ArangoDB/Models/DocumentModels/settingModel";

export default {
    type: new GraphQLObjectType({
        name: 'SettingMutations',
        fields: () => ({
            create: {
                type: Setting,
                args: {
                    data: {
                        type: new GraphQLNonNull(SettingCreateInput),
                        description: "Create an new Setting entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return settingModel.insert(args.data);
                },
            },
            update: {
                type: Setting,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an Setting entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(SettingUpdateInput),
                    },
                },
                resolve(root, args) {
                    return settingModel.update(args.selector, args.data);
                },
            },
            remove: {
                type: GraphQLBoolean,
                args: {
                    selectors: {
                        type: new GraphQLNonNull(
                            new GraphQLList(
                                new GraphQLNonNull(GraphQLID),
                            ),
                        ),
                        description: "Delete Setting entries in systemmanager.",
                    },
                },
                async resolve(root, args) {
                    const selectors = args.selectors;

                    selectors.map(async (data:any) => {
                        await settingModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}
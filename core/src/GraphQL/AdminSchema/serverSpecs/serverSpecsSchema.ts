import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'

const CpuType = new GraphQLObjectType({
    name: "CPU",
    fields: () => ({})
});

const GpuType = new GraphQLObjectType({
    name: "GPU",
    fields: () => ({})
});

const RamType = new GraphQLObjectType({
    name: "RAM",
    fields: () => ({})
});

const MoboType = new GraphQLObjectType({
    name: "MOBO",
    fields: () => ({})
});

const DiskType = new GraphQLObjectType({
    name: "DISK",
    fields: () => ({})
})


export const ServerSpecs = new GraphQLObjectType({
    name: 'ServerSpecs',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },

        CPU: {
            type: CpuType
        },
        RAM: {
            type: RamType,
        },
        GPU: {
            type: GpuType
        },
        MOBO: {
            type: MoboType
        },
        DISKS: {
            type: DiskType
        },
    }),
});

// @TODO make paginator

export const ServerSpecsUpdateInput = new GraphQLInputObjectType({
    name: 'ServerSpecsUpdateInput',
    fields: () => ({

        key: {
            type: GraphQLString,
        },
        value: {
            type: GraphQLString,
        },

    }),
});

export const ServerSpecsCreateInput = new GraphQLInputObjectType({
    name: 'ServerSpecsCreateInput',
    fields: () => ({

        key: {
            type: new GraphQLNonNull(GraphQLString),
        },
        value: {
            type: new GraphQLNonNull(GraphQLString),
        },

    }),
});

export const ServerSpecsFiltersInput = new GraphQLInputObjectType({
    name: 'ServerSpecsFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});

import { GraphQLEnumType } from 'graphql';

const authMethodType = new GraphQLEnumType({
    name: 'AuthMethodType',
    values: {
        PASSWORD: {
            value: "password",
            description: "Authenticate a user with a password"
        },
        // EMAILTOKEN: {
        //     value: "emailtoken",
        //     description: "Authenticate a user over Email"
        // },
    }
});

export default authMethodType;
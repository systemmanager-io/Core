declare interface UserUpdateType  {
    username: string | undefined,
    email: string | undefined,
    name: string | undefined,
    password: string | undefined,
    authMethod: AuthType | undefined,
    salt: undefined | string,
    blocked: boolean,
}
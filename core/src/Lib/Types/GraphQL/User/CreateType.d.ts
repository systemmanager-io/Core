declare interface UserCreateType  {
    _key: string,
    username: string,
    email: string,
    name: string | undefined,
    password: string | undefined,
    password_confirmation?: string | undefined,
    authMethod: AuthType,
    salt: undefined | string,
    blocked: boolean,

}
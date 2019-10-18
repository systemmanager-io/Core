export interface UserCreateType  {
    _key: string,
    username: string,
    email: string,
    name: string | undefined,
    password: string | undefined,
    authMethod: string
    salt: undefined | string
}

export interface UserUpdateType {
    username: string | undefined,
    email: string | undefined,
    name: string | undefined,
    password: string | undefined,
    authMethod: string | undefined,
    salt: undefined | string
}

// @TODO make proper enum
enum AuthMethod {
    // password: "password",
    // emailtoken: "emailtoken"

}
export interface UserCreateType  {
    _key: string,
    username: string,
    email: string,
    name: string | undefined,
    password: string | undefined,
    authMethod: string
    salt: undefined | string
    blocked: boolean

}
export interface UserCreateTypeSec  {
    _key: string,
    username: string,
    email: string,
    name: string | undefined,
    password: string | undefined,
    password_confirmation: string | undefined,
    authMethod: string
    salt: undefined | string
    blocked: boolean


}

export interface UserUpdateType {
    username: string | undefined,
    email: string | undefined,
    name: string | undefined,
    password: string | undefined,
    authMethod: string | undefined,
    salt: undefined | string
    blocked: boolean
}

// @TODO make proper enum
enum AuthMethod {
    // password: "password",
    // emailtoken: "emailtoken"

}
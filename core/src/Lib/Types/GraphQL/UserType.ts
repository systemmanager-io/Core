export default interface userType  {
    username: string,
    email: string,
    name: string | undefined,
    password: string | undefined,
    authMethod: string
    salt: undefined | string
}

// @TODO make proper enum
enum AuthMethod {
    // password: "password",
    // emailtoken: "emailtoken"

}
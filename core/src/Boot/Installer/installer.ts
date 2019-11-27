import {installDebug} from "../../Lib/debug";
import * as inquirer from "inquirer";
import installerLogo from "../../Assets/Installer/installerLogo";
import {UserCreateType} from "../../Lib/Types/GraphQL/UserType";
import uuid from "uuid/v4";
import createUser from "../../Functions/createUser";
import {InputQuestion} from "inquirer";

export default async function () {
    installDebug("Welcome to SystemManager");
    installDebug("We will now set up the rest of the Core");


    let questions: InputQuestion = [
        {
            type: 'input',
            name: 'name',
            message: "What is your name?"
        },
        {
            type: 'input',
            name: 'username',
            message: "What do you want to have as a the username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Which email do you want to use to login with?",
        },
        {
            type: 'password',
            name: 'password',
            mask: "*",
            message: "Please type in your password you want to set as the user?",
        },
        {
            type: 'password',
            name: 'password_confirmation',
            mask: "*",
            message: "Please retype the password",
        },
    ]
    await inquirer.prompt(questions).then(async answers => {
        let user: any = {
            name: answers.name,
            username: answers.username,
            email: answers.email,
            authMethod: "password",
            password: answers.password,
            password_confirmation: answers.password_confirmation,
            blocked: false
        };

        console.log(await createUser(user));
    });
}
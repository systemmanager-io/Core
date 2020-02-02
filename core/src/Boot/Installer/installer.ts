// This file continues to change. You might be asked during a migration to set something up for the database if required

import {installDebug} from "../../Lib/debug";
import * as inquirer from "inquirer";
import createUser from "../../Functions/createUser";
import {InputQuestion} from "inquirer";
import settingModel from "../../ArangoDB/Models/DocumentModels/settingModel";
import userHasRole from "../../ArangoDB/Models/EdgeModels/Permissions/userHasRole";
import {create} from "ts-node";
import errorName from "../../Lib/Errors/GraphQL/Errors";

export default async function () {

    if (await settingModel.getSetting("FIRST_SETUP") == true) {
        installDebug("SystemManager has been installed, skipping first time setup.");
        return
    }
    installDebug("Thank you for choosing SystemManager");
    installDebug("We will now set up the rest of the Core");
    installDebug("First we will create a user for you which will have the role \"admin\"");


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
    ];
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
        answers = {}; // Remove EVERYTHING as it contains passwords

        const createdUser = await createUser(user);
        user = null; // Remove EVERYTHING as it contains passwords

        if(createdUser === null || createdUser === undefined) throw new Error(errorName.ARANGODBERROR);
        // Set said user as admin!
        await userHasRole.createRelation({_from: createdUser._id, _to: "roles/1"});
    });

    installDebug("We will now setup basic settings");
    let setupQuestions: InputQuestion = [
        {
            type: 'input',
            name: 'name',
            message: "How do you want to call your SystemManager",
            default: function () {
                return 'SystemManager';
            }

        },
    ];
    await inquirer.prompt(setupQuestions).then(async answers => {
        await settingModel.setSetting("NAME", answers.name);
        answers = {};
    });

    installDebug("Now we setup your mail, to inform when a server goes down");
    installDebug("Can later be edited via the control panel or database");
    let emailQuestions: InputQuestion = [
        {
            type: 'input',
            name: 'host',
            message: "What is the hostname of your SMTP server?"
        },
        {
            type: "number",
            name: "port",
            message: "What is the port of your SMTP server?",
            default: function () {
                return 465
            }
        },
        {
            type: 'input',
            name: "secure",
            message: "Does your SMTP server use TLS (RECOMMENDED)",
            default: "ssl"
        },
        {
            type: 'input',
            name: 'username',
            message: "What is the username of the SMTP server"
        },
        {
            type: 'input',
            name: 'password',
            message: "What is the password of the SMTP server"
        }
    ];
    await inquirer.prompt(emailQuestions).then(async answers => {
        // Set a bunch of settings that keep your core working
        await settingModel.setSetting("MAIL_ENABLED", true);
        await settingModel.setSetting("MAIL_DRIVER", "SMTP");
        await settingModel.setSetting("MAIL_HOST", answers.host);
        await settingModel.setSetting("MAIL_FROM", answers.from);
        await settingModel.setSetting("MAIL_PORT", answers.port);
        await settingModel.setSetting("MAIL_USER", answers.username);
        await settingModel.setSetting("MAIL_PASSWORD", answers.password);
        await settingModel.setSetting("MAIL_ENCRYPTION", answers.secure);
        answers = {};
    });

    await settingModel.setSetting("FIRST_SETUP", true)
}
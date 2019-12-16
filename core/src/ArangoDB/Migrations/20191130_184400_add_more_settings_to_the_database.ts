import settingModel from "../Models/DocumentModels/settingModel";

export async function up() {
    await settingModel.insert({_key: "ENABLE_SERVER_PING", value: true});

    // Mail Settings
    // Might be used later, for changing stuff while the system is online
    await settingModel.insert({_key: "MAIL_ENABLED", value: true});
    await settingModel.insert({_key: "MAIL_DRIVER", value: "SMTP"});
    await settingModel.insert({_key: "MAIL_ENCRYPTION", value: "SSL"});
    await settingModel.insert({_key: "MAIL_FROM", value: ""});
    await settingModel.insert({_key: "MAIL_HOST", value: ""});
    await settingModel.insert({_key: "MAIL_PASSWORD", value: ""});
    await settingModel.insert({_key: "MAIL_PORT", value: ""});
    await settingModel.insert({_key: "MAIL_USER", value: ""});
}

export async function down() {
    await settingModel.remove("MAIL_ENABLED");
    await settingModel.remove("MAIL_DRIVER");
    await settingModel.remove("MAIL_ENCRYPTION");
    await settingModel.remove("MAIL_FROM");
    await settingModel.remove("MAIL_HOST");
    await settingModel.remove("MAIL_PASSWORD");
    await settingModel.remove("MAIL_PORT");
    await settingModel.remove("MAIL_USER");
}

let getName = require('./../../utils/utils.js').getName;

module.exports = {
    usage: "Hugs the user, can take a username/nickname(can take a mention if a match isn't found) to hug that user.\n`hug [user] or [none]`",
    delete: true,
    cooldown: 5,
    process: (bot, msg, suffix) => {
        if (suffix && (msg.mentions || getName(msg, suffix))) {
            msg.mentions.length === 1 ? user = msg.mentions[0] : user = getName(msg, suffix).user;
            bot.createMessage(msg.channel.id, user.mention + ", (>^_^)> <(^.^<) ,**" + msg.author.username + "**").catch();
        } else bot.createMessage(msg.channel.id, "(>^_^)> <(^.^<)").catch();
    }
}
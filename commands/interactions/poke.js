let getName = require('./../../utils/utils.js').getName;

module.exports = {
    usage: "Poke the bot, can take a username/nickname(can take a mention if a match isn't found) to poke that user.\n`poke [mentioned user] or [none]`",
    delete: true,
    cooldown: 5,
    process: (bot, msg, suffix) => {
        let randomPoke = Math.random() < 0.5 ? "http://i.imgur.com/J4Vr0Hg.gif" : "http://i.imgur.com/6KpNE1V.gif";
        if (suffix && (msg.mentions || getName(msg, suffix))) {
            msg.mentions.length === 1 ? user = msg.mentions[0] : user = getName(msg, suffix).user;
            bot.createMessage(msg.channel.id, user.mention + " was poked by **" + msg.author.username + "**\n" + randomPoke).catch();
        } else bot.createMessage(msg.channel.id, bot.user.mention + " was poked by **" + msg.author.username + "**\n" + randomPoke).catch();
    }
}
let search = require('youtube-simple-search'),
    options = require("./../../options/options.json"),
    utils = require('./../../utils/utils.js');

module.exports = {
    usage: "Returns the first Youtube result for the searched terms.\n`youtube [search]`",
    delete: true,
    cooldown: 5,
    process: (bot, msg, suffix) => {
        search({
            key: options.youtube_api_key,
            query: suffix,
            maxResults: 10
        }, (result) => {
            if (result.length === 0) bot.createMessage(msg.channel.id, "Your search for `" + suffix + "` returned no results. Please forgive me **" + msg.author.username + "**-senpai!").then(message => utils.messageDelete(bot, message)).catch();
            else bot.createMessage(msg.channel.id, `I searched for **\"${suffix}\"** and found this **${msg.author.username}**-senpai: \nhttps://www.youtube.com/watch?v=${result[0].id.videoId}`).catch();
        });
    }
}
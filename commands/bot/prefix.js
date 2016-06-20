module.exports = {
    usage: 'Prints out the current command prefix.',
    delete: true,
    togglable: false,
    cooldown: 20,
    process: function(bot, msg, suffix) {
        if (!suffix) {
            var msgPrefix;
            serverSettings.hasOwnProperty(msg.channel.guild.id) && serverSettings[msg.channel.guild.id].hasOwnProperty('Prefix') ? msgPrefix = serverSettings[msg.channel.guild.id]['Prefix'] : msgPrefix = prefix;
            var msgString = 'The current command prefix is: `' + msgPrefix + '`';
            msgString += '\n\n To change this prefix use `prefix [new prefix]`';
            bot.createMessage(msg.channel.id, msgString);
        } else {
            if (msg.channel.permissionsOf(msg.author.id).json.manageRoles || admins.indexOf(msg.author.id) > -1) Database.changePrefix(bot, msg, suffix);
            else bot.createMessage(msg.channel.id, 'This command requires the `manageRoles` premission to be used, Sorry.');
        }
    }
}
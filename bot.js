const Discord = require('discord.js');
const client = new Discord.Client();
const Responses = require('./responses.js');
const responses = new Responses();

client.on('ready', () => {
    client.user.setActivity('me dance', { type: 'WATCHING' });
    console.log(responses.transRights);
});

client.on('message', message => {
    if (message.author.bot) return;
    let cynResponses = responses.get(message.content);
    if (cynResponses) cynResponses.forEach(response => message.channel.send(response));
});

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret

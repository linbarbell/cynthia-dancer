const Discord = require('discord.js');
const Responses = require('./responses.js');
const fs = require('fs');
const client = new Discord.Client();
const responses = new Responses();
const token = process.env.BOT_TOKEN || JSON.parse(fs.readFileSync('./config.json')).bot;

client.on('ready', () => {
    client.user.setActivity('me dance', { type: 'WATCHING' });
    console.log(responses.transRights);
});

client.on('message', message => {
    if (message.author.bot) return;
    let cynResponses = responses.get(message.content);
    if (cynResponses) cynResponses.forEach(response => message.channel.send(response));
});

client.login(token);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('me dance', { type: 'WATCHING' });
});

client.on('message', message => {
    if (message.author.bot) return;
    let content = message.content.toLowerCase();
    if (content.search(/\b(g+z+)+\b/) !== -1 && content.search(/\b(c+o+n+g+r+a+)\b/) === -1 || content.search(/\b(c+o+n+g+r+a+.+)\b/) !== -1 || content.includes('grats') || content.includes('gratz') ) {
        message.channel.send('Congratulations!')
    }
    if (content.includes('fashion')) {
        message.channel.send('Fashion? I love fashion!');
    }
    if (content.includes('trans rights')) {
        message.channel.send('Trans rights!');
    }
    if (content.includes('gay rights')) {
        message.channel.send('Gay rights!');
    }
    if (content.search(/\bya+s+\b/g) !== -1) {
        message.channel.send('yas!');
    }
    if (content.includes('cynthia')) {
        message.channel.send("Cynthia she's a really cool dancer. Cynthia boogie to the groove now.");
    }
});


client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret

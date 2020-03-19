const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('me dance', { type: 'WATCHING' });
});

client.on('message', message => {
    if(message.author.bot) return;
    let content = message.content.toLowerCase();
    if (content.includes('gz') || content.includes('congrat') || content.includes('grats') || content.includes('gratz')) {
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
    if (content.search(/\byas\b/g) !== -1) {
        message.channel.send('yas!');
    }
    if (content.includes('cynthia')) {
        message.channel.send("Ready? Here we go now! Cynthia she's a really cool dancer. Cynthia boogie to the groove now. She's got those moves, long as you move those arms and legs. She's moving up on the floor. She's ready to break some eggs. Make an omlette Cynthia. Whoo! Shake it, shake it. You're so fantastic. Just don't break it, it's only made of plastic. Cynthia she's a real cool dancer. Cynthia boogie to the groove.");
    }
});

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret

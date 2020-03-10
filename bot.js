const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('online')
    client.user.setActivity({
        game: {
            name: 'me dance',
            type: "Watching",
            url: "https://discordapp.com/"
        }
    });
});

 

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.includes('Yas')) {
        message.channel.send('yas!');   
    }
  
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('yas')) {
        message.channel.send('yas!');   
    }
  
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('Cynthia')) {
        message.channel.send("Ready? Here we go now! Cynthia she's a really cool dancer. Cynthia boogie to the groove now. She's got those moves, long as you move those arms and legs. She's moving up on the floor. She's ready to break some eggs. Make an omlette Cynthia. Whoo! Shake it, shake it. You're so fantastic. Just don't break it, it's only made of plastic. Cynthia she's a real cool dancer. Cynthia boogie to the groove.");   
    }
  
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('cynthia')) {
        message.channel.send("Ready? Here we go now! Cynthia she's a really cool dancer. Cynthia boogie to the groove now. She's got those moves, long as you move those arms and legs. She's moving up on the floor. She's ready to break some eggs. Make an omlette Cynthia. Whoo! Shake it, shake it. You're so fantastic. Just don't break it, it's only made of plastic. Cynthia she's a real cool dancer. Cynthia boogie to the groove.");   
    }
  
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    client.user.setActivity('me dance', { type: 'WATCHING' });
});

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('gz')) {
        message.channel.send('Congratulations!');   
    }
  
});


client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('congrat')) {
        message.channel.send('Congratulations!');   
    }
  
});

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('grats')) {
        message.channel.send('Congratulations!');   
    }
  
});

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('gratz')) {
        message.channel.send('Congratulations!');   
    }
  
});

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('fashion')) {
        message.channel.send('Fashion? I love fashion!');   
    }
  
}); 

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('trans rights')) {
        message.channel.send('Trans rights!');   
    }
  
}); 

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content.toLowerCase().includes('gay rights')) {
        message.channel.send('Gay rights!');   
    }
  
}); 

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase().includes('yas')) {
        message.channel.send('yas!');   
    }
  
});


client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase().includes('cynthia')) {
        message.channel.send("Ready? Here we go now! Cynthia she's a really cool dancer. Cynthia boogie to the groove now. She's got those moves, long as you move those arms and legs. She's moving up on the floor. She's ready to break some eggs. Make an omlette Cynthia. Whoo! Shake it, shake it. You're so fantastic. Just don't break it, it's only made of plastic. Cynthia she's a real cool dancer. Cynthia boogie to the groove.");   
    }
  
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

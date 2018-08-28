const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("I am ready!");
});

client.on('message', message => {
    if (message.content === 'ping'){
        message.reply('pong');
    }
});

client.login(process.env.NDgzMzQxMDQwMzcyNDE2NTE3.DmYvPQ.2H0aZyF8lSH-ZAK8pBg9UZ5CjJY);

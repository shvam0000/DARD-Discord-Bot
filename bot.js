require('dotenv').config()

const discord = require('discord.js');
const client = new discord.Client({
    partials: ["MESSAGE"]
})

const botPrefix = '!';
const modMeCommand = 'mod-me';

client.on('ready', () => {
    console.log('Our bot is ready to go');
})

client.on('messageDelete', msg => {
    msg.channel.send(`You deleted a message, you're sus bruh`);
})

client.on('message', msg => {
    if (msg.content === 'I love DARD') {
        msg.react('💔');
        msg.reply(`You're a DARD person! 💔`);
    }
    if (msg.content === `${botPrefix}${modMeCommand}`) {
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("784404727110041630");
    msg.reply(`You're a Moderator now, play safe!`);
}

client.login(process.env.BOT_TOKEN)
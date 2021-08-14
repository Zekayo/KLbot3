const Discord = module.require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const disbut = require("discord-buttons");
const fs = require("fs");
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'
const randomPuppy = require ("random-puppy");
const { addAbortSignal } = require("stream");
disbut(bot);
module.exports.run = async (bot, message, args) => {
    const btn1 = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('0')
        .setID('click_to_function')
        .setDisabled(false);
    let channel1 = message.guild.channels.cache.get(staff);
    channel1.send(`aye`,{component: btn1})
};
module.exports.help = {
    name: "gitler"
};

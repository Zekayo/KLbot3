const Discord = module.require("discord.js");
const fs = require("fs");
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'
const randomPuppy = require ("random-puppy");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
  
    const img = await randomPuppy(random);
    const memebed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`From /r/${random}`)
      .setURL(`https://reddit.com/r/${random}`)
      .setFooter("kl!meme");
    message.channel.send(memebed);
};
module.exports.help = {
    name: "meme"
};
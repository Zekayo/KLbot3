const Discord = module.require("discord.js");
const fs = require("fs");
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'
const randomPuppy = require ("random-puppy");
var k = 0;
module.exports.run = async (client,message,args) => {
    let reason = args.join(" ");
        k+=1;
  		let reportEmbed = new Discord.MessageEmbed()
  		.setDescription(`Идея ${message.author} #${k}`)
  		.setColor("#00ffff")
  		.addField("Предложение", reason)
  		.addField("Время", message.createdAt);
        let reportsChannel = message.guild.channels.cache.get(staff);
  		if(!reportsChannel) return message.channel.send("Не найден канал для репортов");
        reportsChannel.send(reportEmbed)
};
module.exports.help = {
    name: "say"
};
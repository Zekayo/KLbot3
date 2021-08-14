const Discord = require('discord.js');

exports.run = (bot, message, args) => {
let testembed = new Discord.MessageEmbed()
  .setDescription('залупа')
  .addField(`Before `,"```" + ` пидорасы вы суки `+"```")
message.channel.send(testembed)
}
module.exports.help = {
  name: "test"
}

const Discord = module.require("discord.js");
const fs = require("fs");
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'

module.exports.run = async (bot, message, args) => {
  let aembed2 = new Discord.MessageEmbed()
  let channelp1 = message.guild.channels.cache.get(rules);
  let messag = channel.messages.fetch('ID сообщения');
  messag.edit(aembed2.setColor("#36393f").setDescription('`2.1` Нельзя использовать <:Ohuet_spasibo_papasha_KB:866818152755363850> .').setFooter(`До этого вы получали мут ма некоторое время, теперь перманент (за использование данного эмодзи). Мы вас предупредили, поэтому за последствия ручаться не будем.`))


};
module.exports.help = {
    name: "redact"
};



const Discord = module.require("discord.js");
const fs = require("fs");
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.members.first()
//    message.channel.send('шуе')
      if(!user){ 
      message.channel.send('пошёл нахуй') 
      return;
      }
//      message.channel.send('ауе')\
      message.delete();
      message.channel.send("Умри "+user.toString());

};
module.exports.help = {
    name: "u"
};
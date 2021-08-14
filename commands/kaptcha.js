const Discord = module.require("discord.js");
const fs = require("fs");
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'

module.exports.run = async (bot, message, args) => {
    let kembed = new Discord.MessageEmbed()
      .setColor('#f8ee00')
      .setTitle('**<a:des:854018497767538708> Мы приветствуем вас в Kaspersky Lab.! <a:des:854018497767538708>**')
      .setAuthor('⠀⠀⠀⠀⠀⠀⠀⠀Добро пожаловать, коллега!')
    let kembed1 = new Discord.MessageEmbed()
      .setTitle('Давай по порядку...\n')
      .setDescription('**⠀⠀· Чо это и как мне теперь попасть на сервер?**\n\n**Во первых:**  Мы решили обновить дизайн сервера, чтобы он выглядел  красиво и приятно глазу. <a:SPNDANCE:854018462027350016>\n**Во  вторых:**  Теперь на наш сервер могут попасть только самые продвинутые и самые умные *Homo Sapiens* нашего мира... Просто знающие специальный верифицирующий код, который необходимо ввести в этот канал для получения необходимого доступа к нашему серверу... Да, всё так просто!.. Наверное...\n\n**⠀⠀· Откуда мне достать этот \"Верифицирующий код\"?**\n\nМожно замолвить словечко у администратора данного сервера, ||** aka Крейзи,**|| либо же попросить у своего знакомого, который уже  знает его. Способов его получения много, очень много! <a:umri:854018907609890826>\n')
      .setColor('#2f3136')
    let kembed2 = new Discord.MessageEmbed()
      .setColor('#18addb')
      .setTitle('˅˅˅⠀⠀Вводить код необходимо ниже.⠀⠀˅˅˅')
    let channel6 = message.guild.channels.cache.get(staff);
    channel6 .send(kembed);
    channel6.send(kembed1);
    channel6.send(kembed2);
    
};
module.exports.help = {
    name: "AUETATRATA"
};
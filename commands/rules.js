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
    let channel3 = message.guild.channels.cache.get(rules);
    let oembed1 = new Discord.MessageEmbed()
      .setTitle(`1. Основные положения сервера`)
      .setColor(`#5f2cfb`)
    let aembed1 = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setDescription('`1.1` Сервер использует функции "Сообщества", поэтому каждый участник сервера обязуется не нарушать правила Discord: Community Guidelines и Terms of Service. \n`1.2.1` Администрация вправе видоизменять и корректировать правила под своё усмотрение, без упоминания остальных участников сервера. \n`1.2.2` Администрация вправе обходить поставленные ею правила. \n`1.3.1` Находясь на сервере, __каждый__  участник подтверждает о наличии собственных знаний о правилах, установленных на  данном сервере, и его сегментов/подкатегорий. \n`1.3.2`  Находясь на сервере, __каждый__  участник соглашается с тем, что незнание правил не освобождает от ответственности. \n`1.4` Любое поведение участников, которое будет расценено наблюдателями, модерацией и администрацией как неадекватное, будет наказываться в необходимом для них порядке. \n`1.5` Администрация действует в интересах целостности и сохранности сервера. Отсюда следует, что любая попытка участника препятствовать развитию какого-либо сегмента деятельности нашего "Хоммунити", будет оцениваться как нарушение правил __данного__ сообщества, что позволит администраторам наложить на нарушителя ряд ограничений/санкций против него. \n`1.6` Запрещён абуз (злоупотребление правил и обход наказаний) во всех возможных его проявлениях.');
    let oembed2 = new Discord.MessageEmbed()
      .setTitle(`2. Дополнительные положения сервера`)
      .setColor(`#5f2cfb`)
    let aembed2 = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setDescription('`2.1` Нельзя использовать <:a_ni4e_KB:754770662089949315> .')
      .setFooter(`До этого вы получали мут ма некоторое время, теперь перманент (за использование данного эмодзи). Мы вас предупредили, поэтому за последствия ручаться не будем.`);
    let oembed3 = new Discord.MessageEmbed()
      .setTitle(`3. Верификация`)
      .setColor(`#5f2cfb`)
    let aembed3 = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setDescription('`3.1` Каждый верифицирующийся человек, только вступивший на наш сервер, должен провести диалог как минимум с одним из участников административного коллектива (Подразумевается администрация и модерация) \n`3.2` Принятие решения о пропуске/игнорировании определённого человека, пытающегося вступить на наш сервер, осуществляется **только** администрацией и модерацией. \n`3.3.1` Свежий, Уникальный код для пропуска на сервер отныне следует узнавать только у администрации или модерации. Если человек желает верифицировать своего друга на сервере, ему также можно обратиться к администратору или модератору за помощью. \n`3.3.2` Изменение уникального кода происходит по мере увеличения количества входящих на сервер новых участников.');
    let oembed4 = new Discord.MessageEmbed()
      .setTitle(`4. Личные Категории`)
      .setColor(`#5f2cfb`)
    let aembed4 = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setDescription('`4.1` Личные категории выдаются участнику по рассмотрению администрации. \n`4.2` Участники, получившие полный доступ к управлению категории, обладают следующими правами пользователя (по отношению к  __выданной__ категории) : \n \nПросматривать каналы; Управлять каналами; Управлять правами; Управлять вебхумаки; Отправлять  сообщения; Встраивать ссылки; Прикреплять файлы; Добавлять реакции; Использовать внешние эмодзи; Управлять сообщениями; Читать историю сообщений; Отправка сообщений формата tts; Использовать слэш-команды; Подключаться; Говорить ;  Видео; Использовать режим активации по голосу; Отключать участникам микрофон; Отключать участникам  звук; Перемещать участников. \n \n`4.2.1` Все вышеперечисленные права являются ***максимально доступными*** для выдачи какому либо участнику или владельцу категории (Т.е. в данном случае, владелец категории не имеет права выдать себе или своему "коллеге" функцию Упоминания @everyonе и @herе (и других функций, не описанных в 4.2) через доступ к управлению правами категории и каналов).\n`4.2.2` При несоблюдении 4.2.1 у вас будет отобрано большинство полномочий по управлению данной категорией и  каналами, входящих в неё, либо же, при полном отказе владельца соглашаться с установленными условиями, у вас будет отобрана личная категория и роль, выдающая полномочия по управлению данной категории __**без какого-либо рассмотрения**__.\n`4.3` Правила личных каналов не должны конфликтовать с правилами и "фундаментальным основанием сервера"**¹** , выставленными администрацией данного сервера.');
    let fembed1 = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setFooter(`------------------------------------------\nАдмининистрация - @Synesthesia \nМодерация - @Главный директор \nНаблюдатель - @Наблюдатель`)
    let fembed2 = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setFooter(`1 - Установленный порядок распределения каналов, порядок верификации, порядок ролей. \nКаналы должны быть установлены в том порядке, в котором они были изначально установлены; Порядок верификации должен соблюдаться с условием, что человек, не прошедший верификацию, может видеть ТОЛЬКО категорию 'AntiRaid Defender' и ТОЛЬКО канал 'верификация'; Порядок ролей устанавливается по порядку: Боты > Административные роли > Цветовые роли > Роли управления > Дополнительные возможности > Уровневые роли.`)
  channel3.send(oembed1);
  channel3.send(aembed1);
  channel3.send(oembed2);
  channel3.send(aembed2);
  channel3.send(oembed3);
  channel3.send(aembed3);
  channel3.send(oembed4);
  channel3.send(aembed4);
 // message.channel.send(stroka);
  channel3.send(fembed1);
  channel3.send(fembed2);
  channel3.send('Но на самом деле...')
  
};
module.exports.help = {
    name: "RULESAYEBLYAT"
};
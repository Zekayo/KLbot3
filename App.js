const config = require("./config.json");
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const randomPuppy = require ("random-puppy");
const ytdl = require('ytdl-core');
const queue = new Map();
let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'
let ideas = '0'
var pass = 'ауе татары'




bot.on("ready", async () => {
  console.log(`${bot.user.username} activated. I am in ${bot.guilds.size} guilds! Ya happy?`);
  bot.user.setActivity("за твоими файлами.", {type: "WATCHING"});
});


function generatePassword() {
  var length = 50,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}



bot.once("ready", () => {
  console.log("Ready!");
});

bot.once("reconnecting", () => {
  console.log("Reconnecting!");
});

bot.once("disconnect", () => {
  console.log("Disconnect!");
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(prefix+`play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(prefix+`skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(prefix+`stop`)) {
    stop(message, serverQueue);
    return;
  }// else {
//    message.channel.send("You need to enter a valid command!");
//  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.bot);
  if (!message.member.hasPermission("CONNECT") || !message.member.hasPermission("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}











function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




const prefix = "kl!";
bot.on("message", async message => {

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

const user = message.mentions.members.first()
  if (!message.content.startsWith(prefix) || message.author.bot) return;
//  if(message.channel.type === "dm") return;


  let channel45 = message.guild.channels.cache.get(antiraid);
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
  if (message.content === prefix + 'kaptcha') {
        channel45.send(kembed);
        channel45.send(kembed1);
        channel45.send(kembed2);
    };
    
  if(message.content.startsWith(prefix+"poke")){
      message.channel.send('шуе')
      if(!user){ 
      message.channel.send('пошёл нахуй') 
      return;
      }
      message.channel.send('ауе')
      message.channel.send("Mention: "+user.toString());
  }
  if(message.content.startsWith(prefix+'meme')){
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

  if(message.content.startsWith(prefix+'g')){
    const subReddits = ["VALORANT", "apexlegends"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
  
    const img = await randomPuppy(random);
    const gemebed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`From /r/${random}`)
      .setURL(`https://reddit.com/r/${random}`)
      .setFooter("kl!g");
    message.channel.send(gemebed);
  
  };

  if(message.content.startsWith(prefix + 'u')) {
    if(!user){
      message.delete()
      return;
    }
    message.delete();
    message.channel.send(`${user}, умри <:ydal9i_ctrani4ky_KB:775387135330091049>`);  

  };

  if(message.content.startsWith(prefix+'quest')){
    let reportsChannel = message.guild.channels.cache.get(area);
//    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
//    if(!rUser) return message.channel.send("Не выбран пользователь");
    let reason = message.content.split(' ').slice(1).join(' ');
    if(!reason) return reportsChannel.send('пошёл нахуйй');
    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("Жалоба", reason)
    .setColor("#00ffff")
//    .addField("Жалоба на пользователя", ` with ID: `)
//    .addField("Причина", reason)
//    .addField("Жалоба от", `${message.author} with ID: ${message.author.id}`)
//    .addField("Канал", message.channel)
//    .addField("Время", message.createdAt);
    if(!reportsChannel) return message.channel.send("Не найден канал для репортов");
    reportsChannel.send(reportEmbed);
};

  if (message.content === prefix + ' gitlernivchemnevinovat') {
    let channelp1 = message.guild.channels.cache.get(area);
 //   channelp1.startTyping()

    async function gitlernivchemnevinovat(){
      await channelp1.startTyping();
      await sleep(2500); 
      await channelp1.stopTyping(true); 
      await channelp1.send('Здравствуйте, меня зовут Евгений Касперский.');
      await channelp1.startTyping();
      await sleep(4000);
//      await channelp1.stopTyping(true);
//      await channelp1.send('Я один из ведущих мировых специалистов в сфере информационной безопасности.');
//      await channelp1.startTyping();
//      await sleep(4000);
      await channelp1.stopTyping(true);
      await channelp1.send('Являюсь одним из основателей, основным владельцем и нынешним главой «Kaspersky Lab.»');
      await channelp1.startTyping();
      await sleep(2500);
      await channelp1.stopTyping(true);
      await channelp1.send('Я обнаружил на своём сервере вирусное ПО.');
      await channelp1.startTyping();
      await sleep(2500);
      await channelp1.stopTyping(true);
      await channelp1.send('Поэтому я запускаю антивирусную утилиту.');
      await sleep(5000);
      
      let eventembed = new Discord.MessageEmbed()
      let sleep1 = 1500

      await channelp1.send(eventembed.setColor('18addb').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **Запуск**`))
        .then(async msg =>{
          msg.edit(eventembed.setColor('18addb').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **Запуск**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('18addb').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **Запуск**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('18addb').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **Запуск**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('18addb').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **Запуск**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **1%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **1%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **2%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **3%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **4%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **4%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **4%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **6%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **8%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **9%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **10%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **10%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **11%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **11%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **11%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **15%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **16%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **17%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **17%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **18%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **19%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **21%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **21%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **21%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **21%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **23%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **24%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **25%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **25%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **26%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **27%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **27%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **27%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **28%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **28%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **29%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **29%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **29%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **30%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **31%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **31%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▘ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▝ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▗ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удаления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b8aea9').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Процесс удaͥ̉̏ления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#b9aba6').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П͒ͧ̔роцесс удa̓̈̈́ления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#bda19c').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̋͏̘р͂ͥ̅оцесс удa̅͂̚ления: **32%**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#bf9d99').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̈ͪ̃р̾̓̾оцесс удaͣͦ̇ления: **32%̌̃͊**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#c29591').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П͑ͨͬрͦ̄̍оцесс удa̅͂̚ления̄͞: **32%̓͛ͫ**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#ca817e').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П͑ͨͬрͫ̊͆оцес̔ͤ̊с удa̛̗ͨления͖͒͠: **32%̂ͩͬ҉̴̵̢**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#d07571').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̇̍ͬ҉̡̡͢р͒̃̑҉̧́͘оцес͗ͦ̂с удaͫ̆̌҉̴̴̕ления͇̐͜: **32%̽̓̚҉̶̴͞**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#d7615f').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Пͪ̌̓҉̶̢̨рͯ̎ͭ҉̡̨͠оцесͥ̅̏с удaͭ̊̃҉̡̞͡ления͚̌͡: **32%̂ͩͬ҉̴̵̢**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#e24745').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̅́͂҉̴̴͡҉͎̹͓рͦ̒ͪ҉҉͜͏̵оцес̱ͪ͘с удâͣͬ҉̡̼̕ления̴̬ͩ̚͡ͅ: **32%͗͑̚҉̸̢͝**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#e73b39').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ Пͣ̌̂҉̴̶͟рͤ̈́ͧ҉̶͡͡҉͠͞͡҉̵̞̩оцес̫̏͡с удa͆͌ͧ҉̴́͜ления̵̢̦͓̜̇̃́͞: **32%̔͐ͣ҉͢͜͝҉̵̕͠**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#ec2c2b').setTitle('Утилита для удаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̔̋́҉̨̕͘҉̳̲̭рͪ̄ͣ҉̵̵͜оцес̙ͮ͡с удaͪ̄ͣ҉̵͠͡҉̜͇ͅления̧̡̰̫̩̺͑ͬ̊̓͘͜: **32%̉͌̋҉́͘͟҉̸̡́**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#f12221').setTitle('Утилита для удалнения вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̔̋́҉̨̕͘҉̳̲̭р̽ͤ̅҉͟͡͞҉̵̧̀оцес̸̳͒с удåͫ̔҉̶͏͟҉̛̙̣ления̶̰͔̗̬̎̋̽̇͢͜͝: **32%ͫͣ̈҉̡̀̕**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#ff0000').setTitle('Утилита для усдаления вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̅́͂҉̴̴͡҉͎̹͓рͦ̒ͪ҉҉͜͏̵оцесͣ̎͡с удâͣͬ҉̡̼̕ления̧ͬ̆̉͗͜͡҉̹̗̯̮: **32%͗͑̚҉̸̢͝**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#ff0000').setTitle('Утилита для усданения вредоносного ПО').setDescription(`⟨ ▖ ⟩ Пͣ̌̂҉̴̶͟рͤ̈́ͧ҉̶͡͡҉͠͞͡҉̵̞̩оцесͫ̍͠с удa͆͌ͧ҉̴́͜ления̷̛͕͚̲͓̲̂̇ͦ́̈̀͜͠: **32%̔͐ͣ҉͢͜͝҉̵̕͠**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#ff0000').setTitle('Утилита для устанония вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̔̋́҉̨̕͘҉̳̲̭рͪ̄ͣ҉̵̵͜оцес͐͒ͨ҉̢́͝с удaͪ̄ͣ҉̵͠͡҉̜͇ͅления̴̧̧̛̰̜͎̪̖͛͑̊ͪ̔͢: **32%̉͌̋҉́͘͟҉̸̡́**`))
          await sleep(sleep1)
          msg.edit(eventembed.setColor('#ff0000').setTitle('Утилита для установки вредоносного ПО').setDescription(`⟨ ▖ ⟩ П̔̋́҉̨̕͘҉̳̲̭р̽ͤ̅҉͟͡͞҉̵̧̀оцес̄̿͜҉̺͙с удåͫ̔҉̶͏͟҉̛̙̣ления̷̈́̂͆ͬͨͥ͢͟҉̫̭̭̖̲͍́͡: **32%ͫͣ̈҉̡̀̕**`))
          await sleep(7000)
          msg.edit(eventembed.setColor('#90ee90').setTitle('Утилита для установки вредоносного ПО').setDescription(`<:buildiga:854785668780916766> Процесс установки: **Завершено!**`))
          await sleep(1200);
      let channelp1 = message.guild.channels.cache.get(area);
      const embed123 = new Discord.MessageEmbed();
      channelp1.send(embed123.setColor('#90ee90').setTitle(`**Установка завершена!**`));
      await sleep(2000);
      channelp1.send(embed123.setColor('#90ee90').setTitle(`**Сейчас будет произведён перезапуск системы...**`));
          
          






          //#d0434d
          //#18addb
        });
    };
  gitlernivchemnevinovat()
  };

  if(message.content.startsWith(prefix+`OBNOVAHAHUY`)) {
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


});

bot.on('guildMemberAdd', member => {
  //let channel = member.guild.channels.cache.get(antiraid);
  //канал антирейда
  let channel1 = member.guild.channels.cache.get(citadel);
  let channel2 = member.guild.channels.cache.get(passwaords);
  //цитадель
  if (!channel1) return;
  let hembed = new Discord.MessageEmbed()
    .setColor(`#90ee90`)
    .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    .setTitle(`<a:join:854018473088909342> **К нам присоединился новый сотрудник!**`)
    .setDescription(`**· ${member.user.tag}**, приветствуем тебя!`)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter("ᅠKaspersky Lab. ©2077. Все права не защищены",'https://images-ext-1.discordapp.net/external/P6QpGuJccEusLi69MYwbGaszu68ZGqqSQXA9na0qksM/https/cdn.discordapp.com/icons/522667968572686347/309a816d80959b99d29bed1aee9f955f.png');
  channel1.send(hembed);
  pass = generatePassword();
  channel2.send(pass)
//  channel2.send(`${member.username}`)
});



bot.on('guildMemberRemove', member => {
  let chanel1 = member.guild.channels.cache.get(citadel);
//  chanel1.send(`booba`)
//  if (!channel1) return;
  let hembed1 = new Discord.MessageEmbed()
    .setColor(`#d83a2c`)
    .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    .setTitle('<a:leave:854018449083990076> **Этот чел был повешен на третьем этаже!**')
    .setDescription(`**· ${member.user.tag}** был сожжён.`)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter("ᅠKaspersky Lab. ©2077. Все права не защищены",'https://images-ext-1.discordapp.net/external/P6QpGuJccEusLi69MYwbGaszu68ZGqqSQXA9na0qksM/https/cdn.discordapp.com/icons/522667968572686347/309a816d80959b99d29bed1aee9f955f.png');
  chanel1.send(hembed1);

});



bot.on('message', async message => {
  let channel = message.guild.channels.cache.get(antiraid);
  if(message.channel.id === antiraid && !message.author.bot){
    let wordArray = message.content.split(" ")
     console.log(wordArray);
     console.log(`${message.author.username}`);
      let filterWords = pass
      if(wordArray.includes(filterWords)){
        message.delete()
        message.guild.members.cache.get(message.author.id).roles.add('855470025963864065')
        message.guild.members.cache.get(message.author.id).roles.add('855472191118508072')
        message.guild.members.cache.get(message.author.id).roles.add('855472784222584832')
        message.guild.members.cache.get(message.author.id).roles.add('855487764152713247')
      }
      else{
        if(!message.author.bot){
          message.delete()
          let errembed = new Discord.MessageEmbed()
            .setTitle(``)
            .setColor('#e03541')
            .setDescription(`**${message.author.username} ,[ вы неправильно ввели код!](${message.url} "Попробуй ещё раз!")**`);
          channel.send(errembed).then(message => message.delete({timeout:15000}));
//          channel.send(`INVALID!!!!11!!!1!!!!`).then(m => m.delete(25000));
        }
      }
  }
});


bot.on('message', async message => {
	let wordArray = message.content.split(" ")
	console.log(wordArray);

	let filterWords = ['<:a_ni4e_KB:754770662089949315>','нуачё']
//  let reaction = ['умер((']

	for(var i = 0; i < filterWords.length; i++) {
		if(message.content.toUpperCase() == filterWords[i].toUpperCase()){
//      message.channel.send(`леее, умри`);
      message.channel.send('Вы замучены на 9999 лет. <:batya_I_vishnevii_sok_KB:804019024086302781>')
      message.guild.members.cache.get(message.author.id).roles.add('857595414735355944')
      await sleep(180000);
      message.channel.send(`"Вы были замучены - но я вас не мучал, вы были унижены - но я не унижал...". ©️ Касперский\n ||${message.author}, Можешь радоваться... Тебя размутили! Только в следующий раз не вставай на те же грабли,  ладно?||`);
      message.guild.members.cache.get(message.author.id).roles.remove('857595414735355944')
			break;
		}

	}
});


bot.on('message', async message => {

  if(message.content.startsWith(prefix+'pass')){
    let password = generatePassword()
    message.channel.send(password);
  }
});

bot.login(config.token)





//bot.on('message', message => {
//	if(message.member.roles.has("635548384052248597")) return;
//
//	let wordArray = message.content.split(" ")
//	console.log(wordArray);
//
//	let filterWords = ['смус','смус)','смус(','быдло']
//  let reaction = ['умер((','умер((','умер((',, 'блять']
//
//	for(var i = 0; i < filterWords.length; i++) {
//		if(message.content.toUpperCase() == filterWords[i].toUpperCase()){
//			message.channel.send(reaction[i]);
//			break;
//		}
//
//	}
//});
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//let j = 0
//var k=0
//while(j<2){
//  if(k==0){
//    bot.user.setActivity("за твоими файлами", {type: "WATCHING"});
//    k=1
//  }
//  else{
//    bot.user.setActivity(`умри`, {type: "WATCHING"});
//    k=0
//  }
//}

//канал антирейда
//  const canvas = Canvas.createCanvas(1024,1024)
//  const ctx = canvas.getContext('2d')
//  const background = await Canvas.loadImage('./123.jpg')
//  ctx.drawImage(background,0,0,canvas.width,canvas.height)
//  var text1 = `${member.user.username}`
//  var text2 = `${member.user.discriminator}`
//  var text3 = `Участник #${member.guild.memberCount}`
//  var text4 = `${member.guild.name}`
//  if(text1.lenght >= 14){
//    ctx.font = 'bold 100px Sens-Serif'
//    ctx.fillStyle = '#f2f2f2'
//    ctx.fillText(text1,720,canvas.height /2+20)
//  }
//  else{
//    ctx.font = 'bold 150px Sens-Serif'
//    ctx.fillStyle = '#f2f2f2'
//    ctx.fillText(text1,720,canvas.height /2+20)
//  }
//  ctx.font = 'bold 40px Sens-Serif'
//  ctx.fillStyle = '#f2f2f2'
//  ctx.fillText(text2,730,canvas.height /2+58)
//  ctx.font = 'bold 60px Sens-Serif'
//  ctx.fillStyle = '#f2f2f2'
//  ctx.fillText(text3,750,canvas.height /2+135)
//  ctx.font = 'bold 60px Sens-Serif'
//  ctx.fillStyle = '#f2f2f2'
//  ctx.fillText(text4,sleep1,canvas.height /2-150)
//
//  ctx.beginPath()
//  ctx.arc(315, canvas.height / 2,250,0, Math.PI*2,true)
//  ctx.closePath()
//  ctx.clip()
//
//  const avatar = await canvas.loadImage(member.userm,displayAvatarURl({format:'jpg'}))
//  ctx.drawImage(avatar,65, canvas.height / 2 -250, 500, 500)
//  const attachment = new DiscordJS.MessageAttachment(canvas.toBuffer(),'123.png')
//  const welcome = new DiscordJS.MessageEmbed()
//    .setColor('RED')
//    .setTimestamp()
//    .setImage('attachment://123.png')
//    .attachFiles(attachment)
//  channel1.send(welcome)
//
//      await channelp1.send('1')
//        .then(msg => {msg.edit('2')});
//      channelp1.send('библо')
//      await sleep(sleep1);
//      await message.channelp1.edit('нахуй')
//        .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
//        .catch(console.error);
//      let msg1 = channelp1.send(eventembed.setColor('#b8aea9').setAuthor('Утилита для удаления вирусного ПО').setTitle(`Запуск!`));
//      msg1.edit(eventembed.setColor('#b8aea9').setAuthor('Утилита для удаления вирусного ПО').setTitle(`Ход удаления: 1%`))
//      channelp1.send(eventembed.setColor('#b8aea9').setAuthor('Утилита для удаления вирусного ПО').setTitle(`Запуск!`))
//        .then(async msg => {
//          await sleep(2000);
//          msg.edit('New, edited text');
//        });
//
//    setTimeout(async function () {
//      channelp1.startTyping();
//     channelp1.stopTyping();
//    }, sleep10);
//
//    channelp.send('Я один из ведущих мировых специалистов в сфере информационной безопасности.');
//    channelp.send('Один из основателей, основной владелец и нынешний глава «Kaspersky Lab.»');
//    channelp.send('Я обнаружил на своём сервере вирусное ПО.');
//    channelp.send('Поэтому я запускаю антивирусную утилиту.');

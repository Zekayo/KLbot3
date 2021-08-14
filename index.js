const Discord = require('discord.js')
const fs = require('fs') // подключаем fs к файлу
const bot = new Discord.Client({disableEveryone: true});
const config = require ('./config.json')
const fetch = require('node-fetch')
bot.commands = new Discord.Collection() // создаём коллекцию для команд
const randomPuppy = require ("random-puppy");
const queue = new Map();
const ytdl = require('ytdl-core');
const disbut = require("discord-buttons");
const prefix = config.prefix

let citadel = '855484605418831882'
let antiraid = '855509676073156608'
let area = '540118822116392981'
let passwaords = '860552307359088662'
let rules = '855484368805560330'
let staff = '855504941728006195'
let ideas = '0'
var pass = 'ауе татары'

disbut(bot)


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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



fs.readdir('./commands', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('Команды не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props)
    })
})

bot.on('ready', () => {
    console.log(`Бот ${bot.user.username} запустился`);
})

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let messageArray = message.content.split(' ') // разделение пробелами
    let command = messageArray[0] // команда после префикса
    let args = messageArray.slice(1) // аргументы после команды

    let citadel = '855484605418831882'
    let antiraid = '855509676073156608'
    let area = '540118822116392981'
    let passwaords = '860552307359088662'
    let rules = '855484368805560330'
    let staff = '855504941728006195'
    let ideas = '0'
    var pass = 'ауе татары'






    let command_file = bot.commands.get(command.slice(prefix.length)) // получение команды из коллекции
    if (command_file) command_file.run(bot, message, args)
})



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

	let filterWords = ['<:Ohuet_spasibo_papasha_KB:866818152755363850>']
//  let reaction = ['умер((']

	for(var i = 0; i < filterWords.length; i++) {
		if(message.content.toLowerCase().includes(filterWords[i].toLowerCase())){
//      message.channel.send(`леее, умри`);
      message.channel.send('Вы замучены на 9999 лет. <:batya_I_vishnevii_sok_KB:804019024086302781>')
      message.guild.members.cache.get(message.author.id).roles.add('857595414735355944')
      await sleep(1800000);
      message.channel.send(`"Вы были замучены - но я вас не мучал, вы были унижены - но я не унижал...". ©️ Касперский\n ||${message.author}, Можешь радоваться... Тебя размутили! Только в следующий раз не вставай на те же грабли,  ладно?||`);
      message.guild.members.cache.get(message.author.id).roles.remove('857595414735355944')
			break;
		}

	}
});


bot.on('message', async message =>{
  if(message.content.startsWith(prefix+'gitler')){
    const btn1 = new disbut.MessageButton()
      .setStyle('green')
      .setLabel('🔑')
      .setID('click_to_function')
      .setDisabled(false);
    const btn2 = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('❌')
      .setID('click_to_function2')
      .setDisabled(false);
    let channel1 = message.guild.channels.cache.get('867416270005207040');
    const archive2 = new Discord.MessageEmbed()
      .setTitle('Архив 📚')
      .setDescription("Для того, чтобы получить доступ к архиву каналов, необходимо нажать на кнопку ниже")

  let row1 = new disbut.MessageActionRow()
    .addComponents(btn1, btn2);


    channel1.send(archive2,{component: row1})
  }
});
bot.on('clickButton', async (button) =>{
  if(button.id == "click_to_function"){
//    await button.reply.defer();
    button.reply.send('Теперь ты можешь просматривать архив!',{ephemeral: true});
    button.guild.members.cache.get(button.clicker.user.id).roles.add('853659473464655893')
  }
    if(button.id == "click_to_function2"){
//    await button.reply.defer();
    button.reply.send('Ты больше не можешь просматривать архив!',{ephemeral: true});
    button.guild.members.cache.get(button.clicker.user.id).roles.remove('853659473464655893')
  }
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


bot.login(config.token)

//bot.on('message', message =>{
//    if (!message.content.startsWith(prefix) || message.author.bot) return;
//    let messageArray = message.content.split(' ') // разделение пробелами
//    let command = messageArray[0] // команда после префикса
//    let args = messageArray.slice(1) // аргументы после команды
//    if(message.content.startsWith(prefix+'quest')){
//        let reason = args.join(" ");
//        k+=1;
//  		let reportEmbed = new Discord.MessageEmbed()
// 		.setDescription(`Идея ${message.author} #${k}`)
//		.setColor("#00ffff")
//  		.addField("Предложение", reason)
//  		.addField("Время", message.createdAt);
//        let reportsChannel = message.guild.channels.cache.get(staff);
//  		if(!reportsChannel) return message.channel.send("Не найден канал для репортов");
//        reportsChannel.send(reportEmbed)
//    };
//
//
//    let wordArray = message.content.split(" ")
//	console.log(wordArray);
//
//	let filterWords = [`${message.last.id()}`]
//  let reaction = ['умер((']
//    if(message.author.has.role('855471535069593610')){
//        for(var i = 0; i < filterWords.length; i++) {
//            if(message.content.toUpperCase() == filterWords[i].toUpperCase()){
//
//                break;
//            }
//
//        }
//    }
//
//
//});

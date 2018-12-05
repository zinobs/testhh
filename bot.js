const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');


antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "*** بطل سبام ***", // رسالة تحذير اذا سوا سبام!
  roleMessage: "***مبروك على الميوت يا بتاع السبام***", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية
});



client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`:rose:  ولكم نورت السيرفر :rose:
        :crown: اسم العضو  ${member}:crown:  
        انت العضو رقم ${member.guild.memberCount} `)
    }).catch(console.error)
})




client.on('message', message => {
    var prefix = "Z";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`This User Is Have High Role !`);
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




client.on('message', msg => {

    if (msg.content == 'Zjoin') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("519871247593504818").join(); //by : Toxic Codes
    });






client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "mirage");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})




client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('Zbc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );  //7md
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Zinoo";
    let request = `Requested By ${message.author.username}`;  //7md
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))  //7md
    .then(() =>msg.react('✅'))  //7md



    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });  //7md
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });  //7md
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));  //7md
    message.guild.members.forEach(m => {
    var bc = new  
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)  //7md
       .addField('الرساله', args)  //7md
       .setThumbnail(message.author.avatarURL)  //7md
       .setFooter(copy, client.user.avatarURL); //7md
    m.send({ embed: bc })
    msg.delete();  //7md
    })
    })
    reaction2.on("collect", r => {  //7md
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));   //7md
    msg.delete();  //7md  
    })  //7md
    }) //7md
    }  //7md
    }) //7md




client.login(process.env.BOT_TOKEN)

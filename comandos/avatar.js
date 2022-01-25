const Discord = require("discord.js"); const {client, MessageEmbed}= require('discord.js');
module.exports = {
name : "avatar", alias: ["av"], usage: "s!avatar", ejemplo: "s! avatar", categoria: "Utilidad", description: "No tiene", desarollador: "No", nsfw: "No", mantenimiento: "No",
async execute(client, message, args, Language) {
if(!message.guild.me.permissions.has("SEND_MESSAGES")) {
return;
if(!message.guild.me.permissions.has("USE_EXTERNAL_EMOJIS"){
return message.channel.send(client.languages. mf({phrase: 'avatar.nomeExternalEmojis, locale: language}))
if(!message.channel.permissionsfor(message.guild.me).has("SEND_MESSAGES")) return;
if(!message.channel.permissionsfor(message.guild.me) has("USE_EXTERNAL_EMOJIS")) return message.reply(client.languages._mf({phrase:'avatar.nomeExternalEmojis', locale: language})) try
let miembro = message.mentions.users.first() I args[@] message.author, const memver = await client.users.fetch(miembro), if(!memver.avatar return message.reply(client.languages. _mf({phrase: 'avatar.noAvatar', locale: language})) const row = new Discord.MessageActionRow, .addComponents([
new Discord.MessageButton() .setLabel(client.languages. __mf({phrase: "avatar.Avatar', locale: language} , .setStyle("LINK") .setURL(memver.avatarURL()) ])
const peo= memver.displayAvatarURL({dynamic: true, size : 4096 }); message.channel.send({content: client.languages. __mf({phrase: 'avatar.msgContent', locale: language} , {username: memver.tag} ), files: [peo] , components: [row]})!
catch(err) { message.reply(client.languages._mf({phrase: 'avatar.errCatch', locale: language} >> console.log(err) return;
 

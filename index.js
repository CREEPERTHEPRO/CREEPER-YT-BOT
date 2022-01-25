const express = require('express');
const app = express();
const port = 3000;
app.get("/", function (request, response) {
response.sendFile(__dirname + '/Pagina.html');});
app.listen(port, () => console.log(`Iniciando El Bot...`));
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log(`El Bot Fue Inciado Como: ${client.user.tag}!`);
client.user.setPresence( {

activity: {name: 'By Creeper And -help',
type: "PLAYING"},
status:"online"});})
client.setMaxListeners (200)

//Codigos de regalo :D

//hola creeperyt
client.on('message', msg => {
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("hola creeperyt")) {
    msg.reply('Hola :D Soy El Bot De Creeper De Vez En Cuando Estare En Mmantenimiento Pero Por Ahora No Hay Ninguno')
  }});




//Preguntale: ¿oye sabes mi nombre?
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("oye sabes mi nombre") ) {
    msg.channel.send(` Si!! Te Llamas${msg.author} :D`)
  }});

const mySecret = process.env['TOKEN']
client.login(mySecret)                           

client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("creeperyt como estas") ) {
    msg.channel.send(`BIEN LA VERDAD MUY BIEN :D`)
  }});

client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("comandos m") ) {
    msg.channel.send(`-p play -s stop -pause -resume`)
  }});


client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("quien es el amigo favorito de creeper") ) {
    msg.channel.send(`DONCREX :D`)
  }});


 
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("comandos creeperyt") ) {
    msg.channel.send(`https://sites.google.com/view/creeperyt-official-comandos/p%C3%A1gina-principal`)
  }});

client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("dame un chocolistopls") ) {
    msg.channel.send(`*LE DA UN CHOCOLISTO* :D`)
  }});

  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("cuantos subs tiene creeper") ) {
    msg.channel.send(`17 por ahora`)
  }});
  
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("creeperyt es mi cumpleaños") ) {
    msg.channel.send(`FELIZ CUMPLEAÑOS${msg.author} :D`)
  }});

  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("que pajero") ) {
    msg.channel.send(`https://youtu.be/-uI9XNDle7s`)
  }});

  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("felicidades te humillaste solito") ) {
    msg.channel.send(`https://youtu.be/mA5Rtepub4c`)
  }});


  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("por dios se me callo el mouse weon") ) {
    msg.channel.send(`https://youtu.be/WYBz6Mrl9LY`)
  }});


  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("no estuvo tan mal meme") ) {
    msg.channel.send(`https://youtu.be/wS75gwSUtQc`)
  }});
  
  
  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("2410") ) {
    msg.channel.send(`https://youtu.be/6knFLrLofzk`)
  }});

  client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("4417") ) {
    msg.channel.send(`https://youtu.be/m6WjZn9sofY`)
  }});
 
 client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("3444") ) {
    msg.channel.send(`HOLA!! SOY CREEPERYT OFFICIAL AQUI PODRAS OBTENER EL ROL EQUIPO CREEPER :D`)
  }});

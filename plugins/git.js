const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/qdkhgpq.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*SPIRIT SER bot created by SPIRIT *
*Creator number : wa.me/18052196558?text=Hi%20splrlt%20ser.%20*

*subscribe  my channel  : https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA*

*Githublink (Setup)  :    https://github.com/SPlRlT-YT/Spirit-ser*

*Audio commads :   https://github.com/SPlRlT-YT/Spirit-ser/tree/master/uploads*

*Sticker commads : https://github.com/SPlRlT-YT/Spirit-ser/tree/master/sticker*

*My channel : https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, makeInMemoryStore, jidNormalizedUser, delay } = require('@whiskeysockets/baileys')
const { TelegraPh, UploadFileUgu } = require('./lib/uploader') 
const pino = require('pino') 
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const moment = require('moment-timezone')
const cheerio = require('cheerio') 
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
module.exports = conn = async (conn, m, chatUpdate, store) => {
   try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "Unkown Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        //const isCreator = global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime) 
        const uptime = await runtime(process.uptime())
        if(prefix === '') return
        
        let centang_hijau_text = "Beltok Project" //teks nya
    let fake = {"key":{"remoteJid":"status@broadcast","fromMe":false,"id":"746BC57B8A465F99448680DB8B7BA4C31"},"message":{"extendedTextMessage":{"text":centang_hijau_text,"contextInfo":{}}},"participant":"0@s.whatsapp.net"}
    
    switch(command) {
    	case 's': {
    conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key }}) 
           if (/image/.test(mime)) {
                let media = await conn.downloadMediaMessage(qmsg)
                conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }}) 
                let encmedia = await conn.sendImageAsSticker(m.chat, media, fake, { packname: global.packname, author: global.author, mentions: [m.sender] })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if (qmsg.seconds > 11) return conn.sendMessage(m.chat, { text: `[!] Maksimal durasi adalah 11 detik!`, mentions: [m.sender] }, { quoted: fake })
                let media = await conn.downloadMediaMessage(qmsg)
                conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }}) 
                let encmedia = await conn.sendVideoAsSticker(m.chat, media, fake, { packname: global.packname, author: global.author, mentions: [m.sender] })
                await fs.unlinkSync(encmedia)
            } else {
    	await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }}) 
                conn.sendMessage(m.chat, { text: `[!] Reply gambar/video dengan caption ${prefix+command}`, mentions: [m.sender] }, { quoted: fake })
                }
            }
            break
            case 'smeme': {
            	let respond = `[!] Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime) || !text) {
		await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }}) 
return conn.sendMessage(m.chat, { text: respond, mentions: [m.sender] }, { quoted: fake }) 
}
	        conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key }}) 
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let media = await conn.downloadAndSaveMediaMessage(qmsg) 
	        let anu = await UploadFileUgu(media) 
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${anu.url}`
	conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }}) 
	conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }}) 
	       let encmedia = await conn.sendImageAsSticker(m.chat,smeme,fake,{ packname: global.packname,author: global.author, mentions: [m.sender] }, { quoted: fake })
	        await fs.unlinkSync(encmedia)
	await fs.unlinkSync(media)
            }
            break
    }
         } catch (err) {
        console.log(err) 
    }
   }
   
         let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update File ${__filename}`))
	delete require.cache[file]
	require(file)
})

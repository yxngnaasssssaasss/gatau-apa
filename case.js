const elxyz = 'KC-b5ded460c38d0f0d';
const gurubot = 'https://www.guruapi.tech/api'
const simsimi = require('chats-simsimi');
const axios = require("axios");
module.exports = async (bot, from, m, type, text, command, args) => {
  console.log(command);
async function simi(teks) {
  await simsimi(teks, 'id').then(response => {
    try {
      const simih = response.result
      anjay(simih)
    } catch(err) {console.log(err); react("🫨")}
  })
}
async function anjay(text) {const aa = await bot.sendMessage(from, {text: text}, {quoted: m});}
async function sendVid(url, capt) {const gg = await bot.sendMessage(from, { video: { url: url }, caption: capt})}
async function replyImg(url, capt) {const ff = await bot.sendMessage(from, { image: { url: url }, caption: capt}, {quoted: m})}
async function sendImg(url, capt) {const gg = await bot.sendMessage(from, { image: { url: url }, caption: capt})}
// async function tiktoks(query) {
  // return new Promise(async (resolve, reject) => {
    // try {
      // const response = await axios({
        // method: 'POST',
        // url: 'https://tikwm.com/api/feed/search',
        // headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          // 'Cookie': 'current_language=en',
          // 'User-Agent': 'Mozilla/5.0 (Linux Android 10 K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        // },
        // data: {
          // keywords: query,
          // count: 10,
          // cursor: 0,
          // HD: 1
        // }
      // });
      // const videos = response.data.data.videos;
      // if (videos.length === 0) {
        // reject("Tidak ada video ditemukan.");
      // } else {
        // const tts = Math.floor(Math.random() * videos.length);
        // const videorndm = videos[tts];
        // console.log(videorndm)
        // const result = {
          // author: videorndm.author, // Mengambil properti author dari videorndm
          // title: videorndm.title,
          // cover: videorndm.cover,
          // origin_cover: videorndm.origin_cover,
          // no_watermark: videorndm.play,
          // watermark: videorndm.wmplay,
          // music: videorndm.music
        // };
        // resolve(result);
      // }
    // } catch (error) {
      // reject(error);
    // }
  // });
// }

// Cara memanggil fungsi tiktoks
// (async () => {
  // try {
    // const result = await tiktoks('fyp');
    // console.log(result);
    // gg = `${result.title}`
    // yy = `${result.no_watermark}`
    // sendVid(yy, 'haha')
    // anjay(`${gg}`)

  // } catch (error) {
    // console.error(error);
  // }
// })();
async function gpt(teks) {
  await fetchJson(`https://aemt.me/openai?text=${teks}`).then(response => {
    try {
      const openai = response.result
      anjay(openai)
    } catch(err) {console.log(err); anjay("`Unavailable`")}
  })
}
async function tt(teks) {
  await fetchJson(`https://andzapis.vercel.app/api/downloader/tiktok?url=${teks}`).then(response => {
    try {
      // const openai = response.result.nowm
      console.log (response,'🙏🏻🙏🏻🙏🏻🙏🏻')
      // sendVid(openai, 'hh')
    } catch(err) {console.log(err); anjay("`Unavailable`")}
  })
}
async function textToAnime(text) {
  anjay("`sabar bos...`")
  res = await (await fetch(`https://api.elxyz.me/ai/texttoanime?apikey=${elxyz}&prompt=${text}`)).json()
  console.log(res) 
  url = `${res.result.imageUrl}`
  capt = 'mantap'
  console.log(url)
  replyImg(url, capt)
}
fetchJson = async (url, options) => { try{ options = options || {}; const res = await axios({ method: 'GET', url: url, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36' }, ...options }); return res.data } catch(err) { console.log(err) } }
function rmv(text) {return text.split(' ').slice(1).join(' ');}
switch(command) {
case "menu":
    const xmenu = `
    cuma 4 doang sayang
.simi
.ai
.anime
.download media ig
`
    anjay(xmenu)
  break;
case 'kontol': 
    anjay('gapapa')
break;
case 'pixiv':case 'pix':
    const aemt = 'https://aemt.me/',
     if(teks === '') return reply(`*Example*:\n${prefix + command} tobrut`)
    try {
      const pixiv = await (await fetch(`${aemt}pixiv?query=${encodeURIComponent(teks)}`)).json();
      const respix = shuffle(pixiv.result.slice(0, 1));
      respix.forEach((result, index) => {
        replyImg(result.urls.regular, result.title)
      });
    }catch(err) {console.log(err);reply('⚠️server error')}
  break;
case "simi":
    teks = rmv(text)
    console.log("send to simi: ", teks)
    if(teks === "") {simi(`simi`)}else {simi(teks)}
  break;
case 'anime':
    teks = rmv(text)
    if(teks === "") return anjay(`*Example:* gadis berkulit hitam menggunakan seragam sekolah, dengan tangan di ikat ke belakang`)
    textToAnime(text)
break;
case "ai":
  case "gpt":
  case "openai":
    teks = rmv(text)
    if(teks === '') return anjay('kasih perintah ke ai lah bos')
    gpt(teks)
  break;
  case "ig":
  teks = rmv(text)
  try {
    res = await fetch(`${gurubot}/igdlv1?url=${teks}`)
  } catch (error) {
    throw `An error occurred: `
  }

  let api_response = await res.json()
  const mediaArray = api_response.data

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download

    let cap = `ini video nya tuan 😁 ${mediaType.toUpperCase()} >,<`

    if (mediaType === 'video') {
      sendVid(mediaURL, cap)
    } else if (mediaType === 'image') {
      
      sendImg(mediaURL, cap)
    }
  }
  break;
  case "tt":
    teks = rmv(text)
    tt(teks)
  break;
  
}
};
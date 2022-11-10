
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `✳️ *Masukkan judul lagu*\n\n📌Contoh *${usedPrefix + command}* Indahkah Perbedaan `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '✳️ Video/Audio tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  
m.react('🎧')
 await conn.sendButton(m.chat, `
  ≡ *FG MUSIC*
┌──────────────
▢ 📌 *Titel* : ${title}
▢ 📆 *Diterbitkan:* ${publishedTime}
▢ ⌚ *Durasi:* ${durationH}
▢ 👀 *Dilihat:* ${viewH}
└──────────────
  `.trim(), igfg, thumbnail, [
    ['🎶 MP3', `${usedPrefix}fgmp3 ${url} yes`],
    ['🎥 MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid'] 

export default handler


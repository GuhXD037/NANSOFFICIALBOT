
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `β³οΈ *Masukkan judul lagu*\n\nπContoh *${usedPrefix + command}* Indahkah Perbedaan `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'β³οΈ Video/Audio tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  
m.react('π§')
 await conn.sendButton(m.chat, `
  β‘ *FG MUSIC*
βββββββββββββββ
β’ π *Titel* : ${title}
β’ π *Diterbitkan:* ${publishedTime}
β’ β *Durasi:* ${durationH}
β’ π *Dilihat:* ${viewH}
βββββββββββββββ
  `.trim(), igfg, thumbnail, [
    ['πΆ MP3', `${usedPrefix}fgmp3 ${url} yes`],
    ['π₯ MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid'] 

export default handler



import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `ā³ļø Masukkan gambar yang ingin Anda cari \n\nš Contoh: *${usedPrefix + command}* Billie Eilish`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw 'ā Gambar tidak ditemukan coba yang lain'
  conn.sendFile(m.chat, url, 'img.png', `
ā Hasil dari : *${text}*

ā£ *Lebar*: ${width}
ā£ *Tinggi*: ${height}
`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}



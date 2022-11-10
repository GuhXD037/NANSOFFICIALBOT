
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ Masukkan judul lagu\n\n*📌 Contoh*\n*${usedPrefix + command}* Indahkah Perbedaan `
    m.react('📀')
    let result = await youtubeSearch(text)
    let ytres = result.video
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url} yes`, `▢ ⌚ *Durasi:* ${v.durationH}\n▢ 👀 *Dilihat:* ${v.view}\n▢ 📌 *Titel* : ${v.title}\n▢ 📆 *Diterbitkan:* ${v.publishedTime}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url} yes`, `▢ ⌚ *Durasi:* ${v.durationH}\n▢ 👀 *Dilihat:* ${v.view}\n▢ 📌 *Titel* : ${v.title}\n▢ 📆 *Diterbitkan:* ${v.publishedTime}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *FG MUSIC*🔎', `\n 📀 Berikut adalah daftar hasil dari :\n *${text}*`, igfg, `Klik Disini`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler

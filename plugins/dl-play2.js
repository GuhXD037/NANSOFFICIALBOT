
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `ā³ļø Masukkan judul lagu\n\n*š Contoh*\n*${usedPrefix + command}* Indahkah Perbedaan `
    m.react('š')
    let result = await youtubeSearch(text)
    let ytres = result.video
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}ā ${v.title}`, [
          ['š¶ MP3', `${usedPrefix}fgmp3 ${v.url} yes`, `ā¢ ā *Durasi:* ${v.durationH}\nā¢ š *Dilihat:* ${v.view}\nā¢ š *Titel* : ${v.title}\nā¢ š *Diterbitkan:* ${v.publishedTime}\n`],
          ['š„ MP4', `${usedPrefix}fgmp4 ${v.url} yes`, `ā¢ ā *Durasi:* ${v.durationH}\nā¢ š *Dilihat:* ${v.view}\nā¢ š *Titel* : ${v.title}\nā¢ š *Diterbitkan:* ${v.publishedTime}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ā” *FG MUSIC*š', `\n š Berikut adalah daftar hasil dari :\n *${text}*`, igfg, `Klik Disini`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler

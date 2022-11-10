
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Masukkan tautan Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vt.tiktok.com/ZSR7TGW1b/`
if (!args[0].match(/tiktok/gi)) throw `❎ Verifikasi bahwa tautan tersebut berasal dari TikTok`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Nama pengguna :* ${p.author}
▢ *Deskripsi :* ${p.title}
└───────────`
    conn.sendButton(m.chat, te, igfg, p.nowm, [['⎘ Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['♫ Audio', `${usedPrefix}tomp3`]], m)
    m.react(done)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Kesalahan mengunduh video'
    conn.sendButton(m.chat, `
┌─⊷ TIKTOK
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Deskripsi:* ${description}` : ''}
└───────────`, igfg, url, [['♫ Audio', `${usedPrefix}tomp3`]], m)
m.react(done)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler

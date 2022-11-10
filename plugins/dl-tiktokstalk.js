
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ Masukkan Nama Pengguna pengguna TikTok`
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖Nama:* ${res.name}
▢ *🔖Nama pengguna:* ${res.username}
▢ *👥Pengikut:* ${res.followers}
▢ *🫂Berikut:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler

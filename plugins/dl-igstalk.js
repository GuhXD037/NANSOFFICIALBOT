
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Masukkan Nama Pengguna Instagram\n\n📌Contoh: ${usedPrefix + command} nans_official.id` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Nama:* ${res.name} 
▢ *🔖Nama pengguna:* ${res.username}
▢ *👥Pengikut:* ${res.followersH}
▢ *🫂Berikut:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posting:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `ā³ļø Masukkan nomor yang ingin Anda kirimi undangan grup\n\nš Contoh :\n*${usedPrefix + command}* 6285880029379`
if (text.includes('+')) throw  `ā³ļø Masukkan nomor semua bersama-sama tanpa *+*`
if (isNaN(text)) throw ' š Masukkan hanya angka plus kode negara Anda tanpa spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `ā” *UNDANGAN GRUP*\n\nSeorang pengguna mengundang Anda untuk bergabung dengan grup ini \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`ā Tautan undangan dikirim ke pengguna`) 

}
handler.help = ['invite <628xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler

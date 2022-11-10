
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Menandai atau menyebut seseorang\n\n📌 Contoh : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Pengguna tidak dapat menemukan di database saya`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Pengguna Diperingatkan* ⚠️

▢ *Admin:* ${name}
▢ *Pengguna:* @${who.split`@`[0]}
▢ *Memperingatkan:* ${warn + 1}/${war}
▢ *Alasan:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *PERINGATAN* ⚠️
Anda menerima peringatan dari admin

▢ *Memperingatkan:* ${warn + 1}/${war} 
Si recibes *${war}* peringatan Anda akan secara otomatis dihapus dari grup', who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Oleh karena itu, peringatan *${war}* pengguna akan dihapus`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Anda telah dihapus dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* veces`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

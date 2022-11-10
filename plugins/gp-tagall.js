let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Group : *${groupMetadata.subject}*\n▢ Tungkai : *${participants.length}*${text ? `\n▢ Pesan : ${text}\n` : ''}\n┌───⊷ *MENYEBUTKAN*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ 𝙉𝘼𝙉𝙎 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler

import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *LEVEL*
▢ Nama : *${name}*
▢ Tingkat : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
▢ Pangkat : *${user.role}*
└──────────────

Anda hilang *${max - user.exp}* de *XP* Untuk naik level
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
    	user.role = global.rpg.role(user.level).name
        let teks = `Bien hecho ${conn.getName(m.sender)} Nivel:`
        let str = `
┌─⊷ *LEVEL UP*
▢ Level sebelumnya : *${before}*
▢ Level saat ini : *${user.level}*
▢ Pangkat : *${user.role}*
└──────────────

*_Cuanto más interactúes con los bots, mayor será tu nivel_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['econ']
handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler

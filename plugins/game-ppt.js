//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Pilih batu/kertas/gunting\n\nContoh : *${usedPrefix + command}* papel\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Ikat*\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\n🎁 Poin (±)100 XP`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Won* 🎊\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Hilang*\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\n Poin *-${poin} XP*`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Won* 🎊\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Hilang*\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\nPoin *-${poin} XP*`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Won* 🎊\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Hilang*\n\n‣ Tú : ${text}\n‣ Nans-Xyz : ${astro}\n\nPoin *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <piedra/papel/tijera>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler

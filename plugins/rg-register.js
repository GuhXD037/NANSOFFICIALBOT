//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Anda sudah terdaftar\n\nApakah Anda ingin mendaftar ulang?\n\n 📌 Gunakan perintah ini untuk menghapus rekaman Anda \n*${usedPrefix}unreg* <Nomor Seri>`
  if (!Reg.test(text)) throw `⚠️ Format salah\n\n ✳️ Menggunakan comamdo: *${usedPrefix + command} nombre.edad*\n📌Contoh : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Nama tidak boleh kosong'
  if (!age) throw '✳️ Usia tidak bisa kosong'
  if (name.length >= 30) throw '✳️ Namanya terlalu panjang' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow kakek mau main bot'
  if (age < 5) throw '🚼  Ada kakek bayi JSJSJ '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *TERDAFTAR* 」─
▢ *Nama:* ${name}
▢ *Umur* : ${age} Tahun
▢ *Nomor seri* :
${sn}
└──────────────

 *${usedPrefix}help* untuk melihat Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler


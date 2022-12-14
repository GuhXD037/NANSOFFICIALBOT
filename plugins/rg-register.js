//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `β³οΈ Anda sudah terdaftar\n\nApakah Anda ingin mendaftar ulang?\n\n π Gunakan perintah ini untuk menghapus rekaman Anda \n*${usedPrefix}unreg* <Nomor Seri>`
  if (!Reg.test(text)) throw `β οΈ Format salah\n\n β³οΈ Menggunakan comamdo: *${usedPrefix + command} nombre.edad*\nπContoh : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'β³οΈ Nama tidak boleh kosong'
  if (!age) throw 'β³οΈ Usia tidak bisa kosong'
  if (name.length >= 30) throw 'β³οΈ Namanya terlalu panjang' 
  age = parseInt(age)
  if (age > 100) throw 'π΄π» Wow kakek mau main bot'
  if (age < 5) throw 'πΌ  Ada kakek bayi JSJSJ '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
ββγ *TERDAFTAR* γβ
β’ *Nama:* ${name}
β’ *Umur* : ${age} Tahun
β’ *Nomor seri* :
${sn}
βββββββββββββββ

 *${usedPrefix}help* untuk melihat Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler


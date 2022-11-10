
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) throw conn.sendButton(m.chat, `*Mengundang bot ke grup*\n\nHola @${m.sender.split('@')[0]}\nAnda dapat menyewa bot untuk bergabung dengan group\n\n_lebih info klik pada kancing_'.trim(), igfg, null, [
       ['Alquilar', `${usedPrefix}buyprem`]] , m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Mengirim link Grup\n\n 📌 Contoh:\n *${usedPrefix + command}* <linkwa> <dias>\n\n_Jumlahnya adalah hari bot akan berada di grup_` 
  if (!code) throw `✳️ Tautan tidak valid`
  if (!args[1]) throw `📌 Jumlah hari hilang\n\n Contoh:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `✳️ Hanya angka, yang mewakili hari-hari bot akan berada di grup!`
  let owbot = global.owner[1] 
  m.reply(`😎 Tunggu 3 detik, saya akan bergabung dengan grup`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ Saya berhasil bergabung dengan grup \n\n≡ Info grup \n\n *Nama :* ${await conn.getName(res)}\n\nBot akan secara otomatis keluar setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `🏮 Halo shavales

@${owbot} adalah pencipta saya jika Anda memiliki pertanyaan
fui invitado por *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `Layak untuk semua bersantai. 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\n@${m.sender.split('@')[0]} ha invitado a *${conn.user.name}* al grupo\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Tautan : ${args[0]}\n\nBot akan secara otomatis keluar setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\n@${m.sender.split('@')[0]} ha invitado a *${conn.user.name}* al grupo\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Enlace : ${args[0]}\n\nEl bot saldrá automáticamente después de\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️ Berhasil mengundang bot ke grup\n\n${await conn.getName(res)}\n\nEl bot saldrá secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hola a todos 👋🏻
     
*${conn.user.name}* adalah salah satu bot multi-perangkat WhatsApp yang dibangun dengan Node.js, *${conn.user.name}* Baru saja diundang oleh *${m.name}*

untuk melihat jenis Menu Bot

${usedPrefix}help
@${conn.user.jid.split('@')[0]} akan secara otomatis keluar setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.sendButton(res, mes, igfg, null, [[`✆ Owner`, `${usedPrefix}fgowner`], [`⦙☰ Menu`, `${usedPrefix}help`]], m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ Lo siento, el bot no puede unirse a grupos`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Días*\n ', h, ' *Horas*\n ', m, ' *Minutos*\n ', s, ' *Segundos* '].map(v => v.toString().padStart(2, 0)).join('')
}

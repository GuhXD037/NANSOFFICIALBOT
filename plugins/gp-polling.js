
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `ā³ļø Teks yang hilang untuk survei \n\nš Contoh : \n*${usedPrefix + command}* Mensaje  |nans|xd`
if (!text.includes('|')) throw  `ā³ļø Pisahkan survei dengan *|* \n\nš Contoh : \n*${usedPrefix + command}* Survei Saya|n  |como|xd|vale`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `š *Survei diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <hola|como|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler

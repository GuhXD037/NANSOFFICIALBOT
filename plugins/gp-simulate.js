
let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

if (!event) return await m.reply(`
┌─⊷ *PERISTIWA*
▢ Selamat datang 
▢ Selamat jalan
▢ Mempromosikan
▢ menghina
└───────────

📌 Contoh :

*${usedPrefix + command}* bienvenida @user
`) 

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`✅ Simulasi ${event}...`)
switch (event.toLowerCase()) {
        case 'add':
        case 'bienvenida':
        case 'invite':
        case 'welcome':
           act = 'add'
         break 
        case 'bye':
        case 'despedida':
        case 'leave':
        case 'remove':
         act = 'remove'
        break
case 'promote':
  case 'promover':
act = 'promote'
break
case 'demote':
 case 'degradar':
act = 'demote'
break
default:
throw 'Lista Eventos: Bienvenida , Despedida, delete, promover, degradar'
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})}
handler.help = ['simular <event> @mention']
handler.tags = ['group']
handler.command = ['simular', 'simulate'] 
handler.admin = true
handler.group = true

export default handler

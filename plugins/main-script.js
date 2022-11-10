import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT*

▢ Script : wa.me/6285880029379 
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
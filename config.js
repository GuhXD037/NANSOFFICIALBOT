import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283171691334', '『WB』Akeno ㋡', true],
  ['6283171691334']
] //Numeros de owner 

global.mods = ['6283171691334'] 
global.prems = ['6283171691334','6283171691334']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  males: 'https://malesin.xyz', 
  fgmods: 'https://api-fgmods.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.herokuapp.com': 'fg-dylux'
}

// Sticker WM
global.packname = '『WB』Akeno ㋡' 
global.author = '『WB』Akeno ㋡' 
global.igfg = '▢ Sígueme en Instagram\nhttps://www.instagram.com/nans_official.id' 
global.dygp = 'https://chat.whatsapp.com/KqqtaU7BAckJ7rzEMUK1Ra'
global.fgsc = 'https://github.com/Nans-Xyz' 
global.fgyt = 'https://youtube.com/NANS_OFFICIAL'
global.fgpyp = 'https://paypal.me/nansxyz'
global.fglog = 'https://telegra.ph/file/138441a52f41d5921e0ee.jpg' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})


import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
  ────  *𝙉𝘼𝙉𝙎 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇*  ────
  
Ⓟ = Premium
ⓓ = Diamantes
-----  -----  -----  -----  -----

  ≡ *DAFTAR MENU*

┌─⊷ *SEKITAR*
▢ .blocklist
▢ .info
▢ .owner
▢ .donate
▢ .gpdylux
▢ .listprem
▢ .help
▢ .audios
▢ .ping
▢ .runtime
▢ .script
└───────────

┌─⊷ *PERMAINAN*
▢ .dado
▢ .delttt
▢ .Mates <modo>
▢ .ppt <piedra/papel/tijera>
▢ .slot <apuesta>
▢ .tictactoe <nombre Sala>
└───────────

┌─⊷ *LEVEL & EKONOMI*
▢ .adddi <@user>
▢ .addxp <@user>
▢ .balance
▢ .daily
▢ .leaderboard
▢ .levelup
▢ .mine
▢ .rob
▢ .buy
▢ .buyall
▢ .transfer [tipo] [monto] [@tag]
▢ .work
└───────────

┌─⊷ *PENDAFTARAN*
▢ .reg <nombre.edad>
▢ .mysn
▢ .unreg <Num Serie>
└───────────

┌─⊷ *STICKER*
▢ .attp <text>
▢ .emojimix <emoji+emoji> (ⓓ)
▢ .getsticker (ⓓ)
▢ .smaker (ⓓ)
▢ .sticker
▢ .toimg <sticker>
▢ .tovid
▢ .trigger <@user>
▢ .ttp <text>
▢ .take <nombre>|<autor>
└───────────

┌─⊷ *IMAGE*
▢ .tvid (ⓓ)
▢ .imagen (ⓓ)
▢ .girl (ⓓ)
▢ .meme (ⓓ)
▢ .pinterest
▢ .wallpaper (ⓓ)
└───────────

┌─⊷ *MAKER*
▢ .logololi (ⓓ)
▢ .neon (ⓓ)
▢ .devil (ⓓ)
▢ .wolf (ⓓ)
▢ .phlogo (ⓓ)
└───────────

┌─⊷ *PREMIUM*
▢ .gdrive (ⓓ) (Ⓟ)
▢ .mediafire <url> (ⓓ)
▢ .xvid (ⓓ) (Ⓟ)
└───────────

┌─⊷ *GROUP*
▢ .add
▢ .delete
▢ .delwarn @user
▢ .demote (@tag)
▢ .infogp
▢ .hidetag
▢ .invite <628xxx>
▢ .kick @user
▢ .link
▢ .poll <hola|como|xd>
▢ .perfil
▢ .promote
▢ .resetlink
▢ .setbye <text>
▢ .group *open/close*
▢ .setwelcome <text>
▢ .simular <event> @mention
▢ .staff
▢ .admin
▢ .tagall
▢ .totag
▢ .warns
▢ .checkexpired
└───────────

┌─⊷ *EN/DISABLE OPCIONES*
▢ .enable <option>
▢ .disable <option>
└───────────

┌─⊷ *ANIME*
▢ .waifu (ⓓ)
▢ .neko (ⓓ)
▢ .megumin (ⓓ)
▢ .loli (ⓓ)
└───────────

┌─⊷ *ANIME REACCION*
▢ .kill @tag (ⓓ)
▢ .kiss @tag (ⓓ)
▢ .pat @tag (ⓓ)
▢ .slap @tag (ⓓ)
└───────────

┌─⊷ *MINGGUAN*
▢ .facebook <url> (ⓓ)
▢ .gdrive (ⓓ) (Ⓟ)
▢ .gitclone <url> (ⓓ)
▢ .igstalk
▢ .instagram <link ig> (ⓓ)
▢ .mediafire <url> (ⓓ)
▢ .play
▢ .play2
▢ .tiktok (ⓓ)
▢ .tiktokstalk
▢ .twitter <url> (ⓓ)
▢ .ytmp3 <url> (ⓓ)
▢ .ytsearch
▢ .ytmp4 <link yt> (ⓓ)
└───────────

┌─⊷ *TOOLS*
▢ .cal <ecuacion>
▢ .google (ⓓ)
▢ .lyrics
▢ .readmore <text1>|<text2>
▢ .readvo
▢ .ssweb <url> (ⓓ)
▢ .tourl
▢ .trad <leng> <text>
▢ .tts <lang> <teks>
▢ .wikipedia
└───────────

┌─⊷ *FUN*
▢ .afk <razon>
▢ .tomp3
▢ .toav
▢ .gay @user
▢ .pregunta
▢ .bot
└───────────

┌─⊷ *DATABASE*
▢ .delcmd <text>
▢ .listcmd
▢ .setcmd <txt>
└───────────

┌─⊷ *NSFW +18*
▢ .xwaifu (ⓓ)
▢ .xneko (ⓓ)
▢ .blowjob (ⓓ)
▢ .ass (ⓓ)
▢ .boobs (ⓓ)
▢ .lesbian (ⓓ)
▢ .pussy (ⓓ)
▢ .pack (ⓓ)
▢ .xvid (ⓓ) (Ⓟ)
└───────────

┌─⊷ *OWNER*
▢ .expired <días>
▢ .addprem <@tag>
▢ .banchat
▢ .listban
▢ .cleartmp
▢ .delexpired
▢ .delprem @user
▢ .getplugin <name file>
▢ .getfile <name file>
▢ .restart
▢ .unban @user
▢ .unbanchat
▢ .update
└───────────

┌─⊷ *Advanced*
▢ >
▢ =>
▢ $
└───────────
`
//const pp = await (await fetch('https://telegra.ph/file/138441a52f41d5921e0ee.jpg')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, '▢ 𝙉𝘼𝙉𝙎 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇\n▢ Ikuti saya di Instagram\nhttps://www.instagram.com/nans_official.id\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Donasi', `${usedPrefix}donar`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler

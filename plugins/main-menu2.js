
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
  ββββ  *ππΌππ πππππΎππΌπ*  ββββ
  
β = Premium
β = Diamantes
-----  -----  -----  -----  -----

  β‘ *DAFTAR MENU*

βββ· *SEKITAR*
β’ .blocklist
β’ .info
β’ .owner
β’ .donate
β’ .gpdylux
β’ .listprem
β’ .help
β’ .audios
β’ .ping
β’ .runtime
β’ .script
ββββββββββββ

βββ· *PERMAINAN*
β’ .dado
β’ .delttt
β’ .Mates <modo>
β’ .ppt <piedra/papel/tijera>
β’ .slot <apuesta>
β’ .tictactoe <nombre Sala>
ββββββββββββ

βββ· *LEVEL & EKONOMI*
β’ .adddi <@user>
β’ .addxp <@user>
β’ .balance
β’ .daily
β’ .leaderboard
β’ .levelup
β’ .mine
β’ .rob
β’ .buy
β’ .buyall
β’ .transfer [tipo] [monto] [@tag]
β’ .work
ββββββββββββ

βββ· *PENDAFTARAN*
β’ .reg <nombre.edad>
β’ .mysn
β’ .unreg <Num Serie>
ββββββββββββ

βββ· *STICKER*
β’ .attp <text>
β’ .emojimix <emoji+emoji> (β)
β’ .getsticker (β)
β’ .smaker (β)
β’ .sticker
β’ .toimg <sticker>
β’ .tovid
β’ .trigger <@user>
β’ .ttp <text>
β’ .take <nombre>|<autor>
ββββββββββββ

βββ· *IMAGE*
β’ .tvid (β)
β’ .imagen (β)
β’ .girl (β)
β’ .meme (β)
β’ .pinterest
β’ .wallpaper (β)
ββββββββββββ

βββ· *MAKER*
β’ .logololi (β)
β’ .neon (β)
β’ .devil (β)
β’ .wolf (β)
β’ .phlogo (β)
ββββββββββββ

βββ· *PREMIUM*
β’ .gdrive (β) (β)
β’ .mediafire <url> (β)
β’ .xvid (β) (β)
ββββββββββββ

βββ· *GROUP*
β’ .add
β’ .delete
β’ .delwarn @user
β’ .demote (@tag)
β’ .infogp
β’ .hidetag
β’ .invite <628xxx>
β’ .kick @user
β’ .link
β’ .poll <hola|como|xd>
β’ .perfil
β’ .promote
β’ .resetlink
β’ .setbye <text>
β’ .group *open/close*
β’ .setwelcome <text>
β’ .simular <event> @mention
β’ .staff
β’ .admin
β’ .tagall
β’ .totag
β’ .warns
β’ .checkexpired
ββββββββββββ

βββ· *EN/DISABLE OPCIONES*
β’ .enable <option>
β’ .disable <option>
ββββββββββββ

βββ· *ANIME*
β’ .waifu (β)
β’ .neko (β)
β’ .megumin (β)
β’ .loli (β)
ββββββββββββ

βββ· *ANIME REACCION*
β’ .kill @tag (β)
β’ .kiss @tag (β)
β’ .pat @tag (β)
β’ .slap @tag (β)
ββββββββββββ

βββ· *MINGGUAN*
β’ .facebook <url> (β)
β’ .gdrive (β) (β)
β’ .gitclone <url> (β)
β’ .igstalk
β’ .instagram <link ig> (β)
β’ .mediafire <url> (β)
β’ .play
β’ .play2
β’ .tiktok (β)
β’ .tiktokstalk
β’ .twitter <url> (β)
β’ .ytmp3 <url> (β)
β’ .ytsearch
β’ .ytmp4 <link yt> (β)
ββββββββββββ

βββ· *TOOLS*
β’ .cal <ecuacion>
β’ .google (β)
β’ .lyrics
β’ .readmore <text1>|<text2>
β’ .readvo
β’ .ssweb <url> (β)
β’ .tourl
β’ .trad <leng> <text>
β’ .tts <lang> <teks>
β’ .wikipedia
ββββββββββββ

βββ· *FUN*
β’ .afk <razon>
β’ .tomp3
β’ .toav
β’ .gay @user
β’ .pregunta
β’ .bot
ββββββββββββ

βββ· *DATABASE*
β’ .delcmd <text>
β’ .listcmd
β’ .setcmd <txt>
ββββββββββββ

βββ· *NSFW +18*
β’ .xwaifu (β)
β’ .xneko (β)
β’ .blowjob (β)
β’ .ass (β)
β’ .boobs (β)
β’ .lesbian (β)
β’ .pussy (β)
β’ .pack (β)
β’ .xvid (β) (β)
ββββββββββββ

βββ· *OWNER*
β’ .expired <dΓ­as>
β’ .addprem <@tag>
β’ .banchat
β’ .listban
β’ .cleartmp
β’ .delexpired
β’ .delprem @user
β’ .getplugin <name file>
β’ .getfile <name file>
β’ .restart
β’ .unban @user
β’ .unbanchat
β’ .update
ββββββββββββ

βββ· *Advanced*
β’ >
β’ =>
β’ $
ββββββββββββ
`
//const pp = await (await fetch('https://telegra.ph/file/138441a52f41d5921e0ee.jpg')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, 'β’ ππΌππ πππππΎππΌπ\nβ’ Ikuti saya di Instagram\nhttps://www.instagram.com/nans_official.id\n', pp, [
      ['β Info', `${usedPrefix}botinfo`],
      ['β¬ Donasi', `${usedPrefix}donar`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler

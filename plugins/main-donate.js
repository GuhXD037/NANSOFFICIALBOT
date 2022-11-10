
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONASI/MENYUMBANG*
Anda dapat menyumbang jika Anda ingin membantu menjaga bot Anda tetap aktif

▢ *PayPal*
• *Link :* https://paypal.me/nansxyz
▢ *Saweria*
• *Link :* https://saweria.co/nansofficial
▢ *Dana/GoPay/LinkAja/ShopeePay*
• *Nomor° :*  6285880029379
`
let img = 'https://telegra.ph/file/3e85d759defd7d83008bd.jpg'
conn.sendButton(m.chat, don, 'Klik tombol jika Anda ingin membeli atau menyewa bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

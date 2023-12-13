const fs = require('fs')

global.namabot = "PIC STORE"
global.namaowner = "ACELL"
global.footer_text = "© Unitify Departement Server ID " + namabot
global.pp_bot = fs.readFileSync("./image/image.png")
global.qris = fs.readFileSync("./image/qr.jpg")
global.owner = ['62895630098855']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `*PAYMENT PICSTORE*

*Scan Qris +100p*
*Gopay : 081382215074 a/n : PIC STORE*
*Dana : 081617490127 a/n : P R*
*Ovo : 0895630098855 a/n : A N N*
*Bca : 3930978891 a/n : A M*

- Wajib sertakan bukti TF kirim ke grup sertakan keterangan order apa
- Tf - Proses, ga tf? ga proses
- salah tf? bukan tanggung jawab admin
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname} saya assisten pribadi PIC STORE

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}
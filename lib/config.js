const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6283838077485']
global.premium = ['6283838077485']
global.nama = 'Jaa Ganteng'
global.packname = 'Jaa'
global.author = 'Ganteng'
global.sessionName = 'jaa'
global.sp = '⭔'
global.prefa = ['#','.']
global.mess = {
    success: '✓ Success',
    admin: 'Fitur khusus admin group!',
    botAdmin: 'Bot harus menjadi admin terlebih dahulu!',
    owner: 'Fitur khusus owner!',
    group: 'Fitur khusus group!',
    private: 'Fitur khusus private chat!',
    bot: 'Fitur khusus pengguna nomor bot',
    wait: 'Loading...', 
    erorr: `Fitur erorr`,
    link: `Url no valid`,
    media: `Media no valid`,
    api: `Apikey eror`,
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

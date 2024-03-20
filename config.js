const fs = require('fs')
const chalk = require('chalk')

global.packname = "By beltok"
global.author = "Project"







global.prefa = ['','!','.','😋','😂','🤩','🤗','🙄','😜','😉','☺','🤪','😄']

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

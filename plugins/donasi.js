let handler = async m => m.reply(`
╭─「 DONATION 」
│ •   N O V A T O [5511985598458]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

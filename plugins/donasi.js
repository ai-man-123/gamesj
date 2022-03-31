let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • fon [0102810046]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/60102810046
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

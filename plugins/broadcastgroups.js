let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + 'ã All Group Broadcast ã')
  for (let id of groups) conn.copyNForward(id, content)
  conn.reply(m.chat, `_Envie mensagens de difusÃ£o para ${groups.length} grup_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' ãððð¡ððã')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


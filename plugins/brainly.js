const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'VocÃª vÃª?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERGUNTA PARA ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*RESPONDA PARA ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\nâ¢------------â¢\n\n')
  m.reply(answer)
}
handler.help = ['ððððððð¢ãððððððððã']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler

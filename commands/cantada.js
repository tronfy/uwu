const gender = require('../util/gender')

exports.description = 'te amo! haha brincadeira... unless...'

exports.run = (uwu, message, _args) => {
  const genderise = gender(message)

  const apelido = genderise(uwu.owo.apelidos.get())
  const cantada = genderise(uwu.owo.cantadas.get())
  const emote = uwu.owo.emotes.get()

  message.reply(`ei ${apelido}, ${cantada} ${emote}`)
}

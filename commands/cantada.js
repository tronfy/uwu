const genderise = require('../util/genderise')

exports.description = 'te amo! haha brincadeira... unless...'

exports.run = (uwu, message, _args) => {
  const pronomes = []

  const roles = message.member.roles.cache
  if (roles.some(role => role.name.toLowerCase().startsWith('ela')))
    pronomes.push('ela')
  if (roles.some(role => role.name.toLowerCase().startsWith('ele')))
    pronomes.push('ele')
  if (roles.some(role => role.name.toLowerCase().startsWith('elu')))
    pronomes.push('elu')

  if (pronomes.length == 0) pronomes.push('elu')

  const pronome = pronomes[Math.floor(Math.random() * pronomes.length)]
  const apelido = genderise(uwu.owo.apelidos.get(), pronome)
  const cantada = genderise(uwu.owo.cantadas.get(), pronome)
  const emote = uwu.owo.emotes.get()

  message.reply(`ei ${apelido}, ${cantada} ${emote}`)
}

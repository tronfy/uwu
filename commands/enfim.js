exports.description = 'enfim, a hipocrisia...'

exports.run = (uwu, message, _args) => {
  const hipocrisia = uwu.hipocrisias.get()
  message.channel.send(`enfim, a ${hipocrisia}...`)
}

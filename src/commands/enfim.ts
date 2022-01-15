export const description = 'enfim, a hipocrisia...'

export const run: Command = (uwu, message, _args) => {
  const hipocrisia: string = uwu.db.hipocrisias.get()
  message.channel.send(`enfim, a ${hipocrisia}...`)
}

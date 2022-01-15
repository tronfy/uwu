import gender from '../util/gender'

export const description = 'te amo! haha brincadeira... unless...'

export const run: Command = (uwu, message, _args) => {
  const genderise = gender(message)

  const apelido = genderise(uwu.owo.apelidos.get())
  const cantada = genderise(uwu.owo.cantadas.get())
  const emote: string = uwu.db.owo.emotes.get()

  message.reply(`ei ${apelido}, ${cantada} ${emote}`)
}

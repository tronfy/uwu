import shutdown from '../util/shutdown'

export const run: Command = async (uwu, message, _args) => {
  const authorId: string = message.author.id
  if (authorId != uwu.data.ownerId) return

  await message.channel.send('tchau tchau!')
  shutdown(uwu)
}

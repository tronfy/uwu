import { TextChannel } from 'discord.js'

export const run: Command = (uwu, message, args) => {
  const authorId: string = message.author.id
  if (message.channel instanceof TextChannel) message.delete()
  if (authorId != uwu.data.ownerId) return

  const text = args.join(' ')
  message.channel.send(text)
}

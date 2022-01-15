import { Message } from 'discord.js'
import UwU from 'src/interfaces/UwU'

export default async (uwu: UwU, message: Message) => {
  // ignore bots
  if (message.author.bot) return

  // UwU
  if (message.content.toLowerCase() === uwu.data.prefix) {
    message.channel.send('UwU')
    return
  }

  // ignore if no prefix found
  if (!message.content.startsWith(uwu.data.prefix)) return

  const args = message.content.slice(uwu.data.prefix.length).trim().split(/ +/g)
  const cmd = args.shift()!.toLowerCase()

  const command = uwu.commands.get(cmd)
  if (!command) return

  await message.channel.sendTyping()
  await command.run(uwu, message, args)
}

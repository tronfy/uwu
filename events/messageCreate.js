module.exports = (uwu, message) => {
  // ignore bots
  if (message.author.bot) return

  // UwU
  if (message.content.toLowerCase() === uwu.prefix)
    return message.channel.send('UwU')

  // ignore if no prefix found
  if (!message.content.startsWith(uwu.prefix)) return

  const args = message.content.slice(uwu.prefix.length).trim().split(/ +/g)
  const cmd = args.shift().toLowerCase()

  const command = uwu.commands.get(cmd)
  if (!command) return

  command.run(uwu, message, args)
}

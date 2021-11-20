exports.run = (uwu, message, args) => {
  const author = message.author.id
  message.delete()
  if (author != uwu.owner) return

  const text = args.join(' ')
  message.channel.send(text)
}

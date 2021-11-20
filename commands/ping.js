exports.description = 'informações de latência'

exports.run = (uwu, message, _args) => {
  const bot = Date.now() - message.createdTimestamp
  const api = Math.round(uwu.ws.ping)

  message.channel.send(`🏓 boop! (bot ${bot}ms, api ${api}ms)`)
}

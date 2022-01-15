export const description = 'informações de latência'

export const run: Command = (uwu, message, _args) => {
  const bot = Date.now() - message.createdTimestamp
  const api = Math.round(uwu.client.ws.ping)

  message.channel.send(`🏓 boop! (bot ${bot}ms, api ${api}ms)`)
}

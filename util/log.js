const { Message } = require('discord.js')
const fs = require('fs-extra')

const logTime = () => '[' + new Date().toLocaleTimeString() + '] '

const log = (message, callback) => {
  message = logTime() + message

  const filename =
    'logs/' + new Date().toISOString().split('T')[0].replace(/\//g, '') + '.log'
  fs.ensureFileSync(filename)
  fs.appendFileSync(filename, message + '\n')

  callback(message)
}

exports.logE = (message, exception) => {
  if (typeof message === Message) message = message.content
  log(
    `panic! at the message: '${message}' -> ${exception.message}`,
    console.error
  )
}

exports.logW = (message, warning) =>
  log(`regarding ${message}, beware:\n${warning}`, console.warn)

exports.logI = info => log(info, console.info)

import { Message } from 'discord.js'
import fs from 'fs-extra'

const logTime = () => '[' + new Date().toLocaleTimeString() + '] '

const log = (message: string, callback: Function) => {
  message = logTime() + message

  const filename =
    'logs/' + new Date().toISOString().split('T')[0].replace(/\//g, '') + '.log'
  fs.ensureFileSync(filename)
  fs.appendFileSync(filename, message + '\n')

  callback(message)
}

export const logE = (message: Message, exception: Error) => {
  log(
    `panic! at the message: '${message.content}' -> ${exception.message}`,
    console.error
  )
}

export const logW = (message: Message, warning: string) =>
  log(`regarding ${message.content}, beware:\n${warning}`, console.warn)

export const logI = (info: string) => log(info, console.info)

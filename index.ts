import { Client, Intents, Collection, Message, Awaitable } from 'discord.js'
import fs from 'fs'
import db from './db.json'
import { logI } from './util/log'
import UwU, { ClientData, ClientDatabase } from './interfaces/UwU'
import RandomList from './util/RandomList'
import ready from './events/ready'
import messageCreate from './events/messageCreate'

const env_path = '../.env'
if (!fs.existsSync(env_path)) throw new Error('could not find .env file')
require('dotenv').config({ path: env_path })

const env: { [key: string]: string } = {}
;['TOKEN', 'OWNER', 'MINECRAFT_IP', 'npm_package_version'].forEach(option => {
  const value = process.env[option]
  if (value !== undefined) env[option] = value
  else throw new Error(`missing environment variable: ${option}`)
})

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
  partials: ['CHANNEL'],
})

const data: ClientData = {
  prefix: 'uwu',
  ownerId: env['OWNER'],
  minecraftIp: env['MINECRAFT_IP'],
  version: env['npm_package_version'],
  color: '#ffffff',
}

const uwu_db: ClientDatabase = {
  msg: db.msg,
  hipocrisias: new RandomList(db.hipocrisias),
  owo: {
    apelidos: new RandomList(db.owo.apelidos),
    cantadas: new RandomList(db.owo.cantadas),
    emotes: new RandomList(db.owo.emotes),
  },
}

const uwu: UwU = {
  client: client,
  data: data,
  commands: new Collection(),
  db: uwu_db,
}

uwu.client.on('ready', () => ready(uwu))
uwu.client.on('messageCreate', (msg: Message) => messageCreate(uwu, msg))

const commands = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'))
for (const file of commands) {
  const name = file.split('.')[0]
  const command = require(`./commands/${file}`)

  uwu.commands.set(name, command)
}

process.on('SIGINT', () => {
  uwu.client.destroy()
  logI('logging out\n')
  process.exit(0)
})

logI('logging in...')
uwu.client.login(process.env.TOKEN)

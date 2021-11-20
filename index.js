const { Client, Intents, Collection } = require('discord.js')
const fs = require('fs')
require('dotenv').config()

const uwu = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

uwu.prefix = 'uwu'
uwu.ownerId = process.env.OWNER
uwu.color = '#ffffff'

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of events) {
  const name = file.split('.')[0]
  const event = require(`./events/${file}`)

  uwu.on(name, event.bind(null, uwu))
}

uwu.commands = new Collection()
const commands = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'))
for (const file of commands) {
  const name = file.split('.')[0]
  const command = require(`./commands/${file}`)

  uwu.commands.set(name, command)
}

uwu.login(process.env.TOKEN)

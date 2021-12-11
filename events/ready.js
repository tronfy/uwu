const db = require('../db.json')
const RandomList = require('../util/RandomList')

module.exports = async uwu => {
  uwu.user.setPresence({
    activities: [{ name: `${uwu.prefix} help` }],
    status: 'online',
  })

  uwu.owner = await uwu.users.fetch(uwu.ownerId)

  uwu.msg = db.msg

  uwu.hipocrisias = new RandomList(db.hipocrisias)

  uwu.owo = {}
  uwu.owo.apelidos = new RandomList(db.owo.apelidos)
  uwu.owo.cantadas = new RandomList(db.owo.cantadas)
  uwu.owo.emotes = new RandomList(db.owo.emotes)

  console.log('ready!')
}

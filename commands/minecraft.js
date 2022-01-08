const { MessageEmbed } = require('discord.js')
const mc = require('minecraft-server-util')
const { logE } = require('../util/log')

exports.description = 'info do server de mine'

exports.run = (uwu, message, _args) => {
  mc.status(uwu.minecraftIp, 25565)
    .then(res => {
      const version = res.version.name.toLowerCase()
      const motd = res.motd.clean.split('\n').map(x => x.trim())

      let online = `${res.players.online} player${
        res.players.online != 1 ? 's' : ''
      } online`
      if (res.players.online > 0)
        online += `: ${res.players.sample
          .sort()
          .map(x => x.name)
          .join(', ')}`

      const embed = new MessageEmbed()
        .setColor(uwu.color)
        .setTitle(motd[0])
        .setDescription(`\`${uwu.minecraftIp}\`\n${online}`)
        .setFooter(`rodando ${version}`)

      message.channel.send({ embeds: [embed] })
    })
    .catch(e => {
      logE(message, e)
      message.channel.send(uwu.msg.server_timeout)
    })
}

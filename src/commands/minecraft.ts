import { MessageEmbed } from 'discord.js'
import mc from 'minecraft-server-util'
import { logE } from '../util/log'

export const description = 'info do server de mine'

export const run: Command = (uwu, message, _args) => {
  mc.status(uwu.data.minecraftIp, 25565)
    .then(res => {
      const version = res.version.name.toLowerCase()
      const motd = res.motd.clean.split('\n').map(x => x.trim())

      let online = `${res.players.online} player${
        res.players.online != 1 ? 's' : ''
      } online`
      if (res.players.online > 0)
        online += `: ${res.players
          .sample!.sort()
          .map(x => x.name)
          .join(', ')}`

      const embed = new MessageEmbed()
        .setColor(uwu.data.color)
        .setTitle(motd[0])
        .setDescription(`\`${uwu.data.minecraftIp}\`\n${online}`)
        .setFooter(`rodando ${version}`)

      message.channel.send({ embeds: [embed] })
    })
    .catch(e => {
      logE(message, e)
      message.channel.send(uwu.db.msg.server_timeout)
    })
}

import { MessageEmbed } from 'discord.js'

export const description = 'essa lista aqui'

export const run: Command = async (uwu, message, _args) => {
  const owner = await uwu.client.users.fetch(uwu.data.ownerId)
  const embed = new MessageEmbed()
    .setColor(uwu.data.color)
    .setTitle('aqui está a lista de comandos!')
    .setDescription(`lembre-se de usar o prefixo **\`${uwu.data.prefix}\`**`)
    .setFooter(`por ${owner.tag}`, `${owner.avatarURL()}`)

  for (const cmd of uwu.commands)
    if (cmd[1].description) {
      const title = cmd[1].usage ? cmd[1].usage : cmd[0]
      embed.addField(title, cmd[1].description, true)
    }

  message.channel.send({ embeds: [embed] })
}

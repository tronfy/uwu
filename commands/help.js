const { MessageEmbed } = require('discord.js')

exports.description = 'essa lista aqui'

exports.run = (uwu, message, _args) => {
  const embed = new MessageEmbed()
    .setColor(uwu.color)
    .setTitle('aqui está a lista de comandos!')
    .setDescription('lembre-se de usar o prefixo **`uwu`**')
    .setFooter(`por ${uwu.owner.tag}`, `${uwu.owner.avatarURL()}`)

  for (const cmd of uwu.commands)
    if (cmd[1].description) {
      const title = cmd[1].usage ? cmd[1].usage : cmd[0]
      embed.addField(title, cmd[1].description, true)
    }

  message.channel.send({ embeds: [embed] })
}

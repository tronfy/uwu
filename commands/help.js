const { MessageEmbed } = require('discord.js')

exports.description = 'essa lista aqui'

exports.run = (uwu, message, _args) => {
  const embed = new MessageEmbed()
    .setColor(uwu.color)
    .setTitle('aqui está a lista de comandos!')
    .setDescription('lembre-se de usar o prefixo **`uwu`**')
    .setFooter(`por ${uwu.owner.tag}`, `${uwu.owner.avatarURL()}`)

  for (const cmd of uwu.commands)
    if (cmd[1].description) embed.addField(cmd[0], cmd[1].description, true)

  message.channel.send({ embeds: [embed] })
}

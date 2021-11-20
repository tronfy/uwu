const { MessageEmbed } = require('discord.js')

exports.description = 'inicia uma votação'

const alphabet = {
  a: '🇦',
  b: '🇧',
  c: '🇨',
  d: '🇩',
  e: '🇪',
  f: '🇫',
  g: '🇬',
  h: '🇭',
  i: '🇮',
  j: '🇯',
  k: '🇰',
  l: '🇱',
  m: '🇲',
  n: '🇳',
  o: '🇴',
  p: '🇵',
  q: '🇶',
  r: '🇷',
  s: '🇸',
  t: '🇹',
  u: '🇺',
  v: '🇻',
  w: '🇼',
  x: '🇽',
  y: '🇾',
  z: '🇿',
}

exports.run = async (uwu, message, args) => {
  const options = args.join(' ').split('\n')

  const embed = new MessageEmbed()
    .setColor(uwu.color)
    .setTitle(options[0])
    .setAuthor('votação')
    .setFooter(
      `iniciada por ${message.author.username}`,
      `${message.author.avatarURL()}`
    )

  if (options.length === 1) {
    const poll = await message.channel.send({ embeds: [embed] })
    await poll.react('✅')
    await poll.react('❎')
  } else if (options.length >= 3 && options.length <= 27) {
    const description = options
      .slice(1)
      .map((e, i) => `${alphabet[String.fromCharCode(i + 97)]} ${e}`)
      .join('\n')
    embed.setDescription(description)

    const poll = await message.channel.send({ embeds: [embed] })
    for (let i = 0; i < options.length - 1; i++)
      await poll.react(alphabet[String.fromCharCode(i + 97)])
  }
  await message.delete()

  // message.channel.send({ embeds: [embed] })
}

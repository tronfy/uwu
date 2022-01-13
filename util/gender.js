const { TextChannel } = require('discord.js')

module.exports = message => {
  const pronouns = []

  if (typeof message.channel == TextChannel) {
    const roles = message.member.roles.cache
    if (roles.some(role => role.name.toLowerCase().startsWith('ela')))
      pronouns.push('ela')
    if (roles.some(role => role.name.toLowerCase().startsWith('ele')))
      pronouns.push('ele')
    if (roles.some(role => role.name.toLowerCase().startsWith('elu')))
      pronouns.push('elu')
  }
  // else {
  //   // TODO: check for pronouns in name/bio?
  // }

  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)]
  switch (pronoun) {
    case 'ela':
      return text => text.replace(/<|>/g, 'a')

    case 'ele':
      return text => text.replace(/</g, '').replace(/>/g, 'o')

    default:
      return text => text.replace(/<|>/g, 'e')
  }
}

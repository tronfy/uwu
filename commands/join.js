const { joinVoiceChannel } = require('@discordjs/voice')

exports.run = async (uwu, message, _args) => {
  const connection = joinVoiceChannel({
    channelId: message.member.voice.channelId,
    guildId: message.channel.guildId,
    adapterCreator: message.channel.guild.voiceAdapterCreator,
  })
}

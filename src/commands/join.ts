import { TextChannel } from 'discord.js'
import { joinVoiceChannel } from '@discordjs/voice'

export const run: Command = async (_uwu, message, _args) => {
  if (message.channel instanceof TextChannel)
    joinVoiceChannel({
      channelId: message.member.voice.channelId,
      guildId: message.channel.guildId,
      adapterCreator: message.channel.guild.voiceAdapterCreator,
    })
}

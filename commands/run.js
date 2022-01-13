const https = require('https')
const { MessageEmbed } = require('discord.js')
const msToTime = require('../util/msToTime')
const usage = require('../util/usage')

exports.description = 'info de uma run no splits.io'

exports.usage = 'run [código]'

const url = 'https://splits.io/'
const api = 'https://splits.io/api/v4/'
const runs = 'runs/'
// const runner = 'runner/'

exports.run = (uwu, message, args) => {
  if (args.length != 1) return message.reply(usage(this.usage))

  const code = args[0]

  let run
  const req = https.get(api + runs + code, res => {
    if (res.statusCode != 200) {
      message.channel.send(uwu.msg.not_found)
      return req.end()
    }

    let data = ''
    res.on('data', c => (data += c))

    res.on('end', () => {
      run = JSON.parse(data).run
      req.end()

      let duration, sum_of_best, gold, segments
      segments = run.segments.length
      switch (run.default_timing) {
        case 'game':
          duration = run.gametime_duration_ms
          sum_of_best = run.gametime_sum_of_best_ms
          gold = run.segments.filter(s => s.gametime_gold).length
          break

        case 'real':
          duration = run.realtime_duration_ms
          sum_of_best = run.realtime_sum_of_best_ms
          gold = run.segments.filter(s => s.realtime_gold).length
          break

        default:
          break
      }

      let description =
        `${msToTime(run.gametime_duration_ms)} (game time)\n` +
        `${msToTime(run.realtime_duration_ms)} (real time)\n` +
        '\n' +
        `${gold}/${segments} gold\n` +
        `sum of best: ${msToTime(sum_of_best)}\n` +
        `${msToTime(duration - sum_of_best)} timesave possível\n` +
        '\n' +
        `splits.io: ${url + code}`

      if (run.srdc_id)
        description += '\nsrdc: https://www.speedrun.com/run/' + run.srdc_id

      if (run.video_url) description += '\nassista aqui: ' + run.video_url

      const embed = new MessageEmbed()
        .setColor(uwu.color)
        .setTitle(
          `${run.game.name.toLowerCase()} - ${run.category.name.toLowerCase()} ${msToTime(
            duration,
            false
          )}`
        )
        .setThumbnail(run.game.cover_url)
        .setDescription(description)
        .setFooter(
          `${run.runners[0].name} • ${run.attempts}ª tentativa • ${new Date(
            run.created_at
          )
            .toLocaleDateString('pt-br', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            .toLowerCase()}`,
          `${run.runners[0].avatar}`
        )

      message.channel.send({ embeds: [embed] })
    })
  })

  req.on('error', _error => {
    message.reply(uwu.msg.notfound)
    req.end()
  })
}

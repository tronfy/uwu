module.exports = (duration, detailed = true) => {
  let milliseconds = Math.floor(duration % 1000),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  let formatted = ''

  if (hours) formatted = (hours < 10 ? '0' + hours : hours) + ':'
  formatted += (minutes < 10 ? '0' + minutes : minutes) + ':'
  formatted += seconds < 10 ? '0' + seconds : seconds
  if (detailed) formatted += '.' + milliseconds

  return formatted
}

import UwU from 'src/interfaces/UwU'

export default (uwu: UwU, usage: string): string =>
  uwu.db.msg.try_instead + '`' + uwu.data.prefix + ' ' + usage + '`'

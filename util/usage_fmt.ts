import UwU from 'interfaces/UwU'

export default (uwu: UwU, usage: string): string =>
  uwu.db.msg.try_instead + '`' + uwu.data.prefix + ' ' + usage + '`'

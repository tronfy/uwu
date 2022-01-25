import UwU from 'interfaces/UwU'
import { logI } from './log'

export default (uwu: UwU) => {
  uwu.client.destroy()
  logI('logging out\n')
  process.exit(0)
}

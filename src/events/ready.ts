import UwU from 'src/interfaces/UwU'
import { logI } from '../util/log'

export default async (uwu: UwU) => {
  uwu.client.user!.setPresence({
    activities: [{ name: `${uwu.data['prefix']} help` }],
    status: 'online',
  })

  logI('uwu is ready!')
}

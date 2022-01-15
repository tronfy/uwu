import { Client, User } from 'discord.js'
import RandomList from 'src/util/RandomList'

export default interface UwU {
  client: Client
  data: ClientData
  commands: Collection<string, NodeRequire>
  db: ClientDatabase
}

interface ClientData {
  prefix: string
  ownerId: string
  minecraftIp: string
  color: string
}

interface ClientDatabase {
  msg: { [key: string]: string }
  hipocrisias: string[]
  owo: {
    apelidos: RandomList
    cantadas: RandomList
    emotes: RandomList
  }
}

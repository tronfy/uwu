import { Client, User } from 'discord.js'
import RandomList from 'util/RandomList'

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
  version: string
  color: string
}

interface ClientDatabase {
  msg: { [key: string]: string }
  hipocrisias: RandomList<string>
  owo: {
    apelidos: RandomList<string>
    cantadas: RandomList<string>
    emotes: RandomList<string>
  }
}

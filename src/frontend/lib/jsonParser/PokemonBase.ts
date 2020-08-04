import {
  StatsJson,
  PokemonBaseJson
} from '@/lib/apiJson/PokemonBase'
import {
  Stats,
  PokemonBase
} from '@/lib/models/PokemonBase'


export const parseStatsJson = (json: StatsJson) => {
  return new Stats(json)
}

export const parsePokemonBaseJson = (json: PokemonBaseJson) => {
  return new PokemonBase(json)
}

export const parsePokemonBaseJsonList = (jsonList: PokemonBaseJson[]) => {
  return jsonList.map(json => parsePokemonBaseJson(json))
}
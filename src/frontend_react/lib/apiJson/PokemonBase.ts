export interface StatsJson {
  hp: number
  attack: number
  defence: number
  spAttack: number
  spDefence: number
  speed: number
}

export interface PokemonBaseJson {
  no: number
  name: string
  form: string
  isMegaEvolution: boolean
  evolutions: number[]
  types: string[]
  abilities: string[]
  hiddenAbilities: string[]
  stats: StatsJson
}

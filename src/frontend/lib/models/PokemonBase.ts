import {
  StatsJson,
  PokemonBaseJson
} from '@/lib/apiJson/PokemonBase'

export class Stats {
  hp: number
  attack: number
  defence: number
  spAttack: number
  spDefence: number
  speed: number

  public constructor({
    hp,
    attack,
    defence,
    spAttack,
    spDefence,
    speed,
  }: StatsJson) {
    this.hp = hp
    this.attack = attack
    this.defence = defence
    this.spAttack = spAttack
    this.spDefence = spDefence
    this.speed = speed
  }
}

export class PokemonBase {
  no: number
  name: string
  form: string
  isMegaEvolution: boolean
  evolutions: number[]
  types: string[]
  abilities: string[]
  hiddenAbilities: string[]
  stats: Stats

  public constructor({
    no,
    name,
    form,
    isMegaEvolution,
    evolutions,
    types,
    abilities,
    hiddenAbilities,
    stats
  }: PokemonBaseJson) {
    this.no = no
    this.name = name
    this.form = form
    this.isMegaEvolution = isMegaEvolution
    this.evolutions = evolutions
    this.types = types
    this.abilities = abilities
    this.hiddenAbilities = hiddenAbilities
    this.stats = stats
  }

  public get fullName() {
    const form = this.form ? `(${this.form})` : ''
    return `${this.name}${form}`
  }
}
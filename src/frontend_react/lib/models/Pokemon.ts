import { StatsJson, PokemonBaseJson } from '../apiJson/PokemonBase'

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
    speed
  }: StatsJson) {
    this.hp = hp
    this.attack = attack
    this.defence = defence
    this.spAttack = spAttack
    this.spDefence = spDefence
    this.speed = speed
  }
}

class Types {}
class Abilities {}

export class Pokemon {
  no: number
  name: string
  form: string
  isMegaEvolution: boolean
  types: Types
  abilities: Abilities
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
    this.types = new Types(types)
    this.abilities = new Abilities(abilities)
    this.stats = new Stats(stats)
  }

  public get fullName() {
    const form = this.form ? `(${this.form})` : ''
    return `${this.name}${form}`
  }
}

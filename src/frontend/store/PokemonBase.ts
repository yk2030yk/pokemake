import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/api'
import { PokemonBase } from '@/lib/models/PokemonBase'
import { parsePokemonBaseJsonList } from '@/lib/jsonParser/PokemonBase'


@Module({
  name: 'PokemonBase',
  stateFactory: true,
  namespaced: true,
})
export default class PokemonBaseModule extends VuexModule {
  public _pokemonBaseList: PokemonBase[] = []

  @Mutation
  _set(pokemonBaseList: PokemonBase[]) {
    console.log(pokemonBaseList)
    this._pokemonBaseList = pokemonBaseList
  }

  @Action({ commit: '_set' })
  public async fetch() {
    const response = await $axios.$get('/v1/pokemonBase')
    const jsonList = response.result.pokemonBaseList
    return parsePokemonBaseJsonList(jsonList)
  }

  public get pokemonBaseList(): PokemonBase[] {
    return this._pokemonBaseList
  }
}
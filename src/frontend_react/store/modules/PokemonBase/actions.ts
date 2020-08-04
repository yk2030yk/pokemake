import { PokemonBase } from '@/lib/models/PokemonBase'
import types from './types'

const setPokemonBaseList = (pokemonBaseList: PokemonBase[]) => {
  return {
    type: types.SET_LIST,
    pokemonBaseList
  }
}

const resetPokemonBaseList = () => {
  return {
    type: types.RESET_LIST,
    pokemonBaseList: []
  }
}

export default {
  setPokemonBaseList,
  resetPokemonBaseList
}

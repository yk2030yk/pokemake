import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import PokemonBaseModule from '~/store/PokemonBase'

let pokemonBaseStore: PokemonBaseModule

function initialiseStores(store: Store<any>): void {
  pokemonBaseStore = getModule(PokemonBaseModule, store)
}

export {
  initialiseStores,
  pokemonBaseStore,
}

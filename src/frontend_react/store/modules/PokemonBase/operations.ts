import actions from './actions'
import { apiService } from '@/lib/WebApiService'

const fetch = () => {
  return async dispatch => {
    const pokemonBaseList = await apiService.getPokemonBaseList()
    dispatch(actions.setPokemonBaseList(pokemonBaseList))
  }
}

export default {
  fetch
}

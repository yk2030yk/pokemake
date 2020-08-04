import { combineReducers } from 'redux'
import types from './types'

const initialState = {
  list: []
}

const pokemonBaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST:
      return Object.assign({}, state, { list: action.pokemonBaseList })
    default:
      return state
  }
}

export default combineReducers({
  pokemonBase: pokemonBaseReducer
})

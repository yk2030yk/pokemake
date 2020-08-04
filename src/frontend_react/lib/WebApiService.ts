import { api, ApiResponse } from '@/lib/WebApi'
import { PokemonBaseJson } from '@/lib/apiJson/PokemonBase'
import { parser } from '@/lib/jsonParser'

interface GetPokemonBaseList {
  pokemonBaseList: PokemonBaseJson[]
}

const PATH_POKEMON_BASE = 'pokemonBase'

export class ApiService {
  host: string
  baseUrl: string

  public constructor() {
    this.host = 'http://localhost:8003'
    this.baseUrl = '/api/v1'
  }

  public buildUrl(path: string): string {
    return `${this.host}${this.baseUrl}/${path}`
  }

  public async get<T>(path: string, params = {}): Promise<ApiResponse<T>> {
    return await api.get<T>(this.buildUrl(path), params)
  }

  public async getPokemonBaseList() {
    const apiResponse = await this.get<GetPokemonBaseList>(
      PATH_POKEMON_BASE,
      {}
    )

    if (!apiResponse.isSuccess) {
      return []
    }

    const pokemonBaseList = parser.pokemonBaseList(
      apiResponse.result.pokemonBaseList
    )
    return pokemonBaseList
  }
}

export const apiService = new ApiService()

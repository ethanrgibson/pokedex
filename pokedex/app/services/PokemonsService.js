import { AppState } from "../AppState.js";
import { ActivePokemon, WildPokemon } from "../models/PokemonModel.js";
import { pokeApi } from "../utils/Axios.js"

class PokemonsService {



  async getWildPokemons() {
    const response = await pokeApi.get('pokemon?limit=151')


    const pokemon = response.data.results.map(pojo => new WildPokemon(pojo))

    AppState.WildPokemon = pokemon

  }


  async getActivePokemon(pokeName) {
    const response = await pokeApi.get(`pokemon/${pokeName}`)
    AppState.ActivePokemon = new ActivePokemon(response.data)

  }


}



export const pokemonsService = new PokemonsService()
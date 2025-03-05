import { AppState } from "../AppState.js";
import { WildPokemon } from "../models/PokemonModel.js";
import { pokeApi } from "../utils/Axios.js"

class PokemonsService {



  async getWildPokemons() {
    const response = await pokeApi.get('pokemon?limit=151')
    console.log('pokemons are here some service', response.data);

    const pokemon = response.data.results.map(pojo => new WildPokemon(pojo))

    AppState.WildPokemon = pokemon

  }


  getActivePokemon(pokeName) {
    console.log('got pokemon named', pokeName);

  }


}



export const pokemonsService = new PokemonsService()
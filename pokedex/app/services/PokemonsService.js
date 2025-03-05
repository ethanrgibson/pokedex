import { AppState } from "../AppState.js";
import { ActivePokemon, WildPokemon } from "../models/PokemonModel.js";
import { pokeApi } from "../utils/Axios.js"

class PokemonsService {



  async getWildPokemons() {
    const response = await pokeApi.get('pokemon?limit=151')
    console.log('pokemons are here some service', response.data);

    const pokemon = response.data.results.map(pojo => new WildPokemon(pojo))

    AppState.WildPokemon = pokemon

  }


  async getActivePokemon(pokeName) {
    const response = await pokeApi.get(`pokemon/${pokeName}`)

    console.log('getActivePokemon', response.data);

    AppState.ActivePokemon = new ActivePokemon(response.data)


    // const pokemon = response.data.results.map(pojo => new ActivePokemon(pojo))

    // AppState.ActivePokemon = pokemon

    console.log('Info about active pokemon', AppState.ActivePokemon);

  }


}



export const pokemonsService = new PokemonsService()
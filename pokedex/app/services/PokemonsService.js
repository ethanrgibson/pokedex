import { pokeApi } from "../utils/Axios.js"

class PokemonsService {



  async getWildPokemons() {
    const response = await pokeApi.get('pokemon?limit=151')
    console.log('pokemons are here some service', response.data);




  }




}



export const pokemonsService = new PokemonsService()
import { pokeApi } from "../utils/Axios.js"

class PokemonsService {



  async getPokemons() {
    const response = await pokeApi.get('pokemon')
    console.log('pokemons are here some service', response.data);




  }




}



export const pokemonsService = new PokemonsService()
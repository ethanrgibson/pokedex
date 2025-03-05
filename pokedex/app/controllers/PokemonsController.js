import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonsController {

  constructor() {
    console.log('live from pokemons controller');

    this.getPokemons()

  }

  async getPokemons() {

    try {
      await pokemonsService.getPokemons()

    } catch (error) {
      console.error('Could Not Get Pokemons');
      Pop.error(error, 'Could Not Get Pokemons')



    }



  }

}
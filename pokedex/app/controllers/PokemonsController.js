import { AppState } from "../AppState.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonsController {

  constructor() {


    AppState.on('WildPokemon', this.drawWildPokemon)
    AppState.on('ActivePokemon', this.drawActivePokemon)
    this.getPokemons()

  }

  async getPokemons() {

    try {
      await pokemonsService.getWildPokemons()



    } catch (error) {
      console.error('Could Not Get Pokemons');
      Pop.error(error, 'Could Not Get Pokemons')
    }
  }

  drawWildPokemon() {
    const pokemons = AppState.WildPokemon

    let wildPokemonContent = ''

    pokemons.forEach(pokemon => wildPokemonContent += pokemon.buttonHTML)

    const wildPokeElem = document.getElementById('pokemonsList')
    wildPokeElem.innerHTML = wildPokemonContent

  }

  async getActivePokemon(pokeName) {
    try {
      await pokemonsService.getActivePokemon(pokeName)

    } catch (error) {
      console.error('Could Not Get Pokemon');
      Pop.error(error, 'Could Not Get Pokemon')

    }
  }


  drawActivePokemon() {

    const poke = AppState.ActivePokemon

    const pokelem = document.getElementById('activePokemon')
    pokelem.innerHTML = poke.activePokeHTMLTemplate




  }

}
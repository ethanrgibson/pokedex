import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxController {

  // TODO Need to have captured Pokemon save through refresh


  constructor() {

    AppState.on('identity', this.getCapturedPokemon)
    AppState.on('SandboxPokemon', this.drawCapturedPokemon)
    AppState.on('SandboxPokemon', this.countCapturedPokemons)

  }

  async captureActivePokemon() {

    try {
      await sandboxService.captureActivePokemon()
    } catch (error) {
      console.error('Could Not Capture Pokemon');
      Pop.error(error, 'Could Not Capture Pokemon')

    }

  }


  drawCapturedPokemon() {

    const pokemons = AppState.SandboxPokemon
    let pokemonContent = ''
    pokemons.forEach(pokemon => pokemonContent += pokemon.capturedPokemonHTML);
    const pokemonElem = document.getElementById('capturedPokemon')
    pokemonElem.innerHTML = pokemonContent

  }

  countCapturedPokemons() {

    const pokemon = AppState.SandboxPokemon

    const countedPokemonElem = document.getElementById('countedPokemon')
    countedPokemonElem.innerText = pokemon.length.toString()

  }

  getCapturedPokemon() {
    sandboxService.getPokemon()


  }

}

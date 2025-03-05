import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxController {

  constructor() {

    AppState.on('SandboxPokemon', this.drawCapturedPokemon)

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


}

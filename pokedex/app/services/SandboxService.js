import { AppState } from "../AppState.js"
import { SandboxPokemon } from "../models/PokemonModel.js"
import { api } from "../utils/Axios.js"

class SandboxService {
  async captureActivePokemon() {
    const caughtPokemon = AppState.ActivePokemon

    const response = await api.post('api/pokemon', caughtPokemon)

    const newPokemon = new SandboxPokemon(response.data)

    AppState.SandboxPokemon.push(newPokemon)

  }


}





export const sandboxService = new SandboxService()
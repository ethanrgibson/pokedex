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

  async getPokemon() {

    const response = await api.get('api/pokemon')

    const pokes = response.data.map(pojo => new SandboxPokemon(pojo))

    AppState.SandboxPokemon = pokes



  }

}





export const sandboxService = new SandboxService()
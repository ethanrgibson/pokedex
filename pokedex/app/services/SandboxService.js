import { AppState } from "../AppState.js"
import { api } from "../utils/Axios.js"

class SandboxService {
  async captureActivePokemon() {
    const caughtPokemon = AppState.ActivePokemon

    const response = await api.post('api/pokemon', caughtPokemon)

    console.log(response.data);


  }


}





export const sandboxService = new SandboxService()
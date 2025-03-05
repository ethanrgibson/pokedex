import { sandboxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxController {

  async captureActivePokemon() {

    try {



      await sandboxService.captureActivePokemon()
    } catch (error) {
      console.error('Could Not Capture Pokemon');
      Pop.error(error, 'Could Not Capture Pokemon')

    }


  }



}

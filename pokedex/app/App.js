import { PokemonsController } from "./controllers/PokemonsController.js"
import { SandboxController } from "./controllers/SandboxController.js"


class App {

  pokemonsController = new PokemonsController()

  sandboxController = new SandboxController()

}

window['app'] = new App()



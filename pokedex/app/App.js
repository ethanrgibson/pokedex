import { AuthController } from "./Auth/AuthController.js"
import { PokemonsController } from "./controllers/PokemonsController.js"
import { SandboxController } from "./controllers/SandboxController.js"


class App {

  authController = new AuthController()

  pokemonsController = new PokemonsController()

  sandboxController = new SandboxController()

}

window['app'] = new App()



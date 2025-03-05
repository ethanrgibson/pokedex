import { PokemonsController } from "./controllers/PokemonsController.js"


class App {

  pokemonsController = new PokemonsController()

}

window['app'] = new App()



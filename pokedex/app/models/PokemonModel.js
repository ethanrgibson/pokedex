import { ActivePokemon } from "./ActivePokemon.js"

export class WildPokemon {


  constructor(data) {
    this.name = data.name
    this.url = data.url
  }


  get buttonHTML() {

    return `
    
    <div>
      <button onclick="app.pokemonsController.getActivePokemon('${this.name}')"  class="text-capitalize mb-2 bg-dark text-white rounded fs-3 w-100">
        ${this.name}
      </button>
    </div>
    
    
    `
  }

}


export class SandboxPokemon extends ActivePokemon {

  constructor(data) {
    super(data)
    this.id = data.id
  }


  get capturedPokemonHTML() {

    return `

 <button class="text-capitalize bg-cyan text-white rounded fs-3 w-100 mb-2">
        ${this.name}
      </button>
`



  }

}

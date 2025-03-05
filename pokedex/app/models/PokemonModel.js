
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




export class ActivePokemon {

  constructor(data) {
    this.name = data.name
    this.img = data.img ?? data.sprites.front_default
    this.backImg = data.backImg ?? data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.health || data.stats[0].base_stat
    this.defense = data.defense || data.stats[2].base_stat
    this.attack = data.attack || data.stats[1].base_stat
    this.typeOne = data.types || data.types[0].type.name


  }



}
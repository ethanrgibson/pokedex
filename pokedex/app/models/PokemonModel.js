
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
    this.speed = data.speed || data.stats[5].base_stat
    this.health = data.health || data.stats[0].base_stat
    this.defense = data.defense || data.stats[2].base_stat
    this.attack = data.attack || data.stats[1].base_stat
    this.type = data.types || data.types[0].type.name

  }


  get activePokeHTMLTemplate() {

    return `


<div class="bg-light shadow-lg mt-2 rounded p-1">
  <div class="border border-success rounded p-2">
    <h2>
      ${this.name}
    </h2>
  </div>
  <div class="d-flex justify-content-center bg-secondary rounded m-2">
    <img src="${this.img}"
      alt="Front of ${this.name}" class="poke-img">
    <img src="${this.backImg}"
      alt="Front of ${this.name}" class="poke-img">
  </div>
  <div class="bg-blue rounded-pill text-center fs-2 text-white">
    <p>
     ${this.type}
    </p>
  </div>
  <div class="bg-green rounded-pill text-center fs-2 text-white">
    <p>
      Grass
    </p>
  </div>
  <div class=" border border-success rounded px-2">
    <div class="d-flex justify-content-between">
      <p class="fs-3">Health:</p>
      <p class="fs-3">${this.health} hp</p>
    </div>
    <div class="d-flex justify-content-between">
      <p class="fs-3">Attack:</p>
      <p class="fs-3">${this.attack} ap</p>
    </div>
    <div class="d-flex justify-content-between">
      <p class="fs-3">Defense:</p>
      <p class="fs-3">${this.defense} dp</p>
    </div>
    <div class="d-flex justify-content-between">
      <p class="fs-3">Speed:</p>
      <p class="fs-3">${this.speed} sp</p>
    </div>
    <div class="d-flex justify-content-between">
      <p class="fs-3">Weight:</p>
      <p class="fs-3">${this.weight} LBS</p>
    </div>
    <div class="d-flex justify-content-between">
      <p class="fs-3">Height:</p>
      <p class="fs-3">${this.height} FT</p>
    </div>
  </div>
</div>


`


  }


}
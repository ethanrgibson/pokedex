import { AppState } from "../AppState.js";
import { Identity } from "../Auth/Identity.js";




export class ActivePokemon {

  constructor(data) {
    this.name = data.name;
    this.img = data.img ?? data.sprites.front_default;
    this.backImg = data.backImg ?? data.sprites.back_default;
    this.weight = data.weight;
    this.height = data.height;
    this.speed = data.speed || data.stats[5].base_stat;
    this.health = data.health || data.stats[0].base_stat;
    this.defense = data.defense || data.stats[2].base_stat;
    this.attack = data.attack || data.stats[1].base_stat;

    // TODO Fix types
    // this.type = data.types || data.types[0].type.name
  }


  get activePokeHTMLTemplate() {

    return `


<div class=" text-capitalize bg-light shadow-lg mt-2 rounded p-1 sticky-top">
  <div class="d-flex justify-content-between border border-success rounded p-2">
    <h2>
      ${this.name}
    </h2>
    <div>
      ${this.catchButton}
    </div>
  </div>
  <div class="d-flex justify-content-center bg-secondary rounded m-2">
    <img src="${this.img}"
      alt="Front of ${this.name}" class="poke-img">
    <img src="${this.backImg}"
      alt="Front of ${this.name}" class="poke-img">
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


`;


  }


  get catchButton() {

    const user = AppState.identity
    if (user == null) {
      return ''
    }
    return `
    <button onclick="app.sandboxController.captureActivePokemon()" class="btn btn-outline-danger fs-5 text-dark">
        C A T C H
      </button>
    `
  }


}

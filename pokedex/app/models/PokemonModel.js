
export class WildPokemon {


  constructor(data) {
    this.name = data.name
    this.url = data.url
  }


  get buttonHTML() {

    return `
    
    <div>
      <button class="text-capitalize mb-2 bg-dark text-white rounded fs-3 w-100">
        ${this.name}
      </button>
    </div>
    
    
    `
  }

}




export class Pokemon {

  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img
    this.backImg = data.backImg
    this.weight = data.weight
    this.height = data.height
    this.health = data.health
    this.defense = data.defense
    this.attack = data.attack
    this.types = data.types


  }



}
import { ActivePokemon, WildPokemon } from './models/PokemonModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {WildPokemon[]} */
  WildPokemon = []

  /**@type {ActivePokemon} */
  ActivePokemon = null
}

export const AppState = createObservableProxy(new ObservableAppState())
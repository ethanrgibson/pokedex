import { wildPokemon } from './models/PokemonModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {wildPokemon[]} */
  wildPokemon = []
}

export const AppState = createObservableProxy(new ObservableAppState())
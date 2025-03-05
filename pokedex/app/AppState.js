import { SandboxPokemon, WildPokemon } from './models/PokemonModel.js'
import { ActivePokemon } from "./models/ActivePokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {WildPokemon[]} */
  WildPokemon = []

  /** @type {ActivePokemon} */
  ActivePokemon = null

  /** @type {SandboxPokemon[]}   */
  SandboxPokemon = []
}

export const AppState = createObservableProxy(new ObservableAppState())
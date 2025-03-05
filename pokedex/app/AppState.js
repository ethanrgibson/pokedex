import { SandboxPokemon, WildPokemon } from './models/PokemonModel.js'
import { ActivePokemon } from "./models/ActivePokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Identity } from './Auth/Identity.js'

class ObservableAppState extends EventEmitter {

  /** @type {WildPokemon[]} */
  WildPokemon = []

  /** @type {ActivePokemon} */
  ActivePokemon = null

  /** @type {SandboxPokemon[]}   */
  SandboxPokemon = []

  /**
   * @type {Identity}
   */
  identity = null
}

export const AppState = createObservableProxy(new ObservableAppState())
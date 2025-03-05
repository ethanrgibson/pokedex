import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {{name:string, url:string}[]} */
  wildPokemon = []
}

export const AppState = createObservableProxy(new ObservableAppState())
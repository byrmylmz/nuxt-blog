import { create } from 'core-js/core/object'
import Vuex from 'vuex'
import postModule from './modules/post'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      post: postModule
    }
  })
}

export default createStore

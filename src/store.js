import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 1,
      usuario: {codigo:1, nombre:'pepe'}
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export {
    store
}
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 1,
      usuario: {codigo:1, nombre:'pepe'},
      productos: [{codigo: 1, descripcion: 'Tele'}, 
                  {codigo: 2, descripcion: 'Cocina'},
                  {codigo: 3, descripcion: 'Microondas'},
                ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {                   //Todos los métodos getters llevan como parametro el state
    getcantidadProductos(state){
      return state.productos.length
    },
    getProductoPorCodigo:(state) => (codigo) => {
      return state.productos.find(producto => producto.codigo == codigo)
    }
  }
})

export {
    store
}
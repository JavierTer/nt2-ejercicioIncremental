<template>
  <div>
      <h2>Sistema</h2>
      <p>Estado {{this.$store.state.count}}</p>
      <p>Estado desde ... mapState {{count}}</p> 
      <p>Usuario desde ... mapState {{usuario}}</p> 
      <p>Cantidad de productos {{cantidadProductos}}</p>
      <p>Cantidad de productos desde getters {{this.$store.getters.getcantidadProductos}}</p>
      <p>Producto código 2 por getters {{this.$store.getters.getProductoPorCodigo(2)}}</p>
      <br>
      <br>
      <p>Cantidad de productos desde mapGetters {{getcantidadProductos}}</p>
      <p>Producto código 2 por mapGetters {{getProductoPorCodigo(3)}} </p>

  </div>
</template>

<script>

import{mapState, mapGetters} from 'vuex'

export default {
name: 'SistemaView',
    /* computed: {                                                      
            count(){
            return this.$store.state.count
        }
    }, */

    //Este count que hacemos referencia en la linea 22 seria el count del storage o store
    //Los ... --> significa el operador spread
    computed: {
        ...mapState(['count', 'usuario']),

            //Para acceder a la lista de productos del store
            cantidadProductos (){
                    return this.$store.state.productos.length
           },
           ...mapGetters(['getcantidadProductos', 'getProductoPorCodigo'])
    }
}
</script>

<style>

</style>
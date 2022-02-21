<template>
  <div>
      <h2>Sistema</h2>
      <p>Estado {{this.$store.state.count}}</p>
      <p>Estado desde ... mapState {{count}}</p> 
      <p>Usuario desde ... mapState {{usuario}}</p> 

  </div>
</template>

<script>

import{mapState} from 'vuex'

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
    ...mapState(['count', 'usuario'])
}
}
</script>

<style>

</style>
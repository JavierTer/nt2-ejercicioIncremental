<template>
    <div >
        <h2>About ...</h2>
        <p>Numero About {{numero}}</p>
        
        <button v-on:click="Incrementar">Incrementar valor</button>
  </div>
</template>

<script> 
  export default {
    name:'AboutView',
    data () {
      return {
        numero : 0
      }
    },
    methods: {
      Incrementar(){
        this.numero++
        console.log(this.numero)
      }
    }
  }
</script>

<style>

</style>
  
  


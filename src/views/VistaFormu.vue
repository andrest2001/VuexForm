<template>
  <section>
    <div>
      <label>Nombre</label>
    </div>
    <input type="text" placeholder="Nombre" v-model="$store.state.nombre">
    <div>
      <label>Edad</label>
    </div>
    <input type="number" placeholder="Edad" v-model="$store.state.edad">
    <div id="boton">
      <button @click="addPerson">Enviar</button>
    </div>

    <img src="../assets/Coder.png" alt="">
  </section>
</template>

<script>
export default {
    name:'VistaFormu',
    methods:{
        addPerson(){
          this.$store.dispatch('accionAddPerson')
        }
    }
}
</script>

<style lang="sass" scoped>
  section
    display: flex
    align-items: center
    flex-direction: column
    color: white
    
    height: 100vh
    input
      margin-top: 10px
      width: 80%
      border-radius: 5px
      padding: .5rem
      border: none
  div
    display: flex
    width: 100%
    flex-direction: column
    label
      margin-top: 20px
      width: 100%
      padding-left: 2rem
    

    button
      width: 20%
      border-radius: 5px
      padding: .5rem
      background: blue
      color: white

      
  
  #boton
    margin-top: 20px
    padding-left: 53px


  img
    margin-top: 100px
    
    
    
    
</style>
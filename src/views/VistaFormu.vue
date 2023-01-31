<template>
  <section>
    <label>Nombre</label>
    <input type="text" placeholder="Nombre" v-model="$store.state.nombre">

    <label>Edad</label>
    <input type="numbre" placeholder="Edad" v-model="$store.state.edad">

    <button @click="addPerson">Enviar</button>
  </section>
</template>

<script>
export default {
    name:'VistaFormu',
    methods:{
        addPerson(){
            this.$store.dispatch('accionAddperson')
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
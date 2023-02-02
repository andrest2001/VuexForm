<template>
    <div>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
            </tr>
            <tr v-for="usuario in $store.state.datos_login" :key="usuario.nombre">
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.edad}}</td>
            </tr>
        </table>
    </div>

  <img src="../assets/Analytics.png" alt="">
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    div
        width: 100%
        display: flex
        justify-content: center
        align-items: center

        
    table
        border: .1px solid gray
        width: 70%
        margin-top: 20px
        background: white
        color: black      
        tr, td, th
            padding: .5rem
            

        th
            background: #C8C8C8
        

    img
        position: absolute
        bottom: 11%
</style>
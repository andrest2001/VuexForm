<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/datos">Datos</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
*{
  font-family: 'Nunito', sans-serif;
}
body{
  background: rgb(41,194,148);
  background: linear-gradient(180deg, rgba(41,194,148,1) 0%, rgba(44,151,174,1) 100%);
  height: 100vh;
}
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

a{
  margin-top: 30px;
  text-decoration: none;
  color: white;
}

</style>

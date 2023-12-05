<script setup>
    import Home from './components/Home.vue'
    import Equipos from './components/Equipos.vue'
    import Jugadores from './components/Jugadores.vue'
    import axios from 'axios'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <br>
  <router-view></router-view>
</template>

<script>
export default{
  name:'App'
}
</script>

<style scoped>

</style>

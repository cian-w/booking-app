<template>
  <div id="app">
    <menu-form></menu-form>
    <router-view/>
  </div>
</template>

<script>
import MenuForm from './components/Menu.vue'

export default {
  name: 'app',
  components: { MenuForm }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id='app'>
    <Navsidebar></Navsidebar>
    <Barratop></Barratop>

    <router-view></router-view>
  </div>
</template>


<script>
import './styles/global.css'
import Navsidebar from './components/Navsidebar.vue'
import Barratop from './components/Barrtop.vue'

export default {
  name: 'App',
  components: {
   Navsidebar,
   Barratop
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'app',
  components: {
    Products,
  }
  
}
</script>

<style>

</style>

<template>
  <div class="home-page">
    <search></search>
    <tab></tab>
  </div>
  
</template>

<script setup lang="ts">
import search from './components/search.vue'
import tab from './components/tab.vue'
</script>
<style lang="sass">
.home-page
  width: 60%
  height: 100vh
  background-color: rgb(209 204 204 / 10%)
  margin: 20px auto
  padding: 20px
</style>
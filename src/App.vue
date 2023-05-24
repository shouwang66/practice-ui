<template>
  <div class="root">
    <router-view></router-view>
    <!-- hhhh {{ input }}
    <p-input v-model="input" placeholder="请输入" size="100px" clearable="true">
    </p-input> -->
  </div>
  
</template>

<script setup lang="ts">
// import {ref} from 'vue'
// import PInput from '..//packages/input/index.vue';
// const input = ref('')
</script>
<style lang="sass">
.root
  width: 100%
  height: 100vh
  background-color: #fff
.btn
  display: flex
  align-items: center
  justify-content: center
  color: #fff
  background-color: blue
</style>
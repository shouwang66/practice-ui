<template>
  <div>
    <p-input v-model="input" placeholder="请输入" size="100px" clearable="true">
    </p-input>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import PInput from '../../../packages/input/index.vue';
const input = ref('')
</script>
<style lang="sass">
</style>
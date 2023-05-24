<template>
  <div class="tab-box">
    <!-- tab切换 -->
   <div class="tab-header-box">
    <span class="tab " :class="['tab', item.active === tabActive ? 'active':'']" v-for="(item,index) of tabList" :key="index" @click="changeTab(item.active)">{{ item.name }}</span>
   </div>
   <!-- tab切换 的内容 -->
   <div class="tab-content-box">
    <component :is="currentTab" :data="tabData"></component>
    <!-- <tab-one></tab-one>
    <tab-two></tab-two> -->
   </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import tabOne from './tab/tab-one.vue'
import tabTwo from './tab/tab-two.vue'

const tabList = [{
  active: 1,
  name: '我也是tab1'
},{
  active: 2,
  name: '我也是tab2'
},]
const tabActive = ref(1)
const changeTab = (val:number) => {
  tabActive.value = val
}
const currentTab = computed(() => {
  return tabActive.value === 1 ? tabOne : tabTwo
})
const tabData = computed(() => {
  return tabActive.value === 1 ? { message: 'Hello from Tab One' } : { message: 'Hello from Tab Two' }
})

</script>
<style lang="sass">
.tab-box
  margin: 20px auto
  .tab-header-box
    padding: 20px
    border-bottom: 1px solid #ddd 
    .tab
      margin-right: 20px
      &.active
        color: red
</style>
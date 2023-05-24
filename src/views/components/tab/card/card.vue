<template>
  <div class="card-item" :style="{width: width}">
    <div class="img-box">
      <img class="item-img" :src="item.imgSrc" />
    </div>
    <template v-if="slot">
      <slot>默认内容</slot>
    </template>
    <card-item v-else :item="item"></card-item>
  </div>
</template>

<script setup lang="ts">
import cardItem from './card-item.vue'
interface Item {
  imgSrc: string;
  slot?: boolean;
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  quantity: number;
}

interface Props {
  item: Item,
  width?: number,
  slot?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  item: () => ({
    imgSrc: '',
    slot: false,
    id: 0,
    name: '',
    price: 0,
    discountPrice: 0,
    quantity: 0
  }),
  width: 200,
  slot: false
})

console.log(props)

</script>
<style lang="sass">
.card-item 
  background-color: #fff
  border-radius: 4px
  .img-box
    width: 100%
    .item-img
      width: 100%
  .item-product
    padding: 10px
    .product-name
      font-weight: bold
      font-size: 14px
    .price-con
      .price-discont
        color: #f2272b
        margin-right: 10px
      .price-old
        color: #999
        text-decoration: line-through

</style>
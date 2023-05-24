<template>
  <div class="item-product">
      <p class="product-name">{{ item.name }}</p>
      <div class="price-con">
        <span class="price-discont">¥{{ item.discountPrice }}</span>
        <span class="price-old">¥{{ item.price }}</span>
      </div>
    </div>
</template>

<script setup lang="ts">
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
  item: Item
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
  })
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
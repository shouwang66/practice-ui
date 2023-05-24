<template>
  <div class="card-box">
    <div class="card-item-box" v-for="(card,index) of cart.items" :key="index" :item="card">
      <card :item="card" :slot="card.slot" width="200px">
        <template #default>
          <div class="cart-style-one" v-if="index===1">
            <span class="sub" @click="decreaseQuantity(card)">-</span>
            <span class="num">{{ card.quantity }}</span>
            <span class="add" @click="increaseQuantity(card)">+</span>
          </div>
          <div class="cart-style-two" v-else-if="index===2">
            <span class="num">{{ card.quantity }}</span>
            <div class="oprate-box">
              <span class="sub" @click="decreaseQuantity(card)">-</span>
              <span class="add" @click="increaseQuantity(card)">+</span>
            </div>
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<script setup lang="ts">
// import {ref} from 'vue'
import card from './card/card.vue'
import useCart from '../../composable/useCart';

const listProduct = [{
  imgSrc: 'https://img.alicdn.com/imgextra/i4/27241811/O1CN01zz7nZA1PFU57gAnEd_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
  slot: false,
  id: 1, 
  name: 'Item 1', 
  price: 100, 
  discountPrice: 50,
  quantity: 0
},{
  imgSrc: 'https://gw.alicdn.com/bao/uploaded/i1/2616970884/O1CN01SJn46h1IOuxQWSuYJ_!!0-item_pic.jpg_300x300q90.jpg_.webp',
  slot: true,
  id: 1, 
  name: 'Item 1', 
  price: 1000, 
  discountPrice: 600,
  quantity: 0
},{
  imgSrc: 'https://gw.alicdn.com/bao/uploaded/i3/2212019214581/O1CN01UxaD3F1ji9BYAG4km_!!0-item_pic.jpg_300x300q90.jpg_.webp',
  slot: true,
  id: 1, 
  name: 'Item 1', 
  price: 10, 
  discountPrice: 5,
  quantity: 0
}]

const { cart, increaseQuantity, decreaseQuantity, totalPrice } = useCart(listProduct);
console.log(cart.items, increaseQuantity, decreaseQuantity, totalPrice, 'jjjhhh')


</script>
<style lang="sass">
.card-box
  margin: 20px auto
  display: flex
  flex-wrap: wrap
  .card-item-box
    // flex: 1
    margin-right: 10px
    margin-bottom: 20px
.cart-style-one
  .sub
    border: 1px solid #ccc
    color: #ccc
    padding: 0 10px
    
  .num
    padding: 0 10px
    border-top: 1px solid #ccc
    border-bottom: 1px solid #ccc
  .add
    border: 1px solid #ccc
    color: #ccc
    padding: 0 10px
.cart-style-two
  display: flex
  align-items: center
  justify-content: space-between
  background-color: #ccc
  .num
    padding-left: 10px
  .oprate-box
    display: flex
    flex-direction: column

  .sub,.add
    border: 1px solid #fff
    color: #fff
    padding: 0 10px
</style>
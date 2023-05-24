// useCart.ts
import { reactive, computed } from 'vue';

interface Item {
  imgSrc: string;
  slot?: boolean;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function useCart(initialItems: Item[]) {
  const cart = reactive({
    items: initialItems,
  });

  const increaseQuantity = (item: Item) => {
    item.quantity++;
  };

  const decreaseQuantity = (item: Item) => {
    if (item.quantity > 0) {
      item.quantity--;
    }
  };

  const totalPrice = computed(() => {
    return cart.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  });

  return {
    cart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  };
}

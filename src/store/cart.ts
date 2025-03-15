import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({}),
  
    actions: {
      // 你可以在 actions 中定义方法，这些方法可以修改 state。
      // 你可以在组件中使用 `store.cart.add()` 调用这个方法。
      add() {
        // ...
      },
    },
  });
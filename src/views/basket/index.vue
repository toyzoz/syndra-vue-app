<template>
  <div class="basket-page">
    <h1>购物车</h1>

    <div class="basket-info">
      <div v-for="item in basketItems" :key="item.id" class="basket-item">
        <img :src="item.pictureUrl" alt="商品图片" class="product-image" />
        <div class="product-details">
          <p class="product-name">{{ item.productName }}</p>
          <p class="product-price">
            <span class="current-price">{{ item.unitPrice }} 元</span>
            <span v-if="item.oldUnitPrice" class="old-price"
              >{{ item.oldUnitPrice }} 元</span
            >
          </p>
          <p class="product-quantity">数量: {{ item.quantity }}</p>
          <input type="number" v-model="item.quantity" />
        </div>
      </div>
    </div>

    <div class="basket-summary">
      <p>总计: {{ getTotalPrice }} 元</p>
      <button @click="checkout">结账</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BasketItem } from "@/types/basket/Basket";
import { ref, computed, type Ref } from "vue";

const basketItems: Ref<BasketItem[]> = ref([]);

const checkout = () => {
  alert("结账功能尚未实现");
};

const getBasketList = (): BasketItem[] => {
  // 模拟获取购物车列表
  return [
    {
      id: 1,
      productName: "iPhone 13",
      unitPrice: 8000,
      quantity: 1,
      productId: 0,
      pictureUrl: "https://example.com/iphone13.jpg",
      oldUnitPrice: 8500,
    },
    {
      id: 2,
      productName: "MacBook Pro",
      unitPrice: 12000,
      quantity: 1,
      productId: 0,
      pictureUrl: "https://example.com/macbookpro.jpg",
      oldUnitPrice: 12500,
    },
  ];
};

basketItems.value = getBasketList();

const getTotalPrice = computed(() => {
  return basketItems.value.reduce((total, item) => {
    return total + item.unitPrice * item.quantity;
  }, 0);
});
</script>

<style scoped>
.basket-page {
  padding: 20px;
}

.basket-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
}

.product-price {
  font-size: 16px;
  margin: 5px 0;
}

.current-price {
  color: red;
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: gray;
  margin-left: 10px;
}

.product-quantity {
  font-size: 14px;
}

.basket-summary {
  margin-top: 20px;
}

.basket-summary p {
  font-size: 18px;
  font-weight: bold;
}

.basket-summary button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>

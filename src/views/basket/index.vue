<template>
  <div class="basket-page p-6 bg-gray-50 rounded-lg shadow-lg">
    <h1 class="text-3xl font-semibold text-gray-800 mb-6">购物车</h1>

    <div class="basket-info space-y-6">
      <div
        v-for="item in basketItems"
        :key="item.id"
        class="basket-item flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
      >
        <img
          :src="item.pictureUrl"
          alt="商品图片"
          class="product-image w-24 h-24 object-cover rounded-lg"
        />
        <div class="product-details flex-1">
          <p class="product-name text-lg font-semibold">
            {{ item.productName }}
          </p>
          <p class="product-price text-gray-600">
            <span class="current-price text-xl font-bold text-red-500"
              >{{ item.unitPrice }} 元</span
            >
            <span
              v-if="item.oldUnitPrice"
              class="old-price line-through ml-2 text-gray-400"
              >{{ item.oldUnitPrice }} 元</span
            >
          </p>
          <p class="product-quantity text-gray-600">
            数量: {{ item.quantity }}
          </p>
          <input
            type="number"
            v-model="item.quantity"
            @change="updateQuantity(item.id, item.quantity)"
            class="mt-2 p-2 border rounded-lg w-20"
          />
          <button
            @click="removeItem(item.id)"
            class="mt-2 p-2 bg-red-500 text-white rounded-lg"
          >
            删除
          </button>
        </div>
      </div>
    </div>

    <div class="basket-summary mt-8 p-6 bg-white rounded-lg shadow-md">
      <p class="text-lg font-semibold">
        总计:
        <span class="text-xl font-bold text-red-500"
          >{{ getTotalPrice }} 元</span
        >
      </p>
      <button
        @click="checkout"
        class="mt-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        结账
      </button>
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

const removeItem = (id: number) => {
  basketItems.value = basketItems.value.filter((item) => item.id !== id);
};

const updateQuantity = (id: number, quantity: number) => {
  const item = basketItems.value.find((item) => item.id === id);
  if (item) {
    item.quantity = quantity;
  }
};
</script>

<style scoped></style>

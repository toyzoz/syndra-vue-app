<template>
  <div class="product-list p-6 bg-gray-50 rounded-lg shadow-lg">
    <div
      class="product-card card flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition mb-6"
      v-for="item in products"
      :key="item.id"
    >
      <div class="product-image w-full md:w-1/3 mb-4 md:mb-0">
        <img
          :src="item.pictureFileName"
          alt="product"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div class="product-info w-full md:w-2/3 md:pl-4">
        <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
        <p class="text-gray-700 mb-2">{{ item.description }}</p>
        <p class="text-lg font-bold text-green-600 mb-4">
          Price: ${{ item.price }}
        </p>
        <button
          @click="handleAddCart(item.id)"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogItem } from "@/types/catalog/CatalogItem";

defineProps<{ products: CatalogItem[] }>();

const handleAddCart = (productId: number) => {
  console.log("Add Cart", productId);
};
</script>

<style scoped></style>

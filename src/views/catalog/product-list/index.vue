<template>
  <div class="product-list">
    <div class="product-card" v-for="item in products" :key="item.id">
      <div class="product-image">
        <img :src="item.pictureFileName" alt="product" />
      </div>
      <div class="product-info">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p>Price: ${{ item.price }}</p>
        <button @click="handleAddCart(item.id)">Add Cart</button>
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

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  width: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

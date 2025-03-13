<template>
  <div class="product-card">
    <h1>{{ product.name }}</h1>
    <p>{{ product.price }}</p>
    <button @click="addToCart">加入购物车</button>
  </div>
</template>

<script setup lang="ts">
import type { CatalogItem } from "@/types/catalog/CatalogItem";

function addToCart() {
  alert("加入购物车");
}

const { product } = defineProps<{ product: CatalogItem }>();
</script>

<style scoped></style>

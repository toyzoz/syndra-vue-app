<template>
  <div class="product-list">
    <ProductCard
      v-for="(item, index) in products"
      :key="index"
      :product="item"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import ProductCard from "./ProductCard.vue";
import type { CatalogItem } from "@/types/catalog/CatalogItem";
const products: Ref<CatalogItem[]> = ref([
  {
    name: "商品1",
    description: "商品1的描述",
    price: 100,
  },
  {
    name: "商品2",
    description: "商品2的描述",
    price: 200,
  },
  {
    name: "商品3",
    description: "商品3的描述",
    price: 300,
  },
]);
</script>

<style scoped></style>

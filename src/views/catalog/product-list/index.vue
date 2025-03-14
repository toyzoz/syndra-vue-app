<template>
  <div>product list</div>
  <div v-for="item in products" :key="item.id">
    {{ item }}
  </div>
</template>

<script setup lang="ts">
import type { CatalogItem } from "@/types/catalog/CatalogItem";

const props = defineProps<{ products: CatalogItem[] }>();
const products = props.products;
</script>

<style scoped></style>

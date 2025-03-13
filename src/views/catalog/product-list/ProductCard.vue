<template>
  <div>product</div>
</template>

<script setup lang="ts">
import type { CatalogItem } from "@/types/catalog/CatalogItem";

function addToCart() {
  alert("加入购物车");
}

const { product } = defineProps<{ product: CatalogItem }>();
</script>

<style scoped></style>

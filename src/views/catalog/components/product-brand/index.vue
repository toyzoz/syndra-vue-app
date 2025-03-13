<template>
  <div>
    <span>{{ brand.id }}</span>
    <span>{{ brand.brand }}</span>
  </div>
</template>

<script setup lang="ts">
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";

const props = defineProps<{ type: CatalogBrand }>();
const brand = props.type || { id: 1, brand: "默认品牌" };
</script>

<style scoped></style>

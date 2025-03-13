<template>
  <div class="brand-list">
    <ul>
      <li v-for="(brand, index) in brands" :key="index">
        {{ brand.brand }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { CatalogBrand } from "@/types/CatalogBrand";

const { brands } = defineProps<{
  brands: { type: CatalogBrand[]; default: [{ id: 1; brand: "默认品牌" }] };
}>();
</script>

<style scoped></style>

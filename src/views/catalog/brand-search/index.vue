<template>
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-xl font-semibold mb-2">Brand</h2>
    <hr class="mb-4" />
    <div class="brand-list flex flex-wrap gap-2">
      <span
        class="cursor-pointer px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >All</span
      >
      <span
        v-for="brand in brands"
        :key="brand.id"
        @click="selectBrand(brand.id)"
        class="cursor-pointer px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >{{ brand.brand }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";

defineProps<{ brands: CatalogBrand[] }>();
const emit = defineEmits(["brand-select"]);

const selectBrand = (brandId: number) => {
  emit("brand-select", brandId);
};
</script>

<style scoped></style>

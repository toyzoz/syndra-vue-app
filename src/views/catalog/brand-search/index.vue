<template>
  <h2>Brand</h2>
  <hr />
  <div class="brand-list">
    <span>All</span>
    <span
      v-for="brand in brands"
      :key="brand.id"
      @click="selectBrand(brand.id)"
      >{{ brand.brand }}</span
    >
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

<style scoped>
.brand-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 10px;
}

.brand-list span {
  cursor: pointer;
  border: 1px solid #ccc;
  background: #333;
  color: #fff;
  border-radius: 10px;
  padding: 5px;
}
</style>

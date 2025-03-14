<template>
  <h2>Brand</h2>
  <div class="brand-list" v-for="brand in brands" :key="brand.id">
    <span>{{ brand.brand }}</span>
  </div>
</template>

<script setup lang="ts">
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import { ref, type Ref } from "vue";

const props = defineProps<{ brands: Ref<CatalogBrand[]> }>();

const brands = props.brands;

// 选中的brand
const selectedBrand = ref(0);
function selectBrand(brandId: number) {
  selectedBrand.value = brandId;
}
</script>

<style scoped></style>

<template>
  <h2>Brand</h2>
  <div class="brand-list" v-for="brand in brands" :key="brand.id">
    <span>{{ brand.brand }}</span>
  </div>
</template>

<script setup lang="ts">
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { Ref } from "vue";

const props = defineProps<{ brands: Ref<CatalogBrand[]> }>();

const brands = props.brands;
</script>

<style scoped></style>

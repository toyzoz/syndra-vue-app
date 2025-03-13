<script setup lang="ts">
import BrandSearch from '@/pages/catalog/BrandSearch.vue'
import TypeSearch from '@/pages/catalog/TypeSearch.vue'
import ProductList from '@/pages/catalog/ProductList.vue'
</script>

<template>
  <div class="flex">
    <div class="w-1/4 p-4">
      <BrandSearch />
      <TypeSearch />
    </div>
    <div class="w-3/4 p-4">
      <ProductList />
    </div>
  </div>
</template>

<style scoped></style>

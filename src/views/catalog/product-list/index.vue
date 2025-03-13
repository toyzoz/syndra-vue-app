<template>
  <div>product list</div>
  <ProductCard v-for="product in 20" :product="product" />
</template>

<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
</script>

<style scoped></style>

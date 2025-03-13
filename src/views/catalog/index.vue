<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <!-- 品牌 -->
      <div class="brand-search">
        <BrandSearch />
      </div>
      <!-- 类型 -->
      <div class="type-search">
        <TypeSearch />
      </div>
    </div>

    <!-- 产品列表 -->
    <div class="product-list">
      <ProductList />
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandSearch from "./brand-search/index.vue";
import TypeSearch from "./type-search/index.vue";
import ProductList from "./product-list/index.vue";
</script>

<style scoped></style>

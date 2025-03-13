<template>
  <div>
    <div class="search">
      <div class="brand-search">
        <h1>Brand</h1>
        <BrandList :brands="brands" />
      </div>
      <div class="type-search">
        <h1>Type</h1>
        <TypeList :types="types" />
      </div>
    </div>
    <div class="product-list">
      <ProductList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { CatalogType } from "@/types/catalog/CatalogType";
import TypeList from "./components/TypeList.vue";
import BrandList from "./components/BrandList.vue";
import ProductList from "./components/ProductList.vue";

const brands: Ref<CatalogBrand[]> = ref([]);
const types: Ref<CatalogType[]> = ref([]);

function getBrandList() {
  brands.value = [
    { id: 1, brand: "品牌1" },
    { id: 2, brand: "品牌2" },
    { id: 3, brand: "品牌3" },
  ];
}

function getTypeList() {
  types.value = [
    { id: 1, type: "类型1" },
    { id: 2, type: "类型2" },
    { id: 3, type: "类型3" },
  ];
}

function getProductList() {
  // 获取产品列表
}

onMounted(() => {
  getBrandList();
  getTypeList();
});
</script>

<style scoped></style>

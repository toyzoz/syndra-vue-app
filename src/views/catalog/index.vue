<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <!-- 品牌 -->
      <div class="brand-search">
        <BrandSearch :brands="brands" />
      </div>
      <!-- 类型 -->
      <div class="type-search">
        <TypeSearch :types="types" />
      </div>
    </div>

    <!-- 产品列表 -->
    <div class="product-list">
      <ProductList :products="products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandSearch from "./brand-search/index.vue";
import TypeSearch from "./type-search/index.vue";
import ProductList from "./product-list/index.vue";
import { onMounted, ref, type Ref } from "vue";
import { getBrandListApi, getCatalogListApi, getTypeListApi } from "@/api/catalog";
import type { CatalogItem } from "@/types/catalog/CatalogItem";
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { CatalogType } from "@/types/catalog/CatalogType";

let products: Ref<CatalogItem[]> = ref([]);
let brands: Ref<CatalogBrand[]> = ref([]);
let types: Ref<CatalogType[]> = ref([]);

onMounted(async () => {
  console.log("Catalog page mounted");
  products.value = await getCatalogListApi();
  brands.value = await getBrandListApi();
  types.value = await getTypeListApi();
});
</script>

<style scoped></style>

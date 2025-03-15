<template>
  <div class="catalog p-4">
    <div class="search mb-4">
      <h5 class="text-lg font-semibold mb-2">Filters</h5>
      <div class="brand-search mb-4">
        <BrandSearch :brands="brands" @brand-select="handleBrandSelect" />
      </div>
      <div class="type-search mb-4">
        <TypeSearch :types="types" @type-select="handleTypeSelect" />
      </div>
    </div>
    <div class="product-list">
      <ProductList :products="products" />
      <Pagination
        :count="count"
        :pageSize="pageSize"
        :pageIndex="pageIndex"
        @update:modelValue="handlePageChange"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandSearch from "./brand-search/index.vue";
import TypeSearch from "./type-search/index.vue";
import ProductList from "./product-list/index.vue";
import Pagination from "@/components/pagination/index.vue";
import { onMounted, ref, type Ref } from "vue";
import {
  getBrandListApi,
  getCatalogListApi,
  getTypeListApi,
} from "@/api/catalog";
import type { CatalogItem } from "@/types/catalog/CatalogItem";
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { CatalogType } from "@/types/catalog/CatalogType";

const products: Ref<CatalogItem[]> = ref([]);
const brands: Ref<CatalogBrand[]> = ref([]);
const types: Ref<CatalogType[]> = ref([]);
const loading = ref(true);

const selectedBrand = ref(0);
const selectedType = ref(0);

const pageSize = 10;
const pageIndex = ref(1);
const count = ref(0);

onMounted(async () => {
  await fetchProducts(null, null);
  await fetchbrandAndType();
});

const handleBrandSelect = async (brandId: number) => {
  selectedBrand.value = brandId;

  await fetchProducts(brandId, selectedType.value);
};

const handleTypeSelect = async (typeId: number) => {
  selectedType.value = typeId;
  await fetchProducts(selectedBrand.value, typeId);
};

const handlePageChange = async (newPage: number) => {
  pageIndex.value = newPage;
  await fetchProducts(selectedBrand.value, selectedType.value);
};

async function fetchProducts(brand: number | null, type: number | null) {
  const result = await getCatalogListApi(
    brand,
    type,
    pageIndex.value,
    pageSize
  );
  products.value = result.data;
  count.value = result.count;

  loading.value = false;
}

async function fetchbrandAndType() {
  brands.value = await getBrandListApi();
  types.value = await getTypeListApi();
}
</script>

<style scoped></style>

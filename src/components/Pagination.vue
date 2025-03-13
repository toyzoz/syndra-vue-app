<template>
    <div>
        <h2>产品目录</h2>
        <div class="catalog-list">
            <ProductCard v-for="product in paginatedProducts" :key="product.id" :product="product"
                @add-to-cart="handleAddToCart" />
        </div>
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="updateCurrentPage" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductCard from '@/pages/catalog/ProductCard.vue';
import Pagination from '@/components/Pagination.vue';
import { CatalogItem } from '@/types/CatalogItem';

const products = ref<CatalogItem[]>([
    { id: 1, name: '产品1', description: '这是产品1的描述', price: 100 },
    { id: 2, name: '产品2', description: '这是产品2的描述', price: 200 },
    { id: 3, name: '产品3', description: '这是产品3的描述', price: 300 },
    // 添加更多产品以测试分页
]);

const currentPage = ref(1);
const itemsPerPage = 2;

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.value.slice(start, end);
});

function handleAddToCart(product: CatalogItem) {
    console.log('加入购物车:', product);
}

function updateCurrentPage(page: number) {
    currentPage.value = page;
}
</script>

<style scoped>
.catalog-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
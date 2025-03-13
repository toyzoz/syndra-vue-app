<template>
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
            <p class="text-gray-700 text-base mb-4">{{ product.description }}</p>
            <p class="text-gray-900 font-semibold mb-4">{{ product.price }} 元</p>
            <button @click="addToCart" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                加入购物车
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CatalogItem } from "@/types/CatalogItem";

function addToCart() {
    alert("加入购物车");
}

const { product } = defineProps<{ product: CatalogItem }>();
</script>

<style scoped></style>

<template>
    <div>
        <!-- <Catalog v-for="(item, index) in products" :key="index" :catalog="item"></Catalog> -->
        <ul v-for="product in products" :key="product.id">
            <li>{{ product.name }}</li>
            <li>{{ product.price }}</li>
        </ul>

        <button>API</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Catalog } from '../../types/Catalog';

const products: Catalog[] = ref([
    {
        id: 1,
        name: 'Product 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300
    }
]);

console.log(products);

</script>

<style scoped></style>
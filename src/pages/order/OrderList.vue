<template>
    <div>
        this order list

        <ul v-for="(item, index) in orders" :key="index">
            <li>{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const orders = ref([{
    id: 1,
    name: '订单1',
    price: 100
}, {
    id: 2,
    name: '订单2',
    price: 200
}, {
    id: 3,
    name: '订单3',
    price: 300
}]);
</script>

<style scoped></style>
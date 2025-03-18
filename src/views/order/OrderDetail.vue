<template>
  <div class="p-6 bg-gray-50 rounded-lg shadow-lg">
    <h1 class="text-3xl font-semibold text-gray-800 mb-4">订单详情</h1>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <p class="text-gray-600">订单编号: {{ route.params.id }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

console.log("route", route);
console.log("router", router);
</script>

<style scoped></style>

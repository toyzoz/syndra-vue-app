<template>
  <div class="p-6 bg-gray-50">
    <h1 class="text-3xl font-semibold text-gray-800 mb-6">订单列表</h1>
    <div class="space-y-4">
      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
      >
        <p class="text-gray-800 font-medium">订单ID: {{ order.id }}</p>
        <p class="text-gray-600">客户名称: {{ order.customerName }}</p>
        <p class="text-gray-600">订单金额: {{ order.amount }}</p>
        <p class="text-gray-600">订单日期: {{ order.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOrderListApi } from "@/api/order";
import type { Order } from "@/types/order/Order";
import { onMounted, ref, type Ref } from "vue";

const orders: Ref<Order[]> = ref([]);

onMounted(async () => {
  console.log("Order page mounted");
  orders.value = await getOrderListApi();
});
</script>

<style scoped></style>

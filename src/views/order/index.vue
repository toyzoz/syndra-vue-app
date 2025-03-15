<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">订单列表</h1>
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">订单ID</th>
          <th class="py-2 px-4 border-b">客户名称</th>
          <th class="py-2 px-4 border-b">订单金额</th>
          <th class="py-2 px-4 border-b">订单日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">{{ order.id }}</td>
          <td class="py-2 px-4 border-b">{{ order.customerName }}</td>
          <td class="py-2 px-4 border-b">{{ order.amount }}</td>
          <td class="py-2 px-4 border-b">{{ order.date }}</td>
        </tr>
      </tbody>
    </table>
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

<style scoped>
/* TailwindCSS classes are used directly in the template */
</style>

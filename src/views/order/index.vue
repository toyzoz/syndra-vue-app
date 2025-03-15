<template>
  <div>
    <h1>订单列表</h1>
    <table>
      <thead>
        <tr>
          <th>订单ID</th>
          <th>客户名称</th>
          <th>订单金额</th>
          <th>订单日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customerName }}</td>
          <td>{{ order.amount }}</td>
          <td>{{ order.date }}</td>
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
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>

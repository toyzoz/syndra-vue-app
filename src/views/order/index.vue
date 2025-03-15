<template>
  <div>order index</div>
</template>

<script setup lang="ts">
import { getOrderListApi } from "@/api/order";
import type { Order } from "@/types/order/Order";
import { onMounted, ref, type Ref } from "vue";

let orders: Ref<Order[]> = ref([]);

onMounted(async () => {
  console.log("Order page mounted");
  orders.value = await getOrderListApi();
});
</script>

<style scoped></style>

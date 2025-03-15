<template>
  <div class="p-4 bg-white rounded shadow-md">order deatil</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

console.log("route", route);
console.log("router", router);
</script>

<style scoped></style>

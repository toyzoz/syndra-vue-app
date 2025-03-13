<template>
  <div class="type-search">
    <h1>Type</h1>
    <ul>
      <li>{{ type.type }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { CatalogType } from "@/types/CatalogType";

const { type } = defineProps<{
  type: {
    type: CatalogType[];
    default: [{ id: 0; type: "默认类型" }];
  };
}>();
</script>

<style scoped></style>

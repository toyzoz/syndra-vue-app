<template>
  <div>
    <span>{{ type.id }}</span>
    <span>{{ type.type }}</span>
  </div>
</template>

<script setup lang="ts">
import type { CatalogType } from "@/types/catalog/CatalogType";

const props = defineProps<{ type: CatalogType }>();
const type = props.type || { id: 1, name: "默认类型" };
</script>

<style scoped></style>

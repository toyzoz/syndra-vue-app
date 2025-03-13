<template>
  <div class="type-list">
    <ul>
      <li v-for="(type, index) in types" :key="index">
        {{ type.type }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { CatalogType } from "@/types/CatalogType";

const { types } = defineProps<{
  types: {
    type: CatalogType[];
    default: [{ id: 0; type: "默认类型" }];
  };
}>();
</script>

<style scoped></style>

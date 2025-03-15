<template>
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-xl font-semibold mb-2">Type</h2>
    <hr class="mb-4" />
    <div class="type-list flex space-x-4">
      <span class="cursor-pointer hover:text-blue-500">All</span>
      <span
        v-for="type in types"
        :key="type.id"
        @click="selectType(type.id)"
        class="cursor-pointer hover:text-blue-500"
      >
        {{ type.type }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogType } from "@/types/catalog/CatalogType";
defineProps<{ types: CatalogType[] }>();
const emit = defineEmits(["type-select"]);

const selectType = (typeId: number) => {
  emit("type-select", typeId);
};
</script>

<style scoped></style>

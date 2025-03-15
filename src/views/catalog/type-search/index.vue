<template>
  <div>
    <h2>Type</h2>
    <hr />
    <div class="type-list">
      <span>All</span>
      <span v-for="type in types" :key="type.id" @click="selectType(type.id)">{{
        type.type
      }}</span>
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

<style scoped>
.type-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 10px;
}

.type-list span {
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff; /* 默认背景色 */
  color: #333; /* 默认文字颜色 */
  border-radius: 10px;
  padding: 5px;
}

.type-list span.selected {
  background: #333; /* 选中后的背景色 */
  color: #fff; /* 选中后的文字颜色 */
}
</style>

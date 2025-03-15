<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
    <span>第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      下一页
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  count: number;
  pageSize: number;
  pageIndex: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const currentPage = ref(props.pageIndex);
const totalPages = ref(Math.ceil(props.count / props.pageSize));

watch(
  () => props.count,
  (newTotal) => {
    totalPages.value = Math.ceil(newTotal / props.pageSize);
  }
);

watch(
  () => props.pageIndex,
  (newPage) => {
    currentPage.value = newPage;
  }
);

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("update:modelValue", currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit("update:modelValue", currentPage.value);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<template>
  <div
    class="pagination flex items-center justify-center gap-2 p-4 bg-white shadow-md rounded-lg"
  >
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="pagination-button px-4 py-2 border border-gray-300 bg-gray-100 cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-200 rounded-md"
    >
      上一页
    </button>
    <span class="pagination-info text-sm font-medium text-gray-700"
      >第 {{ currentPage }} 页，共 {{ totalPages }} 页</span
    >
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="pagination-button px-4 py-2 border border-gray-300 bg-gray-100 cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-200 rounded-md"
    >
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

<style scoped></style>

<template>
  <div>
    <h2>Type</h2>
    <!-- type list -->
    <div class="type-list" v-for="type in types" :key="type.id">
      <span>{{ type.type }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogType } from "@/types/catalog/CatalogType";
import { type Ref } from "vue";
const props = defineProps<{ types: Ref<CatalogType[]> }>();

const types = props.types;
</script>

<style scoped></style>

<template>
  <h2>Brand</h2>
  <div class="brand-list" v-for="brand in 20" :key="brand">
    <span>{{ brand }}</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

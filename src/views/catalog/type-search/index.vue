<template>
  <div>
    <h2>Type</h2>
    <!-- type list -->
    <div class="type-list" v-for="type in 20" :key="type">
      <span>{{ type }}</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

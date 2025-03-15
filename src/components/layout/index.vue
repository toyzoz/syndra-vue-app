<template>
  <div class="layout min-h-screen flex flex-col">
    <div class="header bg-gray-800 text-white p-4">
      <Header />
    </div>
    <div class="main flex-grow p-4">
      <Main>
        <RouterView />
      </Main>
    </div>
    <div class="footer bg-gray-800 text-white p-4">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Main from "./Main.vue";
</script>

<style scoped></style>

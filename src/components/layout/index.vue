<template>
  <div class="layout">
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <Main>
        <RouterView />
      </Main>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Main from "./Main.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  flex: 0 1 auto;
}

.main {
  flex: 1 1 auto;
  overflow: auto;
  padding: 20px;
}

.footer {
  flex: 0 1 auto;
}
</style>

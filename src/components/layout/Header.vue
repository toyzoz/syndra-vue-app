<template>
  <div>
    <header class="header">
      <div class="header-left">
        <router-link to="/">eshop</router-link>
      </div>
      <div class="header-rigth">
        <span>User</span>
        <router-link to="/basket">Cart</router-link>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;

  padding: 20px;

  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>

<template>
  <div>
    <header class="header">
      <div class="header-left">
        <router-link to="/">eshop</router-link>
      </div>
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
      <div class="header-rigth">
        <span>{{ user?.name }}</span>
        <router-link to="/basket">Cart</router-link>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useUerStore } from "@/store/user";
import { storeToRefs } from "pinia";
const userStore = useUerStore();

const { user } = storeToRefs(userStore);

const login = () => {
  userStore.setUser({
    name: "John Doe",
    id: 0,
    email: "",
  });
};

const logout = () => {
  userStore.setUser(null);
};
</script>

<style scoped>

</style>

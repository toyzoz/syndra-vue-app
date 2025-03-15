import { defineStore } from "pinia";
import { ref } from "vue";

export const useUerStore = defineStore("uer", () => {
  const user = ref<User | null>({
    id: 1,
    name: "vben",
    email: "",
  });
  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };

  const clearUser = () => {
    user.value = null;
  };
  return { user, setUser, clearUser };
});

export interface User {
  id: number;
  name: string;
  email: string;
}

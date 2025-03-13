import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Alias for src folder
    },
  },
  plugins: [vue(), tailwindcss()],
});

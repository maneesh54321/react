import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/bookstore-ui",
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3000,
  },
});

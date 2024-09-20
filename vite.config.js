import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const pagesDir = path.resolve(__dirname, "src/pages");
const pages = fs.readdirSync(pagesDir).filter((file) => file.endsWith(".jsx"));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: pages.reduce((acc, file) => {
        const pageName = file.replace(".jsx", "");
        acc[pageName] = path.resolve(pagesDir, file);
        return acc;
      }, {}),
    },
  },
});

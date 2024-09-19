import path from "path";
import fs from "fs-extra";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const pagesDir = path.resolve(__dirname, "src/pages");
const pages = fs.readdirSync(pagesDir).filter(file => {
  return file.endsWith(".jsx") || file.endsWith(".js");
});

const rollupInput = pages.reduce((acc, file) => {
  const pageName = file.replace(/\.jsx?$/, ""); // Remove .jsx or .js extension
  acc[pageName] = path.join(pagesDir, file);
  return acc;
}, {});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: rollupInput,
    },
  },
});

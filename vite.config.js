const indexFile = path.resolve(__dirname, "src/index.jsx");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: indexFile,  // Ensure index file is included
        ...pages.reduce((acc, file) => {
          const pageName = file.replace(".jsx", "");
          acc[pageName] = path.resolve(pagesDir, file);
          return acc;
        }, {}),
      },
    },
  },
});

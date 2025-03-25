import { defineConfig } from "vite";

export default defineConfig({
  base: "/front_5th_chapter1-1/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        hash: "index.hash.html",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
  },
});

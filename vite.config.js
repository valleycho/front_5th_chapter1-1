import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/front_5th_chapter1-1/" : "/",
    define: {
      "import.meta.env.MODE": JSON.stringify(mode),
    },
    build: {
      outDir: "dist",
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
    },
  };
});

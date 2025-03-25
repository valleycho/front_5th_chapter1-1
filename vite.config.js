import { defineConfig } from "vitest/config";

// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
  return {
    base: mode === "production" ? "/front_5th_chapter1-1/" : "/",
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

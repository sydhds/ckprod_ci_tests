import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import path from "path";

/// <reference types="vitest/config" />
export default defineConfig({
  plugins: [process.env.VITEST ? null : reactRouter(), tailwindcss()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    css: true,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.spec.{ts,tsx}",
        "src/test/**",
        "src/vite-env.d.ts",
        "src/i18n/en/**",
        "src/i18n/fr/**",
      ],
    },
  },
  server: {
    host: true,
    allowedHosts: [
      "localhost",
      ""
    ], // Listen on all addresses (needed for Docker)
    port: 5173,
    watch: {
      usePolling: true, // Fixes HMR issues on some Docker setups (Windows/macOS)
    },
    proxy: {
      // Directs any request starting with /api to the web server
      '/api': {
        target: 'http://backend:8080/',
        changeOrigin: true,
        // Optional: remove /api prefix before it hits Axum
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

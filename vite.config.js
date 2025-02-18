import { defineConfig } from "vite";

const base = process.env.NODE_ENV === "production" ? "/porv/" : "/";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  base,
});

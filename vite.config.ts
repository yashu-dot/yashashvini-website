import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT for GitHub Pages:
// Replace with your repo name
const repoName = "yashashvini-website";

export default defineConfig(({ mode }) => ({
  // 👇👇 THIS IS REQUIRED FOR GITHUB PAGES
  base: `/${repoName}/`,

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
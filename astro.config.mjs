// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: replace with your real domain once the site is live (used for link previews).
  site: "https://example.com",
  vite: {
    plugins: [tailwindcss()],
  },
});

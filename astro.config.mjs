// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // The live address, used for link previews and search engines.
  site: "https://aaditya-raikar.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});

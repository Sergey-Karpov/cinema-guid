import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        additionalData: `
          @use "@/styles/default/typography.scss" as *;
          @use "@/styles/default/container-options.scss" as *;
          @use "@/styles/default/colors.scss" as *;
          @use "@/styles/default/mixins.scss" as *;
        `,
      },
    },
  },
});

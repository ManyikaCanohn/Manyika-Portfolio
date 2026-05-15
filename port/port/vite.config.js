import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),

    // ✅ Tailwind CSS v4 plugin (IMPORTANT)
    tailwindcss(),

    // ✅ PWA setup (unchanged)
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Manyika Portfolio",
        short_name: "Manyika",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#06053d",
        icons: [
          {
            src: "/icon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/icon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
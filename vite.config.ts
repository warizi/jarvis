import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // ← 반드시 필요!

  return {
    base: env.VITE_PUBLIC_BASE_URL || "/",
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.svg",
          "robots.txt",
          "apple-touch-icon.png",
        ],
        manifest: {
          name: "FlowA",
          short_name: "FlowA",
          description: "FlowA - Flow Assistant",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          start_url: "/jarvis/",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@app": path.resolve(__dirname, "src/app"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@widgets": path.resolve(__dirname, "src/widgets"),
        "@features": path.resolve(
          __dirname,
          "src/features"
        ),
        "@entities": path.resolve(
          __dirname,
          "src/entities"
        ),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@backend": path.resolve(__dirname, "src/backend"),
      },
    },
  };
});

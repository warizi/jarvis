import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // ← 반드시 필요!

  return {
    base: env.VITE_PUBLIC_BASE_URL || "/",
    plugins: [react(), tailwindcss()],
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

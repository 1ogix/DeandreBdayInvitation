import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Only load vars that start with VITE_
  const env = loadEnv(mode, process.cwd(), "VITE_");

  if (!env.VITE_DIRECT_GSCRIPT_URL) {
    throw new Error(
      "Missing VITE_DIRECT_GSCRIPT_URL in .env.local (must be a full https:// URL)"
    );
  }

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/rsvp": {
          target: env.VITE_DIRECT_GSCRIPT_URL, // now defined
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api\/rsvp/, ""),
        },
      },
    },
  };
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // The code that was causing the error has been removed from here.
  // We no longer need to load environment variables in this file.

  return {
    plugins: [react()],
    // The server proxy is only for local development and does not affect the Vercel build.
    // We can leave it as is.
    server: {
      proxy: {
        "/api": "http://localhost:3001", // Example proxy, adjust if needed
      },
    },
  };
});

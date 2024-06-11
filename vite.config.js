import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  server: {
    host: "127.0.0.1", // Configura el servidor para que use 127.0.0.1 en lugar de localhost
    https: true, // Habilita HTTPS para el servidor de desarrollo
    proxy: {
      // Configura un proxy para reemplazar localhost
      "/api": {
        target: "http://127.0.0.1:5173", // Cambia aquí la dirección IP y el puerto según tus necesidades
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Esto elimina '/api' del inicio de las rutas
      },
    },
  },
  plugins: [
    react(), // Plugin para React
    mkcert(), // Plugin para generar certificados SSL automáticamente con mkcert
  ],
});

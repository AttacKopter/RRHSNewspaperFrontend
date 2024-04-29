import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    host: '0.0.0.0',
    port: 4000,
    https: {
      key: '~/privkey.pem',
      cert: '~/fullchain.pem',
    },
    hmr: {
      overlay: false,
    }
  }
})

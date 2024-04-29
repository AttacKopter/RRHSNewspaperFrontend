import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.VITE_SSL_KEY)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    host: '0.0.0.0',
    port: 4000,
    https: {
      key: process.env.VITE_SSL_KEY,
      cert: process.env.VITE_SSL_CERT,
    },
    hmr: {
      overlay: false,
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'react_app_build'
  },
  base: "/",
  optimizeDeps: {
    include: ['moment', 'moment-timezone']
  },
  server: {
    host: '192.168.195.154', // กำหนด IP ที่ต้องการให้เซิร์ฟเวอร์ฟัง
    port: 3000, // กำหนดพอร์ตที่ต้องการ
  }
})

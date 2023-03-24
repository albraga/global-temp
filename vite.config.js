import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/global-temp/',
  build: {
    outDir: 'docs'
  }
})
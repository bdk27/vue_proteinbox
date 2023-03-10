import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue_proteinbox/',
  plugins: [vue()],
  resolve: {
    alias: {
      '/img': '/src/assets/img'
    }
  }
})

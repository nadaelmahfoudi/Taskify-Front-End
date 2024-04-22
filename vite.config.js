import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  serve: {
    port : 3000,
  },
  resolve: {
    alias: {
      '@config': '/src/config.json'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx'],
  }
})

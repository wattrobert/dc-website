import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dc-website/', // Use your repo name here for GH Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
}) 
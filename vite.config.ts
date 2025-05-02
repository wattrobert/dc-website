import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// Get the repository name from package.json or environment variable
const base = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  build: {
    outDir: 'dist',
  },
}) 
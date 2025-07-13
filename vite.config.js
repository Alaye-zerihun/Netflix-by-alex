import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Netflix-by-alex/', // 👈 This is required for GitHub Pages
})

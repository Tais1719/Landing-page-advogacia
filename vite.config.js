import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Landing-page-advogacia/', // 👈 nome do repositório
})

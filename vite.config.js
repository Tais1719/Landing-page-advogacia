import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Landing-page-advogacia/', // nome do seu repositório no GitHub
  plugins: [react()],
});

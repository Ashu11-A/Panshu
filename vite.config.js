import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/**
 * Configuração basicas, baseada na minha experiencia no react.
 */
// https://vitejs.dev/config/
export default defineConfig({
  root:"./resources/",
  input:"./resources/index.jsx",
  base:"/",
  plugins: [react()],
  build: {
    outDir: '../app/http/public',
  },
},
)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 5173, // Configura el puerto 5173
    strictPort: true // Falla si el puerto 5173 está en uso, en lugar de intentar otro puerto
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para React
// He usado el plugin oficial de React para que Vite compile JSX correctamente
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas (necesario para Docker)
    port: 5173,
    watch: {
      usePolling: true // Para que funcione el hot reload en Docker
    }
  }
})

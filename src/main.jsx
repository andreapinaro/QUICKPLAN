import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * Archivo main.jsx - Punto de entrada de la aplicación
 * 
 * Aquí es donde React se monta en el DOM.
 * He usado React 18 con createRoot para aprovechar las nuevas características.
 */

// Busco el elemento con id="root" en el index.html y monto React ahí
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode me ayuda a detectar problemas potenciales en desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

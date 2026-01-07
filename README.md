# 📅 QuickPlan - Agenda de Eventos

Aplicación web desarrollada con React + Vite para gestionar y consultar eventos del centro educativo.

## 🚀 Características

- ✅ Visualización de eventos en tarjetas con diseño glassmorphism
- 🔍 Búsqueda en tiempo real por título o lugar
- 🏷️ Filtrado por categorías (Charla, Taller, Torneo, Excursión)
- 📊 Contador de eventos mostrados
- ⭐ Sistema de favoritos
- 📱 Diseño responsive
- 🎨 Interfaz moderna con efectos 3D

## 🛠️ Tecnologías utilizadas

- **React 18** - Librería para construir la interfaz
- **Vite** - Build tool rápido y moderno
- **Docker Compose** - Para contenerización y despliegue fácil
- **CSS3** - Estilos con glassmorphism y efectos 3D

## 📋 Requisitos previos

- Docker y Docker Compose instalados
- Puertos 5173 disponible

## 🔧 Instalación y ejecución

### Opción 1: Con Docker Compose (Recomendado)

1. Descomprimir el archivo ZIP del proyecto

2. Navegar a la carpeta del proyecto:
```bash
cd quickplan-app
```

3. Levantar el contenedor:
```bash
docker-compose up
```

4. Abrir el navegador en: `http://localhost:5173`

Para detener la aplicación:
```bash
docker-compose down
```

### Opción 2: Sin Docker (Local)

1. Asegúrate de tener Node.js instalado (versión 18 o superior)

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir el navegador en: `http://localhost:5173`

## 📁 Estructura del proyecto

```
quickplan-app/
├── docker-compose.yml          # Configuración de Docker
├── package.json                # Dependencias del proyecto
├── vite.config.js             # Configuración de Vite
├── index.html                 # HTML principal
├── public/
│   └── eventos.json           # Datos de los eventos
└── src/
    ├── main.jsx               # Punto de entrada de React
    ├── App.jsx                # Componente principal
    ├── App.css                # Estilos globales
    └── components/
        ├── EventCard.jsx      # Tarjeta de evento
        ├── EventDetail.jsx    # Modal de detalle
        └── Favorites.jsx      # Lista de favoritos
```

## 🎯 Funcionalidades implementadas

### 1. Visualización de eventos
- Grid responsive con tarjetas en efecto glassmorphism
- Información básica: título, categoría, fecha y lugar
- Efecto hover 3D en las tarjetas

### 2. Búsqueda y filtrado
- Búsqueda en tiempo real por título o lugar
- Filtro por categoría con select
- Contador dinámico de resultados

### 3. Detalle del evento
- Modal con overlay semi-transparente
- Información completa del evento
- Botón para añadir/quitar de favoritos

### 4. Gestión de favoritos
- Añadir eventos a favoritos
- Lista visual de favoritos
- Quitar eventos de favoritos fácilmente

### 5. Estados de la aplicación
- Loading mientras cargan los datos
- Manejo de errores si falla la carga
- Mensaje cuando no hay resultados

## 🎨 Diseño

El diseño está inspirado en interfaces modernas con efecto glassmorphism:
- Fondo degradado púrpura
- Tarjetas semi-transparentes con blur
- Efectos 3D en hover
- Bordes suaves y sombras sutiles
- Paleta de colores profesional

## 📝 Datos de ejemplo

El archivo `eventos.json` incluye 10 eventos de ejemplo:
- Talleres técnicos
- Charlas informativas
- Torneos deportivos/gaming
- Excursiones educativas

Puedes modificar este archivo para añadir o cambiar eventos.

## 🔄 Comandos útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## 👨‍💻 Autor

Desarrollado como proyecto para el módulo de Despliegue de Aplicaciones Web (DAW).

## 📸 Capturas de pantalla

Ver carpeta `/capturas` (añadir capturas después de ejecutar la aplicación).

## 📄 Licencia

Proyecto educativo - Uso libre para fines académicos.

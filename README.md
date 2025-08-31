# Rick and Morty Character Explorer

Una aplicación web moderna para explorar los personajes del universo de Rick and Morty, construida con React y TypeScript.

## 🌐 Demo en Vivo

[Ver Demo](https://rick-and-morty-app-pt.netlify.app/)

## 🚀 Tecnologías Utilizadas

- **Frontend Framework:** React 18.3.1
- **Lenguaje:** TypeScript 5.8.3
- **Build Tool:** Vite 7.1.2
- **Estilos:** TailwindCSS 4.1.12
- **Routing:** React Router v7.8.2
- **API Client:** Apollo Client 4.0.3 con GraphQL
- **Linting:** ESLint 9.33.0
- **Desarrollo:** Hot Module Replacement (HMR)

## 🛠️ Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- Bun o npm como gestor de paquetes

## 🚦 Inicio Rápido

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/fantaxmin/rick-and-morty-app.git
   cd rick-and-morty-app
   ```

2. **Instalar dependencias**
   ```bash
   bun install
   # o si usas npm
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   bun dev
   # o si usas npm
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

- `bun dev` - Inicia el servidor de desarrollo
- `bun build` - Compila TypeScript y construye la aplicación para producción
- `bun preview` - Previsualiza la versión de producción localmente
- `bun lint` - Ejecuta el linter para verificar el código

## 🏗️ Estructura del Proyecto

```
src/
├── assets/         # Recursos estáticos (imágenes, iconos)
├── components/     # Componentes React reutilizables
├── context/       # Contextos de React
├── pages/         # Componentes de páginas
├── services/      # Servicios para comunicación con APIs
├── types/         # Definiciones de tipos TypeScript
└── utils/         # Utilidades y funciones auxiliares
```

## 🎨 Características

- Diseño responsive con TailwindCSS
- Navegación fluida entre páginas
- Integración con la API de Rick and Morty
- Gestión de estado con React Context
- Soporte completo de TypeScript
- Hot Module Replacement para desarrollo rápido

## 📝 Configuración de ESLint

El proyecto utiliza una configuración robusta de ESLint para mantener la calidad del código. La configuración se encuentra en `eslint.config.js`.

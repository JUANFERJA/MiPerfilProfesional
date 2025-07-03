# 🌟 Mi Portafolio Personal

**Portafolio profesional desarrollado con React + TypeScript + Tailwind CSS**

Desarrollado por: **Juan Fernando Jácome Castro**  
Analista de Sistemas | Desarrollador Full Stack Senior

---

## 🚀 Características

- ✨ **Diseño moderno** con tema verde lima personalizado
- 📱 **Completamente responsivo** para todos los dispositivos
- 🎨 **Animaciones CSS avanzadas** con efectos shimmer y pulse
- 🧭 **Navegación fluida** con React Router
- 💼 **Secciones organizadas**: Presentación, Experiencia, Proyectos, Certificaciones
- 🎯 **Barras de progreso animadas** para habilidades técnicas
- 🔗 **Integración con redes sociales** usando FontAwesome

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Vite 7.0.0** - Build tool y dev server ultrarrápido

### Estilos
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **SCSS** - Preprocesador CSS para estilos personalizados
- **CSS Grid & Flexbox** - Layouts responsivos modernos

### Librerías
- **React Router Dom** - Navegación SPA
- **FontAwesome** - Iconografía profesional
- **PostCSS & Autoprefixer** - Procesamiento CSS

### Herramientas
- **ESLint** - Linting para código limpio
- **TypeScript ESLint** - Reglas específicas para TS

---

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── NavBar.tsx       # Barra de navegación
│   └── RedesSociales.tsx
├── pages/               # Páginas principales
│   ├── PresentacionPersonalPage.tsx
│   ├── ExperienciaProfesionalPage.tsx
│   ├── ProyectosPersonalesPage.tsx
│   └── CursosCertificacionesPage.tsx
├── data/                # Datos estáticos tipados
│   ├── components/
│   └── pages/
├── styles/              # Estilos SCSS organizados
│   ├── components/
│   └── pages/
└── routes/              # Configuración de rutas
    └── AplicationRoutes.tsx
```

---

## 🎨 Características Visuales

### Efectos de Animación
- **Shimmer effects** en barras de progreso
- **Pulse animations** para elementos interactivos  
- **Hover transformations** en tarjetas y botones
- **Smooth transitions** en navegación

### Layout Responsivo
- **CSS Grid** para experiencia profesional en 2 columnas
- **Flexbox** para habilidades organizadas
- **Mobile-first design** con breakpoints optimizados

### Tema de Color
- **Primario**: Verde lima (#E4F5A9)
- **Secundario**: Verde intenso (#A2CC3F)
- **Fondos**: Gradientes oscuros con transparencias
- **Texto**: Contraste optimizado para legibilidad

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/JUANFERJA/MiPerfilProfesional.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

### Scripts Disponibles
```json
{
  "dev": "vite",                    // Servidor de desarrollo
  "build": "tsc -b && vite build", // Build de producción
  "lint": "eslint .",               // Verificar código
  "preview": "vite preview"         // Preview del build
}
```

---

## 📱 Secciones del Portafolio

### 🏠 Presentación Personal
- Información básica y profesional
- Habilidades técnicas con barras de progreso animadas
- Datos de contacto y redes profesionales

### 💼 Experiencia Profesional  
- Timeline de experiencia laboral
- Tecnologías utilizadas en cada proyecto
- Logros y responsabilidades destacadas

### 🚀 Proyectos Personales
- Showcase de proyectos desarrollados
- Enlaces a repositorios y demos
- Tecnologías y herramientas utilizadas

### 🎓 Cursos y Certificaciones
- Formación académica y profesional
- Certificaciones técnicas obtenidas
- Cursos de especialización completados

---

## 🌐 Deploy

El proyecto está optimizado para deploy en:
- **Vercel** (recomendado para proyectos Vite)
- **Netlify** 
- **GitHub Pages**
- **AWS S3 + CloudFront**

---

## 📞 Contacto

**Juan Fernando Jácome Castro**
- 📧 Email: jufer_tar_lch@hotmail.com
- 💼 LinkedIn: [linkedin.com/in/jufer-tar-lch](https://www.linkedin.com/in/jufer-tar-lch/)
- 🐙 GitHub: [github.com/jufer-tar-lch](https://github.com/jufer-tar-lch)
- 📱 Teléfono: +593 991323946

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# MiPerfilProfesional
es una aplicación web que muestra mi perfil profesional
>>>>>>> e45773de202d57b83b44d40d3782b169f35e3e85

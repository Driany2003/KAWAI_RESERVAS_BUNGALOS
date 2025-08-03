# Kawai Resort - Landing Page

Una landing page moderna y responsiva para el resort Kawai, diseñada para mostrar las instalaciones, servicios y facilitar las reservas familiares.

## 🏖️ Características

- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario de Contacto**: Sistema de reservas integrado
- **Galería Interactiva**: Modal para ver imágenes
- **Animaciones**: Transiciones y efectos visuales atractivos
- **SEO Optimizado**: Meta tags y estructura semántica
- **Arquitectura Modular**: Código organizado y mantenible

## 🚀 Tecnologías Utilizadas

- **React 18**: Framework de JavaScript
- **Tailwind CSS**: Framework de CSS utilitario
- **Lucide React**: Iconos modernos
- **Context API**: Estado global de la aplicación
- **Hooks Personalizados**: Lógica reutilizable
- **Responsive Design**: Mobile-first approach

## 📦 Instalación

1. **Clonar el repositorio**:
```bash
git clone <url-del-repositorio>
cd kawai-landing
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar en modo desarrollo**:
```bash
npm start
```

4. **Abrir en el navegador**:
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
kawai-landing/
├── public/
│   ├── images/          # Imágenes del resort
│   ├── videos/          # Videos promocionales
│   ├── icons/           # Iconos personalizados
│   └── index.html       # HTML principal
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.js    # Navegación principal
│   │   ├── Hero.js      # Sección principal con video
│   │   ├── Servicios.js # Servicios del resort
│   │   ├── Galeria.js   # Galería de imágenes
│   │   ├── Habitaciones.js # Tipos de alojamiento
│   │   ├── Actividades.js  # Actividades recreativas
│   │   ├── Contacto.js     # Formulario de contacto
│   │   └── Footer.js       # Pie de página
│   ├── context/        # Context API
│   │   └── AppContext.js   # Estado global
│   ├── hooks/          # Hooks personalizados
│   │   └── useScroll.js    # Hook para scroll
│   ├── utils/          # Utilidades y datos
│   │   ├── constants.js    # Constantes del proyecto
│   │   ├── scrollUtils.js  # Funciones de scroll
│   │   ├── servicesData.js # Datos de servicios
│   │   ├── galleryData.js  # Datos de galería
│   │   ├── roomData.js     # Datos de habitaciones
│   │   └── activitiesData.js # Datos de actividades
│   ├── styles/         # Estilos globales
│   │   └── globals.css     # CSS con Tailwind
│   ├── assets/         # Recursos estáticos
│   │   ├── images/     # Imágenes del proyecto
│   │   └── icons/      # Iconos del proyecto
│   ├── pages/          # Páginas (futuro uso)
│   ├── App.js          # Componente principal
│   └── index.js        # Punto de entrada
├── tailwind.config.js  # Configuración de Tailwind
├── postcss.config.js   # Configuración de PostCSS
├── package.json        # Dependencias del proyecto
└── README.md          # Documentación
```

## 🎨 Personalización

### Colores
Los colores personalizados están definidos en `tailwind.config.js`:
- `kawai-blue`: Azul principal del resort
- `kawai-sand`: Color arena/beige
- `kawai-green`: Verde para elementos naturales
- `kawai-warm`: Naranja cálido para acentos

### Fuentes
- **Inter**: Para texto general
- **Playfair Display**: Para títulos y encabezados

### Datos Centralizados
Los datos están organizados en archivos separados en `src/utils/`:
- `constants.js`: Información del resort, navegación, enlaces sociales
- `servicesData.js`: Servicios y estadísticas
- `galleryData.js`: Imágenes de la galería
- `roomData.js`: Tipos de habitaciones
- `activitiesData.js`: Actividades y testimonios

## 📱 Secciones

1. **Hero**: Video de fondo con títulos superpuestos
2. **Servicios**: WiFi, restaurante, estacionamiento, etc.
3. **Galería**: Imágenes del resort con modal
4. **Habitaciones**: Diferentes tipos de alojamiento
5. **Actividades**: Actividades recreativas y testimonios
6. **Contacto**: Formulario de reserva e información de contacto
7. **Footer**: Enlaces y información adicional

## 🔧 Configuración del Video

Para cambiar el video de fondo en la sección Hero, edita el archivo `src/components/Hero.js`:

```javascript
<source src="TU_URL_DEL_VIDEO" type="video/mp4" />
```

## 📸 Imágenes

Las imágenes están referenciadas en `src/utils/galleryData.js`. Para agregar imágenes reales:

1. Coloca las imágenes en `public/images/`
2. Actualiza las rutas en `galleryData.js`
3. Reemplaza los placeholders con las imágenes reales

## 🎯 Características Técnicas

### Context API
- Estado global para el menú móvil
- Estado para la galería modal
- Estado para el formulario de contacto

### Hooks Personalizados
- `useScroll`: Maneja el estado del scroll para la navegación

### Utilidades
- `scrollUtils`: Funciones para navegación suave
- `constants`: Datos centralizados del resort

## 🚀 Despliegue

### Build para producción:
```bash
npm run build
```

### Desplegar en Netlify:
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `build`

### Desplegar en Vercel:
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto React

## 📞 Contacto

Para soporte o consultas sobre el proyecto:
- Email: info@kawai.com
- Teléfono: +51 1 234 5678

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Kawai Resort** - Creando momentos inolvidables desde 2008 🏖️ 
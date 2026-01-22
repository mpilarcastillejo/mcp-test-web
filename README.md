# MCP Test Web

Landing page moderna con sistema de login simulado, construido con HTML, CSS, JavaScript y Bootstrap 5.

## 🚀 Características

- **Landing Page Atractiva**: Diseño moderno y responsivo
- **Sistema de Login Simulado**: Autenticación frontend con credenciales de demostración
- **Registro de Usuarios**: Formulario de registro con validaciones
- **Dashboard Simulado**: Visualización de métricas y estadísticas
- **Formulario de Contacto**: Sistema de contacto funcional
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **100% Responsive**: Optimizado para todos los dispositivos
- **Bootstrap 5**: Framework CSS moderno
- **Bootstrap Icons**: Iconografía completa

## 📋 Requisitos

Solo necesitas un navegador web moderno. No requiere instalación de dependencias.

## 🎯 Uso

1. Abre el archivo `index.html` en tu navegador
2. Navega por las diferentes secciones
3. Prueba el sistema de login con las credenciales de demostración

## 🔐 Credenciales de Demostración

### Usuario Administrador
- **Email**: admin@mcp.com
- **Password**: admin123

### Usuario Demo
- **Email**: user@mcp.com
- **Password**: user123

## 📁 Estructura del Proyecto

```
mcp-test-web/
│
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Lógica de la aplicación
└── README.md           # Documentación
```

## 🎨 Secciones

### 1. Hero Section
Sección principal con llamada a la acción y diseño atractivo.

### 2. Características
Muestra las principales características del producto con tarjetas animadas.

### 3. Precios
Tres planes de precios con diferentes niveles de servicio.

### 4. Contacto
Formulario de contacto funcional con validaciones.

### 5. Modales
- **Login**: Sistema de autenticación con validación
- **Registro**: Creación de nuevas cuentas con verificaciones

## ⚙️ Funcionalidades JavaScript

### Autenticación
```javascript
// Login simulado con validación de credenciales
// Soporte para "Recordarme" usando localStorage/sessionStorage
// Actualización dinámica de la UI para usuarios autenticados
```

### Validaciones
- Verificación de email y contraseña
- Confirmación de contraseña en registro
- Validación de términos y condiciones
- Prevención de emails duplicados

### Persistencia
- `localStorage`: Para sesiones persistentes (checkbox "Recordarme")
- `sessionStorage`: Para sesiones temporales

### Dashboard Simulado
Después del login, se muestra un dashboard con:
- Métricas de uso
- Tests ejecutados
- Proyectos activos
- Tasa de éxito
- Actividad reciente

## 🎨 Personalización

### Colores Principales
Puedes modificar los colores en `styles.css`:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --success-color: #198754;
    --info-color: #0dcaf0;
    --dark-color: #212529;
}
```

### Animaciones
Las animaciones están definidas en `styles.css` y pueden ser personalizadas:
- `fadeIn`: Aparición gradual
- `slideIn`: Deslizamiento lateral
- Hover effects en tarjetas
- Transiciones suaves

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🔧 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript ES6+**: Lógica de aplicación
- **Bootstrap 5.3.2**: Framework CSS
- **Bootstrap Icons 1.11.1**: Iconografía

## 🌐 CDN Utilizados

```html
<!-- Bootstrap CSS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css

<!-- Bootstrap Icons -->
https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css

<!-- Bootstrap JS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js
```

## 📝 Notas Importantes

- Este es un sistema de autenticación **simulado** para demostración
- No se conecta a ningún backend o base de datos real
- Los datos se almacenan temporalmente en el navegador
- Para producción, implementar un backend seguro
- Las credenciales se muestran en la consola del navegador al cargar

## 🚀 Próximas Mejoras

- [ ] Integración con backend real
- [ ] Autenticación JWT
- [ ] Recuperación de contraseña
- [ ] Verificación de email
- [ ] OAuth (Google, Facebook, GitHub)
- [ ] Panel de administración
- [ ] API de tests reales
- [ ] Gráficos interactivos con Chart.js

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ para demostración de MCP (Model Context Protocol)

## 📞 Soporte

Para preguntas o soporte, contacta a través del formulario de contacto en la página.

---

**Nota**: Este es un proyecto de demostración. Para uso en producción, implementa medidas de seguridad apropiadas y un sistema de autenticación real.

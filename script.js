// Usuarios simulados para el login
const users = [
    { email: 'admin@mcp.com', password: 'admin123', name: 'Administrador' },
    { email: 'user@mcp.com', password: 'user123', name: 'Usuario Demo' }
];

// Estado de sesión
let currentUser = null;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Event listeners para formularios
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    document.getElementById('contactForm').addEventListener('submit', handleContact);
    
    // Verificar si hay sesión guardada
    checkSession();
    
    // Smooth scroll para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', handleNavbarScroll);
}

// Manejo del login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('rememberMe').checked;
    
    // Validar credenciales
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        
        // Guardar sesión si se marcó "Recordarme"
        if (remember) {
            localStorage.setItem('mcpUser', JSON.stringify(user));
        } else {
            sessionStorage.setItem('mcpUser', JSON.stringify(user));
        }
        
        // Mostrar mensaje de éxito
        showAlert('success', `¡Bienvenido, ${user.name}!`);
        
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
        
        // Limpiar formulario
        document.getElementById('loginForm').reset();
        
        // Actualizar UI
        updateUIForLoggedUser();
        
        // Simular redirección a dashboard después de 2 segundos
        setTimeout(() => {
            showDashboardSimulation();
        }, 2000);
        
    } else {
        showAlert('danger', 'Email o contraseña incorrectos');
    }
}

// Manejo del registro
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerPasswordConfirm').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;
    
    // Validaciones
    if (password !== confirmPassword) {
        showAlert('danger', 'Las contraseñas no coinciden');
        return;
    }
    
    if (!acceptTerms) {
        showAlert('warning', 'Debes aceptar los términos y condiciones');
        return;
    }
    
    // Verificar si el email ya existe
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showAlert('warning', 'Este email ya está registrado');
        return;
    }
    
    // Crear nuevo usuario
    const newUser = { email, password, name };
    users.push(newUser);
    
    // Mostrar mensaje de éxito
    showAlert('success', '¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');
    
    // Cerrar modal de registro
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    
    // Limpiar formulario
    document.getElementById('registerForm').reset();
    
    // Abrir modal de login después de 1 segundo
    setTimeout(() => {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
        // Pre-rellenar el email
        document.getElementById('loginEmail').value = email;
    }, 1000);
}

// Manejo del formulario de contacto
function handleContact(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Simular envío
    showAlert('success', `¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos a ${email} pronto.`);
    
    // Limpiar formulario
    document.getElementById('contactForm').reset();
}

// Verificar si hay sesión activa
function checkSession() {
    const storedUser = localStorage.getItem('mcpUser') || sessionStorage.getItem('mcpUser');
    
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateUIForLoggedUser();
    }
}

// Actualizar UI para usuario logueado
function updateUIForLoggedUser() {
    const navbarButtons = document.querySelector('.navbar-nav');
    const loginButton = navbarButtons.querySelector('button');
    
    if (currentUser && loginButton) {
        loginButton.outerHTML = `
            <div class="dropdown">
                <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-person-circle"></i> ${currentUser.name}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#"><i class="bi bi-speedometer2"></i> Dashboard</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-gear"></i> Configuración</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" onclick="handleLogout()"><i class="bi bi-box-arrow-right"></i> Cerrar Sesión</a></li>
                </ul>
            </div>
        `;
    }
}

// Cerrar sesión
function handleLogout() {
    localStorage.removeItem('mcpUser');
    sessionStorage.removeItem('mcpUser');
    currentUser = null;
    
    showAlert('info', 'Has cerrado sesión correctamente');
    
    // Recargar página después de 1 segundo
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// Mostrar simulación de dashboard
function showDashboardSimulation() {
    const heroSection = document.querySelector('.hero-section');
    
    heroSection.innerHTML = `
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                        <h4 class="alert-heading"><i class="bi bi-info-circle"></i> Modo Demostración</h4>
                        <p>Esta es una simulación del dashboard. En un entorno real, aquí verías tus proyectos, estadísticas y herramientas de testing.</p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-clipboard-check text-primary fs-1"></i>
                            <h3 class="mt-3">127</h3>
                            <p class="text-muted mb-0">Tests Ejecutados</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-folder text-success fs-1"></i>
                            <h3 class="mt-3">5</h3>
                            <p class="text-muted mb-0">Proyectos Activos</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-check-circle text-info fs-1"></i>
                            <h3 class="mt-3">98%</h3>
                            <p class="text-muted mb-0">Tasa de Éxito</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-clock-history text-warning fs-1"></i>
                            <h3 class="mt-3">24h</h3>
                            <p class="text-muted mb-0">Tiempo Ahorrado</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="bi bi-graph-up"></i> Actividad Reciente</h5>
                        </div>
                        <div class="card-body">
                            <div class="list-group list-group-flush">
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">Test de integración API completado</h6>
                                        <small>Hace 2 horas</small>
                                    </div>
                                    <p class="mb-1">Todos los endpoints respondieron correctamente</p>
                                    <small class="text-success">✓ Exitoso</small>
                                </div>
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">Test de performance ejecutado</h6>
                                        <small>Hace 5 horas</small>
                                    </div>
                                    <p class="mb-1">Tiempo de respuesta: 234ms</p>
                                    <small class="text-success">✓ Exitoso</small>
                                </div>
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">Test de UI - Login page</h6>
                                        <small>Hace 1 día</small>
                                    </div>
                                    <p class="mb-1">Validación de formularios</p>
                                    <small class="text-success">✓ Exitoso</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Mostrar alertas
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertDiv.style.zIndex = '9999';
    alertDiv.style.minWidth = '300px';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Cambiar navbar al hacer scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(13, 110, 253, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
    }
}

// Credenciales de demostración
console.log('%c🔐 Credenciales de Demostración', 'color: #0d6efd; font-size: 16px; font-weight: bold;');
console.log('%cEmail: admin@mcp.com', 'color: #198754; font-size: 14px;');
console.log('%cPassword: admin123', 'color: #198754; font-size: 14px;');
console.log('%c---', 'color: #6c757d;');
console.log('%cEmail: user@mcp.com', 'color: #198754; font-size: 14px;');
console.log('%cPassword: user123', 'color: #198754; font-size: 14px;');
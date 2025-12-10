// RESOIL - Navegación Mobile-First
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // Variables principales
    // ==========================================================================
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navList = document.getElementById('nav-list');
    
    // ==========================================================================
    // Toggle del menú hamburguesa
    // ==========================================================================
    
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
    
    // ==========================================================================
    // Manejo de dropdowns en móvil
    // ==========================================================================
    
    // Servicios dropdown
    const serviciosDropdown = document.querySelector('.has-dropdown');
    if (serviciosDropdown) {
        const serviciosLink = serviciosDropdown.querySelector('.nav-link');
        const dropdownContent = serviciosDropdown.querySelector('.dropdown-content');
        
        if (serviciosLink && dropdownContent) {
            serviciosLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    serviciosDropdown.classList.toggle('active');
                }
            });
        }
    }
    
    // ==========================================================================
    // Manejo de submenu Iluminación
    // ==========================================================================
    
    const iluminacionSubmenu = document.querySelector('.has-submenu');
    if (iluminacionSubmenu) {
        const iluminacionLink = iluminacionSubmenu.querySelector('.submenu-toggle');
        const submenuContent = iluminacionSubmenu.querySelector('.submenu-content');
        
        if (iluminacionLink && submenuContent) {
            iluminacionLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    iluminacionSubmenu.classList.toggle('active');
                }
            });
        }
    }
    
    // ==========================================================================
    // Cerrar menú en navegación final
    // ==========================================================================
    
    function closeMenu() {
        if (mobileMenuBtn && navList) {
            mobileMenuBtn.classList.remove('active');
            navList.classList.remove('active');
            
            // Cerrar dropdowns
            document.querySelectorAll('.has-dropdown').forEach(item => {
                item.classList.remove('active');
            });
            
            // Cerrar submenus
            document.querySelectorAll('.has-submenu').forEach(item => {
                item.classList.remove('active');
            });
        }
    }
    
    // Enlaces que cierran el menú (navegación final)
    document.querySelectorAll('.submenu-link, .nav-item:not(.has-dropdown) .nav-link, .dropdown-link:not(.submenu-toggle)').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
    
    // ==========================================================================
    // Cerrar menú al hacer click fuera
    // ==========================================================================
    
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('.main-nav') && 
            navList && navList.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // ==========================================================================
    // Responsive handling
    // ==========================================================================
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // ==========================================================================
    // Scroll suave y navegación activa
    // ==========================================================================
    
    // Activar enlace de navegación según la sección visible
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // ==========================================================================
    // Efectos de scroll
    // ==========================================================================
    
    // Cambiar estilo del header al hacer scroll
    function handleHeaderScroll() {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    
    // ==========================================================================
    // Animaciones de entrada
    // ==========================================================================
    
    // Observer para animaciones al entrar en viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos con animación
    document.querySelectorAll('.service-card, .hero-section h1, .hero-section p').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ==========================================================================
    // Formularios y interacciones
    // ==========================================================================
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = 120; // Altura fija del header
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================================================
    // Utilidades
    // ==========================================================================
    
    // Función para mostrar/ocultar elementos
    function toggleElement(element, show = null) {
        if (show === null) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        } else {
            element.style.display = show ? 'block' : 'none';
        }
    }
    
    // Función para debounce (optimizar eventos de scroll)
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Aplicar debounce al scroll
    const debouncedScroll = debounce(() => {
        setActiveNavLink();
        handleHeaderScroll();
    }, 10);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // ==========================================================================
    // Inicialización
    // ==========================================================================
    
    // ==========================================================================
    // Formulario de contacto WhatsApp
    // ==========================================================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario
            const formData = new FormData(contactForm);
            const nombre = formData.get('nombre');
            const telefono = formData.get('telefono');
            const email = formData.get('email');
            const fecha = formData.get('fecha');
            const tipoEvento = formData.get('tipoEvento');
            const invitados = formData.get('invitados');
            const mensaje = formData.get('mensaje');
            
            // Recopilar servicios seleccionados
            const serviciosSeleccionados = [];
            formData.getAll('servicios[]').forEach(servicio => {
                serviciosSeleccionados.push(servicio);
            });
            
            // Crear mensaje para WhatsApp
            let whatsappMessage = `*NUEVA CONSULTA - RENTA DE SONIDO E ILUMINACION*\n\n`;
            whatsappMessage += `*Cliente:* ${nombre}\n`;
            whatsappMessage += `*Teléfono:* ${telefono}\n`;
            whatsappMessage += `*Email:* ${email}\n\n`;
            
            if (fecha) {
                whatsappMessage += `*Fecha del Evento:* ${fecha}\n`;
            }
            
            if (tipoEvento) {
                whatsappMessage += `*Tipo de Evento:* ${tipoEvento}\n`;
            }
            
            if (invitados) {
                whatsappMessage += `*Número de Invitados:* ${invitados}\n`;
            }
            
            if (serviciosSeleccionados.length > 0) {
                whatsappMessage += `*Servicios de Interés:*\n`;
                serviciosSeleccionados.forEach(servicio => {
                    whatsappMessage += `   • ${servicio}\n`;
                });
            }
            
            if (mensaje) {
                whatsappMessage += `\n*Detalles del Evento:*\n${mensaje}\n`;
            }
            
            whatsappMessage += `\n*Enviado desde: www.rentadesonidoeiluminacion.com*`;
            
            // Número de WhatsApp (sin espacios ni caracteres especiales)
            const whatsappNumber = '525578960091';
            
            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Crear URL de WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abrir WhatsApp en nueva ventana
            window.open(whatsappURL, '_blank');
            
            // Mostrar mensaje de confirmación (opcional)
            showFormSuccessMessage();
        });
    }
    
    // ==========================================================================
    // Formulario de cotización para página de guirnaldas
    // ==========================================================================
    
    const quoteForm = document.getElementById('quote-form');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario de guirnaldas
            const formData = new FormData(quoteForm);
            const eventName = formData.get('event-name');
            const eventDate = formData.get('event-date');
            const eventType = formData.get('event-type');
            const guests = formData.get('guests');
            const venue = formData.get('venue');
            const spaceSize = formData.get('space-size');
            const specialRequirements = formData.get('special-requirements');
            const contactName = formData.get('contact-name');
            const contactPhone = formData.get('contact-phone');
            
            // Crear mensaje especializado para guirnaldas
            let whatsappMessage = `*COTIZACIÓN - RENTA DE GUIRNALDAS DE LUCES VINTAGE*\n\n`;
            whatsappMessage += `*INFORMACIÓN DEL EVENTO*\n`;
            whatsappMessage += `*Nombre del Evento:* ${eventName}\n`;
            whatsappMessage += `*Fecha:* ${eventDate}\n`;
            whatsappMessage += `*Tipo de Evento:* ${eventType}\n`;
            
            if (guests) {
                whatsappMessage += `*Número de Invitados:* ${guests}\n`;
            }
            
            whatsappMessage += `*Venue:* ${venue}\n`;
            whatsappMessage += `*Tamaño del Espacio:* ${spaceSize}\n\n`;
            
            whatsappMessage += `*INFORMACIÓN DE CONTACTO*\n`;
            whatsappMessage += `*Nombre:* ${contactName}\n`;
            whatsappMessage += `*Teléfono:* ${contactPhone}\n\n`;
            
            if (specialRequirements) {
                whatsappMessage += `*REQUERIMIENTOS ESPECIALES*\n${specialRequirements}\n\n`;
            }
            
            whatsappMessage += `*SOLICITUD:* Cotización para renta de guirnaldas de luces vintage\n`;
            whatsappMessage += `*PRIORIDAD:* Respuesta en menos de 30 minutos\n`;
            whatsappMessage += `*Enviado desde:* www.rentadesonidoeiluminacion.com/guirnaldas.html`;
            
            // Número de WhatsApp (sin espacios ni caracteres especiales)
            const whatsappNumber = '525578960091';
            
            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Crear URL de WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abrir WhatsApp en nueva ventana
            window.open(whatsappURL, '_blank');
            
            // Mostrar mensaje de confirmación específico para guirnaldas
            showQuoteFormSuccessMessage();
        });
    }
    
    // Función para mostrar mensaje de éxito del formulario de cotización
    function showQuoteFormSuccessMessage() {
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '¡Enviado! Abriendo WhatsApp...';
        submitBtn.style.background = '#4CAF50';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
            submitBtn.disabled = false;
        }, 4000);
    }
    
    // ==========================================================================
    // Formulario de cotización para página de LED Neón
    // ==========================================================================
    
    const neonQuoteForm = document.getElementById('neon-quote-form');
    
    if (neonQuoteForm) {
        neonQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario de LED Neón
            const formData = new FormData(neonQuoteForm);
            const projectName = formData.get('project-name');
            const eventDate = formData.get('event-date');
            const projectType = formData.get('project-type');
            const estimatedLength = formData.get('estimated-length');
            const venueLocation = formData.get('venue-location');
            const installationType = formData.get('installation-type');
            const designRequirements = formData.get('design-requirements');
            const contactName = formData.get('contact-name');
            const contactPhone = formData.get('contact-phone');
            
            // Crear mensaje especializado para LED Neón
            let whatsappMessage = `*COTIZACIÓN TÉCNICA - RENTA DE LED NEÓN FLEXIBLE*\n\n`;
            whatsappMessage += `*INFORMACIÓN DEL PROYECTO*\n`;
            whatsappMessage += `*Nombre del Proyecto:* ${projectName}\n`;
            whatsappMessage += `*Fecha:* ${eventDate}\n`;
            whatsappMessage += `*Tipo de Aplicación:* ${projectType}\n`;
            
            if (estimatedLength) {
                whatsappMessage += `*Longitud Estimada:* ${estimatedLength}\n`;
            }
            
            whatsappMessage += `*Venue:* ${venueLocation}\n`;
            whatsappMessage += `*Tipo de Instalación:* ${installationType}\n\n`;
            
            whatsappMessage += `*INFORMACIÓN DE CONTACTO*\n`;
            whatsappMessage += `*Nombre:* ${contactName}\n`;
            whatsappMessage += `*Teléfono:* ${contactPhone}\n\n`;
            
            if (designRequirements) {
                whatsappMessage += `*REQUERIMIENTOS DE DISEÑO*\n${designRequirements}\n\n`;
            }
            
            whatsappMessage += `*TECNOLOGÍA:* LED Neón Flexible RGB+W Profesional\n`;
            whatsappMessage += `*PRIORIDAD:* Respuesta técnica en menos de 2 horas\n`;
            whatsappMessage += `*Enviado desde:* www.rentadesonidoeiluminacion.com/luz-neon-led.html`;
            
            // Número de WhatsApp (sin espacios ni caracteres especiales)
            const whatsappNumber = '525578960091';
            
            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Crear URL de WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abrir WhatsApp en nueva ventana
            window.open(whatsappURL, '_blank');
            
            // Mostrar mensaje de confirmación específico para LED Neón
            showNeonFormSuccessMessage();
        });
    }
    
    // Función para mostrar mensaje de éxito del formulario LED Neón
    function showNeonFormSuccessMessage() {
        const submitBtn = neonQuoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Enviando Datos Técnicos...';
        submitBtn.style.background = '#4CAF50';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
            submitBtn.disabled = false;
        }, 4000);
    }

    // Manejar envío del formulario de City Color RGB
    const cityColorQuoteForm = document.getElementById('citycolor-quote-form');
    if (cityColorQuoteForm) {
        cityColorQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recolectar datos del formulario
            const formData = new FormData(this);
            const eventName = formData.get('event-name');
            const eventDate = formData.get('event-date');
            const eventScale = formData.get('event-scale');
            const coverageArea = formData.get('coverage-area');
            const venueType = formData.get('venue-type');
            const technicalRequirements = formData.get('technical-requirements');
            const productionDetails = formData.get('production-details') || 'Sin detalles adicionales de producción';
            const contactName = formData.get('contact-name');
            const contactPhone = formData.get('contact-phone');
            
            // Crear mensaje para WhatsApp
            const message = `🎨 *SOLICITUD CITY COLOR RGB - EVENTO MASIVO* 🎨\n\n` +
                `*📊 DETALLES DEL EVENTO:*\n` +
                `• Evento: ${eventName}\n` +
                `• Fecha: ${eventDate}\n` +
                `• Escala: ${eventScale}\n` +
                `• Área de Cobertura: ${coverageArea}\n` +
                `• Venue: ${venueType}\n\n` +
                `*⚡ REQUERIMIENTOS TÉCNICOS:*\n` +
                `• Nivel: ${technicalRequirements}\n\n` +
                `*🎬 DETALLES DE PRODUCCIÓN:*\n` +
                `${productionDetails}\n\n` +
                `*👤 CONTACTO PRODUCTOR:*\n` +
                `• Nombre: ${contactName}\n` +
                `• Teléfono: ${contactPhone}\n\n` +
                `*Solicito propuesta técnica especializada para sistema City Color RGB masivo. Favor de incluir especificaciones de universos DMX y capacidad de fixtures.*`;

            // Codificar mensaje para URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/525578960091?text=${encodedMessage}`;
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Mostrar mensaje de confirmación específico para City Color
            showCityColorFormSuccessMessage();
        });
    }
    
    // Manejar envío del formulario de Luces Neón
    const lucesNeonQuoteForm = document.getElementById('luces-neon-quote-form');
    if (lucesNeonQuoteForm) {
        lucesNeonQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recolectar datos del formulario
            const formData = new FormData(this);
            const eventType = formData.get('event-type');
            const guestCount = formData.get('guest-count');
            const venueType = formData.get('venue-type');
            const lightingEffect = formData.get('lighting-effect');
            const eventDate = formData.get('event-date');
            const musicSync = formData.get('music-sync');
            const additionalInfo = formData.get('additional-info') || 'Sin información adicional';
            const contactName = formData.get('contact-name');
            const contactPhone = formData.get('contact-phone');
            
            // Crear mensaje para WhatsApp
            const message = `🎨 *SOLICITUD LUCES NEÓN LED RGBW* 🎨\n\n` +
                `*📊 DETALLES DEL EVENTO:*\n` +
                `• Tipo: ${eventType}\n` +
                `• Invitados: ${guestCount}\n` +
                `• Venue: ${venueType}\n` +
                `• Fecha: ${eventDate}\n\n` +
                `*💡 REQUERIMIENTOS DE ILUMINACIÓN:*\n` +
                `• Efecto: ${lightingEffect}\n` +
                `• Sincronización Musical: ${musicSync}\n\n` +
                `*📝 INFORMACIÓN ADICIONAL:*\n` +
                `${additionalInfo}\n\n` +
                `*👤 CONTACTO:*\n` +
                `• Nombre: ${contactName}\n` +
                `• Teléfono: ${contactPhone}\n\n` +
                `*Solicito cotización para luces neón LED RGBW profesionales. Favor incluir recomendación de paquete y configuración de trípodes.*`;

            // Codificar mensaje para URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/525578960091?text=${encodedMessage}`;
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Mostrar mensaje de confirmación específico para Luces Neón
            showLucesNeonFormSuccessMessage();
        });
    }
    
    // Función para mostrar mensaje de éxito del formulario Luces Neón
    function showLucesNeonFormSuccessMessage() {
        const submitBtn = lucesNeonQuoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Enviando Solicitud Luces Neón...';
        submitBtn.style.background = '#4CAF50';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
            submitBtn.disabled = false;
        }, 4000);
    }
    
    // Función para mostrar mensaje de éxito
    function showFormSuccessMessage() {
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>¡Enviado! Abriendo WhatsApp...</span>';
        submitBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
        }, 3000);
    }
    
    // ==========================================================================
    // FAQ - Funcionalidad de Preguntas Frecuentes
    // ==========================================================================
    
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            if (question && answer) {
                question.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');
                    
                    // Cerrar todas las otras FAQ
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle del item actual
                    if (isActive) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                        
                        // Scroll suave hacia la pregunta abierta
                        setTimeout(() => {
                            const rect = item.getBoundingClientRect();
                            const offset = rect.top + window.pageYOffset - 100;
                            
                            window.scrollTo({
                                top: offset,
                                behavior: 'smooth'
                            });
                        }, 200);
                    }
                });
            }
        });
    }
    
    // Ejecutar funciones iniciales
    setActiveNavLink();
    handleHeaderScroll();
    initFAQ();
    
    console.log('RESOIL - Sitio web cargado correctamente');
});
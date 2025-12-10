# DOCUMENTO-ARTICULOS.md
## Guía Profesional para Crear Artículos del Blog - RESOIL

**Versión:** 1.0
**Sitio:** https://rentadesonidoeiluminacion.com.mx

---

## TABLA DE CONTENIDOS

1. [Introducción](#introducción)
2. [Paso 1: Planificación del Artículo](#paso-1-planificación-del-artículo)
3. [Paso 2: Crear el Archivo del Artículo](#paso-2-crear-el-archivo-del-artículo)
4. [Paso 3: Agregar la Card en blog.html](#paso-3-agregar-la-card-en-bloghtml)
5. [Checklist Final](#checklist-final)
6. [Plantillas de Código](#plantillas-de-código)

---

## INTRODUCCIÓN

Esta guía establece el proceso estándar para crear nuevos artículos del blog de RESOIL (Renta de Sonido e Iluminación). Cada artículo debe seguir este formato para mantener consistencia, optimización SEO y calidad profesional.

### Directrices Generales

- **Tono:** Profesional pero accesible, orientado a venta consultiva
- **Longitud ideal:** 1,500 - 3,000 palabras
- **Estructura:** Mínimo 5-7 secciones H2
- **CTAs:** Mínimo 2 llamadas a acción con WhatsApp
- **Imágenes:** Mínimo 4-6 imágenes relevantes

### IMPORTANTE: Contenido Atemporal

**Todos los artículos deben ser ATEMPORALES.** Esto significa:

- **NO incluir años** en títulos, meta tags ni contenido (ej: "Guía 2025", "Tendencias 2024")
- **NO usar fechas específicas** que hagan obsoleto el contenido
- **Usar frases atemporales** como: "Guía Completa", "Guía Profesional", "Todo lo que necesitas saber"
- **Las únicas fechas permitidas** son las técnicas de Schema.org (datePublished, dateModified) que no son visibles al usuario

**Ejemplos:**
| Incorrecto | Correcto |
|------------|----------|
| "Guía Completa 2025" | "Guía Completa" |
| "Tendencias de Iluminación 2025" | "Tendencias de Iluminación para Eventos" |
| "Lo mejor para bodas en 2025" | "Lo mejor para bodas" |

---

## PASO 1: PLANIFICACIÓN DEL ARTÍCULO

### 1.1 Investigación de Keywords

Antes de escribir, definir:

| Elemento | Descripción | Ejemplo |
|----------|-------------|---------|
| **Keyword Principal** | Término de búsqueda objetivo | "renta de guirnaldas CDMX" |
| **Keywords Secundarias** | 3-5 términos relacionados | "focos vintage eventos", "luces decorativas bodas" |
| **Long-tail Keywords** | Frases específicas | "renta de guirnaldas para bodas en jardín CDMX" |

### 1.2 Estructura del Contenido

```
1. Introducción (gancho + beneficio + promesa)
2. Sección explicativa (qué es / qué incluye)
3. Ventajas (por qué rentar vs comprar)
4. Aplicaciones (tipos de eventos)
5. Proceso profesional (cómo trabaja RESOIL)
6. Diferenciadores (por qué elegir RESOIL)
7. Opciones/Paquetes disponibles
8. Consejos de experto
9. CTA Final (cotización)
```

### 1.3 Naming Convention

**Formato del archivo:** `[tema-principal]-[subtema].html`

Ejemplos:
- `guirnaldas-luces-vintage-eventos.html`
- `iluminacion-bodas-jardin.html`
- `sonido-profesional-eventos-corporativos.html`
- `maquina-humo-bajo-xv-anos.html`

---

## PASO 2: CREAR EL ARCHIVO DEL ARTÍCULO

### 2.1 Ubicación del Archivo

```
/blog/[nombre-del-articulo].html
```

### 2.2 Estructura Completa del HTML

El artículo debe contener las siguientes secciones en orden:

#### A) DOCTYPE y HEAD

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- TITLE: 50-60 caracteres, keyword al inicio -->
    <title>[Keyword Principal] para Eventos en CDMX | RESOIL 2025</title>

    <!-- META DESCRIPTION: 150-160 caracteres -->
    <meta
      name="description"
      content="[Descripción persuasiva con keyword principal y beneficio. Incluir CDMX o zona de servicio]"
    />

    <!-- META KEYWORDS: 5-8 términos separados por coma -->
    <meta
      name="keywords"
      content="[keyword1], [keyword2], [keyword3], [keyword4], [keyword5]"
    />

    <!-- OPEN GRAPH META TAGS -->
    <meta
      property="og:title"
      content="[Título para redes sociales - puede ser más largo]"
    />
    <meta
      property="og:description"
      content="[Descripción para compartir en redes - 200 caracteres]"
    />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://rentadesonidoeiluminacion.com.mx/blog/[nombre-archivo].html" />
    <meta property="og:image" content="https://rentadesonidoeiluminacion.com.mx/img/blog/[imagen-og].webp" />

    <!-- TWITTER CARD META TAGS -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="[Título para Twitter - 70 caracteres]" />
    <meta name="twitter:description" content="[Descripción para Twitter]" />

    <!-- CANONICAL URL -->
    <link rel="canonical" href="https://rentadesonidoeiluminacion.com.mx/blog/[nombre-archivo].html" />

    <!-- FAVICON -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- STYLES (Non-render blocking) -->
    <link rel="preload" href="../css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="../css/style.css"></noscript>

    <!-- SCHEMA.ORG ARTICLE MARKUP -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "[Título del artículo - máximo 110 caracteres]",
      "description": "[Descripción del artículo para SEO]",
      "author": {
        "@type": "Organization",
        "name": "RESOIL - Renta de Sonido e Iluminación",
        "url": "https://rentadesonidoeiluminacion.com.mx"
      },
      "publisher": {
        "@type": "Organization",
        "name": "RESOIL",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rentadesonidoeiluminacion.com.mx/img/logo.webp"
        }
      },
      "datePublished": "[YYYY-MM-DD]",
      "dateModified": "[YYYY-MM-DD]"
    }
    </script>
  </head>
```

#### B) HEADER (Navegación)

```html
<body>
  <!-- Header -->
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        <!-- Logo -->
        <div class="nav-logo">
          <a href="https://rentadesonidoeiluminacion.com.mx/" class="logo-link">
            <img
              src="../img/img-index/renta-de-sonido-e-iluminacion.webp"
              alt="Renta de Sonido e Iluminación - Logo"
              class="logo-img"
            />
          </a>
        </div>

        <!-- Navegación Principal -->
        <nav class="main-nav">
          <ul class="nav-list" id="nav-list">
            <li class="nav-item has-dropdown">
              <a href="../servicios.html" class="nav-link"
                >Servicios <span class="dropdown-icon">▼</span></a
              >
              <ul class="dropdown-content">
                <li>
                  <a href="../servicios.html" class="dropdown-link"
                    >Todos los Servicios</a
                  >
                </li>
                <li class="has-submenu">
                  <a
                    href="../renta-de-iluminacion.html"
                    class="dropdown-link submenu-toggle"
                    >Iluminación <span class="submenu-icon">▶</span></a
                  >
                  <ul class="submenu-content">
                    <li>
                      <a href="../renta-de-iluminacion.html" class="submenu-link"
                        ><strong>Ver Todos los Servicios</strong></a
                      >
                    </li>
                    <li>
                      <a href="../iluminacion/guirnaldas.html" class="submenu-link"
                        >Guirnaldas LED</a
                      >
                    </li>
                    <li>
                      <a href="../iluminacion/luces-neon.html" class="submenu-link"
                        >Luces Neón</a
                      >
                    </li>
                    <li>
                      <a href="../iluminacion/sky-tracker.html" class="submenu-link"
                        >Sky Tracker</a
                      >
                    </li>
                    <li>
                      <a href="../iluminacion/luces-arquitectonicas.html" class="submenu-link"
                        >Luces Arquitectónicas</a
                      >
                    </li>
                    <li>
                      <a href="../iluminacion/cascadas-led.html" class="submenu-link"
                        >Cascadas LED</a
                      >
                    </li>
                    <li>
                      <a href="../iluminacion/proyector-de-gobos.html" class="submenu-link"
                        >Proyector de Gobos</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a
                    href="../renta-de-sonido.html"
                    class="dropdown-link submenu-toggle"
                    >Sonido <span class="submenu-icon">▶</span></a
                  >
                  <ul class="submenu-content">
                    <li>
                      <a href="../renta-de-sonido.html" class="submenu-link"
                        ><strong>Ver Todos los Servicios</strong></a
                      >
                    </li>
                    <li>
                      <a href="../sonido/bocinas-bodas.html" class="submenu-link"
                        >Bocinas para Bodas</a
                      >
                    </li>
                    <li>
                      <a href="../sonido/bocinas-xv-anos.html" class="submenu-link"
                        >Bocinas para XV Años</a
                      >
                    </li>
                    <li>
                      <a href="../sonido/bocinas-fiestas.html" class="submenu-link"
                        >Bocinas para Fiestas</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a
                    href="../equipos.html"
                    class="dropdown-link submenu-toggle"
                    >Equipos <span class="submenu-icon">▶</span></a
                  >
                  <ul class="submenu-content">
                    <li>
                      <a href="../equipos.html" class="submenu-link"
                        ><strong>Ver Todos los Servicios</strong></a
                      >
                    </li>
                    <li>
                      <a href="../equipos/bolas-disco.html" class="submenu-link"
                        >Bolas Disco</a
                      >
                    </li>
                    <li>
                      <a href="../equipos/maquina-de-confeti.html" class="submenu-link"
                        >Máquina de Confeti</a
                      >
                    </li>
                    <li>
                      <a href="../equipos/renta-de-podium.html" class="submenu-link"
                        >Renta de Podium</a
                      >
                    </li>
                    <li>
                      <a href="../equipos/pantalla-inflable.html" class="submenu-link"
                        >Pantalla Inflable</a
                      >
                    </li>
                    <li>
                      <a href="../equipos/maquina-de-humo.html" class="submenu-link"
                        >Máquina de Humo</a
                      >
                    </li>
                    <li>
                      <a href="../equipos/maquina-de-burbujas.html" class="submenu-link"
                        >Máquina de Burbujas</a
                      >
                    </li>
                    <li>
                      <a href="../equipos/humo-bajo.html" class="submenu-link">Humo Bajo</a>
                    </li>
                    <li>
                      <a href="../equipos/mesas-picnic.html" class="submenu-link">Mesas Picnic</a>
                    </li>
                    <li>
                      <a href="../equipos/carpas-para-eventos.html" class="submenu-link">Carpas para Eventos</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="../nosotros.html" class="nav-link">Nosotros</a>
            </li>
            <li class="nav-item">
              <a href="../blog.html" class="nav-link active">Blog</a>
            </li>
            <li class="nav-item">
              <a href="../contacto.html" class="nav-link">Contacto</a>
            </li>
          </ul>

          <!-- Botón hamburguesa para móviles -->
          <button
            class="mobile-menu-btn"
            id="mobile-menu-btn"
            aria-label="Abrir menú"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </nav>
      </div>
    </nav>
  </header>
```

#### C) BREADCRUMBS

```html
  <!-- Main Content -->
  <!-- Breadcrumbs -->
  <div class="breadcrumb-container">
    <div class="container">
      <nav class="breadcrumb" aria-label="Migas de pan">
        <a href="../index.html">Inicio</a>
        <span class="breadcrumb-separator">›</span>
        <a href="../blog.html">Blog</a>
        <span class="breadcrumb-separator">›</span>
        <span class="breadcrumb-current">[Título Corto del Artículo]</span>
      </nav>
    </div>
  </div>
```

#### D) ARTICLE HERO

```html
  <main class="main-content">
    <!-- Article Hero -->
    <section class="article-hero">
      <div class="container">
        <div class="breadcrumb">
          <a href="../index.html">Inicio</a> » <a href="../blog.html">Blog</a> » [Título Corto]
        </div>
        <h1 class="article-title">[Título Principal del Artículo - con Keyword]</h1>
        <p class="article-subtitle">
          [Subtítulo descriptivo de 1-2 oraciones que expanda el título y genere interés]
        </p>
      </div>
    </section>
```

#### E) CONTENIDO DEL ARTÍCULO

```html
    <!-- Article Content -->
    <article class="article-content">
      <div class="container">
        <div class="article-body">

          <!-- Introducción -->
          <section class="article-section">
            <p class="article-intro">
              <strong>[Primera oración impactante con keyword principal en negritas.]</strong>
              [Continuar con contexto, estadísticas o datos relevantes que establezcan autoridad.]
            </p>

            <p>
              [Párrafo de 2-3 oraciones sobre la experiencia de RESOIL y promesa del artículo.]
            </p>
          </section>

          <!-- Secciones del Artículo (Repetir estructura) -->
          <section class="article-section">
            <h2>[Título de Sección con Keyword Secundaria]</h2>

            <p>
              [Contenido de la sección...]
            </p>

            <h3>[Subtítulo si es necesario]</h3>

            <p>
              <strong>[Punto importante:]</strong> [Explicación del punto]
            </p>
          </section>

          <!-- Galería de Imágenes (Opcional pero recomendado) -->
          <section class="article-section">
            <h2>Galería de [Tema del Artículo]</h2>
            <p>
              [Descripción breve de las imágenes]
            </p>

            <div class="article-gallery">
              <div class="article-gallery-item">
                <img src="../img/blog/[imagen1].webp" alt="[Descripción alt con keywords]" />
              </div>
              <div class="article-gallery-item">
                <img src="../img/blog/[imagen2].webp" alt="[Descripción alt con keywords]" />
              </div>
              <!-- Agregar más según necesidad (4-6 imágenes) -->
            </div>
          </section>

          <!-- CTA Final (OBLIGATORIO) -->
          <section class="article-section article-cta">
            <h2>[Título de CTA persuasivo relacionado al tema]</h2>

            <p>
              [Párrafo que resuma el beneficio principal y genere urgencia]
            </p>

            <p>
              [Párrafo que refuerce la autoridad de RESOIL: experiencia, eventos exitosos, etc.]
            </p>

            <div class="article-cta-buttons">
              <a
                href="https://wa.me/5215578960091?text=Hola%2C%20quiero%20cotizar%20[SERVICIO-RELACIONADO]%20para%20mi%20evento"
                class="cta-btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
              <a href="../contacto.html" class="cta-btn secondary">
                Solicitar Cotización Detallada
              </a>
            </div>
          </section>

        </div>
```

#### F) SIDEBAR

```html
        <!-- Sidebar con Información Adicional -->
        <aside class="article-sidebar">
          <div class="sidebar-box">
            <h3>Información Rápida</h3>
            <ul class="sidebar-list">
              <li><strong>Cobertura:</strong> CDMX y Estado de México</li>
              <li><strong>Disponibilidad:</strong> 365 días al año</li>
              <li><strong>Instalación:</strong> Siempre incluida</li>
              <li><strong>Tiempo de respuesta:</strong> &lt;24 horas</li>
              <li><strong>Experiencia:</strong> 15+ años, 5,000+ eventos</li>
            </ul>
          </div>

          <div class="sidebar-box">
            <h3>Servicios Relacionados</h3>
            <ul class="sidebar-links">
              <li><a href="../[servicio-relacionado-1].html">[Nombre Servicio 1]</a></li>
              <li><a href="../[servicio-relacionado-2].html">[Nombre Servicio 2]</a></li>
              <li><a href="../[servicio-relacionado-3].html">[Nombre Servicio 3]</a></li>
              <li><a href="../[categoria-principal].html">Ver Todos los Servicios</a></li>
            </ul>
          </div>

          <div class="sidebar-box sidebar-cta">
            <h3>¿Necesitas Asesoría?</h3>
            <p>Nuestros expertos están disponibles para ayudarte a planear [tema del artículo] para tu evento.</p>
            <a
              href="https://wa.me/5215578960091?text=Necesito%20asesoría%20sobre%20[TEMA]%20para%20mi%20evento"
              class="sidebar-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar Experto
            </a>
          </div>
        </aside>

      </div>
    </article>
```

#### G) ARTÍCULOS RELACIONADOS

```html
    <!-- Artículos Relacionados -->
    <section class="related-articles-section">
      <div class="container">
        <div class="section-header">
          <h2>ARTÍCULOS RELACIONADOS</h2>
          <p class="section-subtitle">
            Continúa aprendiendo sobre [tema general] para eventos
          </p>
        </div>

        <div class="related-articles-grid">
          <!-- Artículo Relacionado 1 -->
          <article class="related-article-card">
            <div class="related-article-content">
              <div class="related-article-category">[CATEGORÍA]</div>
              <h3 class="related-article-title">
                <a href="[articulo-1].html">[Título del Artículo 1]</a>
              </h3>
              <p class="related-article-excerpt">
                [Extracto de 1-2 oraciones del artículo relacionado]
              </p>
              <a href="[articulo-1].html" class="related-article-link">
                Leer artículo →
              </a>
            </div>
          </article>

          <!-- Artículo Relacionado 2 -->
          <article class="related-article-card">
            <div class="related-article-content">
              <div class="related-article-category">[CATEGORÍA]</div>
              <h3 class="related-article-title">
                <a href="[articulo-2].html">[Título del Artículo 2]</a>
              </h3>
              <p class="related-article-excerpt">
                [Extracto de 1-2 oraciones del artículo relacionado]
              </p>
              <a href="[articulo-2].html" class="related-article-link">
                Leer artículo →
              </a>
            </div>
          </article>

          <!-- Artículo Relacionado 3 -->
          <article class="related-article-card">
            <div class="related-article-content">
              <div class="related-article-category">[CATEGORÍA]</div>
              <h3 class="related-article-title">
                <a href="[articulo-3].html">[Título del Artículo 3]</a>
              </h3>
              <p class="related-article-excerpt">
                [Extracto de 1-2 oraciones del artículo relacionado]
              </p>
              <a href="[articulo-3].html" class="related-article-link">
                Leer artículo →
              </a>
            </div>
          </article>
        </div>

        <div class="related-articles-cta">
          <a href="../blog.html" class="related-articles-button">Ver Todos los Artículos</a>
        </div>
      </div>
    </section>

  </main>
```

#### H) FOOTER

```html
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <!-- Información de contacto -->
      <div class="footer-section">
        <h3 class="footer-title">RENTA DE SONIDO E ILUMINACIÓN</h3>
        <p class="footer-description">
          Especialistas en renta de equipos de sonido e iluminación profesional para todo tipo de eventos en Ciudad de México.
        </p>
      </div>

      <!-- Enlaces rápidos -->
      <div class="footer-section">
        <h4 class="footer-subtitle">Enlaces Rápidos</h4>
        <ul class="footer-links">
          <li><a href="../index.html#inicio">Inicio</a></li>
          <li><a href="../servicios.html">Servicios</a></li>
          <li><a href="../nosotros.html">Nosotros</a></li>
          <li><a href="../equipos.html">Equipos</a></li>
          <li><a href="../blog.html">Blog</a></li>
          <li><a href="../contacto.html">Contacto</a></li>
        </ul>
      </div>

      <!-- Servicios de Iluminación -->
      <div class="footer-section">
        <h4 class="footer-subtitle">Iluminación Profesional</h4>
        <ul class="footer-links">
          <li><a href="../renta-de-iluminacion.html"><strong>Todos los Servicios</strong></a></li>
          <li><a href="../iluminacion/guirnaldas.html">Guirnaldas LED</a></li>
          <li><a href="../iluminacion/luces-neon.html">Luces Neón</a></li>
          <li><a href="../iluminacion/sky-tracker.html">Sky Tracker</a></li>
          <li><a href="../iluminacion/luces-arquitectonicas.html">Luces Arquitectónicas</a></li>
        </ul>
      </div>

      <!-- Servicios de Sonido -->
      <div class="footer-section">
        <h4 class="footer-subtitle">Sonido Profesional</h4>
        <ul class="footer-links">
          <li><a href="../renta-de-sonido.html"><strong>Todos los Servicios</strong></a></li>
          <li><a href="../sonido/bocinas-bodas.html">Bocinas para Bodas</a></li>
          <li><a href="../sonido/bocinas-xv-anos.html">Bocinas para XV Años</a></li>
          <li><a href="../sonido/bocinas-fiestas.html">Bocinas para Fiestas</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer-section">
        <h4 class="footer-subtitle">Información de Contacto</h4>
        <div class="footer-contact">
          <p>
            Montecito 38, Nápoles<br />Benito Juárez, 03810<br />Ciudad de México, CDMX
          </p>
          <p>
            <strong>WhatsApp:</strong>
            <a href="https://wa.me/5215578960091" target="_blank" rel="noopener noreferrer">
              +52 55 7896 0091
            </a>
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:contacto@rentadesonidoeiluminacion.com.mx"
              >contacto@rentadesonidoeiluminacion.com.mx</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
```

#### I) SCRIPTS Y WHATSAPP FLOTANTE

```html
  <!-- Scripts -->

  <!-- Botón Flotante de WhatsApp -->
  <div class="whatsapp-float">
    <a href="https://wa.me/5215578960091?text=Hola,%20me%20interesa%20cotizar%20un%20servicio%20de%20sonido%20e%20iluminación" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
    </a>
    <span class="tooltip">¡Chatea con nosotros!</span>
  </div>

  <script src="../js/app.js" defer></script>
</body>
</html>
```

---

## PASO 3: AGREGAR LA CARD EN BLOG.HTML

### 3.1 Ubicación

Agregar la card dentro de `<div class="blog-grid">` en el archivo `/blog.html`.

### 3.2 Estructura de la Card

#### Card Estándar (Sin badge)

```html
<!-- Artículo: [Nombre del Artículo] -->
<article class="blog-card">
  <div class="blog-card-image">
    <a href="blog/[nombre-archivo].html">
      <img
        src="img/blog/[imagen-card].webp"
        alt="[Descripción SEO de la imagen]"
        class="service-img"
      />
    </a>
  </div>
  <div class="blog-card-content">
    <div class="blog-card-category">[CATEGORÍA EN MAYÚSCULAS]</div>
    <h3 class="blog-card-title">
      <a href="blog/[nombre-archivo].html">
        [Título del Artículo - Atractivo y con Keyword]
      </a>
    </h3>
    <p class="blog-card-excerpt">
      [Extracto de 2-3 oraciones que resuma el artículo y genere interés. Debe incluir la keyword principal de forma natural.]
    </p>
    <div class="blog-card-meta">
      <span class="blog-read-time">[X] min lectura</span>
      <span class="blog-topic">[Tema 1] • [Tema 2] • [Tema 3]</span>
    </div>
    <a href="blog/[nombre-archivo].html" class="blog-card-button">
      LEER ARTÍCULO
    </a>
  </div>
</article>
```

#### Card Destacada (Con badge NUEVO)

```html
<!-- Artículo: [Nombre del Artículo] (DESTACADO) -->
<article class="blog-card featured">
  <div class="blog-card-image">
    <a href="blog/[nombre-archivo].html">
      <img
        src="img/blog/[imagen-card].webp"
        alt="[Descripción SEO de la imagen]"
        class="service-img"
      />
      <span class="blog-badge">NUEVO</span>
    </a>
  </div>
  <div class="blog-card-content">
    <div class="blog-card-category">[CATEGORÍA EN MAYÚSCULAS]</div>
    <h3 class="blog-card-title">
      <a href="blog/[nombre-archivo].html">
        [Título del Artículo - Atractivo y con Keyword]
      </a>
    </h3>
    <p class="blog-card-excerpt">
      [Extracto más extenso de 3-4 oraciones para artículos destacados. Debe ser persuasivo y generar urgencia de lectura.]
    </p>
    <div class="blog-card-meta">
      <span class="blog-read-time">[X] min lectura</span>
      <span class="blog-topic">[Tema 1] • [Tema 2] • [Tema 3]</span>
    </div>
    <a href="blog/[nombre-archivo].html" class="blog-card-button">
      LEER ARTÍCULO COMPLETO
    </a>
  </div>
</article>
```

### 3.3 Categorías Disponibles

| Categoría | Uso |
|-----------|-----|
| `ILUMINACIÓN` | Artículos sobre cualquier tipo de iluminación |
| `ILUMINACIÓN DECORATIVA` | Guirnaldas, luces vintage, ambient lighting |
| `SONIDO` | Artículos sobre audio y bocinas |
| `EVENTOS` | Guías generales para eventos |
| `BODAS` | Contenido específico para bodas |
| `XV AÑOS` | Contenido específico para quinceañeras |
| `CORPORATIVO` | Eventos empresariales |
| `TENDENCIAS` | Novedades y tendencias del sector |
| `GUÍAS` | Tutoriales y guías paso a paso |

---

## CHECKLIST FINAL

### Antes de Publicar

- [ ] **SEO HEAD**
  - [ ] Title con keyword (50-60 caracteres)
  - [ ] Meta description (150-160 caracteres)
  - [ ] Meta keywords (5-8 términos)
  - [ ] Open Graph completo (title, description, image, url)
  - [ ] Twitter Card completo
  - [ ] Canonical URL correcta
  - [ ] Schema.org Article markup con fechas

- [ ] **CONTENIDO**
  - [ ] H1 único con keyword principal
  - [ ] Mínimo 5 secciones H2
  - [ ] Keyword principal en primer párrafo (negritas)
  - [ ] Keywords secundarias distribuidas naturalmente
  - [ ] Mínimo 1,500 palabras
  - [ ] Galería de imágenes (4-6)
  - [ ] Alt text descriptivo en todas las imágenes

- [ ] **CTAs**
  - [ ] CTA principal con WhatsApp (texto personalizado al tema)
  - [ ] CTA secundario a página de contacto
  - [ ] Sidebar con CTA de asesoría
  - [ ] Links a servicios relacionados

- [ ] **NAVEGACIÓN**
  - [ ] Logo enlaza a URL absoluta
  - [ ] Menú de navegación completo y correcto
  - [ ] Breadcrumbs funcionales
  - [ ] Link "Blog" marcado como active
  - [ ] Artículos relacionados con links correctos

- [ ] **ELEMENTOS TÉCNICOS**
  - [ ] CSS con preload (non-render blocking)
  - [ ] JavaScript con defer
  - [ ] Botón flotante de WhatsApp presente
  - [ ] Footer completo con información de contacto
  - [ ] Teléfono WhatsApp: 5215578960091

- [ ] **BLOG.HTML**
  - [ ] Card agregada en posición correcta
  - [ ] Imagen optimizada (.webp)
  - [ ] Categoría correcta
  - [ ] Tiempo de lectura calculado
  - [ ] Topics/tags relevantes

- [ ] **IMÁGENES**
  - [ ] Formato .webp
  - [ ] Peso optimizado (<200KB por imagen)
  - [ ] Dimensiones apropiadas
  - [ ] Alt text con keywords
  - [ ] Imagen OG (1200x630px recomendado)

---

## PLANTILLAS DE CÓDIGO

### Mensaje WhatsApp para CTA Principal

```
Hola%2C%20quiero%20cotizar%20[SERVICIO]%20para%20mi%20evento
```

Ejemplos:
- `renta%20de%20guirnaldas%20vintage`
- `iluminación%20para%20boda`
- `sonido%20profesional%20para%20evento%20corporativo`
- `humo%20bajo%20para%20XV%20años`

### Mensaje WhatsApp para Sidebar

```
Necesito%20asesoría%20sobre%20[TEMA]%20para%20mi%20evento
```

### Cálculo de Tiempo de Lectura

- Velocidad promedio: 200 palabras por minuto
- Fórmula: `Total palabras / 200 = minutos`
- Redondear al número par más cercano

| Palabras | Tiempo |
|----------|--------|
| 1,000 | 5 min |
| 1,500 | 8 min |
| 2,000 | 10 min |
| 2,500 | 12 min |
| 3,000 | 15 min |

---

## NOTAS IMPORTANTES

1. **URLs:** Siempre usar URLs absolutas para el logo: `https://rentadesonidoeiluminacion.com.mx/`

2. **Teléfono:** El número de WhatsApp es `5215578960091` (con código de país)

3. **Imágenes:** Guardar en `/img/blog/` con nombres descriptivos: `guirnaldas-vintage-boda-jardin.webp`

4. **Fechas Schema.org:** Usar formato `YYYY-MM-DD`

5. **Artículos Relacionados:** Siempre incluir 3 artículos del blog, preferentemente de la misma categoría o temas complementarios.

6. **CONTENIDO ATEMPORAL (CRÍTICO):**
   - NUNCA incluir años en títulos, H1, meta tags o contenido visible (ej: "2025", "2024")
   - Usar alternativas como: "Guía Completa", "Guía Profesional", "Todo lo que necesitas saber"
   - Las únicas fechas permitidas son `datePublished` y `dateModified` en Schema.org (no visibles al usuario)
   - Esto garantiza que el contenido no se vuelva obsoleto y mantenga relevancia SEO a largo plazo

---

**Documento creado para RESOIL - Renta de Sonido e Iluminación**
https://rentadesonidoeiluminacion.com.mx

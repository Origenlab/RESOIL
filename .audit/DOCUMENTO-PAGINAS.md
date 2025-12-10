# GUÍA PROFESIONAL PARA PÁGINAS DE SERVICIOS RESOIL
## Documento Maestro de Creación de Páginas Internas

**Versión:** 1.0
**Fecha:** 17 de noviembre de 2025
**Responsable:** Equipo de Marketing y Desarrollo RESOIL
**Base de referencia:** [guirnaldas.html](../guirnaldas.html)

---

## 1. RESUMEN EJECUTIVO

### 1.1 Objetivo de esta guía

Este documento establece el estándar absoluto para crear páginas internas de servicios de RESOIL. Su propósito es garantizar que cada nueva página mantenga la misma calidad, arquitectura SEO, experiencia de usuario y capacidad de conversión que la página de referencia `/guirnaldas.html`.

**Cuándo usar esta guía:**
- Al crear una nueva página de servicio (ej.: luces neón, renta de sonido, pistas LED)
- Al actualizar páginas de servicio existentes
- Al delegar la creación de contenido a redactores externos
- Al automatizar la generación de páginas mediante sistemas CMS

### 1.2 Público objetivo de las páginas de servicio

Las páginas de servicio de RESOIL están diseñadas para múltiples segmentos:

**Segmento primario (B2B):**
- Wedding planners profesionales
- Productores de eventos corporativos
- Coordinadores de eventos sociales
- Agencias de marketing experiencial

**Segmento secundario (B2C):**
- Novias y novios que planean su boda
- Organizadores de XV años
- Empresas que organizan eventos internos
- Familias que planean celebraciones especiales

**Tono de comunicación:**
- Profesional pero accesible
- Segunda persona (tú/usted según contexto)
- Enfoque en beneficios emocionales y técnicos
- Autoridad técnica sin jerga innecesaria

---

## 2. ANÁLISIS DE LA PÁGINA BASE `/guirnaldas.html`

### 2.1 Elementos SEO fundamentales

**Title tag:**
```
Renta de Guirnaldas de Luces Vintage para Bodas y Eventos | RESOIL CDMX
```
- **Longitud:** 74 caracteres (dentro del rango óptimo 50-65, ligeramente extendido)
- **Estructura:** Servicio + Especificación + Tipo de Evento + Marca + Ubicación
- **Keywords primarias:** "Renta de Guirnaldas", "Luces Vintage", "Bodas y Eventos", "CDMX"

**Meta Description:**
```
Especialistas en renta de guirnaldas con focos Edison LED para bodas y eventos en CDMX y Estado de México. Instalación profesional con tecnología de punta y seguridad certificada.
```
- **Longitud:** 174 caracteres (rango óptimo 140-160, ligeramente extendido)
- **Incluye:** Autoridad ("Especialistas"), producto específico, ubicación geográfica, valor diferencial y CTA implícito

**URL slug:**
```
/guirnaldas.html
```
- Corta, descriptiva, sin caracteres especiales
- Palabra clave principal incluida
- Sin acentos, minúsculas, formato HTML estático

**Keywords meta:**
```
renta guirnaldas CDMX, luces vintage bodas, focos Edison eventos, iluminación romántica, series luces decorativas, RESOIL, Estado de México
```

### 2.2 Estructura de encabezados (H1-H3)

**H1 (único):**
```
RENTA DE GUIRNALDAS
```
- Ubicación: Hero section
- Formato visual: Texto grande + subtítulo
- Keyword principal incluida

**H2 (principales):**
1. "Galería de Instalaciones"
2. "Por Qué la Renta de Guirnaldas de Luces Es la Decisión Correcta para Su Evento"
3. "Aplicaciones Estratégicas: Dónde Brillan Nuestras Guirnaldas de Luces Vintage"
4. "Paquetes y Especificaciones Técnicas: Soluciones para Cada Escala de Evento"
5. "Solicita tu Cotización de Guirnaldas de Luces"
6. "Preguntas Frecuentes sobre Renta de Guirnaldas"

**H3 (sub-secciones):**
- "Eventos Donde Nuestras Guirnaldas Crean Magia" (bajo Aplicaciones)
- "Especificaciones Técnicas Universales" (bajo Paquetes)
- Cada pregunta del FAQ

**H4 (detalles):**
- Títulos de cada tarjeta de aplicación (Bodas Románticas, Eventos Corporativos, etc.)

### 2.3 Métricas de contenido

**Longitud aproximada:** 4,200 palabras
**Párrafos:** ~45
**Listas:** 8 listas (bullets y numeradas)
**Tabla:** 1 tabla comparativa de paquetes
**Imágenes:** 9 imágenes en galería + 1 OG image
**CTAs:** 4 llamadas a la acción principales
**FAQ:** 8 preguntas frecuentes expandibles

### 2.4 Elementos visuales y multimedia

**Imágenes de galería:**
- Nombre de archivo: `img/img-index/referencia.webp` (placeholder)
- Formato recomendado: WebP
- Alt text único y descriptivo para cada imagen
- Dimensiones sugeridas: 800×533px (ratio 3:2)

**Open Graph image:**
- Ruta: `https://resoil.com.mx/img/guirnaldas-og.webp`
- Dimensiones: 1200×630px (ratio OG estándar)

### 2.5 CTAs identificados

**CTA Primario 1:**
```html
<a href="#galeria" class="cta-button primary">
  Ver Galería de Instalaciones
</a>
```

**CTA Primario 2:**
```html
<a href="#cotizacion" class="cta-button secondary">
  Solicitar Cotización
</a>
```

**CTA de conversión principal:**
```html
<button type="submit" class="submit-btn">
  Enviar Solicitud por WhatsApp
</button>
```

**CTA de contacto directo:**
```html
<a href="tel:+525578960091" class="cta-btn secondary">
  <span>Consultoría Inmediata</span>
</a>
```

### 2.6 Elementos NO negociables

**Componentes que deben mantenerse exactos:**
- Estructura del menú de navegación (header)
- Footer completo con enlaces, contacto y redes sociales
- Tipografías del sitio (definidas en `css/style.css`)
- Grid responsive y breakpoints
- Formato de formulario de cotización
- Estructura de FAQ con acordeón
- Llamada al archivo `js/app.js`

**Componentes adaptables:**
- Textos de hero (deben ajustarse al servicio)
- Imágenes de galería (específicas del servicio)
- Contenido de aplicaciones/casos de uso
- Especificaciones técnicas del servicio
- Preguntas FAQ (relevantes al servicio)
- Estadísticas y números de confianza

---

## 3. ESTRUCTURA OBLIGATORIA DE LA PÁGINA DE SERVICIO

### 3.1 Plantilla de encabezados mínima

Cada página de servicio DEBE incluir esta estructura en el orden especificado:

```markdown
# H1: [SERVICIO] (Hero Section)
Ejemplo: RENTA DE GUIRNALDAS

## H2: Galería de Instalaciones
[9 imágenes del servicio con alt text descriptivo]

## H2: Por Qué [SERVICIO] Es la Decisión Correcta para Su Evento
[2 párrafos + estadísticas de confianza]

## H2: Aplicaciones Estratégicas / Casos de Uso
### H3: Eventos Donde [SERVICIO] Crea Magia
[6 tarjetas H4 con tipos de eventos]

## H2: Paquetes y Especificaciones Técnicas
### H3: Especificaciones Técnicas Universales
[Tabla comparativa + lista de especificaciones]

## H2: Solicita tu Cotización de [SERVICIO]
[Formulario completo con 10+ campos]

## H2: Preguntas Frecuentes sobre [SERVICIO]
[Mínimo 8 preguntas H3 con respuestas expandibles]

## H2: CTA Final B2B/B2C
[Llamada a la acción segmentada para profesionales y usuarios finales]
```

### 3.2 Propósito de cada sección

**Hero Section (H1):**
- **Objetivo:** Captar atención inmediata y comunicar valor único
- **Elementos:** Título grande, tagline emocional, 2 párrafos de valor, 2 CTAs
- **Longitud:** 150-200 palabras

**Galería de Instalaciones:**
- **Objetivo:** Prueba social visual, inspiración, evidencia de calidad
- **Elementos:** 9 imágenes, descripción de galería
- **Longitud:** 50-80 palabras

**Por Qué Es la Decisión Correcta:**
- **Objetivo:** Vencer objeciones, establecer autoridad, generar confianza
- **Elementos:** 2 párrafos, 4 estadísticas destacadas
- **Longitud:** 200-250 palabras

**Aplicaciones Estratégicas:**
- **Objetivo:** Ayudar al usuario a visualizar el servicio en su contexto
- **Elementos:** 6 tarjetas de casos de uso, párrafo de cierre
- **Longitud:** 500-600 palabras

**Paquetes y Especificaciones:**
- **Objetivo:** Facilitar toma de decisiones, transparencia en opciones
- **Elementos:** Tabla comparativa, lista técnica
- **Longitud:** 400-500 palabras

**Formulario de Cotización:**
- **Objetivo:** Captura de leads calificados
- **Elementos:** 10+ campos, aviso de privacidad, CTA WhatsApp
- **Longitud:** 100 palabras (copy)

**FAQ:**
- **Objetivo:** Resolver objeciones técnicas, educar, mejorar SEO
- **Elementos:** 8 preguntas con respuestas detalladas
- **Longitud:** 1,200-1,500 palabras

**CTA Final:**
- **Objetivo:** Conversión de visitantes B2B y B2C
- **Elementos:** Segmentación de público, garantías, 4 estadísticas, 2 CTAs
- **Longitud:** 300-400 palabras

---

## 4. COMPONENTES DE MARKETING Y CONVERSIÓN

### 4.1 Copy del Hero Section

**Estructura obligatoria:**

```html
<h1>
  RENTA DE<br /><span class="hero-subtitle">[SERVICIO]</span>
</h1>
<p class="hero-tagline">
  [Descripción emocional breve del servicio + ubicación geográfica]
</p>
```

**Ejemplo adaptado:**
```html
<h1>
  RENTA DE<br /><span class="hero-subtitle">LUCES NEÓN</span>
</h1>
<p class="hero-tagline">
  Letreros luminosos personalizados que transforman tu evento en una experiencia instagrameable en CDMX y Estado de México
</p>
```

**Párrafo 1 (valor emocional + objeción principal):**
- Longitud: 60-80 palabras
- Incluye: Pregunta emocional, promesa de valor, solución al dolor principal
- Formato: `<strong>` para primera oración, resto normal

**Párrafo 2 (autoridad técnica + beneficio social):**
- Longitud: 60-80 palabras
- Incluye: Especificación técnica, beneficio de compartibilidad, cierre emocional
- Formato: `<em>` para frase de cierre

**CTAs del Hero:**
- CTA primario: "Ver Galería de Instalaciones" (visual, bajo fricción)
- CTA secundario: "Solicitar Cotización" (conversión directa)

### 4.2 Propuestas de valor (3-5 bullets)

Ubicación: Sección "Por Qué Es la Decisión Correcta"

**Estructura de estadísticas destacadas:**

```html
<div class="decision-highlights">
  <div class="highlight-item">
    <span class="highlight-number">[NÚMERO]</span>
    <span class="highlight-text">[DESCRIPCIÓN]</span>
  </div>
  <!-- Repetir 4 veces -->
</div>
```

**Bullets obligatorios:**
1. Años de experiencia (10+)
2. Eventos exitosos (500+)
3. Garantía técnica (0% fallas / 99.7% uptime)
4. Soporte disponible (24/7)

**Bullets adaptables según servicio:**
- Cobertura geográfica ampliada
- Certificaciones específicas
- Inventario disponible
- Tiempo de respuesta

### 4.3 Elementos de confianza

**Ubicación en la página:**
1. Estadísticas numéricas (sección "Por Qué")
2. Garantías explícitas (CTA final)
3. Menciones de clientes (FAQ respuesta sobre clima)
4. Número de contacto visible (footer + CTA)

**Elementos obligatorios:**
- "10+ Años de experiencia en CDMX"
- "500+ Eventos exitosos realizados"
- "24/7 Soporte técnico disponible"
- "Garantía Total: Si no superamos sus expectativas, reembolsamos 100%"
- "Póliza de seguro incluida"
- "Técnico certificado en sitio"

**Formato de contacto destacado:**
```html
<a href="tel:+525578960091" class="cta-btn secondary">
  <span>Consultoría Inmediata</span>
</a>
```

---

## 5. SEO ON-PAGE (DETALLADO Y ACCIONABLE)

### 5.1 Reglas para meta tags

**Title Tag:**
- **Longitud:** 50-65 caracteres (máximo 70)
- **Estructura:** `[Servicio] + [Especificación] + [Tipo de Evento] | [Marca] [Ubicación]`
- **Ejemplo:** `Renta de Luces Neón Personalizadas para Eventos | RESOIL CDMX`
- **Keyword principal:** SIEMPRE en los primeros 40 caracteres
- **Marca:** Incluir "RESOIL" + "CDMX" o "Estado de México"

**Meta Description:**
- **Longitud:** 140-160 caracteres (máximo 165)
- **Estructura:** `[Autoridad] en [servicio detallado] para [público] en [ubicación]. [Valor diferencial] + [Garantía/CTA].`
- **Ejemplo:** `Especialistas en renta de luces neón LED personalizadas para bodas y eventos en CDMX. Diseños únicos, instalación profesional y entrega garantizada en 48h.`
- **CTA implícito:** Usar verbos de acción ("Solicita", "Descubre", "Reserva")
- **Keywords semánticas:** Incluir 2-3 variaciones de la keyword principal

**URL Slug:**
- **Formato:** `/[servicio-principal].html`
- **Reglas:**
  - Solo minúsculas
  - Sin acentos ni caracteres especiales (ñ → n)
  - Guiones para separar palabras
  - Máximo 3 palabras (idealmente 1-2)
  - Sin artículos (el, la, de, para)
- **Ejemplos válidos:**
  - `/guirnaldas.html`
  - `/luces-neon.html`
  - `/pistas-led.html`
  - `/sonido-profesional.html`
- **Ejemplos INCORRECTOS:**
  - `/renta-de-guirnaldas-de-luces-vintage.html` (demasiado largo)
  - `/guírnaldas.html` (acento)
  - `/Guirnaldas.html` (mayúscula)

### 5.2 Palabras clave y semántica LSI

**Keyword principal:**
Debe aparecer:
- En el H1 (obligatorio)
- En el title tag (primeros 40 caracteres)
- En la meta description
- En el primer párrafo del hero (primeras 100 palabras)
- En al menos 3 H2s
- En el alt text de la primera imagen

**Keywords semánticas LSI (Latent Semantic Indexing):**

Para "Guirnaldas de Luces":
- Luces vintage
- Focos Edison
- Series de luces
- Iluminación decorativa
- Guirnaldas LED
- Luces tipo kermesse
- Iluminación romántica
- Focos decorativos
- Alquiler de luces
- Renta de iluminación

**Densidad recomendada:**
- Keyword principal: 1.5% - 2.5% del texto total
- Keywords LSI combinadas: 3% - 5%
- **NO hacer keyword stuffing** (evitar repeticiones innaturales)

**Colocación estratégica:**
1. H1: Keyword principal exacta
2. Primer H2: Keyword principal + variación
3. H2 de paquetes: Keyword principal + "técnicas" / "opciones"
4. H2 de FAQ: Keyword principal + "preguntas frecuentes"
5. Alt text de imágenes: Keyword principal + contexto específico

### 5.3 Open Graph y Twitter Card

**Estructura completa:**

```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="[TITLE TAG IDÉNTICO O VARIACIÓN]" />
<meta property="og:description" content="[META DESCRIPTION O VARIACIÓN MÁS EMOCIONAL]" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://resoil.com.mx/[slug]" />
<meta property="og:image" content="https://resoil.com.mx/img/[servicio]-og.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_MX" />
<meta property="og:site_name" content="RESOIL - Renta de Sonido e Iluminación" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[TITLE TAG]" />
<meta name="twitter:description" content="[META DESCRIPTION]" />
<meta name="twitter:image" content="https://resoil.com.mx/img/[servicio]-og.webp" />
```

**Ejemplo completo para "Luces Neón":**

```html
<meta property="og:title" content="Renta de Luces Neón Personalizadas para Eventos | RESOIL CDMX" />
<meta property="og:description" content="Crea momentos instagrameables con letreros neón LED personalizados para bodas y eventos. Diseño único, instalación profesional en CDMX y Estado de México." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://resoil.com.mx/luces-neon" />
<meta property="og:image" content="https://resoil.com.mx/img/luces-neon-og.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_MX" />
<meta property="og:site_name" content="RESOIL - Renta de Sonido e Iluminación" />
```

### 5.4 Schema Markup (JSON-LD)

**Ubicación:** Antes del cierre de `</head>`

**Schema Service + Product/Offer:**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[NOMBRE DEL SERVICIO]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "RESOIL - Renta de Sonido e Iluminación",
    "image": "https://resoil.com.mx/img/logo-resoil.webp",
    "telephone": "+52-55-7896-0091",
    "email": "contacto@rentadesonidoeiluminacion.com.mx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Montecito 38, Nápoles",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "03810",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.3910",
      "longitude": "-99.1720"
    },
    "url": "https://resoil.com.mx",
    "priceRange": "$$",
    "openingHours": "Mo-Su 09:00-21:00",
    "areaServed": [
      {
        "@type": "City",
        "name": "Ciudad de México"
      },
      {
        "@type": "State",
        "name": "Estado de México"
      }
    ]
  },
  "description": "[META DESCRIPTION COMPLETA]",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-01-01",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paquetes de [SERVICIO]",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paquete Básico - [SERVICIO]",
          "description": "[DESCRIPCIÓN DEL PAQUETE BÁSICO]"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paquete Profesional - [SERVICIO]",
          "description": "[DESCRIPCIÓN DEL PAQUETE PROFESIONAL]"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paquete Premium - [SERVICIO]",
          "description": "[DESCRIPCIÓN DEL PAQUETE PREMIUM]"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
}
</script>
```

**Schema FAQ (adicional):**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[PREGUNTA FAQ 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[RESPUESTA FAQ 1 COMPLETA]"
      }
    },
    {
      "@type": "Question",
      "name": "[PREGUNTA FAQ 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[RESPUESTA FAQ 2 COMPLETA]"
      }
    }
    // Repetir para las 8 preguntas
  ]
}
</script>
```

---

## 6. ARQUITECTURA Y HOMOLOGACIÓN VISUAL

### 6.1 Cómo reusar menú y footer global

**Opción 1: Copiar código completo**

El header y footer deben copiarse exactamente desde `guirnaldas.html`:

**Header (líneas 44-129):**
```html
<header class="header">
  <nav class="navbar">
    <!-- [COPIAR TODO EL CONTENIDO DEL NAV] -->
  </nav>
</header>
```

**Footer (líneas 691-772):**
```html
<footer class="footer">
  <!-- [COPIAR TODO EL CONTENIDO DEL FOOTER] -->
</footer>
```

**IMPORTANTE:** Actualizar únicamente:
- La clase `active` en el menú para el servicio actual
- Los enlaces del footer si se agregan nuevos servicios

**Opción 2: Server-Side Includes (SSI) - RECOMENDADO**

Si el servidor lo permite, crear archivos parciales:

```html
<!-- En cada página -->
<!--#include virtual="/includes/header.html" -->
<!-- Contenido de la página -->
<!--#include virtual="/includes/footer.html" -->
```

### 6.2 Tipografías y tamaños

**Sistema de tipografías:**
(Definido en `css/style.css`)

```css
/* H1 - Hero principal */
font-size: 3.5rem;      /* Desktop */
font-size: 2.5rem;      /* Tablet */
font-size: 2rem;        /* Mobile */
font-weight: 700;
line-height: 1.2;
text-transform: uppercase;

/* H2 - Secciones principales */
font-size: 2.5rem;      /* Desktop */
font-size: 2rem;        /* Tablet */
font-size: 1.75rem;     /* Mobile */
font-weight: 600;
line-height: 1.3;

/* H3 - Subsecciones */
font-size: 1.75rem;     /* Desktop */
font-size: 1.5rem;      /* Tablet */
font-size: 1.25rem;     /* Mobile */
font-weight: 600;

/* H4 - Tarjetas y detalles */
font-size: 1.25rem;
font-weight: 600;
line-height: 1.4;

/* Párrafos normales */
font-size: 1.125rem;    /* 18px */
line-height: 1.7;

/* Párrafos destacados (.lead-paragraph) */
font-size: 1.25rem;     /* 20px */
line-height: 1.8;
```

**Reglas de espaciado:**
```css
/* Separación entre secciones */
margin-bottom: 5rem;    /* Desktop */
margin-bottom: 3rem;    /* Mobile */

/* Separación entre párrafos */
margin-bottom: 1.5rem;

/* Separación entre listas */
margin-bottom: 1rem;
```

### 6.3 Grid responsive y breakpoints

**Sistema de breakpoints:**
```css
/* Mobile-first approach */
/* Base: 320px - 767px (mobile) */

@media (min-width: 768px) {
  /* Tablet: 768px - 1023px */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px - 1279px */
}

@media (min-width: 1280px) {
  /* Large desktop: 1280px+ */
}
```

**Contenedor principal:**
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;    /* Mobile */
  padding: 0 2rem;      /* Desktop */
}
```

**Hero Grid:**
```css
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;           /* Mobile: 1 columna */
  grid-template-columns: 1fr 1.5fr;     /* Desktop: 2 columnas */
  gap: 3rem;
}
```

**Comportamiento del Hero en móvil:**
- Título H1: Se apila verticalmente
- Tagline: Debajo del título
- Contenido descriptivo: Debajo del tagline
- CTAs: Botones de ancho completo (100%)

**Galería responsive:**
```css
.gallery-images {
  display: grid;
  grid-template-columns: 1fr;                    /* Mobile */
  grid-template-columns: repeat(2, 1fr);         /* Tablet */
  grid-template-columns: repeat(3, 1fr);         /* Desktop */
  gap: 1.5rem;
}
```

---

## 7. IMÁGENES Y MULTIMEDIA

### 7.1 Especificaciones exactas de formatos

**Formatos permitidos:**
1. **WebP** (PREFERIDO) - Compresión superior, soporte moderno
2. **JPG** - Fallback para navegadores antiguos
3. **PNG** - Solo para logos o imágenes con transparencia

**Tamaños recomendados por tipo:**

| Tipo de imagen | Dimensiones | Ratio | Peso máximo | Uso |
|---|---|---|---|---|
| Hero background | 1600×900px | 16:9 | 150 KB | Fondo de hero section |
| Galería (principal) | 800×533px | 3:2 | 80 KB | Imágenes de galería |
| Galería (thumb) | 400×267px | 3:2 | 30 KB | Miniaturas |
| Open Graph | 1200×630px | 1.91:1 | 100 KB | Compartir en redes |
| Logo | 300×150px | 2:1 | 20 KB | Header/footer |

### 7.2 Peso y compresión

**Herramientas de compresión recomendadas:**
- [Squoosh.app](https://squoosh.app) (Google)
- [TinyPNG](https://tinypng.com)
- [ImageOptim](https://imageoptim.com) (Mac)
- **Comando CLI:** `cwebp -q 80 input.jpg -o output.webp`

**Niveles de calidad:**
- Galería de imágenes: 75-85% calidad
- Open Graph: 80-90% calidad
- Fondos decorativos: 60-75% calidad

**Peso máximo TOTAL de la página:** 2.5 MB (incluyendo HTML, CSS, JS e imágenes)

### 7.3 Nombres SEO-friendly

**Estructura de nombres:**
```
[servicio]-[especificacion]-[contexto]-[dimensiones].[formato]
```

**Ejemplos correctos:**
```
renta-guirnaldas-boda-jardin-800x533.webp
luces-neon-evento-corporativo-1200x630.webp
focos-edison-instalacion-profesional-800x533.webp
iluminacion-vintage-terraza-cdmx-800x533.webp
```

**Reglas obligatorias:**
- Solo minúsculas
- Sin acentos ni caracteres especiales
- Guiones para separar palabras (NO guiones bajos)
- Incluir keyword principal del servicio
- Incluir dimensiones al final (opcional pero recomendado)
- NO usar nombres genéricos (imagen1.jpg, foto.webp, DSC_1234.jpg)

### 7.4 Atributos alt y title

**Estructura del alt text:**
```
[Servicio específico] + [Contexto/Tipo de evento] + [Ubicación/Marca]
```

**Ejemplos de alt text correctos:**
```html
<img src="guirnaldas-boda-jardin.webp"
     alt="Renta de Guirnaldas de Luces Vintage para Boda en Jardín CDMX - RESOIL">

<img src="guirnaldas-evento-corporativo.webp"
     alt="Instalación de Guirnaldas LED en Evento Corporativo Estado de México">

<img src="focos-edison-terraza-romantica.webp"
     alt="Decoración con Focos Edison Vintage para Cena Romántica en Terraza">
```

**Reglas para alt text:**
- Longitud: 80-125 caracteres
- Incluir keyword principal
- Ser descriptivo y específico
- NO usar "imagen de" o "foto de"
- Variar el texto (no repetir el mismo alt en todas las imágenes)

**Atributo title (opcional):**
```html
<img src="guirnaldas-boda.webp"
     alt="Renta de Guirnaldas para Boda en CDMX"
     title="Guirnaldas de Luces Vintage - Instalación Profesional RESOIL">
```

### 7.5 Video y lightbox (recomendaciones)

**Video (si aplica):**
- Formato: MP4 (H.264)
- Resolución: 1920×1080 (Full HD)
- Bitrate: 5-8 Mbps
- Duración recomendada: 30-90 segundos
- Incluir subtítulos en español
- Poster image obligatorio (primera frame atractivo)

**Lightbox para galería:**
- Implementar con librería ligera (ej.: [GLightbox](https://biati-digital.github.io/glightbox/))
- Lazy loading obligatorio
- Precarga de imagen siguiente
- Navegación con teclado (←→)
- Cerrar con ESC
- Overlay oscuro 80% opacidad

---

## 8. CONTENIDO TÉCNICO DEL SERVICIO

### 8.1 Cómo describir especificaciones

**Principio fundamental:** Traducir especificaciones técnicas en beneficios tangibles para el usuario.

**Estructura de redacción:**

```
[ESPECIFICACIÓN TÉCNICA]: [BENEFICIO TANGIBLE]
```

**Ejemplos de la página de guirnaldas:**

| Especificación técnica | Beneficio tangible |
|---|---|
| LED Filament tipo Edison | Estética vintage con eficiencia LED |
| Temperatura 2200K-2700K | Tono ámbar romántico |
| Certificación IP65 | Resistente a lluvia, polvo y humedad |
| Cable calibre 12 AWG | Seguridad certificada y durabilidad |
| Consumo 6W por foco | Ahorro del 80% vs. focos tradicionales |
| Regulación de intensidad | Control total de la atmósfera |

**Categorías de especificaciones a incluir:**

1. **Dimensiones físicas**
   - Tamaño del equipo
   - Longitud de cables
   - Espacios de cobertura
   - Altura de instalación

2. **Materiales y construcción**
   - Tipo de material (aluminio, acero, policarbonato)
   - Certificaciones (IP rating, UL, CE)
   - Resistencia a condiciones climáticas

3. **Performance técnico**
   - Consumo energético
   - Potencia de salida
   - Vida útil
   - Tiempo de calentamiento/enfriamiento

4. **Requerimientos operativos**
   - Voltaje necesario (110V/220V)
   - Amperaje requerido
   - Tipo de conexión eléctrica
   - Necesidad de generador

5. **Logística de instalación**
   - Tiempo de montaje
   - Personal requerido
   - Equipo adicional necesario
   - Tiempo de desmontaje

### 8.2 Plantilla de tabla técnica

**Tabla comparativa de paquetes:**

```html
<table class="packages-table">
  <thead>
    <tr>
      <th>Paquete</th>
      <th>[Métrica 1]</th>
      <th>[Métrica 2]</th>
      <th>[Métrica 3]</th>
      <th>Ideal Para</th>
      <th>Incluye</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Básico</strong></td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Tipos de eventos pequeños]</td>
      <td>[Beneficio diferencial]</td>
    </tr>
    <tr>
      <td><strong>Esencial</strong></td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Tipos de eventos medianos]</td>
      <td>[Beneficio diferencial]</td>
    </tr>
    <tr>
      <td><strong>Profesional</strong></td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Tipos de eventos grandes]</td>
      <td>[Beneficio diferencial]</td>
    </tr>
    <tr>
      <td><strong>Premium</strong></td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Eventos de lujo]</td>
      <td>[Beneficio diferencial]</td>
    </tr>
    <tr>
      <td><strong>Enterprise</strong></td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Valor]</td>
      <td>[Eventos masivos]</td>
      <td>[Beneficio diferencial]</td>
    </tr>
  </tbody>
</table>
```

**Lista de especificaciones técnicas universales:**

```html
<h3>Especificaciones Técnicas Universales (Todos los Paquetes)</h3>
<ul class="specs-list">
  <li>✓ [ESPECIFICACIÓN 1]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 2]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 3]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 4]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 5]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 6]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 7]: [Beneficio traducido]</li>
  <li>✓ [ESPECIFICACIÓN 8]: [Beneficio traducido]</li>
</ul>
```

---

## 9. MÓDULOS OBLIGATORIOS POR PÁGINA

### 9.1 Tres módulos de interés

**Ubicación:** Sección "Aplicaciones Estratégicas"

**Estructura de cada módulo:**

```html
<div class="application-card">
  <h4>[Título Corto del Caso de Uso]</h4>
  <p>
    [Párrafo descriptivo de 60-100 palabras que incluye keywords contextuales,
    beneficios específicos del servicio para este caso de uso, y ejemplos
    concretos de aplicación. Debe ser suficientemente detallado para ayudar
    al usuario a visualizar el servicio en su evento.]
  </p>
</div>
```

**Ejemplo completo adaptado a "Luces Neón":**

```html
<div class="application-card">
  <h4>Bodas Instagrameables y Modernas</h4>
  <p>
    Crea el backdrop perfecto para tu boda con letreros neón personalizados.
    Desde el clásico "Mr & Mrs" hasta frases románticas únicas, nuestros
    diseños LED se convierten en el spot fotográfico más compartido del evento.
    Perfectos para áreas de bienvenida, candy bar, photobooth y mesa de regalos.
    La luz neón rosa, azul o blanco cálido genera fotografías profesionales sin
    necesidad de flash adicional.
  </p>
</div>
```

**Keywords a incluir en cada módulo:**
- Variaciones de la keyword principal
- Términos emocionales (romántico, exclusivo, único, mágico)
- Contexto específico del evento
- Beneficio social (compartible, instagrameable, memorable)

### 9.2 Sección FAQ (5 preguntas mínimo, 8 recomendado)

**Estructura HTML:**

```html
<div class="faq-item">
  <button class="faq-question" type="button">
    <span>[PREGUNTA COMPLETA EN LENGUAJE NATURAL]</span>
    <span class="faq-icon">+</span>
  </button>
  <div class="faq-answer">
    <div class="faq-content">
      <p>[Respuesta detallada párrafo 1]</p>
      <p><strong>[Subtema 1]:</strong> [Detalles específicos]</p>
      <p><strong>[Subtema 2]:</strong> [Detalles específicos]</p>
      <p>[Cierre o dato adicional relevante]</p>
    </div>
  </div>
</div>
```

**Categorías obligatorias de preguntas FAQ:**

1. **Cálculo/Dimensionamiento**
   - "¿Cuántos [unidades del servicio] necesito para mi evento?"
   - Respuesta: Tabla de rangos + factores que afectan el cálculo

2. **Alcance del servicio**
   - "¿Qué incluye exactamente el servicio de [nombre del servicio]?"
   - Respuesta: Desglose completo (antes, durante, después del evento)

3. **Resistencia/Condiciones climáticas**
   - "¿[El servicio] resiste lluvia y condiciones adversas?"
   - Respuesta: Certificaciones técnicas + casos de éxito reales

4. **Comparativa técnica**
   - "¿Qué diferencia hay entre [opción A] y [opción B]?"
   - Respuesta: Tabla comparativa técnica + beneficios traducidos

5. **Logística especial**
   - "¿Pueden [operar el servicio] en venues sin [requisito técnico]?"
   - Respuesta: Soluciones alternativas + equipo backup

6. **Garantías/Contingencias**
   - "¿Qué pasa si [problema potencial] durante el evento?"
   - Respuesta: Protocolo de respuesta + estadísticas de confiabilidad

7. **Tiempos de reserva**
   - "¿Cuánto tiempo antes debo reservar [el servicio]?"
   - Respuesta: Temporadas + recomendaciones + política de última hora

8. **Política de cancelación/clima**
   - "¿Ofrecen garantía si [condición imprevista]?"
   - Respuesta: Póliza detallada + condiciones cubiertas

**Longitud de respuestas:**
- Mínimo: 100 palabras por respuesta
- Óptimo: 150-200 palabras
- Incluir listas con `<strong>` para subtemas
- Cerrar con dato numérico o estadística de confianza

### 9.3 Bloque CTA con formulario

**Formulario de cotización obligatorio:**

**Campos mínimos (10 campos):**

1. Nombre del Evento (text, required)
2. Fecha del Evento (date, required)
3. Tipo de Evento (select, required)
   - Opciones: Boda, Corporativo, XV Años, Aniversario, Graduación, Otro
4. Número de Invitados (select)
   - Rangos: 50, 100, 200, 300, 500, 500+
5. Lugar del Evento (text, required)
6. Tamaño del Espacio (select, required)
   - Rangos adaptados al servicio
7. Requerimientos Especiales (textarea)
8. Nombre Completo (text, required)
9. Teléfono (tel, required, pattern: 10 dígitos)
10. Checkbox Aviso de Privacidad (checkbox, required)

**Copy del formulario:**

```html
<h2>Solicita tu Cotización de [SERVICIO]</h2>
<p class="form-subtitle">
  Completa el formulario con los detalles de tu evento y recibe una cotización
  personalizada al instante vía WhatsApp. Nuestro equipo te responderá en menos
  de 30 minutos.
</p>
```

**Botón de envío:**

```html
<button type="submit" class="submit-btn">
  Enviar Solicitud por WhatsApp
</button>
```

**Funcionalidad del formulario:**
- Al enviar: Redirección a WhatsApp con mensaje pre-formateado
- Formato del mensaje:
  ```
  Hola RESOIL, solicito cotización para:
  - Servicio: [SERVICIO]
  - Evento: [TIPO] el [FECHA]
  - Lugar: [VENUE]
  - Invitados: [NÚMERO]
  - Espacio: [TAMAÑO]
  - Detalles: [REQUERIMIENTOS]
  - Contacto: [NOMBRE] - [TELÉFONO]
  ```

---

## 10. ACCESIBILIDAD Y ESTÁNDARES WCAG

### 10.1 Contraste mínimo

**Ratios obligatorios según WCAG 2.1 AA:**

- **Texto normal:** Ratio mínimo 4.5:1
- **Texto grande (18pt+ o bold 14pt+):** Ratio mínimo 3:1
- **Elementos de interfaz:** Ratio mínimo 3:1

**Herramienta de verificación:**
[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Combinaciones aprobadas para RESOIL:**
```css
/* Texto principal sobre fondo blanco */
color: #1a1a1a;           /* Ratio: 17.5:1 ✓ */

/* Texto sobre fondo oscuro */
color: #ffffff;           /* Ratio: 21:1 ✓ */
background: #1a1a1a;

/* Enlaces en texto */
color: #0066cc;           /* Ratio: 7.2:1 ✓ */

/* Botones primarios */
color: #ffffff;
background: #d4af37;      /* Gold - Ratio: 5.8:1 ✓ */
```

### 10.2 Etiquetas ARIA

**Menú de navegación:**
```html
<button class="mobile-menu-btn"
        id="mobile-menu-btn"
        aria-label="Abrir menú de navegación"
        aria-expanded="false">
  <span class="hamburger-line"></span>
</button>
```

**FAQ acordeón:**
```html
<button class="faq-question"
        type="button"
        aria-expanded="false"
        aria-controls="faq-answer-1">
  <span>¿Pregunta frecuente?</span>
</button>
<div class="faq-answer"
     id="faq-answer-1"
     aria-hidden="true">
  <!-- Contenido -->
</div>
```

**Formularios:**
```html
<label for="event-name">Nombre del Evento *</label>
<input type="text"
       id="event-name"
       name="event-name"
       required
       aria-required="true"
       aria-describedby="event-name-help">
<span id="event-name-help" class="help-text">
  Ejemplo: Boda María y Juan
</span>
```

### 10.3 Navegación por teclado

**Elementos interactivos que DEBEN ser navegables:**
- Enlaces (`<a>`)
- Botones (`<button>`)
- Campos de formulario (`<input>`, `<select>`, `<textarea>`)
- Elementos de acordeón (FAQ)

**Orden de tabulación lógico:**
1. Menú de navegación
2. Contenido principal (hero)
3. CTAs del hero
4. Secciones en orden visual
5. Formulario de cotización
6. Footer

**Indicador de foco visible:**
```css
a:focus, button:focus, input:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* NUNCA usar outline: none sin reemplazo */
```

**Atajos de teclado:**
- `Tab`: Siguiente elemento
- `Shift + Tab`: Elemento anterior
- `Enter/Space`: Activar botón o enlace
- `Esc`: Cerrar modal o acordeón

### 10.4 Headings semánticos

**Jerarquía obligatoria:**

```html
<!-- SOLO UN H1 por página -->
<h1>RENTA DE [SERVICIO]</h1>

<!-- H2 para secciones principales -->
<h2>Galería de Instalaciones</h2>
<h2>Por Qué Es la Decisión Correcta</h2>

<!-- H3 para subsecciones -->
<h3>Eventos Donde [Servicio] Crea Magia</h3>

<!-- H4 para detalles -->
<h4>Bodas Románticas</h4>
```

**Reglas estrictas:**
- ❌ NO saltar niveles (H2 → H4)
- ❌ NO usar headings por estilo visual
- ✅ Seguir orden jerárquico lógico
- ✅ Cada heading debe tener contenido asociado

### 10.5 Textos alternativos y tap targets

**Alt text obligatorio:**
```html
<!-- Imagen de contenido -->
<img src="guirnaldas-boda.webp"
     alt="Renta de Guirnaldas para Boda en Jardín CDMX">

<!-- Imagen decorativa -->
<img src="decorative-pattern.svg"
     alt=""
     role="presentation">

<!-- Logo -->
<img src="logo-resoil.webp"
     alt="RESOIL - Renta de Sonido e Iluminación">
```

**Tamaño mínimo de tap targets (móvil):**
- **Mínimo absoluto:** 44×44 píxeles
- **Recomendado:** 48×48 píxeles
- **Espaciado mínimo entre targets:** 8 píxeles

```css
.cta-button, .submit-btn, .nav-link {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}

/* Botones móviles */
@media (max-width: 767px) {
  .cta-button {
    width: 100%;
    min-height: 56px;
  }
}
```

---

## 11. PERFORMANCE Y VALIDACIONES TÉCNICAS

### 11.1 Checklist de performance

**Optimizaciones obligatorias:**

- [ ] **Lazy loading de imágenes**
  ```html
  <img src="imagen.webp"
       alt="Descripción"
       loading="lazy">
  ```

- [ ] **Dimensiones explícitas (evitar layout shift)**
  ```html
  <img src="imagen.webp"
       alt="Descripción"
       width="800"
       height="533"
       loading="lazy">
  ```

- [ ] **CSS minificado**
  - Archivo original: `style.css` (desarrollo)
  - Archivo producción: `style.min.css`
  - Herramienta: [cssnano](https://cssnano.co/)

- [ ] **JavaScript minificado**
  - Archivo original: `app.js` (desarrollo)
  - Archivo producción: `app.min.js`
  - Herramienta: [Terser](https://terser.org/)

- [ ] **Preload de recursos críticos**
  ```html
  <link rel="preload"
        href="css/style.min.css"
        as="style">
  <link rel="preload"
        href="fonts/main-font.woff2"
        as="font"
        type="font/woff2"
        crossorigin>
  ```

- [ ] **Preconnect a dominios externos**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  ```

- [ ] **Compresión GZIP/Brotli habilitada** (servidor)
  ```apache
  # .htaccess
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
  </IfModule>
  ```

- [ ] **Caching headers configurados**
  ```apache
  # .htaccess
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
  </IfModule>
  ```

**Metas de performance:**
- **Lighthouse Performance Score:** 90+
- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Blocking Time (TBT):** < 300ms
- **Speed Index:** < 3.0s

### 11.2 Pruebas obligatorias

**1. Validación de enlaces (todos funcionales)**

Herramienta: [W3C Link Checker](https://validator.w3.org/checklink)

Verificar:
- [ ] Enlaces de navegación (header)
- [ ] Enlaces internos (#galeria, #cotizacion)
- [ ] Enlaces del footer
- [ ] CTAs de teléfono (`tel:`)
- [ ] CTAs de email (`mailto:`)
- [ ] Enlaces de redes sociales

**2. Responsive en 3 breakpoints mínimos**

Dispositivos de prueba:
- [ ] **Mobile:** iPhone 12 Pro (390×844) o similar
- [ ] **Tablet:** iPad (768×1024) o similar
- [ ] **Desktop:** 1920×1080

Herramientas:
- Chrome DevTools (Device Mode)
- [Responsinator](http://www.responsinator.com/)
- [BrowserStack](https://www.browserstack.com/) (testing real)

Verificar:
- [ ] Texto legible sin zoom
- [ ] Imágenes no cortadas
- [ ] CTAs accesibles con dedo
- [ ] Formulario usable en móvil
- [ ] Menú hamburguesa funcional (móvil)
- [ ] No scroll horizontal

**3. Validación HTML5**

Herramienta: [W3C Markup Validator](https://validator.w3.org/)

Verificar:
- [ ] 0 errores
- [ ] Advertencias revisadas y justificadas
- [ ] Estructura semántica correcta
- [ ] Tags cerrados correctamente
- [ ] Atributos válidos

**4. Comprobación de Schema (JSON-LD)**

Herramienta: [Google Rich Results Test](https://search.google.com/test/rich-results)

Verificar:
- [ ] Schema Service válido
- [ ] Schema FAQPage válido
- [ ] Datos estructurados sin errores
- [ ] Preview correcto en resultados de búsqueda

---

## 12. SEO TÉCNICO E INTERNAL LINKING

### 12.1 Estructura de enlaces internos

**Enlaces obligatorios desde cada página de servicio:**

**1. Hacia página principal (Home):**
```html
<a href="index.html">
  <img src="img/logo-resoil.webp" alt="RESOIL - Renta de Sonido e Iluminación">
</a>
```

**2. Hacia página de Servicios (categoría):**
```html
<a href="servicios.html" class="nav-link">Servicios</a>
```

**3. Hacia otros servicios relacionados (footer):**
```html
<!-- En el footer -->
<h4 class="footer-subtitle">Servicios de Iluminación</h4>
<ul class="footer-links">
  <li><a href="guirnaldas.html">Guirnaldas LED</a></li>
  <li><a href="luces-neon.html">Luces Neón</a></li>
</ul>
```

**4. Hacia sección de contacto:**
```html
<a href="index.html#contacto" class="nav-link">Contacto</a>
```

**5. Anchor links internos (dentro de la página):**
```html
<a href="#galeria" class="cta-button primary">Ver Galería</a>
<a href="#cotizacion" class="cta-button secondary">Solicitar Cotización</a>
```

**Distribución recomendada de enlaces internos:**
- **Header:** 5-8 enlaces (navegación principal)
- **Contenido:** 3-5 enlaces contextuales
- **Footer:** 10-15 enlaces (sitemap)
- **Total por página:** 20-30 enlaces internos

**Anchor text optimizado:**
```html
<!-- Genérico (evitar) -->
<a href="guirnaldas.html">Haz clic aquí</a>

<!-- Optimizado (preferir) -->
<a href="guirnaldas.html">Renta de Guirnaldas LED</a>
```

### 12.2 Canonical, hreflang y sitemap

**Canonical tag (obligatorio):**
```html
<link rel="canonical" href="https://resoil.com.mx/guirnaldas.html">
```

**Reglas:**
- Incluir en TODAS las páginas
- URL absoluta (con https://)
- Apuntar a la versión preferida de la página
- Evitar duplicados (www vs no-www)

**Hreflang (si aplica para múltiples idiomas):**
```html
<link rel="alternate" hreflang="es-MX" href="https://resoil.com.mx/guirnaldas.html">
<link rel="alternate" hreflang="en-US" href="https://resoil.com/en/string-lights.html">
<link rel="alternate" hreflang="x-default" href="https://resoil.com.mx/guirnaldas.html">
```

**Sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://resoil.com.mx/index.html</loc>
    <lastmod>2025-11-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://resoil.com.mx/guirnaldas.html</loc>
    <lastmod>2025-11-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://resoil.com.mx/luces-neon.html</loc>
    <lastmod>2025-11-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Más páginas -->
</urlset>
```

**Robots.txt:**

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /.audit/

Sitemap: https://resoil.com.mx/sitemap.xml
```

### 12.3 Breadcrumbs (recomendado)

**Implementación HTML:**
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="index.html">Inicio</a>
    </li>
    <li class="breadcrumb-item">
      <a href="servicios.html">Servicios</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Guirnaldas LED
    </li>
  </ol>
</nav>
```

**Schema BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://resoil.com.mx/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Servicios",
      "item": "https://resoil.com.mx/servicios.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Guirnaldas LED",
      "item": "https://resoil.com.mx/guirnaldas.html"
    }
  ]
}
```

---

## 13. CHECKLIST FINAL PRE-PUBLICACIÓN

### 13.1 Verificación de elementos SEO

- [ ] **Title tag** configurado (50-65 caracteres)
- [ ] **Meta description** configurada (140-160 caracteres)
- [ ] **URL slug** optimizada (minúsculas, sin acentos, guiones)
- [ ] **H1 único** y con keyword principal
- [ ] **Estructura H2-H4** jerárquica y lógica
- [ ] **Keywords primarias** en primeros 100 palabras
- [ ] **Keywords LSI** distribuidas naturalmente
- [ ] **Canonical tag** presente
- [ ] **Open Graph tags** completos (5+ tags)
- [ ] **Twitter Card** configurada
- [ ] **Schema JSON-LD** válido (Service + FAQ)
- [ ] **Sitemap.xml** actualizado con nueva página
- [ ] **Robots.txt** permite indexación

### 13.2 Verificación de imágenes

- [ ] Todas las imágenes en formato **WebP** (o JPG optimizado)
- [ ] **Alt text único** en cada imagen
- [ ] **Nombres de archivo SEO-friendly**
- [ ] Peso individual < 100 KB
- [ ] Dimensiones explícitas (width/height)
- [ ] **Lazy loading** activado
- [ ] **Open Graph image** 1200×630px presente
- [ ] Imágenes comprimidas (75-85% calidad)

### 13.3 Verificación de CTAs

- [ ] **CTA primario** en hero section (2 botones)
- [ ] **CTA de formulario** funcional
- [ ] **CTA de teléfono** con `tel:` link correcto
- [ ] **CTA de WhatsApp** con mensaje pre-formateado
- [ ] Botones con contraste WCAG AA (4.5:1)
- [ ] Botones accesibles por teclado
- [ ] Textos de CTA claros y accionables

### 13.4 Verificación de formulario

- [ ] **10+ campos** presentes
- [ ] Campos obligatorios marcados con `*`
- [ ] Labels asociados correctamente (`for="id"`)
- [ ] **Validación HTML5** (required, pattern)
- [ ] **Checkbox de privacidad** obligatorio
- [ ] Botón de envío funcional
- [ ] Redirección a WhatsApp configurada
- [ ] Responsive en móvil (botones 100% ancho)

### 13.5 Verificación de accesibilidad

- [ ] **Contraste mínimo 4.5:1** en textos
- [ ] **ARIA labels** en elementos interactivos
- [ ] **Navegación por teclado** funcional
- [ ] **Orden de tabulación** lógico
- [ ] **Headings semánticos** (H1→H2→H3)
- [ ] **Alt text** en todas las imágenes
- [ ] **Tap targets** mínimo 44×44px
- [ ] **Focus visible** en enlaces y botones

### 13.6 Verificación de performance

- [ ] **Lighthouse Score** 90+ (Performance)
- [ ] **LCP** < 2.5s
- [ ] **CLS** < 0.1
- [ ] **Lazy loading** implementado
- [ ] **CSS minificado**
- [ ] **JS minificado**
- [ ] **Imágenes comprimidas**
- [ ] **Caching configurado**
- [ ] Peso total < 2.5 MB

### 13.7 Verificación de enlaces

- [ ] Todos los enlaces del **header** funcionales
- [ ] Todos los enlaces del **footer** funcionales
- [ ] **Anchor links** (#galeria, #cotizacion) funcionales
- [ ] **Enlaces externos** abren en nueva pestaña
- [ ] **Tel/mailto links** funcionales
- [ ] **Enlaces a redes sociales** correctos
- [ ] No hay **enlaces rotos** (404)

### 13.8 Verificación responsive

- [ ] **Mobile (375px):** Layout correcto
- [ ] **Tablet (768px):** Layout correcto
- [ ] **Desktop (1920px):** Layout correcto
- [ ] **Menú hamburguesa** funcional (móvil)
- [ ] **Imágenes** no se cortan
- [ ] **Textos legibles** sin zoom
- [ ] **No scroll horizontal** en ningún breakpoint

### 13.9 Verificación de contenido

- [ ] **Ortografía y gramática** revisadas
- [ ] **Tono consistente** (segunda persona)
- [ ] **Keywords naturales** (no stuffing)
- [ ] **Longitud mínima:** 3,500 palabras
- [ ] **FAQ:** 8 preguntas completas
- [ ] **Tabla de paquetes** presente
- [ ] **Galería:** 9 imágenes mínimo
- [ ] **Estadísticas** actualizadas

### 13.10 Criterios de aceptación

**Una página está lista para publicar cuando:**

✅ Pasa **100% del checklist** de SEO (13.1)
✅ Pasa **100% del checklist** de accesibilidad (13.5)
✅ Obtiene **Lighthouse Score 90+** en Performance
✅ Validación HTML5 **sin errores**
✅ Validación de Schema **sin errores**
✅ Responsive funcional en **3 breakpoints**
✅ **0 enlaces rotos**
✅ Revisión de contenido **aprobada** por responsable

**Criterios de rechazo (NO publicar si):**

❌ Lighthouse Performance < 85
❌ Errores en validación HTML5
❌ Imágenes sin alt text
❌ Enlaces rotos presentes
❌ Contraste insuficiente (WCAG fail)
❌ Formulario no funcional
❌ Contenido < 3,000 palabras
❌ FAQ < 5 preguntas

---

## 14. ERRORES COMUNES Y CÓMO EVITARLOS

### 14.1 Error 1: Imágenes sin optimizar

**Síntoma:**
- Páginas que cargan lentamente (LCP > 4s)
- Lighthouse Performance Score < 70
- Advertencia de "Properly size images"

**Solución:**
1. Comprimir todas las imágenes con [Squoosh.app](https://squoosh.app)
2. Usar formato WebP (no JPG/PNG)
3. Configurar lazy loading: `<img loading="lazy">`
4. Especificar dimensiones: `width="800" height="533"`

**Prevención:**
- Establecer proceso automático de compresión
- Usar herramienta de build que optimice imágenes
- Revisar peso de cada imagen antes de subir (< 100 KB)

### 14.2 Error 2: Títulos duplicados entre páginas

**Síntoma:**
- Google Search Console advierte "Duplicate title tags"
- Páginas canibalizándose en resultados de búsqueda
- CTR bajo en SERP

**Solución:**
1. Revisar title de cada página en sitemap
2. Asegurar que cada title sea único
3. Incluir especificación del servicio en title

**Ejemplo correcto:**
```html
<!-- guirnaldas.html -->
<title>Renta de Guirnaldas de Luces Vintage | RESOIL CDMX</title>

<!-- luces-neon.html -->
<title>Renta de Luces Neón Personalizadas | RESOIL CDMX</title>
```

**Ejemplo INCORRECTO:**
```html
<!-- Ambas páginas con el mismo title -->
<title>Renta de Iluminación para Eventos | RESOIL</title>
```

### 14.3 Error 3: CTA débil o confuso

**Síntoma:**
- Tasa de conversión < 2%
- Usuarios salen de la página sin interactuar
- Bajo engagement en formulario

**Solución:**
1. Usar verbos de acción claros ("Solicita", "Descubre", "Reserva")
2. Comunicar beneficio inmediato ("Cotización en 30 min")
3. Diseño contrastante (botón destacado visualmente)
4. Ubicación estratégica (hero, después de valor, footer)

**Ejemplo de CTA débil:**
```html
<a href="#contacto" class="button">Más información</a>
```

**Ejemplo de CTA fuerte:**
```html
<a href="#cotizacion" class="cta-button primary">
  Solicitar Cotización Gratuita
</a>
```

### 14.4 Error 4: FAQ con respuestas superficiales

**Síntoma:**
- Google no muestra rich snippets de FAQ
- Usuarios siguen teniendo dudas
- Alto bounce rate en página

**Solución:**
1. Respuestas mínimo 100 palabras
2. Incluir datos técnicos + beneficios traducidos
3. Usar listas con `<strong>` para estructura
4. Cerrar con dato numérico o caso de éxito

**Ejemplo de respuesta superficial:**
```html
<p>Sí, nuestras guirnaldas resisten la lluvia.</p>
```

**Ejemplo de respuesta completa:**
```html
<p><strong>Certificación IP65:</strong> Resistencia total a lluvia, humedad, viento y polvo.</p>
<p><strong>Cableado profesional:</strong> Cable de uso rudo calibre 12 AWG con chaqueta de PVC resistente a UV.</p>
<p><strong>Conexiones selladas:</strong> Todos los empalmes usan conectores estancos con grado de protección IP67.</p>
<p>Hemos operado exitosamente en lluvia intensa, vientos de hasta 60 km/h sin fallos.</p>
```

### 14.5 Error 5: No incluir ubicación geográfica

**Síntoma:**
- No aparece en búsquedas locales ("renta guirnaldas CDMX")
- Google My Business no indexa la página
- Tráfico solo de búsquedas genéricas

**Solución:**
1. Incluir "CDMX" o "Estado de México" en:
   - Title tag
   - Meta description
   - H1 o tagline del hero
   - Footer (dirección completa)
2. Configurar Schema LocalBusiness
3. Mencionar zonas específicas en contenido

**Ejemplo correcto:**
```html
<h1>RENTA DE GUIRNALDAS</h1>
<p class="hero-tagline">
  Luces vintage para eventos en CDMX y Estado de México
</p>
```

### 14.6 Error 6: Formulario no funcional en móvil

**Síntoma:**
- Usuarios abandonan formulario en móvil
- Campos de texto muy pequeños
- Botón de envío no clickeable

**Solución:**
1. Botones mínimo 44×44px
2. Campos de texto con `font-size: 16px` (evita zoom iOS)
3. Botón de envío 100% ancho en móvil
4. Espaciado suficiente entre campos (8px)

**CSS correcto:**
```css
@media (max-width: 767px) {
  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    font-size: 16px;
    min-height: 48px;
  }

  .submit-btn {
    width: 100%;
    min-height: 56px;
  }
}
```

### 14.7 Error 7: Keyword stuffing (sobre-optimización)

**Síntoma:**
- Google penaliza la página (ranking baja)
- Texto suena robótico y poco natural
- Alta densidad de keyword (> 4%)

**Solución:**
1. Mantener densidad de keyword principal 1.5-2.5%
2. Usar sinónimos y variaciones naturales
3. Escribir para humanos, no para robots
4. Priorizar legibilidad sobre SEO agresivo

**Ejemplo de keyword stuffing (EVITAR):**
```
La renta de guirnaldas es ideal para eventos. Nuestra renta de guirnaldas
incluye instalación. La renta de guirnaldas de RESOIL es la mejor renta de
guirnaldas en CDMX.
```

**Ejemplo correcto:**
```
Nuestras guirnaldas de luces vintage son ideales para eventos en CDMX.
El servicio incluye instalación profesional y desmontaje. En RESOIL,
garantizamos la mejor experiencia de iluminación decorativa para tu celebración.
```

### 14.8 Error 8: No especificar paquetes o precios

**Síntoma:**
- Usuarios preguntan lo mismo por WhatsApp
- Alto abandono en página (sin conversión)
- Bajo engagement

**Solución:**
1. Incluir tabla de paquetes con rangos de tamaño
2. Especificar qué incluye cada paquete
3. Si no se pueden publicar precios, dar rangos o ejemplos
4. Facilitar cálculo de qué paquete necesitan

**Tabla obligatoria:**
```html
<table class="packages-table">
  <thead>
    <tr>
      <th>Paquete</th>
      <th>Cobertura</th>
      <th>Ideal Para</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Básico</strong></td>
      <td>Espacios hasta 80m²</td>
      <td>Cenas íntimas, patios pequeños</td>
    </tr>
    <!-- Más paquetes -->
  </tbody>
</table>
```

---

## 15. EJEMPLOS Y PLANTILLAS

### 15.1 Ejemplo completo para "Guirnaldas"

**Title:**
```
Renta de Guirnaldas de Luces Vintage para Bodas y Eventos | RESOIL CDMX
```

**Meta Description:**
```
Especialistas en renta de guirnaldas con focos Edison LED para bodas y eventos en CDMX y Estado de México. Instalación profesional con tecnología de punta y seguridad certificada.
```

**URL slug:**
```
/guirnaldas.html
```

**H1:**
```
RENTA DE GUIRNALDAS
```

**Hero tagline:**
```
Luces vintage con focos Edison LED para crear ambientes románticos únicos en CDMX y Estado de México
```

### 15.2 Plantilla adaptable para "Luces Neón"

**Title:**
```
Renta de Luces Neón Personalizadas para Bodas y Eventos | RESOIL CDMX
```
*Longitud: 72 caracteres*

**Meta Description:**
```
Letreros neón LED personalizados para eventos en CDMX. Diseños únicos, instalación profesional y entrega garantizada. Crea momentos instagrameables para tu boda.
```
*Longitud: 162 caracteres*

**URL slug:**
```
/luces-neon.html
```

**H1:**
```
RENTA DE LUCES NEÓN
```

**Hero tagline:**
```
Letreros luminosos personalizados que transforman tu evento en una experiencia instagrameable en CDMX y Estado de México
```

### 15.3 Plantilla HTML semántica (estructura base)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Meta Tags -->
  <title>[SERVICIO] + [Especificación] + [Evento] | RESOIL CDMX</title>
  <meta name="description" content="[Autoridad] en [servicio] para [público] en [ubicación]. [Valor] + [CTA].">
  <meta name="keywords" content="[keyword1], [keyword2], [keyword3], RESOIL, CDMX">

  <!-- Open Graph -->
  <meta property="og:title" content="[TITLE]">
  <meta property="og:description" content="[DESCRIPTION]">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resoil.com.mx/[slug]">
  <meta property="og:image" content="https://resoil.com.mx/img/[servicio]-og.webp">

  <!-- Canonical -->
  <link rel="canonical" href="https://resoil.com.mx/[slug]">

  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">

  <!-- Styles -->
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <!-- Header [COPIAR DE guirnaldas.html] -->
  <header class="header">
    <!-- [NAV COMPLETO] -->
  </header>

  <main class="main-content">
    <!-- Hero Section -->
    <section class="hero-section hero-[servicio]">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-title-column">
            <h1>RENTA DE<br><span class="hero-subtitle">[SERVICIO]</span></h1>
            <p class="hero-tagline">[Descripción emocional + ubicación]</p>
          </div>

          <div class="hero-content-column">
            <div class="hero-content">
              <p class="hero-paragraph-1">
                <strong>[Pregunta emocional + promesa de valor]</strong>
                [Solución al dolor principal]
              </p>

              <p class="hero-paragraph-2">
                [Autoridad técnica + beneficio social]
                <em>[Cierre emocional]</em>
              </p>

              <div class="hero-cta-group">
                <a href="#galeria" class="cta-button primary">Ver Galería de Instalaciones</a>
                <a href="#cotizacion" class="cta-button secondary">Solicitar Cotización</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galería -->
    <section id="galeria" class="gallery-section">
      <!-- [9 IMÁGENES] -->
    </section>

    <!-- Por Qué Es la Decisión Correcta -->
    <section class="decision-section">
      <!-- [2 PÁRRAFOS + 4 ESTADÍSTICAS] -->
    </section>

    <!-- Aplicaciones Estratégicas -->
    <section class="applications-section">
      <!-- [6 TARJETAS DE CASOS DE USO] -->
    </section>

    <!-- Paquetes y Especificaciones -->
    <section class="packages-section">
      <!-- [TABLA COMPARATIVA] -->
    </section>

    <!-- Formulario de Cotización -->
    <section id="cotizacion" class="contact-form-section">
      <!-- [FORMULARIO 10+ CAMPOS] -->
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <!-- [8 PREGUNTAS] -->
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <!-- [CTA B2B/B2C] -->
    </section>
  </main>

  <!-- Footer [COPIAR DE guirnaldas.html] -->
  <footer class="footer">
    <!-- [FOOTER COMPLETO] -->
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
</body>
</html>
```

### 15.4 Snippet JSON-LD con placeholders

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[NOMBRE COMPLETO DEL SERVICIO]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "RESOIL - Renta de Sonido e Iluminación",
    "image": "https://resoil.com.mx/img/logo-resoil.webp",
    "telephone": "+52-55-7896-0091",
    "email": "contacto@rentadesonidoeiluminacion.com.mx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Montecito 38, Nápoles",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "03810",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.3910",
      "longitude": "-99.1720"
    },
    "url": "https://resoil.com.mx",
    "priceRange": "$$",
    "areaServed": [
      {"@type": "City", "name": "Ciudad de México"},
      {"@type": "State", "name": "Estado de México"}
    ]
  },
  "description": "[META DESCRIPTION COMPLETA]",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paquetes de [SERVICIO]",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paquete Básico - [SERVICIO]",
          "description": "[Ideal para eventos pequeños de hasta 80m²]"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paquete Premium - [SERVICIO]",
          "description": "[Ideal para eventos grandes de 300-400m²]"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
}
</script>
```

---

## 16. PROCESO OPERATIVO (WORKFLOW)

### 16.1 Paso a paso desde brief hasta publicación

**PASO 1: Recepción de brief del servicio**

**Responsable:** Product Manager / Marketing Lead

**Entrada:**
- Nombre del servicio a crear
- Especificaciones técnicas del producto/servicio
- Público objetivo (B2B/B2C)
- Paquetes o variantes disponibles
- Imágenes de referencia (mínimo 9)

**Salida:**
- Documento de brief aprobado
- Carpeta con imágenes originales

**Tiempo estimado:** 1-2 días

**Criterios de aceptación para avanzar:**
- ✅ Brief con al menos 5 especificaciones técnicas
- ✅ Mínimo 9 imágenes disponibles
- ✅ Definición de 3-5 paquetes del servicio
- ✅ Aprobación de stakeholder

---

**PASO 2: Investigación de keywords**

**Responsable:** SEO Specialist

**Entrada:**
- Brief del servicio
- Competidores directos (3-5)

**Tareas:**
1. Investigar volumen de búsqueda de keywords principales
2. Identificar keywords LSI (semánticas)
3. Analizar SERPs de competidores
4. Definir keyword principal y 10 secundarias

**Herramientas:**
- Google Keyword Planner
- Ahrefs / SEMrush
- Google Search Console (histórico)

**Salida:**
- Documento de keyword research
- Lista de 1 keyword principal + 10 secundarias
- Sugerencias de títulos H2

**Tiempo estimado:** 2-3 días

**Criterios de aceptación para avanzar:**
- ✅ Keyword principal con volumen > 100 búsquedas/mes
- ✅ 10 keywords LSI identificadas
- ✅ Análisis de top 3 competidores completado

---

**PASO 3: Redacción de contenido**

**Responsable:** Content Writer / Copywriter

**Entrada:**
- Brief del servicio
- Keyword research
- Esta guía (DOCUMENTO-PAGINAS.md)

**Tareas:**
1. Redactar hero section (H1 + 2 párrafos + tagline)
2. Redactar sección "Por Qué Es la Decisión Correcta"
3. Crear 6 tarjetas de aplicaciones estratégicas
4. Diseñar tabla de paquetes
5. Redactar lista de especificaciones técnicas
6. Escribir 8 preguntas FAQ con respuestas completas
7. Redactar CTA final segmentado

**Salida:**
- Documento de contenido en Markdown/Google Docs
- Longitud mínima: 3,500 palabras
- 8 FAQ completas
- Tabla de paquetes

**Tiempo estimado:** 5-7 días

**Criterios de aceptación para avanzar:**
- ✅ Longitud mínima 3,500 palabras
- ✅ Densidad de keyword principal 1.5-2.5%
- ✅ 8 FAQ con respuestas > 100 palabras cada una
- ✅ Revisión ortográfica (0 errores)
- ✅ Tono consistente (segunda persona)

---

**PASO 4: Optimización de imágenes**

**Responsable:** Designer / Developer

**Entrada:**
- 9+ imágenes originales del servicio
- Especificaciones de dimensiones (sección 7)

**Tareas:**
1. Redimensionar a 800×533px (galería)
2. Convertir a formato WebP
3. Comprimir a 75-85% calidad (peso < 80 KB)
4. Crear imagen Open Graph 1200×630px
5. Nombrar archivos con estructura SEO
6. Generar textos alt únicos para cada imagen

**Herramientas:**
- Squoosh.app
- Photoshop / Figma
- ImageOptim

**Salida:**
- 9 imágenes de galería optimizadas (WebP)
- 1 imagen Open Graph (WebP/JPG)
- Documento con nombres de archivo y alt texts

**Tiempo estimado:** 1-2 días

**Criterios de aceptación para avanzar:**
- ✅ Todas las imágenes < 100 KB
- ✅ Formato WebP
- ✅ Nombres SEO-friendly
- ✅ Alt text único para cada imagen

---

**PASO 5: Maquetación HTML**

**Responsable:** Frontend Developer

**Entrada:**
- Contenido redactado (Paso 3)
- Imágenes optimizadas (Paso 4)
- Plantilla HTML (sección 15.3)

**Tareas:**
1. Copiar header y footer de `guirnaldas.html`
2. Estructurar contenido en secciones HTML5
3. Insertar imágenes con lazy loading
4. Configurar formulario de cotización
5. Implementar acordeón FAQ con JavaScript
6. Configurar meta tags (title, description, OG)
7. Agregar Schema JSON-LD (Service + FAQ)

**Salida:**
- Archivo HTML completo (`[servicio].html`)
- Schema JSON-LD validado

**Tiempo estimado:** 3-4 días

**Criterios de aceptación para avanzar:**
- ✅ HTML válido (W3C Validator 0 errores)
- ✅ Responsive funcional (3 breakpoints)
- ✅ Schema válido (Google Rich Results Test)
- ✅ Formulario funcional (envía a WhatsApp)

---

**PASO 6: Pruebas de QA**

**Responsable:** QA Tester / Developer

**Entrada:**
- Página HTML completa
- Checklist de esta guía (sección 13)

**Tareas:**
1. Ejecutar checklist completo de pre-publicación
2. Probar responsive en 3 breakpoints
3. Validar HTML5 y Schema
4. Verificar todos los enlaces
5. Ejecutar Lighthouse (Performance, SEO, Accessibility)
6. Revisar ortografía y gramática
7. Probar formulario en móvil

**Herramientas:**
- Chrome DevTools
- W3C Validator
- Google Rich Results Test
- Lighthouse
- BrowserStack (opcional)

**Salida:**
- Reporte de QA
- Lista de issues encontrados
- Screenshots de pruebas

**Tiempo estimado:** 2-3 días

**Criterios de aceptación para avanzar:**
- ✅ Checklist 100% completo
- ✅ Lighthouse Performance > 90
- ✅ 0 enlaces rotos
- ✅ Validación HTML sin errores
- ✅ Schema sin errores

---

**PASO 7: Correcciones y ajustes**

**Responsable:** Frontend Developer

**Entrada:**
- Reporte de QA con issues

**Tareas:**
1. Corregir todos los issues reportados
2. Optimizar performance si Lighthouse < 90
3. Ajustar contraste si falla WCAG
4. Re-comprimir imágenes si es necesario

**Salida:**
- Página corregida
- Nuevo reporte de QA (sin issues)

**Tiempo estimado:** 1-2 días

**Criterios de aceptación para avanzar:**
- ✅ Todos los issues corregidos
- ✅ Re-validación exitosa

---

**PASO 8: Aprobación final**

**Responsable:** Product Manager / Marketing Lead

**Entrada:**
- Página HTML finalizada
- Reporte de QA aprobado

**Tareas:**
1. Revisar contenido en staging
2. Aprobar copy y mensajes de marca
3. Verificar alineación con brief inicial
4. Dar visto bueno para publicación

**Salida:**
- Aprobación formal (email/documento)

**Tiempo estimado:** 1 día

**Criterios de aceptación para avanzar:**
- ✅ Aprobación por escrito de stakeholder

---

**PASO 9: Publicación en producción**

**Responsable:** DevOps / Developer

**Entrada:**
- Página aprobada
- Imágenes optimizadas

**Tareas:**
1. Subir archivo HTML a servidor
2. Subir imágenes a carpeta `/img/`
3. Actualizar `sitemap.xml` con nueva URL
4. Configurar canonical y redirects si aplica
5. Verificar que la página esté accesible
6. Enviar sitemap actualizado a Google Search Console

**Salida:**
- Página en producción (URL pública)
- Sitemap actualizado

**Tiempo estimado:** 0.5-1 día

**Criterios de aceptación para avanzar:**
- ✅ Página accesible públicamente
- ✅ Sitemap enviado a Google
- ✅ Canonical configurado correctamente

---

**PASO 10: Monitoreo post-publicación**

**Responsable:** SEO Specialist / Marketing

**Entrada:**
- URL de la página publicada

**Tareas:**
1. Monitorear indexación en Google (24-48h)
2. Verificar posicionamiento de keywords (30 días)
3. Revisar métricas de Analytics (tráfico, bounce rate)
4. Analizar conversiones del formulario
5. Ajustar contenido si métricas no cumplen objetivos

**Herramientas:**
- Google Search Console
- Google Analytics
- Ahrefs / SEMrush (posicionamiento)

**Salida:**
- Reporte mensual de performance

**Tiempo estimado:** Continuo (seguimiento mensual)

---

### 16.2 Resumen del workflow (timeline completo)

| Paso | Responsable | Duración | Acumulado |
|---|---|---|---|
| 1. Brief | Product Manager | 1-2 días | 2 días |
| 2. Keyword Research | SEO Specialist | 2-3 días | 5 días |
| 3. Redacción | Content Writer | 5-7 días | 12 días |
| 4. Optimización Imágenes | Designer | 1-2 días | 14 días |
| 5. Maquetación HTML | Frontend Dev | 3-4 días | 18 días |
| 6. QA | QA Tester | 2-3 días | 21 días |
| 7. Correcciones | Frontend Dev | 1-2 días | 23 días |
| 8. Aprobación | Product Manager | 1 día | 24 días |
| 9. Publicación | DevOps | 0.5-1 día | 25 días |
| 10. Monitoreo | SEO Specialist | Continuo | — |

**Duración total del proyecto:** 3-4 semanas (25 días hábiles aproximadamente)

---

## 17. VERSIONADO Y MANTENIMIENTO DE LA GUÍA

### 17.1 Cómo nombrar versiones

**Sistema de versionado:** Semantic Versioning (SemVer)

**Formato:** `MAJOR.MINOR.PATCH`

**Ejemplo:** `1.2.3`

- **MAJOR (1.x.x):** Cambios que rompen compatibilidad con versiones anteriores
  - Ejemplo: Cambio completo de estructura HTML
  - Ejemplo: Nueva tecnología (de HTML estático a React)

- **MINOR (x.2.x):** Nuevas funcionalidades compatibles con versión anterior
  - Ejemplo: Agregar nueva sección obligatoria
  - Ejemplo: Nuevos requisitos SEO (Core Web Vitals)

- **PATCH (x.x.3):** Correcciones menores y mejoras
  - Ejemplo: Corregir typo en plantilla
  - Ejemplo: Actualizar URL de herramienta

**Historial de versiones:**

```markdown
## Historial de Versiones

### v1.0.0 - 2025-11-17
- ✨ Versión inicial de la guía
- 📄 Análisis completo de guirnaldas.html
- 📋 17 secciones con checklist y ejemplos

### v1.1.0 - [FECHA FUTURA]
- ✨ Agregar sección de video guidelines
- 🔧 Actualizar requisitos de Core Web Vitals

### v1.0.1 - [FECHA FUTURA]
- 🐛 Corregir typo en ejemplo JSON-LD
- 📝 Actualizar link de herramienta Squoosh
```

### 17.2 Responsable de actualizaciones

**Roles y responsabilidades:**

| Rol | Responsabilidad | Frecuencia |
|---|---|---|
| **Marketing Lead** | Aprobar cambios MAJOR y MINOR | Por solicitud |
| **SEO Specialist** | Proponer actualizaciones SEO | Mensual |
| **Frontend Developer** | Actualizar plantillas técnicas | Por solicitud |
| **Content Writer** | Revisar ejemplos y copy | Trimestral |

**Propietario de la guía:** Marketing Lead

**Proceso de actualización:**
1. Identificar necesidad de cambio
2. Crear issue en sistema de control de versiones
3. Proponer cambios en borrador
4. Revisar con equipo (si MAJOR o MINOR)
5. Actualizar documento
6. Incrementar versión según SemVer
7. Comunicar cambios al equipo

### 17.3 Frecuencia de revisión recomendada

**Revisión obligatoria:**

- **Trimestral (cada 3 meses):**
  - Verificar vigencia de herramientas recomendadas
  - Actualizar estadísticas de RESOIL (años, eventos, etc.)
  - Revisar ejemplos de keywords (tendencias)
  - Verificar links externos (no rotos)

- **Semestral (cada 6 meses):**
  - Revisar requisitos SEO (Google updates)
  - Actualizar métricas de performance (Core Web Vitals)
  - Validar que plantilla HTML siga siendo óptima
  - Revisar estándares de accesibilidad (WCAG)

- **Anual (cada año):**
  - Auditoría completa de todas las secciones
  - Actualizar ejemplos con servicios nuevos
  - Re-evaluar estructura del documento
  - Considerar cambios MAJOR si es necesario

**Revisión por evento:**

- **Cambio de algoritmo de Google:** Inmediato
- **Rediseño del sitio RESOIL:** Inmediato (MAJOR version)
- **Nuevo servicio lanzado:** Agregar ejemplo (MINOR version)
- **Feedback de usuario:** Según criticidad

---

## APÉNDICE A: RECURSOS Y HERRAMIENTAS

### Herramientas de SEO
- [Google Search Console](https://search.google.com/search-console)
- [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
- [Ahrefs](https://ahrefs.com)
- [SEMrush](https://www.semrush.com)

### Herramientas de validación
- [W3C Markup Validator](https://validator.w3.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)

### Herramientas de optimización de imágenes
- [Squoosh](https://squoosh.app)
- [TinyPNG](https://tinypng.com)
- [ImageOptim](https://imageoptim.com)

### Herramientas de performance
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Herramientas de testing responsive
- [BrowserStack](https://www.browserstack.com/)
- [Responsinator](http://www.responsinator.com/)
- Chrome DevTools (Device Mode)

---

## APÉNDICE B: GLOSARIO DE TÉRMINOS

**Above the fold:** Contenido visible sin hacer scroll

**Alt text:** Texto alternativo de imágenes para accesibilidad y SEO

**Breadcrumbs:** Navegación jerárquica (Inicio > Servicios > Guirnaldas)

**Canonical:** URL preferida cuando hay contenido duplicado

**CLS (Cumulative Layout Shift):** Métrica de estabilidad visual

**Core Web Vitals:** Métricas de experiencia de usuario (LCP, FID, CLS)

**CTA (Call to Action):** Llamada a la acción (botones, enlaces)

**FAQ (Frequently Asked Questions):** Preguntas frecuentes

**FCP (First Contentful Paint):** Tiempo hasta primer contenido visible

**Hreflang:** Etiqueta para contenido en múltiples idiomas

**JSON-LD:** Formato de datos estructurados para Schema

**Lazy loading:** Carga diferida de imágenes

**LCP (Largest Contentful Paint):** Tiempo hasta contenido principal visible

**LSI Keywords:** Keywords semánticas relacionadas

**OG (Open Graph):** Meta tags para compartir en redes sociales

**Schema Markup:** Datos estructurados para motores de búsqueda

**Slug:** Parte final de la URL (ej: /guirnaldas.html)

**TBT (Total Blocking Time):** Tiempo total de bloqueo del navegador

**WCAG:** Web Content Accessibility Guidelines (estándares de accesibilidad)

---

## CIERRE

Esta guía es un documento vivo que debe evolucionar con las necesidades de RESOIL y las mejores prácticas de la industria. Cualquier miembro del equipo que identifique oportunidades de mejora debe:

1. Documentar la propuesta
2. Enviarla al responsable de la guía
3. Participar en la revisión
4. Implementar los cambios aprobados

**Contacto para dudas sobre esta guía:**
- Marketing Lead: [email]
- SEO Specialist: [email]
- Frontend Developer: [email]

---

**Fin del documento**

---

**Metadata del documento:**
- **Nombre:** DOCUMENTO-PAGINAS.md
- **Versión:** 1.0.0
- **Creado:** 17 de noviembre de 2025
- **Última modificación:** 17 de noviembre de 2025
- **Autor:** Equipo RESOIL
- **Palabras:** ~12,500
- **Tiempo de lectura:** 50 minutos

# MANUAL PROFESIONAL DE CREACIÓN DE ARTÍCULOS - BLOG RESOIL

**Versión:** 2.0
**Propósito:** Guía técnica y editorial exhaustiva para la creación de artículos de alto rendimiento SEO y conversión para el blog de RESOIL
**Sitio:** rentadesonidoeiluminacion.com.mx

---

## ÍNDICE DE CONTENIDOS

1. [Filosofía Editorial y Objetivos](#1-filosofía-editorial-y-objetivos)
2. [Arquitectura HTML Completa](#2-arquitectura-html-completa)
3. [SEO: Meta Tags y Schema.org](#3-seo-meta-tags-y-schemaorg)
4. [Hero de Dos Columnas](#4-hero-de-dos-columnas)
5. [Imagen Destacada del Artículo](#5-imagen-destacada-del-artículo)
6. [Estructura del Contenido Principal](#6-estructura-del-contenido-principal)
7. [Sección de Preguntas Frecuentes (FAQ)](#7-sección-de-preguntas-frecuentes-faq)
8. [Galería de Imágenes](#8-galería-de-imágenes)
9. [CTA Final (Call-to-Action)](#9-cta-final-call-to-action)
10. [Sidebar Informativo](#10-sidebar-informativo)
11. [Artículos Relacionados](#11-artículos-relacionados)
12. [Reglas de Contenido Atemporal](#12-reglas-de-contenido-atemporal)
13. [Guía de Copywriting Profesional](#13-guía-de-copywriting-profesional)
14. [Checklist de Publicación](#14-checklist-de-publicación)
15. [Plantillas y Código de Referencia](#15-plantillas-y-código-de-referencia)

---

## 1. FILOSOFÍA EDITORIAL Y OBJETIVOS

### 1.1 Objetivos de Cada Artículo

Cada artículo del blog RESOIL debe cumplir **TRES objetivos simultáneos**:

1. **SEO:** Posicionar en Google para keywords de alto valor comercial
2. **Educación:** Proporcionar valor real al lector con información práctica
3. **Conversión:** Generar leads cualificados vía WhatsApp o formulario

### 1.2 Perfil del Lector Objetivo

**Características demográficas:**
- Ubicación: CDMX y Estado de México
- Perfil: Organizadores de eventos, novias/novios, coordinadores corporativos, familias
- Intención: Buscan información antes de contratar servicios de sonido/iluminación
- Comportamiento: Comparan opciones, valoran profesionalismo y experiencia

**Preguntas que el lector busca responder:**
- ¿Qué equipo necesito para mi evento específico?
- ¿Cuánto equipo necesito según mi número de invitados?
- ¿Qué diferencia hay entre rentar vs comprar?
- ¿Qué debe incluir un servicio profesional?
- ¿Por qué elegir RESOIL sobre otros proveedores?

### 1.3 Tono y Voz de Marca

**Características del tono RESOIL:**
- **Experto pero accesible:** Conocimiento técnico explicado de forma clara
- **Confiable:** Respaldado por datos (15+ años, 5,000+ eventos)
- **Directo:** Sin rodeos, información práctica y accionable
- **Profesional:** Sin emojis, sin lenguaje coloquial excesivo
- **Orientado a soluciones:** Enfocado en resolver problemas del lector

**EVITAR:**
- Superlativos vacíos ("el mejor", "increíble", "espectacular")
- Lenguaje de venta agresiva
- Promesas no respaldadas por datos
- Jerga técnica sin explicación
- Contenido genérico que no aporta valor

---

## 2. ARQUITECTURA HTML COMPLETA

### 2.1 Estructura Jerárquica del Documento

```
<!DOCTYPE html>
<html lang="es">
<head>
  ├── Meta Tags Básicos (charset, viewport)
  ├── Title Tag SEO
  ├── Meta Description
  ├── Meta Keywords
  ├── Open Graph Tags
  ├── Twitter Card Tags
  ├── Canonical URL
  ├── Favicon Links
  ├── Stylesheet (non-render blocking)
  ├── Estilos Inline (Hero + FAQ)
  ├── Schema.org Article
  └── Schema.org FAQPage
</head>
<body>
  ├── <header> Navegación
  ├── Breadcrumb Container
  └── <main class="main-content">
      ├── <section class="article-hero"> (Dos columnas)
      ├── <article class="article-content">
      │   └── <div class="container">
      │       ├── <div class="article-body">
      │       │   ├── Imagen Destacada
      │       │   ├── Introducción
      │       │   ├── Secciones de Contenido (H2/H3)
      │       │   ├── Galería de Imágenes
      │       │   ├── Sección FAQ Accordion
      │       │   └── CTA Final
      │       └── <aside class="article-sidebar">
      │           ├── Box Información Rápida
      │           ├── Box Servicios Relacionados
      │           └── Box CTA Sidebar
      └── <section class="related-articles-section">
  ├── <footer>
  ├── Botón WhatsApp Flotante
  ├── Script app.js
  └── Script FAQ Accordion
</body>
</html>
```

### 2.2 Ubicación de Archivos

| Tipo | Ruta |
|------|------|
| Artículos | `/blog/nombre-articulo.html` |
| Imágenes Blog | `../img/blog/` |
| Imágenes Generales | `../img/img-index/` |
| CSS | `../css/style.css` |
| JavaScript | `../js/app.js` |

### 2.3 Rutas Relativas

**IMPORTANTE:** Todos los artículos están en `/blog/`, por lo tanto todas las rutas deben usar `../` para subir un nivel.

```html
<!-- Correcto -->
<link rel="stylesheet" href="../css/style.css">
<img src="../img/blog/imagen.webp">
<a href="../contacto.html">

<!-- Incorrecto -->
<link rel="stylesheet" href="css/style.css">
<img src="img/blog/imagen.webp">
<a href="contacto.html">
```

---

## 3. SEO: META TAGS Y SCHEMA.ORG

### 3.1 Regla de Atemporalidad

**REGLA ABSOLUTA:** El sitio RESOIL es completamente atemporal. NO incluir años en:
- Títulos
- Meta descriptions
- Keywords
- Schema.org (NO usar datePublished ni dateModified)
- Contenido del artículo
- URLs/slugs

### 3.2 Title Tag

**Formato:** `[Keyword Principal] [Ubicación] | [Beneficio/Tipo] | RESOIL`

**Longitud:** 55-65 caracteres

**Ejemplos correctos:**
```html
<title>Equipos de Sonido Profesional para Bodas CDMX | Guía Técnica | RESOIL</title>
<title>Guirnaldas y Luces Vintage CDMX | Focos Edison para Eventos | RESOIL</title>
<title>Iluminación para Bodas en Jardín CDMX | Guía Completa Profesional | RESOIL</title>
<title>Máquinas de Humo para Eventos CDMX | Efectos Especiales | RESOIL</title>
```

### 3.3 Meta Description

**Longitud:** 150-160 caracteres
**Contenido:** Resumen atractivo + keyword principal + beneficio + call-to-action implícito

**Fórmula:** `[Qué es] + [para qué sirve] + [beneficio clave] + [ubicación]`

**Ejemplos correctos:**
```html
<meta name="description" content="Guía técnica de equipos de sonido para bodas: bocinas line array, subwoofers, micrófonos Shure y mezcladoras digitales. Especificaciones profesionales CDMX." />

<meta name="description" content="Guirnaldas de focos vintage tipo Edison CDMX. Iluminación romántica para bodas, XV años y eventos. Techo de luces profesional con instalación incluida." />
```

### 3.4 Meta Keywords

**Cantidad:** 6-8 keywords
**Formato:** Separadas por comas, incluir variaciones y ubicación

**Ejemplo:**
```html
<meta name="keywords" content="equipos sonido bodas CDMX, bocinas line array bodas, micrófonos Shure bodas, subwoofer bodas, mezcladora digital eventos, especificaciones audio bodas" />
```

### 3.5 Open Graph Tags

```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="[Título atractivo para redes - puede diferir del title SEO]" />
<meta property="og:description" content="[Descripción para compartir - 100-150 caracteres]" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://rentadesonidoeiluminacion.com.mx/blog/[slug].html" />
<meta property="og:image" content="https://rentadesonidoeiluminacion.com.mx/img/blog/[imagen-og].webp" />
```

**Especificaciones de imagen OG:**
- Dimensiones: 1200x630px
- Formato: WebP o JPG
- Peso máximo: 200KB

### 3.6 Twitter Card Tags

```html
<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Título - máx 70 caracteres]" />
<meta name="twitter:description" content="[Descripción - máx 200 caracteres]" />
<meta name="twitter:image" content="https://rentadesonidoeiluminacion.com.mx/img/blog/[imagen].webp" />
```

### 3.7 Schema.org Article (SIN FECHAS)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Título completo del artículo]",
  "description": "[Descripción del contenido]",
  "image": "https://rentadesonidoeiluminacion.com.mx/img/blog/[imagen].webp",
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
  "articleSection": "[CATEGORÍA EN MAYÚSCULAS]",
  "keywords": "[keywords separadas por comas]"
}
</script>
```

**Categorías válidas para articleSection:**
- `SONIDO`
- `ILUMINACIÓN`
- `EFECTOS`
- `EQUIPOS`

### 3.8 Schema.org FAQPage (OBLIGATORIO)

Cada artículo DEBE incluir un Schema.org FAQPage con exactamente **6 preguntas frecuentes**.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta 1 - específica y práctica]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta completa de 50-100 palabras con información práctica]"
      }
    },
    {
      "@type": "Question",
      "name": "[Pregunta 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta 2]"
      }
    }
    // ... hasta 6 preguntas
  ]
}
</script>
```

**Tipos de preguntas que DEBEN incluirse:**

1. **Pregunta técnica/comparativa:** "¿Qué diferencia hay entre X y Y?"
2. **Pregunta de dimensionamiento:** "¿Cuánto/cuántos necesito para mi evento?"
3. **Pregunta de funcionamiento:** "¿Cómo funciona X?" o "¿Qué incluye el servicio?"
4. **Pregunta de condiciones:** "¿Funciona si llueve?" o "¿Qué pasa si X?"
5. **Pregunta de personalización:** "¿Puedo elegir X?" o "¿Se puede adaptar a Y?"
6. **Pregunta sobre RESOIL:** "¿Por qué elegir RESOIL?" o "¿Qué incluye el servicio?"

---

## 4. HERO DE DOS COLUMNAS

### 4.1 Estructura HTML

```html
<section class="article-hero">
  <div class="container">
    <div class="article-hero-grid">
      <!-- Columna Principal: Título y Tagline -->
      <div class="article-hero-main">
        <h1 class="article-title">[TÍTULO H1 DEL ARTÍCULO]</h1>
        <p class="article-tagline">[TAGLINE DE MARKETING - 2-3 oraciones]</p>
      </div>
      <!-- Columna Secundaria: Descripción SEO -->
      <div class="article-hero-info">
        <p><strong>[GANCHO EMOCIONAL O ESTADÍSTICA]</strong> [Desarrollo del problema o oportunidad]</p>
        <p>[PROPUESTA DE VALOR] con <strong>[keywords en negrita]</strong> y beneficios específicos.</p>
      </div>
    </div>
  </div>
</section>
```

### 4.2 Estilos CSS del Hero (Incluir en cada artículo)

```html
<style>
  /* Hero de Dos Columnas */
  .article-hero { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 4rem 0; }
  .article-hero .container { max-width: 1200px; }
  .article-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .article-hero-main h1.article-title { color: #fff; font-size: 2.5rem; line-height: 1.2; margin-bottom: 1rem; }
  .article-hero-main .article-tagline { color: rgba(255,255,255,0.85); font-size: 1.15rem; line-height: 1.6; }
  .article-hero-info { background: rgba(255,255,255,0.08); border-radius: 16px; padding: 2rem; border: 1px solid rgba(255,255,255,0.1); }
  .article-hero-info p { color: rgba(255,255,255,0.9); font-size: 1rem; line-height: 1.7; margin: 0 0 1.25rem 0; }
  .article-hero-info p:last-child { margin-bottom: 0; }
  .article-hero-info strong { color: #e94560; }
  @media (max-width: 768px) {
    .article-hero { padding: 2.5rem 0; }
    .article-hero-grid { grid-template-columns: 1fr; gap: 2rem; }
    .article-hero-main h1.article-title { font-size: 1.85rem; }
    .article-hero-info { padding: 1.5rem; }
  }
</style>
```

### 4.3 Reglas del H1

**Longitud:** 50-80 caracteres
**Contenido:** Keyword principal + ubicación (CDMX) + tipo de contenido

**Fórmulas efectivas para H1:**
- `[Servicio] para [Tipo de Evento] CDMX: Guía [Adjetivo]`
- `[Servicio] CDMX: [Subtema Específico]`
- `Renta de [Servicio] [Ubicación] | [Beneficio]`

**Ejemplos correctos:**
```html
<h1 class="article-title">Equipos de Sonido Profesional para Bodas: Guía Técnica</h1>
<h1 class="article-title">Sonido para Bodas CDMX: Guía Completa del Audio Perfecto</h1>
<h1 class="article-title">Iluminación para Bodas en Jardín CDMX: Guía Completa Profesional</h1>
```

### 4.4 Reglas del Tagline

**Ubicación:** Debajo del H1 en la columna principal
**Longitud:** 150-200 caracteres (2-3 oraciones)
**Contenido:** Expandir el H1, mencionar valor/beneficio, establecer expertise

**Ejemplo:**
```html
<p class="article-tagline">Conoce las especificaciones técnicas que diferencian el audio profesional del amateur. Bocinas line array, subwoofers, micrófonos Shure y mezcladoras digitales explicados por expertos.</p>
```

### 4.5 Reglas del Hero Info Box

**Estructura:**
- **Párrafo 1:** Gancho emocional o estadística + problema que resuelve
- **Párrafo 2:** Propuesta de valor + keywords en negrita

**Ejemplo completo:**
```html
<div class="article-hero-info">
  <p><strong>El 73% de las quejas en bodas se relacionan con problemas de audio.</strong> ¿La razón? Equipos subdimensionados, micrófonos de mala calidad o falta de técnico profesional. Esta guía te enseña exactamente qué equipo necesitas.</p>
  <p>Descubre las <strong>especificaciones técnicas</strong> que debes exigir: potencia RMS vs PMPO, respuesta de frecuencia, tipos de micrófonos inalámbricos y por qué una <strong>mezcladora digital</strong> marca la diferencia en tu boda.</p>
</div>
```

---

## 5. IMAGEN DESTACADA DEL ARTÍCULO

### 5.1 Estructura HTML

```html
<figure class="article-featured-image-inline">
  <img
    src="../img/blog/[nombre-imagen].webp"
    alt="[Descripción específica con keywords] - RESOIL"
    class="featured-image"
    loading="eager"
  />
  <figcaption>[Descripción breve de lo que muestra la imagen]</figcaption>
</figure>
```

### 5.2 Estilos CSS (Incluir en cada artículo)

```html
<style>
  /* Imagen Destacada Inline */
  .article-featured-image-inline { margin: 0 0 2.5rem 0; text-align: center; }
  .article-featured-image-inline .featured-image { width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
  .article-featured-image-inline figcaption { margin-top: 1rem; font-size: 0.9rem; color: #666; font-style: italic; }
</style>
```

### 5.3 Especificaciones de la Imagen

| Atributo | Especificación |
|----------|----------------|
| Dimensiones | 1200x800px o 1600x900px |
| Formato | WebP (preferido) o JPG |
| Peso máximo | 200KB |
| Loading | `eager` (carga inmediata) |

### 5.4 Texto ALT Optimizado

**Fórmula:** `[Descripción de la imagen] [keywords relevantes] - RESOIL`

**Ejemplos:**
```html
alt="Equipos de Sonido Profesional para Bodas: Bocinas Line Array, Subwoofer y Mezcladora Digital - RESOIL"
alt="Guirnaldas de focos vintage tipo Edison iluminando recepción de boda en jardín CDMX - RESOIL"
alt="Sistema de sonido profesional para conferencias corporativas con micrófonos Shure - RESOIL"
```

---

## 6. ESTRUCTURA DEL CONTENIDO PRINCIPAL

### 6.1 Introducción del Artículo

**Ubicación:** Primera sección dentro de `<div class="article-body">`
**Longitud:** 150-200 palabras (2-3 párrafos)

**Estructura:**

```html
<section class="article-section">
  <p class="article-intro"><strong>[PREGUNTA RETÓRICA O AFIRMACIÓN IMPACTANTE]</strong> [Desarrollo que establece el problema o la oportunidad]</p>
  <p>[PROPUESTA DEL ARTÍCULO] - Qué aprenderá el lector, qué problemas resolverá.</p>
  <p>En RESOIL hemos [CREDENCIAL: instalado/realizado/equipado] más de <strong>5,000 [tipo de evento]</strong> y conocemos [EXPERTISE ESPECÍFICO].</p>
</section>
```

**Ejemplo real:**
```html
<section class="article-section">
  <p class="article-intro"><strong>¿Sabes la diferencia entre watts RMS y PMPO?</strong> ¿Conoces por qué un micrófono de $500 pesos puede arruinar tu ceremonia? ¿Entiendes por qué las bocinas "de DJ" no son adecuadas para una boda elegante?</p>
  <p>Esta guía técnica te convertirá en un cliente informado. Aprenderás exactamente qué equipo necesitas, qué especificaciones exigir y cómo identificar proveedores que usan equipo profesional real vs. equipo de consumo disfrazado.</p>
  <p>En RESOIL hemos instalado audio en más de <strong>5,000 bodas</strong> y conocemos cada detalle técnico que marca la diferencia entre una boda con audio impecable y una donde "no se escuchó nada".</p>
</section>
```

### 6.2 Secciones de Contenido (H2/H3)

**Cantidad de H2 por artículo:** 6-8 secciones principales
**Cantidad de H3 por H2:** 2-5 subsecciones

**Estructura de una sección completa:**

```html
<section class="article-section">
  <h2>[Título de Sección - Pregunta o Afirmación con Keyword]</h2>
  <p>[Párrafo introductorio que establece el contexto de la sección]</p>

  <h3>[Subsección 1]</h3>
  <p>[Contenido detallado con información práctica]</p>
  <p><strong>[Término técnico]:</strong> [Explicación]. <strong>[Especificación]:</strong> [Detalles].</p>

  <h3>[Subsección 2]</h3>
  <p>[Más contenido con ejemplos específicos y datos]</p>
</section>
```

### 6.3 Tipos de Secciones Recomendadas

**Para artículos de SONIDO:**
1. Tipos de equipos (bocinas, subwoofers, etc.)
2. Guía de dimensionamiento (watts por persona)
3. Tipos de micrófonos y sus aplicaciones
4. Mezcladoras y procesamiento de audio
5. Errores comunes y cómo evitarlos
6. Qué incluye un paquete profesional
7. Por qué elegir RESOIL

**Para artículos de ILUMINACIÓN:**
1. Tipos de iluminación (guirnaldas, uplighting, etc.)
2. Aplicaciones por tipo de evento
3. Guía de cantidad/cobertura
4. Temperaturas de color y ambientes
5. Proceso de instalación
6. Combinaciones efectivas
7. Por qué elegir RESOIL

**Para artículos de EFECTOS:**
1. Tipos de efectos disponibles
2. Aplicaciones por momento del evento
3. Cómo funcionan técnicamente
4. Seguridad y consideraciones
5. Combinaciones con otros servicios
6. Qué incluye el servicio
7. Por qué elegir RESOIL

### 6.4 Formato de Párrafos Técnicos

**Para especificaciones técnicas:**
```html
<p><strong>[Nombre del equipo/especificación]:</strong> [Descripción técnica]. [Especificación numérica]. [Aplicación práctica].</p>
```

**Ejemplo:**
```html
<p><strong>Subwoofer 18":</strong> Respuesta 28-120Hz, impacto profundo para grandes recepciones y hora loca intensa. Potencia típica: 1,000-2,000W RMS.</p>
```

**Para guías de dimensionamiento:**
```html
<p><strong>[Tamaño/cantidad de invitados]:</strong> [Recomendación específica]</p>
```

**Ejemplo:**
```html
<p><strong>100-200 invitados:</strong> 2 subwoofers 15" o 1 subwoofer 18"</p>
<p><strong>200-400 invitados:</strong> 2-4 subwoofers 18" en configuración cardiode</p>
```

### 6.5 Listas HTML en el Contenido

A diferencia de la versión anterior, SÍ se pueden usar listas cuando mejoren la legibilidad:

```html
<h3>Equipo Principal</h3>
<ul>
  <li><strong>Bocinas principales:</strong> Line array o full-range según tamaño del evento</li>
  <li><strong>Subwoofer(s):</strong> Para graves potentes en la pista de baile</li>
  <li><strong>Mezcladora digital:</strong> Con todos los canales necesarios</li>
  <li><strong>Micrófonos inalámbricos:</strong> Lavalier, diadema y de mano</li>
</ul>
```

---

## 7. SECCIÓN DE PREGUNTAS FRECUENTES (FAQ)

### 7.1 Importancia del FAQ

La sección FAQ es **OBLIGATORIA** en cada artículo porque:
1. Mejora el SEO (aparece en Google como rich snippets)
2. Responde objeciones comunes del cliente
3. Aumenta el tiempo de permanencia en la página
4. Genera confianza con respuestas profesionales

### 7.2 Estructura HTML del FAQ Accordion

```html
<section class="article-section">
  <h2>Preguntas Frecuentes sobre [Tema del Artículo]</h2>
  <p>Respuestas a las dudas más comunes sobre [tema específico].</p>
  <div class="faq-container">
    <div class="faq-item active">
      <button class="faq-question" aria-expanded="true">
        <span>[Pregunta 1]</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" style="display:block;">
        <p>[Respuesta completa con <strong>palabras clave en negrita</strong>]</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false">
        <span>[Pregunta 2]</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>[Respuesta 2]</p>
      </div>
    </div>
    <!-- Repetir hasta 6 preguntas -->
  </div>
</section>
```

### 7.3 Estilos CSS del FAQ (Incluir en cada artículo)

```html
<style>
  /* FAQ Accordion */
  .faq-container { margin-top: 1.5rem; }
  .faq-item { background: #f8f9fa; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #e9ecef; }
  .faq-question { width: 100%; padding: 1.2rem 1.5rem; background: transparent; border: none; text-align: left; font-size: 1rem; font-weight: 600; color: #1a1a2e; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.3s; }
  .faq-question:hover { background: #e9ecef; }
  .faq-icon { font-size: 1.5rem; font-weight: 300; color: #e94560; transition: transform 0.3s; }
  .faq-item.active .faq-icon { transform: rotate(45deg); }
  .faq-answer { display: none; padding: 0 1.5rem 1.5rem; max-height: none !important; overflow: visible !important; }
  .faq-answer p { margin: 0; color: #555; line-height: 1.7; }
</style>
```

### 7.4 JavaScript del FAQ (Incluir al final del body)

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Cerrar todos
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.display = 'none';
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Abrir el clickeado si no estaba activo
      if (!isActive) {
        item.classList.add('active');
        answer.style.display = 'block';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
</script>
```

### 7.5 Reglas para Escribir FAQs Efectivas

**Estructura de la respuesta:**
- Primera oración: Respuesta directa a la pregunta
- Desarrollo: Información adicional práctica
- Keywords en negrita estratégicamente

**Longitud de respuestas:** 50-100 palabras por respuesta

**Las 6 preguntas DEBEN cubrir:**
1. **Técnica/Comparativa:** Diferencias entre opciones
2. **Dimensionamiento:** Cantidades según tamaño de evento
3. **Funcionamiento:** Cómo funciona o qué incluye
4. **Condiciones:** Lluvia, electricidad, espacio, etc.
5. **Personalización:** Opciones de color, configuración, etc.
6. **Valor RESOIL:** Por qué elegir la empresa

**Ejemplo de FAQ bien escrita:**
```html
<div class="faq-item">
  <button class="faq-question" aria-expanded="false">
    <span>¿Cuántos watts necesito para mi boda según el número de invitados?</span>
    <span class="faq-icon">+</span>
  </button>
  <div class="faq-answer">
    <p>La regla profesional es: <strong>interior 5-10 watts RMS por persona</strong>, <strong>exterior 10-15 watts RMS por persona</strong>. Una boda de 150 invitados en jardín necesita aproximadamente 1,500-2,000 watts RMS. En RESOIL dimensionamos el equipo exacto para tu evento según el venue, número de invitados y tipo de fiesta.</p>
  </div>
</div>
```

---

## 8. GALERÍA DE IMÁGENES

### 8.1 Estructura HTML

```html
<section class="article-section">
  <h2>Galería: [Descripción de las Imágenes]</h2>
  <p>[Descripción breve de qué muestran las imágenes y dónde fueron tomadas]</p>

  <div class="article-gallery">
    <div class="article-gallery-item">
      <img src="../img/img-index/referencia.webp" alt="[ALT específico imagen 1]" />
    </div>
    <div class="article-gallery-item">
      <img src="../img/img-index/referencia.webp" alt="[ALT específico imagen 2]" />
    </div>
    <div class="article-gallery-item">
      <img src="../img/img-index/referencia.webp" alt="[ALT específico imagen 3]" />
    </div>
    <div class="article-gallery-item">
      <img src="../img/img-index/referencia.webp" alt="[ALT específico imagen 4]" />
    </div>
    <div class="article-gallery-item">
      <img src="../img/img-index/referencia.webp" alt="[ALT específico imagen 5]" />
    </div>
    <div class="article-gallery-item">
      <img src="../img/img-index/referencia.webp" alt="[ALT específico imagen 6]" />
    </div>
  </div>
</section>
```

### 8.2 Especificaciones

| Atributo | Especificación |
|----------|----------------|
| Cantidad | SIEMPRE 6 imágenes |
| Grid | 3 columnas desktop, 2 tablet, 1 mobile |
| Formato | WebP (preferido) o JPG |
| Dimensiones | 800x600px mínimo |
| Peso | Máximo 150KB por imagen |
| Loading | `lazy` (carga diferida) |

### 8.3 Textos ALT para Galería

**Fórmula:** `[Tipo de equipo/servicio] [acción/ubicación] [tipo de evento]`

**Ejemplos para galería de sonido:**
```html
alt="Sistema line array instalado en boda de jardín CDMX"
alt="Mezcladora digital Yamaha controlando audio de boda"
alt="Subwoofers JBL para pista de baile en recepción"
alt="Micrófonos Shure inalámbricos para ceremonia de boda"
alt="Técnico de audio RESOIL ajustando niveles en boda"
alt="Bocinas full-range en pedestales para boda íntima"
```

---

## 9. CTA FINAL (CALL-TO-ACTION)

### 9.1 Estructura HTML

```html
<section class="article-section article-cta">
  <h2>[Título CTA - Invitación a la Acción]</h2>

  <p>
    [Párrafo 1: Invitación + beneficio de contactar + "sin compromiso"]
  </p>

  <p>
    <strong>Incluimos en tu cotización:</strong> [Lista de lo que recibirán al cotizar]
  </p>

  <div class="article-cta-buttons">
    <a
      href="https://wa.me/5215578960091?text=[Mensaje URL-encoded personalizado]"
      class="cta-btn primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      [Texto del Botón Principal]
    </a>
    <a href="../contacto.html" class="cta-btn secondary">
      [Texto del Botón Secundario]
    </a>
  </div>
</section>
```

### 9.2 Mensajes de WhatsApp Personalizados

**IMPORTANTE:** Cada artículo debe tener un mensaje de WhatsApp único y específico.

**Formato de URL-encoding:**
- Espacio: `%20`
- Coma: `%2C`
- Punto: `.` (no necesita encoding)
- Signo de interrogación: `%3F`
- Acento: Usar equivalente sin acento o entidad

**Ejemplos por tipo de artículo:**

**Sonido para bodas:**
```
text=Hola%2C%20quiero%20cotizar%20equipos%20de%20sonido%20profesional%20para%20mi%20boda.%20Ya%20le%C3%AD%20su%20gu%C3%ADa%20t%C3%A9cnica.
```

**Iluminación:**
```
text=Hola%2C%20me%20interesa%20cotizar%20iluminaci%C3%B3n%20para%20mi%20boda%20en%20jard%C3%ADn.
```

**Efectos especiales:**
```
text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20m%C3%A1quinas%20de%20humo%20para%20mi%20evento.
```

### 9.3 Textos de Botones Recomendados

**Botón Primario (WhatsApp):**
- "Cotizar Equipo Profesional"
- "Cotizar por WhatsApp"
- "Solicitar Cotización"
- "Cotizar Iluminación"

**Botón Secundario (Formulario):**
- "Solicitar Especificaciones Detalladas"
- "Solicitar Cotización Detallada"
- "Ver Más Opciones"

---

## 10. SIDEBAR INFORMATIVO

### 10.1 Estructura Completa

```html
<aside class="article-sidebar">
  <!-- Box 1: Información Técnica Rápida -->
  <div class="sidebar-box">
    <h3>[Título según tema: Especificaciones Rápidas / Información Rápida]</h3>
    <ul class="sidebar-list">
      <li><strong>[Dato 1]:</strong> [Valor]</li>
      <li><strong>[Dato 2]:</strong> [Valor]</li>
      <li><strong>[Dato 3]:</strong> [Valor]</li>
      <li><strong>[Dato 4]:</strong> [Valor]</li>
      <li><strong>[Dato 5]:</strong> [Valor]</li>
    </ul>
  </div>

  <!-- Box 2: Información Adicional (opcional) -->
  <div class="sidebar-box">
    <h3>[Título: Marcas Profesionales / Checklist / Datos Técnicos]</h3>
    <ul class="sidebar-list">
      <li><strong>[Item 1]:</strong> [Detalle]</li>
      <li><strong>[Item 2]:</strong> [Detalle]</li>
      <li><strong>[Item 3]:</strong> [Detalle]</li>
    </ul>
  </div>

  <!-- Box 3: Servicios Relacionados -->
  <div class="sidebar-box">
    <h3>Servicios Relacionados</h3>
    <ul class="sidebar-links">
      <li><a href="[url-articulo-1].html">[Artículo relacionado 1]</a></li>
      <li><a href="[url-articulo-2].html">[Artículo relacionado 2]</a></li>
      <li><a href="../[categoria].html">[Ver Todos los Servicios]</a></li>
    </ul>
  </div>

  <!-- Box 4: CTA Sidebar -->
  <div class="sidebar-box sidebar-cta">
    <h3>[Título: Asesoría Técnica Gratuita / ¿Necesitas Asesoría?]</h3>
    <p>[Mensaje breve invitando a contactar]</p>
    <a
      href="https://wa.me/5215578960091?text=[Mensaje URL-encoded]"
      class="sidebar-cta-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      [Texto del Botón]
    </a>
  </div>
</aside>
```

### 10.2 Contenido del Sidebar por Tipo de Artículo

**Para artículos de SONIDO:**
```html
<div class="sidebar-box">
  <h3>Especificaciones Rápidas</h3>
  <ul class="sidebar-list">
    <li><strong>Interior:</strong> 5-10W RMS/persona</li>
    <li><strong>Exterior:</strong> 10-15W RMS/persona</li>
    <li><strong>Subwoofer mínimo:</strong> 15" (600W+)</li>
    <li><strong>Micrófonos:</strong> Shure/Sennheiser</li>
    <li><strong>Mezcladora:</strong> Digital 12+ canales</li>
  </ul>
</div>
```

**Para artículos de ILUMINACIÓN:**
```html
<div class="sidebar-box">
  <h3>Guía Rápida</h3>
  <ul class="sidebar-list">
    <li><strong>Temperatura ideal:</strong> 2700K (cálido)</li>
    <li><strong>Altura instalación:</strong> 3.5-4.5 metros</li>
    <li><strong>Cobertura:</strong> 1m guirnalda/2-3m²</li>
    <li><strong>Certificación:</strong> IP65+ exterior</li>
    <li><strong>Instalación:</strong> 4-6 horas antes</li>
  </ul>
</div>
```

---

## 11. ARTÍCULOS RELACIONADOS

### 11.1 Estructura HTML

```html
<section class="related-articles-section">
  <div class="container">
    <div class="section-header">
      <h2>ARTÍCULOS RELACIONADOS</h2>
      <p class="section-subtitle">
        [Subtítulo que invite a seguir explorando]
      </p>
    </div>

    <div class="related-articles-grid">
      <!-- Artículo 1 -->
      <article class="related-article-card">
        <div class="related-article-content">
          <div class="related-article-category">[CATEGORÍA]</div>
          <h3 class="related-article-title">
            <a href="[url-articulo].html">[Título del Artículo]</a>
          </h3>
          <p class="related-article-excerpt">
            [Extracto de 80-120 caracteres]
          </p>
          <a href="[url-articulo].html" class="related-article-link">
            Leer artículo →
          </a>
        </div>
      </article>

      <!-- Repetir para artículos 2 y 3 -->
    </div>

    <div class="related-articles-cta">
      <a href="../blog.html" class="related-articles-button">Ver Todos los Artículos</a>
    </div>
  </div>
</section>
```

### 11.2 Criterios de Selección

**SIEMPRE incluir 3 artículos relacionados que:**
1. Sean temáticamente relevantes al artículo actual
2. Ofrezcan valor complementario (no repetitivo)
3. Tengan variedad de categorías cuando sea posible
4. Existan realmente en el blog (verificar URLs)

### 11.3 Artículos Disponibles para Relacionar

| Archivo | Título | Categoría |
|---------|--------|-----------|
| `sonido-bodas-guia-completa.html` | Guía Completa del Audio para Bodas | SONIDO |
| `sonido-profesional-bodas-cdmx.html` | Equipos de Sonido Profesional para Bodas | SONIDO |
| `sonido-conferencias.html` | Sonido para Conferencias CDMX | SONIDO |
| `bocinas-fiestas.html` | Bocinas para Fiestas | SONIDO |
| `iluminacion-bodas-jardin.html` | Iluminación para Bodas en Jardín | ILUMINACIÓN |
| `guirnaldas-luces-vintage-eventos.html` | Guirnaldas y Luces Vintage | ILUMINACIÓN |
| `renta-guirnaldas-led-cdmx.html` | Renta de Guirnaldas LED CDMX | ILUMINACIÓN |
| `maquina-humo-eventos-cdmx.html` | Máquinas de Humo para Eventos | EFECTOS |
| `proyector-gobos.html` | Monograma de Luz para Bodas | ILUMINACIÓN |
| `proyector-gobos-personalizado.html` | Proyector de Gobos Personalizado | ILUMINACIÓN |

---

## 12. REGLAS DE CONTENIDO ATEMPORAL

### 12.1 Prohibiciones Absolutas

**NO incluir en ningún lugar del artículo:**
- Años específicos (2024, 2025, etc.)
- `datePublished` o `dateModified` en Schema.org
- Referencias temporales como "este año", "actualmente", "recientemente"
- Meses o fechas específicas
- "Tendencias [año]" o "Guía [año]"

### 12.2 Alternativas Atemporales

| NO usar | SÍ usar |
|---------|---------|
| "En 2025" | (omitir) |
| "Este año" | (omitir o reformular) |
| "Recientemente" | (omitir) |
| "Desde 2010" | "Con más de 15 años de experiencia" |
| "Tendencias 2025" | "Tendencias actuales" |
| "Guía 2025" | "Guía completa" o "Guía profesional" |

### 12.3 Fórmulas Atemporales para Experiencia

```html
<!-- Correcto -->
<p>Con más de 15 años de experiencia...</p>
<p>Después de realizar más de 5,000 eventos...</p>
<p>Nuestra trayectoria de más de una década...</p>

<!-- Incorrecto -->
<p>Desde 2010 realizamos eventos...</p>
<p>En nuestros 15 años desde 2010...</p>
```

---

## 13. GUÍA DE COPYWRITING PROFESIONAL

### 13.1 Estructura de Párrafos Efectivos

**Párrafo de problema:**
```
[Estadística o pregunta] + [Explicación del problema] + [Consecuencia negativa]
```

**Párrafo de solución:**
```
[Presentación de la solución] + [Cómo funciona] + [Beneficio específico]
```

**Párrafo de credencial:**
```
[Dato de RESOIL] + [Qué significa para el cliente] + [Garantía implícita]
```

### 13.2 Uso de Negritas Estratégicas

**Usar negritas para:**
- Términos técnicos que se definen
- Especificaciones numéricas importantes
- Nombres de marcas profesionales
- Beneficios clave
- Datos de RESOIL (5,000 eventos, 15+ años)

**NO usar negritas para:**
- Oraciones completas
- Énfasis emocional
- Más del 15% del texto

### 13.3 Densidad de Keywords

**Keyword principal:** 1-2% del texto total
**Keywords secundarias:** 0.5-1% cada una
**Variaciones naturales:** Usar sinónimos

**Ubicaciones obligatorias de keyword principal:**
- H1
- Primer párrafo
- Al menos 2 H2
- Meta description
- ALT de imagen destacada

### 13.4 Longitud del Artículo

**Mínimo:** 2,500 palabras
**Óptimo:** 3,000-4,000 palabras
**Máximo:** 5,000 palabras

**Distribución:**
- Introducción: 150-200 palabras
- Cada sección H2: 300-500 palabras
- FAQ: 400-600 palabras (6 preguntas)
- CTA: 100-150 palabras

### 13.5 Precios y Cotizaciones

**REGLA ABSOLUTA: NO mencionar precios específicos**

**NO usar:**
- "$2,800 MXN"
- "desde $3,000"
- "inversión de $5,000"

**SÍ usar:**
- "Solicita cotización personalizada"
- "Configuraciones para diferentes presupuestos"
- "Paquetes adaptados a tu evento"

---

## 14. CHECKLIST DE PUBLICACIÓN

### 14.1 Antes de Crear el Artículo

- [ ] Tema y keyword principal definidos
- [ ] 6-8 keywords secundarias identificadas
- [ ] Estructura de secciones (H2/H3) planificada
- [ ] 6 preguntas FAQ redactadas
- [ ] 3 artículos relacionados seleccionados
- [ ] Imágenes disponibles (7: 1 destacada + 6 galería)

### 14.2 Meta Tags y Schema

- [ ] Title tag (55-65 caracteres, keyword + CDMX + RESOIL)
- [ ] Meta description (150-160 caracteres)
- [ ] Meta keywords (6-8 keywords)
- [ ] Open Graph completo (title, description, type, url, image)
- [ ] Twitter Cards completo
- [ ] Canonical URL correcto
- [ ] Schema.org Article (SIN datePublished/dateModified)
- [ ] Schema.org FAQPage con 6 preguntas

### 14.3 Estructura HTML

- [ ] Estilos CSS del Hero incluidos
- [ ] Estilos CSS del FAQ incluidos
- [ ] Hero de dos columnas implementado
- [ ] Breadcrumb funcional
- [ ] Solo UN H1 en todo el artículo
- [ ] Jerarquía H2 > H3 correcta
- [ ] Imagen destacada con figcaption
- [ ] 6-8 secciones de contenido
- [ ] Galería con 6 imágenes
- [ ] Sección FAQ con accordion
- [ ] CTA con botones funcionales
- [ ] Sidebar completo (4 boxes)
- [ ] 3 artículos relacionados
- [ ] Script FAQ al final del body

### 14.4 Contenido

- [ ] 2,500+ palabras de contenido
- [ ] Introducción con gancho y credenciales RESOIL
- [ ] Información técnica específica y práctica
- [ ] Keywords distribuidas naturalmente
- [ ] Negritas estratégicas (no excesivas)
- [ ] Sin precios específicos
- [ ] Sin fechas ni referencias temporales
- [ ] Todas las imágenes con ALT descriptivo

### 14.5 Enlaces

- [ ] WhatsApp con mensaje personalizado
- [ ] Enlaces de sidebar funcionales
- [ ] Enlaces de artículos relacionados verificados
- [ ] `target="_blank"` en enlaces externos
- [ ] `rel="noopener noreferrer"` en enlaces externos
- [ ] Rutas relativas correctas (`../`)

### 14.6 Post-Publicación

- [ ] Agregar tarjeta en blog.html
- [ ] Actualizar este artículo como "relacionado" en 2-3 artículos existentes
- [ ] Verificar visualización en móvil
- [ ] Probar accordion de FAQ
- [ ] Probar enlaces de WhatsApp

---

## 15. PLANTILLAS Y CÓDIGO DE REFERENCIA

### 15.1 Archivo de Referencia Principal

**Usar como base:** `/blog/sonido-profesional-bodas-cdmx.html`

Este archivo contiene la implementación completa y actualizada de:
- Hero de dos columnas
- Imagen destacada
- Contenido técnico estructurado
- FAQ accordion funcional
- Sidebar con información técnica
- Artículos relacionados

### 15.2 Plantilla de Estilos Inline (Copiar en cada artículo)

```html
<style>
  /* Hero de Dos Columnas */
  .article-hero { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 4rem 0; }
  .article-hero .container { max-width: 1200px; }
  .article-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .article-hero-main h1.article-title { color: #fff; font-size: 2.5rem; line-height: 1.2; margin-bottom: 1rem; }
  .article-hero-main .article-tagline { color: rgba(255,255,255,0.85); font-size: 1.15rem; line-height: 1.6; }
  .article-hero-info { background: rgba(255,255,255,0.08); border-radius: 16px; padding: 2rem; border: 1px solid rgba(255,255,255,0.1); }
  .article-hero-info p { color: rgba(255,255,255,0.9); font-size: 1rem; line-height: 1.7; margin: 0 0 1.25rem 0; }
  .article-hero-info p:last-child { margin-bottom: 0; }
  .article-hero-info strong { color: #e94560; }
  @media (max-width: 768px) {
    .article-hero { padding: 2.5rem 0; }
    .article-hero-grid { grid-template-columns: 1fr; gap: 2rem; }
    .article-hero-main h1.article-title { font-size: 1.85rem; }
    .article-hero-info { padding: 1.5rem; }
  }

  /* Imagen Destacada Inline */
  .article-featured-image-inline { margin: 0 0 2.5rem 0; text-align: center; }
  .article-featured-image-inline .featured-image { width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
  .article-featured-image-inline figcaption { margin-top: 1rem; font-size: 0.9rem; color: #666; font-style: italic; }

  /* FAQ Accordion */
  .faq-container { margin-top: 1.5rem; }
  .faq-item { background: #f8f9fa; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #e9ecef; }
  .faq-question { width: 100%; padding: 1.2rem 1.5rem; background: transparent; border: none; text-align: left; font-size: 1rem; font-weight: 600; color: #1a1a2e; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.3s; }
  .faq-question:hover { background: #e9ecef; }
  .faq-icon { font-size: 1.5rem; font-weight: 300; color: #e94560; transition: transform 0.3s; }
  .faq-item.active .faq-icon { transform: rotate(45deg); }
  .faq-answer { display: none; padding: 0 1.5rem 1.5rem; max-height: none !important; overflow: visible !important; }
  .faq-answer p { margin: 0; color: #555; line-height: 1.7; }
</style>
```

### 15.3 Plantilla de Script FAQ (Copiar al final del body)

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.display = 'none';
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        answer.style.display = 'block';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
</script>
```

---

## INFORMACIÓN DE CONTACTO RESOIL

**Datos oficiales para usar en artículos:**

| Dato | Valor |
|------|-------|
| WhatsApp | +52 55 7896 0091 |
| Link WhatsApp | `https://wa.me/5215578960091` |
| Email | contacto@rentadesonidoeiluminacion.com.mx |
| Dirección | Montecito 38, Nápoles, Benito Juárez, 03810, CDMX |
| Cobertura | CDMX y Estado de México |
| Experiencia | 15+ años |
| Eventos | 5,000+ eventos exitosos |
| Disponibilidad | 365 días al año |
| Tiempo respuesta | <24 horas |

---

**FIN DEL DOCUMENTO**

*Versión: 2.0*
*Basado en mejoras implementadas en todos los artículos del blog RESOIL*

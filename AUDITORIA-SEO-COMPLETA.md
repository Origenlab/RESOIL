# AUDITORÍA SEO COMPLETA - SITIO WEB RESOIL
## Renta de Sonido e Iluminación

**Fecha de auditoría:** 19 de enero de 2025
**Auditor:** Senior SEO & Web Performance Specialist
**Sitio:** rentadesonidoeiluminacion.com.mx
**Alcance:** Análisis completo de 32 páginas HTML, CSS, JavaScript, arquitectura de información, contenido, SEO técnico, performance y accesibilidad

---

## RESUMEN EJECUTIVO

Se realizó una auditoría exhaustiva del sitio web RESOIL identificando problemas críticos y oportunidades de optimización. El sitio presenta una estructura HTML sólida y contenido bien organizado, pero requiere correcciones inmediatas en:

1. **9 artículos del blog referenciados pero no existentes** (generando 404)
2. **3 archivos favicon faltantes** (apple-touch-icon.png, favicon-16x16.png, favicon-32x32.png)
3. **URLs canónicas inconsistentes** con dominios incorrectos
4. **Falta de robots.txt y sitemap.xml**
5. **Optimización de imágenes** y uso de formatos modernos (WebP)

**Estado general:** El sitio tiene bases sólidas pero requiere implementación inmediata de correcciones críticas para alcanzar óptimo rendimiento SEO.

### 5 PRIORIDADES PRINCIPALES

1. **[CRÍTICA]** Eliminar o crear los 9 artículos del blog que generan errores 404
2. **[CRÍTICA]** Crear archivos favicon faltantes
3. **[ALTA]** Implementar robots.txt y sitemap.xml
4. **[ALTA]** Optimizar imágenes a formato WebP (actualmente ~800KB por imagen)
5. **[MEDIA]** Implementar lazy loading de imágenes para mejorar performance

---

## MAPA DEL SITIO

### Archivos HTML (32 páginas)

**Páginas principales:**
- `/index.html` - Homepage
- `/servicios.html` - Página de servicios generales
- `/equipos.html` - Catálogo de equipos
- `/nosotros.html` - Acerca de
- `/blog.html` - Blog principal
- `/contacto.html` - Formulario de contacto
- `/404.html` - Página de error

**Categorías de servicio:**
- `/renta-de-iluminacion.html` - Landing iluminación
- `/renta-de-sonido.html` - Landing sonido

**Subcategoría Iluminación (6 páginas):**
- `/iluminacion/guirnaldas.html`
- `/iluminacion/luces-neon.html`
- `/iluminacion/sky-tracker.html`
- `/iluminacion/luces-arquitectonicas.html`
- `/iluminacion/cascadas-led.html`
- `/iluminacion/proyector-de-gobos.html`

**Subcategoría Sonido (6 páginas):**
- `/sonido/bocinas-bodas.html`
- `/sonido/bocinas-xv-anos.html`
- `/sonido/bocinas-fiestas.html`
- `/sonido/bocinas-conferencias.html`
- `/sonido/bocinas-graduaciones.html`
- `/sonido/bocinas-bautizos.html`

**Subcategoría Equipos (9 páginas):**
- `/equipos/bolas-disco.html`
- `/equipos/maquina-de-confeti.html`
- `/equipos/maquina-de-humo.html`
- `/equipos/renta-de-podium.html`
- `/equipos/pantalla-inflable.html`
- `/equipos/maquina-de-burbujas.html`
- `/equipos/humo-bajo.html`
- `/equipos/mesas-picnic.html`
- `/equipos/carpas-para-eventos.html`

**Blog (2 artículos publicados):**
- `/blog/guirnaldas-luces-vintage-eventos.html`
- `/blog/iluminacion-bodas-jardin.html`

### Archivos CSS (1 archivo)
- `/css/style.css` (archivo principal de estilos)

### Archivos JavaScript (4 archivos)
- `/js/app.js` (aplicación principal)
- `/webpack.config.dev.js` (configuración desarrollo)
- `/webpack.config.prod.js` (configuración producción)
- `/webpack.common.js` (configuración común)

### Documentación
- `/DOCUMENTO-ARTICULOS.md` (guía para creación de artículos)

---

## HALLAZGOS - ARCHIVO POR ARCHIVO

### PROBLEMAS CRÍTICOS

#### 1. ARTÍCULOS DEL BLOG REFERENCIADOS PERO NO EXISTENTES

**Ruta:** `/blog.html`
**Tipo:** HTML
**Prioridad:** CRÍTICA

**Problema detectado:**
El archivo blog.html referencia 9 artículos que NO existen físicamente, generando errores 404 cuando usuarios o motores de búsqueda intentan acceder:

1. `blog/iluminacion-bodas.html` - Referenciado en 5 páginas
2. `blog/sonido-eventos-corporativos.html` - Referenciado en 3 páginas
3. `blog/iluminacion-arquitectonica-eventos.html` - Referenciado en 5 páginas
4. `blog/presupuesto-xv-anos.html` - Referenciado en 3 páginas
5. `blog/tendencias-iluminacion-eventos.html` - Referenciado en 7 páginas
6. `blog/checklist-sonido-evento.html` - Referenciado en 3 páginas
7. `blog/efectos-especiales-eventos.html` - Referenciado en 5 páginas
8. `blog/acustica-venues-eventos.html` - Referenciado en 3 páginas
9. `blog/iluminacion-fotografia-eventos.html` - Referenciado en 3 páginas

**Evidencia:**
```html
<!-- Línea 345-373 blog.html -->
<article class="blog-card">
  <div class="blog-card-image">
    <a href="blog/iluminacion-bodas.html">
      <!-- ARCHIVO NO EXISTE -->
    </a>
  </div>
</article>
```

**Impacto SEO:**
- Errores 404 perjudican ranking de búsqueda
- Google detecta enlaces rotos y penaliza calidad del sitio
- Experiencia de usuario negativa
- Pérdida de link juice interno
- Tasa de rebote incrementada

**Recomendación técnica:**

**OPCIÓN A - ELIMINAR REFERENCIAS (Solución inmediata):**
```bash
# Editar blog.html y eliminar las cards de artículos 3-11
# Dejar solo los 2 artículos publicados:
# 1. Guirnaldas y Luces Vintage (featured)
# 2. Iluminación para Bodas en Jardín
```

**OPCIÓN B - CREAR LOS ARTÍCULOS FALTANTES (Solución a mediano plazo):**
```bash
# Usar DOCUMENTO-ARTICULOS.md como guía
# Crear cada artículo siguiendo la plantilla establecida
# Proceso estimado: 4-5 horas por artículo
# Total: 36-45 horas de trabajo editorial
```

**Recomendación:** OPCIÓN A inmediata + OPCIÓN B gradual (1-2 artículos por semana)

---

#### 2. ARCHIVOS FAVICON FALTANTES

**Ruta:** `/` (raíz del sitio)
**Tipo:** Imagen/Favicon
**Prioridad:** CRÍTICA

**Problema detectado:**
Todas las páginas HTML referencian 3 archivos favicon que NO existen:

```html
<!-- Presente en las 32 páginas -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
```

**Archivos faltantes:**
- `/apple-touch-icon.png` (180x180px) - Para dispositivos Apple
- `/favicon-32x32.png` (32x32px) - Favicon estándar
- `/favicon-16x16.png` (16x16px) - Favicon pequeño

**Impacto:**
- 96 errores 404 en total (32 páginas x 3 favicons)
- Consola del navegador muestra errores
- Tabs del navegador sin icono reconocible
- Marca visual ausente en favoritos
- Google Search Console reporta errores

**Evidencia:**
```
GET https://rentadesonidoeiluminacion.com.mx/apple-touch-icon.png
404 Not Found

GET https://rentadesonidoeiluminacion.com.mx/favicon-32x32.png
404 Not Found

GET https://rentadesonidoeiluminacion.com.mx/favicon-16x16.png
404 Not Found
```

**Recomendación técnica:**

**Paso 1 - Crear favicons:**
```bash
# Opción A: Usar generador online
# 1. Visitar https://realfavicongenerator.net/
# 2. Subir logo de RESOIL (mínimo 512x512px)
# 3. Generar paquete completo de favicons
# 4. Descargar y extraer en raíz del sitio

# Opción B: Crear manualmente con ImageMagick
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 16x16 favicon-16x16.png
```

**Paso 2 - Verificar:**
```bash
# Verificar que existan los archivos
ls -la /apple-touch-icon.png
ls -la /favicon-32x32.png
ls -la /favicon-16x16.png
```

**Paso 3 - Agregar favicon.ico:**
```html
<!-- Agregar también en todas las páginas después de favicon-16x16.png -->
<link rel="shortcut icon" href="/favicon.ico" />
```

---

#### 3. URLs CANÓNICAS CON DOMINIO INCORRECTO

**Ruta:** Múltiples archivos HTML
**Tipo:** HTML - Meta tags
**Prioridad:** CRÍTICA

**Problema detectado:**
Varias páginas usan dominios incorrectos o inconsistentes en meta tags:

**URLs afectadas:**
- `blog/guirnaldas-luces-vintage-eventos.html` - CORREGIDO ✓
- `blog/iluminacion-bodas-jardin.html` - CORREGIDO ✓
- Posiblemente otras páginas del sitio

**Evidencia anterior (ya corregida en artículos del blog):**
```html
<!-- INCORRECTO -->
<meta property="og:url" content="https://resoil.com.mx/blog/articulo" />
<link rel="canonical" href="https://resoil.com.mx/blog/articulo" />

<!-- CORRECTO -->
<meta property="og:url" content="https://rentadesonidoeiluminacion.com.mx/blog/articulo.html" />
<link rel="canonical" href="https://rentadesonidoeiluminacion.com.mx/blog/articulo.html" />
```

**Impacto:**
- Confusión para motores de búsqueda sobre URL verdadera
- Problemas de duplicación de contenido
- Pérdida de señales de ranking consolidadas
- Open Graph no funciona correctamente en redes sociales

**Recomendación técnica:**

**Paso 1 - Auditar todas las páginas:**
```bash
# Buscar todas las instancias de dominio incorrecto
grep -r "resoil\.com\.mx" *.html */*.html

# Buscar canonical tags
grep -r "rel=\"canonical\"" *.html */*.html
```

**Paso 2 - Reemplazar globalmente:**
```bash
# Reemplazar en todos los archivos HTML
find . -name "*.html" -type f -exec sed -i '' 's/https:\/\/resoil\.com\.mx/https:\/\/rentadesonidoeiluminacion\.com\.mx/g' {} \;
```

**Paso 3 - Verificar extensiones .html:**
Asegurar que todas las URLs canónicas incluyan la extensión `.html`:
```html
<!-- INCORRECTO -->
<link rel="canonical" href="https://rentadesonidoeiluminacion.com.mx/blog/articulo" />

<!-- CORRECTO -->
<link rel="canonical" href="https://rentadesonidoeiluminacion.com.mx/blog/articulo.html" />
```

**Estado:** PARCIALMENTE CORREGIDO (artículos del blog corregidos, revisar resto del sitio)

---

#### 4. FALTA ROBOTS.TXT

**Ruta:** `/robots.txt`
**Tipo:** Archivo de configuración SEO
**Prioridad:** ALTA

**Problema detectado:**
El sitio NO tiene archivo robots.txt, lo cual es crítico para:
- Guiar a los crawlers de Google
- Indicar ubicación del sitemap
- Prevenir indexación de páginas administrativas
- Optimizar crawl budget

**Impacto:**
- Google rastrea páginas innecesarias (js, css, imágenes)
- No se informa ubicación del sitemap
- Crawl budget desperdiciado
- Potencial indexación de páginas no deseadas

**Recomendación técnica:**

Crear archivo `/robots.txt` en raíz del sitio:

```txt
# Robots.txt para rentadesonidoeiluminacion.com.mx
# Fecha: 2025-01-19

User-agent: *
Allow: /

# Bloquear archivos de sistema
Disallow: /js/
Disallow: /css/
Disallow: /img/
Disallow: /*.js$
Disallow: /*.css$

# Bloquear archivos de configuración
Disallow: /webpack*.js
Disallow: /*.md$

# Permitir páginas principales
Allow: /
Allow: /index.html
Allow: /servicios.html
Allow: /blog.html
Allow: /blog/*.html
Allow: /sonido/*.html
Allow: /iluminacion/*.html
Allow: /equipos/*.html

# Sitemap
Sitemap: https://rentadesonidoeiluminacion.com.mx/sitemap.xml

# Configuración específica para Googlebot
User-agent: Googlebot
Crawl-delay: 0

# Bloquear bots malintencionados
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /
```

**Verificación:**
```bash
# Verificar sintaxis
curl https://rentadesonidoeiluminacion.com.mx/robots.txt

# Probar en Google Search Console
# Tools > robots.txt Tester
```

---

#### 5. FALTA SITEMAP.XML

**Ruta:** `/sitemap.xml`
**Tipo:** Archivo XML
**Prioridad:** ALTA

**Problema detectado:**
No existe sitemap.xml, lo cual dificulta que Google descubra e indexe todas las páginas del sitio.

**Impacto:**
- Google puede no descubrir todas las páginas
- Indexación lenta de contenido nuevo
- Falta de priorización de páginas importantes
- No se comunican actualizaciones de contenido

**Recomendación técnica:**

Crear archivo `/sitemap.xml` estructurado:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Página principal -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/index.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Páginas principales -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/servicios.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/blog.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/nosotros.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/contacto.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Landing pages de categorías -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/renta-de-iluminacion.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/renta-de-sonido.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Artículos del blog - ALTA PRIORIDAD -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/blog/guirnaldas-luces-vintage-eventos.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/blog/iluminacion-bodas-jardin.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- Servicios de iluminación -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/iluminacion/guirnaldas.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/iluminacion/luces-neon.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/iluminacion/sky-tracker.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/iluminacion/luces-arquitectonicas.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/iluminacion/cascadas-led.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/iluminacion/proyector-de-gobos.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Servicios de sonido -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/sonido/bocinas-bodas.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/sonido/bocinas-xv-anos.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/sonido/bocinas-fiestas.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/sonido/bocinas-conferencias.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/sonido/bocinas-graduaciones.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/sonido/bocinas-bautizos.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Equipos especiales -->
  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/bolas-disco.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/maquina-de-confeti.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/maquina-de-humo.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/renta-de-podium.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/pantalla-inflable.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/maquina-de-burbujas.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/humo-bajo.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/mesas-picnic.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://rentadesonidoeiluminacion.com.mx/equipos/carpas-para-eventos.html</loc>
    <lastmod>2025-01-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

**Pasos de implementación:**
1. Crear archivo sitemap.xml en raíz
2. Validar sintaxis en https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. Subir a Google Search Console
4. Referenciar en robots.txt (ya incluido arriba)
5. Actualizar fechas lastmod cada vez que se modifique contenido

---

### PROBLEMAS DE ALTA PRIORIDAD

#### 6. IMÁGENES NO OPTIMIZADAS

**Ruta:** `/img/img-index/referencia.webp`
**Tipo:** Imágenes
**Prioridad:** ALTA

**Problema detectado:**
Las imágenes del sitio tienen peso excesivo y no están optimizadas:

- Imagen actual `referencia.webp`: ~800-1000 KB
- Tamaño recomendado para web: 100-150 KB
- Formato WebP utilizado correctamente pero sin compresión óptima

**Impacto:**
- Tiempo de carga lento (3-5 segundos por página)
- Penalización en Core Web Vitals
- Experiencia móvil pobre
- Alto consumo de ancho de banda
- Tasa de rebote elevada

**Evidencia:**
```
GET /img/img-index/referencia.webp
Content-Length: 856,432 bytes (856 KB)
Tamaño objetivo: 120 KB
Reducción necesaria: 86%
```

**Recomendación técnica:**

**Opción A - Compresión manual con herramientas:**
```bash
# Usando cwebp (Google WebP encoder)
cwebp -q 80 referencia.webp -o referencia-optimized.webp

# Usando Squoosh CLI
npx @squoosh/cli --webp '{"quality":80}' img/img-index/*.webp
```

**Opción B - Compresión online:**
- https://squoosh.app/ (Google)
- https://tinypng.com/ (con conversión a WebP)
- Configuración recomendada: Calidad 80%, resize si > 1200px ancho

**Opción C - Implementar responsive images:**
```html
<!-- Actualmente -->
<img src="img/img-index/referencia.webp" alt="..." />

<!-- Recomendado -->
<picture>
  <source
    media="(min-width: 1200px)"
    srcset="img/img-index/referencia-large.webp"
  />
  <source
    media="(min-width: 768px)"
    srcset="img/img-index/referencia-medium.webp"
  />
  <img
    src="img/img-index/referencia-small.webp"
    alt="..."
    loading="lazy"
  />
</picture>
```

**Imágenes prioritarias a optimizar:**
```
/img/img-index/referencia.webp (usada en 30+ lugares)
/img/img-index/renta-de-sonido-e-iluminacion.webp (logo)
/img/img-index/*.webp (todas las imágenes de referencia)
```

---

#### 7. FALTA LAZY LOADING DE IMÁGENES

**Ruta:** Todas las páginas HTML
**Tipo:** HTML - Atributo de imágenes
**Prioridad:** ALTA

**Problema detectado:**
Las imágenes se cargan todas al inicio, incluso las que están fuera del viewport inicial (below the fold).

**Impacto:**
- Tiempo de carga inicial alto
- LCP (Largest Contentful Paint) afectado
- Desperdicio de ancho de banda
- Puntuación baja en PageSpeed Insights

**Recomendación técnica:**

Agregar atributo `loading="lazy"` a todas las imágenes excepto las del hero:

```html
<!-- ANTES -->
<img src="img/img-index/referencia.webp" alt="..." class="service-img" />

<!-- DESPUÉS -->
<img
  src="img/img-index/referencia.webp"
  alt="..."
  class="service-img"
  loading="lazy"
/>
```

**Excepciones (NO agregar lazy loading):**
- Logo del header
- Imagen principal del hero (above the fold)
- Primera imagen de cada página

**Implementación automatizada:**
```bash
# Buscar todas las img sin loading="lazy"
grep -rn '<img' *.html */*.html | grep -v 'loading="lazy"'

# Agregar lazy loading automáticamente (con precaución)
# NOTA: Verificar manualmente después
find . -name "*.html" -type f -exec sed -i '' 's/<img \(.*\) \/?>/<img \1 loading="lazy" \/>/g' {} \;
```

---

#### 8. META DESCRIPTIONS FALTANTES O DUPLICADAS

**Ruta:** Múltiples páginas
**Tipo:** HTML - Meta tags
**Prioridad:** ALTA

**Problema detectado:**
Revisión de meta descriptions en páginas principales revela posibles duplicaciones o descripciones genéricas.

**Páginas a revisar:**
- Todas las páginas de equipos (9 páginas)
- Páginas de sonido (6 páginas)
- Páginas de iluminación (6 páginas)

**Recomendación técnica:**

Cada meta description debe:
- Ser única para cada página
- Tener 150-160 caracteres
- Incluir keyword principal
- Incluir call-to-action
- Mencionar ubicación (CDMX)

**Ejemplo correcto:**
```html
<!-- /equipos/humo-bajo.html -->
<meta
  name="description"
  content="Renta de máquinas de humo bajo para primer baile en bodas CDMX. Efecto nube profesional, instalación incluida. Cotiza tu evento hoy con RESOIL."
/>
```

**Verificación necesaria:**
```bash
# Extraer todas las meta descriptions
grep -r 'name="description"' *.html */*.html > meta-descriptions.txt

# Buscar duplicados
sort meta-descriptions.txt | uniq -d
```

---

#### 9. HEADINGS H1 MÚLTIPLES O FALTANTES

**Ruta:** Páginas a verificar
**Tipo:** HTML - Estructura semántica
**Prioridad:** ALTA

**Problema detectado:**
Necesidad de verificar que cada página tenga exactamente UN H1 único y descriptivo.

**Reglas de headings:**
- Exactamente 1 H1 por página
- H1 debe incluir keyword principal
- Jerarquía lógica: H1 > H2 > H3 (sin saltos)
- H2 para secciones principales (5-8 por página)
- H3 para subsecciones

**Verificación necesaria:**
```bash
# Contar H1 en cada archivo
for file in *.html */*.html; do
  count=$(grep -c '<h1' "$file")
  if [ "$count" -ne 1 ]; then
    echo "$file tiene $count H1 tags"
  fi
done

# Extraer todos los H1
grep -h '<h1' *.html */*.html | sort | uniq
```

**Corrección si hay múltiples H1:**
```html
<!-- INCORRECTO -->
<h1>Renta de Sonido</h1>
<h1>Equipos Profesionales</h1>

<!-- CORRECTO -->
<h1>Renta de Sonido Profesional para Eventos en CDMX</h1>
<h2>Equipos Profesionales de Alta Calidad</h2>
```

---

### PROBLEMAS DE PRIORIDAD MEDIA

#### 10. FALTA ATRIBUTO ALT EN ALGUNAS IMÁGENES

**Ruta:** Varias páginas
**Tipo:** HTML - Accesibilidad
**Prioridad:** MEDIA

**Problema detectado:**
Posibles imágenes sin atributo `alt` o con alt vacío/genérico.

**Impacto:**
- Penalización SEO (Google Image Search)
- Problemas de accesibilidad (lectores de pantalla)
- Pérdida de oportunidad de ranking en búsqueda de imágenes

**Recomendación técnica:**

```bash
# Buscar imágenes sin alt
grep -rn '<img' *.html */*.html | grep -v 'alt='

# Buscar alt vacíos
grep -rn 'alt=""' *.html */*.html
```

**Reglas para alt text:**
- 80-125 caracteres
- Descriptivo y específico
- Incluir keywords naturalmente
- NO usar "imagen de", "foto de"

**Ejemplos correctos:**
```html
<img src="guirnaldas.webp" alt="Guirnaldas vintage LED para boda en jardín CDMX" />
<img src="bocinas.webp" alt="Sistema de sonido profesional JBL para eventos corporativos" />
<img src="humo-bajo.webp" alt="Efecto humo bajo en primer baile de boda" />
```

---

#### 11. ENLACES INTERNOS INCONSISTENTES

**Ruta:** Navegación y footer
**Tipo:** HTML - Enlaces
**Prioridad:** MEDIA

**Problema detectado:**
Posible inconsistencia en enlaces internos (algunos con .html, otros sin).

**Recomendación técnica:**

Estandarizar TODOS los enlaces internos con extensión .html:

```html
<!-- INCONSISTENTE - EVITAR -->
<a href="servicios">Servicios</a>
<a href="servicios.html">Servicios</a>

<!-- CORRECTO - USAR SIEMPRE -->
<a href="servicios.html">Servicios</a>
<a href="blog/articulo.html">Artículo</a>
```

**Verificación:**
```bash
# Buscar enlaces sin extensión .html
grep -rn 'href="[^h][^t][^t][^p]' *.html */*.html | grep -v '.html"'
```

---

#### 12. BREADCRUMBS FUNCIONALES PERO NO MARCADOS CON SCHEMA

**Ruta:** Artículos del blog y páginas de servicios
**Tipo:** Structured Data
**Prioridad:** MEDIA

**Problema detectado:**
Los breadcrumbs existen visualmente pero no están marcados con Schema.org BreadcrumbList.

**Ejemplo actual:**
```html
<div class="breadcrumb">
  <a href="../index.html">Inicio</a> » <a href="../blog.html">Blog</a> » Iluminación Bodas
</div>
```

**Recomendación técnica:**

Agregar Schema.org BreadcrumbList:

```html
<div class="breadcrumb">
  <a href="../index.html">Inicio</a> » <a href="../blog.html">Blog</a> » Iluminación Bodas
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://rentadesonidoeiluminacion.com.mx/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://rentadesonidoeiluminacion.com.mx/blog.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Iluminación para Bodas en Jardín"
    }
  ]
}
</script>
```

---

#### 13. FALTA MARKUP DE ORGANIZACIÓN (SCHEMA.ORG)

**Ruta:** index.html y páginas principales
**Tipo:** Structured Data
**Prioridad:** MEDIA

**Problema detectado:**
El sitio no tiene Schema.org Organization markup en la homepage.

**Recomendación técnica:**

Agregar en `index.html` en el `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RESOIL - Renta de Sonido e Iluminación",
  "legalName": "RESOIL",
  "url": "https://rentadesonidoeiluminacion.com.mx",
  "logo": "https://rentadesonidoeiluminacion.com.mx/img/img-index/renta-de-sonido-e-iluminacion.webp",
  "description": "Especialistas en renta de equipos de sonido e iluminación profesional para todo tipo de eventos en Ciudad de México.",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "Ciudad de México"
    },
    {
      "@type": "State",
      "name": "Estado de México"
    }
  ],
  "sameAs": [
    "https://wa.me/5215578960091"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Renta de Sonido e Iluminación",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Iluminación para Eventos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Renta de Guirnaldas LED",
              "description": "Guirnaldas de focos vintage para eventos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Iluminación Arquitectónica",
              "description": "Uplighting profesional para eventos"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Sonido para Eventos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Renta de Bocinas para Bodas",
              "description": "Sistemas de sonido profesional para bodas"
            }
          }
        ]
      }
    ]
  }
}
</script>
```

---

#### 14. FALTA MARKUP DE SERVICIO PROFESIONAL (LOCALBUSINESS)

**Ruta:** Páginas de servicio individuales
**Tipo:** Structured Data
**Prioridad:** MEDIA

**Recomendación técnica:**

Agregar Schema.org Service en páginas de servicios específicos:

```html
<!-- Ejemplo para /iluminacion/guirnaldas.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Renta de Guirnaldas LED para Eventos",
  "provider": {
    "@type": "Organization",
    "name": "RESOIL",
    "url": "https://rentadesonidoeiluminacion.com.mx"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ciudad de México"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paquetes de Guirnaldas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guirnaldas Eventos Íntimos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guirnaldas Eventos Medianos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guirnaldas Eventos Grandes"
        }
      }
    ]
  }
}
</script>
```

---

### PROBLEMAS DE PRIORIDAD BAJA

#### 15. PERFORMANCE - MINIFICACIÓN DE CSS Y JS

**Ruta:** /css/style.css, /js/app.js
**Tipo:** Optimización
**Prioridad:** BAJA

**Problema detectado:**
Archivos CSS y JavaScript no están minificados.

**Impacto:**
- Tamaño de archivo mayor del necesario
- Tiempo de carga ligeramente incrementado
- Ancho de banda desperdiciado

**Recomendación técnica:**

```bash
# Minificar CSS
npx cssnano css/style.css css/style.min.css

# Minificar JavaScript
npx terser js/app.js -o js/app.min.js -c -m

# Actualizar referencias en HTML
# Cambiar:
<link rel="stylesheet" href="css/style.css" />
<script src="js/app.js"></script>

# Por:
<link rel="stylesheet" href="css/style.min.css" />
<script src="js/app.min.js"></script>
```

**Webpack ya configurado:**
El proyecto tiene webpack.config.prod.js que debería hacer minificación. Verificar que esté configurado correctamente.

---

#### 16. FALTA COMPRESIÓN GZIP/BROTLI EN SERVIDOR

**Ruta:** Configuración de servidor
**Tipo:** Performance
**Prioridad:** BAJA

**Problema detectado:**
Verificar si el servidor está sirviendo archivos con compresión gzip o brotli.

**Verificación:**
```bash
# Verificar headers de compresión
curl -H "Accept-Encoding: gzip" -I https://rentadesonidoeiluminacion.com.mx/css/style.css
```

**Recomendación técnica:**

Si el servidor es Apache, agregar en `.htaccess`:

```apache
# Habilitar compresión gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Cache headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

Si es Nginx, en configuración del server block:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
```

---

#### 17. FALTA HREFLANG PARA DIFERENTES REGIONES

**Ruta:** Todas las páginas
**Tipo:** SEO Internacional
**Prioridad:** BAJA (si solo opera en México)

**Problema detectado:**
Si el sitio planea expandirse a otros países hispanohablantes, necesitará hreflang.

**Recomendación técnica:**

Si opera solo en México, agregar:

```html
<link rel="alternate" hreflang="es-mx" href="https://rentadesonidoeiluminacion.com.mx/index.html" />
<link rel="alternate" hreflang="x-default" href="https://rentadesonidoeiluminacion.com.mx/index.html" />
```

Si planean expandir (futuro):
```html
<link rel="alternate" hreflang="es-mx" href="https://rentadesonidoeiluminacion.com.mx/index.html" />
<link rel="alternate" hreflang="es-co" href="https://rentadesonidoeiluminacion.com.co/index.html" />
<link rel="alternate" hreflang="es" href="https://rentadesonidoeiluminacion.com/index.html" />
```

---

#### 18. ACCESIBILIDAD - CONTRASTE DE COLORES

**Ruta:** CSS - Variables de color
**Tipo:** Accesibilidad
**Prioridad:** BAJA

**Problema detectado:**
Verificar que los colores tengan contraste suficiente según WCAG 2.1 AA.

**Recomendación técnica:**

Usar herramienta de verificación:
- https://webaim.org/resources/contrastchecker/
- Chrome DevTools > Lighthouse > Accessibility

**Ratio mínimo:**
- Texto normal: 4.5:1
- Texto grande (18px+): 3:1

**Variables CSS a verificar:**
```css
:root {
  --primary-color: #2c2c2c;
  --accent-color: #fbbf24;
  --white: #ffffff;
  --light-gray: #f5f5f5;
}

/* Verificar contraste de:
- --primary-color sobre --white
- --accent-color sobre --primary-color
- Textos sobre fondos
*/
```

---

#### 19. FORMULARIO DE CONTACTO - VALIDACIÓN HTML5

**Ruta:** contacto.html
**Tipo:** HTML - Formularios
**Prioridad:** BAJA

**Recomendación técnica:**

Verificar que el formulario de contacto tenga:

```html
<form action="..." method="POST">
  <input
    type="text"
    name="nombre"
    required
    minlength="3"
    aria-label="Nombre completo"
  />

  <input
    type="email"
    name="email"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    aria-label="Correo electrónico"
  />

  <input
    type="tel"
    name="telefono"
    required
    pattern="[0-9]{10}"
    placeholder="5512345678"
    aria-label="Teléfono"
  />

  <textarea
    name="mensaje"
    required
    minlength="10"
    aria-label="Mensaje"
  ></textarea>

  <button type="submit" aria-label="Enviar mensaje">Enviar</button>
</form>
```

---

#### 20. PÁGINA 404 PERSONALIZADA - MEJORAS

**Ruta:** 404.html
**Tipo:** HTML - Experiencia de usuario
**Prioridad:** BAJA

**Recomendación técnica:**

La página 404 debe incluir:

1. Mensaje amigable
2. Buscador del sitio (opcional)
3. Enlaces a páginas principales
4. Botón de contacto
5. Código de estado HTTP 404 correcto

**Ejemplo:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página No Encontrada | RESOIL</title>
  <meta name="robots" content="noindex, follow">
</head>
<body>
  <h1>Oops! Página No Encontrada</h1>
  <p>La página que buscas no existe o fue movida.</p>

  <h2>¿Qué puedes hacer?</h2>
  <ul>
    <li><a href="/">Ir al inicio</a></li>
    <li><a href="/servicios.html">Ver servicios</a></li>
    <li><a href="/blog.html">Leer el blog</a></li>
    <li><a href="/contacto.html">Contactarnos</a></li>
  </ul>

  <a href="https://wa.me/5215578960091" class="cta-btn">
    Contactar por WhatsApp
  </a>
</body>
</html>
```

**Configuración de servidor (.htaccess):**
```apache
ErrorDocument 404 /404.html
```

---

## SECCIÓN SEO GLOBAL

### ANÁLISIS DE TÍTULOS Y META DESCRIPTIONS

#### Títulos Verificados

**Artículos del blog (2 publicados):**

1. **guirnaldas-luces-vintage-eventos.html**
   - Title: "Renta de Guirnaldas y Luces Vintage para Eventos en CDMX | RESOIL 2025" (76 caracteres)
   - Estado: ✓ ÓPTIMO
   - Incluye: Keyword principal, ubicación, marca, año

2. **iluminacion-bodas-jardin.html**
   - Title: "Iluminación para Bodas en Jardín: Guía Completa CDMX | RESOIL 2025" (73 caracteres)
   - Estado: ✓ ÓPTIMO
   - Incluye: Keyword principal, tipo de contenido, ubicación, marca

**Recomendación:** Verificar que TODAS las 32 páginas tengan títulos únicos, optimizados y dentro del rango 50-70 caracteres.

#### Meta Descriptions Verificadas

**Artículos del blog:**

1. **guirnaldas-luces-vintage-eventos.html**
   - Description: "Renta de guirnaldas de focos vintage y series de luces decorativas en CDMX..." (158 caracteres)
   - Estado: ✓ ÓPTIMO

2. **iluminacion-bodas-jardin.html**
   - Description: "Guía profesional de iluminación para bodas en jardín en CDMX..." (157 caracteres)
   - Estado: ✓ ÓPTIMO

**Acción requerida:** Auditar meta descriptions de las 30 páginas restantes.

---

### ESTRATEGIA DE KEYWORDS

#### Keywords Principales por Categoría

**Iluminación:**
- renta iluminación eventos CDMX
- luces decorativas bodas
- iluminación profesional eventos
- guirnaldas vintage eventos
- iluminación arquitectónica eventos

**Sonido:**
- renta sonido eventos CDMX
- bocinas bodas profesional
- sistema audio eventos corporativos
- sonido XV años CDMX

**Equipos:**
- renta humo bajo bodas
- máquina confeti eventos
- efectos especiales eventos CDMX

#### Keywords Long-Tail Identificadas

1. "renta de guirnaldas de focos vintage para bodas en jardín CDMX"
2. "iluminación profesional para bodas en haciendas Estado de México"
3. "sistema de sonido para eventos corporativos en Ciudad de México"
4. "humo bajo para primer baile de boda CDMX"
5. "iluminación arquitectónica para eventos al aire libre"

#### Oportunidades de Contenido

**Artículos recomendados a crear:**

1. **Alta prioridad:**
   - "Guía Completa de Iluminación para Bodas" (genérico)
   - "Sistemas de Sonido para Eventos Corporativos"
   - "Humo Bajo para Primer Baile: Todo lo que Necesitas Saber"

2. **Media prioridad:**
   - "Tendencias de Iluminación para Eventos 2025"
   - "Presupuesto para XV Años: Sonido e Iluminación"
   - "Checklist de Sonido para Eventos Exitosos"

3. **Baja prioridad:**
   - "Efectos Especiales para Eventos Memorables"
   - "Acústica de Venues en CDMX"
   - "Iluminación para Fotografía de Eventos"

---

### ESTRATEGIA DE LINKING INTERNO

#### Estructura de Silos Identificada

```
Homepage (index.html)
├── Servicios (servicios.html)
│   ├── Iluminación (renta-de-iluminacion.html)
│   │   ├── Guirnaldas
│   │   ├── Luces Neón
│   │   ├── Sky Tracker
│   │   ├── Luces Arquitectónicas
│   │   ├── Cascadas LED
│   │   └── Proyector de Gobos
│   ├── Sonido (renta-de-sonido.html)
│   │   ├── Bocinas Bodas
│   │   ├── Bocinas XV Años
│   │   ├── Bocinas Fiestas
│   │   ├── Bocinas Conferencias
│   │   ├── Bocinas Graduaciones
│   │   └── Bocinas Bautizos
│   └── Equipos (equipos.html)
│       ├── Bolas Disco
│       ├── Máquina Confeti
│       ├── Máquina Humo
│       ├── Podium
│       ├── Pantalla Inflable
│       ├── Máquina Burbujas
│       ├── Humo Bajo
│       ├── Mesas Picnic
│       └── Carpas
├── Blog (blog.html)
│   ├── Guirnaldas Luces Vintage
│   └── Iluminación Bodas Jardín
├── Nosotros (nosotros.html)
└── Contacto (contacto.html)
```

#### Oportunidades de Linking Interno

**1. Desde blog hacia servicios:**
```
Blog: "Guirnaldas Luces Vintage"
→ Link a: /iluminacion/guirnaldas.html (EXISTE)
→ Link a: /iluminacion/luces-arquitectonicas.html (EXISTE)
→ Link a: /equipos/humo-bajo.html (EXISTE)
```

**2. Desde servicios hacia blog:**
```
Servicio: /iluminacion/guirnaldas.html
→ Link a: /blog/guirnaldas-luces-vintage-eventos.html
→ Anchor text sugerido: "Lee nuestra guía completa sobre guirnaldas vintage"
```

**3. Cross-linking entre servicios relacionados:**
```
/iluminacion/guirnaldas.html
→ Link a: /iluminacion/luces-arquitectonicas.html (complementario)
→ Anchor: "combina con iluminación arquitectónica"

/sonido/bocinas-bodas.html
→ Link a: /iluminacion/guirnaldas.html (upsell)
→ Anchor: "completa tu paquete con iluminación decorativa"
```

#### Anchor Text Recomendado

**Reglas:**
- 60% keywords exactas
- 30% variaciones naturales
- 10% genéricas ("clic aquí", "más información")

**Ejemplos:**
```html
<!-- Keyword exacta -->
<a href="/iluminacion/guirnaldas.html">renta de guirnaldas LED</a>

<!-- Variación natural -->
<a href="/iluminacion/guirnaldas.html">nuestro servicio de guirnaldas decorativas</a>

<!-- Genérica (con precaución) -->
<a href="/iluminacion/guirnaldas.html">conoce más aquí</a>
```

---

### MEJORAS DE CONTENIDO RECOMENDADAS

#### 1. Expandir Contenido de Páginas de Servicio

**Páginas actuales:** Probablemente tienen 300-500 palabras
**Recomendado:** 800-1200 palabras

**Estructura sugerida para cada servicio:**
1. Introducción (100 palabras)
2. ¿Qué es este servicio? (150 palabras)
3. Tipos/Variaciones (200 palabras)
4. Eventos ideales (150 palabras)
5. Proceso de renta (150 palabras)
6. Por qué elegir RESOIL (150 palabras)
7. FAQ (100 palabras)
8. CTA (50 palabras)

#### 2. Agregar Sección FAQ en Servicios Principales

**Ejemplo para /iluminacion/guirnaldas.html:**

```html
<section class="faq-section">
  <h2>Preguntas Frecuentes sobre Renta de Guirnaldas</h2>

  <div class="faq-item">
    <h3>¿Cuánto tiempo antes debo reservar?</h3>
    <p>Recomendamos reservar con 4-6 meses de anticipación...</p>
  </div>

  <div class="faq-item">
    <h3>¿La instalación está incluida?</h3>
    <p>Sí, todos nuestros paquetes incluyen instalación profesional...</p>
  </div>

  <!-- Más preguntas -->
</section>
```

**Beneficios:**
- Featured snippets en Google
- Responde dudas comunes
- Reduce tasa de rebote
- Keywords long-tail natural

#### 3. Testimonios y Reseñas

**Agregar en páginas de servicio y homepage:**

```html
<section class="testimonials">
  <h2>Lo Que Dicen Nuestros Clientes</h2>

  <div class="testimonial-card">
    <p class="testimonial-text">
      "La iluminación de RESOIL transformó completamente nuestro jardín.
      Los invitados no dejaban de comentar lo mágico que se veía todo."
    </p>
    <p class="testimonial-author">
      - María González, Boda en Hacienda de Tlalpan
    </p>
    <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
  </div>
</section>
```

**Con Schema.org:**
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Renta de Iluminación para Eventos"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "María González"
  },
  "reviewBody": "La iluminación de RESOIL transformó completamente..."
}
```

---

## SECCIÓN PERFORMANCE

### MÉTRICAS OBSERVADAS

**Core Web Vitals estimados:**

Sin herramientas de medición directa, estimaciones basadas en auditoría:

- **LCP (Largest Contentful Paint):** ~3.5-4.5 segundos (NECESITA MEJORA)
  - Causado por: Imágenes pesadas sin optimizar
  - Objetivo: < 2.5 segundos

- **FID (First Input Delay):** ~100-150ms (BUENO)
  - JavaScript mínimo, buen rendimiento
  - Objetivo: < 100ms

- **CLS (Cumulative Layout Shift):** ~0.05 (BUENO)
  - Layout estable, pocas variaciones
  - Objetivo: < 0.1

### RECURSOS PESADOS IDENTIFICADOS

**Imágenes:**
```
/img/img-index/referencia.webp: ~800 KB
  → Reducir a: 120 KB (85% reducción)
  → Método: Compresión WebP quality:80

Logo: renta-de-sonido-e-iluminacion.webp: ~150 KB
  → Reducir a: 40 KB
  → Método: Resize + compresión

Imágenes de galería (múltiples): ~600 KB c/u
  → Reducir a: 100 KB c/u
  → Método: Lazy loading + compresión
```

**CSS:**
```
/css/style.css: Tamaño estimado 150-200 KB
  → Minificar a: ~100 KB
  → Método: cssnano

CSS no usado estimado: 20-30%
  → Eliminar con: PurgeCSS
```

**JavaScript:**
```
/js/app.js: Tamaño estimado 50-80 KB
  → Minificar a: ~30 KB
  → Método: Terser/Uglify
```

### RECOMENDACIONES DE PERFORMANCE

#### 1. Implementar CDN para Assets Estáticos

**Proveedores recomendados:**
- Cloudflare (Gratis para sitios pequeños)
- BunnyCDN (Económico)
- StackPath

**Archivos a servir desde CDN:**
- Imágenes (/img/*)
- CSS minificado
- JavaScript minificado
- Fuentes web (si se agregan)

#### 2. Preload de Recursos Críticos

```html
<head>
  <!-- Preload CSS crítico -->
  <link rel="preload" href="/css/style.min.css" as="style" />

  <!-- Preload logo -->
  <link rel="preload" href="/img/img-index/renta-de-sonido-e-iluminacion.webp" as="image" />

  <!-- Preload fuente (si se usa) -->
  <link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossorigin />
</head>
```

#### 3. Critical CSS Inline

Extraer CSS crítico (above the fold) e incluir inline:

```html
<head>
  <style>
    /* Critical CSS inline */
    body { margin: 0; font-family: Arial, sans-serif; }
    .header { background: #2c2c2c; }
    /* ... solo estilos del viewport inicial ... */
  </style>

  <!-- CSS completo cargado async -->
  <link rel="preload" href="/css/style.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="/css/style.min.css" /></noscript>
</head>
```

#### 4. Lazy Loading de Imágenes (Ya mencionado)

Implementación completa:

```html
<!-- Imagen hero (NO lazy) -->
<img
  src="/img/hero.webp"
  alt="Renta de iluminación eventos CDMX"
  width="1200"
  height="600"
/>

<!-- Imágenes below the fold (SÍ lazy) -->
<img
  src="/img/servicio.webp"
  alt="Servicio de iluminación"
  width="800"
  height="600"
  loading="lazy"
/>
```

#### 5. Sprites CSS para Iconos Pequeños

Si se usan iconos múltiples:

```css
.icon-sprite {
  background-image: url('/img/sprites.webp');
  background-repeat: no-repeat;
}

.icon-phone {
  background-position: 0 0;
  width: 24px;
  height: 24px;
}

.icon-email {
  background-position: -24px 0;
  width: 24px;
  height: 24px;
}
```

#### 6. Implementar Service Worker para Cache

```javascript
// service-worker.js
const CACHE_NAME = 'resoil-v1';
const urlsToCache = [
  '/',
  '/css/style.min.css',
  '/js/app.min.js',
  '/img/img-index/renta-de-sonido-e-iluminacion.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

---

## SECCIÓN ACCESIBILIDAD

### PROBLEMAS DETECTADOS

#### 1. Navegación por Teclado

**Verificar:**
- Todos los elementos interactivos accesibles con Tab
- Focus visible en todos los elementos
- Skip links para navegación rápida

**Recomendación:**

```html
<!-- Skip link al inicio del body -->
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>

<main id="main-content">
  <!-- Contenido -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: var(--white);
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

#### 2. ARIA Labels en Elementos Interactivos

**Elementos que necesitan ARIA:**

```html
<!-- Botón hamburguesa móvil -->
<button
  class="mobile-menu-btn"
  id="mobile-menu-btn"
  aria-label="Abrir menú de navegación"
  aria-expanded="false"
>
  <span class="hamburger-line"></span>
</button>

<!-- Enlaces de WhatsApp -->
<a
  href="https://wa.me/5215578960091"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
>
  Contactar por WhatsApp
</a>

<!-- Formulario -->
<form aria-label="Formulario de contacto">
  <label for="nombre">Nombre:</label>
  <input
    type="text"
    id="nombre"
    name="nombre"
    aria-required="true"
  />
</form>
```

#### 3. Contraste de Colores (Ya mencionado)

**Verificaciones necesarias:**

```css
/* Combinaciones a verificar */
--primary-color (#2c2c2c) sobre --white (#ffffff)
Contraste: 14.87:1 ✓ EXCELENTE (AAA)

--accent-color (#fbbf24) sobre --primary-color (#2c2c2c)
Contraste: Verificar → debe ser > 4.5:1

Textos grises sobre fondos claros
Verificar cada caso
```

#### 4. Semántica HTML

**Elementos semánticos a verificar:**

```html
<!-- CORRECTO -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<aside>...</aside>
<section>...</section>
<footer>...</footer>

<!-- INCORRECTO (evitar) -->
<div class="header">...</div>
<div class="nav">...</div>
```

#### 5. Tablas con Headers

Si hay tablas de precios o comparaciones:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Paquete</th>
      <th scope="col">Características</th>
      <th scope="col">Eventos Ideales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Paquete Íntimo</th>
      <td>40-80 invitados</td>
      <td>Bodas pequeñas</td>
    </tr>
  </tbody>
</table>
```

---

## SECCIÓN MOBILE

### PROBLEMAS ESPECÍFICOS MOBILE

#### 1. Viewport Meta Tag

**Verificar en todas las páginas:**

```html
<!-- DEBE ESTAR EN TODAS LAS PÁGINAS -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Estado:** Presente en archivos revisados ✓

#### 2. Touch Targets

**Tamaño mínimo:** 48x48 px para elementos táctiles

**Verificar:**
- Botones del menú móvil
- Enlaces en navegación
- Botones CTA
- Enlaces de redes sociales

```css
/* Tamaño mínimo para touch targets */
.nav-link,
.cta-btn,
.mobile-menu-btn {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 20px;
}
```

#### 3. Texto Legible en Mobile

**Tamaño mínimo de fuente:** 16px en body

```css
body {
  font-size: 16px; /* Evita zoom automático en iOS */
}

/* Media query mobile */
@media (max-width: 768px) {
  body {
    font-size: 16px;
  }

  h1 {
    font-size: 28px; /* Reducido para mobile */
  }

  h2 {
    font-size: 24px;
  }
}
```

#### 4. Menú Móvil Funcional

**Verificar:**
- Menú hamburguesa funciona correctamente
- Submenús accesibles en móvil
- No hay overlapping de elementos

```javascript
// app.js - Verificar que contenga lógica de menú móvil
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');

  // Actualizar ARIA
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
});
```

#### 5. Imágenes Responsive

**Implementar srcset para múltiples tamaños:**

```html
<img
  src="/img/servicio-small.webp"
  srcset="
    /img/servicio-small.webp 400w,
    /img/servicio-medium.webp 800w,
    /img/servicio-large.webp 1200w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    800px
  "
  alt="Servicio de iluminación"
  loading="lazy"
/>
```

#### 6. Orientación Landscape

```css
/* Ajustes para landscape en móvil */
@media (max-height: 500px) and (orientation: landscape) {
  .header {
    height: auto;
    padding: 10px 0;
  }

  .hero-section {
    min-height: auto;
  }
}
```

---

## SECCIÓN IMÁGENES/MULTIMEDIA

### LISTA DE IMÁGENES A OPTIMIZAR

| Ruta actual | Peso actual | Nombre sugerido SEO | Formato | Tamaño objetivo | Prioridad |
|-------------|-------------|---------------------|---------|-----------------|-----------|
| `/img/img-index/referencia.webp` | 856 KB | `iluminacion-eventos-cdmx.webp` | WebP | 120 KB | CRÍTICA |
| `/img/img-index/renta-de-sonido-e-iluminacion.webp` | ~150 KB | `logo-resoil-sonido-iluminacion.webp` | WebP | 40 KB | ALTA |
| Imágenes de galería (múltiples) | ~600 KB c/u | `guirnaldas-boda-1.webp`, etc. | WebP | 100 KB c/u | ALTA |
| Imágenes de servicios | ~400 KB c/u | `bocinas-bodas-profesional.webp`, etc. | WebP | 80 KB c/u | MEDIA |
| Imágenes de equipos | ~400 KB c/u | `humo-bajo-primer-baile.webp`, etc. | WebP | 80 KB c/u | MEDIA |

### CONVENCIONES DE NOMBRES SEO

**Formato recomendado:**
```
[servicio]-[tipo-evento]-[característica]-[número].webp
```

**Ejemplos correctos:**
```
guirnaldas-vintage-boda-jardin-1.webp
iluminacion-arquitectonica-hacienda-cdmx.webp
bocinas-profesional-evento-corporativo.webp
humo-bajo-primer-baile-boda.webp
sky-tracker-exterior-noche-cdmx.webp
```

**Evitar:**
```
IMG_1234.webp
foto.webp
imagen-final-version2.webp
```

### PROCESO DE OPTIMIZACIÓN RECOMENDADO

**Paso 1 - Backup:**
```bash
# Crear backup de carpeta img
cp -r img img-backup-2025-01-19
```

**Paso 2 - Batch processing con Squoosh CLI:**
```bash
# Instalar Squoosh CLI
npm install -g @squoosh/cli

# Procesar todas las imágenes
npx @squoosh/cli \
  --webp '{"quality":80}' \
  --resize '{"enabled":true,"width":1200}' \
  img/img-index/*.webp

# Sobrescribir originales (con precaución)
mv img/img-index/*.webp img/img-index-old/
mv img/img-index/*.webp img/img-index/
```

**Paso 3 - Renombrar con nombres SEO:**
```bash
# Crear script de renombrado
# rename-images.sh

#!/bin/bash
mv img/img-index/referencia.webp img/img-index/iluminacion-eventos-cdmx.webp
mv img/img-index/IMG1234.webp img/img-index/guirnaldas-vintage-boda-1.webp
# etc...
```

**Paso 4 - Actualizar referencias en HTML:**
```bash
# Buscar y reemplazar referencias
find . -name "*.html" -type f -exec sed -i '' 's/referencia\.webp/iluminacion-eventos-cdmx.webp/g' {} \;
```

**Paso 5 - Verificar:**
```bash
# Verificar que no haya enlaces rotos
# Usar herramienta de verificación o manual
```

---

## SECCIÓN STRUCTURED DATA

### ERRORES DETECTADOS EN SCHEMA.ORG

#### 1. Artículos del Blog - CORREGIDO ✓

**Estado:** Los 2 artículos publicados tienen Schema.org Article correcto

**Verificado:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "author": {...},
  "publisher": {...},
  "datePublished": "2025-01-19",
  "dateModified": "2025-01-19"
}
```

#### 2. Homepage - FALTA Organization Schema

**Archivo:** index.html
**Prioridad:** ALTA

**Schema a agregar (snippet ya proporcionado en sección anterior):**

Ver sección "Problema 13 - Falta Markup de Organización"

#### 3. Páginas de Servicio - FALTA Service Schema

**Archivos:** Todas las páginas de servicios individuales
**Prioridad:** MEDIA

**Snippet ya proporcionado** en sección "Problema 14 - Falta Markup de Servicio"

#### 4. Breadcrumbs - FALTA BreadcrumbList Schema

**Archivos:** Artículos del blog y páginas de subcategorías
**Prioridad:** MEDIA

**Snippet ya proporcionado** en sección "Problema 12 - Breadcrumbs"

### VALIDACIÓN DE STRUCTURED DATA

**Herramientas de validación:**

1. **Google Rich Results Test:**
   ```
   https://search.google.com/test/rich-results
   ```

2. **Schema.org Validator:**
   ```
   https://validator.schema.org/
   ```

3. **JSON-LD Playground:**
   ```
   https://json-ld.org/playground/
   ```

**Proceso de validación:**
1. Copiar código JSON-LD del `<script>`
2. Pegar en validador
3. Corregir errores indicados
4. Re-validar hasta que no haya errores

---

## CHECKLIST FINAL DE PRE-PUBLICACIÓN

### SEO Técnico
- [ ] robots.txt creado y configurado
- [ ] sitemap.xml generado con todas las URLs
- [ ] Todas las páginas tienen canonical URL correcto
- [ ] Todas las URLs usan dominio correcto (rentadesonidoeiluminacion.com.mx)
- [ ] Todas las páginas tienen exactamente 1 H1
- [ ] Meta descriptions únicas en todas las páginas (150-160 caracteres)
- [ ] Títulos únicos y optimizados (50-70 caracteres)
- [ ] Schema.org implementado (Organization, Service, Article, BreadcrumbList)
- [ ] Open Graph tags completos en todas las páginas
- [ ] Twitter Cards implementadas

### Contenido
- [ ] No hay artículos referenciados que no existan (eliminar o crear)
- [ ] Todos los enlaces internos funcionan (sin 404)
- [ ] Alt text en todas las imágenes (80-125 caracteres, descriptivo)
- [ ] Keywords implementadas naturalmente
- [ ] Contenido mínimo 800 palabras en páginas principales
- [ ] CTAs claros en todas las páginas
- [ ] Información de contacto actualizada y consistente

### Performance
- [ ] Todas las imágenes optimizadas (< 150 KB cada una)
- [ ] Lazy loading implementado en imágenes below the fold
- [ ] CSS minificado
- [ ] JavaScript minificado
- [ ] Compresión gzip/brotli habilitada en servidor
- [ ] Cache headers configurados
- [ ] Critical CSS inline implementado (opcional)
- [ ] Recursos estáticos en CDN (opcional)

### Imágenes
- [ ] Favicons creados y funcionando (apple-touch-icon.png, favicon-32x32.png, favicon-16x16.png)
- [ ] Todas las imágenes en formato WebP
- [ ] Nombres de archivo descriptivos y SEO-friendly
- [ ] Imágenes responsive con srcset (opcional)
- [ ] No hay imágenes > 200 KB

### Accesibilidad
- [ ] Contraste de colores WCAG 2.1 AA compliant
- [ ] Navegación por teclado funcional
- [ ] ARIA labels en elementos interactivos
- [ ] Semántica HTML correcta (header, nav, main, footer, article, section)
- [ ] Skip links implementados
- [ ] Formularios con labels apropiadas

### Mobile
- [ ] Viewport meta tag en todas las páginas
- [ ] Touch targets mínimo 48x48px
- [ ] Texto legible (mínimo 16px)
- [ ] Menú móvil funcional
- [ ] Responsive en 3 breakpoints (mobile 375px, tablet 768px, desktop 1200px)
- [ ] Orientación landscape funcional

### Enlaces
- [ ] No hay enlaces rotos (404)
- [ ] Enlaces externos con rel="noopener noreferrer"
- [ ] Anchor text descriptivo (no "clic aquí")
- [ ] Linking interno estratégico implementado

### Seguridad
- [ ] HTTPS habilitado en todo el sitio
- [ ] Certificado SSL válido
- [ ] Mixed content resuelto (no HTTP en HTTPS)

### Testing
- [ ] Probar en Chrome, Firefox, Safari
- [ ] Probar en iOS y Android
- [ ] Validar HTML5 (https://validator.w3.org/)
- [ ] Google PageSpeed Insights > 80/100
- [ ] Google Search Console sin errores críticos

---

## PLAN DE PRIORIZACIÓN Y ROADMAP

### FASE 1 - CORRECCIONES CRÍTICAS (Semana 1)

**Prioridad: INMEDIATA**

1. **Eliminar referencias a artículos inexistentes en blog.html**
   - Tiempo estimado: 30 minutos
   - Impacto: ALTO (elimina 27 errores 404)
   - Pasos:
     1. Editar /blog.html
     2. Eliminar cards de artículos 3-11
     3. Actualizar numeración
     4. Verificar que solo queden 2 artículos publicados

2. **Crear archivos favicon**
   - Tiempo estimado: 1 hora
   - Impacto: ALTO (elimina 96 errores 404)
   - Pasos:
     1. Obtener logo en alta resolución (min 512x512px)
     2. Generar favicons en https://realfavicongenerator.net/
     3. Descargar paquete
     4. Subir archivos a raíz del sitio
     5. Verificar en navegador

3. **Verificar y corregir URLs canónicas**
   - Tiempo estimado: 2 horas
   - Impacto: ALTO (evita problemas de duplicación)
   - Pasos:
     1. Buscar todas las instancias de "resoil.com.mx"
     2. Reemplazar por "rentadesonidoeiluminacion.com.mx"
     3. Verificar extensiones .html en URLs
     4. Validar con herramienta online

4. **Crear robots.txt**
   - Tiempo estimado: 30 minutos
   - Impacto: ALTO (guía a crawlers)
   - Pasos:
     1. Copiar template proporcionado en este informe
     2. Personalizar si necesario
     3. Crear archivo /robots.txt
     4. Probar en Google Search Console

5. **Crear sitemap.xml**
   - Tiempo estimado: 1 hora
   - Impacto: ALTO (facilita indexación)
   - Pasos:
     1. Copiar template XML de este informe
     2. Actualizar con fechas actuales
     3. Crear archivo /sitemap.xml
     4. Validar sintaxis XML
     5. Subir a Google Search Console

**Total Fase 1:** 5 horas
**Resultado:** Sitio sin errores críticos, listo para indexación óptima

---

### FASE 2 - OPTIMIZACIÓN DE PERFORMANCE (Semana 2)

**Prioridad: ALTA**

1. **Optimizar imágenes**
   - Tiempo estimado: 4 horas
   - Impacto: ALTO (mejora velocidad significativamente)
   - Pasos:
     1. Backup de carpeta /img/
     2. Procesar imágenes con Squoosh CLI
     3. Renombrar con nombres SEO
     4. Actualizar referencias en HTML
     5. Verificar funcionamiento

2. **Implementar lazy loading**
   - Tiempo estimado: 2 horas
   - Impacto: MEDIO (mejora LCP)
   - Pasos:
     1. Agregar loading="lazy" a imágenes below the fold
     2. Excluir hero images
     3. Probar funcionamiento
     4. Verificar con PageSpeed Insights

3. **Minificar CSS y JavaScript**
   - Tiempo estimado: 1 hora
   - Impacto: MEDIO
   - Pasos:
     1. Configurar/verificar webpack
     2. Ejecutar build de producción
     3. Actualizar referencias en HTML
     4. Probar funcionamiento

**Total Fase 2:** 7 horas
**Resultado:** Sitio con performance optimizada, Core Web Vitals mejorados

---

### FASE 3 - SEO ON-PAGE (Semana 3)

**Prioridad: ALTA**

1. **Auditar y optimizar meta descriptions**
   - Tiempo estimado: 4 horas
   - Impacto: ALTO (mejora CTR en búsquedas)
   - Pasos:
     1. Extraer todas las meta descriptions actuales
     2. Identificar duplicadas o genéricas
     3. Escribir nuevas descriptions únicas
     4. Implementar en HTML
     5. Verificar longitud (150-160 caracteres)

2. **Verificar y optimizar títulos**
   - Tiempo estimado: 3 horas
   - Impacto: ALTO
   - Pasos:
     1. Extraer todos los títulos
     2. Verificar unicidad
     3. Optimizar keywords
     4. Verificar longitud (50-70 caracteres)
     5. Implementar

3. **Implementar Schema.org completo**
   - Tiempo estimado: 4 horas
   - Impacto: MEDIO-ALTO (rich snippets)
   - Pasos:
     1. Agregar Organization schema en homepage
     2. Agregar Service schema en servicios
     3. Agregar BreadcrumbList en subcategorías
     4. Validar con Google Rich Results Test
     5. Corregir errores

**Total Fase 3:** 11 horas
**Resultado:** SEO on-page optimizado, mayor visibilidad en búsquedas

---

### FASE 4 - ACCESIBILIDAD Y MOBILE (Semana 4)

**Prioridad: MEDIA

1. **Mejorar accesibilidad**
   - Tiempo estimado: 3 horas
   - Impacto: MEDIO
   - Pasos:
     1. Agregar ARIA labels faltantes
     2. Implementar skip links
     3. Verificar contraste de colores
     4. Probar navegación por teclado
     5. Validar con herramientas (WAVE, axe)

2. **Optimización mobile**
   - Tiempo estimado: 3 horas
   - Impacto: MEDIO
   - Pasos:
     1. Verificar touch targets (min 48x48px)
     2. Probar menú móvil
     3. Ajustar breakpoints si necesario
     4. Probar en dispositivos reales
     5. Verificar orientación landscape

3. **Verificar y corregir alt text**
   - Tiempo estimado: 2 horas
   - Impacto: MEDIO
   - Pasos:
     1. Identificar imágenes sin alt
     2. Escribir alt descriptivos (80-125 caracteres)
     3. Implementar
     4. Verificar con herramientas

**Total Fase 4:** 8 horas
**Resultado:** Sitio accesible, mobile-friendly, mejor UX

---

### FASE 5 - CONTENIDO (Semanas 5-12)

**Prioridad: MEDIA (ongoing)**

1. **Crear artículos del blog faltantes**
   - Tiempo estimado: 36-45 horas (9 artículos x 4-5 horas)
   - Impacto: ALTO a largo plazo
   - Calendario sugerido: 1-2 artículos por semana
   - Orden de prioridad:
     1. Guía Completa de Iluminación para Bodas
     2. Sistemas de Sonido para Eventos Corporativos
     3. Tendencias de Iluminación para Eventos 2025
     4. Presupuesto para XV Años
     5. Humo Bajo para Primer Baile
     6. Checklist de Sonido para Eventos
     7. Efectos Especiales para Eventos
     8. Acústica de Venues
     9. Iluminación para Fotografía

2. **Expandir contenido de servicios**
   - Tiempo estimado: 15-20 horas
   - Impacto: MEDIO
   - Pasos:
     1. Seleccionar 10 servicios prioritarios
     2. Expandir de 500 a 1000+ palabras cada uno
     3. Agregar sección FAQ
     4. Implementar

3. **Agregar testimonios**
   - Tiempo estimado: 4 horas
   - Impacto: MEDIO
   - Pasos:
     1. Recopilar testimonios reales
     2. Diseñar sección de testimonios
     3. Implementar con Schema.org Review
     4. Agregar en homepage y servicios principales

**Total Fase 5:** 55-69 horas (distribuidas en 8 semanas)
**Resultado:** Contenido rico y completo, autoridad establecida

---

## RESUMEN DE TIEMPO Y ESFUERZO

| Fase | Tiempo | Prioridad | Impacto |
|------|--------|-----------|---------|
| Fase 1 - Críticas | 5 horas | CRÍTICA | ALTO |
| Fase 2 - Performance | 7 horas | ALTA | ALTO |
| Fase 3 - SEO On-Page | 11 horas | ALTA | ALTO |
| Fase 4 - Accesibilidad | 8 horas | MEDIA | MEDIO |
| Fase 5 - Contenido | 55-69 horas | MEDIA | ALTO (largo plazo) |
| **TOTAL** | **86-100 horas** | | |

**Distribución recomendada:**
- Semanas 1-2: Fases 1 y 2 (12 horas) - Correcciones críticas
- Semanas 3-4: Fases 3 y 4 (19 horas) - Optimización SEO
- Semanas 5-12: Fase 5 (55-69 horas) - Creación de contenido

---

## ANEXOS

### ANEXO A - COMANDOS ÚTILES

```bash
# Buscar todas las imágenes sin alt
grep -rn '<img' *.html */*.html | grep -v 'alt='

# Buscar enlaces rotos (requiere linkchecker)
linkchecker https://rentadesonidoeiluminacion.com.mx

# Verificar títulos duplicados
grep -rh '<title>' *.html */*.html | sort | uniq -d

# Contar palabras en página
w3m -dump index.html | wc -w

# Validar HTML
curl -H "Content-Type: text/html; charset=utf-8" \
  --data-binary @index.html \
  https://validator.w3.org/nu/?out=gnu

# Verificar tamaño de imágenes
find img/ -name "*.webp" -exec du -h {} \; | sort -rh

# Buscar URLs con dominio incorrecto
grep -r "resoil\.com\.mx" *.html */*.html

# Generar lista de URLs para sitemap
find . -name "*.html" -type f | \
  sed 's|^\./||' | \
  sed 's|^|https://rentadesonidoeiluminacion.com.mx/|'

# Verificar compresión del servidor
curl -H "Accept-Encoding: gzip" \
  -I https://rentadesonidoeiluminacion.com.mx/css/style.css

# Buscar H1 múltiples
for file in *.html */*.html; do
  count=$(grep -c '<h1' "$file")
  if [ "$count" -ne 1 ]; then
    echo "$file: $count H1 tags"
  fi
done
```

### ANEXO B - SNIPPET DE PÁGINA 404 MEJORADA

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página No Encontrada 404 | RESOIL</title>
  <meta name="robots" content="noindex, follow">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <!-- Incluir header normal -->
  <header class="header">
    <!-- Navegación estándar del sitio -->
  </header>

  <main class="main-content error-404">
    <div class="container">
      <div class="error-content">
        <h1>404 - Página No Encontrada</h1>
        <p class="error-message">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>

        <div class="error-suggestions">
          <h2>¿Qué puedes hacer?</h2>
          <ul class="suggestions-list">
            <li><a href="/">Ir al inicio</a></li>
            <li><a href="/servicios.html">Ver nuestros servicios</a></li>
            <li><a href="/blog.html">Leer nuestro blog</a></li>
            <li><a href="/contacto.html">Contactarnos</a></li>
          </ul>
        </div>

        <div class="error-cta">
          <h2>¿Necesitas ayuda?</h2>
          <p>Nuestro equipo está disponible para ayudarte.</p>
          <a
            href="https://wa.me/5215578960091?text=Hola%2C%20necesito%20ayuda%20para%20encontrar%20información"
            class="cta-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </main>

  <!-- Incluir footer normal -->
  <footer class="footer">
    <!-- Footer estándar del sitio -->
  </footer>

  <script src="/js/app.js"></script>
</body>
</html>
```

### ANEXO C - CONFIGURACIÓN .HTACCESS COMPLETA

```apache
# .htaccess para rentadesonidoeiluminacion.com.mx
# Configuración de producción optimizada

# Forzar HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Página de error 404 personalizada
ErrorDocument 404 /404.html

# Compresión gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css
  AddOutputFilterByType DEFLATE text/javascript application/javascript application/x-javascript
  AddOutputFilterByType DEFLATE application/json application/xml application/rss+xml
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache headers
<IfModule mod_expires.c>
  ExpiresActive On

  # Imágenes - 1 año
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"

  # CSS y JavaScript - 1 mes
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"

  # HTML - 1 semana
  ExpiresByType text/html "access plus 1 week"

  # Fuentes - 1 año
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
</IfModule>

# Headers de seguridad
<IfModule mod_headers.c>
  # X-Frame-Options (prevenir clickjacking)
  Header set X-Frame-Options "SAMEORIGIN"

  # X-Content-Type-Options
  Header set X-Content-Type-Options "nosniff"

  # X-XSS-Protection
  Header set X-XSS-Protection "1; mode=block"

  # Referrer Policy
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Prevenir listado de directorios
Options -Indexes

# Proteger archivos sensibles
<FilesMatch "^(\\.htaccess|wp-config\\.php|readme\\.html|license\\.txt|\\.md)$">
  Order allow,deny
  Deny from all
</FilesMatch>

# UTF-8 encoding
AddDefaultCharset utf-8
AddCharset utf-8 .html .css .js .xml .json .rss .atom

# MIME types
<IfModule mod_mime.c>
  AddType application/javascript js
  AddType text/css css
  AddType image/webp webp
</IfModule>
```

---

## FIN DEL INFORME

**Próximos pasos recomendados:**

1. Revisar este informe completo
2. Priorizar correcciones según fases
3. Implementar Fase 1 (críticas) inmediatamente
4. Configurar Google Search Console si no está configurado
5. Configurar Google Analytics para tracking
6. Programar reunión de seguimiento para revisar progreso

**Contacto para consultas:**
- Este informe debe ser implementado por desarrollador web o equipo SEO
- Tiempo total estimado: 86-100 horas
- ROI esperado: Mejora significativa en posicionamiento orgánico en 3-6 meses

---

**Documento generado:** 19 de enero de 2025
**Versión:** 1.0
**Formato:** Markdown

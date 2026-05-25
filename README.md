# Itzaé Tulum

Landing page de inversión inmobiliaria para **Itzaé Tulum** — desarrollo 100% autofinanciado en La Veleta, Tulum. Un proyecto de Grupo CISA.

Sitio estático en HTML + React (cargado vía Babel en el navegador). No requiere build.

---

## Estructura

```
.
├── index.html              # Entry point (servido por Vercel en /)
├── Itzaé Tulum.html        # Copia con nombre amigable (idéntica a index.html)
├── styles.css              # Estilos globales
├── js/
│   ├── components.jsx      # Componentes React (Hero, Filosofía, Tipologías, etc.)
│   └── interactive.jsx     # App shell, Tweaks panel, paletas
├── assets/                 # Imágenes, renders, fotografías
├── vercel.json             # Config de despliegue + headers de caché
└── .gitignore
```

---

## Desarrollo local

No hay paso de build. Solo necesitas un servidor estático:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node
npx serve .

# Opción 3: VS Code Live Server (extension)
```

Abre `http://localhost:8000` y listo.

---

## Deploy a Vercel

### Opción A — Conectar repo de GitHub (recomendado)

1. Crea el repo en GitHub y sube todos los archivos.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. **Framework Preset:** *Other* (es sitio estático puro).
4. **Build Command:** *(dejar vacío)*
5. **Output Directory:** *(dejar vacío, default raíz)*
6. **Install Command:** *(dejar vacío)*
7. Click **Deploy**.

Vercel detecta `vercel.json` y aplica los headers de caché automáticamente.

### Opción B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Sigue el wizard y cuando pregunte por configuración, acepta los defaults.

### Opción C — Drag & Drop

Comprime la carpeta y arrástrala a [vercel.com/new](https://vercel.com/new).

---

## Tweaks en vivo

El sitio incluye un panel de **Tweaks** (esquina inferior derecha en preview) que permite alternar entre:

- **Paleta:** Jade · Arena / variantes
- **Hero:** noche, día, alberca, jardín
- **Tono del copy:** editorial / financiero
- **Filosofía:** Carácter / Compromisos

Los valores por defecto viven en `js/interactive.jsx` dentro del bloque `TWEAK_DEFAULTS`.

---

## Performance notes (opcional)

El sitio carga React + Babel desde CDN y transpila JSX en el navegador. Esto es perfecto para iteración rápida, pero para producción a escala considera:

- Pre-compilar JSX con `esbuild` o `vite build` para servir JS plano.
- Usar `react.production.min.js` y `react-dom.production.min.js` en lugar de los `.development.js`.

Si decides hacer ese cambio, te ayudo a configurar Vite y migrar.

---

## Dominio personalizado

En el dashboard de Vercel → **Project Settings → Domains** → agrega `itzaetulum.com` (o el que uses) y sigue las instrucciones DNS.

---

## Contacto

Cualquier ajuste de copy, paleta, tipologías o flujo se hace editando los componentes en `js/components.jsx`. La estructura está documentada con comentarios `// ==============`.

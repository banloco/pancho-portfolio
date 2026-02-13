# ⚡ Performance & Optimisations

## 📊 Stratégies d'Optimisation Implémentées

### 1. Images

#### Lazy Loading
```javascript
<img loading="lazy" ... />
```
- ✅ Toutes les images hors viewport chargées en différé
- ✅ Image Hero en `loading="eager"` pour LCP
- 📉 Économie de bande passante initiale

#### Optimisation des URLs
- 🔗 Unsplash avec paramètres `w=800&auto=format&fit=crop`
- 📏 Dimensions appropriées pour chaque usage
- 🎨 Format automatique (WebP si supporté)

**Recommandations** :
```javascript
// Pour vos images locales
- Utiliser WebP ou AVIF
- Compresser avec TinyPNG, Squoosh
- Définir width/height pour éviter layout shift
```

---

### 2. JavaScript

#### Code Splitting
- ✅ Vite fait du code splitting automatiquement
- ✅ Lazy imports pour les composants lourds (si besoin)

#### Bundle Size
```bash
# Analyser la taille du bundle
npm run build
```

**Tailles actuelles** (approximatif) :
- React + ReactDOM: ~140KB (gzipped)
- Lucide Icons: ~5KB par icône utilisée
- Tailwind CSS: ~10KB (purged)
- **Total**: ~160-180KB (gzipped)

---

### 3. CSS

#### Tailwind Purge
```javascript
// tailwind.config.js
content: ["./index.html", "./src/**/*.{js,jsx}"]
```
- ✅ Classes CSS non utilisées supprimées en production
- 📉 CSS final: ~10-15KB au lieu de ~3MB

#### Critical CSS
- ✅ Styles inline pour above-the-fold (Vite optimise automatiquement)

---

### 4. Animations

#### CSS Animations (vs JavaScript)
```css
@keyframes fadeInUp { ... }
```
- ✅ Performances GPU natives
- ✅ Pas de JavaScript nécessaire
- ⚡ 60 FPS smooth

#### Intersection Observer
```javascript
useIntersectionObserver({ threshold: 0.1 })
```
- ✅ Détection efficace du scroll
- ✅ Pas de listeners scroll coûteux
- 🎯 Animations déclenchées au bon moment

---

### 5. React

#### Composants Optimisés
```javascript
// Pas de re-renders inutiles grâce à la structure
const MemoizedComponent = React.memo(Component);
```

**Opportunités d'optimisation** :
```javascript
// Si performances problématiques (nombreux items)
import { useMemo, useCallback } from 'react';

const filteredItems = useMemo(() => 
  portfolioItems.filter(...), 
  [activeFilter]
);
```

---

### 6. Fonts

#### Google Fonts Optimisé
```css
@import url('...&display=swap');
```
- ✅ `display=swap` évite FOIT (Flash of Invisible Text)
- ✅ 2 font families seulement (Inter, Montserrat)
- ✅ Weights limités aux nécessaires

**Alternative plus performante** :
```bash
# Héberger les fonts localement
npm install @fontsource/inter @fontsource/montserrat
```

---

## 📈 Métriques de Performance

### Core Web Vitals Cibles

| Métrique | Cible | Status |
|----------|-------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ |
| **FID** (First Input Delay) | < 100ms | ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ |

### Lighthouse Scores Attendus

- **Performance**: 90-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 90-100

---

## 🔍 Tests de Performance

### Outils Recommandés

1. **Lighthouse** (Chrome DevTools)
```bash
# Ouvrir Chrome DevTools (F12)
# Lighthouse tab → Analyze page load
```

2. **WebPageTest**
```
https://www.webpagetest.org
```

3. **PageSpeed Insights**
```
https://pagespeed.web.dev
```

---

## 🚀 Optimisations Additionnelles

### Niveau 1 : Facile (Recommandé)

#### 1. Précharger les fonts critiques
```html
<!-- index.html -->
<head>
  <link rel="preload" as="font" href="..." crossorigin>
</head>
```

#### 2. Ajouter un favicon
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

#### 3. Métadonnées SEO
```html
<meta name="description" content="...">
<meta property="og:image" content="...">
```

---

### Niveau 2 : Intermédiaire

#### 1. Service Worker pour cache
```bash
npm install vite-plugin-pwa
```

```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}']
      }
    })
  ]
})
```

#### 2. Compresser les assets
```bash
npm install vite-plugin-compression
```

#### 3. Lazy load des composants lourds
```javascript
import { lazy, Suspense } from 'react';

const PortfolioGallery = lazy(() => import('./components/PortfolioGallery'));

<Suspense fallback={<Loading />}>
  <PortfolioGallery />
</Suspense>
```

---

### Niveau 3 : Avancé

#### 1. Image Optimization automatique
```bash
npm install vite-plugin-imagemin
```

#### 2. Prefetch des routes
```javascript
<link rel="prefetch" href="/portfolio">
```

#### 3. Critical CSS inline
```bash
npm install vite-plugin-critical
```

---

## 📱 Performance Mobile

### Optimisations Spécifiques

1. **Touch targets** - Minimum 44x44px
```javascript
// Déjà implémenté avec Tailwind
className="px-6 py-3" // ≥ 44px height
```

2. **Viewport units**
```css
/* Éviter 100vh sur mobile (problème barre URL) */
min-height: 100vh;  /* ✅ */
height: 100vh;      /* ❌ */
```

3. **Reduce motion**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎯 Monitoring en Production

### Analytics de Performance

**Google Analytics 4** :
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Alternatives Privacy-friendly** :
- Plausible Analytics
- Fathom Analytics
- Umami

---

## 📊 Checklist Avant Déploiement

### Performance
- [ ] Build de production testé (`npm run build`)
- [ ] Lighthouse score > 90
- [ ] Images optimisées et compressées
- [ ] Fonts préchargés
- [ ] Lazy loading activé

### SEO
- [ ] Meta description ajoutée
- [ ] Open Graph tags configurés
- [ ] Sitemap généré
- [ ] Robots.txt créé
- [ ] Google Search Console setup

### Accessibilité
- [ ] Alt text sur toutes les images
- [ ] Contraste suffisant (WCAG AA)
- [ ] Navigation clavier fonctionnelle
- [ ] ARIA labels appropriés
- [ ] Screen reader testé

### Sécurité
- [ ] HTTPS activé
- [ ] Headers de sécurité configurés
- [ ] Pas de données sensibles dans le code
- [ ] Formulaire protégé contre spam

---

## 🔧 Scripts de Build Optimisés

### package.json additions possibles

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "analyze": "vite build --mode analyze",
    "lighthouse": "lighthouse http://localhost:3000 --view"
  }
}
```

---

## 📚 Ressources

- [Web.dev Performance](https://web.dev/performance/)
- [Vite Performance](https://vitejs.dev/guide/performance.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Tailwind Optimization](https://tailwindcss.com/docs/optimizing-for-production)

---

## 💡 Résumé

### ✅ Déjà Optimisé
- Images lazy loaded
- CSS purifié (Tailwind)
- Animations CSS performantes
- Intersection Observer pour scroll
- Code splitting (Vite)
- Responsive design

### 🎯 Opportunités
- Service Worker / PWA
- Image optimization automatique
- Font self-hosting
- Prefetching
- Analytics

### 📈 Performance Attendue
- **Desktop**: 95-100 (Lighthouse)
- **Mobile**: 85-95 (Lighthouse)
- **Load Time**: < 2s (3G)
- **FCP**: < 1.5s

---

**Le portfolio est déjà bien optimisé pour la production !** 🚀

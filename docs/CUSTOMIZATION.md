# 🎨 Guide de Personnalisation Visuelle

Ce guide vous aide à personnaliser facilement l'apparence du portfolio sans casser le design.

---

## 🎨 Palette de Couleurs

### Changer les Couleurs Principales

**Fichier** : `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'dark-bg': '#121212',      // ← Fond principal
      'orange-accent': '#FF8C00', // ← Couleur d'accent
    }
  }
}
```

### Palettes Suggérées

#### 🔵 Bleu Professionnel
```javascript
'dark-bg': '#0A0E27',
'accent': '#3B82F6', // Bleu
```

#### 🟣 Violet Créatif
```javascript
'dark-bg': '#1A0B2E',
'accent': '#A855F7', // Violet
```

#### 🟢 Vert Nature
```javascript
'dark-bg': '#0F1419',
'accent': '#10B981', // Vert
```

#### 🔴 Rouge Audacieux
```javascript
'dark-bg': '#1C0A0A',
'accent': '#EF4444', // Rouge
```

#### 🟡 Jaune Énergique
```javascript
'dark-bg': '#1A1A0F',
'accent': '#F59E0B', // Jaune-Orange
```

### Après Changement de Couleurs

**Remplacer dans tous les fichiers** :
```bash
# Chercher et remplacer
orange-accent → VOTRE-COULEUR-accent
```

Fichiers concernés :
- `tailwind.config.js`
- `src/index.css` (scrollbar, selection)
- Tous les composants utilisant `text-orange-accent`, `bg-orange-accent`, etc.

---

## 🔤 Typographie

### Changer les Polices

**Fichier** : `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=VOTRE_POLICE&display=swap');
```

**Puis** : `tailwind.config.js`

```javascript
fontFamily: {
  'sans': ['VOTRE_POLICE', 'system-ui', 'sans-serif'],
}
```

### Polices Recommandées

#### Pour Design Moderne
- **Poppins** - Arrondi et friendly
- **Work Sans** - Pro et moderne
- **DM Sans** - Clean et élégant

#### Pour Design Corporate
- **Roboto** - Google standard
- **Open Sans** - Très lisible
- **Lato** - Professionnel

#### Pour Design Créatif
- **Bebas Neue** - Titres impactants (headlines only)
- **Archivo** - Géométrique moderne
- **Space Grotesk** - Futuriste

### Exemple Complet - Poppins

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
```

```javascript
// tailwind.config.js
fontFamily: {
  'sans': ['Poppins', 'system-ui', 'sans-serif'],
}
```

---

## 📐 Espacement et Tailles

### Modifier les Tailles de Titres

**Fichier** : Composants individuels

```javascript
// Hero.jsx - Titre principal
className="text-5xl sm:text-6xl md:text-7xl" // ← Ajuster
// Options: text-4xl, text-5xl, text-6xl, text-7xl, text-8xl, text-9xl
```

### Modifier l'Espacement des Sections

```javascript
// Toutes les sections
className="py-20" // ← 80px top/bottom
// Options: py-12 (48px), py-16 (64px), py-20 (80px), py-24 (96px)
```

---

## 🖼️ Borders et Arrondis

### Modifier les Coins Arrondis

**Actuel** : `rounded-xl` (12px)

**Options** :
- `rounded-lg` - 8px (moins arrondi)
- `rounded-xl` - 12px (actuel)
- `rounded-2xl` - 16px (plus arrondi)
- `rounded-3xl` - 24px (très arrondi)

**Exemple** :
```javascript
// Boutons, cards, images
className="rounded-xl" // ← Changer ici
```

### Modifier les Bordures

```javascript
// Cards avec bordure
className="border border-gray-800" // ← Épaisseur et couleur
// Options: border (1px), border-2 (2px), border-4 (4px)
```

---

## ✨ Effets et Ombres

### Modifier les Ombres

#### Ombres de Cards
```javascript
className="shadow-2xl" // Grosse ombre
// Options: shadow-lg, shadow-xl, shadow-2xl
```

#### Ombres Colorées (Glow Effect)
```javascript
className="shadow-lg shadow-orange-accent/50"
//                     ↑ couleur    ↑ opacité
// Ajuster l'opacité: /30, /40, /50, /60
```

### Modifier les Effets de Flou

```javascript
// Navbar backdrop blur
className="backdrop-blur-md"
// Options: backdrop-blur-sm, backdrop-blur, backdrop-blur-md, backdrop-blur-lg
```

---

## 🎭 Animations

### Modifier la Vitesse des Transitions

```javascript
// Actuellement
className="transition-all duration-300"
//                      ↑ 300ms

// Options
duration-150  // Ultra rapide (150ms)
duration-200  // Rapide (200ms)
duration-300  // Normal (300ms) ← Actuel
duration-500  // Lent (500ms)
duration-700  // Très lent (700ms)
```

### Modifier les Effets Hover

#### Scale (Agrandissement)
```javascript
// Boutons
hover:scale-105 // Agrandit de 5%
// Options: hover:scale-95, hover:scale-100, hover:scale-105, hover:scale-110
```

#### Translation
```javascript
// Cards au survol
hover:-translate-y-2 // Monte de 8px
// Options: hover:-translate-y-1, hover:-translate-y-2, hover:-translate-y-4
```

---

## 🌈 Dégradés

### Modifier les Backgrounds Dégradés

```javascript
// Sections avec dégradé
className="bg-gradient-to-b from-dark-bg to-black"
//         ↑ direction    ↑ de        ↑ vers

// Directions disponibles
bg-gradient-to-t    // Top (bas → haut)
bg-gradient-to-b    // Bottom (haut → bas)
bg-gradient-to-l    // Left (droite → gauche)
bg-gradient-to-r    // Right (gauche → droite)
bg-gradient-to-tr   // Top-right (diagonal)
bg-gradient-to-br   // Bottom-right (diagonal)
```

### Créer des Dégradés Colorés

```javascript
// Exemple avec accent
className="bg-gradient-to-r from-orange-accent to-orange-600"

// Exemple avec transparence
className="bg-gradient-to-t from-black via-black/80 to-transparent"
```

---

## 📱 Responsive Design

### Comprendre les Breakpoints

```javascript
className="text-base sm:text-lg md:text-xl lg:text-2xl"
//        ↑ mobile  ↑ 640px+  ↑ 768px+  ↑ 1024px+
```

**Breakpoints Tailwind** :
- `sm:` - 640px et plus (mobile landscape, petites tablettes)
- `md:` - 768px et plus (tablettes)
- `lg:` - 1024px et plus (petits desktops)
- `xl:` - 1280px et plus (grands desktops)
- `2xl:` - 1536px et plus (très grands écrans)

### Modifier le Layout Mobile

```javascript
// Grid responsive
className="grid md:grid-cols-2 lg:grid-cols-3"
//         ↑ 1 col  ↑ 2 cols    ↑ 3 cols
```

---

## 🎨 Cas d'Usage Fréquents

### 1. Rendre le Design Plus Sobre

```javascript
// Réduire les arrondis
rounded-xl → rounded-lg

// Réduire les ombres
shadow-2xl → shadow-lg

// Réduire les espacements
py-20 → py-16

// Animations plus subtiles
hover:scale-105 → hover:scale-102
```

### 2. Rendre le Design Plus Audacieux

```javascript
// Augmenter les arrondis
rounded-xl → rounded-2xl

// Augmenter les ombres
shadow-xl → shadow-2xl

// Plus d'espacement
py-20 → py-24

// Animations plus marquées
hover:scale-105 → hover:scale-110
```

### 3. Design Minimaliste

```javascript
// Supprimer les bordures visibles
border border-gray-800 → border-0

// Réduire les ombres
shadow-2xl → shadow-none

// Espacements uniformes
px-6 py-3 → px-4 py-2

// Pas d'effets hover marqués
hover:scale-105 → hover:opacity-80
```

---

## 🖼️ Images

### Modifier les Ratios d'Image

```javascript
// Hero image
className="h-[600px]" // ← Hauteur fixe
// Options: h-[400px], h-[500px], h-[600px], h-[700px]

// Portfolio cards
className="h-80" // ← 320px
// Options: h-64 (256px), h-72 (288px), h-80 (320px), h-96 (384px)
```

### Effets sur Images

```javascript
// Zoom au hover
group-hover:scale-110 // 10% d'agrandissement
// Options: scale-105, scale-110, scale-125

// Opacité
opacity-30 group-hover:opacity-40
// Options: opacity-10, opacity-20, opacity-30, etc.
```

---

## 🎯 Composants Spécifiques

### Boutons

#### Style Primaire (Orange)
```javascript
className="bg-orange-accent text-white px-8 py-4 rounded-xl"
```

#### Style Secondaire (Outline)
```javascript
className="bg-white/5 backdrop-blur-sm text-white border border-white/10"
```

#### Style Ghost
```javascript
className="text-orange-accent hover:bg-orange-accent/10"
```

### Cards

#### Card Standard
```javascript
className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
```

#### Card avec Image de Fond
```javascript
className="relative overflow-hidden rounded-xl"
<img className="absolute inset-0 opacity-30" />
<div className="relative">Contenu</div>
```

---

## 🔖 Templates de Couleurs Complets

### Copier-Coller Ready

#### Template Bleu
```javascript
// tailwind.config.js
colors: {
  'dark-bg': '#0A0E27',
  'accent': '#3B82F6',
}

// index.css - scrollbar
::-webkit-scrollbar-thumb {
  background: #3B82F6;
}

// index.css - selection
::selection {
  background-color: #3B82F6;
}
```

#### Template Violet
```javascript
colors: {
  'dark-bg': '#1A0B2E',
  'accent': '#A855F7',
}
// + Mêmes changements dans index.css
```

---

## 💡 Conseils

1. **Testez sur mobile** après chaque changement visuel
2. **Maintenez la cohérence** des espacements et tailles
3. **Vérifiez le contraste** (minimum WCAG AA: 4.5:1)
4. **Gardez max 2-3 polices** pour éviter la surcharge
5. **Animations subtiles** > animations excessives

---

## 🛠️ Outils Utiles

### Générateurs de Couleurs
- [Coolors.co](https://coolors.co) - Palettes
- [ColorHunt](https://colorhunt.co) - Couleurs tendance
- [Paletton](https://paletton.com) - Schémas harmonieux

### Vérification Contraste
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Fonts
- [Google Fonts](https://fonts.google.com)
- [Fontsource](https://fontsource.org) - Self-hosted

---

**Personnalisez avec confiance ! Le code est structuré pour faciliter les modifications.** ✨

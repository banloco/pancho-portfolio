# 📋 Documentation des Composants

## Architecture

Le portfolio utilise une architecture modulaire avec des composants React indépendants et réutilisables.

```
src/
├── components/          # Composants UI
├── data/               # Données statiques
├── hooks/              # Custom React Hooks
├── App.jsx             # Composant racine
├── Portfolio.jsx       # Layout principal (orchestre tous les composants)
├── main.jsx           # Point d'entrée React
└── index.css          # Styles globaux et animations
```

---

## 📦 Composants

### 1. Navbar (`components/Navbar.jsx`)

**Description** : Navigation principale sticky avec menu mobile responsive

**Props** : Aucune (utilise les données de `data/portfolioData.js`)

**Features** :
- Logo animé avec rotation au hover
- Links de navigation depuis `navLinks`
- Menu mobile avec overlay fullscreen
- État de scroll pour changer le background
- Bouton CTA Contact

**Hooks utilisés** :
- `useScrollPosition()` - Détecte le scroll pour changer le style
- `useMobileMenu()` - Gère l'ouverture/fermeture du menu mobile

**Personnalisation** :
```javascript
// Modifier les liens dans data/portfolioData.js
export const navLinks = [
  { id: 1, name: 'Accueil', href: '#accueil' },
  // ...
];
```

---

### 2. Hero (`components/Hero.jsx`)

**Description** : Section d'accueil avec titre impactant et image

**Props** : Aucune

**Features** :
- Layout grid responsive (2 colonnes desktop, empilé mobile)
- Badge de statut (Créateur de Contenu)
- Titre principal animé
- Sous-titre et description
- 2 CTA buttons (Voir Mon Travail, Showreel)
- Stats inline (Projets, Clients, Awards)
- Image portrait avec overlays décoratifs
- Badges overlay (Années d'expérience, Disponibilité)

**Animations** :
- Fade in + Slide up au chargement
- Hover effects sur les boutons

**Personnalisation** :
```javascript
// Changer l'image
src="VOTRE_URL_IMAGE"

// Modifier les stats
<p className="text-3xl">500+</p> // ← Vos chiffres
```

---

### 3. About (`components/About.jsx`)

**Description** : Section présentation personnelle avec compétences

**Props** : Aucune

**Features** :
- Layout grid 2 colonnes (image + contenu)
- Photo professionnelle avec overlay
- 3 paragraphes de présentation
- Barres de compétences animées (4 skills)
- Grille de 4 features avec icônes

**Données** :
```javascript
const skills = [
  { name: 'Photographie', level: 95 },
  // ...
];

const features = [
  { icon: Camera, title: '...', description: '...' },
  // ...
];
```

**Animations** :
- Barres de progression animées au scroll
- Fade in au scroll (Intersection Observer)

---

### 4. PortfolioGallery (`components/PortfolioGallery.jsx`)

**Description** : Galerie de projets avec filtres

**Props** : Aucune (utilise `portfolioItems` de data)

**Features** :
- Système de filtres (Tout / Photo / Vidéo)
- Grille responsive (3 colonnes desktop → 1 mobile)
- Cards avec hover effects avancés
- Badges de catégorie
- Play icon pour les vidéos
- Bouton "Voir Plus"

**Composant enfant** :
- `PortfolioCard` - Card individuelle avec animations

**État** :
```javascript
const [activeFilter, setActiveFilter] = useState('all');
```

**Personnalisation** :
```javascript
// Ajouter des projets dans data/portfolioData.js
export const portfolioItems = [
  {
    id: 1,
    title: 'Projet',
    category: 'photography', // ou 'video'
    type: 'Portrait',
    image: 'URL',
    description: 'Description',
  },
];
```

---

### 5. Services (`components/Services.jsx`)

**Description** : Présentation des services avec tarifs

**Props** : Aucune (utilise `services` de data)

**Features** :
- Grille de 3 services
- Image de fond avec overlay
- Liste de features avec checkmarks
- Tarifs affichés
- Bouton CTA par service
- Section CTA personnalisé en bas

**Structure des données** :
```javascript
export const services = [
  {
    id: 1,
    title: 'Service',
    description: 'Description',
    image: 'URL',
    features: ['Feature 1', 'Feature 2', ...],
    price: 'À partir de XXX€',
  },
];
```

---

### 6. Process (`components/Process.jsx`)

**Description** : Processus de travail en 5 étapes

**Props** : Aucune (utilise `processSteps` de data)

**Features** :
- Timeline visuelle (ligne horizontale desktop)
- 5 étapes numérotées
- Icônes personnalisées par étape
- Cards avec hover effects
- Layout responsive (horizontal → vertical)

**Icônes** :
```javascript
const iconMap = {
  'MessageCircle': MessageCircle,
  'Calendar': Calendar,
  'Camera': Camera,
  'Film': Film,
  'CheckCircle': CheckCircle,
};
```

---

### 7. Testimonials (`components/Testimonials.jsx`)

**Description** : Témoignages clients avec stats

**Props** : Aucune (utilise `testimonials` de data)

**Features** :
- Grille de 3 témoignages
- Photos clients
- Système de notation (5 étoiles)
- Quote icon décoratif
- Barre de stats (4 métriques)

**Structure** :
```javascript
export const testimonials = [
  {
    id: 1,
    name: 'Nom',
    role: 'Poste',
    company: 'Entreprise',
    image: 'URL',
    text: 'Témoignage...',
    rating: 5,
  },
];
```

---

### 8. Blog (`components/Blog.jsx`)

**Description** : Aperçu des derniers articles

**Props** : Aucune (utilise `blogPosts` de data)

**Features** :
- Grille de 3 articles
- Image d'illustration
- Badge de catégorie
- Meta info (temps de lecture, date)
- Excerpt limité à 3 lignes
- Lien "Lire l'article"
- Bouton "Voir Tous les Articles"

**Fonction helper** :
```javascript
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {...});
};
```

---

### 9. Contact (`components/Contact.jsx`)

**Description** : Formulaire de contact complet

**Props** : Aucune

**Features** :
- Formulaire avec validation HTML5
- 5 champs (nom, email, téléphone, service, message)
- Informations de contact cliquables
- Liens réseaux sociaux
- Badge de disponibilité animé
- Background décoratif

**État** :
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});
```

**Gestion** :
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Traitement du formulaire
  console.log('Form submitted:', formData);
  // Réinitialisation
  setFormData({...});
};
```

**Intégration backend** :
Pour connecter à un service email :
1. Utiliser Formspree, EmailJS ou un backend custom
2. Remplacer le `handleSubmit` avec un appel API

---

### 10. Footer (`components/Footer.jsx`)

**Description** : Pied de page avec navigation complète

**Props** : Aucune

**Features** :
- Logo + description
- Liens sociaux
- Navigation (2 colonnes)
- Mentions légales
- Copyright dynamique
- Bouton scroll-to-top fixe

**Fonction** :
```javascript
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

---

## 🎣 Custom Hooks

### `useScrollPosition()`

**Fichier** : `hooks/useCustomHooks.js`

**Description** : Retourne la position Y du scroll

**Usage** :
```javascript
const scrollPosition = useScrollPosition();
const isScrolled = scrollPosition > 50;
```

---

### `useIntersectionObserver(options)`

**Fichier** : `hooks/useCustomHooks.js`

**Description** : Détecte quand un élément entre dans le viewport

**Params** :
- `options` - Options pour IntersectionObserver (ex: `{ threshold: 0.1 }`)

**Usage** :
```javascript
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

<div ref={ref} className={isVisible ? 'animate-in' : 'animate-out'}>
  Contenu
</div>
```

---

### `useMobileMenu()`

**Fichier** : `hooks/useCustomHooks.js`

**Description** : Gère l'état du menu mobile

**Returns** :
- `isOpen` - État ouvert/fermé
- `toggle()` - Basculer l'état
- `close()` - Fermer le menu

**Usage** :
```javascript
const { isOpen, toggle, close } = useMobileMenu();

<button onClick={toggle}>Menu</button>
<div className={isOpen ? 'open' : 'closed'}>...</div>
```

---

## 📊 Données (data/portfolioData.js)

Toutes les données statiques sont centralisées dans un seul fichier :

### Exports disponibles :

1. **portfolioItems** - Projets du portfolio (8 items)
2. **testimonials** - Témoignages clients (3 items)
3. **services** - Services offerts (3 items)
4. **stats** - Statistiques clés (4 items)
5. **processSteps** - Étapes du processus (5 items)
6. **blogPosts** - Articles de blog (3 items)
7. **socialLinks** - Liens réseaux sociaux (5 items)
8. **navLinks** - Liens de navigation (6 items)

**Avantage** : Modifier les données est centralisé et simple.

---

## 🎨 Styles et Animations

### index.css

**Animations CSS personnalisées** :
- `fadeInUp` - Fade in avec slide up
- `fadeIn` - Simple fade in
- `slideInLeft` - Slide depuis la gauche
- `slideInRight` - Slide depuis la droite
- `scaleIn` - Scale depuis 0.9
- `pulse` - Pulsation d'opacité

**Utility classes** :
- `.line-clamp-2` - Limite à 2 lignes
- `.line-clamp-3` - Limite à 3 lignes

**Scrollbar personnalisée** - Orange sur fond noir

**Selection text** - Background orange

---

## 🔄 Flux de Données

```
data/portfolioData.js
        ↓
    Components
        ↓
   Portfolio.jsx (Layout)
        ↓
     App.jsx
        ↓
    main.jsx → DOM
```

---

## 🎯 Bonnes Pratiques Implémentées

1. **Composants modulaires** - Faciles à maintenir et réutiliser
2. **Données centralisées** - Un seul fichier à éditer
3. **Hooks personnalisés** - Logic réutilisable
4. **Lazy loading** - Images chargées progressivement
5. **Responsive design** - Mobile first
6. **Accessibilité** - Labels, aria, focus states
7. **Performance** - Intersection Observer, animations CSS
8. **SEO-friendly** - Structure sémantique HTML5

---

## 🛠️ Maintenance

### Ajouter une nouvelle section

1. Créer le composant dans `components/`
2. Importer dans `Portfolio.jsx`
3. Ajouter entre les autres sections
4. (Optionnel) Ajouter les données dans `data/portfolioData.js`
5. Ajouter le lien dans `navLinks`

### Modifier le design global

1. **Couleurs** : `tailwind.config.js`
2. **Fonts** : `index.css` (Google Fonts import)
3. **Animations** : `index.css` (keyframes)
4. **Spacing** : Classes Tailwind dans les composants

---

## 📚 Références

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Dernière mise à jour** : Février 2026

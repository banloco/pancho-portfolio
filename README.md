# Fousseni Tchao - Portfolio Expert Communication Digitale 📸🎬

Portfolio ultra-moderne et personnalisé pour Fousseni Tchao, expert en communication digitale spécialisé dans la création de contenu photo et vidéo.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## 👤 À Propos

**Fousseni Tchao** - Expert en Communication Digitale
- 📍 Localisation : Abomey-Calavi, Bénin
- 📧 Email : Tchaofousseni038@gmail.com
- 📱 Tél : +229 01 66 55 57 85
- 🎓 Licence en communication digital et web-marketing (PIGIER - Bénin)
- 💼 Assistant Projet Digital - Agence Média Le Caméléon

### Compétences
- ✨ Création de contenu photo & vidéo
- 🎬 Montage vidéo (CapCut, DaVinci Resolve)
- 📱 Gestion des réseaux sociaux
- 📊 Stratégie de communication digitale
- 🎨 Créativité & Stratégie de marque

### Langues
- 🇫🇷 Français (langue maternelle)
- 🇬🇧 Anglais (niveau intermédiaire)
- 📜 DELF (Institut Français, 2024)

### Expérience Marquante
Participation à plusieurs événements professionnels d'envergure :
- 🎥 Lancement officiel Canal+ Box
- 🎬 Ouverture des salles de cinéma au Sofitel – Pavillon
- ✨ Lancement de la série Apparences au Novotel
- 🎪 Avant-première à Canal Olympia

### Créations pour Marques
- 🥤 OKALAMA (boisson)
- 🍷 Château de France

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## 🎨 Caractéristiques Principales

### Design & UI
- ✨ Design ultra-moderne avec palette sombre (#121212) et accents orange vif (#FF8C00)
- 🎭 Animations fluides et transitions CSS personnalisées
- 📱 100% Responsive - Mobile First Design
- 🌟 Effets hover sophistiqués sur tous les éléments interactifs
- 🎯 Navigation sticky avec effet backdrop-blur
- ♿ Accessibilité optimisée

### Sections Complètes

1. **Hero Section**
   - Titre impactant avec CTA
   - Image portrait stylisée
   - Stats en temps réel (projets, clients, awards)
   - Badges de disponibilité

2. **À Propos**
   - Présentation personnelle
   - Photos professionnelles
   - Barres de compétences animées
   - Cartes de valeurs avec icônes

3. **Portfolio / Galerie**
   - Grille responsive avec filtres (Tout / Photo / Vidéo)
   - Hover effects avancés
   - Badges de catégories
   - Système de cards avec overlay

4. **Services**
   - 3 services détaillés avec tarifs
   - Listes de features
   - Images de fond avec overlay
   - CTA personnalisé

5. **Processus de Travail**
   - 5 étapes visualisées
   - Timeline interactive
   - Icônes personnalisées
   - Design progressif

6. **Témoignages**
   - Avis clients avec photos
   - Système de notation (5 étoiles)
   - Stats de satisfaction
   - Design en cartes

7. **Blog**
   - Articles avec preview
   - Catégories et temps de lecture
   - Images d'illustration
   - Dates formatées

8. **Contact**
   - Formulaire complet et fonctionnel
   - Informations de contact cliquables
   - Liens réseaux sociaux
   - Badge de disponibilité en temps réel

9. **Footer**
   - Navigation complète
   - Liens sociaux
   - Mentions légales
   - Bouton scroll-to-top

## 🚀 Installation et Lancement

### Prérequis
- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

```bash
# Cloner le projet
cd pancho-portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

Le site sera accessible sur **http://localhost:3000**

## 🛠️ Technologies & Stack

### Core
- **React 18.2.0** - Framework JavaScript
- **Vite 5.0** - Build tool ultra-rapide
- **Tailwind CSS 3.3** - Framework CSS utility-first

### UI & Icons
- **Lucide React** - Bibliothèque d'icônes moderne
- **Google Fonts** - Inter & Montserrat

### Dev Tools
- **PostCSS** - Transformation CSS
- **Autoprefixer** - Compatibilité navigateurs

## 📁 Structure du Projet

```
pancho-portfolio/
├── public/                  # Fichiers statiques
├── src/
│   ├── components/          # Composants React modulaires
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── PortfolioGallery.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/               # Données statiques
│   │   └── portfolioData.js
│   ├── hooks/              # Custom React hooks
│   │   └── useCustomHooks.js
│   ├── App.jsx             # Composant racine
│   ├── Portfolio.jsx       # Layout principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Styles globaux + animations
├── index.html              # Template HTML
├── package.json            # Dépendances
├── vite.config.js          # Config Vite
├── tailwind.config.js      # Config Tailwind
└── postcss.config.js       # Config PostCSS
```

## 🎯 Architecture & Optimisations

### Code Modulaire
- **Composants réutilisables** - Séparation des responsabilités
- **Data centralisée** - Fichier unique pour toutes les données
- **Hooks personnalisés** - Logic réutilisable (scroll, intersection observer, mobile menu)

### Performance
- **Lazy Loading** - Chargement différé des images
- **Code Splitting** - Optimisation automatique par Vite
- **Animations CSS** - Performances natives
- **Intersection Observer** - Animations au scroll optimisées

### Responsive Design
- **Mobile First** - Design pensé pour mobile en priorité
- **Breakpoints Tailwind** - sm, md, lg, xl
- **Grid & Flexbox** - Layouts adaptatifs
- **Menu mobile** - Navigation optimisée pour tactile

## 🎨 Personnalisation

### Couleurs (tailwind.config.js)
```javascript
colors: {
  'dark-bg': '#121212',      // Fond principal
  'orange-accent': '#FF8C00', // Accent orange
}
```

### Données (src/data/portfolioData.js)
- Modifier les projets du portfolio
- Ajouter/modifier les services
- Personnaliser les témoignages
- Mettre à jour les articles de blog

### Images
Toutes les images utilisent **Unsplash** comme placeholder. Remplacez les URLs par vos propres images :
- Hero section
- Portfolio items
- Services backgrounds
- Blog posts
- Testimonials avatars

## 📱 Responsive Breakpoints

```css
Mobile:    < 640px   (sm)
Tablet:    640-768px (md)
Desktop:   768-1024px (lg)
Large:     1024px+   (xl)
```

## ✨ Fonctionnalités Interactives

- ✅ Smooth scroll vers les sections
- ✅ Menu mobile avec overlay
- ✅ Filtres dynamiques du portfolio
- ✅ Formulaire de contact validé
- ✅ Bouton scroll-to-top
- ✅ Animations au scroll (Intersection Observer)
- ✅ Hover effects sur tous les éléments
- ✅ Barres de progression animées
- ✅ Système de rating (étoiles)

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload le dossier dist/
```

### GitHub Pages
```bash
npm run build
# Configurez GitHub Pages avec le dossier dist/
```

## 📝 TODO / Améliorations Possibles

- [ ] Intégration backend pour le formulaire de contact
- [ ] Système de CMS pour gérer le contenu
- [ ] Lightbox pour visualiser les images du portfolio
- [ ] Player vidéo intégré pour les vidéos
- [ ] Blog complet avec routing
- [ ] Animations GSAP avancées
- [ ] Mode clair/sombre toggle
- [ ] Multi-langue (i18n)
- [ ] Analytics (Google Analytics / Plausible)
- [ ] SEO optimisé avec métadonnées dynamiques

## 🤝 Contribution

Ce portfolio est conçu pour être facilement personnalisable. N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est libre d'utilisation pour vos projets personnels et commerciaux.

## 💬 Support

Pour toute question ou suggestion :
- 📧 Email: contact@capture.com
- 💼 LinkedIn: [Votre profil]
- 🐦 Twitter: [@votre_handle]

---

**Créé avec ❤️ par Pancho Rodriguez**

*Transformez votre vision en contenu visuel exceptionnel* ✨

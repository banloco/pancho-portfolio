# 🚀 Guide de Démarrage Rapide

## Installation en 3 étapes

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

### 3. Ouvrir dans le navigateur
```
http://localhost:3000
```

## 📝 Personnalisation Rapide

### Changer les informations de contact
Fichier : `src/components/Contact.jsx`
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'VOTRE_EMAIL@domain.com', // ← Modifiez ici
    link: 'mailto:VOTRE_EMAIL@domain.com'
  },
  // ...
];
```

### Modifier le nom de la marque
Fichier : `src/components/Navbar.jsx` et `src/components/Footer.jsx`
```javascript
<span className="text-2xl font-bold text-orange-accent">VOTRE_NOM</span>
```

### Mettre à jour les projets du portfolio
Fichier : `src/data/portfolioData.js`
```javascript
export const portfolioItems = [
  {
    id: 1,
    title: 'Votre Projet',
    category: 'photography', // ou 'video'
    type: 'Portrait',
    image: 'URL_DE_VOTRE_IMAGE',
    description: 'Description de votre projet',
  },
  // Ajoutez plus de projets...
];
```

### Changer les services
Fichier : `src/data/portfolioData.js`
```javascript
export const services = [
  {
    id: 1,
    title: 'Votre Service',
    description: 'Description...',
    image: 'URL_IMAGE',
    features: ['Feature 1', 'Feature 2', ...],
    price: 'À partir de XXX€',
  },
  // ...
];
```

### Modifier les témoignages
Fichier : `src/data/portfolioData.js`
```javascript
export const testimonials = [
  {
    id: 1,
    name: 'Nom du Client',
    role: 'Poste',
    company: 'Entreprise',
    image: 'URL_PHOTO',
    text: 'Témoignage du client...',
    rating: 5,
  },
  // ...
];
```

### Personnaliser les couleurs
Fichier : `tailwind.config.js`
```javascript
colors: {
  'dark-bg': '#121212',      // Fond principal - changez cette valeur
  'orange-accent': '#FF8C00', // Couleur d'accent - personnalisez
}
```

## 🎨 Remplacer les Images

Toutes les images utilisent actuellement Unsplash comme placeholder. Pour utiliser vos propres images :

1. Ajoutez vos images dans un dossier `public/images/`
2. Remplacez les URLs dans les composants :
   - Hero : `src/components/Hero.jsx`
   - About : `src/components/About.jsx`
   - Portfolio : `src/data/portfolioData.js`
   - Services : `src/data/portfolioData.js`
   - Blog : `src/data/portfolioData.js`

Exemple :
```javascript
// Avant
image: 'https://images.unsplash.com/photo-...'

// Après
image: '/images/votre-photo.jpg'
```

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview

# Vérifier les erreurs
npm run lint  # (si configuré)
```

## 📱 Tester sur Mobile

### Option 1 : Appareils sur le même réseau
1. Lancez `npm run dev`
2. Notez l'adresse réseau affichée (ex: `192.168.1.x:3000`)
3. Ouvrez cette adresse sur votre mobile

### Option 2 : Outils de développement
- Chrome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
- Firefox Responsive Design Mode (Ctrl+Shift+M)

## 🚀 Déploiement

### Vercel (Plus simple)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
1. `npm run build`
2. Glissez-déposez le dossier `dist/` sur [app.netlify.com](https://app.netlify.com)

### GitHub Pages
1. Ajoutez dans `vite.config.js` :
```javascript
export default defineConfig({
  base: '/nom-du-repo/',
  // ...
})
```
2. `npm run build`
3. Poussez le dossier `dist/` vers la branche `gh-pages`

## ❓ Problèmes Courants

### Le serveur ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

### Les images ne s'affichent pas
- Vérifiez que les URLs sont correctes
- Pour les images locales, placez-les dans `public/`
- Utilisez des URLs absolues pour les images externes

### Les styles ne s'appliquent pas
```bash
# Redémarrez le serveur
# Ctrl+C puis npm run dev
```

### Erreur de build
```bash
# Vérifiez qu'il n'y a pas d'erreurs de syntaxe
npm run build
```

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Vite](https://vitejs.dev)
- [Icons Lucide](https://lucide.dev)
- [Images Unsplash](https://unsplash.com)

## 💡 Conseils

1. **Sauvegardez régulièrement** : Utilisez Git pour versionner votre code
2. **Testez sur plusieurs navigateurs** : Chrome, Firefox, Safari
3. **Optimisez les images** : Compressez-les avant upload (TinyPNG, Squoosh)
4. **SEO** : Ajoutez des meta tags dans `index.html`
5. **Analytics** : Intégrez Google Analytics ou Plausible

## 🎉 Vous Êtes Prêt !

Votre portfolio est maintenant prêt à être personnalisé et déployé. 

**N'oubliez pas de :**
- ✅ Remplacer toutes les images placeholder
- ✅ Mettre à jour les informations de contact
- ✅ Ajouter vos propres projets
- ✅ Personnaliser les textes
- ✅ Tester sur mobile et desktop

Bon courage ! 🚀

# 🎥 Guide - Ajouter vos Vidéos YouTube/Vimeo

## Étape 1 : Uploader vos vidéos sur YouTube ou Vimeo

### Option A : YouTube (Recommandé)
1. Allez sur [YouTube Studio](https://studio.youtube.com)
2. Cliquez **"Créer"** → **"Importer des vidéos"**
3. Uploadez vos 4 vidéos :
   - IMG_3308.MOV → "Création Vidéo Professionnelle"
   - IMG_3624.MOV → "Production Vidéo Créative"
   - IMG_5939.MOV → "Lancement Canal+ Box"
   - IMG_7133.MOV → "OKALAMA & Château de France"

4. Pour chaque vidéo :
   - Titre, description, miniature
   - Visibilité : **"Public"** ou **"Non répertorié"** (recommandé pour portfolio)
   - Notez l'**ID de la vidéo** (dans l'URL après `/watch?v=`)

### Option B : Vimeo
1. Allez sur [Vimeo](https://vimeo.com)
2. Uploadez vos vidéos
3. Notez l'ID de chaque vidéo

## Étape 2 : Récupérer les IDs des vidéos

### YouTube
L'URL d'une vidéo YouTube ressemble à :
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
L'ID est : **dQw4w9WgXcQ**

### Vimeo
L'URL d'une vidéo Vimeo ressemble à :
```
https://vimeo.com/123456789
```
L'ID est : **123456789**

## Étape 3 : Mettre à jour portfolioData.js

Ouvrez `src/data/portfolioData.js` et remplacez les placeholders :

### Pour YouTube :
```javascript
{
  id: 1,
  title: 'Création Vidéo Professionnelle',
  category: 'video',
  type: 'Vidéo',
  videoUrl: 'https://www.youtube.com/embed/VOTRE_ID_VIDEO_1', // ← Remplacez VOTRE_ID_VIDEO_1
  image: 'https://img.youtube.com/vi/VOTRE_ID_VIDEO_1/maxresdefault.jpg', // ← Même ID
  isVideo: true,
  description: 'Création de contenu vidéo professionnel pour réseaux sociaux',
},
```

**Exemple avec un vrai ID** :
```javascript
{
  id: 1,
  title: 'Création Vidéo Professionnelle',
  category: 'video',
  type: 'Vidéo',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  isVideo: true,
  description: 'Création de contenu vidéo professionnel pour réseaux sociaux',
},
```

### Pour Vimeo :
```javascript
{
  id: 1,
  title: 'Création Vidéo Professionnelle',
  category: 'video',
  type: 'Vidéo',
  videoUrl: 'https://player.vimeo.com/video/123456789', // ← ID Vimeo
  image: 'https://vumbnail.com/123456789.jpg', // ← Même ID (miniature)
  isVideo: true,
  description: 'Création de contenu vidéo professionnel pour réseaux sociaux',
},
```

## Étape 4 : Tester

```bash
npm run dev
```

Vérifiez que :
- ✅ Les miniatures des vidéos s'affichent
- ✅ Cliquer sur une vidéo ouvre YouTube/Vimeo dans un nouvel onglet
- ✅ L'icône Play apparaît au survol

## Astuce : Miniatures Personnalisées

Si vous voulez des miniatures personnalisées au lieu de celles YouTube auto :

1. Créez des captures d'écran de vos vidéos
2. Uploadez-les sur [Imgur](https://imgur.com) ou dans `public/thumbnails/`
3. Remplacez l'URL `image` :

```javascript
image: '/thumbnails/video1-thumb.jpg', // Miniature locale
// ou
image: 'https://i.imgur.com/VOTRE_IMAGE.jpg', // Miniature hébergée
```

## Exemple Complet

```javascript
export const portfolioItems = [
  {
    id: 1,
    title: 'Création Vidéo Professionnelle',
    category: 'video',
    type: 'Vidéo',
    videoUrl: 'https://www.youtube.com/embed/abc123XYZ',
    image: 'https://img.youtube.com/vi/abc123XYZ/maxresdefault.jpg',
    isVideo: true,
    description: 'Création de contenu vidéo professionnel pour réseaux sociaux',
  },
  {
    id: 2,
    title: 'Production Vidéo Créative',
    category: 'video',
    type: 'Vidéo',
    videoUrl: 'https://www.youtube.com/embed/def456ABC',
    image: 'https://img.youtube.com/vi/def456ABC/maxresdefault.jpg',
    isVideo: true,
    description: 'Montage et production vidéo créative pour campagnes digitales',
  },
  // ... autres vidéos
];
```

## Fichiers Utilisés

- ✅ **CV** : `/Fousseni_Tchao_Responsable digital.pdf` (local, dans `public/`)
- ✅ **Photo profil** : `/pancho-profil.jpeg` (local, dans `public/`)
- ✅ **Vidéos** : Liens YouTube/Vimeo externes

---

**Prêt à déployer une fois vos vidéos uploadées !** 🚀

// Portfolio Data
export const portfolioItems = [
  {
    id: 1,
    title: 'Création Vidéo Professionnelle',
    category: 'video',
    type: 'Vidéo',
    videoUrl: 'https://www.youtube.com/embed/VOTRE_VIDEO_ID_1', // Remplacez par votre lien YouTube/Vimeo
    image: 'https://img.youtube.com/vi/VOTRE_VIDEO_ID_1/maxresdefault.jpg', // Miniature auto YouTube
    isVideo: true,
    description: 'Création de contenu vidéo professionnel pour réseaux sociaux',
  },
  {
    id: 2,
    title: 'Production Vidéo Créative',
    category: 'video',
    type: 'Vidéo',
    videoUrl: 'https://www.youtube.com/embed/VOTRE_VIDEO_ID_2',
    image: 'https://img.youtube.com/vi/VOTRE_VIDEO_ID_2/maxresdefault.jpg',
    isVideo: true,
    description: 'Montage et production vidéo créative pour campagnes digitales',
  },
  {
    id: 3,
    title: 'Lancement Canal+ Box',
    category: 'video',
    type: 'Événementiel',
    videoUrl: 'https://www.youtube.com/embed/VOTRE_VIDEO_ID_3',
    image: 'https://img.youtube.com/vi/VOTRE_VIDEO_ID_3/maxresdefault.jpg',
    isVideo: true,
    description: 'Couverture vidéo du lancement officiel Canal+ Box - Événement corporate',
  },
  {
    id: 4,
    title: 'OKALAMA & Château de France',
    category: 'video',
    type: 'Marques',
    videoUrl: 'https://www.youtube.com/embed/VOTRE_VIDEO_ID_4',
    image: 'https://img.youtube.com/vi/VOTRE_VIDEO_ID_4/maxresdefault.jpg',
    isVideo: true,
    description: 'Création de contenu vidéo pour les marques OKALAMA et Château de France',
  },
  {
    id: 5,
    title: 'Ouverture Sofitel Cinéma',
    category: 'photography',
    type: 'Événement',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop',
    description: 'Reportage photo de l\'ouverture des salles de cinéma au Sofitel - Pavillon',
  },
  {
    id: 6,
    title: 'Série Apparences - Première',
    category: 'photography',
    type: 'Événementiel',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop',
    description: 'Couverture photo du lancement de la série Apparences au Novotel',
  },
  {
    id: 7,
    title: 'Avant-Première Canal Olympia',
    category: 'photography',
    type: 'Événementiel',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop',
    description: 'Reportage photo d\'avant-première à Canal Olympia',
  },
  {
    id: 8,
    title: 'Campagne Social Media',
    category: 'photography',
    type: 'Réseaux Sociaux',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop',
    description: 'Création de contenu pour campagne réseaux sociaux',
  },
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: 'Canal+ Bénin',
    role: 'Responsable Communication',
    company: 'Canal+',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
    text: 'Fousseni a réalisé un excellent travail lors du lancement de notre Canal+ Box. Son professionnalisme et sa créativité ont vraiment fait la différence. Contenu de qualité livré dans les délais.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Directrice Marketing',
    company: 'Entreprise Locale',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop',
    text: 'Sa maîtrise des réseaux sociaux et sa capacité à créer du contenu engageant ont boosté notre visibilité en ligne. Je recommande vivement ses services !',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jean-Claude Assogba',
    role: 'Gérant',
    company: 'Business Bénin',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop',
    text: 'Fousseni a transformé notre présence digitale. Ses vidéos et contenus créatifs ont attiré beaucoup de nouveaux clients. Un vrai expert en communication digitale !',
    rating: 5,
  },
];

// Services Data
export const services = [
  {
    id: 1,
    title: 'Création de Contenu',
    description: 'Contenus photo et vidéo captivants pour vos réseaux sociaux et plateformes digitales. Stories, reels, posts optimisés.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop',
    features: ['Photos produits', 'Vidéos promotionnelles', 'Stories Instagram', 'Reels TikTok'],
    price: 'À partir de 50.000 FCFA',
  },
  {
    id: 2,
    title: 'Montage Vidéo',
    description: 'Post-production professionnelle avec CapCut et DaVinci Resolve. Clips, vidéos corporate, contenus web.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
    features: ['Montage professionnel', 'Color grading', 'Effets spéciaux', 'Sous-titrage'],
    price: 'À partir de 75.000 FCFA',
  },
  {
    id: 3,
    title: 'Stratégie Digitale',
    description: 'Stratégie de communication digitale complète. Gestion de réseaux sociaux, stratégie de marque et contenus.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    features: ['Community management', 'Calendrier éditorial', 'Analyse de performances', 'Stratégie de marque'],
    price: 'À partir de 100.000 FCFA',
  },
];

// Stats Data
export const stats = [
  { id: 1, value: '50+', label: 'Projets Réalisés' },
  { id: 2, value: '30+', label: 'Clients Satisfaits' },
  { id: 3, value: '3+', label: 'Années d\'Expérience' },
  { id: 4, value: '10+', label: 'Événements Couverts' },
];

// Process Steps
export const processSteps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Rencontre initiale pour comprendre votre vision et vos besoins spécifiques.',
    icon: 'MessageCircle',
  },
  {
    id: 2,
    title: 'Planification',
    description: 'Élaboration d\'un concept créatif et planification détaillée du projet.',
    icon: 'Calendar',
  },
  {
    id: 3,
    title: 'Production',
    description: 'Shooting photo/vidéo avec équipement professionnel et direction artistique.',
    icon: 'Camera',
  },
  {
    id: 4,
    title: 'Post-Production',
    description: 'Montage, retouche, color grading pour un résultat exceptionnel.',
    icon: 'Film',
  },
  {
    id: 5,
    title: 'Livraison',
    description: 'Remise des fichiers finaux en haute résolution et dans tous les formats.',
    icon: 'CheckCircle',
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: '10 Astuces pour Créer du Contenu Viral sur TikTok',
    excerpt: 'Découvrez les techniques qui fonctionnent pour booster votre visibilité et engager votre audience sur TikTok...',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop',
    category: 'Réseaux Sociaux',
    date: '2026-02-05',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Guide Complet du Montage Vidéo avec CapCut',
    excerpt: 'Maîtrisez CapCut pour créer des vidéos professionnelles pour vos réseaux sociaux...',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
    category: 'Montage Vidéo',
    date: '2026-01-28',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Stratégie de Contenu : Comment Planifier vos Publications',
    excerpt: 'Les secrets d\'un calendrier éditorial efficace pour maintenir une présence digitale constante...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    category: 'Stratégie',
    date: '2026-01-20',
    readTime: '6 min',
  },
];

// Social Links
export const socialLinks = [
  { id: 1, name: 'Instagram', url: 'https://instagram.com/fousseni_tchao', icon: 'Instagram' },
  { id: 2, name: 'YouTube', url: 'https://youtube.com/@foussenitchao', icon: 'Youtube' },
  { id: 3, name: 'Facebook', url: 'https://facebook.com/fousseni.tchao', icon: 'Facebook' },
  { id: 4, name: 'LinkedIn', url: 'https://linkedin.com/in/fousseni-tchao', icon: 'Linkedin' },
  { id: 5, name: 'Twitter', url: 'https://twitter.com/foussenitchao', icon: 'Twitter' },
];

// Navigation Links
export const navLinks = [
  { id: 1, name: 'Accueil', href: '#accueil' },
  { id: 2, name: 'À propos', href: '#apropos' },
  { id: 3, name: 'Portfolio', href: '#portfolio' },
  { id: 4, name: 'Services', href: '#services' },
  { id: 5, name: 'Processus', href: '#processus' },
  { id: 6, name: 'Blog', href: '#blog' },
];

import React from 'react';
import { Camera, Award, Heart, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const skills = [
    { name: 'Création de Contenu', level: 95 },
    { name: 'Montage Vidéo (CapCut/DaVinci)', level: 90 },
    { name: 'Gestion Réseaux Sociaux', level: 92 },
    { name: 'Stratégie Digitale', level: 88 },
  ];

  const features = [
    {
      icon: Camera,
      title: 'Créativité',
      description: 'Contenus visuels impactants et originaux',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Communication digitale et stratégie de visibilité',
    },
    {
      icon: Heart,
      title: 'Dynamisme',
      description: 'Esprit d\'analyse et capacité d\'adaptation',
    },
    {
      icon: Zap,
      title: 'Collaboration',
      description: 'Travail d\'équipe et gestion de communautés',
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">À Propos</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Qui Suis-Je ?</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-orange-accent/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/pancho-profil.jpeg" 
                alt="Fousseni Tchao - Expert en Communication Digitale" 
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl font-semibold mb-2">Fousseni Tchao</p>
                <p className="text-orange-accent font-medium">Expert en Communication Digitale</p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionné par la communication digitale, je mets ma créativité et mes compétences en web marketing 
                au service des marques. Diplômé d'une licence en Communication Digitale et Web-Marketing à 
                l'Université PIGIER Bénin (2021-2024), je réalise des contenus visuels impactants grâce à ma 
                maîtrise de CapCut et DaVinci Resolve.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                En tant qu'Assistant Projet Digital à l'Agence Média Le Caméléon, je gère les réseaux sociaux en 
                assurant la création de contenus adaptés aux différentes plateformes digitales. Je conçois des visuels 
                et des vidéos engageantes, élabore des calendriers éditoriaux et veille à la cohérence de l'image de marque. 
                J'assure également l'animation des communautés, le suivi des performances et l'optimisation des publications 
                pour accroître la visibilité et l'engagement.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                J'ai eu l'opportunité de participer à des événements d'envergure : lancement Canal+ Box, ouverture des 
                salles de cinéma à Sofitel-Pavillon, lancement de la série Apparences à Novotel et avant-première à 
                Canal Olympia. J'ai également créé du contenu pour des marques comme OKALAMA et Château de France. 
                Basé à Abomey-Calavi au Bénin, je parle français (langue maternelle) et anglais (niveau intermédiaire).
              </p>

              {/* Skills */}
              <div className="space-y-4 pt-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-orange-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-accent to-orange-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-orange-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-accent/20 transition-colors">
                    <IconComponent className="text-orange-accent" size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

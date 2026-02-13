import React from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="accueil" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-dark-bg to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block">
              <span className="bg-orange-accent/10 text-orange-accent px-4 py-2 rounded-full text-sm font-semibold border border-orange-accent/20">
                Créateur de Contenu Visuel
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-orange-accent leading-tight">
              Créateur de
              <br />
              <span className="text-white">Contenu Digital.</span>
            </h1>
            
            <h2 className="text-3xl sm:text-4xl font-light text-white">
              Fousseni Tchao
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Expert en communication digitale spécialisé dans la création de contenu photo et vidéo. 
              Je transforme vos idées en contenus visuels captivants pour booster votre présence en ligne. 
              De la stratégie à la réalisation, je donne vie à votre vision digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#portfolio"
                className="group inline-flex items-center justify-center bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-accent/90 transition-all duration-300 shadow-lg hover:shadow-orange-accent/50 hover:scale-105"
              >
                Voir Mon Travail
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a
                href="/cv_fousseni_tchao_responsable_digital.pdf"
                download="CV_Fousseni_Tchao.pdf"
                className="group inline-flex items-center justify-center bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Télécharger CV
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-orange-accent">50+</p>
                <p className="text-gray-400 text-sm">Projets</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-3xl font-bold text-orange-accent">30+</p>
                <p className="text-gray-400 text-sm">Clients</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-3xl font-bold text-orange-accent">10+</p>
                <p className="text-gray-400 text-sm">Événements</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-accent/30 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative">
                <img 
                  src="/IMG_3680.JPG.jpeg" 
                  alt="Fousseni Tchao - Expert en Communication Digitale" 
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-2xl ring-2 ring-orange-accent/30"
                  loading="eager"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-accent to-orange-600 text-white px-6 py-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">3+ Années</p>
                  <p className="text-sm font-light">D'Expérience</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl border border-orange-accent/20">
                  <p className="text-sm text-orange-accent font-semibold">Disponible</p>
                  <p className="text-xs text-gray-300">Pour Projets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

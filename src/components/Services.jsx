import React from 'react';
import { Camera, Video, Film, Check, ArrowRight, Target } from 'lucide-react';
import { services } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const iconMap = {
    'Création de Contenu': Camera,
    'Montage Vidéo': Film,
    'Stratégie Digitale': Target,
  };

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Ce Que Je Propose</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Des services professionnels adaptés à vos besoins spécifiques
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.title];
              return (
                <div 
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-orange-accent/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 min-h-[500px] flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-orange-accent/10 rounded-xl flex items-center justify-center border border-orange-accent/20 group-hover:bg-orange-accent/20 transition-colors">
                        <IconComponent className="text-orange-accent" size={32} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <div className="w-5 h-5 bg-orange-accent/20 rounded-full flex items-center justify-center">
                              <Check className="text-orange-accent" size={14} />
                            </div>
                          </div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <p className="text-orange-accent text-2xl font-bold">{service.price}</p>
                    </div>

                    {/* CTA Button */}
                    <button className="group/btn w-full bg-orange-accent/10 hover:bg-orange-accent text-orange-accent hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-orange-accent/30 hover:border-orange-accent">
                      En savoir plus
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-accent/10 via-orange-accent/5 to-orange-accent/10 border border-orange-accent/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Besoin d'un Service Personnalisé ?
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques 
                et obtenir un devis sur mesure.
              </p>
              <a 
                href="#contact"
                className="inline-block bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-accent/90 transition-all duration-300 shadow-lg hover:shadow-orange-accent/50"
              >
                Demander un Devis Gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

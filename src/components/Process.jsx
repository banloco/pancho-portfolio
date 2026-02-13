import React from 'react';
import { MessageCircle, Calendar, Camera, Film, CheckCircle } from 'lucide-react';
import { processSteps } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const Process = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const iconMap = {
    'MessageCircle': MessageCircle,
    'Calendar': Calendar,
    'Camera': Camera,
    'Film': Film,
    'CheckCircle': CheckCircle,
  };

  return (
    <section id="processus" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Processus</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Comment Je Travaille</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un processus structuré en 5 étapes pour garantir des résultats exceptionnels
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-accent/30 to-transparent transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = iconMap[step.icon];
                return (
                  <div 
                    key={step.id}
                    className="relative"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                    }}
                  >
                    {/* Step Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-orange-accent/50 transition-all duration-300 group">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-6 w-8 h-8 bg-orange-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-accent/50">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="mb-4 mt-2">
                        <div className="w-12 h-12 bg-orange-accent/10 rounded-lg flex items-center justify-center group-hover:bg-orange-accent/20 transition-colors">
                          <IconComponent className="text-orange-accent" size={24} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-orange-accent transition-colors">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative Element */}
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-orange-accent/5 rounded-full blur-xl group-hover:bg-orange-accent/10 transition-colors"></div>
                    </div>

                    {/* Connection Arrow - Mobile/Tablet */}
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-orange-accent/50 to-transparent"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Prêt à commencer votre projet ?
            </p>
            <a 
              href="#contact"
              className="inline-block bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-accent/90 transition-all duration-300 shadow-lg hover:shadow-orange-accent/50 hover:scale-105"
            >
              Démarrons Ensemble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

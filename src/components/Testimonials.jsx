import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Témoignages</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Ce Que Disent Mes Clients</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              La satisfaction client est ma priorité absolue
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-orange-accent/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={80} className="text-orange-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-orange-accent fill-orange-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-accent/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-orange-accent">{testimonial.company}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-orange-accent/5 rounded-full blur-2xl group-hover:bg-orange-accent/10 transition-colors"></div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-accent mb-2">4.9/5</p>
              <p className="text-gray-400">Note Moyenne</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-accent mb-2">30+</p>
              <p className="text-gray-400">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-accent mb-2">50+</p>
              <p className="text-gray-400">Projets Livrés</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-accent mb-2">98%</p>
              <p className="text-gray-400">Taux de Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

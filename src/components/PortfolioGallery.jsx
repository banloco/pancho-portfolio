import React, { useState } from 'react';
import { Camera, Video, Play, ExternalLink } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const PortfolioGallery = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Toutes les Vidéos', icon: null },
    { id: 'video', label: 'Productions Vidéo', icon: Video },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Mes Réalisations</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes meilleurs projets photo et vidéo
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-orange-accent text-white shadow-lg shadow-orange-accent/30'
                      : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {IconComponent && <IconComponent size={18} />}
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-orange-accent/50">
              Voir Plus de Projets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (item.videoUrl) {
      // Gérer les liens TikTok et YouTube
      if (item.videoUrl.includes('tiktok.com')) {
        window.open(item.videoUrl, '_blank');
      } else {
        window.open(item.videoUrl.replace('embed/', 'watch?v='), '_blank');
      }
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Image/Thumbnail */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-60'
        }`}></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            item.category === 'photography' 
              ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
              : 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
          }`}>
            {item.type}
          </span>
        </div>

        {/* Play Icon for Videos */}
        {item.category === 'video' && (
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center shadow-2xl">
              <Play className="text-white ml-1" size={24} fill="white" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-2'
      }`}>
        <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
        <p className={`text-gray-300 text-sm mb-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
        }`}>
          {item.description}
        </p>
        
        {/* Skills Tags */}
        {item.skills && (
          <div className={`flex flex-wrap gap-2 mb-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
          }`}>
            {item.skills.slice(0, 3).map((skill, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 bg-orange-accent/20 text-orange-accent rounded-md border border-orange-accent/30"
              >
                {skill}
              </span>
            ))}
            {item.skills.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-400">
                +{item.skills.length - 3}
              </span>
            )}
          </div>
        )}
        
        <div className={`flex items-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="flex items-center gap-2 text-orange-accent hover:text-orange-500 font-semibold text-sm">
            Voir la Vidéo <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;

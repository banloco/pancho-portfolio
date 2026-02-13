import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const Blog = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <section id="blog" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Derniers Articles</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conseils, tutoriels et actualités sur la création de contenu visuel
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-accent/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-accent/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-orange-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 text-orange-accent hover:text-orange-500 font-semibold text-sm group/link"
                  >
                    Lire l'article
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a 
              href="#"
              className="inline-block bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-orange-accent/50"
            >
              Voir Tous les Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

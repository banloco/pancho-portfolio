import React from 'react';
import { Aperture, Heart, ArrowUp } from 'lucide-react';
import { navLinks, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-orange-accent/20 rotate-45 rounded-lg"></div>
                <Aperture className="absolute inset-0 m-auto w-6 h-6 text-orange-accent" />
              </div>
              <span className="text-2xl font-bold text-orange-accent">Capture</span>
              <span className="text-2xl font-light text-white">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Expert en communication digitale spécialisé en création de contenu photo et vidéo. 
              Transformons ensemble vos idées en contenus visuels captivants depuis 2021.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Instagram', icon: 'instagram' },
                { name: 'YouTube', icon: 'youtube' },
                { name: 'Facebook', icon: 'facebook' },
                { name: 'LinkedIn', icon: 'linkedin' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-accent hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-accent/50"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-orange-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-accent transition-colors text-sm">
                  Photographie
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-accent transition-colors text-sm">
                  Vidéographie
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-accent transition-colors text-sm">
                  Montage Vidéo
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-accent transition-colors text-sm">
                  Retouche Photo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Fousseni Tchao. Tous droits réservés. Créé avec <Heart size={14} className="inline text-orange-accent fill-orange-accent" /> pour la création digitale
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-accent text-white rounded-full shadow-lg hover:bg-orange-accent/90 transition-all duration-300 flex items-center justify-center group hover:shadow-orange-accent/50 z-40"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;

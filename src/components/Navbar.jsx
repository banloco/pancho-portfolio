import React from 'react';
import { Aperture, Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import { useScrollPosition, useMobileMenu } from '../hooks/useCustomHooks';

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const { isOpen, toggle, close } = useMobileMenu();
  
  const isScrolled = scrollPosition > 50;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#accueil" className="flex items-center space-x-2 group" onClick={close}>
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-orange-accent/20 rotate-45 rounded-lg group-hover:rotate-90 transition-transform duration-500"></div>
              <Aperture className="absolute inset-0 m-auto w-6 h-6 text-orange-accent group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold text-orange-accent">Capture</span>
            <span className="text-2xl font-light text-white">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white hover:text-orange-accent transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-orange-accent text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-accent/90 transition-all duration-300 shadow-lg hover:shadow-orange-accent/50 hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-orange-accent transition-colors"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 top-16 bg-black/98 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 pt-8 pb-4 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block py-3 text-xl text-white hover:text-orange-accent transition-colors border-b border-gray-800"
              onClick={close}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full bg-orange-accent text-white px-6 py-3 rounded-xl font-semibold text-center mt-6 hover:bg-orange-accent/90 transition-all"
            onClick={close}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

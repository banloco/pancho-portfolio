import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGallery from './components/PortfolioGallery';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => {
  return (
    <div className="bg-dark-bg text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <PortfolioGallery />
      <Services />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;

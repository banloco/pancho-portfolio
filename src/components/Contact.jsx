import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Instagram, Youtube, Facebook, Linkedin, Twitter, Download } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useCustomHooks';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Tchaofousseni038@gmail.com',
      link: 'mailto:Tchaofousseni038@gmail.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 01 66 55 57 85',
      link: 'tel:+22901665557 85'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Abomey-Calavi, Bénin',
      link: '#'
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', link: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, name: 'YouTube', link: '#', color: 'hover:text-red-500' },
    { icon: Facebook, name: 'Facebook', link: '#', color: 'hover:text-blue-500' },
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, name: 'Twitter', link: '#', color: 'hover:text-sky-400' },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-5xl font-bold text-white mt-2 mb-4">Travaillons Ensemble</h2>
            <div className="w-24 h-1 bg-orange-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un projet en tête ? Discutons-en ! Je suis toujours ouvert à de nouvelles collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-accent/10 rounded-lg flex items-center justify-center group-hover:bg-orange-accent/20 transition-colors">
                          <IconComponent className="text-orange-accent" size={20} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                          <p className="text-white font-medium group-hover:text-orange-accent transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Suivez-Moi</h3>
                <div className="flex gap-3">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className={`w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-orange-accent/50`}
                        aria-label={social.name}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <p className="text-white font-semibold">Disponible pour de nouveaux projets</p>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Généralement, je réponds dans les 24 heures.
                </p>
                <a
                  href="/Fousseni_Tchao_Responsable digital.pdf"
                  download="Fousseni_Tchao_Responsable_digital.pdf"
                  className="inline-flex items-center justify-center w-full bg-orange-accent/10 hover:bg-orange-accent text-orange-accent hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 border border-orange-accent/30 hover:border-orange-accent"
                >
                  <Download size={18} className="mr-2" />
                  Télécharger mon CV
                </a>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-accent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-accent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-accent transition-colors"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service Recherché *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-accent transition-colors"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="photography">Photographie</option>
                      <option value="videography">Vidéographie</option>
                      <option value="editing">Montage</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-accent transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-orange-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-accent/90 transition-all duration-300 shadow-lg hover:shadow-orange-accent/50 flex items-center justify-center gap-2"
                >
                  Envoyer le Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

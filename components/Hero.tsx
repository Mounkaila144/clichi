'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Award, Clock, Users } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/Kilichi-Niger.jpg',
      title: 'Kilichi Authentique du Niger',
      subtitle: 'Viande séchée traditionnelle, saveurs ancestrales de Niamey'
    },
    {
      image: '/images/kilichi.avif',
      title: 'Kilichi Artisanal Premium',
      subtitle: 'Tradition nigérienne depuis des générations'
    },
    {
      image: '/images/WhatsApp Image 2025-06-30 at 20.39.06.jpeg',
      title: 'Kilichi de Qualité Supérieure',
      subtitle: 'Sélection rigoureuse, préparation traditionnelle'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleWhatsAppContact = () => {
    const message = "Bonjour! Je souhaite en savoir plus sur vos produits.";
    const whatsappUrl = `https://wa.me/22796467233?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToProducts}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Découvrir nos kilichi
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={handleWhatsAppContact}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-float">
              <Award className="h-12 w-12 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-gray-300">Années d'expérience</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
              <Users className="h-12 w-12 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-gray-300">Clients satisfaits</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <Clock className="h-12 w-12 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Service disponible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
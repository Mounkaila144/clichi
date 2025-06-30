'use client';

import { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppOrder = () => {
    const message = "Bonjour! Je souhaite passer une commande.";
    const whatsappUrl = `https://wa.me/22797977199?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">Clichi SHOP</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('produits')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Nos Produits
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                Commander
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('produits')}
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Nos Produits
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={handleWhatsAppOrder}
              className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            >
              Commander
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
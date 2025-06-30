import { Flame, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">Kilichi SHOP</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Depuis des générations, nous perpétuons la tradition ancestrale du kilichi avec passion 
              et expertise à Niamey. Chaque pièce est préparée selon les méthodes traditionnelles nigériennes 
              pour vous offrir une expérience culinaire authentique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#accueil" className="hover:text-red-400 transition-colors duration-200">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-red-400 transition-colors duration-200">À Propos</a></li>
              <li><a href="#produits" className="hover:text-red-400 transition-colors duration-200">Nos Kilichi</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Réservation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Quartier Plateau</li>
              <li>Niamey, Niger</li>
              <li className="pt-2">
                <a href="https://wa.me/22796467233" className="hover:text-red-400 transition-colors duration-200">
                  +227 97 97 71 99
                </a>
              </li>
              <li>
                <a href="mailto:contact@Kilichishop.ne" className="hover:text-red-400 transition-colors duration-200">
                  contact@Kilichishop.ne
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Kilichi SHOP Niamey. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-red-400 transition-colors duration-200">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-red-400 transition-colors duration-200">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
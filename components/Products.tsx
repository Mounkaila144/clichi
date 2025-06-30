'use client';

import { useState } from 'react';
import { Star, Flame, Timer } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous nos produits' },
    { id: 'steaks', name: 'Steaks' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'specialites', name: 'Spécialités' }
  ];

  const products = [
    {
      id: 1,
      name: 'Steak de Bœuf Premium',
      category: 'steaks',
      price: '14 000 CFA',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Pièce de choix grillée à la perfection, servie avec légumes de saison',
      rating: 4.9,
      cookTime: '15 min',
      spiceLevel: 2
    },
    {
      id: 2,
      name: 'Burger BBQ Signature',
      category: 'burgers',
      price: '9 000 CFA',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Burger artisanal avec viande grillée, sauce BBQ maison et cheddar affiné',
      rating: 4.8,
      cookTime: '12 min',
      spiceLevel: 1
    },
    {
      id: 3,
      name: 'Côtes de Porc Marinées',
      category: 'specialites',
      price: '11 000 CFA',
      image: 'https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Côtes de porc marinées 24h, grillées lentement au feu de bois',
      rating: 4.7,
      cookTime: '25 min',
      spiceLevel: 2
    },
    {
      id: 4,
      name: 'Entrecôte Argentine',
      category: 'steaks',
      price: '16 000 CFA',
      image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Entrecôte argentine de 300g, grillée au charbon de bois',
      rating: 5.0,
      cookTime: '18 min',
      spiceLevel: 1
    },
    {
      id: 5,
      name: 'Brochettes Mixtes',
      category: 'specialites',
      price: '10 000 CFA',
      image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Mélange de bœuf, porc et légumes, marinés aux herbes de Provence',
      rating: 4.6,
      cookTime: '20 min',
      spiceLevel: 1
    },
    {
      id: 6,
      name: 'Burger Cheese Deluxe',
      category: 'burgers',
      price: '8 000 CFA',
      image: 'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Double steak haché, double fromage, bacon croustillant',
      rating: 4.8,
      cookTime: '10 min',
      spiceLevel: 1
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Bonjour! Je souhaite commander: ${productName} - ${price}`;
    const whatsappUrl = `https://wa.me/22797977199?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const renderSpiceLevel = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame
        key={i}
        className={`h-4 w-4 ${
          i < level ? 'text-red-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-red-600">Spécialités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de viandes grillées préparées avec passion 
            et servies dans les règles de l'art à Niamey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-red-600 font-bold text-lg">{product.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderSpiceLevel(product.spiceLevel)}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Timer className="h-4 w-4 mr-1" />
                    {product.cookTime}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleWhatsAppOrder(product.name, product.price)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Commander sur WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
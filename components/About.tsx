import { ChefHat, Shield, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                L'Art du Grill
                <span className="text-red-600"> à Niamey depuis 1995</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chez Clichi SHOP Niamey, nous perpétuons la tradition de la cuisson au grill avec passion et expertise. 
                Chaque pièce de viande est sélectionnée avec soin et grillée à la perfection pour révéler 
                tous ses arômes naturels dans le cœur du Niger.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <ChefHat className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-sm text-gray-600">
                  Plus de 25 ans d'expérience dans l'art du grill à Niamey
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualité</h3>
                <p className="text-sm text-gray-600">
                  Viandes sélectionnées chez les meilleurs éleveurs du Niger
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Leaf className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural</h3>
                <p className="text-sm text-gray-600">
                  Produits naturels sans additifs ni conservateurs
                </p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Notre Mission</h3>
              <p className="text-gray-700">
                Offrir à nos clients de Niamey une expérience culinaire exceptionnelle en alliant tradition, 
                innovation et respect du produit. Chaque bouchée raconte une histoire de passion 
                et de savoir-faire artisanal nigérien.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5639413/pexels-photo-5639413.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Chef grillant de la viande"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
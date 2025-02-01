import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'ski',
    name: 'SKI',
    description: 'Hochwertige Ski für jeden Anspruch',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'skibekleidung',
    name: 'SKIBEKLEIDUNG',
    description: 'Stylisch und funktional durch die Saison',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'skischuhe',
    name: 'SKISCHUHE',
    description: 'Perfekter Halt für maximale Kontrolle',
    image: 'https://images.unsplash.com/photo-1596473536124-397c469c8506?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'skiausruestung',
    name: 'SKIAUSRÜSTUNG',
    description: 'Alles für Ihr perfektes Skierlebnis',
    image: 'https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

const CategoryGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-2">Unsere Kategorien</h2>
      <p className="text-gray-600 mb-12">Entdecken Sie unsere sorgfältig ausgewählten Produktkategorien</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover-scale">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {category.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white font-medium group/link"
              >
                <span className="border-b-2 border-transparent group-hover/link:border-white transition-colors">
                  ZUR KATEGORIE
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
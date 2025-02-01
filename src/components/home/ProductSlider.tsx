import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Atomic Redster X9',
    price: 899.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1596473536501-16348778be90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Fischer RC4 Pro',
    price: 799.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'Salomon S/Force Bold',
    price: 749.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1614358536373-1ce27819009e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    name: 'Head Supershape',
    price: 849.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1614270263016-ce6e3f460154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

const ProductSlider = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Trending Produkte</h2>
            <p className="text-gray-600">Entdecken Sie unsere beliebtesten Ski</p>
          </div>
          <div className="flex space-x-4">
            <button className="magical-button p-3 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="magical-button p-3 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover-scale">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price.toFixed(2)} €</span>
                    <button className="magical-button">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
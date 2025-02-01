import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1596473536115-8f071ee94dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Skifahrer in den Bergen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold mb-6 text-white leading-tight">
              Entdecken Sie die{' '}
              <span className="text-gradient">Perfektion</span>
              <br />
              des Wintersports
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Premium Skiausrüstung und Zubehör für Ihren perfekten Wintertag.
              Erleben Sie Qualität, die Sie spüren können.
            </p>
            <div className="flex space-x-6">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl
                               text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1
                               transition-all duration-300 flex items-center group">
                Jetzt entdecken
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-effect text-white px-8 py-4 rounded-xl text-lg font-medium
                               hover:bg-white/90 hover:text-gray-900 transition-all duration-300">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
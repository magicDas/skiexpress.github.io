import React, { useState } from 'react';
import { Search, User, ShoppingCart, Snowflake } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-6 text-sm">
          {['BIKE XPRESS', 'FITNESS XPRESS', 'GOLF XPRESS', 'LIFE XPRESS', 'OUTDOOR XPRESS'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">            
              <div className="relative">
                <div className="logo-container bg-blue-600 p-2 rounded-br-3xl">
                  <Snowflake className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-blue-400 opacity-50 rounded-br-3xl animate-shimmer"></div>
              </div>
              <span className="text-2xl font-light text-gray-600 custom-text">SKI <strong class="font-bold">XPRESS</strong></span>
          </div>

          {/* Main Navigation */}
          <nav className="mt-0">
            <ul className="flex justify-center space-x-12">
              {['MARKENWELTEN', 'SKI', 'SKIAUSRÜSTUNG', 'SKIBEKLEIDUNG', "SALE's"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 font-medium hover:text-blue-600 transition-all duration-300 relative group">
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-8">
            {/* Search */}
            <div className="relative group">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="magical-button p-2 rounded-full"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <div className={`absolute top-full right-0 mt-2 w-96 transform transition-all duration-300 origin-top-right
                ${isSearchOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <div className="glass-effect rounded-xl p-4 shadow-xl">
                  <input
                    type="text"
                    className="w-full bg-white/60 border border-white/20 rounded-lg py-2 px-4 text-black placeholder-black/40
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Suchen Sie nach Produkten..."
                  />
                </div>
              </div>
            </div>

            <a href="#" className="magical-button">
              <User className="h-5 w-5 mr-2 inline-block" />
              <span>Konto</span>
            </a>
            
            <a href="#" className="magical-button">
              <div className="relative inline-block">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="ml-2">0,00 €</span>
            </a>
          </div>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
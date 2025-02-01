import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import CategoryGrid from './components/home/CategoryGrid';
import ProductSlider from './components/home/ProductSlider';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <ProductSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
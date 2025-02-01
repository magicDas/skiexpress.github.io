import React from 'react';
import { type Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.isConfigurable && (
          <div className="absolute top-2 right-2">
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
              Konfigurierbar
            </span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            Ab {product.price.toFixed(2)} €
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
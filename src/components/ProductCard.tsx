import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer group h-full animate-fadeIn hover:animate-pop">
      <div onClick={() => onProductClick(product)} className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200 ease-in-out" />
      </div>
      
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
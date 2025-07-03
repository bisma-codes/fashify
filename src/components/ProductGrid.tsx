import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  backgroundColor?: string;
  sectionId: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  products,
  onProductClick,
  onAddToCart,
  backgroundColor = 'bg-pink-200',
  sectionId
}) => {
  return (
    <section id={sectionId} className={`py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
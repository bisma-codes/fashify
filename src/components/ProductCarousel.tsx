import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  backgroundColor?: string;
  sectionId: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
  onProductClick,
  onAddToCart,
  backgroundColor = 'bg-white',
  sectionId
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 768) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section id={sectionId} className={`py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">{title}</h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          {products.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous products"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next products"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(products.length / itemsPerView) * 100}%`
              }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <ProductCard
                    product={product}
                    onProductClick={onProductClick}
                    onAddToCart={onAddToCart}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {products.length > itemsPerView && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
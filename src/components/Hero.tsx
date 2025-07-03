import React from 'react';
import heroModel from '../assets/beautiful-smiling-hipster-brunette-woman-model-stylish-pink-overcoat-biting-her-finger-full-length.jpg';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section id="hero" className="bg-pink-100 min-h-[400px] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left: Text */}
        <div className="flex flex-col justify-center items-center md:items-start px-4 sm:px-6 md:px-8 py-8 md:py-0 animate-slideInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center md:text-left leading-tight">
            Discover<br />Your<br />Style
          </h1>
          <p className="text-gray-700 mb-6 text-center md:text-left max-w-xs md:max-w-sm">
            Trendy, affordable, hand-picked fashion for every mood and season.
          </p>
          <button
            onClick={onShopNow}
            className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-transform duration-150 hover:scale-105"
          >
            Shop Now &rarr;
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center py-8 md:py-0">
          <div className="relative flex items-center justify-center animate-pop">
            <span className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-pink-200 rounded-full z-0"></span>
            <img
              src={heroModel}
              alt="Fashion model"
              className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain drop-shadow-xl animate-fadeIn"
              style={{ objectPosition: 'bottom' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
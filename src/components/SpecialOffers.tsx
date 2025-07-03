import React from 'react';

const SpecialOffers: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Special Offers Content */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-6">Special Offers</h2>
            <div className="text-center space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-gray-600">Get up to</p>
              <p className="text-3xl md:text-4xl font-bold text-pink-600">50% OFF</p>
              <p className="text-base md:text-lg text-gray-600">on selected items</p>
              <button 
                onClick={() => scrollToSection('featured')}
                className="bg-pink-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Shop Now
              </button>
              <p className="text-xs md:text-sm text-gray-500">*Limited time offer. Valid until end of month.</p>
              <div className="mt-3 md:mt-4 space-y-2">
                <p className="text-xs text-gray-600">Use code: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">SAVE50</span></p>
                <p className="text-xs text-gray-600">Free shipping on orders over $75</p>
              </div>
            </div>
          </div>

          {/* Special Offers Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Special offers model"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-red-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
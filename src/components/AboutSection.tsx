import React from 'react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Who We Are?</h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 px-4">
          At Fashify, we believe fashion should be fun, accessible, and inspiring. Since our
          founding, we've been committed to delivering high-quality style-forward pieces at prices that
          won't break the bank. Our curated collection features everything from everyday essentials to
          statement pieces, all designed to help you express your unique style. With our
          fashion-forward community and expert style advice, we're here to make sure you look and feel your best. Join our
          growing fashion community and explore your unique style with confidence.
        </p>
        <button
          onClick={onLearnMore}
          className="bg-gray-900 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Learn More →
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
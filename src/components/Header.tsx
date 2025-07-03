import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About', sectionId: 'about' },
    { name: 'Featured', sectionId: 'featured' },
    { name: 'New Arrivals', sectionId: 'new-arrivals' },
    { name: 'Contact Us', sectionId: 'contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Fashify</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="px-2 lg:px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors focus:outline-none focus:text-pink-600"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors focus:outline-none focus:text-pink-600"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} className="md:w-6 md:h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors focus:outline-none focus:text-pink-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="px-3 py-2 text-left text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition-colors focus:outline-none focus:text-pink-600 focus:bg-gray-50"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
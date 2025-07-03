import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Fashify</h3>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              Your one-stop destination for fashion-forward clothing and accessories.
            </p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                <span className="break-all">hello@fashify.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                <span>123 Fashion Ave, NY 10001</span>
              </div>
            </div>
            <div className="flex space-x-3 md:space-x-4">
              <button 
                onClick={() => openExternalLink('https://facebook.com/fashify')}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="md:w-5 md:h-5" />
              </button>
              <button 
                onClick={() => openExternalLink('https://instagram.com/fashify_official')}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="md:w-5 md:h-5" />
              </button>
              <button 
                onClick={() => openExternalLink('https://twitter.com/fashify')}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openExternalLink('/privacy-policy')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openExternalLink('/terms-of-service')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Terms of Service</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Customer Service</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li>
                <button 
                  onClick={() => openExternalLink('/help-center')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Help Center</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openExternalLink('/returns')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Returns & Exchanges</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openExternalLink('/size-guide')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Size Guide</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openExternalLink('/shipping-info')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Shipping Info</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openExternalLink('/track-order')}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1"
                >
                  <span>Track Your Order</span>
                  <ExternalLink size={10} className="md:w-3 md:h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">Subscribe to get updates on new arrivals and exclusive offers.</p>
            {isSubscribed ? (
              <div className="bg-green-600 text-white p-2 md:p-3 rounded-md text-center">
                <p className="text-xs md:text-sm">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 md:space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-white placeholder-gray-400 text-sm md:text-base"
                />
                <button 
                  type="submit"
                  className="w-full bg-pink-600 text-white px-3 md:px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-semibold text-sm md:text-base"
                >
                  Subscribe
                </button>
              </form>
            )}
            <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
              <p className="text-xs text-gray-500">Follow us for daily inspiration:</p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                <button 
                  onClick={() => openExternalLink('https://instagram.com/fashify_official')}
                  className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                >
                  @fashify_official
                </button>
                <button 
                  onClick={() => openExternalLink('https://tiktok.com/@fashify')}
                  className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                >
                  TikTok
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Company */}
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Company</h5>
              <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => openExternalLink('/careers')}
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/press')}
                    className="hover:text-white transition-colors"
                  >
                    Press & Media
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/sustainability')}
                    className="hover:text-white transition-colors"
                  >
                    Sustainability
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/affiliate-program')}
                    className="hover:text-white transition-colors"
                  >
                    Affiliate Program
                  </button>
                </li>
              </ul>
            </div>

            {/* Shopping */}
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Shopping</h5>
              <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('featured')}
                    className="hover:text-white transition-colors"
                  >
                    Featured Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('new-arrivals')}
                    className="hover:text-white transition-colors"
                  >
                    New Arrivals
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/sale')}
                    className="hover:text-white transition-colors"
                  >
                    Sale Items
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/gift-cards')}
                    className="hover:text-white transition-colors"
                  >
                    Gift Cards
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Support</h5>
              <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => openExternalLink('/faq')}
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/live-chat')}
                    className="hover:text-white transition-colors"
                  >
                    Live Chat
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/style-guide')}
                    className="hover:text-white transition-colors"
                  >
                    Style Guide
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openExternalLink('/personal-shopper')}
                    className="hover:text-white transition-colors"
                  >
                    Personal Shopper
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment & Security */}
        <div className="border-t border-gray-800 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-xs md:text-sm text-gray-400">Secure payments:</span>
              <div className="flex space-x-1 md:space-x-2">
                <div className="bg-white text-gray-900 px-1 md:px-2 py-1 rounded text-xs font-semibold">VISA</div>
                <div className="bg-white text-gray-900 px-1 md:px-2 py-1 rounded text-xs font-semibold">MC</div>
                <div className="bg-white text-gray-900 px-1 md:px-2 py-1 rounded text-xs font-semibold">AMEX</div>
                <div className="bg-white text-gray-900 px-1 md:px-2 py-1 rounded text-xs font-semibold">PayPal</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>📦 Free shipping over $50</span>
              <span>↩️ 30-day returns</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-4 md:mt-6 pt-4 md:pt-6 text-center text-gray-400">
          <p className="text-xs md:text-sm">&copy; 2024 Fashify. All rights reserved. | Made with ❤️ for fashion lovers worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
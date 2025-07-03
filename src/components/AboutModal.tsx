import React, { useState } from 'react';
import { X, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
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

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-500 animate-fadeIn">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500 animate-modalPop">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-pink-600">About Fashify</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-pink-100 rounded-full transition-colors duration-300 focus:scale-110 active:scale-95"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Story */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Welcome to Fashify, where style meets affordability. Founded in 2020, we've been on a mission to make fashion accessible to everyone, regardless of budget or background.
                </p>
                <p>
                  Our carefully curated collection features the latest trends and timeless classics, all at prices that won't break the bank. From everyday essentials to statement pieces, we believe that everyone deserves to look and feel their best.
                </p>
                <p>
                  We work directly with manufacturers and designers to bring you high-quality pieces at competitive prices. Our team of fashion experts travels the world to discover new trends and emerging talent, ensuring our collection is always fresh and exciting.
                </p>
              </div>
            </div>

            {/* Mission & Values */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  To democratize fashion by making high-quality, stylish clothing accessible to everyone. We believe that great style shouldn't come with a premium price tag.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Values</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Quality without compromise</li>
                    <li>• Sustainable fashion practices</li>
                    <li>• Inclusive sizing and styles</li>
                    <li>• Exceptional customer service</li>
                    <li>• Community-driven approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-pink-600" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <button 
                      onClick={() => window.open('tel:+15551234567')}
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      +1 (555) 123-4567
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-pink-600" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <button 
                      onClick={() => window.open('mailto:hello@fashify.com')}
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      hello@fashify.com
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-pink-600" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <button 
                      onClick={() => openExternalLink('https://maps.google.com/?q=123+Fashion+Ave+New+York+NY+10001')}
                      className="text-gray-600 hover:text-pink-600 transition-colors text-left"
                    >
                      123 Fashion Ave<br />New York, NY 10001
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => openExternalLink('https://facebook.com/fashify')}
                    className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors w-full text-left"
                  >
                    <Facebook size={20} />
                    <span>@fashify</span>
                    <ExternalLink size={12} />
                  </button>
                  <button 
                    onClick={() => openExternalLink('https://instagram.com/fashify_official')}
                    className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors w-full text-left"
                  >
                    <Instagram size={20} />
                    <span>@fashify_official</span>
                    <ExternalLink size={12} />
                  </button>
                  <button 
                    onClick={() => openExternalLink('https://twitter.com/fashify')}
                    className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors w-full text-left"
                  >
                    <Twitter size={20} />
                    <span>@fashify</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => openExternalLink('/size-guide')}
                    className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
                  >
                    Size Guide
                  </button>
                  <button 
                    onClick={() => openExternalLink('/shipping-info')}
                    className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
                  >
                    Shipping Info
                  </button>
                  <button 
                    onClick={() => openExternalLink('/return-policy')}
                    className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
                  >
                    Return Policy
                  </button>
                  <button 
                    onClick={() => openExternalLink('/faq')}
                    className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => openExternalLink('/careers')}
                    className="block text-gray-600 hover:text-pink-600 transition-colors text-left"
                  >
                    Careers
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <h4 className="text-xl font-bold text-gray-900 mb-2 animate-fadeIn">Stay Updated</h4>
            <p className="text-gray-700 mb-4 animate-fadeIn delay-100">Subscribe to our newsletter for the latest fashion trends and exclusive offers.</p>
            {isSubscribed ? (
              <div className="bg-green-600 text-white p-3 rounded-md text-center animate-bounceIn">
                <p>Thank you for subscribing! Check your email for a welcome discount.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 animate-fadeIn delay-200">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all duration-300 focus:scale-105"
                />
                <button 
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Additional Company Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Business Hours</h5>
              <ul className="space-y-1">
                <li>Monday - Friday: 9:00 AM - 8:00 PM EST</li>
                <li>Saturday: 10:00 AM - 6:00 PM EST</li>
                <li>Sunday: 12:00 PM - 5:00 PM EST</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Customer Support</h5>
              <ul className="space-y-1">
                <li>📞 Phone Support: 24/7</li>
                <li>💬 Live Chat: 9 AM - 9 PM EST</li>
                <li>📧 Email: Response within 24 hours</li>
                <li>📱 Social Media: Follow for updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductGrid from './components/ProductGrid';
import ProductCarousel from './components/ProductCarousel';
import SpecialOffers from './components/SpecialOffers';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AboutModal from './components/AboutModal';
import { products } from './data/products';
import { Product } from './types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HelpCenter from './pages/HelpCenter';
import Returns from './pages/Returns';
import SizeGuide from './pages/SizeGuide';
import ShippingInfo from './pages/ShippingInfo';
import TrackOrder from './pages/TrackOrder';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const featuredProducts = products.filter(p => p.category === 'featured');
  const newProducts = products.filter(p => p.category === 'new');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleShopNow = () => {
    const element = document.getElementById('featured');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    setShowAboutModal(true);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header onCartClick={() => setShowCart(true)} />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero onShopNow={handleShopNow} />
                  <AboutSection onLearnMore={handleLearnMore} />
                  <ProductGrid
                    title="Featured Products"
                    products={featuredProducts}
                    onProductClick={handleProductClick}
                    onAddToCart={handleAddToCart}
                    backgroundColor="bg-pink-200"
                    sectionId="featured"
                  />
                  <ProductCarousel
                    title="New Arrivals"
                    products={newProducts}
                    onProductClick={handleProductClick}
                    onAddToCart={handleAddToCart}
                    backgroundColor="bg-white"
                    sectionId="new-arrivals"
                  />
                  <SpecialOffers />
                  <ContactForm />
                </>
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/shipping-info" element={<ShippingInfo />} />
              <Route path="/track-order" element={<TrackOrder />} />
            </Routes>
          </main>
          <Footer />
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
          {showCart && (
            <Cart
              onClose={() => setShowCart(false)}
              onCheckout={() => {
                setShowCart(false);
                setShowCheckout(true);
              }}
            />
          )}
          {showCheckout && (
            <Checkout onClose={() => setShowCheckout(false)} />
          )}
          {showAboutModal && (
            <AboutModal onClose={() => setShowAboutModal(false)} />
          )}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onClose }) => {
  const { items, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
          <div className="text-green-600 mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Complete!</h2>
          <p className="text-gray-600">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                  </div>
                  <div className="mt-4 space-y-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP code"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition-colors disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : `Complete Order - $${getCartTotal().toFixed(2)}`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-600">Size: {item.size} | Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
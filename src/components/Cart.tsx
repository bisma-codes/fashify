import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose, onCheckout }) => {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-500">Your cart is empty</p>
            <button
              onClick={onClose}
              className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-4 p-4 border rounded-lg">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="font-bold">${item.product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id, item.size)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
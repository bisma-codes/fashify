import React, { createContext, useContext, useReducer } from 'react';
import { CartItem, Product, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; size: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; size: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, size, quantity } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }

      return {
        items: [...state.items, { product, size, quantity }]
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        items: state.items.filter(
          item => !(item.product.id === action.payload.productId && item.size === action.payload.size)
        )
      };
    }
    case 'UPDATE_QUANTITY': {
      const { productId, size, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          items: state.items.filter(
            item => !(item.product.id === productId && item.size === size)
          )
        };
      }
      return {
        items: state.items.map(item =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
      };
    }
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product: Product, size: string, quantity: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, size, quantity } });
  };

  const removeFromCart = (productId: number, size: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId, size } });
  };

  const updateQuantity = (productId: number, size: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, quantity } });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
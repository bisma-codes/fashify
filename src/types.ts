export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'featured' | 'new';
  description: string;
  sizes: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, quantity: number) => void;
  removeFromCart: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  clearCart: () => void;
}
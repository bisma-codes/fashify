import { Product } from '../types';

import yellowBlazerImg from '../assets/portrait-young-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isolated.jpg';
import chicDressImg from '../assets/beautiful-smiling-hipster-brunette-woman-model-stylish-pink-overcoat-biting-her-finger-full-length.jpg';
import poloDressImg from '../assets/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-jacket-jeans-fashion-male-posing-studio-near-white-wall.jpg';
import floralDressImg from '../assets/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated.jpg';
import stripedDressImg from '../assets/two-young-beautiful-smiling-girls-trendy-summer-jeans-clothes-yellow-hoodie-carefree-women-positive-models.jpg';
import casualTeeImg from '../assets/two-young-beautiful-brunette-girls-nice-trendy-summer-suit-clothes.jpg';
import denimJacketImg from '../assets/full-length-beautiful-teen-girl-isolated.jpg';
import whiteShirtImg from '../assets/happy-woman-posing-white-jacket-blue-outfit.jpg';

export const products: Product[] = [
  // Featured Products
  {
    id: 1,
    name: 'Yellow Blazer',
    price: 129.99,
    image: yellowBlazerImg,
    category: 'featured',
    description: 'Stylish yellow blazer perfect for professional and casual occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 2,
    name: 'Chic Dress',
    price: 89.99,
    image: chicDressImg,
    category: 'featured',
    description: 'Elegant dress suitable for formal events and special occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 3,
    name: 'Polo Dress',
    price: 79.99,
    image: poloDressImg,
    category: 'featured',
    description: 'Comfortable polo dress for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 4,
    name: 'Floral Dress',
    price: 99.99,
    image: floralDressImg,
    category: 'featured',
    description: 'Beautiful floral dress perfect for spring and summer.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  // New Arrivals
  {
    id: 5,
    name: 'Striped Dress',
    price: 69.99,
    image: stripedDressImg,
    category: 'new',
    description: 'Trendy striped dress with a modern cut.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 6,
    name: 'Casual Tee',
    price: 29.99,
    image: casualTeeImg,
    category: 'new',
    description: 'Comfortable casual t-shirt for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 7,
    name: 'Denim Jacket',
    price: 109.99,
    image: denimJacketImg,
    category: 'new',
    description: 'Classic denim jacket that pairs with any outfit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 8,
    name: 'White Shirt',
    price: 49.99,
    image: whiteShirtImg,
    category: 'new',
    description: 'Crisp white shirt perfect for professional settings.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 9,
    name: 'Plaid Blazer',
    price: 139.99,
    image: stripedDressImg,
    category: 'new',
    description: 'Stylish plaid blazer for a sophisticated look.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 10,
    name: 'Beige Dress',
    price: 89.99,
    image: chicDressImg,
    category: 'new',
    description: 'Elegant beige dress for versatile styling.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 11,
    name: 'Casual Pants',
    price: 59.99,
    image: casualTeeImg,
    category: 'new',
    description: 'Comfortable casual pants for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 12,
    name: 'Jacket Dress',
    price: 119.99,
    image: denimJacketImg,
    category: 'new',
    description: 'Stylish jacket dress combining comfort and elegance.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  }
];
import { Product } from '../components/blocks/ProductCard';

export const newArrivals: Product[] = [
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    image: './assets/images/product-1.png',
    rating: 4.5,
    price: 120,
  },
  {
    id: '2',
    name: 'Skinny Fit Jeans',
    image: './assets/images/product-2.png',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: '3',
    name: 'Checkered Shirt',
    image: './assets/images/product-3.png',
    rating: 4.5,
    price: 180,
  },
  {
    id: '4',
    name: 'Sleeve Striped T-shirt',
    image: './assets/images/product-4.png',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
  },
];

export const topSelling: Product[] = [
  {
    id: '5',
    name: 'Vertical Striped Shirt',
    image: './assets/images/product-5.png',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
  },
  {
    id: '6',
    name: 'Courage Graphic T-shirt',
    image: './assets/images/product-6.png',
    rating: 4.0,
    price: 145,
  },
  {
    id: '7',
    name: 'Loose Fit Bermuda Shorts',
    image: './assets/images/product-7.png',
    rating: 3.0,
    price: 80,
  },
  {
    id: '8',
    name: 'Faded Skinny Jeans',
    image: './assets/images/product-8.png',
    rating: 4.5,
    price: 210,
  },
];

export const categoryProducts: Product[] = [
  {
    id: '6',
    name: 'Gradient Graphic T-shirt',
    image: './assets/images/product-6.png',
    rating: 3.5,
    price: 145,
  },
  {
    id: '11',
    name: 'Polo with Tipping Details',
    image: './assets/images/product-11.png',
    rating: 4.5,
    price: 180,
  },
  {
    id: '12',
    name: 'Black Striped T-shirt',
    image: './assets/images/product-12.png',
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
  },
  {
    id: '2',
    name: 'Skinny Fit Jeans',
    image: './assets/images/product-2.png',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: '3',
    name: 'Checkered Shirt',
    image: './assets/images/product-3.png',
    rating: 4.5,
    price: 180,
  },
  {
    id: '4',
    name: 'Sleeve Striped T-shirt',
    image: './assets/images/product-4.png',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
  },
  {
    id: '5',
    name: 'Vertical Striped Shirt',
    image: './assets/images/product-5.png',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
  },
  {
    id: '6b',
    name: 'Courage Graphic T-shirt',
    image: './assets/images/product-6.png',
    rating: 4.0,
    price: 145,
  },
  {
    id: '7',
    name: 'Loose Fit Bermuda Shorts',
    image: './assets/images/product-7.png',
    rating: 3.0,
    price: 80,
  },
];

export const relatedProducts: Product[] = [
  {
    id: '9',
    name: 'Polo with Contrast Trims',
    image: './assets/images/product-9.png',
    rating: 4.0,
    price: 212,
    originalPrice: 242,
    discount: 20,
  },
  {
    id: '10',
    name: 'Gradient Graphic T-shirt',
    image: './assets/images/product-10.png',
    rating: 3.5,
    price: 145,
  },
  {
    id: '11',
    name: 'Polo with Tipping Details',
    image: './assets/images/product-11.png',
    rating: 4.5,
    price: 180,
  },
  {
    id: '12',
    name: 'Black Striped T-shirt',
    image: './assets/images/product-12.png',
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
  },
];

export interface CartItem {
  id: string;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

export const cartItems: CartItem[] = [
  {
    id: '6',
    name: 'Gradient Graphic T-shirt',
    image: './assets/images/product-6.png',
    size: 'Large',
    color: 'White',
    price: 145,
    quantity: 1,
  },
  {
    id: '3',
    name: 'Checkered Shirt',
    image: './assets/images/product-3.png',
    size: 'Medium',
    color: 'Red',
    price: 180,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Skinny Fit Jeans',
    image: './assets/images/product-2.png',
    size: 'Large',
    color: 'Blue',
    price: 240,
    quantity: 1,
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Samantha D.',
    rating: 4.5,
    verified: true,
    date: 'August 14, 2023',
    comment: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: '2',
    name: 'Alex M.',
    rating: 4,
    verified: true,
    date: 'August 15, 2023',
    comment: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
  },
  {
    id: '3',
    name: 'Ethan R.',
    rating: 3.5,
    verified: true,
    date: 'August 16, 2023',
    comment: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
  },
  {
    id: '4',
    name: 'Olivia P.',
    rating: 4,
    verified: true,
    date: 'August 17, 2023',
    comment: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
  },
  {
    id: '5',
    name: 'Liam K.',
    rating: 4,
    verified: true,
    date: 'August 18, 2023',
    comment: '"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer\'s skill. It\'s like wearing a piece of art that reflects my passion for both design and fashion."',
  },
  {
    id: '6',
    name: 'Ava H.',
    rating: 4.5,
    verified: true,
    date: 'August 19, 2023',
    comment: '"I\'m not just wearing a t-shirt; I\'m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter."',
  },
];
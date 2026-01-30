export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  category: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
  reviews?: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'casual',
  },
  {
    id: '2',
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'casual',
  },
  {
    id: '3',
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
    category: 'casual',
  },
  {
    id: '4',
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    category: 'casual',
  },
  {
    id: '5',
    name: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
    category: 'casual',
  },
  {
    id: '6',
    name: 'Courage Graphic T-shirt',
    price: 145,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    category: 'casual',
  },
  {
    id: '7',
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: 3.0,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400',
    category: 'casual',
  },
  {
    id: '8',
    name: 'Faded Skinny Jeans',
    price: 210,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'casual',
  },
  {
    id: 'one-life',
    name: 'One Life Graphic T-shirt',
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    category: 'casual',
    colors: ['olive', 'navy', 'black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    reviews: [
      {
        id: 'r1',
        author: 'Samantha D.',
        rating: 4.5,
        date: 'August 14, 2023',
        comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the minimalistic yet stylish pattern. It's become my favorite go-to shirt!",
        verified: true,
      },
      {
        id: 'r2',
        author: 'Alex M.',
        rating: 4,
        date: 'August 15, 2023',
        comment: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        verified: true,
      },
      {
        id: 'r3',
        author: 'Ethan R.',
        rating: 3.5,
        date: 'August 16, 2023',
        comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        verified: true,
      },
      {
        id: 'r4',
        author: 'Olivia P.',
        rating: 4,
        date: 'August 17, 2023',
        comment: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured creativity into making this t-shirt stand out.",
        verified: true,
      },
      {
        id: 'r5',
        author: 'Liam K.',
        rating: 4,
        date: 'August 18, 2023',
        comment: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        verified: true,
      },
      {
        id: 'r6',
        author: 'Ava H.',
        rating: 4.5,
        date: 'August 19, 2023',
        comment: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        verified: true,
      },
    ],
  },
  {
    id: '9',
    name: 'Polo with Contrast Trims',
    price: 212,
    originalPrice: 242,
    discount: 20,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400',
    category: 'casual',
  },
  {
    id: '10',
    name: 'Gradient Graphic T-shirt',
    price: 145,
    rating: 3.5,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    category: 'casual',
  },
  {
    id: '11',
    name: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400',
    category: 'casual',
  },
  {
    id: '12',
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    category: 'casual',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

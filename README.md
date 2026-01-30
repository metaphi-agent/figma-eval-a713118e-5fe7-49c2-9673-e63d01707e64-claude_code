# SHOP.CO E-commerce Website

A modern e-commerce website built with React, TypeScript, and Tailwind CSS, converted from a Figma design.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 6** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router v7** - Client-side routing
- **Framer Motion** - Animations

## Features

- **Homepage** - Hero section, new arrivals, top selling products, browse by style, customer reviews
- **Product Detail Page** - Image gallery, color/size selection, reviews tab, related products
- **Category Page** - Sidebar filters (price, color, size, style), product grid, pagination
- **Cart Page** - Cart items management, order summary, promo codes

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (Button, StarRating)
│   └── blocks/      # Page blocks (Header, Footer, ProductCard)
├── pages/           # Page components
├── data/            # Mock data
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles and design tokens
```

## Design Tokens

The design uses custom CSS variables defined in `index.css`:

- **Colors**: Primary black, neutrals, accent red, rating gold
- **Typography**: Integral CF (display), Satoshi (body)
- **Border radius**: sm (8px), md (16px), lg (20px), xl (40px), full (62px)

## License

MIT
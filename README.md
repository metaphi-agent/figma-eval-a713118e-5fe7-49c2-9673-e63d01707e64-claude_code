# SHOP.CO - E-commerce Website

A modern, fully responsive e-commerce website built with React, Vite, and Tailwind CSS v4. Converted from a Figma design to production-ready code.

## Features

- 🛍️ **Product Catalog**: Browse through various product categories
- 🔍 **Advanced Filtering**: Filter products by category, price, color, size, and style
- ⭐ **Product Reviews**: View detailed product reviews with ratings
- 🛒 **Shopping Cart**: Add products to cart with quantity management
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, minimalist design with smooth animations
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Pages

1. **Homepage** - Hero section, brand logos, new arrivals, top selling products, browse by style, customer reviews
2. **Product Detail** - Product images, specifications, color/size selection, reviews, recommendations
3. **Category Page** - Product grid with advanced filters and pagination
4. **Cart** - Shopping cart with order summary and promo code support

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/metaphi-agent/figma-eval-a713118e-5fe7-49c2-9673-e63d01707e64-claude_code.git
cd figma-eval-a713118e-5fe7-49c2-9673-e63d01707e64-claude_code
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to \`http://localhost:5173\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The optimized production build will be in the \`dist\` directory.

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Rating.jsx
│   │   ├── QuantitySelector.jsx
│   │   └── ProductCard.jsx
│   └── blocks/          # Larger composite components
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Newsletter.jsx
├── pages/               # Page components
│   ├── Homepage.jsx
│   ├── ProductDetail.jsx
│   ├── CategoryPage.jsx
│   └── Cart.jsx
├── data/                # Mock data
│   └── products.js
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles and Tailwind theme
\`\`\`

## Design System

### Colors

- **Primary**: Black (#000000), White (#FFFFFF)
- **Neutral**: 50-900 scale for grays
- **Accent**: Red, Green, Yellow for various UI elements

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Components

- All components follow consistent spacing and sizing patterns
- Buttons use rounded-full style for modern look
- Cards use rounded-xl with subtle borders
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1440px)

## Features in Detail

### Responsive Design

The application is fully responsive with optimized layouts for:
- **Mobile** (< 768px): Single column layouts, mobile navigation
- **Tablet** (768px - 1024px): 2-column grids, adapted spacing
- **Desktop** (> 1024px): Multi-column layouts, full navigation

### Performance Optimizations

- Lazy loading of images with \`loading="lazy"\`
- Route-based code splitting with React Router
- Optimized SVG icons
- Efficient component re-renders

## License

This project was generated from a Figma design for educational purposes.

## Credits

- Design: Hamza Naeem
- Implementation: Claude Code (AI-powered Figma-to-Code conversion)
- Original Figma File: [E-commerce Website Template](https://www.figma.com/design/C9pTFArzeIYdtuLla2wV8w/E-commerce-Website-Template--Freebie---Community-)

# SHOP.CO - E-commerce Website

A modern, fully-responsive e-commerce website built from Figma design to production-ready React code.

## Features

- 🏠 **Homepage** with hero section, new arrivals, top selling products, and customer reviews
- 🛍️ **Product Detail Page** with image gallery, size/color selection, and customer reviews
- 📦 **Category Page** with advanced filters (price, color, size, dress style)
- 🛒 **Shopping Cart** with quantity management and order summary
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** with lazy loading and optimized images
- 🎨 **Tailwind CSS v4** for modern styling

## Tech Stack

- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Input, ProductCard)
│   └── blocks/          # Layout components (Header, Footer)
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CategoryPage.tsx
│   └── CartPage.tsx
├── data/                # Mock data
│   └── products.ts
├── App.tsx              # Main app component with routes
├── main.tsx             # App entry point
└── index.css            # Global styles and Tailwind config
```

## Design

Original Figma design: [E-commerce Website Template (Freebie)](https://www.figma.com/design/C9pTFArzeIYdtuLla2wV8w/E-commerce-Website-Template--Freebie---Community-)

## License

MIT

---

Built with [Claude Code](https://claude.com/claude-code)

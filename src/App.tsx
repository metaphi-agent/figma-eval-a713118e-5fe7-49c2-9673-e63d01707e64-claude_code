import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/blocks/Header';
import { Footer } from './components/blocks/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(m => ({ default: m.CategoryPage })));
const CartPage = lazy(() => import('./pages/CartPage').then(m => ({ default: m.CartPage })));

function LoadingSpinner() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Fallback routes */}
          <Route path="/signup" element={<HomePage />} />
          <Route path="/account" element={<HomePage />} />
          <Route path="/brands" element={<CategoryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

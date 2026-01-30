import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Input } from '../ui/Input';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        Sign up and get 20% off your first order.{' '}
        <button className="underline font-medium hover:no-underline">
          Sign Up Now
        </button>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              SHOP.CO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <button className="flex items-center gap-1 hover:text-neutral-600">
                Shop <ChevronDown size={16} />
              </button>
              <Link to="/category/casual" className="hover:text-neutral-600">
                On Sale
              </Link>
              <Link to="/category/casual" className="hover:text-neutral-600">
                New Arrivals
              </Link>
              <Link to="/category/casual" className="hover:text-neutral-600">
                Brands
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:block flex-1 max-w-xl">
              <Input
                type="search"
                placeholder="Search for products..."
                icon={<Search size={20} />}
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button className="lg:hidden p-2" aria-label="Search">
                <Search size={24} />
              </button>
              <Link to="/cart" className="p-2 relative" aria-label="Cart">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <button className="p-2" aria-label="Account">
                <User size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden mt-4">
            <Input
              type="search"
              placeholder="Search for products..."
              icon={<Search size={20} />}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-neutral-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <button className="flex items-center justify-between py-2 text-left">
                Shop <ChevronDown size={16} />
              </button>
              <Link to="/category/casual" className="py-2" onClick={() => setMobileMenuOpen(false)}>
                On Sale
              </Link>
              <Link to="/category/casual" className="py-2" onClick={() => setMobileMenuOpen(false)}>
                New Arrivals
              </Link>
              <Link to="/category/casual" className="py-2" onClick={() => setMobileMenuOpen(false)}>
                Brands
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

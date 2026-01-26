import { Link } from 'react-router-dom'
import { useState } from 'react'
import Input from '../ui/Input'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        <span>Sign up and get 20% off your first order. </span>
        <button className="underline font-medium">Sign Up Now</button>
        <button className="ml-4 md:ml-8" aria-label="Close banner">×</button>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 bg-white z-50 border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-extrabold">
              SHOP.CO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <button className="flex items-center gap-1 text-base hover:text-neutral-600 transition-colors">
                Shop
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link to="/category/on-sale" className="text-base hover:text-neutral-600 transition-colors">
                On Sale
              </Link>
              <Link to="/category/new-arrivals" className="text-base hover:text-neutral-600 transition-colors">
                New Arrivals
              </Link>
              <Link to="/category/brands" className="text-base hover:text-neutral-600 transition-colors">
                Brands
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:block flex-1 max-w-xl mx-8">
              <Input
                placeholder="Search for products..."
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button className="lg:hidden p-2" aria-label="Search">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link to="/cart" className="p-2" aria-label="Cart">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <button className="p-2" aria-label="Account">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200">
            <nav className="px-4 py-4 space-y-3">
              <Link to="/category/shop" className="block text-base py-2">Shop</Link>
              <Link to="/category/on-sale" className="block text-base py-2">On Sale</Link>
              <Link to="/category/new-arrivals" className="block text-base py-2">New Arrivals</Link>
              <Link to="/category/brands" className="block text-base py-2">Brands</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

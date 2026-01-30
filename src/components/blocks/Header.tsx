import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-black text-white py-2.5 px-4 text-center text-sm relative">
          <span>Sign up and get 20% off to your first order. </span>
          <Link to="/signup" className="underline font-medium">Sign Up Now</Link>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            aria-label="Close banner"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 5L5 15M5 5l10 10" />
            </svg>
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] py-5">
        <div className="flex items-center justify-between gap-10">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl lg:text-[32px] font-bold tracking-tight shrink-0">
            SHOP.CO
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-base hover:text-gray-600">
                Shop
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
            </div>
            <Link to="/category/sale" className={`text-base hover:text-gray-600 ${location.pathname === '/category/sale' ? 'font-medium' : ''}`}>
              On Sale
            </Link>
            <Link to="/category/new-arrivals" className={`text-base hover:text-gray-600 ${location.pathname === '/category/new-arrivals' ? 'font-medium' : ''}`}>
              New Arrivals
            </Link>
            <Link to="/brands" className={`text-base hover:text-gray-600 ${location.pathname === '/brands' ? 'font-medium' : ''}`}>
              Brands
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-[577px]">
            <div className="w-full bg-[#F0F0F0] rounded-full px-4 py-3 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black/40">
                <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-base placeholder:text-black/40"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3.5">
            {/* Mobile Search */}
            <button className="lg:hidden p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cart */}
            <Link to="/cart" className="p-2 relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* User */}
            <Link to="/account" className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12H21M3 6H21M3 18H21" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

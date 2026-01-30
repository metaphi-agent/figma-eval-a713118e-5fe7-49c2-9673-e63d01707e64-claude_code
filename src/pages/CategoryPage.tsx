import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/blocks/ProductCard';
import { categoryProducts } from '../data/products';

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
const filterColors = [
  '#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5',
  '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000'
];
const filterSizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

export function CategoryPage() {
  const [selectedColor, setSelectedColor] = useState(5);
  const [selectedSize, setSelectedSize] = useState(4);
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] py-6">
        <div className="flex items-center gap-3 text-sm">
          <Link to="/" className="text-black/60 hover:text-black">Home</Link>
          <span className="text-black/60">&gt;</span>
          <span className="text-black">Casual</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] pb-20">
        <div className="flex gap-5">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-auto' : 'hidden'} lg:block lg:static lg:w-[295px] shrink-0`}>
            <div className="flex items-center justify-between mb-6 lg:mb-6 pb-6 border-b border-black/10">
              <h2 className="font-bold text-xl">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <svg className="hidden lg:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M6 12h12M8 18h8" />
              </svg>
            </div>

            {/* Categories */}
            <div className="mb-6 pb-6 border-b border-black/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="flex items-center justify-between w-full py-2 text-black/60 hover:text-black transition-colors"
                >
                  <span>{cat}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 12l4-4-4-4" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-6 pb-6 border-b border-black/10">
              <button className="flex items-center justify-between w-full mb-5">
                <span className="font-bold text-xl">Price</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-black"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6 pb-6 border-b border-black/10">
              <button className="flex items-center justify-between w-full mb-5">
                <span className="font-bold text-xl">Colors</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
              <div className="flex flex-wrap gap-3">
                {filterColors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(index)}
                    className={`w-[37px] h-[37px] rounded-full flex items-center justify-center border ${
                      color === '#FFFFFF' ? 'border-black/20' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === index && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color === '#FFFFFF' || color === '#F5DD06' ? 'black' : 'white'} strokeWidth="2">
                        <path d="M3 8l4 4 6-8" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6 pb-6 border-b border-black/10">
              <button className="flex items-center justify-between w-full mb-5">
                <span className="font-bold text-xl">Size</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
              <div className="flex flex-wrap gap-2">
                {filterSizes.map((size, index) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(index)}
                    className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
                      selectedSize === index
                        ? 'bg-black text-white'
                        : 'bg-[#F0F0F0] text-black/60 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="mb-6">
              <button className="flex items-center justify-between w-full mb-5">
                <span className="font-bold text-xl">Dress Style</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
              {dressStyles.map((style) => (
                <button
                  key={style}
                  className="flex items-center justify-between w-full py-2 text-black/60 hover:text-black transition-colors"
                >
                  <span>{style}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 12l4-4-4-4" />
                  </svg>
                </button>
              ))}
            </div>

            <Button fullWidth className="lg:mt-4">Apply Filter</Button>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-2xl lg:text-3xl">Casual</h1>
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden p-2 bg-[#F0F0F0] rounded-full ml-2"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5h14M5 10h10M7 15h6" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black/60 text-sm hidden lg:inline">Showing 1-10 of 100 Products</span>
                <span className="text-sm">Sort by:</span>
                <select className="font-medium bg-transparent cursor-pointer">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-black/10">
              <Button variant="outline" size="sm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M12 5l-5 5 5 5" />
                </svg>
                Previous
              </Button>
              <div className="hidden lg:flex items-center gap-2">
                {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      page === 1 ? 'bg-[#F0F0F0] font-medium' : 'hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <Button variant="outline" size="sm">
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M8 5l5 5-5 5" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

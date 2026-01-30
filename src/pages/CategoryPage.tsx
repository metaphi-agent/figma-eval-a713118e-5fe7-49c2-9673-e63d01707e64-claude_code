import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, ChevronDown, ChevronUp, X } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';

export function CategoryPage() {
  const { category } = useParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState<string[]>(['blue']);
  const [selectedSize, setSelectedSize] = useState('Large');
  const [priceCollapsed, setPriceCollapsed] = useState(false);
  const [colorsCollapsed, setColorsCollapsed] = useState(false);
  const [sizeCollapsed, setSizeCollapsed] = useState(false);
  const [styleCollapsed, setStyleCollapsed] = useState(false);

  const categoryProducts = products.filter((p) => p.category === category);

  const colors = [
    { name: 'Green', value: 'green', class: 'bg-green-500' },
    { name: 'Red', value: 'red', class: 'bg-red-500' },
    { name: 'Yellow', value: 'yellow', class: 'bg-yellow-400' },
    { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
    { name: 'Cyan', value: 'cyan', class: 'bg-cyan-400' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-600' },
    { name: 'Purple', value: 'purple', class: 'bg-purple-600' },
    { name: 'Pink', value: 'pink', class: 'bg-pink-500' },
    { name: 'White', value: 'white', class: 'bg-white border border-neutral-300' },
    { name: 'Black', value: 'black', class: 'bg-black' },
  ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-bold text-xl mb-4">Filters</h3>
        <div className="space-y-2">
          {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((item) => (
            <button
              key={item}
              className="flex items-center justify-between w-full py-2 text-neutral-600 hover:text-black"
            >
              <span>{item}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Price */}
      <div>
        <button
          onClick={() => setPriceCollapsed(!priceCollapsed)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-bold text-xl">Price</h3>
          {priceCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
        {!priceCollapsed && (
          <div className="space-y-4">
            <input
              type="range"
              min="50"
              max="200"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      <hr className="border-neutral-200" />

      {/* Colors */}
      <div>
        <button
          onClick={() => setColorsCollapsed(!colorsCollapsed)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-bold text-xl">Colors</h3>
          {colorsCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
        {!colorsCollapsed && (
          <div className="grid grid-cols-5 gap-3">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  if (selectedColors.includes(color.value)) {
                    setSelectedColors(selectedColors.filter((c) => c !== color.value));
                  } else {
                    setSelectedColors([...selectedColors, color.value]);
                  }
                }}
                className={`w-10 h-10 rounded-full ${color.class} relative ${
                  selectedColors.includes(color.value) ? 'ring-2 ring-offset-2 ring-black' : ''
                }`}
                aria-label={color.name}
              >
                {selectedColors.includes(color.value) && (
                  <svg className="w-5 h-5 absolute inset-0 m-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border-neutral-200" />

      {/* Size */}
      <div>
        <button
          onClick={() => setSizeCollapsed(!sizeCollapsed)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-bold text-xl">Size</h3>
          {sizeCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
        {!sizeCollapsed && (
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border-neutral-200" />

      {/* Dress Style */}
      <div>
        <button
          onClick={() => setStyleCollapsed(!styleCollapsed)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-bold text-xl">Dress Style</h3>
          {styleCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
        {!styleCollapsed && (
          <div className="space-y-2">
            {dressStyles.map((style) => (
              <button
                key={style}
                className="flex items-center justify-between w-full py-2 text-neutral-600 hover:text-black"
              >
                <span>{style}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        )}
      </div>

      <Button className="w-full">Apply Filter</Button>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-6 border-b">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={16} />
          <span className="text-black capitalize">{category}</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block border border-neutral-200 rounded-2xl p-6 h-fit">
            <FilterSection />
          </aside>

          {/* Main Content */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold capitalize">{category}</h1>
              <div className="flex items-center gap-3">
                <span className="text-sm text-neutral-600 hidden sm:block">
                  Showing 1-10 of {categoryProducts.length} Products
                </span>
                <select className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <button
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden p-2 bg-neutral-100 rounded-lg"
                  aria-label="Open filters"
                >
                  <SlidersHorizontal size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t">
              <Button variant="outline">
                ← Previous
              </Button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      page === 1
                        ? 'bg-black text-white'
                        : 'bg-neutral-100 hover:bg-neutral-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <Button variant="outline">
                Next →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setFiltersOpen(false)} />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <FilterSection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

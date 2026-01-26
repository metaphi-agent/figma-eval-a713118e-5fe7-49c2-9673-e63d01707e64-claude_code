import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/blocks/Header'
import Footer from '../components/blocks/Footer'
import Newsletter from '../components/blocks/Newsletter'
import ProductCard from '../components/ui/ProductCard'
import Button from '../components/ui/Button'
import { products } from '../data/products'

export default function CategoryPage() {
  const { name } = useParams()
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([50, 200])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSize, setSelectedSize] = useState('Large')

  const colors = [
    { name: 'Green', hex: '#00C12B' },
    { name: 'Red', hex: '#F50606' },
    { name: 'Yellow', hex: '#F5DD06' },
    { name: 'Orange', hex: '#F57906' },
    { name: 'Cyan', hex: '#06CAF5' },
    { name: 'Blue', hex: '#063AF5' },
    { name: 'Purple', hex: '#7D06F5' },
    { name: 'Pink', hex: '#F506A4' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' }
  ]

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']

  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym']

  const categoryProducts = products.slice(0, 9)

  const toggleColor = (colorName) => {
    setSelectedColors(prev =>
      prev.includes(colorName)
        ? prev.filter(c => c !== colorName)
        : [...prev, colorName]
    )
  }

  const FilterSidebar = () => (
    <aside className="space-y-6">
      {/* Category Filters */}
      <div className="pb-6 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl">Filters</h2>
          <button onClick={() => setShowFilters(false)} className="lg:hidden">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="space-y-3">
          {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map(cat => (
            <li key={cat}>
              <button className="flex items-center justify-between w-full text-neutral-600 hover:text-black transition-colors">
                <span>{cat}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="pb-6 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Price</h3>
          <button>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="300"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">${priceRange[0]}</span>
            <span className="font-medium">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="pb-6 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Colors</h3>
          <button>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`w-10 h-10 rounded-full border-2 ${
                selectedColors.includes(color.name) ? 'border-black' : 'border-neutral-200'
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
            >
              {selectedColors.includes(color.name) && (
                <svg className="w-5 h-5 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: color.name === 'White' ? 'invert(1)' : 'none' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="pb-6 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Size</h3>
          <button>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
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
      </div>

      {/* Dress Style */}
      <div className="pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Dress Style</h3>
          <button>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <ul className="space-y-3">
          {dressStyles.map(style => (
            <li key={style}>
              <button className="flex items-center justify-between w-full text-neutral-600 hover:text-black transition-colors">
                <span>{style}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Button className="w-full">
        Apply Filter
      </Button>
    </aside>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>›</span>
            <span className="text-black capitalize">{name}</span>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-6">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <div className="grid lg:grid-cols-[280px,1fr] gap-8">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block">
                <FilterSidebar />
              </div>

              {/* Products Grid */}
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold capitalize">{name}</h1>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowFilters(true)}
                      className="lg:hidden p-2 bg-neutral-100 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </button>
                    <span className="text-sm text-neutral-600">
                      Showing 1-10 of 100 Products
                    </span>
                    <select className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm">
                      <option>Most Popular</option>
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                </div>

                {/* Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {categoryProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <Button variant="secondary" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </Button>

                  <div className="flex gap-2">
                    {[1, 2, 3, '...', 8, 9, 10].map((page, idx) => (
                      <button
                        key={idx}
                        className={`w-10 h-10 rounded-lg ${
                          page === 1
                            ? 'bg-black text-white'
                            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                        } ${page === '...' ? 'cursor-default hover:bg-neutral-100' : ''}`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <Button variant="secondary" size="sm">
                    Next
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <Newsletter />
          </div>
        </section>
      </main>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white overflow-y-auto p-6">
            <FilterSidebar />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

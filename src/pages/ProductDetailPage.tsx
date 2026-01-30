import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products, getProductById } from '../data/products';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id || 'one-life');
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('reviews');

  if (!product) {
    return <div className="max-w-[1440px] mx-auto px-4 py-20 text-center">Product not found</div>;
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

  const colors = [
    { name: 'Olive', class: 'bg-[#4F4631]' },
    { name: 'Navy', class: 'bg-[#314F4A]' },
    { name: 'Black', class: 'bg-black' },
  ];

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-6">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={16} />
          <Link to="/category/casual" className="hover:text-black">Shop</Link>
          <ChevronRight size={16} />
          <Link to="/category/casual" className="hover:text-black">Men</Link>
          <ChevronRight size={16} />
          <span className="text-black">T-shirts</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 lg:w-32 lg:h-32 rounded-xl overflow-hidden border-2 border-transparent hover:border-black"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-neutral-100 rounded-3xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">{product.name.toUpperCase()}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < fullStars
                        ? 'fill-yellow-400 text-yellow-400'
                        : i === fullStars && hasHalfStar
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-none text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm">{product.rating}/5</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-neutral-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            <p className="text-neutral-600 mb-6 pb-6 border-b">
              {product.description || 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm text-neutral-600 mb-3">Select Colors</h3>
              <div className="flex items-center gap-3">
                {colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full ${color.class} ${
                      selectedColor === i ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm text-neutral-600 mb-3">Choose Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
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

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 pb-6 border-b">
              <div className="flex items-center bg-neutral-100 rounded-full px-5 py-3 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-neutral-200 rounded-full"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:bg-neutral-200 rounded-full"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex border-b border-neutral-200 mb-8">
            {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' & ', '-').replace(' ', '-'))}
                className={`px-6 py-4 font-medium transition-colors relative ${
                  activeTab === tab.toLowerCase().replace(' & ', '-').replace(' ', '-')
                    ? 'text-black'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().replace(' & ', '-').replace(' ', '-') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
            ))}
          </div>

          {/* Reviews Section */}
          {activeTab === 'rating-reviews' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  All Reviews <span className="text-neutral-500">({product.reviews?.length || 0})</span>
                </h2>
                <div className="flex gap-3">
                  <button className="p-2 bg-neutral-100 rounded-full hover:bg-neutral-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </button>
                  <select className="px-4 py-2 bg-neutral-100 rounded-full text-sm font-medium hover:bg-neutral-200">
                    <option>Latest</option>
                    <option>Highest Rating</option>
                    <option>Lowest Rating</option>
                  </select>
                  <Button size="sm">Write a Review</Button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {product.reviews?.map((review) => (
                  <div key={review.id} className="border border-neutral-200 rounded-2xl p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(review.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : i === Math.floor(review.rating) && review.rating % 1 !== 0
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-none text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-bold">{review.author}</h3>
                      {review.verified && (
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="text-neutral-600 mb-4">{review.comment}</p>
                    <p className="text-sm text-neutral-500">Posted on {review.date}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">Load More Reviews</Button>
              </div>
            </div>
          )}
        </div>

        {/* You Might Also Like */}
        <section className="mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

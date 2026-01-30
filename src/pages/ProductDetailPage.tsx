import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { StarRating } from '../components/ui/StarRating';
import { ProductCard } from '../components/blocks/ProductCard';
import { relatedProducts, reviews } from '../data/products';

const productImages = [
  './assets/images/product-thumb-1.png',
  './assets/images/product-thumb-2.png',
  './assets/images/product-thumb-3.png',
];

const colors = [
  { name: 'Olive', value: '#4F4631' },
  { name: 'Green', value: '#314F4A' },
  { name: 'Navy', value: '#31344F' },
];

const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

export function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] py-6">
        <div className="flex items-center gap-3 text-sm">
          <Link to="/" className="text-black/60 hover:text-black">Home</Link>
          <span className="text-black/60">&gt;</span>
          <Link to="/category/shop" className="text-black/60 hover:text-black">Shop</Link>
          <span className="text-black/60">&gt;</span>
          <Link to="/category/men" className="text-black/60 hover:text-black">Men</Link>
          <span className="text-black/60">&gt;</span>
          <span className="text-black">T-shirts</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-[100px] pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-3.5">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full lg:w-[152px] h-[106px] lg:h-[167px] rounded-[20px] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-[444/530]">
              <img
                src="./assets/images/product-main.png"
                alt="One Life Graphic T-shirt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-6">
            <h1 className="font-display text-3xl lg:text-[40px] font-bold leading-tight mb-4">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={4.5} showValue />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="font-bold text-2xl lg:text-[32px]">$260</span>
              <span className="font-bold text-2xl lg:text-[32px] text-black/40 line-through">$300</span>
              <span className="bg-[#FF33331A] text-[#FF3333] text-sm font-medium px-3.5 py-1.5 rounded-full">
                -40%
              </span>
            </div>

            <p className="text-black/60 mb-6 pb-6 border-b border-black/10">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Selection */}
            <div className="mb-6 pb-6 border-b border-black/10">
              <p className="text-black/60 mb-4">Select Colors</p>
              <div className="flex gap-4">
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(index)}
                    className={`w-[37px] h-[37px] rounded-full flex items-center justify-center transition-transform ${
                      selectedColor === index ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  >
                    {selectedColor === index && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                        <path d="M3 8l4 4 6-8" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6 pb-6 border-b border-black/10">
              <p className="text-black/60 mb-4">Choose Size</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size, index) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(index)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      selectedSize === index
                        ? 'bg-black text-white'
                        : 'bg-[#F0F0F0] text-black hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-5">
              <div className="flex items-center bg-[#F0F0F0] rounded-full px-5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-2xl font-medium py-3 pr-4"
                >
                  −
                </button>
                <span className="text-base font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-2xl font-medium py-3 pl-4"
                >
                  +
                </button>
              </div>
              <Button size="lg" fullWidth>Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
        <div className="border-b border-black/10">
          <div className="flex">
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-5 text-center text-lg transition-colors relative ${
                activeTab === 'details' ? 'text-black font-medium' : 'text-black/60'
              }`}
            >
              Product Details
              {activeTab === 'details' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-5 text-center text-lg transition-colors relative ${
                activeTab === 'reviews' ? 'text-black font-medium' : 'text-black/60'
              }`}
            >
              Rating & Reviews
              {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`flex-1 py-5 text-center text-lg transition-colors relative ${
                activeTab === 'faqs' ? 'text-black font-medium' : 'text-black/60'
              }`}
            >
              FAQs
              {activeTab === 'faqs' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
            </button>
          </div>
        </div>

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl lg:text-2xl">All Reviews</h2>
                <span className="text-black/60">(451)</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2.5 bg-[#F0F0F0] rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <select className="bg-[#F0F0F0] rounded-full px-5 py-3 appearance-none pr-10 cursor-pointer">
                  <option>Latest</option>
                  <option>Highest Rated</option>
                  <option>Lowest Rated</option>
                </select>
                <Button size="sm">Write a Review</Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {reviews.map((review) => (
                <div key={review.id} className="border border-black/10 rounded-[20px] p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <StarRating rating={review.rating} />
                    <button className="text-black/40">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="5" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="19" r="2" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold">{review.name}</span>
                    {review.verified && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#01AB31" />
                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed mb-4">{review.comment}</p>
                  <p className="text-black/60 text-sm">Posted on {review.date}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-9">
              <Button variant="outline" size="md">Load More Reviews</Button>
            </div>
          </div>
        )}
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-center mb-14">
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
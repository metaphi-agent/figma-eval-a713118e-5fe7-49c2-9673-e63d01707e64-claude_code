import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/blocks/Header'
import Footer from '../components/blocks/Footer'
import Newsletter from '../components/blocks/Newsletter'
import ProductCard from '../components/ui/ProductCard'
import Button from '../components/ui/Button'
import Rating from '../components/ui/Rating'
import QuantitySelector from '../components/ui/QuantitySelector'
import { products } from '../data/products'

const productReviews = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 4.5,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: 'Posted on August 14, 2023',
    verified: true
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: 'Posted on August 15, 2023',
    verified: true
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 4,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: 'Posted on August 16, 2023',
    verified: true
  },
  {
    id: 4,
    name: 'Olivia P.',
    rating: 4,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: 'Posted on August 17, 2023',
    verified: true
  },
  {
    id: 5,
    name: 'Liam K.',
    rating: 4,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that has practical functionality.",
    date: 'Posted on August 18, 2023',
    verified: true
  },
  {
    id: 6,
    name: 'Ava H.',
    rating: 4.5,
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: 'Posted on August 19, 2023',
    verified: true
  }
]

export default function ProductDetail() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState('Large')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('reviews')

  const productImages = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
  ]

  const colors = [
    { name: 'Olive', hex: '#4F5D2F' },
    { name: 'Dark Green', hex: '#314F4A' },
    { name: 'Navy Blue', hex: '#31344F' }
  ]

  const sizes = ['Small', 'Medium', 'Large', 'X-Large']

  const relatedProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>›</span>
            <Link to="/category/shop" className="hover:text-black">Shop</Link>
            <span>›</span>
            <Link to="/category/men" className="hover:text-black">Men</Link>
            <span>›</span>
            <span className="text-black">T-shirts</span>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-6">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Images */}
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 ${
                        selectedImage === idx ? 'border-black' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
                  <img
                    src={productImages[selectedImage]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
                    ONE LIFE GRAPHIC T-SHIRT
                  </h1>
                  <div className="flex items-center gap-3 mb-4">
                    <Rating rating={4.5} size="lg" />
                    <span className="text-sm">4.5/5</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold">$260</span>
                    <span className="text-3xl text-neutral-400 line-through">$300</span>
                    <span className="px-3 py-1 bg-red-500/10 text-red-500 text-sm font-medium rounded-full">
                      -40%
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                  </p>
                </div>

                <hr className="border-neutral-200" />

                {/* Select Colors */}
                <div>
                  <h3 className="text-sm text-neutral-600 mb-3">Select Colors</h3>
                  <div className="flex gap-3">
                    {colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(idx)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColor === idx ? 'border-black' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={color.name}
                      >
                        {selectedColor === idx && (
                          <svg className="w-5 h-5 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="border-neutral-200" />

                {/* Choose Size */}
                <div>
                  <h3 className="text-sm text-neutral-600 mb-3">Choose Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-full transition-colors ${
                          selectedSize === size
                            ? 'bg-black text-white'
                            : 'bg-neutral-100 text-black hover:bg-neutral-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="border-neutral-200" />

                {/* Add to Cart */}
                <div className="flex gap-4">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                  <Button size="lg" className="flex-1">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            {/* Tab Headers */}
            <div className="flex border-b border-neutral-200 mb-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'details'
                    ? 'text-black border-b-2 border-black'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'reviews'
                    ? 'text-black border-b-2 border-black'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                Rating & Reviews
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'faqs'
                    ? 'text-black border-b-2 border-black'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                FAQs
              </button>
            </div>

            {/* Tab Content - Reviews */}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">
                    All Reviews <span className="text-neutral-600">(451)</span>
                  </h2>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </button>
                    <Button variant="secondary" size="sm">
                      Latest
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                    <Button size="sm">
                      Write a Review
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {productReviews.map(review => (
                    <div key={review.id} className="p-6 border border-neutral-200 rounded-2xl">
                      <div className="flex items-start justify-between mb-3">
                        <Rating rating={review.rating} size="lg" />
                        <button className="text-neutral-400 hover:text-black">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-bold text-lg">{review.name}</h3>
                        {review.verified && (
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                        "{review.text}"
                      </p>
                      <p className="text-neutral-500 text-xs">{review.date}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="secondary" size="md">
                    Load More Reviews
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* You Might Also Like */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
              YOU MIGHT ALSO LIKE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
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

      <Footer />
    </div>
  )
}

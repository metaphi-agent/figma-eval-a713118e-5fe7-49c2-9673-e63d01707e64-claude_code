import { Link } from 'react-router-dom'
import Header from '../components/blocks/Header'
import Footer from '../components/blocks/Footer'
import Newsletter from '../components/blocks/Newsletter'
import ProductCard from '../components/ui/ProductCard'
import Button from '../components/ui/Button'
import Rating from '../components/ui/Rating'
import { products, reviews } from '../data/products'

export default function Homepage() {
  const newArrivals = products.filter(p => p.category === 'new-arrivals')
  const topSelling = products.filter(p => p.category === 'top-selling')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-neutral-100">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-12 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-neutral-600 text-base max-w-lg">
                  Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <Button size="lg">
                  Shop Now
                </Button>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 md:gap-8 pt-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">200+</div>
                    <div className="text-neutral-600 text-sm">International Brands</div>
                  </div>
                  <div className="w-px bg-neutral-300" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">2,000+</div>
                    <div className="text-neutral-600 text-sm">High-Quality Products</div>
                  </div>
                  <div className="w-px bg-neutral-300" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">30,000+</div>
                    <div className="text-neutral-600 text-sm">Happy Customers</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative lg:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
                  alt="Fashion Models"
                  className="w-full h-full object-cover rounded-none lg:rounded-none"
                />
                <div className="absolute top-12 right-8 animate-pulse">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="50,5 61,39 97,39 67,61 79,95 50,75 21,95 33,61 3,39 39,39" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Logos */}
        <section className="bg-black py-8 md:py-12">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
              <div className="text-white text-2xl md:text-3xl font-bold">VERSACE</div>
              <div className="text-white text-2xl md:text-3xl font-bold">ZARA</div>
              <div className="text-white text-2xl md:text-3xl font-bold">GUCCI</div>
              <div className="text-white text-2xl md:text-3xl font-bold">PRADA</div>
              <div className="text-white text-2xl md:text-3xl font-bold">Calvin Klein</div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
              NEW ARRIVALS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="secondary" size="md">
                View All
              </Button>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
          <hr className="border-neutral-200" />
        </div>

        {/* Top Selling */}
        <section className="py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
              TOP SELLING
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {topSelling.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="secondary" size="md">
                View All
              </Button>
            </div>
          </div>
        </section>

        {/* Browse by Dress Style */}
        <section className="py-12 md:py-16 bg-neutral-100">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid gap-4 md:gap-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/category/casual" className="relative bg-white rounded-2xl overflow-hidden aspect-[3/2] group">
                  <img
                    src="https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&h=400&fit=crop"
                    alt="Casual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6 text-2xl md:text-3xl font-bold">
                    Casual
                  </div>
                </Link>
                <Link to="/category/formal" className="relative bg-white rounded-2xl overflow-hidden aspect-[3/2] md:col-span-2 group">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop"
                    alt="Formal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6 text-2xl md:text-3xl font-bold">
                    Formal
                  </div>
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/category/party" className="relative bg-white rounded-2xl overflow-hidden aspect-[3/2] md:col-span-2 group">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=400&fit=crop"
                    alt="Party"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6 text-2xl md:text-3xl font-bold">
                    Party
                  </div>
                </Link>
                <Link to="/category/gym" className="relative bg-white rounded-2xl overflow-hidden aspect-[3/2] group">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
                    alt="Gym"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6 text-2xl md:text-3xl font-bold">
                    Gym
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                OUR HAPPY CUSTOMERS
              </h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Previous">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Next">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map(review => (
                <div key={review.id} className="p-6 border border-neutral-200 rounded-2xl">
                  <Rating rating={review.rating} size="lg" />
                  <div className="flex items-center gap-2 mt-4 mb-3">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    {review.verified && (
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
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

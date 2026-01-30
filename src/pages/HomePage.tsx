import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/blocks/ProductCard';
import { StarRating } from '../components/ui/StarRating';
import { newArrivals, topSelling, reviews } from '../data/products';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F2F0F1] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="py-8 lg:py-24 relative z-10">
              <h1 className="font-display text-4xl lg:text-[64px] font-bold leading-none mb-6">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-black/60 text-base lg:text-lg max-w-[545px] mb-8">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <Button size="lg" className="w-full lg:w-auto min-w-[210px]">
                Shop Now
              </Button>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8 mt-12">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl lg:text-[40px]">200+</span>
                  <span className="text-black/60 text-sm lg:text-base">International Brands</span>
                </div>
                <div className="w-px h-12 bg-black/10 hidden lg:block" />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl lg:text-[40px]">2,000+</span>
                  <span className="text-black/60 text-sm lg:text-base">High-Quality Products</span>
                </div>
                <div className="w-px h-12 bg-black/10 hidden lg:block" />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl lg:text-[40px]">30,000+</span>
                  <span className="text-black/60 text-sm lg:text-base">Happy Customers</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
              <img
                src="./assets/images/hero-banner.png"
                alt="Fashion models"
                className="w-full h-full object-cover object-top"
              />
              {/* Decorative stars */}
              <svg className="absolute top-20 right-20 w-20 h-20 lg:w-[104px] lg:h-[104px]" viewBox="0 0 104 104" fill="black">
                <path d="M52 0L56.6 47.4L104 52L56.6 56.6L52 104L47.4 56.6L0 52L47.4 47.4L52 0Z"/>
              </svg>
              <svg className="absolute bottom-40 left-10 w-10 h-10 lg:w-14 lg:h-14" viewBox="0 0 56 56" fill="black">
                <path d="M28 0L30.5 25.5L56 28L30.5 30.5L28 56L25.5 30.5L0 28L25.5 25.5L28 0Z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-black py-11">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <img src="./assets/versace.svg" alt="Versace" className="h-6 lg:h-8 brightness-0 invert" />
            <img src="./assets/zara.svg" alt="Zara" className="h-6 lg:h-8 brightness-0 invert" />
            <img src="./assets/gucci.svg" alt="Gucci" className="h-6 lg:h-8 brightness-0 invert" />
            <img src="./assets/prada.svg" alt="Prada" className="h-6 lg:h-8 brightness-0 invert" />
            <img src="./assets/calvin-klein.svg" alt="Calvin Klein" className="h-6 lg:h-8 brightness-0 invert" />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-center mb-14">
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-9">
            <Link to="/category/new-arrivals">
              <Button variant="outline" size="md">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="border-t border-black/10" />
      </div>

      {/* Top Selling */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-center mb-14">
            TOP SELLING
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-9">
            <Link to="/category/top-selling">
              <Button variant="outline" size="md">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Style */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
          <div className="bg-[#F0F0F0] rounded-[40px] px-6 lg:px-16 py-10 lg:py-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-center mb-16">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Link to="/category/casual" className="relative rounded-[20px] overflow-hidden h-[190px] lg:h-[289px] bg-white group">
                <img
                  src="./assets/images/style-casual.png"
                  alt="Casual"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-6 left-9 font-bold text-2xl lg:text-4xl">Casual</span>
              </Link>
              <Link to="/category/formal" className="relative rounded-[20px] overflow-hidden h-[190px] lg:h-[289px] bg-white lg:col-span-2 group">
                <img
                  src="./assets/images/style-formal.png"
                  alt="Formal"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-6 left-9 font-bold text-2xl lg:text-4xl">Formal</span>
              </Link>
              <Link to="/category/party" className="relative rounded-[20px] overflow-hidden h-[190px] lg:h-[289px] bg-white lg:col-span-2 group">
                <img
                  src="./assets/images/style-party.png"
                  alt="Party"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-6 left-9 font-bold text-2xl lg:text-4xl">Party</span>
              </Link>
              <Link to="/category/gym" className="relative rounded-[20px] overflow-hidden h-[190px] lg:h-[289px] bg-white group">
                <img
                  src="./assets/images/style-gym.png"
                  alt="Gym"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-6 left-9 font-bold text-2xl lg:text-4xl">Gym</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl lg:text-5xl font-bold">
              OUR HAPPY CUSTOMERS
            </h2>
            <div className="flex gap-4">
              <button className="w-6 h-6 flex items-center justify-center" aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="w-6 h-6 flex items-center justify-center" aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="border border-black/10 rounded-[20px] p-6 lg:p-8">
                <StarRating rating={review.rating} />
                <div className="flex items-center gap-2 mt-4 mb-3">
                  <span className="font-bold">{review.name}</span>
                  {review.verified && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#01AB31" />
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p className="text-black/60 text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
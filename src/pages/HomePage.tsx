import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

export function HomePage() {
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-neutral-600 text-base mb-8 max-w-lg">
                Browse through our diverse range of meticulously crafted garments, designed
                to bring out your individuality and cater to your sense of style.
              </p>
              <Button size="lg">Shop Now</Button>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">200+</div>
                  <div className="text-neutral-600 text-sm">International Brands</div>
                </div>
                <div className="border-l border-neutral-300 pl-6">
                  <div className="text-3xl lg:text-4xl font-bold">2,000+</div>
                  <div className="text-neutral-600 text-sm">High-Quality Products</div>
                </div>
                <div className="border-l border-neutral-300 pl-6">
                  <div className="text-3xl lg:text-4xl font-bold">30,000+</div>
                  <div className="text-neutral-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
                alt="Fashion models"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute top-12 right-12 animate-spin-slow">
                <Star className="w-16 h-16 fill-black" />
              </div>
              <div className="absolute bottom-12 left-12 animate-spin-slow" style={{ animationDelay: '1s' }}>
                <Star className="w-12 h-12 fill-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-black py-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">
            <div className="text-white text-3xl font-bold">VERSACE</div>
            <div className="text-white text-3xl font-bold">ZARA</div>
            <div className="text-white text-3xl font-bold">GUCCI</div>
            <div className="text-white text-3xl font-bold">PRADA</div>
            <div className="text-white text-3xl font-bold">Calvin Klein</div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-24 py-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/category/casual">
            <Button variant="outline" size="lg">View All</Button>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
        <hr className="border-neutral-200" />
      </div>

      {/* Top Selling */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-24 py-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">TOP SELLING</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {topSelling.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/category/casual">
            <Button variant="outline" size="lg">View All</Button>
          </Link>
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-24 py-16">
        <div className="bg-neutral-100 rounded-3xl p-8 lg:p-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Link
              to="/category/casual"
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
                alt="Casual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h3 className="absolute top-6 left-6 text-2xl font-bold text-black bg-white px-4 py-2 rounded-lg">
                Casual
              </h3>
            </Link>

            <Link
              to="/category/formal"
              className="relative h-64 rounded-2xl overflow-hidden group lg:col-span-2"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
                alt="Formal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h3 className="absolute top-6 left-6 text-2xl font-bold text-black bg-white px-4 py-2 rounded-lg">
                Formal
              </h3>
            </Link>

            <Link
              to="/category/party"
              className="relative h-64 rounded-2xl overflow-hidden group lg:col-span-2"
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
                alt="Party"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h3 className="absolute top-6 left-6 text-2xl font-bold text-black bg-white px-4 py-2 rounded-lg">
                Party
              </h3>
            </Link>

            <Link
              to="/category/gym"
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600"
                alt="Gym"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h3 className="absolute top-6 left-6 text-2xl font-bold text-black bg-white px-4 py-2 rounded-lg">
                Gym
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-24 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200">
              →
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Sarah M.',
              rating: 5,
              comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            },
            {
              name: 'Alex K.',
              rating: 5,
              comment: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            },
            {
              name: 'James L.',
              rating: 5,
              comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            },
          ].map((review, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold">{review.name}</h3>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-neutral-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

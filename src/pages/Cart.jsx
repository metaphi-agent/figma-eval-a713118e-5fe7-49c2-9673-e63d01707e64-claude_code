import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/blocks/Header'
import Footer from '../components/blocks/Footer'
import Newsletter from '../components/blocks/Newsletter'
import Button from '../components/ui/Button'
import QuantitySelector from '../components/ui/QuantitySelector'
import Input from '../components/ui/Input'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop'
    }
  ])

  const [promoCode, setPromoCode] = useState('')

  const updateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = subtotal * 0.20 // 20% discount
  const deliveryFee = 15
  const total = subtotal - discount + deliveryFee

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>›</span>
            <span className="text-black">Cart</span>
          </div>
        </div>

        {/* Cart Section */}
        <section className="py-6">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-8">YOUR CART</h1>

            <div className="grid lg:grid-cols-[1fr,400px] gap-6">
              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 border border-neutral-200 rounded-2xl">
                    {/* Product Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-600"
                            aria-label="Remove item"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-neutral-600 mb-1">Size: {item.size}</p>
                        <p className="text-sm text-neutral-600">Color: {item.color}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-xl">${item.price}</span>
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(newQty) => updateQuantity(item.id, newQty)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="p-6 border border-neutral-200 rounded-2xl space-y-6">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-neutral-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-black">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Discount (-20%)</span>
                      <span className="font-medium text-red-500">-${discount.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Delivery Fee</span>
                      <span className="font-medium text-black">${deliveryFee}</span>
                    </div>
                  </div>

                  <hr className="border-neutral-200" />

                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">${total}</span>
                  </div>

                  {/* Promo Code */}
                  <div className="flex gap-3">
                    <Input
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      }
                      className="flex-1"
                    />
                    <Button variant="primary" size="md">
                      Apply
                    </Button>
                  </div>

                  {/* Checkout Button */}
                  <Button size="lg" className="w-full">
                    Go to Checkout
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      <Footer />
    </div>
  )
}

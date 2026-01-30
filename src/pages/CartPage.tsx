import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { cartItems as initialCartItems, CartItem } from '../data/products';

export function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountPercent = 20;
  const discount = subtotal * (discountPercent / 100);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] py-6">
        <div className="flex items-center gap-3 text-sm">
          <Link to="/" className="text-black/60 hover:text-black">Home</Link>
          <span className="text-black/60">&gt;</span>
          <span className="text-black">Cart</span>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] pb-20">
        <h1 className="font-display text-3xl lg:text-[40px] font-bold mb-6">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Cart Items */}
          <div className="flex-1 border border-black/10 rounded-[20px] p-4 lg:p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-black/60 mb-4">Your cart is empty</p>
                <Link to="/">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      <div className="w-[100px] lg:w-[124px] h-[100px] lg:h-[124px] bg-[#F0EEED] rounded-lg overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-base lg:text-xl mb-1">{item.name}</h3>
                            <p className="text-sm text-black/60">
                              Size: <span className="text-black">{item.size}</span>
                            </p>
                            <p className="text-sm text-black/60">
                              Color: <span className="text-black">{item.color}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#FF3333] p-1"
                            aria-label="Remove item"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m3 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6h14z" />
                              <path d="M10 11v6M14 11v6" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-xl lg:text-2xl">${item.price}</span>
                          <div className="flex items-center bg-[#F0F0F0] rounded-full">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-lg"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < items.length - 1 && <div className="border-t border-black/10 mt-6" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-[505px] border border-black/10 rounded-[20px] p-5 lg:p-6 h-fit">
            <h2 className="font-bold text-xl lg:text-2xl mb-6">Order Summary</h2>

            <div className="space-y-5 mb-6">
              <div className="flex justify-between">
                <span className="text-black/60">Subtotal</span>
                <span className="font-bold text-lg">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Discount (-{discountPercent}%)</span>
                <span className="font-bold text-lg text-[#FF3333]">-${discount.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Delivery Fee</span>
                <span className="font-bold text-lg">${deliveryFee}</span>
              </div>
              <div className="border-t border-black/10 pt-5">
                <div className="flex justify-between">
                  <span className="text-black/60">Total</span>
                  <span className="font-bold text-xl lg:text-2xl">${total.toFixed(0)}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 bg-[#F0F0F0] rounded-full px-4 py-3 flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/40 shrink-0">
                  <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                  <path d="M18 12a2 2 0 000 4h4v-4h-4z" />
                </svg>
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-transparent outline-none text-base placeholder:text-black/40"
                />
              </div>
              <Button size="sm" className="px-6">Apply</Button>
            </div>

            {/* Checkout Button */}
            <Button fullWidth size="lg" className="gap-3">
              Go to Checkout
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
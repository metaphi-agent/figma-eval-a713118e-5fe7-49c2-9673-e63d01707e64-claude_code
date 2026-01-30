import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, Trash2, Tag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface CartItem {
  id: string;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Gradient Graphic T-shirt',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Checkered Shirt',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
    },
    {
      id: '3',
      name: 'Skinny Fit Jeans',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-6 border-b">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={16} />
          <span className="text-black">Cart</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-24 py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">YOUR CART</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-neutral-200 rounded-2xl"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-600 mb-1">Size: {item.size}</p>
                    <p className="text-sm text-neutral-600">Color: {item.color}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-xl">${item.price}</span>
                    <div className="flex items-center bg-neutral-100 rounded-full px-4 py-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-neutral-200 rounded-full"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-neutral-200 rounded-full"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="border border-neutral-200 rounded-2xl p-6 space-y-6">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-red-600">
                  <span>Discount (-20%)</span>
                  <span className="font-medium">-${discount.toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee}</span>
                </div>
                <hr className="border-neutral-200" />
                <div className="flex items-center justify-between text-lg">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${total}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  icon={<Tag size={20} />}
                  className="flex-1"
                />
                <Button variant="secondary">Apply</Button>
              </div>

              <Button size="lg" className="w-full">
                Go to Checkout <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-neutral-100 pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-extrabold mb-4 block">
              SHOP.CO
            </Link>
            <p className="text-sm text-neutral-600 mb-6">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-600 hover:text-black transition-colors">About</Link></li>
              <li><Link to="/features" className="text-neutral-600 hover:text-black transition-colors">Features</Link></li>
              <li><Link to="/works" className="text-neutral-600 hover:text-black transition-colors">Works</Link></li>
              <li><Link to="/career" className="text-neutral-600 hover:text-black transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-neutral-600 hover:text-black transition-colors">Customer Support</Link></li>
              <li><Link to="/delivery" className="text-neutral-600 hover:text-black transition-colors">Delivery Details</Link></li>
              <li><Link to="/terms" className="text-neutral-600 hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-neutral-600 hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider">FAQ</h3>
            <ul className="space-y-3">
              <li><Link to="/account" className="text-neutral-600 hover:text-black transition-colors">Account</Link></li>
              <li><Link to="/deliveries" className="text-neutral-600 hover:text-black transition-colors">Manage Deliveries</Link></li>
              <li><Link to="/orders" className="text-neutral-600 hover:text-black transition-colors">Orders</Link></li>
              <li><Link to="/payments" className="text-neutral-600 hover:text-black transition-colors">Payments</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/ebooks" className="text-neutral-600 hover:text-black transition-colors">Free eBooks</Link></li>
              <li><Link to="/tutorial" className="text-neutral-600 hover:text-black transition-colors">Development Tutorial</Link></li>
              <li><Link to="/blog" className="text-neutral-600 hover:text-black transition-colors">How to - Blog</Link></li>
              <li><Link to="/playlist" className="text-neutral-600 hover:text-black transition-colors">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

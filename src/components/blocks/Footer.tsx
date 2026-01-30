import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-100 mt-20">
      {/* Newsletter */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-24">
        <div className="bg-black text-white rounded-3xl p-8 lg:p-12 -mt-32 mb-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="w-full lg:w-auto lg:min-w-[350px] space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                icon={<Mail size={20} />}
                className="bg-white"
              />
              <Button variant="secondary" size="lg" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-neutral-600 text-sm mb-6">
              We have clothes that suits your style and which you're proud to wear. From
              women to men.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3 text-neutral-600">
              <li><Link to="#" className="hover:text-black">About</Link></li>
              <li><Link to="#" className="hover:text-black">Features</Link></li>
              <li><Link to="#" className="hover:text-black">Works</Link></li>
              <li><Link to="#" className="hover:text-black">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Help</h4>
            <ul className="space-y-3 text-neutral-600">
              <li><Link to="#" className="hover:text-black">Customer Support</Link></li>
              <li><Link to="#" className="hover:text-black">Delivery Details</Link></li>
              <li><Link to="#" className="hover:text-black">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">FAQ</h4>
            <ul className="space-y-3 text-neutral-600">
              <li><Link to="#" className="hover:text-black">Account</Link></li>
              <li><Link to="#" className="hover:text-black">Manage Deliveries</Link></li>
              <li><Link to="#" className="hover:text-black">Orders</Link></li>
              <li><Link to="#" className="hover:text-black">Payments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-3 text-neutral-600">
              <li><Link to="#" className="hover:text-black">Free eBooks</Link></li>
              <li><Link to="#" className="hover:text-black">Development Tutorial</Link></li>
              <li><Link to="#" className="hover:text-black">How to - Blog</Link></li>
              <li><Link to="#" className="hover:text-black">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}

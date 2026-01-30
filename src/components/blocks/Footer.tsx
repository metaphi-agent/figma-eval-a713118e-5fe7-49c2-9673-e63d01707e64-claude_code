import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Works', href: '/works' },
    { name: 'Career', href: '/career' },
  ],
  help: [
    { name: 'Customer Support', href: '/support' },
    { name: 'Delivery Details', href: '/delivery' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  faq: [
    { name: 'Account', href: '/account' },
    { name: 'Manage Deliveries', href: '/deliveries' },
    { name: 'Orders', href: '/orders' },
    { name: 'Payments', href: '/payments' },
  ],
  resources: [
    { name: 'Free eBooks', href: '/ebooks' },
    { name: 'Development Tutorial', href: '/tutorials' },
    { name: 'How to - Blog', href: '/blog' },
    { name: 'Youtube Playlist', href: '/youtube' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: 'twitter', href: 'https://twitter.com' },
  { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
  { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com' },
];

export function Footer() {
  return (
    <footer className="bg-[#F0F0F0] pt-[140px] pb-8 mt-auto relative">
      {/* Newsletter Section */}
      <div className="absolute -top-[90px] left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-4 lg:px-0">
        <div className="bg-black rounded-[20px] px-8 lg:px-16 py-9 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="font-display text-2xl lg:text-[40px] text-white font-bold leading-tight max-w-[551px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full lg:w-auto flex flex-col gap-3.5">
            <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3 w-full lg:w-[349px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black/40 shrink-0">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent outline-none text-base placeholder:text-black/40"
              />
            </div>
            <button className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 pb-12 border-b border-black/10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 lg:pr-8">
            <Link to="/" className="font-display text-[28px] lg:text-[34px] font-bold">
              SHOP.CO
            </Link>
            <p className="text-black/60 text-sm leading-relaxed mt-6 max-w-[248px]">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex items-center gap-3 mt-9">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  {social.icon === 'twitter' && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social.icon === 'facebook' && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  )}
                  {social.icon === 'github' && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h3 className="font-medium text-base tracking-[3px] mb-6">COMPANY</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-black/60 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base tracking-[3px] mb-6">HELP</h3>
            <ul className="space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-black/60 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base tracking-[3px] mb-6">FAQ</h3>
            <ul className="space-y-4">
              {footerLinks.faq.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-black/60 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base tracking-[3px] mb-6">RESOURCES</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-black/60 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-6 gap-4">
          <p className="text-black/60 text-sm">
            Shop.co &copy; 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <img src="./assets/icons/visa.png" alt="Visa" className="h-[30px]" />
            <img src="./assets/icons/mastercard.png" alt="Mastercard" className="h-[30px]" />
            <img src="./assets/icons/paypal.png" alt="PayPal" className="h-[30px]" />
            <img src="./assets/icons/applepay.png" alt="Apple Pay" className="h-[30px]" />
            <img src="./assets/icons/gpay.png" alt="Google Pay" className="h-[30px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

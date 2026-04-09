import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const serviceDropdown = [
    { name: 'Implementation', path: '/services#implementation' },
    { name: 'Consulting', path: '/services#consulting' },
    { name: 'Optimization', path: '/services#optimization' },
    { name: 'Support', path: '/services#support' },
    { name: 'Upgrades', path: '/services#upgrades' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--deep-navy)]">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--deep-navy)]/95 backdrop-blur-xl border-b border-[var(--slate-800)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div> */}
              <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                <img src="/images/quartz-logo.png" alt="" className="h-8 w-auto" />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg tracking-tight">Quartz Group</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 nav-link ${isActive('/services') ? 'text-white' : ''}`}>
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl shadow-2xl py-2 animate-fade-in">
                    {serviceDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-[var(--slate-400)] hover:text-white hover:bg-[var(--slate-800)] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'text-white' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://quartztrack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[var(--slate-400)] hover:text-white transition-colors"
              >
                RFID
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link to="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--slate-800)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[var(--slate-900)] border-t border-[var(--slate-800)] animate-slide-up">
            <div className="container-premium py-6 space-y-4">
              <div className="space-y-2">
                <p className="text-micro px-4">Services</p>
                {serviceDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-white hover:bg-[var(--slate-800)] rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-[var(--slate-800)] pt-4 space-y-2">
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-white hover:bg-[var(--slate-800)] rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-[var(--slate-800)] pt-4 space-y-3">
                <a 
                  href="https://quartztrack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-[var(--electric-blue)]"
                >
                  RFID Solutions
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link to="/contact" className="btn-primary w-full">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[var(--slate-900)] border-t border-[var(--slate-800)]">
        <div className="container-premium py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Q</span>
                </div> */}
                {/* <span className="text-white font-bold text-lg">Quartz Group</span> */}
                                <img src="/images/quartzlogoinverse-201x36bw.png" alt="The Quartz Group Logo" className="h-10 w-auto" />
              </Link>
              <p className="text-[var(--slate-400)] mb-6 max-w-sm">
                The most technically sophisticated Epicor implementation partner in North America. 
                15+ years. 500+ implementations. One mission: your operational excellence.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/company/1641447" target="_blank" rel="noopener noreferrer" className="text-[var(--slate-400)] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com/QuartzGroupInc" target="_blank" rel="noopener noreferrer" className="text-[var(--slate-400)] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-micro mb-4">Services</h4>
              <ul className="space-y-3">
                {['Implementation', 'Consulting', 'Optimization', 'Support', 'Upgrades'].map((item) => (
                  <li key={item}>
                    <Link to={`/services#${item.toLowerCase()}`} className="text-[var(--slate-400)] hover:text-white transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-micro mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Industries', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-[var(--slate-400)] hover:text-white transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-micro mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://quartztrack.com" target="_blank" rel="noopener noreferrer" className="text-[var(--slate-400)] hover:text-white transition-colors text-sm flex items-center gap-1">
                    RFID Solutions
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.epicor.com" target="_blank" rel="noopener noreferrer" className="text-[var(--slate-400)] hover:text-white transition-colors text-sm flex items-center gap-1">
                    Epicor
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="text-[var(--slate-400)] hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--slate-800)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--slate-600)] text-sm">
              © 2026 Quartz Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[var(--slate-600)] text-sm">Epicor Certified Partner</span>
              <span className="text-[var(--slate-600)] text-sm">Xemelgo Exclusive Partner</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

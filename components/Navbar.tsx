
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Gepard Trans Logistics INC Logo" className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-primary scale-90 md:scale-100 origin-right"
          >
            <span className="text-[11px] font-black tracking-[0.1em]">GET IN TOUCH</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

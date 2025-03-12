
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8',
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/lovable-uploads/5d6ae683-ae65-4465-9cb3-6bd4341e0d12.png"
              alt="Harit Eco Ventures Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <div className="ml-2 sm:ml-3">
            <span className="font-display font-bold text-lg sm:text-xl text-harit-500">
              Harit
            </span>
            <span className="hidden sm:inline ml-1 text-gray-800 font-medium text-lg">
              Eco Ventures
            </span>
            <p className="text-xs text-gray-600 font-medium">WASTE NOT WASTED</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Link
            to="/"
            className={cn('nav-link', isActive('/') && 'active')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn('nav-link', isActive('/about') && 'active')}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={cn('nav-link', isActive('/services') && 'active')}
          >
            Services
          </Link>
          <Link
            to="/activities"
            className={cn('nav-link', isActive('/activities') && 'active')}
          >
            Activities
          </Link>
          <Link
            to="/blog"
            className={cn('nav-link', isActive('/blog') && 'active')}
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            className={cn('nav-link', isActive('/gallery') && 'active')}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={cn('nav-link', isActive('/contact') && 'active')}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/get-involved"
            className="btn-primary"
          >
            Get Involved
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-harit-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t mt-3"
          >
            <nav className="flex flex-col px-4 py-3 space-y-3">
              <Link
                to="/"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/about')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/services')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                Services
              </Link>
              <Link
                to="/activities"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/activities')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                Activities
              </Link>
              <Link
                to="/blog"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/blog')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                Blog
              </Link>
              <Link
                to="/gallery"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/gallery')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/contact')
                    ? 'bg-harit-100 text-harit-700'
                    : 'text-gray-800 hover:bg-gray-50'
                )}
              >
                Contact
              </Link>
              <Link
                to="/get-involved"
                className="btn-primary text-center mt-2"
              >
                Get Involved
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

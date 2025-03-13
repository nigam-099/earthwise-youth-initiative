
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isHomePage = location.pathname === '/';
  const textColorClass = isHomePage && !isScrolled ? 'text-white' : 'text-gray-800 dark:text-white';
  const logoTextClass = isHomePage && !isScrolled ? 'text-white' : 'text-harit-500 dark:text-harit-400';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8',
        isScrolled || !isHomePage
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-3'
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
            <span className={`font-display font-bold text-lg sm:text-xl ${logoTextClass} font-lovelace`}>
              Harit
            </span>
            <span className={`hidden sm:inline ml-1 ${textColorClass} font-medium text-lg`}>
              Eco Ventures
            </span>
            <p className={`text-xs ${isHomePage && !isScrolled ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'} font-medium`}>
              WASTE NOT WASTED
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Link
            to="/"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/about') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/services') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Services
          </Link>
          <Link
            to="/activities"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/activities') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Activities
          </Link>
          <Link
            to="/team"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/team') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Our Team
          </Link>
          <Link
            to="/blog"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/blog') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/gallery') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={cn(
              'nav-link',
              isHomePage && !isScrolled ? 'text-white hover:text-white/80' : '',
              isActive('/contact') && (isHomePage && !isScrolled ? 'text-white after:bg-white' : 'active')
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isHomePage && !isScrolled ? 'text-white hover:bg-white/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'} transition-colors`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            to="/get-involved"
            className="btn-primary"
          >
            Get Involved
          </Link>
        </div>

        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isHomePage && !isScrolled ? 'text-white hover:bg-white/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'} transition-colors`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-700 dark:text-gray-200'} hover:text-harit-500 dark:hover:text-harit-400 transition-colors`}
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
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white dark:bg-gray-800 border-t mt-3 dark:border-gray-700"
          >
            <nav className="flex flex-col px-4 py-3 space-y-3">
              <Link
                to="/"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/about')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/services')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                Services
              </Link>
              <Link
                to="/activities"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/activities')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                Activities
              </Link>
              <Link
                to="/team"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/team')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                Our Team
              </Link>
              <Link
                to="/blog"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/blog')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                Blog
              </Link>
              <Link
                to="/gallery"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/gallery')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                )}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={cn(
                  'py-2 px-3 rounded transition-colors',
                  isActive('/contact')
                    ? 'bg-harit-100 dark:bg-harit-900 text-harit-700 dark:text-harit-300'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
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

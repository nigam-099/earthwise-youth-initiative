
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img src="/lovable-uploads/5d6ae683-ae65-4465-9cb3-6bd4341e0d12.png" alt="Harit Eco Ventures Logo" className="h-10 w-10 object-contain" />
              </div>
              <div className="ml-2">
                <h4 className="font-display font-bold text-xl text-harit-500 dark:text-harit-400 font-lovelace">Harit</h4>
                <p className="text-xs font-medium dark:text-gray-300">WASTE NOT WASTED</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              A youth-driven organization committed to sustainable waste management and environmental conservation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61563359069601" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-harit-500 dark:hover:text-harit-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/harit_2081" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-harit-500 dark:hover:text-harit-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/haritecoventures/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-harit-500 dark:hover:text-harit-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 dark:text-white font-lovelace">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 dark:text-white font-lovelace">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#waste-collection" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Waste Collection & Recycling
                </Link>
              </li>
              <li>
                <Link to="/services#education" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Environmental Education
                </Link>
              </li>
              <li>
                <Link to="/services#planning" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Project Planning & Execution
                </Link>
              </li>
              <li>
                <Link to="/services#products" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Sustainable Product Creation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 dark:text-white font-lovelace">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-harit-500 dark:text-harit-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Rajapur Municipality, Bardiya District, Nepal</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-harit-500 dark:text-harit-400 mr-3 flex-shrink-0" />
                <a href="mailto:haritecoventures@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors">haritecoventures@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-harit-500 dark:text-harit-400 mt-1 mr-3 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <a href="tel:+9779769269810" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors mr-2">+977 9769269810</a>
                    <a href="https://wa.me/9779769269810" target="_blank" rel="noopener noreferrer" className="text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a href="tel:+9779769269811" className="text-gray-600 dark:text-gray-300 hover:text-harit-500 dark:hover:text-harit-400 transition-colors mr-2">+977 9769269811</a>
                    <a href="https://wa.me/9779769269811" target="_blank" rel="noopener noreferrer" className="text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Harit Eco Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img src="/lovable-uploads/5d6ae683-ae65-4465-9cb3-6bd4341e0d12.png" alt="Harit Eco Ventures Logo" className="h-10 w-10 object-contain" />
              </div>
              <div className="ml-2">
                <h4 className="font-display font-bold text-xl text-harit-500">Harit</h4>
                <p className="text-xs font-medium">WASTE NOT WASTED</p>
              </div>
            </div>
            <p className="text-gray-600 max-w-xs">
              A youth-driven organization committed to sustainable waste management and environmental conservation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61563359069601" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-harit-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/harit_2081" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-harit-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/haritecoventures/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-harit-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#waste-collection" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Waste Collection & Recycling
                </Link>
              </li>
              <li>
                <Link to="/services#education" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Environmental Education
                </Link>
              </li>
              <li>
                <Link to="/services#planning" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Project Planning & Execution
                </Link>
              </li>
              <li>
                <Link to="/services#products" className="text-gray-600 hover:text-harit-500 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Sustainable Product Creation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-harit-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Rajapur Municipality, Bardiya District, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-harit-500 mr-3 flex-shrink-0" />
                <a href="tel:+9779800000000" className="text-gray-600 hover:text-harit-500 transition-colors">+977 9769269810</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-harit-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@haritecoventures.com" className="text-gray-600 hover:text-harit-500 transition-colors">haritecoventures@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Harit Eco Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
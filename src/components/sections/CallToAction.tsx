
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 bg-harit-500 relative overflow-hidden">
      {/* Abstract eco-friendly shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/30"></div>
        <div className="absolute left-1/4 -bottom-20 w-64 h-64 rounded-full bg-white/20"></div>
        <div className="absolute left-10 top-1/3 w-20 h-20 rounded-full bg-white/25"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Join Us in Creating a Sustainable Future
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you're an individual, a community, or a business, there are many ways to support 
            our mission and contribute to environmental conservation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/get-involved"
              className="bg-white text-harit-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

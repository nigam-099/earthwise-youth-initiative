
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Recycle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-harit-100 text-harit-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Driving Sustainable Change Through Youth Power
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Harit Eco Ventures is committed to sustainable waste management and environmental 
            conservation, focusing on recycling and environmental education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-harit-100 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="text-harit-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              To create a cleaner, greener future where waste is transformed into opportunity and communities thrive in harmony with nature.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-harit-100 rounded-lg flex items-center justify-center mb-4">
              <Recycle className="text-harit-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To implement sustainable waste management practices, educate communities, and drive environmental conservation through youth-led initiatives.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-12 h-12 bg-harit-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-harit-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-600 mb-4">
              A dedicated group of young environmental enthusiasts and professionals committed to making a meaningful impact on our planet.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/team" 
            className="inline-flex items-center text-harit-600 font-medium hover:text-harit-700 transition-colors"
          >
            Learn more about our journey
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

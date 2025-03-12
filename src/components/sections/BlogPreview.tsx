
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-harit-100 text-harit-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Blog & Updates
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest News & Insights
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with our recent activities, success stories, and insights 
            on environmental conservation.
          </motion.p>
        </div>

        <motion.div 
          className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-w-16 aspect-h-9 md:aspect-auto md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Harit Eco Ventures recycling initiative" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col">
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>August 25, 2023</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Harit Eco Ventures: Leading the Charge Against Wasting Waste
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-4">
                  Harit Eco Ventures Pvt. Ltd., a youth-led organization committed to sustainable waste
                  management and environmental conservation, has taken significant strides in establishing its
                  presence and impact. Officially registered on 13th Shrawan, the company began its journey of
                  execution on Bhadra 6 in its inaugural branch located in Rajapur Municipality of Bardiya
                  District.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/blog/leading-the-charge" 
                  className="inline-flex items-center text-harit-600 font-medium hover:text-harit-700 transition-colors"
                >
                  Read the full article
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-harit-500 text-harit-600 bg-white rounded-md hover:bg-harit-50 transition-colors duration-300"
          >
            View All Blog Posts
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;

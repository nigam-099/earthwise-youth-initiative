
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPreview = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-harit-100 text-harit-700 dark:bg-harit-900 dark:text-harit-200 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Blog & Updates
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-lovelace"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest News & Insights
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Blog 1 - Dustbin Installation (Newer) */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/lovable-uploads/eea18526-abfa-4cbd-afe9-fc41da217fde.png" 
                alt="Dustbin installation in Mela Mahotsav" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>1st Magh, 2081</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Dustbin Installation at Mela Mahotsav
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                As part of our commitment to sustainable waste management, Harit Eco Ventures installed 
                multiple dustbins at the Mela Mahotsav event. This initiative aims to provide accessible 
                waste disposal solutions and promote proper waste segregation practices among attendees, 
                contributing to a cleaner and more environmentally conscious community event.
              </p>
              <Link 
                to="/blog/dustbin-installation" 
                className="inline-flex items-center text-harit-600 dark:text-harit-400 font-medium hover:text-harit-700 dark:hover:text-harit-300 transition-colors"
              >
                Read the full article
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Blog 2 - Leading the Charge (Older) */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="Harit Eco Ventures initiative" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>13th Shrawan, 2081</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Harit Eco Ventures: Leading the Charge Against Wasting Waste
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                Harit Eco Ventures Pvt. Ltd., a youth-led organization committed to sustainable waste
                management and environmental conservation, has taken significant strides in establishing its
                presence and impact. Officially registered on 13th Shrawan, the company began its journey of
                execution on Bhadra 6 in its inaugural branch located in Rajapur Municipality of Bardiya
                District.
              </p>
              <Link 
                to="/blog/leading-the-charge" 
                className="inline-flex items-center text-harit-600 dark:text-harit-400 font-medium hover:text-harit-700 dark:hover:text-harit-300 transition-colors"
              >
                Read the full article
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
            className="inline-flex items-center justify-center px-6 py-3 border border-harit-500 text-harit-600 dark:text-harit-400 dark:border-harit-600 bg-white dark:bg-transparent rounded-md hover:bg-harit-50 dark:hover:bg-harit-900/30 transition-colors duration-300"
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

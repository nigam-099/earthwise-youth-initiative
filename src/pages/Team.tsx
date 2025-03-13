
import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import TeamSection from '@/components/sections/TeamSection';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          {/* Hero section */}
          <section className="pt-32 pb-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.span 
                className="inline-block px-3 py-1 bg-harit-100 text-harit-700 dark:bg-harit-900 dark:text-harit-300 rounded-full text-sm font-medium mb-4" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our Team
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-lovelace" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Meet the People Behind Harit Eco Ventures
              </motion.h1>
              <motion.p 
                className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our dedicated team of professionals working together to create a sustainable future.
              </motion.p>
            </div>
          </section>

          {/* Team section */}
          <TeamSection />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Team;


import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const About = () => {
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
                About Us
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-lovelace" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Youth-Powered Environmental Action
              </motion.h1>
              <motion.p 
                className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Harit Eco Ventures is a youth-driven organization committed to sustainable waste 
                management and environmental conservation, focusing on creating a cleaner, 
                greener future for all.
              </motion.p>
            </div>
          </section>

          {/* Vision & Mission section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                <motion.div 
                  className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm" 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-lovelace">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    To create a cleaner, greener future where waste is transformed into opportunity 
                    and communities thrive in harmony with nature. We envision a society where 
                    sustainable practices are the norm, and every individual is an environmental steward.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm" 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-lovelace">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    To implement sustainable waste management practices, educate communities, and 
                    drive environmental conservation through youth-led initiatives. We aim to be 
                    a catalyst for positive change by connecting waste collectors with recycling 
                    facilities and transforming waste materials into valuable resources.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Story section */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center font-lovelace" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Our Story
                </motion.h2>
                <motion.div 
                  className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p>
                    Harit Eco Ventures was born from a passionate group of young environmentalists 
                    who recognized the urgent need for sustainable waste management solutions in their communities. 
                    Officially registered on 13th Shrawan, the company began its journey of execution on 
                    Bhadra 6 in its inaugural branch located in Rajapur Municipality of Bardiya District.
                  </p>
                  <p>
                    What started as a vision to address pressing environmental challenges has grown into a 
                    comprehensive organization that not only mediates recycling efforts but also leads 
                    impactful projects such as tree plantation drives, environmental education programs, 
                    and innovative initiatives like converting waste glass bottles into reusable products.
                  </p>
                  <p>
                    Guided by our slogan "Youth-Powered, Earth-Centered," we continue to expand our footprint 
                    and introduce innovative solutions to create a cleaner, greener Nepal. Our journey from 
                    registration to execution in just a few months is a testament to our team's determination 
                    and the support of the local community.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default About;

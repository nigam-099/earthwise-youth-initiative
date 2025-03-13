
import React, { useEffect, useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  
  const galleryImage = {
    src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Waste recycling program in Rajapur",
    description: "Waste recycling program started at Rajapur by Harit Eco Ventures as its first branch of execution."
  };

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <section className="pt-32 pb-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block px-3 py-1 bg-harit-100 text-harit-700 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Gallery
                </motion.span>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-lovelace"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Our Impact in Pictures
                </motion.h1>
                <motion.p 
                  className="max-w-2xl mx-auto text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Browse through our gallery showcasing impactful moments from our waste collection drives, recycling projects, and environmental initiatives.
                </motion.p>
              </div>

              <div className="max-w-4xl mx-auto">
                <motion.div 
                  className="overflow-hidden rounded-xl shadow-md cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(galleryImage.src)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={galleryImage.src} 
                      alt={galleryImage.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2 font-lovelace">First Branch in Rajapur</h3>
                    <p className="text-gray-700">{galleryImage.description}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-screen-md max-h-screen overflow-hidden p-1 bg-black/90">
          {selectedImage && (
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;

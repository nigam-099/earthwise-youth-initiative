
import React, { useEffect, useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  
  const galleryItems = [
    {
      category: "waste-collection",
      title: "Waste Collection Drives",
      images: [
        {
          src: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "Community waste collection drive",
          description: "Community members participating in a waste collection drive in Rajapur."
        },
        {
          src: "https://images.unsplash.com/photo-1591193686104-fddba4cb0342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "Sorting collected waste",
          description: "Team members sorting collected waste for recycling."
        },
        {
          src: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "School waste collection program",
          description: "School waste collection program led by Harit Eco Ventures."
        },
      ]
    },
    {
      category: "tree-plantation",
      title: "Tree Plantation Campaigns",
      images: [
        {
          src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          alt: "Tree planting volunteers",
          description: "Volunteers planting saplings in Rajapur Municipality."
        },
        {
          src: "https://images.unsplash.com/photo-1625466997070-ea85d3c5552b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          alt: "School tree planting program",
          description: "Students participating in a tree planting event."
        },
        {
          src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnRpbmclMjB0cmVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "Sapling preparation",
          description: "Team preparing saplings for a community planting event."
        },
      ]
    },
    {
      category: "education",
      title: "Environmental Education",
      images: [
        {
          src: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          alt: "Environmental workshop",
          description: "Environmental education workshop conducted for school students."
        },
        {
          src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYWNoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "Community awareness program",
          description: "Community awareness program on waste segregation."
        },
        {
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVhY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          alt: "Recycling demonstration",
          description: "Team demonstrating recycling techniques to students."
        },
      ]
    },
    {
      category: "products",
      title: "Sustainable Products",
      images: [
        {
          src: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsZWQlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "Recycled glass products",
          description: "Products made from recycled glass bottles."
        },
        {
          src: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY3ljbGVkJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          alt: "Upcycled paper products",
          description: "Notebooks and stationery made from recycled paper."
        },
        {
          src: "https://images.unsplash.com/photo-1597106983973-d4993b2d1360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlY3ljbGVkJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          alt: "Eco-friendly packaging",
          description: "Eco-friendly packaging solutions developed by our team."
        },
      ]
    }
  ];

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
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
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
                  Browse through our gallery showcasing impactful moments from our waste collection drives, recycling projects, tree plantations, and educational programs.
                </motion.p>
              </div>

              <Tabs defaultValue="waste-collection" className="w-full">
                <div className="mb-8">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                    {galleryItems.map((category) => (
                      <TabsTrigger key={category.category} value={category.category}>
                        {category.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {galleryItems.map((category) => (
                  <TabsContent key={category.category} value={category.category} className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.images.map((image, index) => (
                        <motion.div 
                          key={index}
                          className="overflow-hidden rounded-xl shadow-sm cursor-pointer"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          onClick={() => setSelectedImage(image.src)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="aspect-w-3 aspect-h-2">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 bg-white">
                            <p className="text-gray-700">{image.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
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

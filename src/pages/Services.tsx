
import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Recycle, BookOpen, PlaneTakeoff, Lightbulb } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "waste-collection",
      icon: <Recycle className="h-12 w-12" />,
      title: "Waste Collection & Recycling",
      description: "We provide efficient waste collection services and specialize in recycling a wide range of materials, including paper, plastic, metal, glass, and e-waste. Acting as a mediator, we ensure that these materials are disposed of and recycled responsibly, reducing landfill waste and promoting a circular economy."
    },
    {
      id: "education",
      icon: <BookOpen className="h-12 w-12" />,
      title: "Environmental Education & Awareness",
      description: "Our environmental education programs focus on inspiring local communities and students to take action for a sustainable future. We conduct workshops and awareness campaigns on waste management, environmental conservation, and the importance of reducing our environmental footprint."
    },
    {
      id: "planning",
      icon: <PlaneTakeoff className="h-12 w-12" />,
      title: "Project Planning & Execution",
      description: "We collaborate with local governments and communities to implement meaningful environmental projects. From tree planting initiatives to installing dustbins and enhancing public spaces, we create impactful projects that foster sustainability and environmental consciousness in local areas."
    },
    {
      id: "products",
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Sustainable Product Creation",
      description: "As part of our commitment to sustainability, we recycle collected waste glass bottles and transform them into useful products. This process reduces waste while creating functional, eco-friendly products."
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
                  Our Services
                </motion.span>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Sustainable Solutions for a Better Tomorrow
                </motion.h1>
                <motion.p 
                  className="max-w-2xl mx-auto text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  At Harit Eco Ventures, we are committed to leading the way in sustainable waste management and environmental conservation. We offer a variety of services designed to promote a cleaner and greener future.
                </motion.p>
              </div>

              <div className="space-y-16">
                {services.map((service, index) => (
                  <motion.div 
                    key={service.id}
                    id={service.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-20 h-20 bg-harit-100 rounded-lg flex items-center justify-center shrink-0 text-harit-600">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Services;

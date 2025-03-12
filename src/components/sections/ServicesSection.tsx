
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Recycle, BookOpen, PlaneTakeoff, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Waste Collection & Recycling",
      description: "Collection and recycling of paper, plastic, metal, glass, and e-waste, acting as a mediator between waste collectors and recycling facilities.",
      link: "/services#waste-collection"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Environmental Education",
      description: "Educational programs and workshops for schools and communities to raise awareness about waste management and environmental conservation.",
      link: "/services#education"
    },
    {
      icon: <PlaneTakeoff className="h-8 w-8" />,
      title: "Project Planning & Execution",
      description: "Implementation of environmental projects like tree plantation drives, dustbin installations, and restoration of green spaces.",
      link: "/services#planning"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Sustainable Product Creation",
      description: "Transformation of waste materials, particularly glass bottles, into useful and eco-friendly products for everyday use.",
      link: "/services#products"
    }
  ];

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
            Our Services
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sustainable Solutions for a Better Tomorrow
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive environmental services focused on waste management, 
            education, and creating sustainable products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <div className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-harit-100 rounded-lg flex items-center justify-center mb-6 text-harit-600 group-hover:bg-harit-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-harit-600 font-medium hover:text-harit-700 transition-colors"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-6 py-3 border border-harit-500 text-harit-600 bg-white rounded-md hover:bg-harit-50 transition-colors duration-300"
          >
            View All Services
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

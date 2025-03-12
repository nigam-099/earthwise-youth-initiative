
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Waste Collection Drives",
      image: "/lovable-uploads/5be31506-7675-4fb6-9496-017a1ced01f7.png",
      link: "/activities#waste-collection"
    },
    {
      title: "Waste Recycling",
      image: "/lovable-uploads/83f2cdd6-7aae-45ec-b8ff-a5b85aee376e.png",
      link: "/activities#recycling"
    },
    {
      title: "Environmental Education",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      link: "/activities#education"
    },
    {
      title: "Waste Sorting & Management",
      image: "/lovable-uploads/bfc82cda-c368-417a-b1cb-2e7ebbe272cb.png",
      link: "/activities#waste-management"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-harit-100 text-harit-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our Activities
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Making a Difference Through Action
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our impactful initiatives that are creating positive change for 
            the environment and communities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                <Link 
                  to={activity.link} 
                  className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium group-hover:underline transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
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
            to="/activities" 
            className="inline-flex items-center justify-center px-6 py-3 border border-harit-500 text-harit-600 bg-white rounded-md hover:bg-harit-50 transition-colors duration-300"
          >
            View All Activities
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        ref={parallaxRef}
      >
        <img
          src="/lovable-uploads/8798da8b-7f58-40bb-ad92-ffce57e95638.png"
          alt="Recyclable materials"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full pt-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white mx-auto mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/5d6ae683-ae65-4465-9cb3-6bd4341e0d12.png" 
                alt="Harit Eco Ventures Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-harit-500">Youth-Powered</span>, <br className="hidden sm:block" />
            <span className="relative">
              Earth-Centered
              <span className="absolute bottom-2 left-0 w-full h-2 bg-harit-200 -z-10"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Harit Eco Ventures is a youth-driven organization committed to sustainable waste 
            management and environmental conservation, turning waste into opportunity.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/get-involved" 
              className="btn-primary flex items-center justify-center gap-2 min-w-[180px]"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary flex items-center justify-center gap-2 min-w-[180px]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-harit-500 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-harit-500 rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;


import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import BlogPreview from '@/components/sections/BlogPreview';
import CallToAction from '@/components/sections/CallToAction';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ActivitiesSection />
          <BlogPreview />
          <CallToAction />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Index;

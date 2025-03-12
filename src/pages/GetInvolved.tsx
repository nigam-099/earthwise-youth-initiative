
import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const involvementOptions = [
    {
      title: "Volunteer With Us",
      description: "Join our team of dedicated volunteers who contribute their time and skills to various activities like waste collection drives, tree plantations, and educational programs.",
      benefits: [
        "Make a tangible impact on environmental conservation",
        "Develop new skills and gain valuable experience",
        "Connect with like-minded individuals",
        "Flexible time commitment to suit your schedule"
      ]
    },
    {
      title: "Partner With Us",
      description: "We welcome partnerships with businesses, educational institutions, and other organizations that share our vision for a cleaner, greener future.",
      benefits: [
        "Collaborate on impactful environmental projects",
        "Enhance your organization's CSR initiatives",
        "Co-create innovative solutions for waste management",
        "Gain visibility through our network and platforms"
      ]
    },
    {
      title: "Donate",
      description: "Financial contributions help us expand our initiatives, reach more communities, and create a greater impact for environmental conservation.",
      benefits: [
        "Support tree plantation drives and green space restoration",
        "Fund educational programs for schools and communities",
        "Enable waste collection and recycling infrastructure",
        "Help develop sustainable products from recycled materials"
      ]
    },
    {
      title: "Spread Awareness",
      description: "Help us spread the word about sustainable waste management and environmental conservation through your social networks and communities.",
      benefits: [
        "Share our content and initiatives on social media",
        "Organize awareness sessions in your community",
        "Encourage friends and family to adopt sustainable practices",
        "Be an ambassador for environmental conservation"
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
                  Get Involved
                </motion.span>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join Us in Creating a Sustainable Future
                </motion.h1>
                <motion.p 
                  className="max-w-2xl mx-auto text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  There are many ways to support our mission and contribute to environmental conservation, whether you're an individual, a community, or a business.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {involvementOptions.map((option, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="p-6 sm:p-8">
                      <h2 className="text-2xl font-semibold mb-4 text-gray-900">{option.title}</h2>
                      <p className="text-gray-600 mb-6">{option.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {option.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-harit-500 mt-0.5 mr-3 flex-shrink-0" />
                            <p className="text-gray-700">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-harit-50 rounded-xl p-8 border border-harit-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-harit-800">Ready to Make a Difference?</h2>
                  <p className="text-harit-600 mb-8">
                    Whether you want to volunteer, partner with us, donate, or simply learn more about our initiatives, we'd love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button asChild className="bg-harit-600 hover:bg-harit-700">
                      <Link to="/contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-harit-500 text-harit-600 hover:bg-harit-50">
                      <a href="mailto:info@haritecoventures.com">
                        Email Us Directly
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default GetInvolved;


import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Activities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    {
      id: "waste-collection",
      title: "Waste Collection Drives",
      description: "We organize regular waste collection drives in local communities, schools, and public spaces. These drives help reduce littering, raise awareness about waste segregation, and encourage people to participate in keeping their surroundings clean.",
      image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "recycling",
      title: "Recycling & Upcycling Initiatives",
      description: "We actively engage in recycling and upcycling activities to transform waste materials, such as paper, plastic, and glass, into useful products. Our efforts contribute to reducing landfill waste and promoting a circular economy.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "education",
      title: "Environmental Education Programs",
      description: "We conduct environmental education programs in schools and local communities, focusing on waste management, conservation, and the importance of sustainable practices. These programs are designed to inspire young minds and local residents to take action for the environment.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "tree-plantation",
      title: "Tree Plantation Campaigns",
      description: "As part of our commitment to preserving nature, we regularly organize tree plantation campaigns in local areas, including public spaces and community centers. These efforts help in improving air quality, combating climate change, and enhancing biodiversity.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "collaboration",
      title: "Collaboration with Local Authorities",
      description: "We work closely with local governments and municipalities to implement community-based environmental initiatives. Through these collaborations, we engage in projects like the installation of dustbins, environmental awareness workshops, and creating green spaces for public enjoyment.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "products",
      title: "Sustainable Product Development",
      description: "Our team focuses on transforming waste glass bottles into a variety of useful products, including drinking glasses, decor items, and more. This activity not only promotes recycling but also provides eco-friendly alternatives to everyday products.",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsZWQlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "advocacy",
      title: "Advocacy & Community Outreach",
      description: "We regularly engage in advocacy work to raise awareness about the importance of sustainable waste management practices. Through community outreach, we aim to inspire individuals and businesses to adopt environmentally friendly habits.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5JTIwb3V0cmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "entrepreneurship",
      title: "Climate Smart Entrepreneurship Initiatives",
      description: "We participate in events such as the Climate Smart Entrepreneurship Program, where we showcase innovative recycling products and network with other environmentally conscious businesses to drive positive change.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVudHJlcHJlbmV1cnNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
                  Our Activities
                </motion.span>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Making a Difference Through Action
                </motion.h1>
                <motion.p 
                  className="max-w-2xl mx-auto text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  At Harit Eco Ventures, we believe in taking proactive steps to foster environmental sustainability. Our activities encompass a wide range of projects, initiatives, and events aimed at educating the community, promoting waste management, and contributing to a cleaner planet.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {activities.map((activity, index) => (
                  <motion.div 
                    key={activity.id}
                    id={activity.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="aspect-w-3 aspect-h-2 md:aspect-auto md:h-full">
                        <img 
                          src={activity.image} 
                          alt={activity.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 sm:p-8 md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">{activity.title}</h2>
                        <p className="text-gray-600 mb-6">{activity.description}</p>
                        <div className="flex items-center text-harit-500">
                          <Check className="h-5 w-5 mr-2" />
                          <span className="font-medium">Active Project</span>
                        </div>
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

export default Activities;


import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Nigam Babu Koirala",
      position: "CEO",
      education: "Environmental Science Student at IOST",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Gaurav Gupta",
      position: "General Manager",
      education: "",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Rajan Pandey",
      position: "Finance Manager",
      education: "CA Student at ICAN",
      image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Niraj Pandey",
      position: "Technology Officer",
      education: "",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Hemanta Sharma",
      position: "Graphic Designer",
      education: "CSIT Student at IOST",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          {/* Hero section */}
          <section className="pt-32 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.span 
                className="inline-block px-3 py-1 bg-harit-100 text-harit-700 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About Us
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Youth-Powered Environmental Action
              </motion.h1>
              <motion.p 
                className="max-w-2xl mx-auto text-lg text-gray-600 mb-8"
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
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600">
                    To create a cleaner, greener future where waste is transformed into opportunity 
                    and communities thrive in harmony with nature. We envision a society where 
                    sustainable practices are the norm, and every individual is an environmental steward.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600">
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
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Our Story
                </motion.h2>
                <motion.div 
                  className="prose prose-lg mx-auto text-gray-600"
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

          {/* Team section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Meet Our Team
                </motion.h2>
                <motion.p 
                  className="max-w-2xl mx-auto text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  The dedicated individuals driving our mission forward
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-harit-600 font-medium mb-2">{member.position}</p>
                      {member.education && (
                        <p className="text-gray-500 text-sm">{member.education}</p>
                      )}
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

export default About;

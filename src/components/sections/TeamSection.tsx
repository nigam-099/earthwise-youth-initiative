
import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const executiveLeadership = [
    {
      name: "Nigam Babu Koirala",
      position: "Chief Executive Officer",
      education: "Environmental Science Student at IOST",
      image: "/lovable-uploads/e57c71a9-520e-4b41-9a1c-09ca73a7b4a4.png"
    }
  ];

  const managementTeam = [
    {
      name: "Gaurav Gupta",
      position: "General Manager",
      education: "",
      image: "/lovable-uploads/b83269bd-e3c9-4ee1-93ea-6e97def2bb9f.png"
    },
    {
      name: "Rajan Pandey",
      position: "Finance Manager",
      education: "CA Student at ICAN",
      image: "/lovable-uploads/4b67a759-aa9d-4455-9f5b-19ddde95c908.png"
    }
  ];

  const technicalTeam = [
    {
      name: "Niraj Pandey",
      position: "Technology Officer",
      education: "Computer Science Student at Northern Kentucky University (NKU)",
      image: "/lovable-uploads/882707d8-1395-48b8-b8d2-464180d8c046.png"
    },
    {
      name: "Hemanta Sharma",
      position: "Graphic Designer",
      education: "CSIT Student at IOST",
      image: "/lovable-uploads/a702b0c3-75e3-4de0-aa50-eed60552c3d8.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-lovelace" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The dedicated individuals driving our mission forward
          </motion.p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center font-lovelace"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Executive Leadership
          </motion.h3>
          <div className="flex justify-center">
            {executiveLeadership.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300 max-w-sm mx-auto" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-48 h-48 mx-auto mt-6 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-harit-600 dark:text-harit-400 font-medium mb-2 text-base">{member.position}</p>
                  {member.education && <p className="text-gray-500 dark:text-gray-400 text-sm">{member.education}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center font-lovelace"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Management Team
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {managementTeam.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-36 h-36 mx-auto mt-6 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-harit-600 dark:text-harit-400 font-medium mb-2 text-base">{member.position}</p>
                  {member.education && <p className="text-gray-500 dark:text-gray-400 text-sm">{member.education}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div>
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center font-lovelace"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Team
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {technicalTeam.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-36 h-36 mx-auto mt-6 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-harit-600 dark:text-harit-400 font-medium mb-2 text-base">{member.position}</p>
                  {member.education && <p className="text-gray-500 dark:text-gray-400 text-sm">{member.education}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

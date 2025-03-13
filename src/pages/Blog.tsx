
import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: "dustbin-installation",
      title: "Dustbin Installation at Mela Mahotsav",
      excerpt: "As part of our ongoing efforts to promote sustainable waste management, Harit Eco Ventures successfully installed multiple dustbins at the Mela Mahotsav event, making proper waste disposal accessible to attendees.",
      date: "1st Magh, 2081",
      image: "/lovable-uploads/eea18526-abfa-4cbd-afe9-fc41da217fde.png",
      content: `
        <h2>Promoting Sustainable Waste Management at Local Events</h2>
        <p>On 1st Magh 2081, Harit Eco Ventures took a significant step towards promoting proper waste management by installing multiple dustbins at the Mela Mahotsav event. This initiative aimed to provide accessible waste disposal solutions and encourage proper waste segregation practices among attendees.</p>
        
        <h2>Strategic Placement for Maximum Impact</h2>
        <p>The green dustbins, prominently featuring Harit's logo, were strategically placed throughout the event grounds to ensure easy access for all attendees. This thoughtful placement helped maximize the impact of our waste management efforts and raised awareness about the importance of proper waste disposal.</p>
        
        <h2>Community Response and Impact</h2>
        <p>The response from the community was overwhelmingly positive. Many attendees expressed appreciation for the initiative, and we observed a significant reduction in littering compared to previous events. This success demonstrates the community's readiness to embrace sustainable practices when given the right tools and infrastructure.</p>
        
        <h2>Looking Ahead</h2>
        <p>Building on this success, Harit Eco Ventures plans to expand this initiative to other local events and gatherings. By making proper waste disposal convenient and accessible, we aim to cultivate lasting waste management habits that extend beyond special events and into everyday life.</p>
        
        <p>This dustbin installation project represents just one aspect of our broader mission to promote environmental consciousness and sustainable waste management practices in our communities. We invite you to join us in this important work by supporting our initiatives and incorporating sustainable practices into your daily life.</p>
      `
    },
    {
      id: "leading-the-charge",
      title: "Harit Eco Ventures: Leading the Charge Against Wasting Waste",
      excerpt: "Harit Eco Ventures Pvt. Ltd., a youth-led organization committed to sustainable waste management and environmental conservation, has taken significant strides in establishing its presence and impact.",
      date: "13th Shrawan, 2081",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      content: `
        <h2>A Vision Comes to Life</h2>
        <p>The official registration on 13th Shrawan marked a pivotal moment for Harit Eco Ventures, solidifying its identity as a formally recognized enterprise. This milestone underscored the dedication of the company's founders to address pressing environmental challenges through innovative and actionable solutions.</p>
        <p>Harit Eco Ventures is driven by the ethos encapsulated in its slogan: "Youth-Powered, Earth-Centered." The company's youthful leadership, spearheaded by CEO Nigam Babu Koirala, a Environmental Science at IOST reflects its commitment to engaging younger generations in the fight against environmental degradation.</p>
        <p>Whereas the general manager of the company is Mr Gaurav Gupta, Finance manager is Mr Rajan Pandey who is a CA student at ICAN.</p>
        
        <h2>Starting Strong in Rajapur Municipality</h2>
        <p>Launching its execution phase on Bhadra 6 of 2081 in Rajapur Municipality, Harit Eco Ventures chose this location strategically for its first branch. The municipality, nestled in Bardiya district, is a vibrant community with significant potential for impactful environmental initiatives.</p>
        
        <h2>Building a Sustainable Future</h2>
        <p>As Harit Eco Ventures grows, it remains committed to its mission of mediating recycling efforts and tackling environmental issues such as improper waste disposal and plastic burning. With a dedicated team and a clear vision, the company continues to inspire and empower communities to embrace sustainable lifestyles.</p>
        <p>The journey from registration to execution in just a few months is a testament to the team's determination and the support of the local community. Harit Eco Ventures is not just a company; it is a movement driven by passion and purpose.</p>
        <p>Stay connected with Harit Eco Ventures as it expands its footprint and introduces innovative solutions to create a cleaner, greener Nepal. Together, we can make a difference, one project at a time!</p>
      `
    }
  ];

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block px-3 py-1 bg-harit-100 text-harit-700 dark:bg-harit-900 dark:text-harit-300 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Blog & Updates
                </motion.span>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-lovelace"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Latest News & Insights
                </motion.h1>
                <motion.p 
                  className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Stay updated with our recent activities, success stories, and insights on environmental conservation and sustainable waste management.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="aspect-w-16 aspect-h-9 md:aspect-auto md:h-full">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 sm:p-8 md:col-span-2">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-lovelace">{post.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-harit-600 dark:text-harit-400 font-medium hover:text-harit-700 dark:hover:text-harit-300 transition-colors"
                        >
                          Read the full article
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
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

export default Blog;

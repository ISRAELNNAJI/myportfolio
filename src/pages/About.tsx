import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';

const About = () => {
  const timelineData = [
    {
      year: '2022',
      title: 'Started Web Design Journey',
      description: 'Began learning the fundamentals of web design and digital marketing, creating simple projects and landing pages to build practical skills.',
    },
    {
      year: '2023',
      title: 'Freelance Web Designer',
      description: 'Started working with clients as a freelancer, designing custom websites and funnels for small businesses, coaches, and online entrepreneurs.',
    },
    {
      year: '2024',
      title: 'Website & Funnel Specialist',
      description: 'Focused on building conversion-driven websites and sales funnels using platforms like WordPress, Systeme.io, ClickFunnels, and GoHighLevel.',
    },
    {
      year: '2025',
      title: 'Marketing & Automation Expert',
      description: 'Integrated marketing strategies with automation tools, CRMs, and lead capture systems to help clients generate leads and grow their online presence effectively.',
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <SectionTitle 
          title="About Me"
          subtitle="Learn about my journey, skills, and passion for creating exceptional web experiences."
        />
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">My Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
            <p>
              My name is Israel, and I’m a <span className="text-gradient font-medium">creative and results-driven website and funnel designer</span> based in Nigeria. I didn’t just stumble into this field; I chose it because I genuinely love helping people bring their business ideas to life online. Over the years, I’ve worked with entrepreneurs, coaches, agencies, and service-based professionals who were either overwhelmed by tech or frustrated with underperforming websites. I step in to simplify the process and build systems that actually get results.
            </p>
            <p>
              I specialize in <span className="text-gradient font-medium">website design, sales funnels, landing pages, and ad campaign setup and management</span>. Whether you're looking to launch a product, capture leads, book more calls, or increase conversions, I build the kind of online presence that helps you do just that. I design on platforms like <span className="text-gradient font-medium">WordPress, ClickFunnels, Systeme.io, Wix, and GoHighLevel</span>, depending on what suits your business needs best.
            </p>
            <p>
              Beyond just design, I also help with <span className="text-gradient font-medium">CRM setup, automation, form integrations such as Jotform</span>, and other technical components that make your system run smoothly. My goal is to take the stress off your plate so you can focus on doing what you love while your website or funnel supports your growth every step of the way.
            </p>
            <p>
              I've had the pleasure of working with clients across a variety of industries including <span className="text-gradient font-medium">finance, health and wellness, real estate, education, and digital services</span>. One thing that remains consistent is my commitment to quality, clear communication, and delivering work that speaks for itself.
            </p>
            <p>
              If you’re tired of websites that look pretty but don’t convert, or funnels that confuse your audience instead of guiding them, I’d love to help you turn that around. Let’s build something powerful together that reflects your brand and supports your business goals from day one.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {['HTML/CSS', 'JavaScript', 'React', 'UI/UX Design', 'Responsive Design', 
              'SEO Optimization', 'Conversion Rate Optimization', 'Marketing Funnels'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-secondary p-3 rounded-lg flex items-center"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-accent to-blue-accent mr-2"></div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-10">Professional Journey</h2>
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { 
  Layout, 
  LineChart, 
  Megaphone, 
  Search, 
  Rocket, 
  Code, 
  Palette,
  Bot
} from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom, responsive website design focused on user experience and conversion optimization.',
      icon: Layout,
      color: 'purple-accent'
    },
    {
      title: 'Web Development',
      description: 'Front-end and back-end development using modern technologies for optimal performance.',
      icon: Code,
      color: 'blue-accent'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces and smooth user experiences that engage and convert visitors.',
      icon: Palette,
      color: 'red-accent'
    },
    {
      title: 'Funnel Building',
      description: 'Strategic sales funnels designed to guide visitors through the customer journey.',
      icon: LineChart,
      color: 'purple-accent'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to reach and engage your target audience.',
      icon: Megaphone,
      color: 'blue-accent'
    },
    {
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve visibility and drive organic traffic to your website.',
      icon: Search,
      color: 'red-accent'
    },
    {
      title: 'Automation',
      description: 'Streamline your business processes with custom automation solutions and integrations.',
      icon: Bot,
      color: 'purple-accent'
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <SectionTitle 
          title="My Services"
          subtitle="Comprehensive web solutions to help your business thrive online."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
        
        <div className="mt-24 bg-dark-secondary p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-accent/10 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
                <p className="text-text-secondary mb-6">
                  Let's collaborate to create a powerful digital strategy tailored to your business goals.
                  Whether you need a new website, marketing funnel, or complete digital overhaul, I'm here to help.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="/contact"
                    className="btn-glow border-red-accent shadow-glow-red"
                  >
                    <span>Get Started Today</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Rocket className="w-32 h-32 text-gradient opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
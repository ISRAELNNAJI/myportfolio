import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Portfolio = () => {
  const projects = [
  {
    title: 'Every Dime Tax Pro',
    description: 'Professional tax preparation and consultation services.',
    image: 'https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2021/06/Att-of-Color-meeting.jpg',
    tags: ['HTML', 'CSS', 'WordPress', 'Elementor'],
    link: 'https://everydimetaxpro.suiccabrand.online',
  },
  {
    title: 'MDG Building Construction',
    description: 'Residential and commercial building services.',
    image: 'https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/7/70/756587511762707.jpg',
    tags: ['WordPress', 'HTML', 'CSS', 'Elementor'],
    link: 'https://mdgbuilding.co.uk',
  },
  {
    title: 'Kernow AI Platform',
    description: 'AI-powered platform for smart business automation.',
    image: 'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1466924677/image_1466924677.jpg',
    tags: ['GoHighLevel', 'HTML', 'CSS'],
    link: 'https://app.growkernow.co.uk/v2/preview/LyrOMWgmpeYN5MCe6tM1?notrack=true',
    },
    {
      title: 'Top Tier Financial',
      description: 'Premium tax and financial services.',
      image: 'https://effectivechildtherapy.org/wp-content/uploads/2017/03/iStock-516896270.jpg',
      tags: ['WordPress', 'Elementor', 'CSS'],
      link: 'https://www.toptierfin.com/',
    },
    {
      title: 'Truth Taxes',
      description: 'Tax advisory and filing support.',
      image: 'https://i.ytimg.com/vi/PiS3GD9N9VM/maxresdefault.jpg',
      tags: ['WordPress', 'Elementor', 'CSS', 'javascript'],
      link: 'https://truthtaxes.com/',
    },
    {
    title: 'Unlimited Love & Care',
    description: 'Home healthcare provider for seniors and individuals needing care.',
    image: 'https://avatars.mds.yandex.net/get-altay/2838749/2a00000171ecb052527fd0d730b82e62aa45/orig',
    tags: ['WordPress', 'Elementor', 'HTML', 'CSS'],
    link: 'https://www.unlimitedloveandcare.com/',
    },
    ];

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <SectionTitle 
          title="My Work"
          subtitle="Explore some of my recent projects and web applications."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-secondary rounded-xl overflow-hidden group hover:shadow-glow transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-dark-bg text-purple-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  external
                  to={project.link}
                  color="blue"
                  className="w-full flex items-center justify-center gap-2"
                >
                  View Project <ExternalLink size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
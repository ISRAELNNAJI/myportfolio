import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import Button from '../components/Button';
import BlobImage from '../components/BlobImage';
import profileimage from '../../portfolio images/1001519688.jpg'

const Home = () => {


  return (
    <section className="relative min-h-screen">
      <ParticlesBackground />
      
<div className="container mx-auto px-6 py-32 min-h-screen flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="flex-1 flex flex-col justify-center"
>
            <div className="mb-2">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-dark-secondary px-3 py-1 rounded-full text-purple-accent">
                  Web Developer
                </span>
                <span className="text-sm bg-dark-secondary px-3 py-1 rounded-full text-blue-accent">
                  Designer
                </span>
                <span className="text-sm bg-dark-secondary px-3 py-1 rounded-full text-red-accent">
                  Marketing Expert
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4">
              Crafting <span className="text-gradient">High-Performance</span> <br className="hidden sm:block" />
              Web Experiences
            </h1>
            
            <p className="text-text-secondary text-lg mt-6 max-w-lg">
              I help businesses create stunning digital experiences that convert visitors into customers. 
              From web design to marketing funnels, my services are designed to elevate your brand's online presence.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/portfolio" className="flex items-center gap-2 group">
                Explore My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
<Button
  color="blue"
  className="flex items-center gap-2"
  onClick={() => window.open('https://www.linkedin.com/in/nnaji-israel/', '_blank', 'noopener,noreferrer')}
>
  Get In Touch
</Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:flex-1 flex justify-center items-center"
          >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden border-4 border-purple-accent/30 rounded-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-accent via-blue-accent to-red-accent opacity-70 blur-md animate-pulse-slow rounded-full"></div>
            <BlobImage
              src={profileimage}
              alt="Profile"
              className="w-full h-full p-1 bg-dark-bg rounded-full"
            />
          </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex justify-center items-center">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-2 border-text-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-purple-accent"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
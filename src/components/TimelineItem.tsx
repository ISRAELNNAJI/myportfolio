import React from 'react';
import { motion } from 'framer-motion';

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  index: number;
};

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row mb-12 last:mb-0"
    >
      <div className="flex flex-col items-center mr-0 md:mr-10 mb-4 md:mb-0">
        <div className="w-px h-full bg-gradient-to-b from-purple-accent to-blue-accent hidden md:block"></div>
        <div className="relative flex items-center justify-center p-4">
          <div className="absolute w-14 h-14 rounded-full bg-dark-secondary"></div>
          <span className="relative z-10 text-lg font-bold text-gradient">{year}</span>
        </div>
        <div className="w-px h-full bg-gradient-to-b from-blue-accent to-red-accent hidden md:block"></div>
      </div>
      <div className="md:pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
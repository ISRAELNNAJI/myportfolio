import React from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '}
              {index === title.split(' ').length - 1 ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </React.Fragment>
          ))}
        </h2>
        {subtitle && (
          <p className={`text-text-secondary text-lg mt-2 max-w-2xl ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionTitle;

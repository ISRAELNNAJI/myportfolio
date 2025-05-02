import React from 'react';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: 'purple-accent' | 'red-accent' | 'blue-accent' | 'green-accent';
};

const colorClassMap: Record<ServiceCardProps['color'], string> = {
  'purple-accent': 'text-purple-500',
  'red-accent': 'text-red-500',
  'blue-accent': 'text-blue-500',
  'green-accent': 'text-green-500',
};

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  color = 'purple-accent',
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card-service group text-center"
    >
      <div
        className={`p-3 rounded-full w-16 h-16 mb-6 mx-auto flex items-center justify-center bg-dark-bg ${colorClassMap[color]}`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;

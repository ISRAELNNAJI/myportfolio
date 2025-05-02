import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contactMessages"), formData);
      alert('Thanks for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <SectionTitle 
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how we can work together."
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-dark-secondary p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <User size={16} className="text-purple-accent" /> Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="focus:border-purple-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail size={16} className="text-blue-accent" /> Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="focus:border-blue-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <MessageSquare size={16} className="text-red-accent" /> Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="focus:border-red-accent resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" color="red" className="w-full flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2 text-gradient">Email</h4>
                  <p className="text-text-secondary">
                    <a href="mailto:nnajiisrael4@gmail.com" className="hover:text-purple-accent transition-colors">
                      nnajiisrael4@gmail.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2 text-gradient">WhatsApp</h4>
                  <p className="text-text-secondary">
                    <a href="https://wa.me/2347045857168" className="hover:text-blue-accent transition-colors">
                      +234 704 5857168
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2 text-gradient">Office Hours</h4>
                  <p className="text-text-secondary">Monday - Friday, 9AM - 5PM EST</p>
                </div>
              </div>
            </div>
            
              <div className="mt-10 rounded-xl overflow-hidden">
                <h4 className="text-xl font-medium mb-1 text-gradient">Location</h4>
                <p className="text-text-secondary mb-4">Ibadan, Nigeria</p>
                <p className="text-text-secondary mb-6 text-sm">The capital of Oyo State, known for its rich history and culture.</p>
                <div className="h-64 w-full bg-dark-bg relative rounded-xl overflow-hidden">
                  <iframe
                    title="Ibadan Nigeria Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.027073927927!2d3.886530314769091!3d7.377535394631503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0a1a0a1b%3A0x123456789abcdef!2sIbadan%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1687000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/10 via-blue-accent/10 to-red-accent/10 opacity-50"></div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

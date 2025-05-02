import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-sm py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-gradient">Israel's Portfolio</h1>
            </motion.div>
          </NavLink>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-purple-accent'
                        : 'text-text-primary hover:text-purple-accent'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-primary hover:text-purple-accent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium p-2 rounded-md ${
                      isActive
                        ? 'text-purple-accent bg-dark-secondary'
                        : 'text-text-primary hover:text-purple-accent hover:bg-dark-secondary'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
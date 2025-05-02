import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-secondary py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gradient mb-2">Israel's Portfolio</h2>
            <p className="text-text-secondary text-sm max-w-xs">
              Crafting high-performance web experiences with modern design and
              cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 text-center">
            <div>
              <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-4">
                Navigation
              </h3>
<ul className="space-y-2">
  <li>
<NavLink
  to="/"
  className="text-text-secondary hover:text-purple-accent text-sm pointer-events-auto"
>
  Home
</NavLink>
  </li>
  <li>
<NavLink
  to="/about"
  className="text-text-secondary hover:text-purple-accent text-sm pointer-events-auto"
>
  About
</NavLink>
  </li>
  <li>
    <NavLink
      to="/portfolio"
      className="text-text-secondary hover:text-purple-accent text-sm"
    >
      Portfolio
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className="text-text-secondary hover:text-purple-accent text-sm"
    >
      Contact
    </NavLink>
  </li>
</ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li className="text-text-secondary hover:text-purple-accent text-sm">
                  Web Design
                </li>
                <li className="text-text-secondary hover:text-purple-accent text-sm">
                  Funnel Building
                </li>
                <li className="text-text-secondary hover:text-purple-accent text-sm">
                  Automation
                </li>
                <li className="text-text-secondary hover:text-purple-accent text-sm">
                  SEO Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Israel's Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-6">
<a
  href="https://www.linkedin.com/in/nnaji-israel/"
  className="text-text-secondary hover:text-purple-accent transition-colors"
  aria-label="LinkedIn"
>
  <Linkedin size={20} />
</a>
<a
  href="https://x.com/iconic_vortex"
  className="text-text-secondary hover:text-blue-accent transition-colors"
  aria-label="Twitter"
>
  <Twitter size={20} />
</a>
<a
  href="mailto:nnajiisrael4@gmail.com"
  className="text-text-secondary hover:text-red-accent transition-colors"
  aria-label="Email"
>
  <Mail size={20} />
</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
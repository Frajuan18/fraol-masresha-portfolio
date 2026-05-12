import React from 'react';
import { FiMail, FiPhone, FiGithub, FiTwitter, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', link: '#', color: 'hover:text-white' },
    { icon: FiTwitter, label: 'Twitter', link: '#', color: 'hover:text-blue-400' },
    { icon: FiLinkedin, label: 'LinkedIn', link: '#', color: 'hover:text-blue-500' },
  ];

  return (
    <footer className="relative bg-[#0a0a0a]">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 z-40 bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#2a2a2a]"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="rounded-2xl p-6 md:p-10 bg-[#1a1a1a] border border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about');
                    }}
                    className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services');
                    }}
                    className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('contact');
                    }}
                    className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('portfolio');
                    }}
                    className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FiMail className="text-gray-400" size={16} />
                  <a href="mailto:hello@company.com" className="transition-colors duration-300 text-gray-400 hover:text-white">
                    hello@company.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FiPhone className="text-gray-400" size={16} />
                  <a href="tel:+15551234567" className="transition-colors duration-300 text-gray-400 hover:text-white">
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 bg-[#2a2a2a] text-gray-400 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center pt-5 border-t border-[#333]">
            <p className="text-sm text-gray-500">
              &copy; 2025 Full Stack Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
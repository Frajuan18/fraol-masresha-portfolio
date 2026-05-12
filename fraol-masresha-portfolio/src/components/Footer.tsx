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
    <footer className="py-16 px-5 flex justify-center" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 z-40 bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#2a2a2a]"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>

      <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 md:p-10 max-w-4xl w-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
                  className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white text-sm"
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
                  className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white text-sm"
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
                  className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

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
                  className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="block transition-all duration-300 hover:translate-x-1 text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Connect
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FiMail className="text-gray-400" size={16} />
                <a href="mailto:hello@company.com" className="transition-colors duration-300 text-gray-400 hover:text-white text-sm">
                  hello@company.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-gray-400" size={16} />
                <a href="tel:+15551234567" className="transition-colors duration-300 text-gray-400 hover:text-white text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Follow Us
            </h3>
            <div className="flex gap-3">
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
            &copy; 2025 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
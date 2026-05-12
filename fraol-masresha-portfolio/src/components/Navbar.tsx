// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight, FiMail, FiInstagram, FiSend, FiCopy, FiCheck } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const contactInfo = [
    {
      platform: 'Instagram',
      username: '@fres.h925',
      icon: <FiInstagram size={24} />,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      link: 'https://instagram.com/fres.h925'
    },
    {
      platform: 'Telegram',
      username: '@Fra_juan',
      icon: <FaTelegramPlane size={22} />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      link: 'https://t.me/Fra_juan'
    },
    {
      platform: 'Email',
      username: 'fraolabmas@gmail.com',
      icon: <FiMail size={24} />,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500/30',
      link: 'mailto:fraolabmas@gmail.com'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const handleHireMe = () => {
    setShowPopup(true);
    setIsMenuOpen(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCopiedField(null);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-50 ${
        isScrolled ? 'w-[95%] md:w-[90%] lg:w-[85%]' : 'w-[calc(100%-30px)] max-w-[500px] md:max-w-[800px] lg:max-w-[1000px]'
      }`}>
        <div className="backdrop-blur-md rounded-full border border-[#333] shadow-lg shadow-black/30 bg-[#1a1a1a]/90">
          <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="text-xl md:text-2xl font-extrabold text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              PORTFOLIO
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <ul className="flex gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={`text-sm font-medium transition-all duration-300 relative ${
                        activeSection === item.id
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                        activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                      }`} />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Hire Me Button */}
              <button
                onClick={handleHireMe}
                className="group px-5 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Hire Me
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl text-white focus:outline-none relative z-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-[72px] left-1/2 transform -translate-x-1/2 transition-all duration-400 z-40 w-[calc(100%-30px)] max-w-[500px] ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-10'
        }`}
      >
        <div className="bg-[#1a1a1a]/95 backdrop-blur-md rounded-2xl border border-[#333] shadow-xl overflow-hidden">
          <div className="p-6 space-y-4">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <li 
                  key={item.id}
                  style={{ 
                    animationDelay: isMenuOpen ? `${idx * 50}ms` : '0ms',
                    animationFillMode: 'forwards'
                  }}
                  className={`transform transition-all duration-300 ${
                    isMenuOpen ? 'animate-slide-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`flex items-center justify-between py-3 px-4 transition-all duration-300 rounded-xl ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 text-white font-semibold border border-blue-500/30'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-[#333]">
              <button
                onClick={handleHireMe}
                className={`w-full py-3 rounded-xl text-sm font-medium text-center bg-white text-black hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 transform transition-all duration-300 ${
                  isMenuOpen ? 'animate-slide-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif", animationDelay: '200ms' }}
              >
                Hire Me
                <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-30 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Hire Me Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fade-in"
            onClick={closePopup}
          />
          
          {/* Popup Content */}
          <div className="relative bg-[#1a1a1a] rounded-2xl border border-[#333] shadow-2xl max-w-md w-full overflow-hidden animate-scale-up">
            {/* Header */}
            <div className="p-6 border-b border-[#333] bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <h3 className="text-2xl font-bold text-white text-center">Let's Connect!</h3>
              <p className="text-gray-400 text-sm text-center mt-1">Choose your preferred way to reach me</p>
            </div>
            
            {/* Contact Options */}
            <div className="p-6 space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className={`group relative p-4 rounded-xl ${info.bgColor} border ${info.borderColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-slide-up`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-full ${info.bgColor} ${info.color} transition-all duration-300 group-hover:scale-110`}>
                      {info.icon}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs uppercase tracking-wider">{info.platform}</p>
                      <p className="text-white font-medium text-sm md:text-base">{info.username}</p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      {/* Copy Button */}
                      <button
                        onClick={() => copyToClipboard(info.username, info.platform)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group/copy"
                        title="Copy to clipboard"
                      >
                        {copiedField === info.platform ? (
                          <FiCheck size={18} className="text-green-400" />
                        ) : (
                          <FiCopy size={18} className="text-gray-400 group-hover/copy:text-white" />
                        )}
                      </button>
                      
                      {/* Open Link Button */}
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                        title={`Open ${info.platform}`}
                      >
                        <FiSend size={18} className="text-gray-400 hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-5 border-t border-[#333] bg-white/5">
              <p className="text-gray-500 text-xs text-center">
                Click the copy icon to copy username or the send icon to open directly
              </p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <FiX size={20} className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-scale-up {
          animation: scaleUp 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
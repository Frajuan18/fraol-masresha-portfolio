import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${
      isScrolled ? 'w-[95%] md:w-[90%] lg:w-[85%]' : 'w-[calc(100%-30px)] max-w-[500px] md:max-w-[800px] lg:max-w-[1000px]'
    }`}>
      <div className="backdrop-blur-md rounded-full border border-[#333] shadow-lg shadow-black/30 bg-[#1a1a1a]/90">
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="text-xl md:text-2xl font-extrabold text-white"
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
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Auth Buttons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="px-5 py-2 rounded-full text-sm font-medium border border-[#333] text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                Login
              </a>
              <a
                href="#"
                className="px-5 py-2 rounded-full text-sm font-medium bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:transform hover:-translate-y-0.5"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 space-y-3 bg-[#1a1a1a]/95 backdrop-blur-md rounded-2xl mt-1">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`block py-2 text-center transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white font-semibold'
                        : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#"
                className="px-5 py-2 rounded-full text-sm font-medium text-center border border-[#333] text-gray-300 transition-all duration-300"
              >
                Login
              </a>
              <a
                href="#"
                className="px-5 py-2 rounded-full text-sm font-medium text-center bg-white text-gray-900 transition-all duration-300"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
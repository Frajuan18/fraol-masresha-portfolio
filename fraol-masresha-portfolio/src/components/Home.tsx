import React from 'react';
import { FiCode, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const Home: React.FC = () => {
  const features = [
    { icon: FiCode, label: 'Full Stack Dev', color: 'text-blue-400' },
    { icon: FiTrendingUp, label: 'Scalable Solutions', color: 'text-green-400' },
    { icon: FiUsers, label: 'Client Focused', color: 'text-purple-400' },
    { icon: FiAward, label: 'Quality Assured', color: 'text-yellow-400' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl bg-purple-900/20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-blue-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in text-white">
          Full Stack
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {' '}Developer
          </span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-gray-400">
          Crafting beautiful, scalable, and high-performance web applications with modern technologies
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105"
            >
              <feature.icon className={`mx-auto mb-2 ${feature.color}`} size={24} />
              <p className="text-xs font-medium text-gray-300">
                {feature.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full font-semibold bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:transform hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
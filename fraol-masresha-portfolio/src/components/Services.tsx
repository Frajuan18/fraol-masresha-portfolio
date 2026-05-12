import React from 'react';
import { 
  FiCode, FiDatabase, FiCloud, FiSmartphone, 
  FiShield, FiTrendingUp, FiZap, FiLayout 
} from 'react-icons/fi';

const Services: React.FC = () => {
  const services = [
    {
      icon: FiCode,
      name: 'Web Development',
      description: 'Full-stack web applications using React, Node.js, and modern frameworks',
      price: 'Starting at $2,500',
    },
    {
      icon: FiSmartphone,
      name: 'Mobile Development',
      description: 'Cross-platform mobile apps with React Native and Flutter',
      price: 'Starting at $3,000',
    },
    {
      icon: FiCloud,
      name: 'Cloud Solutions',
      description: 'AWS, Azure, and GCP cloud architecture and deployment',
      price: 'Starting at $1,500',
    },
    {
      icon: FiLayout,
      name: 'UI/UX Design',
      description: 'Beautiful, responsive designs with user-centered approach',
      price: 'Starting at $1,000',
    },
    {
      icon: FiDatabase,
      name: 'Database Design',
      description: 'Scalable database architecture and optimization',
      price: 'Starting at $1,200',
    },
    {
      icon: FiShield,
      name: 'Security Audit',
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $800',
    },
  ];

  const features = [
    { icon: FiZap, label: 'Fast Performance', color: 'text-yellow-400' },
    { icon: FiTrendingUp, label: 'Scalable', color: 'text-green-400' },
    { icon: FiShield, label: 'Secure', color: 'text-blue-400' },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#2a2a2a] to-[#0a0a0a]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl bg-green-900/20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full blur-3xl bg-yellow-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10"
            >
              <feature.icon className={feature.color} size={20} />
              <span className="text-sm font-medium text-gray-300">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20"
            >
              <service.icon className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.name}
              </h3>
              <p className="text-sm mb-4 leading-relaxed text-gray-400">
                {service.description}
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm font-semibold text-green-400">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10">
          <p className="text-sm text-gray-300">
            💼 Custom packages available for long-term partnerships. Contact me for detailed quotes and tailored solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
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
    <section id="services" className="min-h-screen w-full flex items-center justify-center py-20" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%)', fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white opacity-90 relative inline-block" 
            style={{ letterSpacing: '-2px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            SERVICES
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400 italic" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Service offerings, features, pricing plans, and detailed descriptions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1a1a1a] border border-[#333]"
            >
              <feature.icon className={feature.color} size={20} />
              <span className="text-sm font-medium text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-[#1a1a1a] border border-[#333] hover:border-[#555]"
            >
              <service.icon className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {service.name}
              </h3>
              <p className="text-sm mb-4 leading-relaxed text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {service.description}
              </p>
              <div className="pt-3 border-t border-[#333]">
                <p className="text-sm font-semibold text-green-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-6 rounded-xl bg-[#1a1a1a] border border-[#333]">
          <p className="text-sm text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
            💼 Custom packages available for long-term partnerships. Contact me for detailed quotes and tailored solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
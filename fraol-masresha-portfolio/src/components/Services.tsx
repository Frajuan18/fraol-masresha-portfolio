// Services.tsx - Clean version with no gradients
import React from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiMonitor,
} from 'react-icons/fi';
import { 
  MdOutlineDesignServices, 
  MdOutlineApi,
  MdCloudQueue
} from 'react-icons/md';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and performant user interfaces using modern frameworks like React and TypeScript.',
      icon: <FiMonitor size={28} />,
      features: ['Responsive Design', 'SPA Development', 'Performance Optimization']
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Creating robust server-side applications, RESTful APIs, and microservices with Node.js and Express.',
      icon: <FiCode size={28} />,
      features: ['REST APIs', 'Authentication', 'Microservices']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Designing intuitive, user-centered interfaces with focus on usability, accessibility, and visual appeal.',
      icon: <MdOutlineDesignServices size={28} />,
      features: ['Wireframing', 'Prototyping', 'User Research']
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Designing efficient database schemas, optimizing queries, and managing data storage solutions.',
      icon: <FiDatabase size={28} />,
      features: ['Schema Design', 'Query Optimization', 'Data Migration']
    },
    {
      id: 5,
      title: 'API Development',
      description: 'Building secure, scalable, and well-documented APIs for seamless integration between services.',
      icon: <MdOutlineApi size={28} />,
      features: ['RESTful APIs', 'GraphQL', 'API Documentation']
    },
    {
      id: 6,
      title: 'Cloud Deployment',
      description: 'Deploying and managing applications on cloud platforms with CI/CD pipelines and containerization.',
      icon: <MdCloudQueue size={28} />,
      features: ['AWS/Azure', 'Docker', 'CI/CD']
    },
  ];

  return (
    <section 
      id="services" 
      className="min-h-screen w-full flex items-center justify-center py-20 md:py-24"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        background: '#1a1a1a'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider font-medium mb-2 inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            What I offer
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            style={{ letterSpacing: '-1px' }}
          >
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid - 3x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-500 hover:scale-[1.03] hover:border-gray-500 hover:shadow-2xl cursor-pointer"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Icon - Solid color */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-500/20 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 group-hover:bg-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              {/* Bottom accent line - Solid color */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
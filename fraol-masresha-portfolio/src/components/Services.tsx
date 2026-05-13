import React, { useState } from 'react';
import { 
  FiCode, 
  FiLayout, 
  FiServer, 
  FiZap, 
  FiSmartphone,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiBriefcase,
  FiStar,
  FiArrowRight
} from 'react-icons/fi';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      subtitle: 'Full Stack Solutions',
      icon: <FiCode size={28} />,
      description: 'Building responsive, scalable web applications with modern technologies.',
      features: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL', 'RESTful APIs'],
      price: 'From $999',
      popular: true
    },
    {
      id: 2,
      title: 'UI/UX Design',
      subtitle: 'Beautiful Interfaces',
      icon: <FiLayout size={28} />,
      description: 'Creating intuitive, user-friendly designs that delight your audience.',
      features: ['Wireframing', 'Prototyping', 'Responsive Design', 'User Testing'],
      price: 'From $799',
      popular: false
    },
    {
      id: 3,
      title: 'Backend Development',
      subtitle: 'Robust APIs',
      icon: <FiServer size={28} />,
      description: 'Secure, scalable server-side solutions and database architecture.',
      features: ['Node.js/Express', 'Database Design', 'Authentication', 'Cloud Deployment'],
      price: 'From $899',
      popular: false
    },
    {
      id: 4,
      title: 'Mobile Development',
      subtitle: 'Cross Platform Apps',
      icon: <FiSmartphone size={28} />,
      description: 'Native-like mobile experiences with React Native.',
      features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Deploy'],
      price: 'From $1299',
      popular: false
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      subtitle: 'Scalable Infrastructure',
      icon: <FiCloud size={28} />,
      description: 'Cloud deployment, DevOps, and scalable infrastructure setup.',
      features: ['AWS/Azure', 'Docker', 'CI/CD Pipeline', 'Monitoring'],
      price: 'From $1099',
      popular: false
    },
    {
      id: 6,
      title: 'Performance Optimization',
      subtitle: 'Speed & Efficiency',
      icon: <FiZap size={28} />,
      description: 'Make your applications faster, leaner, and more efficient.',
      features: ['Code Splitting', 'Caching Strategy', 'Database Indexing', 'Load Testing'],
      price: 'From $699',
      popular: true
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: <FiBriefcase size={20} /> },
    { value: '30+', label: 'Happy Clients', icon: <FiUsers size={20} /> },
    { value: '98%', label: 'Satisfaction Rate', icon: <FiStar size={20} /> },
    { value: '24/7', label: 'Support', icon: <FiTrendingUp size={20} /> }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spreadFromCorner {
          0% {
            width: 0%;
            height: 0%;
          }
          70% {
            width: 100%;
            height: 100%;
          }
          100% {
            width: 100%;
            height: 100%;
          }
        }
        
        @keyframes splashEffect {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .service-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
          border: 2px solid #A3CF00;
          background: #1a1a1a;
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
        }
        
        /* Corner spread effect - 1 second */
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 0%;
          background: #A3CF00;
          transition: all 1s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          z-index: 0;
        }
        
        .service-card:hover::before {
          width: 100%;
          height: 100%;
        }
        
        /* Splash effect at bottom right */
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
        }
        
        .service-card:hover::after {
          animation: splashEffect 0.6s ease-out forwards;
        }
        
        /* Content wrapper */
        .service-card > * {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease 0.1s;
        }
        
        /* Hover text colors */
        .service-card:hover .service-icon {
          background: rgba(26, 26, 26, 0.15);
          color: #1a1a1a;
        }
        
        .service-card:hover .service-title,
        .service-card:hover .service-subtitle,
        .service-card:hover .service-price,
        .service-card:hover .service-description,
        .service-card:hover .price-label,
        .service-card:hover .features-label {
          color: #1a1a1a;
        }
        
        .service-card:hover .service-feature {
          background: rgba(26, 26, 26, 0.2);
          color: #1a1a1a;
        }
        
        .service-card:hover .border-line {
          border-color: rgba(26, 26, 26, 0.2);
        }
        
        .service-card:hover .btn-hover {
          background: #1a1a1a;
          color: #A3CF00;
        }
        
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        /* Stats cards */
        .stat-card {
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
        }
        
        /* CTA section */
        .cta-section {
          transition: transform 0.3s ease;
        }
        
        .cta-section:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20 mb-4">
            <FiBriefcase className="text-[#A3CF00]" size={16} />
            <span className="text-[#A3CF00] text-sm font-semibold uppercase tracking-wider">What I Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-white mb-3">
            My <span className="text-[#A3CF00]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
          <div className="w-16 h-0.5 bg-[#A3CF00] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="service-card relative rounded-2xl p-6 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge - Premium Design */}
              {service.popular && (
                <div className="absolute -top-3 right-6 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#A3CF00] blur-md rounded-full opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-[#A3CF00] to-[#8fb300] text-[#1a1a1a] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <FiStar size={12} className="fill-current" />
                      <span>POPULAR CHOICE</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Icon */}
              <div className="service-icon w-16 h-16 rounded-xl bg-[#A3CF00]/10 flex items-center justify-center mb-5 transition-all duration-300 text-[#A3CF00]">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="service-title text-xl font-bold text-white mb-1 transition-colors duration-300">{service.title}</h3>
              <p className="service-subtitle text-sm text-[#A3CF00] font-semibold mb-3 transition-colors duration-300">{service.subtitle}</p>
              <p className="service-description text-gray-400 text-sm leading-relaxed mb-4 transition-colors duration-300">{service.description}</p>
              
              {/* Features */}
              <div className="mb-4">
                <p className="features-label text-xs text-gray-500 uppercase tracking-wider mb-2 transition-colors duration-300">What's included:</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="service-feature text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300 transition-all duration-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Price & CTA */}
              <div className="border-line flex items-center justify-between pt-3 border-t border-gray-700 transition-colors duration-300">
                <div>
                  <span className="price-label text-xs text-gray-500 transition-colors duration-300">Starting at</span>
                  <p className="service-price text-2xl font-bold text-white transition-colors duration-300">{service.price}</p>
                </div>
                <button className="btn-hover flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 bg-gray-800 text-white">
                  <span>Learn More</span>
                  <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card bg-[#1a1a1a] rounded-xl p-5 text-center border-2 border-[#A3CF00] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#A3CF00]/10 flex items-center justify-center mx-auto mb-3">
                <div className="text-[#A3CF00]">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section bg-[#1a1a1a] rounded-2xl p-8 border-2 border-[#A3CF00] text-center transition-all duration-300">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20 mb-4">
              <FiStar className="text-[#A3CF00]" size={14} />
              <span className="text-[#A3CF00] text-xs font-semibold uppercase tracking-wider">Ready to start?</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's bring your ideas to life</h3>
            <p className="text-gray-400 text-sm mb-6">Get a free consultation and quote for your project</p>
            <button className="bg-[#A3CF00] text-[#1a1a1a] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto">
              <span>Hire Me</span>
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
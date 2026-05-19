import React, { useState } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCode,
  FiImage,
  FiShoppingCart,
  FiCloud,
  FiMessageCircle,
  FiBriefcase,
  FiStar
} from 'react-icons/fi';
import healthImg from '../assets/health care.png';
const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FiCode size={14} /> },
    { id: 'web', label: 'Web Apps', icon: <FiCode size={14} /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <FiShoppingCart size={14} /> },
    { id: 'cloud', label: 'Cloud', icon: <FiCloud size={14} /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      category: 'healthcare',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, and billing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      image: <img src={healthImg} alt="Hospital Management System" className="w-48 h-48 object-contain" />,
      github: 'https://medicare-app-phi.vercel.app/',
      demo: 'https://medicare-app-phi.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard with machine learning predictions and data visualization.',
      tech: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
      image: <FiImage size={48} className="text-[#A3CF00]" />,
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media App',
      category: 'web',
      description: 'Cross-platform social media application with real-time messaging and content sharing.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      image: <FiMessageCircle size={48} className="text-[#A3CF00]" />,
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration Suite',
      category: 'cloud',
      description: 'Enterprise cloud migration tools and monitoring system for seamless infrastructure transition.',
      tech: ['AWS', 'Terraform', 'Python', 'Docker', 'Kubernetes'],
      image: <FiCloud size={48} className="text-[#A3CF00]" />,
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management System',
      category: 'web',
      description: 'Collaborative task management platform with team workspace and project tracking.',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: <FiCode size={48} className="text-[#A3CF00]" />,
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'ecommerce',
      description: 'Online food ordering platform with real-time order tracking and payment integration.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
      image: <FiShoppingCart size={48} className="text-[#A3CF00]" />,
      github: '#',
      demo: '#',
      featured: false
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative w-full min-h-screen bg-[#F2F2F2] py-20 md:py-28">
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
        
        .project-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          border: 1px solid #e5e7eb;
          background: #ffffff;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          border-color: #A3CF00;
          box-shadow: 0 20px 30px -15px rgba(0, 0, 0, 0.1);
        }
        
        .project-card:hover .project-icon {
          transform: scale(1.1);
        }
        
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .category-active {
          background: #A3CF00;
          color: #1a1a1a;
          transform: scale(1.05);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20 mb-4">
            <FiBriefcase className="text-[#A3CF00]" size={16} />
            <span className="text-[#A3CF00] text-sm font-semibold uppercase tracking-wider">My Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-[#1A1A1A] mb-3">
            Featured <span className="text-[#A3CF00]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
          <div className="w-16 h-0.5 bg-[#A3CF00] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'category-active bg-[#A3CF00] text-[#1a1a1a] shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-[#A3CF00]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Image Area */}
              <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100">
                <div className={`project-icon transition-all duration-500 ${hoveredCard === project.id ? 'scale-110' : 'scale-100'}`}>
                  {project.image}
                </div>
                
                {/* Overlay with links */}
                <div className={`absolute inset-0 bg-white/95 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    className="p-3 bg-[#A3CF00] rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                    aria-label="GitHub"
                  >
                    <FiGithub className="text-[#1a1a1a]" size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-[#A3CF00] rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="text-[#1a1a1a]" size={20} />
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#A3CF00] blur-md rounded-full opacity-30"></div>
                      <span className="relative flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#A3CF00] to-[#8fb300] text-[#1a1a1a] font-bold">
                        <FiStar size={10} className="fill-current" />
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 transition-all duration-300 hover:bg-[#A3CF00] hover:text-[#1a1a1a] hover:border-[#A3CF00] cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A3CF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#A3CF00] text-[#A3CF00] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#A3CF00] hover:text-[#1a1a1a] hover:scale-105 hover:shadow-lg inline-flex items-center gap-2">
            <span>View All Projects</span>
            <FiExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
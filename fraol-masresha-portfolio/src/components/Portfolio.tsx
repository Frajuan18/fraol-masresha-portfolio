// Portfolio.tsx - Clean version with no gradients
import React, { useState } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCode,
  FiImage,
  FiShoppingCart,
  FiCloud,
  FiMessageCircle
} from 'react-icons/fi';

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
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      image: <FiShoppingCart size={48} className="text-gray-600" />,
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard with machine learning predictions and data visualization.',
      tech: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
      image: <FiImage size={48} className="text-gray-600" />,
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
      image: <FiMessageCircle size={48} className="text-gray-600" />,
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
      image: <FiCloud size={48} className="text-gray-600" />,
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
      image: <FiCode size={48} className="text-gray-600" />,
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
      image: <FiShoppingCart size={48} className="text-gray-600" />,
      github: '#',
      demo: '#',
      featured: false
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      id="portfolio" 
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
            My work
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            style={{ letterSpacing: '-1px' }}
          >
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-[#1a1a1a]/90 border border-[#333] text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-500 hover:scale-[1.02] hover:border-gray-500 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Image Area - Solid color */}
              <div className="relative h-48 overflow-hidden bg-[#2a2a2a] flex items-center justify-center">
                <div className={`transition-all duration-500 ${hoveredCard === project.id ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}>
                  {project.image}
                </div>
                
                {/* Overlay with links */}
                <div className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub className="text-black" size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="text-black" size={20} />
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 group-hover:bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
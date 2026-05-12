import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'cloud'];
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-featured e-commerce platform with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard with machine learning predictions',
      tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media App',
      category: 'mobile',
      description: 'Cross-platform social media application with real-time features',
      tech: ['React Native', 'Firebase', 'Node.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Cloud Migration Suite',
      category: 'cloud',
      description: 'Enterprise cloud migration tools and monitoring system',
      tech: ['AWS', 'Terraform', 'Python', 'Docker'],
      github: '#',
      demo: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      id="portfolio"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-40 w-80 h-80 rounded-full blur-3xl bg-purple-900/20" />
        <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full blur-3xl bg-pink-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400">
            A showcase of my best work and successful projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                filter === cat
                  ? 'bg-white text-gray-900'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiCode className="text-gray-600" size={48} />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub className="text-gray-900" size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="text-gray-900" size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';
import { FiUser, FiTarget, FiEye, FiHeart, FiAward, FiBriefcase } from 'react-icons/fi';

const About: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years Experience', icon: FiBriefcase },
    { value: '50+', label: 'Projects Completed', icon: FiAward },
    { value: '30+', label: 'Happy Clients', icon: FiHeart },
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Mission',
      description: 'To deliver exceptional digital solutions that drive business growth and innovation.',
    },
    {
      icon: FiEye,
      title: 'Vision',
      description: 'To be a leading force in shaping the future of web development worldwide.',
    },
    {
      icon: FiUser,
      title: 'Core Values',
      description: 'Excellence, innovation, integrity, and client-centric approach in everything we do.',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-blue-900/20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl bg-purple-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400">
            Passionate full-stack developer dedicated to creating amazing web experiences
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <stat.icon className="mx-auto mb-3 text-blue-400" size={32} />
              <h3 className="text-3xl font-bold mb-2 text-white">
                {stat.value}
              </h3>
              <p className="text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10"
            >
              <value.icon className="mx-auto mb-4 text-purple-400" size={28} />
              <h3 className="text-xl font-bold mb-3 text-center text-white">
                {value.title}
              </h3>
              <p className="text-center text-sm leading-relaxed text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Personal Info */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Background
              </h3>
              <p className="text-gray-300">
                With over 5 years of experience in full-stack development, I've worked with startups and enterprises to deliver scalable web solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Expertise
              </h3>
              <p className="text-gray-300">
                React, Node.js, TypeScript, Python, AWS, and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-20" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-5 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white opacity-90 relative inline-block" 
            style={{ letterSpacing: '-2px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            ABOUT
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-400 italic" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Company story, mission, vision, team information, and core values
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 bg-[#0a0a0a] border border-[#333]"
            >
              <stat.icon className="mx-auto mb-3 text-blue-400" size={32} />
              <h3 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {stat.value}
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105 bg-[#0a0a0a] border border-[#333]"
            >
              <value.icon className="mx-auto mb-4 text-purple-400" size={28} />
              <h3 className="text-xl font-bold mb-3 text-center text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {value.title}
              </h3>
              <p className="text-center text-sm leading-relaxed text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-[#0a0a0a] border border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Background
              </h3>
              <p className="text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                With over 5 years of experience in full-stack development, I've worked with startups and enterprises to deliver scalable web solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Expertise
              </h3>
              <p className="text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
// About.tsx - Seamlessly integrated with Hero section design
import React, { useState } from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiLayout, 
  FiServer, 
  FiUsers,
  FiLayers,
  FiZap,
  FiSmile,
  FiCoffee,
  FiHeart,
  FiTrendingUp,
  FiAward
} from 'react-icons/fi';
import { MdOutlineApi } from 'react-icons/md';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('specialize');

  const specializeItems = [
    { icon: <FiLayout size={20} />, title: 'Frontend Development', desc: 'React, TypeScript, TailwindCSS, UI/UX best practices' },
    { icon: <FiServer size={20} />, title: 'Backend Development', desc: 'Node.js, RESTful APIs, Express, Authentication' },
    { icon: <FiDatabase size={20} />, title: 'Database Management', desc: 'PostgreSQL, MongoDB, Prisma, Database Design' },
  ];

  const problemsItems = [
    { icon: <FiZap size={18} />, title: 'Performance optimization', desc: 'Making slow apps fast and responsive' },
    { icon: <FiLayers size={18} />, title: 'Clean architecture', desc: 'Building maintainable, scalable codebases' },
    { icon: <FiSmile size={18} />, title: 'User experience', desc: 'Creating intuitive interfaces people love using' },
    { icon: <FiCoffee size={18} />, title: 'Complex data flows', desc: 'Managing state and data in large applications' },
  ];

  const statsItems = [
    { value: '20+', label: 'Projects shipped', icon: <FiCode size={20} /> },
    { value: '10+', label: 'Happy clients', icon: <FiUsers size={20} /> },
    { value: '50+', label: 'APIs built', icon: <MdOutlineApi size={20} /> },
    { value: '100%', label: 'Commitment', icon: <FiHeart size={20} /> },
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex items-center justify-center py-20 md:py-24 overflow-hidden"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        background: '#F2F2F2'
      }}
    >
      

      {/* Decorative elements matching hero section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A3CF00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A3CF00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header - Matching Hero typography */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#A3CF00] text-sm uppercase tracking-wider font-semibold mb-2 inline-block px-4 py-1 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20">
            Get to know me
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-4"
            style={{ letterSpacing: '-1px', fontFamily: "'Bebas Neue', cursive" }}
          >
            About <span className="text-[#A3CF00]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#A3CF00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Interactive Tabs - Matching Hero button styles */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('specialize')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'specialize'
                ? 'bg-[#A3CF00] text-[#1A1A1A] shadow-lg scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-[#A3CF00]'
            }`}
          >
            What I Do
          </button>
          <button
            onClick={() => setActiveTab('problems')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'problems'
                ? 'bg-[#A3CF00] text-[#1A1A1A] shadow-lg scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-[#A3CF00]'
            }`}
          >
            Problems I Solve
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'stats'
                ? 'bg-[#A3CF00] text-[#1A1A1A] shadow-lg scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-[#A3CF00]'
            }`}
          >
            Impact
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* What I Specialize In Tab */}
          {activeTab === 'specialize' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left side - Cards */}
                <div className="space-y-4">
                  {specializeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-500 hover:scale-105 hover:border-[#A3CF00] hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex items-start gap-4 p-5">
                        <div className="p-3 rounded-xl bg-[#A3CF00]/10 text-[#A3CF00] transition-all duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#1A1A1A] font-semibold text-lg">{item.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A3CF00]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  ))}
                </div>

                {/* Right side - Experience + Quote */}
                <div className="space-y-6">
                  <div className="relative rounded-2xl bg-white border border-gray-200 p-6 overflow-hidden group hover:border-[#A3CF00] transition-all duration-300">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">5+ Years Journey</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Experience growth</span>
                            <span className="text-[#A3CF00] font-semibold">100%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-[#A3CF00] h-2 rounded-full w-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Projects completed</span>
                            <span className="text-[#A3CF00] font-semibold">20+</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-[#A3CF00] h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[#A3CF00]/30 transition-all duration-300 group">
                    <FiHeart className="text-red-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      "I believe great software is built at the intersection of clean code and genuine empathy for users."
                    </p>
                    <p className="text-[#A3CF00] text-sm mt-2 font-medium">— Fraol</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Problems I Solve Tab */}
          {activeTab === 'problems' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {problemsItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 transition-all duration-500 hover:scale-105 hover:border-[#A3CF00] hover:shadow-xl cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-[#A3CF00]/10 text-[#A3CF00] group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-[#1A1A1A] font-semibold">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A3CF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                ))}
              </div>

              {/* Current Challenge Box */}
              <div className="mt-8 p-6 rounded-2xl bg-white border border-[#A3CF00]/20 text-center group hover:shadow-xl transition-all duration-300">
                <FiTrendingUp className="text-[#A3CF00] mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="text-[#1A1A1A] font-semibold mb-2">Current Challenge I'm Solving</h4>
                <p className="text-gray-600 text-sm">Building a real-time collaborative platform with WebSocket and React</p>
                <div className="mt-3 flex justify-center gap-2 flex-wrap">
                  {['React', 'Node.js', 'Socket.io', 'Redis'].map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#A3CF00]/10 text-gray-700 group-hover:bg-[#A3CF00]/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Impact/Stats Tab */}
          {activeTab === 'stats' && (
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {statsItems.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group text-center p-5 rounded-xl bg-white border border-gray-200 transition-all duration-500 hover:scale-110 hover:border-[#A3CF00] hover:shadow-xl cursor-pointer"
                  >
                    <div className="p-3 rounded-full bg-[#A3CF00]/10 inline-flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <div className="text-[#A3CF00]">{stat.icon}</div>
                    </div>
                    <p className="text-3xl font-bold text-[#1A1A1A] group-hover:text-[#A3CF00] transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Impact timeline */}
              <div className="relative p-6 rounded-xl bg-white border border-gray-200 overflow-hidden">
                <h4 className="text-[#1A1A1A] font-semibold mb-6 text-center">Impact Timeline</h4>
                <div className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-4">
                  <div className="text-center flex-1 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-[#A3CF00] mx-auto mb-2 group-hover:scale-150 transition-transform" />
                    <p className="text-xs text-gray-500">2022</p>
                    <p className="text-xs text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity">Started</p>
                  </div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#A3CF00] to-[#A3CF00]/30 min-w-[20px]" />
                  <div className="text-center flex-1 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-[#A3CF00] mx-auto mb-2 group-hover:scale-150 transition-transform" />
                    <p className="text-xs text-gray-500">2023</p>
                    <p className="text-xs text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity">10 Projects</p>
                  </div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#A3CF00] to-[#A3CF00]/30 min-w-[20px]" />
                  <div className="text-center flex-1 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-[#A3CF00] mx-auto mb-2 group-hover:scale-150 transition-transform" />
                    <p className="text-xs text-gray-500">2024</p>
                    <p className="text-xs text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity">20+ Projects</p>
                  </div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#A3CF00] to-[#A3CF00]/30 min-w-[20px]" />
                  <div className="text-center flex-1 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-[#A3CF00] mx-auto mb-2 group-hover:scale-150 transition-transform" />
                    <p className="text-xs text-gray-500">2025</p>
                    <p className="text-xs text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity">Going strong</p>
                  </div>
                </div>
              </div>

              {/* Additional Impact Metric */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#A3CF00]/10 to-transparent border border-[#A3CF00]/20">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <FiAward className="text-[#A3CF00]" size={24} />
                    <div>
                      <p className="text-[#1A1A1A] font-semibold">Client Satisfaction</p>
                      <p className="text-gray-600 text-sm">98% positive feedback</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-[#A3CF00] fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
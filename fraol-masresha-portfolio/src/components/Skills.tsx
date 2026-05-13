import React, { useState } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiExpress,
  SiGit,
  SiDocker,
  SiRedis,
  SiPostgresql,
  SiPrisma
} from 'react-icons/si';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayout, 
  FiZap, 
  FiTrendingUp
} from 'react-icons/fi';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      name: 'Frontend',
      icon: <FiLayout size={20} />,
      skills: [
        { name: 'React', level: 90, icon: <SiReact />, color: '#61dbfb' },
        { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: '#007acc' },
        { name: 'Tailwind CSS', level: 88, icon: <SiTailwindcss />, color: '#38bdf8' },
        { name: 'JavaScript', level: 92, icon: <SiJavascript />, color: '#f7df1e' },
        { name: 'HTML5', level: 95, icon: <SiHtml5 />, color: '#e34f26' },
        { name: 'CSS3', level: 90, icon: <SiCss />, color: '#1572b6' }
      ]
    },
    backend: {
      name: 'Backend',
      icon: <FiServer size={20} />,
      skills: [
        { name: 'Node.js', level: 88, icon: <SiNodedotjs />, color: '#3c873a' },
        { name: 'Express', level: 85, icon: <SiExpress />, color: '#000000' },
        { name: 'REST APIs', level: 90, icon: <FiCode />, color: '#A3CF00' }
      ]
    },
    database: {
      name: 'Database',
      icon: <FiDatabase size={20} />,
      skills: [
        { name: 'MongoDB', level: 85, icon: <SiMongodb />, color: '#13aa52' },
        { name: 'PostgreSQL', level: 80, icon: <SiPostgresql />, color: '#336791' },
        { name: 'Prisma', level: 82, icon: <SiPrisma />, color: '#2d3748' },
        { name: 'Redis', level: 75, icon: <SiRedis />, color: '#dc382d' }
      ]
    },
    tools: {
      name: 'Tools',
      icon: <FiZap size={20} />,
      skills: [
        { name: 'Git', level: 88, icon: <SiGit />, color: '#f1502f' },
        { name: 'Docker', level: 76, icon: <SiDocker />, color: '#2496ed' }
      ]
    }
  };

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#F2F2F2] py-20 md:py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .skill-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
        
        .category-active {
          background: #A3CF00;
          color: #1a1a1a;
          transform: scale(1.05);
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#A3CF00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#A3CF00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20 mb-4">
            <FiCode className="text-[#A3CF00]" size={16} />
            <span className="text-[#A3CF00] text-sm font-semibold uppercase tracking-wider">My Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-[#1A1A1A] mb-3">
            Technical <span className="text-[#A3CF00]">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Technologies I work with</p>
          <div className="w-16 h-0.5 bg-[#A3CF00] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'category-active bg-[#A3CF00] text-[#1A1A1A] shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Simple with Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories[activeCategory as keyof typeof categories].skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ color: skill.color, background: `${skill.color}10` }}>
                  {skill.icon}
                </div>
                
                {/* Name and Percentage */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                    <span className="text-2xl font-bold text-[#A3CF00]">{skill.level}%</span>
                  </div>
                  <div className="text-xs text-gray-500">Proficiency</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-[#A3CF00]">20+</div>
            <div className="text-sm text-gray-600 mt-1">Projects</div>
          </div>
          
          <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-[#A3CF00]">87%</div>
            <div className="text-sm text-gray-600 mt-1">Avg Proficiency</div>
          </div>
          
          <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-[#A3CF00]">12+</div>
            <div className="text-sm text-gray-600 mt-1">Technologies</div>
          </div>
          
          <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-[#A3CF00]">100%</div>
            <div className="text-sm text-gray-600 mt-1">Commitment</div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mt-8 bg-gradient-to-r from-[#A3CF00]/10 to-transparent rounded-xl p-5 border border-[#A3CF00]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#A3CF00] flex items-center justify-center">
                <FiTrendingUp className="text-[#1A1A1A]" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Currently Learning</h4>
                <p className="text-xs text-gray-500">Always growing</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-700 shadow-sm">Next.js</span>
              <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-700 shadow-sm">GraphQL</span>
              <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-700 shadow-sm">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
// Skills.tsx - Fixed unused variables
import React from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiTool,
  FiCloud
} from 'react-icons/fi';
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiNodedotjs, 
  SiExpress, 
  SiMysql, 
  SiMongodb, 
  SiFirebase,
  SiDocker,
  SiPostman,
  SiGit
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <FiCode size={22} />,
      skills: [
        { name: 'React', icon: <SiReact size={18} /> },
        { name: 'TypeScript', icon: <SiTypescript size={18} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
        { name: 'HTML/CSS', icon: <div className="flex gap-1"><SiHtml5 size={14} /></div> },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <FiServer size={22} />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs size={18} /> },
        { name: 'Express', icon: <SiExpress size={18} /> },
        { name: 'REST APIs', icon: <FiCloud size={16} /> },
      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: <FiDatabase size={22} />,
      skills: [
        { name: 'MySQL', icon: <SiMysql size={18} /> },
        { name: 'MongoDB', icon: <SiMongodb size={18} /> },
        { name: 'Firebase', icon: <SiFirebase size={18} /> },
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <FiTool size={22} />,
      skills: [
        { name: 'Git', icon: <SiGit size={18} /> },
        { name: 'Docker', icon: <SiDocker size={18} /> },
        { name: 'Postman', icon: <SiPostman size={18} /> },
      ]
    },
  ];

  const allSkillsAsChips = [
    { name: 'React', category: 'frontend', icon: <SiReact size={14} /> },
    { name: 'TypeScript', category: 'frontend', icon: <SiTypescript size={14} /> },
    { name: 'Tailwind', category: 'frontend', icon: <SiTailwindcss size={14} /> },
    { name: 'HTML/CSS', category: 'frontend', icon: <div className="flex gap-0.5"><SiHtml5 size={11} /></div> },
    { name: 'Node.js', category: 'backend', icon: <SiNodedotjs size={14} /> },
    { name: 'Express', category: 'backend', icon: <SiExpress size={14} /> },
    { name: 'REST APIs', category: 'backend', icon: <FiCloud size={12} /> },
    { name: 'MySQL', category: 'database', icon: <SiMysql size={14} /> },
    { name: 'MongoDB', category: 'database', icon: <SiMongodb size={14} /> },
    { name: 'Firebase', category: 'database', icon: <SiFirebase size={14} /> },
    { name: 'Git', category: 'tools', icon: <SiGit size={14} /> },
    { name: 'Docker', category: 'tools', icon: <SiDocker size={14} /> },
    { name: 'Postman', category: 'tools', icon: <SiPostman size={14} /> },
  ];

  const getCategoryIconBg = (category: string) => {
    switch(category) {
      case 'frontend': return 'bg-blue-500/20 text-blue-400';
      case 'backend': return 'bg-purple-500/20 text-purple-400';
      case 'database': return 'bg-emerald-500/20 text-emerald-400';
      case 'tools': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen w-full flex items-center justify-center py-20 md:py-24"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        background: '#1a1a1a'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider font-medium mb-2 inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            My expertise
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            style={{ letterSpacing: '-1px' }}
          >
            Tech <span className="text-blue-400">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Glass Cards Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-500 hover:scale-[1.02] hover:border-gray-500 hover:shadow-2xl"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-[#333]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills List as Chips */}
              <div className="p-5">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group/skill relative inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-gray-400 cursor-pointer"
                    >
                      <span className="text-blue-400 group-hover/skill:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* All Technologies as Floating Chips */}
        <div className="text-center mb-6">
          <h3 className="text-white text-lg font-semibold mb-4">All Technologies</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {allSkillsAsChips.map((skill, idx) => {
            const colorClass = getCategoryIconBg(skill.category);
            
            return (
              <div
                key={idx}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              >
                <span className={`${colorClass.split(' ')[1]} group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Quick Stats about skills */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">13+</p>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div className="text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">4</p>
            <p className="text-gray-400 text-sm">Core Areas</p>
          </div>
          <div className="text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">3+</p>
            <p className="text-gray-400 text-sm">Years Active</p>
          </div>
          <div className="text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">20+</p>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
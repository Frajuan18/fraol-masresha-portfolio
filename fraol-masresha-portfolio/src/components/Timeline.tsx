import React, { useState } from 'react';
import { 
  FiCode, 
  FiStar, 
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiHeart,
  FiCpu,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiExpress,
  SiGit
} from 'react-icons/si';

const Timeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2);
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const timelineData = [
    {
      year: '2022',
      shortYear: '22',
      title: 'Genesis',
      subtitle: 'The Beginning',
      icon: <FiCode size={24} />,
      techIcons: [<SiHtml5 key="html" />,  <SiJavascript key="js" />],
      description: 'The journey began with raw curiosity and determination.',
      longDescription: 'Started from absolute zero, spending countless nights learning the fundamentals. Built my first website with pure HTML/CSS, then discovered JavaScript and realized the true power of web development.',
      achievements: [
        'First website launched',
        '500+ hours of coding', 
        'JavaScript mastery basics',
        '3 complete projects'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'Responsive Design'],
      impact: 'Built the foundation for everything that followed'
    },
    {
      year: '2023',
      shortYear: '23',
      title: 'Frontend Artistry',
      subtitle: 'React Mastery',
      icon: <SiReact size={24} />,
      techIcons: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />],
      description: 'Mastered React ecosystem and modern UI frameworks.',
      longDescription: 'Transformed into a frontend specialist. Mastered React hooks, context API, Redux for state management, and Tailwind CSS. Built complex interactive applications.',
      achievements: [
        '10+ React applications',
        'First freelance client',
        'State management expert',
        'UI/UX certification'
      ],
      skills: ['React', 'Redux', 'Tailwind CSS', 'Framer Motion'],
      impact: 'Turned designs into delightful user experiences'
    },
    {
      year: '2024',
      shortYear: '24',
      title: 'Full Stack Evolution',
      subtitle: 'MERN Architecture',
      icon: <SiNodedotjs size={24} />,
      techIcons: [<SiNodedotjs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />],
      description: 'Built complete full-stack applications with authentication.',
      longDescription: 'Became a true full-stack developer. Mastered Node.js, Express, MongoDB, and built RESTful APIs. Implemented JWT authentication and database design patterns.',
      achievements: [
        '8+ full-stack apps',
        'API development expert',
        'Database optimization',
        'Authentication systems'
      ],
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
      impact: 'Connected frontend dreams to backend reality'
    },
    {
      year: '2025',
      shortYear: '25',
      title: 'TypeScript & Scale',
      subtitle: 'Architecture Focus',
      icon: <SiTypescript size={24} />,
      techIcons: [<SiTypescript key="ts" />, <SiGit key="git" />, <FiCpu key="cpu" />],
      description: 'Focused on building scalable enterprise-ready applications.',
      longDescription: 'Elevated code quality with TypeScript, implemented design patterns. Focused on writing maintainable, testable code with clean architecture.',
      achievements: [
        'TypeScript migration',
        'Code architecture design',
        'Performance optimization',
        'Documentation standards'
      ],
      skills: ['TypeScript', 'Prisma', 'Design Patterns', 'Testing'],
      impact: 'Wrote code that stands the test of time'
    },
    {
      year: '2026',
      shortYear: '26',
      title: 'Innovation & Leadership',
      subtitle: 'Current Chapter',
      icon: <FiTrendingUp size={24} />,
      techIcons: [<FiZap key="zap" />, <FiUsers key="users" />, <FiHeart key="heart" />],
      description: 'Leading teams and building real-time applications.',
      longDescription: 'Currently leading development teams, architecting complex systems, and mentoring junior developers. Building real-time applications with cutting-edge technology.',
      achievements: [
        'Team leadership',
        'Mentorship program',
        'Real-time systems',
        'Cloud deployment'
      ],
      skills: ['WebSocket', 'Redis', 'Microservices', 'Leadership'],
      impact: 'Building the future of web applications'
    }
  ];

  const currentData = timelineData[activeYear];

  const handleYearClick = (index: number) => {
    setActiveYear(index);
  };

  const toggleExpand = (index: number) => {
    if (expandedYear === index) {
      setExpandedYear(null);
    } else {
      setExpandedYear(index);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#1a1a1a] py-16 md:py-20 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .story-slide {
          animation: slideIn 0.4s ease-out forwards;
        }
        
        .dropdown-fade {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .timeline-card {
          transition: all 0.3s ease;
        }
        
        .timeline-card.active {
          background: #A3CF00;
          transform: translateX(8px);
        }
        
        .timeline-card.active .year-text,
        .timeline-card.active .title-text,
        .timeline-card.active .subtitle-text {
          color: #1a1a1a;
        }
        
        .timeline-card.active .icon-wrapper {
          background: rgba(26, 26, 26, 0.2);
        }
        
        .timeline-card:not(.active):hover {
          background: #2a2a2a;
          transform: translateX(4px);
        }
        
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
      `}</style>

      {/* Background decorative */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#A3CF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A3CF00]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20 mb-4">
            <FiTrendingUp className="text-[#A3CF00]" size={16} />
            <span className="text-[#A3CF00] text-sm font-semibold uppercase tracking-wider">My Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-white mb-3">
            Evolution <span className="text-[#A3CF00]">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Click on any year to explore my journey</p>
          <div className="w-16 h-0.5 bg-[#A3CF00] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Desktop: Dual Panel with Click */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Year Cards */}
          <div className="space-y-3">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleYearClick(idx)}
                className={`timeline-card cursor-pointer rounded-xl p-5 transition-all duration-300 ${
                  activeYear === idx
                    ? 'active bg-[#A3CF00]'
                    : 'bg-[#2a2a2a] hover:bg-[#333333]'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeYear === idx
                      ? 'bg-black/20 text-gray-900'
                      : 'bg-[#333333] text-[#A3CF00]'
                  }`}>
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-2xl font-bebas ${
                        activeYear === idx ? 'text-gray-900' : 'text-white'
                      }`}>
                        {item.year}
                      </span>
                      <div className="flex gap-1 text-sm">
                        {item.techIcons.slice(0, 2).map((icon, i) => (
                          <span key={i} className={`${activeYear === idx ? 'text-gray-900' : 'text-gray-400'}`}>
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className={`font-semibold mb-0.5 text-base ${
                      activeYear === idx ? 'text-gray-900' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${
                      activeYear === idx ? 'text-gray-800' : 'text-gray-400'
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Story Panel */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="story-slide bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl border border-[#333333]">
                {/* Header */}
                <div className="bg-[#333333] p-6 border-b border-[#444444]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-14 h-14 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-[#A3CF00] border border-[#444444]">
                      {currentData.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bebas text-white">{currentData.year}</div>
                      <div className="text-sm text-gray-400">{currentData.subtitle}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bebas text-white mb-2">{currentData.title}</h3>
                  <p className="text-gray-400 text-sm">{currentData.description}</p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {currentData.longDescription}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-[#A3CF00] font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <FiStar size={16} />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentData.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                          <div className="w-1 h-1 rounded-full bg-[#A3CF00]"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-[#A3CF00] font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <FiCpu size={16} />
                      Skills Mastered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentData.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-[#333333] rounded-lg text-xs text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact Quote */}
                  <div className="p-4 rounded-xl bg-[#333333]/50 border-l-4 border-[#A3CF00]">
                    <p className="text-xs italic text-gray-400">
                      "{currentData.impact}"
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <FiHeart className="text-[#A3CF00]" size={12} />
                      <span className="text-xs text-gray-500">Journey milestone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Dropdown Accordion Style - Dark themed like desktop */}
        <div className="lg:hidden space-y-3">
          {timelineData.map((item, idx) => (
            <div key={idx} className="border border-[#333333] rounded-xl overflow-hidden bg-[#2a2a2a]">
              {/* Dropdown Header */}
              <button
                onClick={() => toggleExpand(idx)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-[#333333] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#333333] flex items-center justify-center text-[#A3CF00]">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bebas text-xl text-white">{item.year}</span>
                      <span className="text-xs text-gray-400">{item.subtitle}</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                  </div>
                </div>
                {expandedYear === idx ? (
                  <FiChevronUp className="text-[#A3CF00]" size={20} />
                ) : (
                  <FiChevronDown className="text-[#A3CF00]" size={20} />
                )}
              </button>
              
              {/* Dropdown Content - Dark themed */}
              {expandedYear === idx && (
                <div className="dropdown-fade px-5 pb-5 pt-3 border-t border-[#333333] bg-[#252525]">
                  {/* Tech Icons */}
                  <div className="flex gap-2 mb-4 pb-3 border-b border-[#333333]">
                    {item.techIcons.map((icon, i) => (
                      <span key={i} className="text-[#A3CF00] text-lg">
                        {icon}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.longDescription}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-[#A3CF00] font-semibold mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                      <FiStar size={12} />
                      Key Achievements
                    </h4>
                    <div className="space-y-1.5">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className="w-1 h-1 rounded-full bg-[#A3CF00]"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-[#A3CF00] font-semibold mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                      <FiCpu size={12} />
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-[#333333] rounded-md text-xs text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact */}
                  <div className="p-3 rounded-lg bg-[#333333]/30 border-l-3 border-[#A3CF00]">
                    <p className="text-xs italic text-gray-400">
                      "{item.impact}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Bar - Dark themed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 pt-8 border-t border-[#333333]">
          <div className="text-center">
            <div className="text-2xl font-bebas text-white">20+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bebas text-white">10+</div>
            <div className="text-xs text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bebas text-white">100%</div>
            <div className="text-xs text-gray-400">Commitment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bebas text-white">5</div>
            <div className="text-xs text-gray-400">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
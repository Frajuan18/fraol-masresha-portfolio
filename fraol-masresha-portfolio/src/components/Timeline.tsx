// Timeline.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  FiCode, 
  FiBriefcase, 
  FiAward, 
  FiTrendingUp,
  FiCalendar,
  FiMapPin,
  FiStar,
  FiZap,
  FiCheckCircle
} from 'react-icons/fi';

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData = [
    {
      id: 1,
      year: '2024 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Addis Ababa, Ethiopia',
      description: 'Leading frontend team and architecting scalable full-stack solutions for enterprise clients.',
      achievements: [
        'Led migration of legacy system to React + Node.js, improving performance by 60%',
        'Mentored 5 junior developers and conducted code reviews',
        'Implemented CI/CD pipeline reducing deployment time by 40%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Docker'],
      icon: <FiBriefcase size={24} />,
      color: 'blue',
      type: 'work'
    },
    {
      id: 2,
      year: '2022 - 2024',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Remote',
      description: 'Developed and maintained multiple web applications for clients across various industries.',
      achievements: [
        'Built 10+ production-ready applications for clients',
        'Reduced API response time by 45% through optimization',
        'Collaborated with UX team to improve user engagement by 30%'
      ],
      technologies: ['React', 'Express', 'MongoDB', 'TailwindCSS'],
      icon: <FiCode size={24} />,
      color: 'purple',
      type: 'work'
    },
    {
      id: 3,
      year: '2020 - 2022',
      title: 'Junior Developer',
      company: 'StartUp Hub',
      location: 'Addis Ababa, Ethiopia',
      description: 'Started career as a junior developer, quickly growing into a full-stack role.',
      achievements: [
        'Developed responsive web applications from scratch',
        'Integrated third-party APIs and payment gateways',
        'Received "Rookie of the Year" award'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
      icon: <FiTrendingUp size={24} />,
      color: 'emerald',
      type: 'work'
    },
    {
      id: 4,
      year: '2019',
      title: 'Full Stack Certification',
      company: 'Online Learning Platform',
      location: 'Certification',
      description: 'Completed intensive full-stack development program with honors.',
      achievements: [
        'Graduated top 10% of the cohort',
        'Built final project: E-commerce platform with payment integration',
        'Earned certification in Modern Web Development'
      ],
      technologies: ['MERN Stack', 'GraphQL', 'Jest'],
      icon: <FiAward size={24} />,
      color: 'orange',
      type: 'education'
    }
  ];

  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, timelineData.length);
  }, [timelineData.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRefs = timelineRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems, timelineData.length]);

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text' | 'gradient') => {
    const colors: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        gradient: 'from-blue-500 to-cyan-500'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        gradient: 'from-purple-500 to-pink-500'
      },
      emerald: {
        bg: 'bg-emerald-500/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        gradient: 'from-emerald-500 to-teal-500'
      },
      orange: {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        gradient: 'from-orange-500 to-yellow-500'
      }
    };
    return colors[color]?.[type] || colors.blue[type];
  };

  const setRef = (el: HTMLDivElement | null, index: number) => {
    timelineRefs.current[index] = el;
  };

  return (
    <section 
      id="timeline" 
      className="min-h-screen w-full flex items-center justify-center py-20 md:py-24"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        background: '#1a1a1a'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider font-medium mb-2 inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            My journey
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            style={{ letterSpacing: '-1px' }}
          >
            Work <span className="text-blue-400">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A visual journey through my professional experience and milestones
          </p>
        </div>

        {/* Timeline - Vertical Layout */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => setRef(el, index)}
              className={`relative mb-12 transition-all duration-700 transform ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1 z-20">
                  <div 
                    className={`w-10 h-10 rounded-full ${getColorClasses(item.color, 'bg')} border-2 ${getColorClasses(item.color, 'border')} flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className={getColorClasses(item.color, 'text')}>
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  <div 
                    className={`group relative overflow-hidden rounded-2xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-500 hover:scale-[1.02] hover:border-gray-500 hover:shadow-2xl cursor-pointer ${
                      activeIndex === index ? 'ring-2 ring-blue-500/50' : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* Card Header */}
                    <div className={`p-5 border-b border-[#333] ${getColorClasses(item.color, 'bg')} bg-opacity-30`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${getColorClasses(item.color, 'bg')} ${getColorClasses(item.color, 'text')}`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{item.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <FiCalendar size={12} />
                          <span>{item.year}</span>
                          {item.location !== 'Certification' && (
                            <>
                              <FiMapPin size={12} className="ml-2" />
                              <span>{item.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                          <FiStar size={14} className="text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm group/achievement">
                              <FiCheckCircle size={14} className={`${getColorClasses(item.color, 'text')} mt-0.5 flex-shrink-0 transition-transform group-hover/achievement:scale-110`} />
                              <span className="group-hover/achievement:text-gray-300 transition-colors">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-1 rounded-full ${getColorClasses(item.color, 'bg')} border ${getColorClasses(item.color, 'border')} ${getColorClasses(item.color, 'text')} transition-all duration-300 hover:scale-105 cursor-pointer`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-5 right-5">
                        <span className={`text-xs px-2 py-1 rounded-full ${getColorClasses(item.color, 'bg')} ${getColorClasses(item.color, 'text')} border ${getColorClasses(item.color, 'border')}`}>
                          {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                        </span>
                      </div>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${getColorClasses(item.color, 'gradient')} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-110 hover:border-blue-500/30 cursor-pointer">
            <FiBriefcase className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:rotate-6 transition-transform" />
            <p className="text-2xl font-bold text-white">3+</p>
            <p className="text-gray-400 text-xs">Years Experience</p>
          </div>
          <div className="group text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-110 hover:border-blue-500/30 cursor-pointer">
            <FiCode className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:rotate-6 transition-transform" />
            <p className="text-2xl font-bold text-white">15+</p>
            <p className="text-gray-400 text-xs">Projects Delivered</p>
          </div>
          <div className="group text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-110 hover:border-blue-500/30 cursor-pointer">
            <FiTrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:rotate-6 transition-transform" />
            <p className="text-2xl font-bold text-white">10+</p>
            <p className="text-gray-400 text-xs">Happy Clients</p>
          </div>
          <div className="group text-center p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-110 hover:border-blue-500/30 cursor-pointer">
            <FiZap className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover:rotate-6 transition-transform" />
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-gray-400 text-xs">Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
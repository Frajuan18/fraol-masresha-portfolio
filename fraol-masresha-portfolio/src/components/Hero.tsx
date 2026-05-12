// Hero.tsx
import React, { useState, useEffect } from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiInstagram, 
  FiStar,
  FiAward,
  FiBriefcase,
  FiArrowRight,
  FiLinkedin,
} from 'react-icons/fi';
import { 
  MdOutlineLayers, 
  MdOutlineStorage, 
  MdOutlineCode,
  MdEmojiEvents,
  MdWorkOutline
} from 'react-icons/md';
import pfpImage from '../assets/pfp.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullName = 'FRAOL';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-20 relative overflow-hidden"
      style={{ 
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Same background as navbar - dark with subtle gradient */}
      <div className="absolute inset-0 bg-[#1a1a1a] -z-20" />
      
      {/* Animated gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 -z-10" />
      
      {/* Glass orb effects for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0 relative z-10">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full items-center">
          
          {/* LEFT SECTION */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            {/* Intro text */}
            <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">
              Hello, I'm
            </p>
            
            {/* Name with Typing Animation - LARGER & BOLDER */}
            <div className="relative">
              <h1 
                className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] text-white"
                style={{ 
                  letterSpacing: '-3px',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                {displayText}
                {isTyping && (
                  <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-blue-500 ml-2 animate-pulse" />
                )}
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Full-stack developer with 5 years experience building scalable applications. 
              Skilled in creating intuitive UI and efficient backend systems.
            </p>
            
            {/* CTA Button - Using navbar button style */}
            <button className="group relative w-fit px-8 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              Hire Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Social Icons Row - Using navbar glass style */}
            <div className="flex gap-3 pt-4">
              {[FiPhone, FiMail, FiInstagram, FiLinkedin].map((Icon, idx) => (
                <button
                  key={idx}
                  className="p-3 rounded-full backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] text-gray-400 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:text-white hover:border-gray-500"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* CENTER SECTION - Profile Image Card - LARGER SIZE */}
          <div className="flex justify-center items-center relative">
            <div className="relative group">
              {/* Main Glass Card Frame - SIGNIFICANTLY LARGER */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-gray-500">
                {/* Profile Image */}
                <img 
                  src={pfpImage} 
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay for better glass effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge - Top Right - Using navbar glass style */}
              <div className="absolute -top-5 -right-5 px-4 py-2.5 rounded-full backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] text-white text-sm font-medium shadow-xl flex items-center gap-2">
                <MdEmojiEvents size={16} className="text-yellow-400" />
                <span>5+ Years Exp</span>
              </div>
              
              {/* Floating Badge - Bottom - Using navbar glass style */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] text-white text-sm font-medium shadow-xl whitespace-nowrap flex items-center gap-2">
                <MdWorkOutline size={16} className="text-blue-400" />
                <span>Projects 20+</span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col space-y-6">
            {/* Expertise Title */}
            <div>
              <h2 className="text-2xl font-bold text-white">Expertise</h2>
              <p className="text-gray-400 text-sm">Specialized skills</p>
            </div>
            
            {/* Three stacked glass cards - Using navbar glass style */}
            <div className="space-y-4">
              {/* Card 1 - UI/UX Design */}
              <div className="group relative overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 rounded-xl border border-[#333] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-gray-500 hover:shadow-xl">
                <div className="flex items-start gap-4 p-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400">
                    <MdOutlineLayers size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">UI/UX Design</h3>
                    <p className="text-gray-400 text-sm">User Interface & Experience</p>
                  </div>
                </div>
                {/* Glass highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/3 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              {/* Card 2 - Database Design */}
              <div className="group relative overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 rounded-xl border border-[#333] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-gray-500 hover:shadow-xl">
                <div className="flex items-start gap-4 p-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400">
                    <MdOutlineStorage size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Database Design</h3>
                    <p className="text-gray-400 text-sm">Database Architecture & Design</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/3 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              {/* Card 3 - Full Stack Dev */}
              <div className="group relative overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 rounded-xl border border-[#333] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-gray-500 hover:shadow-xl">
                <div className="flex items-start gap-4 p-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400">
                    <MdOutlineCode size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Full Stack Dev</h3>
                    <p className="text-gray-400 text-sm">Full Stack Development</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/3 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
            
            {/* STATS SECTION - Using navbar glass style */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center p-3 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] hover:border-gray-500">
                <FiStar className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                <p className="text-white font-bold text-lg">98%</p>
                <p className="text-gray-400 text-xs">Satisfied</p>
              </div>
              <div className="text-center p-3 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] hover:border-gray-500">
                <FiAward className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <p className="text-white font-bold text-lg">5</p>
                <p className="text-gray-400 text-xs">Certificates</p>
              </div>
              <div className="text-center p-3 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] hover:border-gray-500">
                <FiBriefcase className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                <p className="text-white font-bold text-lg">20+</p>
                <p className="text-gray-400 text-xs">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
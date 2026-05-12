// Hero.tsx
import React, { useState, useEffect } from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiInstagram, 
  FiLinkedin,
  FiStar,
  FiAward,
  FiBriefcase,
  FiArrowRight,
  FiCopy,
  FiCheck,
  FiSend,
  FiX
} from 'react-icons/fi';
import { 
  MdOutlineLayers, 
  MdOutlineStorage, 
  MdOutlineCode,
  MdEmojiEvents,
  MdWorkOutline
} from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import pfpImage from '../assets/pfp.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const fullName = 'FRAOL';

  const contactInfo = [
    {
      platform: 'Instagram',
      username: '@fres.h925',
      icon: <FiInstagram size={24} />,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      link: 'https://instagram.com/fres.h925'
    },
    {
      platform: 'Telegram',
      username: '@Fra_juan',
      icon: <FaTelegramPlane size={22} />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      link: 'https://t.me/Fra_juan'
    },
    {
      platform: 'Email',
      username: 'fraolabmas@gmail.com',
      icon: <FiMail size={24} />,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500/30',
      link: 'mailto:fraolabmas@gmail.com'
    }
  ];
  
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

  const handleHireMe = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCopiedField(null);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-20"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        background: '#1a1a1a'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0 relative z-10">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full items-center">
          
          {/* LEFT SECTION */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            {/* Intro text */}
            <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">
              Hello, I'm
            </p>
            
            {/* Name with Typing Animation */}
            <div className="relative">
              <h1 
                className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] text-white"
                style={{ 
                  letterSpacing: '-3px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
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
            
            {/* CTA Button - Opens Popup */}
            <button 
              onClick={handleHireMe}
              className="group relative w-fit px-8 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              Hire Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Social Icons Row */}
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

          {/* CENTER SECTION - Profile Image Card */}
          <div className="flex justify-center items-center relative">
            <div className="relative group">
              {/* Main Glass Card Frame */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-gray-500">
                {/* Profile Image */}
                <img 
                  src={pfpImage} 
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge - Top Right */}
              <div className="absolute -top-5 -right-5 px-4 py-2.5 rounded-full backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] text-white text-sm font-medium shadow-xl flex items-center gap-2">
                <MdEmojiEvents size={16} className="text-yellow-400" />
                <span>5+ Years Exp</span>
              </div>
              
              {/* Floating Badge - Bottom */}
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
            
            {/* Three stacked glass cards */}
            <div className="space-y-4">
              {/* Card 1 - UI/UX Design */}
              <div className="group relative overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 rounded-xl border border-[#333] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-gray-500 hover:shadow-xl">
                <div className="flex items-start gap-4 p-4">
                  <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                    <MdOutlineLayers size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">UI/UX Design</h3>
                    <p className="text-gray-400 text-sm">User Interface & Experience</p>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
              
              {/* Card 2 - Database Design */}
              <div className="group relative overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 rounded-xl border border-[#333] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-gray-500 hover:shadow-xl">
                <div className="flex items-start gap-4 p-4">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                    <MdOutlineStorage size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Database Design</h3>
                    <p className="text-gray-400 text-sm">Database Architecture & Design</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
              
              {/* Card 3 - Full Stack Dev */}
              <div className="group relative overflow-hidden backdrop-blur-md bg-[#1a1a1a]/90 rounded-xl border border-[#333] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-gray-500 hover:shadow-xl">
                <div className="flex items-start gap-4 p-4">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MdOutlineCode size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Full Stack Dev</h3>
                    <p className="text-gray-400 text-sm">Full Stack Development</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            </div>
            
            {/* STATS SECTION */}
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

      {/* Hire Me Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fade-in"
            onClick={closePopup}
          />
          
          {/* Popup Content */}
          <div className="relative bg-[#1a1a1a] rounded-2xl border border-[#333] shadow-2xl max-w-md w-full overflow-hidden animate-scale-up">
            {/* Header */}
            <div className="p-6 border-b border-[#333] bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <h3 className="text-2xl font-bold text-white text-center">Let's Connect!</h3>
              <p className="text-gray-400 text-sm text-center mt-1">Choose your preferred way to reach me</p>
            </div>
            
            {/* Contact Options */}
            <div className="p-6 space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className={`group relative p-4 rounded-xl ${info.bgColor} border ${info.borderColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-slide-up`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-full ${info.bgColor} ${info.color} transition-all duration-300 group-hover:scale-110`}>
                      {info.icon}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs uppercase tracking-wider">{info.platform}</p>
                      <p className="text-white font-medium text-sm md:text-base">{info.username}</p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      {/* Copy Button */}
                      <button
                        onClick={() => copyToClipboard(info.username, info.platform)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group/copy"
                        title="Copy to clipboard"
                      >
                        {copiedField === info.platform ? (
                          <FiCheck size={18} className="text-green-400" />
                        ) : (
                          <FiCopy size={18} className="text-gray-400 group-hover/copy:text-white" />
                        )}
                      </button>
                      
                      {/* Open Link Button */}
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                        title={`Open ${info.platform}`}
                      >
                        <FiSend size={18} className="text-gray-400 hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-5 border-t border-[#333] bg-white/5">
              <p className="text-gray-500 text-xs text-center">
                Click the copy icon to copy username or the send icon to open directly
              </p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <FiX size={20} className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
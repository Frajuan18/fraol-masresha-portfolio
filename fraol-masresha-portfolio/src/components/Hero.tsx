import React from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope, 
  FaCode, 
  FaDesktop, 
  FaUsers, 
  FaRocket 
} from 'react-icons/fa';

import image from "../assets/photo_2026-01-13_08-55-15-removebg-preview.png";

const Hero: React.FC = () => {

  const stats = [
    { label: '3+', sub: 'Years Experience', icon: <FaCode size={22} /> },
    { label: '20+', sub: 'Projects Completed', icon: <FaDesktop size={22} /> },
    { label: '10+', sub: 'Happy Clients', icon: <FaUsers size={22} /> },
    { label: '100%', sub: 'Commitment', icon: <FaRocket size={22} /> },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#F2F2F2] font-['Poppins'] overflow-hidden flex flex-col lg:flex-row">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;900&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        
        .text-gradient-mask {
          background: linear-gradient(to bottom, rgba(209, 213, 219, 0.5) 30%, rgba(209, 213, 219, 0) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .clip-dark-panel {
          clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        @media (max-width: 1024px) {
          .clip-dark-panel {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInImage {
          from { opacity: 0; transform: translateX(60px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .animate-fadeUp { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-fadeLeft { animation: fadeInLeft 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-fadeRight { animation: fadeInRight 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-scale { animation: scaleIn 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-image { animation: slideInImage 0.9s cubic-bezier(0.2, 0.9, 0.3, 1.2) forwards; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .opacity-0 { opacity: 0; }
      `}</style>

      {/* LEFT CONTENT SIDE */}
      <div className="relative w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-16 lg:py-20 z-10">
        <div className="relative flex flex-col">
          {/* Watermark "DEVELOPER" */}
          <h1 className="text-[110px] sm:text-[150px] md:text-[180px] lg:text-[200px] xl:text-[220px] font-bebas leading-none select-none tracking-tighter uppercase text-gradient-mask opacity-0 animate-fadeLeft delay-100 whitespace-nowrap">
            DEVELOPER
          </h1>

          <div className="relative z-2" style={{ marginTop: '-9%' }}>
            {/* Greeting */}
            <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 opacity-0 animate-fadeUp delay-200">
              Hi, I'm <span className="text-[#A3CF00]">Fraol</span>
            </p>
            
            {/* Main titles */}
            <div className="mb-3">
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bebas text-[#1A1A1A] leading-[0.9] tracking-tight opacity-0 animate-fadeUp delay-300">
                FULL STACK
              </h2>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bebas text-[#A3CF00] leading-[0.9] tracking-tight mt-0 opacity-0 animate-fadeUp delay-400">
                WEBSITE DEVELOPER
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 max-w-lg text-[15px] sm:text-[16px] leading-relaxed mb-6 font-medium opacity-0 animate-fadeUp delay-500">
              I build fast, responsive, and modern web applications 
              using the MERN stack and other technologies. 
              Focused on clean code, great user experience, 
              and scalable solutions.
            </p>

            

            {/* Hire Me Button and Social Icons */}
            <div className="flex items-center gap-6 opacity-0 animate-fadeUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <button className="relative bg-[#A3CF00] text-gray-900 font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-[#8fb300] hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm overflow-hidden group">
                <span>Hire Me</span>
                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <div className="flex gap-4 text-gray-700">
                <a href="#" className="hover:text-[#A3CF00] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <FaGithub size="20" />
                </a>
                <a href="#" className="hover:text-[#A3CF00] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <FaLinkedinIn size="20" />
                </a>
                <a href="#" className="hover:text-[#A3CF00] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <FaTwitter size="20" />
                </a>
                <a href="#" className="hover:text-[#A3CF00] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <FaEnvelope size="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT VISUAL SIDE */}
      <div className="relative w-full lg:w-[45%] min-h-[500px] lg:min-h-screen mt-8 lg:mt-0">
        <div 
          className="absolute inset-0 bg-[#121212] z-0 clip-dark-panel opacity-0 animate-scale delay-100"
          style={{ animationFillMode: 'forwards' }}
        ></div>
        
        <div className="relative z-10 w-full h-full flex items-end justify-center opacity-0 animate-image" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <img 
            src={image} 
            alt="Fraol - Fullstack Developer" 
            className="absolute bottom-0 left-0 right-0 w-full h-auto object-cover object-top drop-shadow-2xl transition-all duration-500 hover:scale-105"
            style={{ 
              maxHeight: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: '50% 30%'
            }}
          />
        </div>

        {/* Far-Right Sidebar with Stats */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-24 sm:w-28 md:w-32 bg-[#A3CF00] z-20 flex flex-col justify-center gap-10 py-10 px-2 shadow-2xl opacity-0 animate-fadeRight"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center"
            >
              <div className="text-gray-900 mb-2 transform transition-transform duration-300 hover:scale-110">
                {stat.icon}
              </div>
              <div className="font-bebas text-3xl sm:text-4xl text-gray-900 leading-none mb-1 tracking-tight">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-gray-800 uppercase tracking-wider leading-tight">
                {stat.sub.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
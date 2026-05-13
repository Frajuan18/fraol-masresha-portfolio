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

        @keyframes emerge3D {
          0% { 
            opacity: 0; 
            transform: translateY(100px) scale(0.8) rotateX(-15deg);
            filter: blur(10px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(20px) scale(0.95) rotateX(-5deg);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }
        }

        .animate-emerge {
          animation: emerge3D 1.2s cubic-bezier(0.2, 0.9, 0.3, 1.2) forwards;
        }

        .animate-fadeUp { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-fadeLeft { animation: fadeInLeft 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-fadeRight { animation: fadeInRight 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-scale { animation: scaleIn 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .opacity-0 { opacity: 0; }

        /* 3D Perspective for image */
        .perspective-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .image-3d {
          transform-origin: bottom center;
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.2);
        }

        .image-3d:hover {
          transform: translateY(-15px) scale(1.02);
        }
      `}</style>

      {/* LEFT CONTENT SIDE */}
      <div className="relative w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-20 pb-16 lg:py-20 z-10">
        <div className="relative flex flex-col">
          {/* Watermark "DEVELOPER" - Visible on all screens with proper spacing */}
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[200px] xl:text-[220px] font-bebas leading-none select-none tracking-tighter uppercase text-gradient-mask opacity-0 animate-fadeLeft delay-100 whitespace-nowrap mb-2 lg:mb-0">
            DEVELOPER
          </h1>

          <div className="relative z-2 lg:-mt-[9%] mt-0">
            {/* Greeting */}
            <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 opacity-0 animate-fadeUp delay-200">
              Hi, I'm <span className="text-[#A3CF00]">Fraol</span>
            </p>
            
            {/* Main titles - Improved line spacing for mobile */}
            <div className="mb-4 space-y-1 sm:space-y-2">
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bebas text-[#1A1A1A] leading-[1.1] sm:leading-[0.9] tracking-tight opacity-0 animate-fadeUp delay-300">
                FULL STACK
              </h2>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bebas text-[#A3CF00] leading-[1.1] sm:leading-[0.9] tracking-tight opacity-0 animate-fadeUp delay-400">
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

      {/* RIGHT VISUAL SIDE WITH 3D IMAGE EFFECT */}
      <div className="relative w-full lg:w-[45%] mt-12 lg:mt-0 perspective-3d flex flex-col">
        {/* Black background */}
        <div 
          className="absolute inset-0 bg-[#121212] z-0 clip-dark-panel opacity-0 animate-scale delay-100"
          style={{ 
            animationFillMode: 'forwards',
          }}
        ></div>
        
        {/* Image Container - Fixed to bottom on desktop */}
        <div className="relative z-10 w-full flex-grow flex items-center justify-center lg:items-end lg:justify-center">
          <div className="relative image-3d opacity-0 animate-emerge w-full flex justify-center" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <img 
              src={image} 
              alt="Fraol - Fullstack Developer" 
              className="transition-all duration-500"
              style={{ 
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
        </div>

        {/* Desktop Sidebar with Stats - Vertical layout */}
        <div 
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-28 bg-[#A3CF00] z-20 flex-col justify-center gap-8 py-8 px-3 shadow-2xl opacity-0 animate-fadeRight rounded-l-2xl"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="text-gray-900 mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {stat.icon}
              </div>
              <div className="font-bebas text-3xl text-gray-900 leading-none mb-1 tracking-tight group-hover:scale-105 transition-transform">
                {stat.label}
              </div>
              <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wider leading-tight">
                {stat.sub.split(' ').map((word, i) => (
                  <span key={i} className="block text-[9px]">{word}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stats Section - Immediately below image overlapping black space */}
      <div className="lg:hidden w-full -mt-8 relative z-20">
        <div className="bg-[#A3CF00] py-6 px-6 rounded-t-3xl shadow-xl">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 bg-white/10 rounded-xl">
                <div className="text-gray-900 mb-2 transform transition-transform">
                  {stat.icon}
                </div>
                <div className="font-bebas text-3xl text-gray-900 leading-none mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .image-3d img {
            max-width: 650px !important;
            max-height: 650px !important;
            margin-bottom: 0 !important;
          }
          
          .perspective-3d {
            min-height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
          }
        }
        
        @media (max-width: 768px) {
          .image-3d img {
            max-width: 280px !important;
            max-height: 350px !important;
            margin: 20px auto !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .image-3d img {
            max-width: 450px !important;
            max-height: 500px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
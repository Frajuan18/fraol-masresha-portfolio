import React, { useState } from 'react';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiSend, 
  FiCheckCircle,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram
} from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactInfo = [
    {
      id: 1,
      title: 'Email Me',
      value: 'fraol@example.com',
      icon: <FiMail size={24} />,
      link: 'mailto:fraol@example.com',
      color: '#A3CF00'
    },
    {
      id: 2,
      title: 'Call Me',
      value: '+251 912 345 678',
      icon: <FiPhone size={24} />,
      link: 'tel:+251912345678',
      color: '#A3CF00'
    },
    {
      id: 3,
      title: 'Visit Me',
      value: 'Addis Ababa, Ethiopia',
      icon: <FiMapPin size={24} />,
      link: '#',
      color: '#A3CF00'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub size={22} />, link: '#', label: 'GitHub' },
    { icon: <FiLinkedin size={22} />, link: '#', label: 'LinkedIn' },
    { icon: <FiTwitter size={22} />, link: '#', label: 'Twitter' },
    { icon: <FiInstagram size={22} />, link: '#', label: 'Instagram' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setIsError(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  return (
    <section id='contact' className="relative w-full min-h-screen bg-[#0a0a0a] py-20 md:py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .slide-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .slide-right {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .contact-card {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          border: 2px solid #2a2a2a;
          background: #1a1a1a;
        }
        
        .contact-card:hover {
          transform: translateY(-8px);
          border-color: #A3CF00;
          background: #1a1a1a;
        }
        
        .contact-card:hover .contact-icon {
          background: #A3CF00;
          color: #1a1a1a;
          transform: scale(1.1);
        }
        
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .input-focus:focus {
          border-color: #A3CF00;
          box-shadow: 0 0 0 3px rgba(163, 207, 0, 0.1);
          outline: none;
        }
        
        .social-link {
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #A3CF00;
          transform: translateY(-5px);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3CF00]/10 border border-[#A3CF00]/20 mb-4">
            <FiSend className="text-[#A3CF00]" size={16} />
            <span className="text-[#A3CF00] text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-white mb-3">
            Contact <span className="text-[#A3CF00]">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind? Let's work together</p>
          <div className="w-16 h-0.5 bg-[#A3CF00] mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, idx) => (
              <a
                key={info.id}
                href={info.link}
                className="contact-card block rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(info.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4">
                  <div className="contact-icon w-14 h-14 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-[#A3CF00] transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="contact-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="social-link w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-[#A3CF00] hover:text-[#1a1a1a]"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="contact-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#A3CF00] rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-[#A3CF00] rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <p className="text-white font-semibold">Available for work</p>
                  <p className="text-gray-400 text-sm">Currently accepting new projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="slide-right rounded-2xl p-6 md:p-8" style={{ animationDelay: '0.2s' }}>
            <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border-2 border-[#2a2a2a]">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-focus w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#333] text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-focus w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#333] text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input-focus w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#333] text-white placeholder-gray-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#A3CF00] text-[#1a1a1a] font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <FiSend size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="fixed top-20 right-4 z-50 animate-fade-in">
                    <div className="bg-[#A3CF00] text-[#1a1a1a] px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                      <FiCheckCircle size={20} />
                      <span className="font-semibold">Message sent successfully!</span>
                    </div>
                  </div>
                )}
                
                {/* Error Message */}
                {isError && (
                  <div className="fixed top-20 right-4 z-50 animate-fade-in">
                    <div className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                      <FiAlertCircle size={20} />
                      <span className="font-semibold">Please fill all fields</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'hello@fullstackdev.com', link: 'mailto:hello@fullstackdev.com' },
    { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA', link: '#' },
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center py-20" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-5 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white opacity-90 relative inline-block" 
            style={{ letterSpacing: '-2px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            CONTACT
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400 italic" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Contact form, office locations, phone numbers, and social media links
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#1a1a1a] border border-[#333]">
            <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Send me a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#333] bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#333] bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-[#333] bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 hover:transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {formStatus === 'success' ? (
                  <>
                    <FiCheckCircle size={18} />
                    Sent Successfully!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <FiAlertCircle size={18} />
                    Error Sending
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#2a2a2a] group"
                  >
                    <div className="p-3 rounded-full bg-[#2a2a2a] text-blue-400">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {info.label}
                      </p>
                      <p className="font-medium text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Available for Freelance
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                I'm currently available for freelance work and full-time opportunities. 
                Feel free to reach out for collaborations!
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Response within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
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
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl bg-blue-900/20" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl bg-purple-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Send me a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#333] bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#333] bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-[#333] bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:transform hover:-translate-y-0.5"
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

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/10 group"
                  >
                    <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        {info.label}
                      </p>
                      <p className="font-medium text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold mb-2 text-white">
                Available for Freelance
              </h3>
              <p className="text-sm text-gray-300">
                I'm currently available for freelance work and full-time opportunities. 
                Feel free to reach out for collaborations!
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">
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
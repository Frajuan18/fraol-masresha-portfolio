// Contact.tsx
import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail size={20} />, label: 'Email', value: 'fraol@example.com', href: 'mailto:fraol@example.com' },
    { icon: <FiPhone size={20} />, label: 'Phone', value: '+251 123 456 789', href: 'tel:+251123456789' },
    { icon: <FiMapPin size={20} />, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: <FiTwitter size={20} />, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: <FiInstagram size={20} />, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
  ];

  return (
    <section 
      id="contact" 
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
            Get in touch
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            style={{ letterSpacing: '-1px' }}
          >
            Contact <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="group flex items-center gap-4 p-4 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] transition-all duration-300 hover:scale-[1.02] hover:border-gray-500 hover:shadow-xl cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 transition-all duration-300 group-hover:scale-110">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] text-gray-400 transition-all duration-300 hover:scale-110 hover:border-gray-500 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-5 rounded-xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333]">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <span className="text-white font-medium">Available for work</span>
              </div>
              <p className="text-gray-400 text-sm">
                I'm currently open to freelance opportunities and full-time positions. 
                Feel free to reach out!
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="rounded-2xl backdrop-blur-md bg-[#1a1a1a]/90 border border-[#333] p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
            
            {/* Success/Error Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                  : 'bg-red-500/20 border border-red-500/30 text-red-400'
              }`}>
                {submitStatus.type === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
                <span className="text-sm">{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl bg-blue-500 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-blue-600 hover:scale-[1.02] hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
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
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
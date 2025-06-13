import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Instagram, Mail, MapPin, Phone, Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setIsContactOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <a href="/" className="text-2xl text-indigo-700 font-bold flex items-center gap-2">
              Emmanuel Dey
            </a>
            
            <div className="hidden lg:flex items-center gap-8 mr-2">
              <ul className="flex items-center gap-8">
                <li><a href="/" className="hover:text-teal-500 transition-colors">Home</a></li>
                <li><a href="/Experience" className="hover:text-teal-500 transition-colors">Experience</a></li>
                <li><a href="/Courses" className="hover:text-teal-500 transition-colors">Courses</a></li>
                <li>
                  <button 
                    onClick={handleContactClick}
                    className="bg-indigo-700 px-8 py-3 rounded-full text-white font-medium hover:bg-indigo-800 transition-colors"
                  >
                    Contact Me
                  </button>                
                </li>
              </ul>
            </div>

            {/* Custom Hamburger Button */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative group" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Slide-in Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 group relative" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-800 transition-colors duration-300 group-hover:text-teal-500" />
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="px-6 pt-4">
          <ul className="space-y-8">
            <li>
              <a 
                href="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-lg font-medium text-gray-800 hover:text-teal-500 transition-colors py-2 border-b border-gray-100"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/Experience" 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-lg font-medium text-gray-800 hover:text-teal-500 transition-colors py-2 border-b border-gray-100"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="/Courses" 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-lg font-medium text-gray-800 hover:text-teal-500 transition-colors py-2 border-b border-gray-100"
              >
                Courses
              </a>
            </li>
          </ul>
          
          {/* Social Media Links */}
          <div className="mt-12 pt-8">
            <p className="text-sm font-medium text-gray-600 mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a href="https://github.com/emmanueldey" className="w-10 h-10 bg-gray-100 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors group">
                <Github size={18} className="text-gray-600 group-hover:text-white" />
              </a>
              <a href="https://linkedin.com/in/emmanuel1010" className="w-10 h-10 bg-gray-100 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors group">
                <Linkedin size={18} className="text-gray-600 group-hover:text-white" />
              </a>
              <a href="mailto:emmanuel.p.dey.28@dartmouth.edu" className="w-10 h-10 bg-gray-100 hover:bg-indigo-500 rounded-full flex items-center justify-center transition-colors group">
                <Mail size={18} className="text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Get In Touch</h3>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close contact popup"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Let's connect! You can reach me through any of these platforms.
              </p>
              
              {/* Email */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-600 mb-3">Email</p>
                <a 
                  href="mailto:emmanuel.p.dey.28@dartmouth.edu"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="text-gray-800 group-hover:text-indigo-600">emmanuel.p.dey.28@dartmouth.edu</span>
                </a>
              </div>
              
              {/* Social Media */}
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">Social Media</p>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://github.com/emmanueldey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <Github size={20} className="text-gray-600 group-hover:text-white" />
                    <span className="text-sm text-gray-800 group-hover:text-white">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/emmanuel1010" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-600 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm text-gray-800 group-hover:text-white">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
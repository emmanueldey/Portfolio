// import { ArrowRight, BookOpen, Code, Briefcase, GraduationCap, User, ChevronRight, ChevronDown, ExternalLink, Github, Menu, X, Mail, MapPin, Phon, Twitter, Instagram, Send } from 'lucide-react';
import Mypic from '../assets/mypic.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PortfolioData from "../MyData.json"
// import {Link}
import { ArrowRight, Twitter, Instagram, Mail, MapPin, Phone, Menu, X, Github, Linkedin, ChevronDown } from 'lucide-react';



// Helper function to get background color classes
const getBgColorClass = (bgColor) => {
  const colorMap = {
    'purple-50': 'bg-purple-50 border-purple-100 hover:border-purple-300',
    'teal-50': 'bg-teal-50 border-teal-100 hover:border-teal-300',
    'blue-100': 'bg-blue-100 border-blue-100 hover:border-blue-300',
    'amber-200': 'bg-amber-200 border-amber-100 hover:border-amber-300',
    'pink-50': 'bg-pink-50 border-pink-100 hover:border-pink-300'
  };
  return colorMap[bgColor] || 'bg-gray-50 border-gray-100 hover:border-gray-300';
};

// Helper function to get tag color classes
const getTagColorClass = (bgColor) => {
  const colorMap = {
    'purple-50': 'text-purple-700 border-purple-200',
    'teal-100': 'text-teal-700 border-teal-200',
    'blue-100': 'text-blue-700 border-blue-200',
    'amber-200': 'text-amber-700 border-amber-200',
    'pink-50': 'text-pink-700 border-pink-200'
  };
  return colorMap[bgColor] || 'text-gray-700 border-gray-200';
};

// Main App Component
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get data from JSON
  const { aboutMe, passions, origin } = PortfolioData.HomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-gray-800 font-sans">
      {/* Header */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 to-indigo-50">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-br from-teal-100/30 to-indigo-100/30 rounded-bl-full"></div>

        {/* Decorative circles */}
        <div className='hidden md:block'>
          <div className="absolute top-32 left-10 w-16 h-16 bg-teal-500/10 rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-20 h-20 bg-indigo-500/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-purple-500/10 rounded-full"></div>       
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse md:grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Hello, I'm <span className='text-indigo-700'>Emmanuel</span>
              </h1>
              <p className="text-gray-600 text-lg border-l-4 border-indigo-500 pl-4">
                A Computer Science major with a minor in Human-Centered Design. Passionate about creating technology that positively impacts people's lives.
              </p>
              <div className="flex flex-wrap gap-y-6">
                <a href="#Experience" className="border hover:border-teal-500 border-indigo-700 px-8 py-3 rounded-full text-indigo-600 font-medium transition-all transform hover:-translate-y-1 hover:bg-indigo-50 mt-2 md:mt-6">
                  My Resume
                </a>
              </div>
            </div>
            <div className="lg:flex justify-center items-center my-12 md:mb-0 md:mt-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-teal-500/30 p-2">
                <img 
                  src={Mypic} 
                  alt="Emmanuel Dey" 
                  className="w-full h-full object-cover rounded-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm mb-2 text-slate-400 bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text font-medium">Scroll Down</span>
          <ChevronDown size={20} className="text-indigo-500 animate-bounce" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-gradient-to-br from-indigo-50 to-teal-50 border py-20 md:py-24 md:pb-32 mt-8 md:mt-0">
        <div className=''>
          <div className="container mx-auto px-2">
            <div className="text-center mb-2">
              <span className="text-indigo-600 uppercase tracking-wider font-medium">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text">
                {aboutMe.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 items-center px-16">
              <div className="relative order-2 lg:order-1">
                <div className="space-y-6 relative z-10">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {aboutMe.subtitle}
                  </h3>
                  
                  {aboutMe.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-600">
                      {paragraph.includes('passionate computer science student') ? (
                        <>
                          I'm a <span className="text-teal-600 font-medium">passionate computer science student</span> with a deep interest in creating technology that makes a positive impact. My journey in tech started when I was young, tinkering with computers and fascinated by how software works.
                        </>
                      ) : paragraph.includes('intuitive, accessible') ? (
                        <>
                          I believe that the best technology is designed with humans in mind - <span className="text-indigo-600 font-medium">intuitive, accessible, and focused on solving real problems</span>. That's why I'm combining my technical skills with human-centered design principles.
                        </>
                      ) : paragraph.includes('emerging technologies') ? (
                        <>
                          When I'm not coding or designing, you can find me exploring new ideas, reading about <span className="text-purple-600 font-medium">emerging technologies</span>, or collaborating with fellow students on innovative projects. I'm constantly curious and always eager to learn something new.
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                  
                  <div className="flex flex-wrap gap-y-2 mt-6">
                    {aboutMe.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
                          index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                          index === 1 ? 'bg-green-600' :
                          'bg-gradient-to-r from-purple-500 to-purple-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="hidden md:block absolute top-20 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full"></div>
          <div className="hidden md:block absolute bottom-20 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Passions Section */}
      <section id="Experience" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-600 uppercase tracking-wider font-medium">My Passions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              {passions.title}
            </h2>
          </div>
          
          {/* First 3 interests in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.interests.slice(0, 3).map((interest) => (
              <div 
                key={interest.id} 
                className={`rounded-xl p-6 border transition-all transform hover:-translate-y-2 group ${getBgColorClass(interest.bgColor)}`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{interest.title}</h3>
                <p className="text-gray-600">
                  {interest.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {interest.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`bg-white px-3 py-1 rounded-full text-xs border ${getTagColorClass(interest.bgColor)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Last 2 interests in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {passions.interests.slice(3).map((interest) => (
              <div 
                key={interest.id} 
                className={`rounded-xl p-6 border transition-all transform hover:-translate-y-2 group ${getBgColorClass(interest.bgColor)}`}
              >
                <div className="flex items-start gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{interest.title}</h3>
                    <p className="text-gray-600">
                      {interest.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {interest.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`bg-white px-3 py-1 rounded-full text-xs border ${getTagColorClass(interest.bgColor)}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-20 md:py-32 relative bg-gradient-to-br from-indigo-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-600 uppercase tracking-wider font-medium">My Background</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              {origin.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-800">{origin.subtitle}</h3>

              {origin.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
              
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 mt-6">
                <p className="text-gray-700 italic">
                  "{origin.quote}"
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-indigo-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099966!2d-0.20544238468129265!3d5.614818295138353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfb9e9a9c02a81%3A0x7e90b6f4b8c4b5b6!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1639982924676!5m2!1sen!2sus" 
                  width="600" 
                  height="450" 
                  allowfullscreen="" 
                  loading="lazy">
                </iframe>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Country:</span>
                    <span className="font-medium">{origin.details.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">City:</span>
                    <span className="font-medium">{origin.details.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">{origin.details.languages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Favorite Ghanaian Dish:</span>
                    <span className="font-medium">Jollof Rice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Basic Info */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></span>
              <span className="font-bold">Emmanuel Dey</span>
              <span className="text-gray-400 text-sm hidden md:inline">•</span>
              <span className="text-gray-400 text-sm hidden md:inline">Computer Science Student</span>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to='/'>
                <div className="text-gray-400 hover:text-teal-400 transition-colors">Home</div>
              </Link>
              <Link to='/experience'>
                <div className="text-gray-400 hover:text-teal-400 transition-colors">Experience</div>
              </Link>
              <Link to='/courses'>
                <div className="text-gray-400 hover:text-teal-400 transition-colors">Courses</div>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/emmanueldey" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/emmanuel1010" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
        
              <a href="mailto:emmanuel.p.dey.28@dartmouth.edu" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                <Mail size={14} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-4 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
              <div>© {new Date().getFullYear()} Emmanuel Dey. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>    
    </div>
  );
};

export default Portfolio;
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../MyData.json' // Import your JSON data

const ExperiencePage = () => {
  // Extract data from the imported JSON
  const { workExperience, personalProjects } = portfolioData.ExperiencePage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in technology through professional experiences and personal projects
          </p>
        </div>

        {/* Work Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <h4 className="text-xl text-purple-600 font-semibold mb-3">{job.company}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{job.duration}</span>
                      </div>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Personal Projects</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {personalProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
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
              <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link to="/experience" className="text-gray-400 hover:text-teal-400 transition-colors">
                Experience
              </Link>
              <Link to="/courses" className="text-gray-400 hover:text-teal-400 transition-colors">
                Courses
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/emmanueldey" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://linkedin.com/in/emmanuel1010" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="mailto:emmanuel.p.dey.28@dartmouth.edu" 
                className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors"
              >
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

export default ExperiencePage;
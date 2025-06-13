import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import courseData from '../MyData.json'; // Assuming you have a courses data file
import { BookOpen, Code, Palette, Brain, Calculator, Award, Linkedin, Github, Mail } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('major');
  // const [courseData, setCourseData] = useState({});

  // setCourseData(MyData.CoursesPage)
  // useEffect(() => {
  // }, []);

  const getIcon = (iconName) => {
    const icons = {
      code: <Code className="w-5 h-5" />,
      palette: <Palette className="w-5 h-5" />,
      brain: <Brain className="w-5 h-5" />,
      calculator: <Calculator className="w-5 h-5" />,
      bookOpen: <BookOpen className="w-5 h-5" />,
    };
    return icons[iconName] || <BookOpen className="w-5 h-5" />;
  }

  const getColorClasses = (color, variant = 'primary') => {
    const colors = {
      purple: {
        primary: 'bg-purple-600 text-white',
        secondary: 'bg-purple-100 text-purple-700',
        border: 'border-purple-200',
        text: 'text-purple-600',
        tab: 'bg-purple-600 text-white border-purple-600',
        tabInactive: 'text-purple-600 border-gray-200 hover:border-purple-300'
      },
      blue: {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-blue-100 text-blue-700',
        border: 'border-blue-200',
        text: 'text-blue-600',
        tab: 'bg-blue-600 text-white border-blue-600',
        tabInactive: 'text-blue-600 border-gray-200 hover:border-blue-300'
      },
      green: {
        primary: 'bg-green-600 text-white',
        secondary: 'bg-green-100 text-green-700',
        border: 'border-green-200',
        text: 'text-green-600',
        tab: 'bg-green-600 text-white border-green-600',
        tabInactive: 'text-green-600 border-gray-200 hover:border-green-300'
      }
    };
    return colors[color][variant];
  };

  const getGradeColor = (grade) => {
    if (grade === 'A') return 'bg-green-100 text-green-800';
    if (grade === 'A-') return 'bg-green-100 text-green-700';
    if (grade === 'B+') return 'bg-blue-100 text-blue-700';
    if (grade === 'In Progress') return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  const calculateGPA = (courses) => {
    const gradePoints = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7 };
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      if (course.grade !== 'In Progress' && gradePoints[course.grade]) {
        totalPoints += gradePoints[course.grade] * course.credits;
        totalCredits += course.credits;
      }
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const currentSection = courseData.CoursesPage[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my academic journey at KNUST
          </p>
        </div>

        {/* Academic Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {Object.values(courseData.CoursesPage).reduce((acc, section) => acc + section.courses.length, 0)}
            </h3>
            <p className="text-gray-600">Total Courses</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {Object.values(courseData.CoursesPage).reduce((acc, section) =>
                acc + section.courses.reduce((sum, course) => sum + course.credits, 0), 0
              )}
            </h3>
            <p className="text-gray-600">Total Credits</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(courseData.CoursesPage).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 font-medium transition-all duration-200 ${activeTab === key
                  ? getColorClasses(section.color, 'tab')
                  : `bg-white ${getColorClasses(section.color, 'tabInactive')}`
                }`}
            >
              {getIcon( section.icon)}
              <span>{section.title}</span>
              <span className="text-sm opacity-75">({section.courses.length})</span>
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`p-4 rounded-xl ${getColorClasses(currentSection.color, 'primary')}`}>
              <div className="w-8 h-8">
                {getIcon(currentSection.icon)}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900">{currentSection.title}</h2>
              <p className="text-gray-600 mt-2">{currentSection.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{currentSection.courses.length}</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {currentSection.courses.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <div className="text-gray-600">Credits</div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {currentSection.courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border-l-4 p-6 hover:shadow-xl transition-shadow"
              style={{ borderLeftColor: currentSection.color === 'purple' ? '#9333ea' : currentSection.color === 'blue' ? '#2563eb' : '#16a34a' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{course.name}</h3>
                  <p className={`text-sm font-semibold mb-2 ${getColorClasses(currentSection.color, 'text')}`}>
                    {course.code}
                  </p>
                  <p className="text-sm text-gray-500">{course.semester}</p>
                </div>
                <div className="text-right ml-4">
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{course.description}</p>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Skills Gained:</p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 rounded-full text-xs ${getColorClasses(currentSection.color, 'secondary')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
                  <Link to=''>
                    <a href="" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a>
                  </Link>
                  <Link to='/experience'>
                    <a href="" className="text-gray-400 hover:text-teal-400 transition-colors">Experience</a>
                  </Link>
                  <Link to='/courses'>
                    <a href="" className="text-gray-400 hover:text-teal-400 transition-colors">Courses</a>
                  </Link>
                  {/* <a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors">Skills</a> */}
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a href="https://github.com/emmanueldey" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    {/* <Github size={14} /> */}
                    <Github size={16} />
                  </a>
                  <a href="https://linkedin.com/in/emmanuel1010" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin size={16} />
                    {/* <Twitter size={14} /> */}
                  </a>
                  {/* <a href="#" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    <Instagram size={14} />
                  </a> */}
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

export default Courses;
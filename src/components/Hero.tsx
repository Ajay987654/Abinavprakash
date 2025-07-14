import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      {/* Background Pattern */}
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12">
        

          {/* Animated Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-float border-4 border-teal-300/30">
              <span className="text-4xl font-bold text-white">AP</span>
            </div>
          </div>
          
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Abinav Prakash
        </span>
      </h1>
      
      <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-4 font-light">
        Full Stack Developer
      </p>
      
      <p className="text-lg text-teal-400 mb-6 font-medium">
        Building Powerful Web Experiences
      </p>
      
      <p className="text-lg text-slate-400 mb-10 max-w-2xl ">
        Passionate about creating exceptional digital experiences with modern technologies. Specializing 
        in React, Node.js, and AI-driven solutions.
      </p>
      
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>🚀</span>
              View My Work
            </button>
            
            <button className="border border-slate-400 hover:border-teal-400 text-slate-300 hover:text-teal-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            
            <button className="border border-slate-400 hover:border-teal-400 text-slate-300 hover:text-teal-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>💼</span>
              Hire Me
            </button>
          </div>
          
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero
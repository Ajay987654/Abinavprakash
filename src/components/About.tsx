import React from 'react';
import { Code, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full Stack Developer with over 3 years of experience 
              creating digital solutions that make a difference. I love turning complex 
              problems into simple, beautiful, and intuitive designs.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">My Goals</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build scalable applications that solve real-world problems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contribute to open-source projects and help the community
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mentor aspiring developers and share knowledge
                </li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 border border-slate-600">
              <div className="bg-teal-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-teal-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-slate-300">Writing maintainable, scalable, and efficient code</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 border border-slate-600">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-slate-300">Always exploring new technologies and creative solutions</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 sm:col-span-2 border border-slate-600">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-slate-300">Working effectively in teams and mentoring others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
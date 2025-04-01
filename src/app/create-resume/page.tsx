'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreateResume() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setCurrentStep(2);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24">
      <div className="z-10 max-w-6xl w-full">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Create Your Resume</h1>
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-3xl">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                  <span className="text-white font-bold">1</span>
                </div>
                <div className={`h-1 flex-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                  <span className="text-white font-bold">2</span>
                </div>
                <div className={`h-1 flex-1 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                  <span className="text-white font-bold">3</span>
                </div>
                <div className={`h-1 flex-1 ${currentStep >= 4 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 4 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Choose Template</span>
                <span>Personal Info</span>
                <span>Experience</span>
                <span>Finalize</span>
              </div>
            </div>
          </div>
        </div>
        
        {currentStep === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-8 text-center">Select a Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                className={`card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${selectedTemplate === 'classic' ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => handleTemplateSelect('classic')}
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Professional Classic</h2>
                <p className="text-gray-400 mb-6">A clean, traditional template perfect for corporate and formal industries.</p>
                <div className="template-preview h-80 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 z-10">Template Preview</span>
                </div>
              </div>
              
              <div 
                className={`card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${selectedTemplate === 'modern' ? 'ring-2 ring-purple-500' : ''}`}
                onClick={() => handleTemplateSelect('modern')}
              >
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Modern Creative</h2>
                <p className="text-gray-400 mb-6">A vibrant, contemporary design ideal for creative and tech industries.</p>
                <div className="template-preview h-80 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 z-10">Template Preview</span>
                </div>
              </div>
              
              <div 
                className={`card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${selectedTemplate === 'minimalist' ? 'ring-2 ring-teal-500' : ''}`}
                onClick={() => handleTemplateSelect('minimalist')}
              >
                <h2 className="text-2xl font-semibold mb-4 text-teal-400">Minimalist Professional</h2>
                <p className="text-gray-400 mb-6">A clean, elegant design with subtle styling for a sophisticated look.</p>
                <div className="template-preview h-80 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 z-10">Template Preview</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-8 text-center">Personal Information</h2>
            <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2">Professional Title</label>
                  <input 
                    type="text" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="Software Engineer"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2">Location</label>
                  <input 
                    type="text" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="City, State"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2">Professional Summary</label>
                  <textarea 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none h-32" 
                    placeholder="Experienced software engineer with a passion for developing innovative solutions..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setCurrentStep(1)} 
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setCurrentStep(3)} 
                  className="glow-button px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                >
                  Next: Experience
                </button>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-8 text-center">Work Experience</h2>
            <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
              <div className="mb-8 pb-8 border-b border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Experience #1</h3>
                  <button className="text-red-400 hover:text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Job Title</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="Senior Developer"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="Tech Company Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Start Date</label>
                    <input 
                      type="month" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">End Date</label>
                    <input 
                      type="month" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Location</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="City, State"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Description</label>
                    <textarea 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none h-32" 
                      placeholder="• Led development of a key product feature that increased user engagement by 25%
• Collaborated with cross-functional teams to implement new technologies
• Mentored junior developers and conducted code reviews"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 mb-8 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Another Experience
              </button>
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setCurrentStep(2)} 
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setCurrentStep(4)} 
                  className="glow-button px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                >
                  Next: Finalize
                </button>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-8 text-center">Finalize Your Resume</h2>
            <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Degree</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="Bachelor of Science in Computer Science"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Institution</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="University Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Graduation Year</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="2020"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Location</label>
                    <input 
                      type="text" 
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Add Skills (separated by commas)</label>
                  <input 
                    type="text" 
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" 
                    placeholder="JavaScript, React, Node.js, Python, SQL, Git"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Python</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">SQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Git</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Color Scheme</h3>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input type="radio" id="blue" name="color" className="mr-2" defaultChecked />
                    <label htmlFor="blue" className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
                      Blue
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="purple" name="color" className="mr-2" />
                    <label htmlFor="purple" className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-purple-500 mr-2"></span>
                      Purple
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="teal" name="color" className="mr-2" />
                    <label htmlFor="teal" className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-teal-500 mr-2"></span>
                      Teal
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="red" name="color" className="mr-2" />
                    <label htmlFor="red" className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-red-500 mr-2"></span>
                      Red
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setCurrentStep(3)} 
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button 
                  className="glow-button px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                >
                  Generate Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

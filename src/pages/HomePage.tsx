import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Award, Briefcase } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#0C4A6E]">
          Create Your Professional Resume
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build a stunning resume that stands out and gets you hired. Easy to use, professional templates, and expert-backed tips.
        </p>
        <Link
          to="/resume-form"
          className="inline-block bg-[#0C4A6E] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#0D5780] transition-colors"
        >
          Create Your Resume
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="bg-[#0C4A6E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <FileText className="text-[#0C4A6E]" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-[#0C4A6E]">Professional Templates</h3>
          <p className="text-gray-600">
            Choose from our collection of professionally designed templates that catch the eye.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="bg-[#0C4A6E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Award className="text-[#0C4A6E]" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-[#0C4A6E]">Expert-Backed Design</h3>
          <p className="text-gray-600">
            Our templates follow the latest industry standards and best practices.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="bg-[#0C4A6E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Briefcase className="text-[#0C4A6E]" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-[#0C4A6E]">Industry Ready</h3>
          <p className="text-gray-600">
            Tailored for your industry with relevant sections and formatting.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0C4A6E] text-white rounded-2xl p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Build Your Professional Resume?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Join thousands of job seekers who have successfully created their perfect resume using our platform.
        </p>
        <Link
          to="/templates"
          className="inline-block bg-white text-[#0C4A6E] px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Browse Templates
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
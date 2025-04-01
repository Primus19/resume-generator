import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400',
      description: 'Clean and contemporary design perfect for tech and creative fields.',
      color: '#0C4A6E',
    },
    {
      id: 'colorful',
      name: 'Creative Sidebar',
      image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=400',
      description: 'Vibrant design with a colorful sidebar, perfect for creative professionals.',
      color: '#4F46E5',
    },
    {
      id: 'minimal',
      name: 'Minimal Elegance',
      image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=400',
      description: 'Minimalist design that lets your content shine.',
      color: '#18181B',
    },
    {
      id: 'executive',
      name: 'Executive Classic',
      image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc8?auto=format&fit=crop&q=80&w=400',
      description: 'Traditional layout ideal for corporate and management positions.',
      color: '#1E3A8A',
    },
    {
      id: 'tech',
      name: 'Tech Stack',
      image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&q=80&w=400',
      description: 'Developer-focused template highlighting technical skills.',
      color: '#059669',
    },
    {
      id: 'startup',
      name: 'Startup Impact',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=400',
      description: 'Modern and bold design for startup founders and entrepreneurs.',
      color: '#9333EA',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary dark:text-white">Resume Templates</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose from our collection of professionally designed templates, each crafted for specific industries and roles
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="group card overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: template.color }}
                ></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {template.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{template.description}</p>
              <Link
                to="/resume-form"
                className="inline-flex items-center text-primary dark:text-primary-dark font-medium hover:gap-4 gap-2 transition-all duration-300"
              >
                Use this template
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="mt-16 space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Why Choose Our Templates?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">ATS-Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All templates are optimized for Applicant Tracking Systems, ensuring your resume gets past automated screenings.
            </p>
          </div>
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Responsive Layouts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Templates adapt perfectly to different screen sizes and print formats.
            </p>
          </div>
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customizable</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easily customize colors, fonts, and layouts to match your personal brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;
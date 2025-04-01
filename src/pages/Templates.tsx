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
    },
    {
      id: 'classic',
      name: 'Classic Executive',
      image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=400',
      description: 'Traditional layout ideal for corporate and management positions.',
    },
    {
      id: 'minimal',
      name: 'Minimal Creative',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400',
      description: 'Minimalist design that lets your content shine.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#0C4A6E]">Resume Templates</h1>
        <p className="text-xl text-gray-600">
          Choose from our collection of professionally designed templates
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#0C4A6E]">{template.name}</h3>
              <p className="text-gray-600">{template.description}</p>
              <Link
                to="/resume-form"
                className="inline-flex items-center text-[#0C4A6E] font-medium hover:text-[#0D5780]"
              >
                Use this template
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
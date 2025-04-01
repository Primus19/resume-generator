'use client';

import React from 'react';
import { useResume } from '@/context/ResumeContext';

// Modern Creative Template Component
export const ModernTemplate: React.FC = () => {
  const { resumeData } = useResume();
  const { personalInfo, experiences, education, skills, colorScheme } = resumeData;
  
  // Color scheme mapping
  const colorMap = {
    blue: {
      primary: '#008080',
      secondary: '#F0F0F0',
      accent: '#FF6F61',
      text: '#333333',
    },
    purple: {
      primary: '#6A0DAD',
      secondary: '#F0F0F0',
      accent: '#FFB347',
      text: '#333333',
    },
    teal: {
      primary: '#008B8B',
      secondary: '#F0F0F0',
      accent: '#FF7F50',
      text: '#333333',
    },
    red: {
      primary: '#B22222',
      secondary: '#F0F0F0',
      accent: '#4682B4',
      text: '#333333',
    },
    green: {
      primary: '#2E8B57',
      secondary: '#F0F0F0',
      accent: '#9370DB',
      text: '#333333',
    },
  };
  
  const colors = colorMap[colorScheme as keyof typeof colorMap] || colorMap.blue;
  
  return (
    <div className="bg-white text-black flex max-w-[8.5in] mx-auto shadow-xl" style={{ minHeight: '11in' }}>
      {/* Sidebar */}
      <div className="w-1/3 p-6" style={{ backgroundColor: colors.secondary }}>
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>
            {personalInfo.firstName}<br/>{personalInfo.lastName}
          </h1>
          <p className="text-lg mb-4" style={{ color: colors.accent }}>{personalInfo.title}</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>CONTACT</h2>
          <div className="flex flex-col gap-2 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: colors.primary }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: colors.primary }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: colors.primary }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
        
        {skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>SKILLS</h2>
            <div className="flex flex-col gap-3">
              {skills.map((skill) => (
                <div key={skill} className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{skill}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: '85%', 
                        backgroundColor: colors.primary 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Main Content */}
      <div className="w-2/3 p-6">
        {personalInfo.summary && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 relative pl-3" style={{ color: colors.primary }}>
              <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: colors.accent }}></span>
              ABOUT ME
            </h2>
            <p>{personalInfo.summary}</p>
          </section>
        )}
        
        {experiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 relative pl-3" style={{ color: colors.primary }}>
              <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: colors.accent }}></span>
              EXPERIENCE
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{exp.jobTitle}</h3>
                  <span className="text-sm" style={{ color: colors.accent }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="text-sm">{exp.location}</span>
                </div>
                <div className="whitespace-pre-line text-sm">{exp.description}</div>
              </div>
            ))}
          </section>
        )}
        
        {education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 relative pl-3" style={{ color: colors.primary }}>
              <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: colors.accent }}></span>
              EDUCATION
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <span className="text-sm" style={{ color: colors.accent }}>
                    {edu.graduationYear}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold">{edu.institution}</span>
                  <span className="text-sm">{edu.location}</span>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;

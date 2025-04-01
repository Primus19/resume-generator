'use client';

import React from 'react';
import { useResume } from '@/context/ResumeContext';

// Minimalist Professional Template Component
export const MinimalistTemplate: React.FC = () => {
  const { resumeData } = useResume();
  const { personalInfo, experiences, education, skills, colorScheme } = resumeData;
  
  // Color scheme mapping
  const colorMap = {
    blue: {
      primary: '#505A5B',
      secondary: '#F5F5F0',
      accent: '#800020',
      text: '#2D2D2D',
    },
    purple: {
      primary: '#4A4E69',
      secondary: '#F5F5F0',
      accent: '#9A8C98',
      text: '#2D2D2D',
    },
    teal: {
      primary: '#4F6367',
      secondary: '#F5F5F0',
      accent: '#7A9E9F',
      text: '#2D2D2D',
    },
    red: {
      primary: '#5D5C61',
      secondary: '#F5F5F0',
      accent: '#B1A296',
      text: '#2D2D2D',
    },
    green: {
      primary: '#606C38',
      secondary: '#F5F5F0',
      accent: '#DDA15E',
      text: '#2D2D2D',
    },
  };
  
  const colors = colorMap[colorScheme as keyof typeof colorMap] || colorMap.blue;
  
  return (
    <div className="bg-white text-black p-8 max-w-[8.5in] mx-auto shadow-xl" style={{ minHeight: '11in', color: colors.text }}>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-light tracking-wide uppercase mb-2" style={{ color: colors.primary, letterSpacing: '0.1em' }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg mb-4" style={{ color: colors.text }}>{personalInfo.title}</p>
        <div className="flex justify-center flex-wrap gap-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span className="text-center" style={{ color: colors.accent }}>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span className="text-center" style={{ color: colors.accent }}>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>
      
      {personalInfo.summary && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: colors.primary, borderBottom: `1px solid ${colors.secondary}`, letterSpacing: '0.1em' }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p className="leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}
      
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: colors.primary, borderBottom: `1px solid ${colors.secondary}`, letterSpacing: '0.1em' }}>
            CORE COMPETENCIES
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 rounded text-sm"
                style={{ backgroundColor: colors.secondary, color: colors.text }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
      
      {experiences.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: colors.primary, borderBottom: `1px solid ${colors.secondary}`, letterSpacing: '0.1em' }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold" style={{ color: colors.accent }}>{exp.jobTitle}</h3>
                <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="font-medium">{exp.company}</span>
                <span className="text-sm">{exp.location}</span>
              </div>
              <div className="whitespace-pre-line text-sm leading-relaxed">{exp.description}</div>
            </div>
          ))}
        </section>
      )}
      
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: colors.primary, borderBottom: `1px solid ${colors.secondary}`, letterSpacing: '0.1em' }}>
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold">{edu.degree}</h3>
                <span className="text-sm">{edu.graduationYear}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium">{edu.institution}</span>
                <span className="text-sm">{edu.location}</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default MinimalistTemplate;

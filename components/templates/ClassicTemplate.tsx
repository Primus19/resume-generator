'use client';

import React from 'react';
import { useResume } from '@/context/ResumeContext';

// Classic Template Component
export const ClassicTemplate: React.FC = () => {
  const { resumeData } = useResume();
  const { personalInfo, experiences, education, skills, colorScheme } = resumeData;
  
  // Color scheme mapping
  const colorMap = {
    blue: {
      primary: '#0A3161',
      secondary: '#F5F5F5',
      accent: '#333333',
    },
    purple: {
      primary: '#5E3B73',
      secondary: '#F5F5F5',
      accent: '#333333',
    },
    teal: {
      primary: '#008080',
      secondary: '#F5F5F5',
      accent: '#333333',
    },
    red: {
      primary: '#8B0000',
      secondary: '#F5F5F5',
      accent: '#333333',
    },
    green: {
      primary: '#2E7D32',
      secondary: '#F5F5F5',
      accent: '#333333',
    },
  };
  
  const colors = colorMap[colorScheme as keyof typeof colorMap] || colorMap.blue;
  
  return (
    <div className="bg-white text-black p-8 max-w-[8.5in] mx-auto shadow-xl" style={{ minHeight: '11in' }}>
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="flex justify-center flex-wrap gap-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </header>
      
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color: colors.primary, borderColor: colors.primary }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}
      
      {experiences.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color: colors.primary, borderColor: colors.primary }}>
            WORK EXPERIENCE
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">{exp.jobTitle}</h3>
                <span className="text-sm italic" style={{ color: colors.accent }}>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-semibold">{exp.company}</span>
                <span className="text-sm">{exp.location}</span>
              </div>
              <div className="mt-2 whitespace-pre-line">{exp.description}</div>
            </div>
          ))}
        </section>
      )}
      
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color: colors.primary, borderColor: colors.primary }}>
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">{edu.degree}</h3>
                <span className="text-sm italic" style={{ color: colors.accent }}>
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
      
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color: colors.primary, borderColor: colors.primary }}>
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: colors.secondary, color: colors.primary }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;

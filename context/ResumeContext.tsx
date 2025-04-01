'use client';

import React, { createContext, useContext, useState } from 'react';

// Define the shape of our resume data
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  location: string;
  summary: string;
}

interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
}

interface ResumeData {
  template: string;
  colorScheme: string;
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

// Default empty resume data
const defaultResumeData: ResumeData = {
  template: '',
  colorScheme: 'blue',
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    location: '',
    summary: '',
  },
  experiences: [],
  education: [],
  skills: [],
};

// Create context
interface ResumeContextType {
  resumeData: ResumeData;
  updateTemplate: (template: string) => void;
  updateColorScheme: (colorScheme: string) => void;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addEducation: (education: Omit<Education, 'id'>) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  const updateTemplate = (template: string) => {
    setResumeData(prev => ({ ...prev, template }));
  };

  const updateColorScheme = (colorScheme: string) => {
    setResumeData(prev => ({ ...prev, colorScheme }));
  };

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const addExperience = (experience: Omit<Experience, 'id'>) => {
    const id = Date.now().toString();
    setResumeData(prev => ({
      ...prev,
      experiences: [...prev.experiences, { ...experience, id }],
    }));
  };

  const updateExperience = (id: string, experience: Partial<Experience>) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => 
        exp.id === id ? { ...exp, ...experience } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id),
    }));
  };

  const addEducation = (education: Omit<Education, 'id'>) => {
    const id = Date.now().toString();
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { ...education, id }],
    }));
  };

  const updateEducation = (id: string, education: Partial<Education>) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, ...education } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id),
    }));
  };

  const addSkill = (skill: string) => {
    if (!resumeData.skills.includes(skill)) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  const removeSkill = (skill: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateTemplate,
        updateColorScheme,
        updatePersonalInfo,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        removeSkill,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the resume context
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

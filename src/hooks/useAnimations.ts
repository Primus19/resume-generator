'use client';

import { useEffect } from 'react';
import { useResume } from '@/context/ResumeContext';

// Custom hook for form animations and transitions
export const useFormAnimations = () => {
  useEffect(() => {
    // Add animation to form elements when they appear
    const formElements = document.querySelectorAll('.form-input, .glass-effect, .card');
    
    formElements.forEach((element, index) => {
      // Add staggered animation delay
      setTimeout(() => {
        element.classList.add('animate-fadeIn');
      }, index * 100);
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.transition = 'all 0.3s ease';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });
    
    return () => {
      // Clean up event listeners
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
};

// Custom hook for form validation
export const useFormValidation = () => {
  const { resumeData } = useResume();
  
  const validatePersonalInfo = () => {
    const { firstName, lastName, email } = resumeData.personalInfo;
    return firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '';
  };
  
  const validateExperiences = () => {
    if (resumeData.experiences.length === 0) return false;
    
    return resumeData.experiences.every(exp => 
      exp.jobTitle.trim() !== '' && 
      exp.company.trim() !== '' && 
      exp.startDate.trim() !== ''
    );
  };
  
  const validateEducation = () => {
    if (resumeData.education.length === 0) return false;
    
    return resumeData.education.every(edu => 
      edu.degree.trim() !== '' && 
      edu.institution.trim() !== ''
    );
  };
  
  const validateSkills = () => {
    return resumeData.skills.length > 0;
  };
  
  return {
    validatePersonalInfo,
    validateExperiences,
    validateEducation,
    validateSkills,
    isFormValid: validatePersonalInfo() && validateExperiences() && validateEducation() && validateSkills()
  };
};

// Custom hook for smooth scrolling
export const useSmoothScroll = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return { scrollToElement };
};

// Custom hook for theme toggling
export const useThemeEffects = () => {
  useEffect(() => {
    // Add subtle background animation
    const background = document.querySelector('body');
    if (background) {
      background.classList.add('animated-bg');
    }
    
    // Add subtle particle effect
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random size
      const size = Math.random() * 5 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Random color
      const colors = ['#58A6FF', '#F657F9', '#79DAE8'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Set styles
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${opacity}`;
      particle.style.backgroundColor = color;
      
      // Add to body
      document.body.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        particle.remove();
      }, 10000);
    };
    
    // Create particles periodically
    const particleInterval = setInterval(() => {
      createParticle();
    }, 2000);
    
    return () => {
      clearInterval(particleInterval);
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);
};

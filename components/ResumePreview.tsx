'use client';

import React from 'react';
import { useResume } from '@/context/ResumeContext';
import ClassicTemplate from '@/components/templates/ClassicTemplate';
import ModernTemplate from '@/components/templates/ModernTemplate';
import MinimalistTemplate from '@/components/templates/MinimalistTemplate';
import html2pdf from 'html2pdf.js';

export const ResumePreview: React.FC = () => {
  const { resumeData } = useResume();
  const { template } = resumeData;
  
  const renderTemplate = () => {
    switch (template) {
      case 'classic':
        return <ClassicTemplate />;
      case 'modern':
        return <ModernTemplate />;
      case 'minimalist':
        return <MinimalistTemplate />;
      default:
        return <div className="text-center p-8">Please select a template</div>;
    }
  };
  
  const exportToPdf = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0.5,
      filename: `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };
  
  return (
    <div className="w-full">
      <div id="resume-preview" className="bg-white rounded-lg overflow-hidden">
        {renderTemplate()}
      </div>
      
      <div className="mt-6 flex justify-center">
        <button 
          onClick={exportToPdf}
          className="glow-button px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;

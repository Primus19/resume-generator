import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Download, ArrowLeft, Github, Linkedin } from 'lucide-react';
import type { ResumeData } from './ResumeForm';

const ResumePreview = () => {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('resumeData');
    if (data) {
      setResumeData(JSON.parse(data));
    }
  }, []);

  if (!resumeData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">No resume data found. Please create a resume first.</p>
        <button
          onClick={() => navigate('/resume-form')}
          className="mt-4 px-6 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary-dark dark:hover:opacity-90"
        >
          Create Resume
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation header - hidden in print */}
      <div className="print:hidden flex justify-between items-center p-6 bg-primary dark:bg-primary-dark text-white rounded-t-xl">
        <button
          onClick={() => navigate('/resume-form')}
          className="flex items-center gap-2 hover:text-gray-200"
        >
          <ArrowLeft size={20} />
          Edit Resume
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 hover:text-gray-200"
        >
          <Download size={20} />
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-lg print:shadow-none print:rounded-none">
        <div className="p-8 space-y-8">
          {/* Header */}
          <header className="text-center space-y-4 pb-8 border-b dark:border-gray-700">
            <h1 className="text-4xl font-bold text-primary dark:text-white">{resumeData.fullName}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              {resumeData.email && (
                <div className="flex items-center gap-2">
                  <Mail size={16} className="print:hidden" />
                  {resumeData.email}
                </div>
              )}
              {resumeData.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={16} className="print:hidden" />
                  {resumeData.phone}
                </div>
              )}
              {resumeData.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="print:hidden" />
                  {resumeData.location}
                </div>
              )}
              {resumeData.website && (
                <div className="flex items-center gap-2">
                  <Globe size={16} className="print:hidden" />
                  <a href={resumeData.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark">
                    {resumeData.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
              {resumeData.github && (
                <div className="flex items-center gap-2">
                  <Github size={16} className="print:hidden" />
                  <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark">
                    {resumeData.github.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
              {resumeData.linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="print:hidden" />
                  <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark">
                    {resumeData.linkedin.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </header>

          {/* Summary */}
          {resumeData.summary && (
            <section>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Professional Summary</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{resumeData.summary}</p>
            </section>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Experience</h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-semibold dark:text-white">{exp.position}</h3>
                    <div className="text-primary dark:text-primary-dark font-medium">{exp.company}</div>
                    <div className="text-gray-600 dark:text-gray-400">{exp.duration}</div>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {exp.bulletPoints.map((point, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && resumeData.projects[0].name && (
            <section>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Projects</h2>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold dark:text-white">{project.name}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-primary-dark hover:opacity-80 print:hidden"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {project.bulletPoints.map((point, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Education</h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-semibold dark:text-white">{edu.school}</h3>
                    <div className="text-primary dark:text-primary-dark font-medium">{edu.degree}</div>
                    <div className="text-gray-600 dark:text-gray-400">{edu.duration}</div>
                    {edu.gpa && <div className="text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && resumeData.skills[0].name && (
            <section>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Skills</h2>
              <div className="space-y-4">
                {resumeData.skills.map((skillCategory, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{skillCategory.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.bulletPoints.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark px-4 py-1 rounded-full text-sm font-medium print:bg-transparent print:border print:border-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
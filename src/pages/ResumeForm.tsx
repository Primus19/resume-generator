import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Link as LinkIcon, Github, Linkedin } from 'lucide-react';

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
    bulletPoints: string[];
  }[];
  education: {
    school: string;
    degree: string;
    duration: string;
    gpa: string;
  }[];
  skills: {
    name: string;
    bulletPoints: string[];
  }[];
  projects: {
    name: string;
    url: string;
    description: string;
    bulletPoints: string[];
  }[];
}

const initialResumeData: ResumeData = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  website: '',
  linkedin: '',
  github: '',
  summary: '',
  experience: [{ company: '', position: '', duration: '', description: '', bulletPoints: [] }],
  education: [{ school: '', degree: '', duration: '', gpa: '' }],
  skills: [{ name: '', bulletPoints: [] }],
  projects: [{ name: '', url: '', description: '', bulletPoints: [] }],
};

const ResumeForm = () => {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setResumeData({ ...resumeData, [field]: e.target.value });
  };

  const formatBulletPoints = (text: string): string[] => {
    // First, split by common bullet point characters, newlines, and other separators
    const lines = text.split(/[•\u2022\u2023\u25E6\u2043\-\n,;]+/)
      .map(line => line.trim())
      .filter(line => line.length > 0);

    // Create a map to store normalized versions of lines for comparison
    const normalizedMap = new Map<string, string>();
    
    // Normalize each line and store the original if it's unique
    lines.forEach(line => {
      const normalized = line.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      // If this normalized version doesn't exist, or if the current line is shorter
      if (!normalizedMap.has(normalized) || 
          line.length < normalizedMap.get(normalized)!.length) {
        normalizedMap.set(normalized, line);
      }
    });

    // Convert back to array and remove any remaining duplicates
    return Array.from(new Set(Array.from(normalizedMap.values())))
      .filter(line => line.length > 0)
      .map(line => line.charAt(0).toUpperCase() + line.slice(1));
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const newExperience = [...resumeData.experience];
    if (field === 'description') {
      newExperience[index] = {
        ...newExperience[index],
        description: value,
        bulletPoints: formatBulletPoints(value)
      };
    } else {
      newExperience[index] = { ...newExperience[index], [field]: value };
    }
    setResumeData({ ...resumeData, experience: newExperience });
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setResumeData({ ...resumeData, education: newEducation });
  };

  const handleSkillsChange = (index: number, field: string, value: string) => {
    const newSkills = [...resumeData.skills];
    if (field === 'description') {
      newSkills[index] = {
        ...newSkills[index],
        bulletPoints: formatBulletPoints(value)
      };
    } else {
      newSkills[index] = { ...newSkills[index], [field]: value };
    }
    setResumeData({ ...resumeData, skills: newSkills });
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const newProjects = [...resumeData.projects];
    if (field === 'description') {
      newProjects[index] = {
        ...newProjects[index],
        description: value,
        bulletPoints: formatBulletPoints(value)
      };
    } else {
      newProjects[index] = { ...newProjects[index], [field]: value };
    }
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { company: '', position: '', duration: '', description: '', bulletPoints: [] }],
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { school: '', degree: '', duration: '', gpa: '' }],
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, { name: '', bulletPoints: [] }],
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, { name: '', url: '', description: '', bulletPoints: [] }],
    });
  };

  const handlePreview = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    navigate('/preview');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                value={resumeData.fullName}
                onChange={(e) => handleInputChange(e, 'fullName')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={resumeData.email}
                onChange={(e) => handleInputChange(e, 'email')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={resumeData.phone}
                onChange={(e) => handleInputChange(e, 'phone')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="Location"
                value={resumeData.location}
                onChange={(e) => handleInputChange(e, 'location')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="url"
                placeholder="Personal Website (Optional)"
                value={resumeData.website}
                onChange={(e) => handleInputChange(e, 'website')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="url"
                placeholder="LinkedIn Profile (Optional)"
                value={resumeData.linkedin}
                onChange={(e) => handleInputChange(e, 'linkedin')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="url"
                placeholder="GitHub Profile (Optional)"
                value={resumeData.github}
                onChange={(e) => handleInputChange(e, 'github')}
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Professional Summary"
                value={resumeData.summary}
                onChange={(e) => handleInputChange(e, 'summary')}
                className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-primary dark:text-white">Work Experience</h2>
              <button
                onClick={addExperience}
                className="text-primary dark:text-white hover:text-primary-dark font-medium flex items-center gap-2"
              >
                <Briefcase size={20} />
                Add Experience
              </button>
            </div>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2020 - Present)"
                    value={exp.duration}
                    onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="col-span-2">
                  <textarea
                    placeholder="Description (Enter each achievement or responsibility on a new line, or use bullet points • or dashes -)"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                    className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent font-mono dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    style={{ whiteSpace: 'pre-wrap' }}
                  />
                  {exp.bulletPoints.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Preview:</h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                        {exp.bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-primary dark:text-white">Education</h2>
              <button
                onClick={addEducation}
                className="text-primary dark:text-white hover:text-primary-dark font-medium flex items-center gap-2"
              >
                <GraduationCap size={20} />
                Add Education
              </button>
            </div>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="School"
                    value={edu.school}
                    onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2016 - 2020)"
                    value={edu.duration}
                    onChange={(e) => handleEducationChange(index, 'duration', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="GPA (Optional)"
                    value={edu.gpa}
                    onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-primary dark:text-white">Skills</h2>
              <button
                onClick={addSkill}
                className="text-primary dark:text-white hover:text-primary-dark font-medium flex items-center gap-2"
              >
                <Award size={20} />
                Add Skill Category
              </button>
            </div>
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-4">
                <input
                  type="text"
                  placeholder="Skill Category (e.g., Programming Languages, Tools, Soft Skills)"
                  value={skill.name}
                  onChange={(e) => handleSkillsChange(index, 'name', e.target.value)}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full"
                />
                <textarea
                  placeholder="List skills (one per line, or use bullet points • or dashes -)"
                  value={skill.bulletPoints.join('\n')}
                  onChange={(e) => handleSkillsChange(index, 'description', e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent font-mono dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {skill.bulletPoints.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Preview:</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                      {skill.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-primary dark:text-white">Projects</h2>
              <button
                onClick={addProject}
                className="text-primary dark:text-white hover:text-primary-dark font-medium flex items-center gap-2"
              >
                <LinkIcon size={20} />
                Add Project
              </button>
            </div>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="url"
                    placeholder="Project URL (Optional)"
                    value={project.url}
                    onChange={(e) => handleProjectChange(index, 'url', e.target.value)}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <textarea
                  placeholder="Project Description (Enter details on new lines, or use bullet points • or dashes -)"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent font-mono dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {project.bulletPoints.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Preview:</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                      {project.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary dark:text-white">Create Your Resume</h1>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Step {currentStep} of 5
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
          <div
            className="bg-primary dark:bg-primary-dark h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        {renderStep()}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg ${
              currentStep === 1
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Previous
          </button>
          {currentStep < 5 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-6 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary-dark dark:hover:opacity-90"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handlePreview}
              className="px-6 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary-dark dark:hover:opacity-90"
            >
              Preview Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
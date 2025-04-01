import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-between">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Resume Generator</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Create stunning, professional resumes in minutes. Stand out from the crowd with our sleek designs.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Link 
            href="/create-resume" 
            className="glow-button bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-20"
          >
            Create Your Resume
          </Link>
          
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Style</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Professional Classic</h2>
              <p className="text-gray-400 mb-6">A clean, traditional template perfect for corporate and formal industries.</p>
              <div className="template-preview h-60 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 z-10">Template Preview</span>
              </div>
            </div>
            
            <div className="card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Modern Creative</h2>
              <p className="text-gray-400 mb-6">A vibrant, contemporary design ideal for creative and tech industries.</p>
              <div className="template-preview h-60 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 z-10">Template Preview</span>
              </div>
            </div>
            
            <div className="card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">Minimalist Professional</h2>
              <p className="text-gray-400 mb-6">A clean, elegant design with subtle styling for a sophisticated look.</p>
              <div className="template-preview h-60 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 z-10">Template Preview</span>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center w-full">
            <h2 className="text-3xl font-bold mb-12 gradient-text">Why Choose Our Resume Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
              <div className="glass-effect p-8 rounded-xl">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Professional Templates</h3>
                <p className="text-gray-300">Expertly designed templates that catch the eye and impress recruiters.</p>
              </div>
              
              <div className="glass-effect p-8 rounded-xl">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Lightning Fast</h3>
                <p className="text-gray-300">Create a stunning resume in minutes with our intuitive interface.</p>
              </div>
              
              <div className="glass-effect p-8 rounded-xl">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Export as PDF</h3>
                <p className="text-gray-300">Download your finished resume as a professional PDF document.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="w-full mt-24 text-center text-gray-400 pb-8">
        <p>© 2025 Resume Generator | The ultimate tool for creating professional resumes</p>
      </footer>
    </main>
  );
}

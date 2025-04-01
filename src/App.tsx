import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Home, FileText, User, Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ResumeForm from './pages/ResumeForm';
import ResumePreview from './pages/ResumePreview';
import Templates from './pages/Templates';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children, icon: Icon }: { to: string; children: React.ReactNode; icon: React.ComponentType<any> }) => (
    <Link
      to={to}
      className={`nav-link ${isActive(to) ? 'nav-link-active' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <FileText className="text-primary dark:text-white transition-transform group-hover:scale-110" size={24} />
                <span className="text-xl font-bold text-primary dark:text-white">ResumeBuilder</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink to="/" icon={Home}>Home</NavLink>
              <NavLink to="/templates" icon={FileText}>Templates</NavLink>
              <NavLink to="/resume-form" icon={User}>Create Resume</NavLink>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/" icon={Home}>Home</NavLink>
              <NavLink to="/templates" icon={FileText}>Templates</NavLink>
              <NavLink to="/resume-form" icon={User}>Create Resume</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/resume-form" element={<ResumeForm />} />
          <Route path="/preview" element={<ResumePreview />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>© 2024 Primus Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
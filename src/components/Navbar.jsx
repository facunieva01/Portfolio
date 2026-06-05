import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#040d08]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity">
          PORTFOLIO<span className="text-emerald-500">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{t.nav.about}</a>
          <a href="#projects" className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{t.nav.projects}</a>
          <a href="#contact" className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{t.nav.contact}</a>
        </div>

        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium tracking-wide transition-all cursor-pointer text-white"
        >
          <Globe size={14} className="text-emerald-400" />
          <span>{language === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/5 px-6 text-center text-xs text-neutral-500 tracking-wider font-light bg-[#040d08]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Tu Nombre. {t.footer.rights}</p>
        <p className="text-emerald-950 font-bold tracking-widest">NORDIC INTERFACE v1.0</p>
      </div>
    </footer>
  );
};

export default Footer;
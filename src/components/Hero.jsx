import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 px-6 relative overflow-hidden">
      {/* Resplandor radial esmeralda difuminado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 z-10">
        <div className="text-left">
          <span className="text-sm font-medium tracking-widest text-emerald-400 uppercase block mb-4">
            {t.hero.greeting}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
            {t.hero.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide bg-gradient-to-r from-white via-neutral-200 to-emerald-200 bg-clip-text text-transparent mb-8">
            {t.hero.subtitle}
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="px-8 py-4 rounded-full bg-emerald-600 text-black font-semibold text-sm hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all text-center">
              {t.hero.btnProjects}
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all text-center">
              {t.hero.btnContact}
            </a>
          </div>
        </div>
        
        {/* FOTO A LA DERECHA - Usando una imagen profesional del personaje del mate */}
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-lg overflow-hidden bg-neutral-900 border-4 border-emerald-950 rounded-full group">
            <img 
              src="/YOO.jpeg" 
              alt={t.hero.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Superposición esmeralda suti */}
            <div className="absolute inset-0 bg-emerald-950/30 group-hover:opacity-0 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
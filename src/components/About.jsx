import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  // Definimos los ítems sin números de año, con el texto fijo que pediste
  const timelineItems = [
    { text: "Tecnicatura en Programación" },
    { text: t.about.timeline.item3_cap }, // Esto mantiene tu texto original para el 2025
  ];

  return (
    <section id="about" className="py-32 px-6 bg-[#06150e]/50 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* TEXTO A LA IZQUIERDA */}
        <div className="text-left space-y-10">
          <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase sticky top-28">
            // {t.about.title}
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Sobre <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">mí</span>
          </h3>
          <p className="text-xl md:text-2xl text-neutral-200 font-light leading-relaxed">
            {t.about.story}
          </p>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            {t.about.goals}
          </p>
          
          {/* LÍNEA DE TIEMPO LIMPIA */}
          <div className="space-y-6 pt-10">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <p className="text-sm text-neutral-300 font-medium tracking-wide">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TU FOTO */}
        <div className="flex justify-center md:justify-end sticky top-28">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-3xl group">
            <img 
              src="public/YO.jpeg" 
              alt="Facundo Nieva"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <span className="text-xs text-white/90 font-medium tracking-wide">Rosario, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Aquí va tu estructura original de texto si la tenías */}
        <div className="text-left space-y-10">
           <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
             // {t.contact.title}
           </h2>
           <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
             Hablemos de <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">proyectos</span>
           </h3>
        </div>

        {/* Formulario con tu diseño original + conexión a Formspree */}
        <form 
          action="https://formspree.io/f/mzdqznoj" 
          method="POST"
          className="space-y-6"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            required 
            className="w-full p-4 bg-[#06150e]/50 border border-white/5 rounded-xl text-white outline-none focus:border-emerald-500 transition-colors"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            className="w-full p-4 bg-[#06150e]/50 border border-white/5 rounded-xl text-white outline-none focus:border-emerald-500 transition-colors"
          />
          <textarea 
            name="message" 
            placeholder="Mensaje" 
            required 
            rows="5"
            className="w-full p-4 bg-[#06150e]/50 border border-white/5 rounded-xl text-white outline-none focus:border-emerald-500 transition-colors"
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-4 bg-emerald-500 text-emerald-950 font-bold rounded-xl hover:bg-emerald-400 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
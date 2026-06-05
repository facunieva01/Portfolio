import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Terminal, Code } from 'lucide-react';

const Projects = () => {
  const { language } = useLanguage();

  const iconMap = {
    "Fiwo Agency": Terminal,
    "CanchaYA": Code,
    "VICKYFIT": Code,
  };

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const Icon = iconMap[project.title] || Code;

          return (
            <div
              key={project.id}
              className="group relative bg-[#06150e]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-10 space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase font-semibold tracking-wider bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Icon
                    size={36}
                    className="text-emerald-400 bg-emerald-950/50 rounded-full p-2 border border-emerald-900"
                  />
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed min-h-[100px]">
                  {language === 'es' ? project.descEs : project.descEn}
                </p>

                <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Code size={14} className="mr-2 text-emerald-400" />
                    {language === 'es' ? 'Código' : 'Code'}
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {language === 'es' ? 'Demo en Vivo' : 'Live Demo'}
                    <ArrowUpRight size={14} className="ml-1 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
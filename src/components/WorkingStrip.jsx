import React from 'react';

const WorkingStrip = () => {
  const technologies = [
    "React", "Node.js", "TypeScript", "Tailwind CSS", "Next.js", 
    "Git", "GraphQL", "PostgreSQL", "Docker", "REST APIs", "ASP.NET Core", "SQL Server"
  ];

  return (
    <div className="w-full py-8 bg-[#020805] overflow-hidden whitespace-nowrap border-b border-white/5 select-none">
      <div className="inline-block animate-marquee">
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <span key={index} className="inline-flex items-center mx-8 text-sm font-medium tracking-widest text-neutral-500 uppercase">
            {tech}
            <span className="ml-16 text-emerald-950">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkingStrip;
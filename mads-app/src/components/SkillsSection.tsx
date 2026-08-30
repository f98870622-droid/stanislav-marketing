import React from 'react';
import { SKILLS_12 } from '../data';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>05 / Профессиональный стек</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            12 ключевых навыков выпускника
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Навыки, которые трансформируют маркетолога из исполнителя в стратегического лидера.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_12.map((skill) => (
            <div
              key={skill.num}
              className="p-8 rounded-3xl bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#71717A] group-hover:text-[#D8F83A] transition-colors mb-4">
                  НАВЫК #{skill.num}
                </div>
                <h3 className="font-unbounded text-lg sm:text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                  {skill.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#52525B]">
                <span>PR-STEK</span>
                <span>PRACTICE VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

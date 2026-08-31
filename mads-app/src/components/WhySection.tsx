import React from 'react';
import { WHY_MADS_FACTS } from '../data';
import { Trophy, Globe2, Award, Zap } from 'lucide-react';

export const WhySection: React.FC = () => {
  return (
    <section
      id="why"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>15 / Институция</span>
        </div>

        {/* Mashed heading as requested: почемуmads */}
        <div className="mb-16">
          <h2 className="font-unbounded text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#F6F6F5] lowercase">
            почемуsrez
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#A1A1AA] max-w-2xl">
            Школа маркетинговых коммуникаций. Учебный лендинг для портфолио.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MADS_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="font-unbounded text-3xl sm:text-4xl font-black text-[#D8F83A] mb-3">
                  {fact.value}
                </div>
                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {fact.label}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#52525B]">
                <span>0{idx + 1}</span>
                <span>SREZ STANDARD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agencies Network Ribbon */}
        <div className="mt-12 p-8 rounded-3xl bg-[#18181C] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1">
              ГДЕ РАБОТАЮТ НАШИ ВЫПУСКНИКИ
            </div>
            <div className="font-unbounded text-lg sm:text-xl font-bold text-white">
              Nordwell · Brick & Pitch · MediaNorth · Houseform · Paid Grid
            </div>
          </div>
          <div className="px-5 py-2.5 rounded-full bg-[#24242A] text-xs font-mono text-[#1DBF98] whitespace-nowrap">
            ПАРТНЁРЫ ШКОЛЫ
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { INDUSTRY_QUOTES } from '../data';
import { Quote } from 'lucide-react';
import { PersonPhoto } from './PersonPhoto';

export const IndustrySection: React.FC = () => {
  return (
    <section
      id="industry"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>16 / Голос индустрии</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Что говорят лидеры рынка
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Оценка качества подготовки стратегов и маркетинговых директоров от руководителей топовых агентств.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRY_QUOTES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#151518] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D8F83A]/30 mb-6" />
                <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed italic mb-8 font-light">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                <PersonPhoto
                  src={item.photo}
                  alt={item.author}
                  className="w-12 h-12 rounded-full shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-unbounded text-base font-bold text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    {item.role} · <strong className="text-white font-medium">{item.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

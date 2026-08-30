import React from 'react';
import { CAREER_5 } from '../data';
import { TrendingUp, Award, Send, Users2, Sparkles } from 'lucide-react';

export const CareerSection: React.FC = () => {
  const icons = [Award, TrendingUp, Users2, Send, Sparkles];

  return (
    <section
      id="career"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>06 / Карьерный центр mads</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Трудоустройство и карьерный скачок
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Мы не просто учим теории, а напрямую соединяем выпускников с HR-директорами и руководителями агентств высшей лиги.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_5.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.num}
                className="p-8 rounded-3xl bg-[#151518] border border-white/5 hover:border-[#1DBF98]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1DBF98]/10 text-[#1DBF98] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-[#71717A] mb-2">ТРЕК #{item.num}</div>
                  <h3 className="font-unbounded text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-[#52525B]">
                  CAREER HUB · MADS NETWORK
                </div>
              </div>
            );
          })}

          {/* Special summary card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#1DBF98]/30 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#1DBF98] uppercase tracking-wider mb-3">
                БАЗА ВАКАНСИЙ
              </div>
              <h3 className="font-unbounded text-xl font-bold text-white mb-3">
                Прямой доступ к закрытому рынку
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Компании сами обращаются в mads за стратегами и маркетологами. Выпускники получают офферы еще на этапе подготовки защиты диплома.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#D8F83A] font-semibold">
              BBDO · Instinct · Slava · PepsiCo · SPLAT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

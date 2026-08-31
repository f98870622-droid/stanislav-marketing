import React from 'react';
import { TrendingUp, Users, Sparkles } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section
      id="stats"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>09 / Статистика выпускников</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Результаты в цифрах
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Реальные показатели выпускников школы srez по итогам защиты стратегий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 80% Stat */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#18181C] border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D8F83A]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-unbounded text-6xl sm:text-8xl font-black text-[#D8F83A] tracking-tighter">
                  80%
                </span>
              </div>

              <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-3">
                Трудоустройство и рост грейда
              </h3>
              
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                80% студентов курса находят новую высокооплачиваемую работу, вырастают в грейде до сеньоров/лидов или получают повышение зарплаты в течение 3 месяцев после выпуска.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#71717A]">
              <span>ПОСЛЕ ВЫПУСКА</span>
              <span>SREZ RESEARCH 2024–2026</span>
            </div>
          </div>

          {/* 15% Stat */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#18181C] border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1DBF98]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-unbounded text-6xl sm:text-8xl font-black text-[#1DBF98] tracking-tighter">
                  15%
                </span>
              </div>

              <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-3">
                Офферы прямо во время курса
              </h3>
              
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                15% студентов получают предложения о работе или повышении еще до завершения программы — благодаря внедрению практических инструментов в текущие проекты.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#71717A]">
              <span>ВО ВРЕМЯ ОБУЧЕНИЯ</span>
              <span>ПРЯМОЙ НАЙМ ИЗ ШКОЛЫ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

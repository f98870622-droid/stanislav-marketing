import React from 'react';
import { WHO_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

export const WhoSection: React.FC = () => {
  return (
    <section
      id="who"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>07 / Кому подойдет курс</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Для кого разработана программа
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Индивидуальные траектории для разных грейдов и бизнес-задач.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHO_ITEMS.map((item) => (
            <div
              key={item.num}
              className="p-8 sm:p-10 rounded-3xl bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#71717A] group-hover:text-[#D8F83A] transition-colors">
                    КАТЕГОРИЯ #{item.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-xs font-mono text-[#52525B]">
                ПРОГРАММА АДАПТИРОВАНА ПОД ВАШ ГРЕЙД
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

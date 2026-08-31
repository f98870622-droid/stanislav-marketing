import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>07 / Вопросы и ответы</span>
        </div>

        <div className="mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Частые вопросы
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Формат, свой проект, оплата. Коротко.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#18181C] border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-unbounded text-base sm:text-lg font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D8F83A]' : 'bg-[#222226]'
                    }`}
                  >
                    <ChevronDown
                      className="h-4 w-4"
                      strokeWidth={2.5}
                      color={isOpen ? '#111111' : '#ffffff'}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 text-sm sm:text-base text-[#A1A1AA] leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

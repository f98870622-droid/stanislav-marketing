import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onEnrollClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onEnrollClick }) => {
  return (
    <section
      id="cta"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-28 sm:py-36 px-6 sm:px-10 border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D8F83A]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D8F83A] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>СТАРТ ПОТОКА 24 НОЯБРЯ</span>
        </div>

        {/* Mashed heading as requested: нестесняйся */}
        <h2 className="font-unbounded text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#F6F6F5] lowercase mb-8 select-none">
          нестесняйся
        </h2>

        <p className="text-base sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-12 leading-relaxed">
          Сделайте следующий шаг в маркетинговой карьере под менторством лучших стратегов страны.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onEnrollClick}
            className="btn-magnetic w-full sm:w-auto px-10 py-5 rounded-full bg-[#D8F83A] text-black font-unbounded text-sm sm:text-base font-bold tracking-wider uppercase hover:bg-[#c9e830] transition-colors shadow-2xl flex items-center justify-center gap-3"
          >
            <span>Записаться на курс</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 text-xs font-mono text-[#71717A]">
          ОСТАЛОСЬ 18 МЕСТ НА ЖИВОЙ ПОТОК С КУРАТОРАМИ
        </div>
      </div>
    </section>
  );
};

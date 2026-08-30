import React from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

interface PriceSectionProps {
  onEnrollClick: (tariffName?: string) => void;
}

export const PriceSection: React.FC<PriceSectionProps> = ({ onEnrollClick }) => {
  return (
    <section
      id="price"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>12 / Тарифная сетка</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Инвестиции в карьеру
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Оплата единовременно со скидкой или комфортная беспроцентная рассрочка.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tariff 1 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#151518] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#71717A] uppercase">БАЗОВЫЙ ДОСТУП</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-[#A1A1AA]">САМОСТОЯТЕЛЬНО</span>
              </div>

              <h3 className="font-unbounded text-2xl font-bold text-white mb-2">
                Самостоятельное обучение
              </h3>
              <p className="text-xs text-[#A1A1AA] mb-6">
                Все 36 лекций в записи, шаблоны документов и эталонные разборы.
              </p>

              <div className="mb-6 p-5 rounded-2xl bg-[#1C1C20] border border-white/5">
                <div className="font-unbounded text-3xl font-black text-white">
                  8 769 ₽ <span className="text-xs font-mono font-normal text-[#A1A1AA]">/ мес</span>
                </div>
                <div className="text-xs text-[#71717A] mt-1 font-mono">
                  Рассрочка на 10 мес. Единый платёж: 87 690 ₽ (было 112 846 ₽)
                </div>
              </div>
            </div>

            <button
              onClick={() => onEnrollClick('Самостоятельное обучение')}
              className="btn-magnetic w-full py-4 rounded-full bg-white/10 text-white font-unbounded text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              Записаться за 8 769 ₽/мес
            </button>
          </div>

          {/* Tariff 2 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#18181C] border-2 border-[#D8F83A] flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#D8F83A] uppercase">ЖИВОЙ ПОТОК С КУРАТОРАМИ</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#D8F83A]/10 text-[#D8F83A]">18 МЕСТ</span>
              </div>

              <h3 className="font-unbounded text-2xl font-bold text-white mb-2">
                Полноценный онлайн-курс
              </h3>
              <p className="text-xs text-[#A1A1AA] mb-6">
                Мини-группы, проверка заданий, карьерный трек и финальная защита перед жюри.
              </p>

              <div className="mb-6 p-5 rounded-2xl bg-[#222226] border border-white/5">
                <div className="font-unbounded text-3xl font-black text-white">
                  17 259 ₽ <span className="text-xs font-mono font-normal text-[#A1A1AA]">/ мес</span>
                </div>
                <div className="text-xs text-[#71717A] mt-1 font-mono">
                  Рассрочка на 10 мес. Единый платёж: 172 590 ₽ (было 193 723 ₽)
                </div>
              </div>
            </div>

            <button
              onClick={() => onEnrollClick('Полноценный онлайн-курс')}
              className="btn-magnetic w-full py-4 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs font-bold uppercase tracking-wider hover:bg-[#c9e830] transition-colors"
            >
              Забронировать место за 17 259 ₽/мес
            </button>
          </div>
        </div>

        {/* Guarantees note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#151518] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#1DBF98] shrink-0" />
            <span>Официальный договор оферты, возврат средств и возможность оплаты от юридического лица.</span>
          </div>
          <span className="font-mono text-[#D8F83A] shrink-0">БЕЗ ПЕРЕПЛАТ И СКРЫТЫХ КОМИССИЙ</span>
        </div>
      </div>
    </section>
  );
};

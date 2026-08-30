import React from 'react';
import { Check, Flame, ArrowRight } from 'lucide-react';

interface FormatsSectionProps {
  onEnrollClick: (tariffName?: string) => void;
}

export const FormatsSection: React.FC<FormatsSectionProps> = ({ onEnrollClick }) => {
  return (
    <section
      id="formats"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>04 / Форматы обучения</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
              Два формата под ваши цели
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-xl">
              Выберите интенсивную работу с кураторами в живом потоке или гибкое самостоятельное обучение.
            </p>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#1C1C20] border border-white/10 text-xs font-mono text-[#D8F83A] self-start md:self-auto">
            Беспроцентная рассрочка до 12 месяцев
          </div>
        </div>

        {/* Two Tariff Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Tariff 1: Full Live Course (Flagship) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#16161A] border-2 border-[#D8F83A] relative flex flex-col justify-between shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Осталось 18 мест</span>
            </div>

            <div>
              <div className="text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-3">
                ФЛАГМАНСКИЙ ПОТОК
              </div>
              <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white mb-4">
                Полноценный онлайн-курс
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-8 leading-relaxed">
                Максимальное погружение: живые лекции, работа в мини-группе, еженедельная проверка домашних заданий кураторами, карьерный трек и финальная защита.
              </p>

              {/* Price block */}
              <div className="p-6 rounded-2xl bg-[#1F1F24] border border-white/5 mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-unbounded text-3xl sm:text-4xl font-black text-white">
                    17 259 ₽
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA]">/ месяц</span>
                  <span className="text-xs font-mono line-through text-[#71717A] ml-auto">
                    19 372 ₽/мес
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[#A1A1AA] border-t border-white/10 pt-3">
                  <span>Полная стоимость:</span>
                  <span className="font-mono font-semibold text-white">
                    172 590 ₽ <span className="line-through text-[#71717A] text-[11px]">193 723 ₽</span>
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 text-sm text-[#D4D4D8] mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>36 практических онлайн-занятий и созвонов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Работа в мини-группе над брифом (учебным или своим)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Персональный разбор ДЗ и обратная связь от кураторов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Индивидуальная карьерная консультация с HR</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Защита стратегии перед жюри и рассылка портфолио в агентства</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onEnrollClick('Полноценный онлайн-курс')}
              className="btn-magnetic w-full py-4 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#c9e830] transition-colors flex items-center justify-center gap-2"
            >
              <span>Выбрать живой курс</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tariff 2: Self-paced */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141417] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#71717A] uppercase tracking-widest mb-3">
                ГИБКИЙ ТЕМП
              </div>
              <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white mb-4">
                Самостоятельное обучение
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-8 leading-relaxed">
                Доступ ко всем видеозаписям лекций, материалам и эталонным разборам домашних заданий для изучения в комфортном для вас ритме.
              </p>

              {/* Price block */}
              <div className="p-6 rounded-2xl bg-[#1B1B1F] border border-white/5 mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-unbounded text-3xl sm:text-4xl font-black text-white">
                    8 769 ₽
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA]">/ месяц</span>
                  <span className="text-xs font-mono line-through text-[#71717A] ml-auto">
                    11 284 ₽/мес
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[#A1A1AA] border-t border-white/10 pt-3">
                  <span>Полная стоимость:</span>
                  <span className="font-mono font-semibold text-white">
                    87 690 ₽ <span className="line-through text-[#71717A] text-[11px]">112 846 ₽</span>
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 text-sm text-[#D4D4D8] mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Записи всех 36 лекций и мастер-классов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Полный комплект фреймворков и шаблонов документов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Самопроверка по эталонным видеоразборам экспертов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Доступ к материалам на 12 месяцев</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <span className="w-4 h-4 text-center shrink-0 mt-0.5">—</span>
                  <span className="line-through">Без кураторской проверки и живой защиты</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onEnrollClick('Самостоятельное обучение')}
              className="btn-magnetic w-full py-4 rounded-full bg-white/10 text-white font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <span>Выбрать тариф</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

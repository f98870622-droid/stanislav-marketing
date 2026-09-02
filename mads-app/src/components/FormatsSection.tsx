import React from 'react';
import { Check, Flame, ArrowRight } from 'lucide-react';

interface FormatsSectionProps {
  onEnrollClick: (tariffName?: string) => void;
}

function InstallmentPrice({
  monthly,
  monthlyWas,
  total,
  totalWas,
}: {
  monthly: string;
  monthlyWas: string;
  total: string;
  totalWas: string;
}) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#1F1F24] border border-white/5 mb-8">
      <p className="text-sm text-[#A1A1AA] mb-3">Не надо доставать всю сумму сразу · 10 платежей</p>

      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <p className="font-unbounded text-[1.75rem] sm:text-[2.15rem] font-black text-white leading-none tracking-tight whitespace-nowrap">
          {monthly}
          <span className="ml-2 align-baseline text-lg sm:text-xl font-semibold text-[#C4C4CC]">
            /мес
          </span>
        </p>
        <p className="text-base sm:text-lg text-[#8A8A93] line-through whitespace-nowrap leading-none pb-0.5">
          {monthlyWas}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-sm sm:text-base text-[#C4C4CC]">Полная стоимость</span>
        <p className="text-base sm:text-lg whitespace-nowrap leading-snug">
          <span className="font-semibold text-white">{total}</span>
          <span className="ml-2.5 text-[#8A8A93] line-through">{totalWas}</span>
        </p>
      </div>
    </div>
  );
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
          <span>03 / Форматы обучения</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
              Два формата: с куратором или самостоятельно
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-xl">
              Живой поток — если домашку сами не дотаскиваете. Записи — если дисциплина уже есть, нужен каркас.
            </p>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#1C1C20] border border-white/10 text-xs font-mono text-[#D8F83A] self-start md:self-auto">
            Беспроцентная рассрочка, 10 платежей
          </div>
        </div>

        {/* Two Tariff Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Tariff 1: Full Live Course (Flagship) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#16161A] border-2 border-[#D8F83A] relative flex flex-col justify-between shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Живой поток · мест мало</span>
            </div>

            <div>
              <div className="text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-3">
                ФЛАГМАНСКИЙ ПОТОК
              </div>
              <h3 className="font-unbounded text-2xl sm:text-[1.7rem] lg:text-3xl font-bold text-white mb-4 text-balance">
                Полноценный онлайн{'\u2011'}курс
              </h3>
              <p className="text-base text-[#C4C4CC] mb-8 leading-relaxed">
                Вас будут дёргать. Домашку смотрят. На защите не получится сказать «я не успел». Для тех, кому нужен человек с той стороны экрана.
              </p>

              <InstallmentPrice
                monthly={'16\u00A0490\u00A0₽'}
                monthlyWas={'18\u00A0990\u00A0₽'}
                total={'164\u00A0900\u00A0₽'}
                totalWas={'189\u00A0900\u00A0₽'}
              />

              {/* Features */}
              <ul className="space-y-3.5 text-base text-[#D4D4D8] mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Нельзя тихо отстать: созвоны и разбор работ в календаре</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Группа 4–5 человек — прятаться за «командой» не выйдет</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Куратор пишет, где слайд врёт, а не «в целом ок»</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>HR смотрит резюме как наниматель, не как друг</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Защита вслух. После этого планёрка в офисе уже не страшная</span>
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
              <p className="text-base text-[#C4C4CC] mb-8 leading-relaxed">
                Если вы и так смотрите лекции по ночам — не переплачивайте за созвоны. Каркас, записи, эталоны. Дисциплина на вас.
              </p>

              <InstallmentPrice
                monthly={'8\u00A0490\u00A0₽'}
                monthlyWas={'10\u00A0490\u00A0₽'}
                total={'84\u00A0900\u00A0₽'}
                totalWas={'104\u00A0900\u00A0₽'}
              />

              {/* Features */}
              <ul className="space-y-3.5 text-base text-[#D4D4D8] mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>36 лекций: смотрите, когда дети спят — каркас тот же</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Шаблоны, которые открываете на планёрке, а не «для галочки»</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Эталон разбора: сравните свою работу с тем, как режет эксперт</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Год доступа — успеете пересмотреть, когда задача всплывёт на работе</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <span className="w-4 h-4 text-center shrink-0 mt-0.5">—</span>
                  <span className="line-through">Куратор не смотрит ДЗ и защиты вслух нет</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onEnrollClick('Самостоятельное обучение')}
              className="btn-magnetic w-full py-4 rounded-full bg-white/10 text-white font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <span>Взять записи</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Users, UserCheck, Briefcase, CheckCircle2 } from 'lucide-react';

export const PracticeSection: React.FC = () => {
  return (
    <section
      id="practice"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>02 / Практика и трекинг</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Как устроена работа над проектом
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Мини-группы, распределение ролей, живые презентации и детальный еженедельный фидбек от кураторов.
          </p>
        </div>

        {/* Two contrasting cards: Новички vs Опытные */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Novices Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#151518] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-[#27272A] text-xs font-mono text-[#D4D4D8]">
                  ОПЫТ ДО 3 ЛЕТ
                </span>
                <Users className="w-6 h-6 text-[#1DBF98]" />
              </div>

              <h3 className="font-unbounded text-2xl font-bold text-white mb-4">
                Новичкам и джуниорам
              </h3>
              
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                Вы работаете над учебным проектом в мини-группе из 4–5 человек, примеряя на себя ключевые роли (исследователь, стратег, медиапланер, креативный директор).
              </p>

              <ul className="space-y-3.5 text-sm text-[#D4D4D8]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Реалистичный бриф от известного бренда с полным набором вводных</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Распределение зон ответственности и командный штурм</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Регулярные созвоны с куратором для разбора ошибок</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Готовый командный кейс международного уровня в портфолио</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#71717A] font-mono">
              ФОРМАТ: МИНИ-ГРУППЫ + РОЛИ
            </div>
          </div>

          {/* Experienced Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#18181C] border border-[#D8F83A]/30 hover:border-[#D8F83A]/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8F83A]/5 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-[#2A2A2E] text-xs font-mono text-[#D8F83A]">
                  ОПЫТ 3+ ГОДА
                </span>
                <Briefcase className="w-6 h-6 text-[#D8F83A]" />
              </div>

              <h3 className="font-unbounded text-2xl font-bold text-white mb-4">
                Опытным специалистам и бизнесу
              </h3>
              
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                Возможность решать задачу своего реального продукта или компании под надзором топовых директоров по маркетингу.
              </p>

              <ul className="space-y-3.5 text-sm text-[#D4D4D8]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Работа над стратегией вашего бизнеса на протяжении всех 4 месяцев</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Условие: предоставление вводных данных за первые 2 недели после старта</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Если данные не готовы — бесшовный переход на сильный учебный бриф</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F83A] shrink-0 mt-1" />
                  <span>Индивидуальные стратегические ревью и валидация решений</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#D8F83A] font-mono">
              ФОРМАТ: СВОЙ ПРОЕКТ ИЛИ УЧЕБНЫЙ БРИФ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

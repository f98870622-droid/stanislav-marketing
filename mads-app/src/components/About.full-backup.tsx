import React from 'react';
import { Award } from 'lucide-react';

/** Backup of About before the short landing. Restore: copy over AboutSection.tsx */
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>01 / О курсе</span>
        </div>
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-[#F6F6F5]">
            О маркетинге создано сотни курсов и книг — в обилии шума <span className="text-[#A1A1AA]">легко потерять суть.</span>
          </h2>
          <p className="mt-8 text-base sm:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            Одни программы слишком поверхностны и лишены практических задач, другие — узко заточены под один канал и не дают архитектурного понимания бизнеса.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
            <p>
              Этот курс создан для того, чтобы <strong className="text-white font-semibold">понимать и строить маркетинг в компании с нуля до масштабирования</strong> и осознанно управлять каждым вложенным рублем.
            </p>
            <p>
              Мы ведем вас по последовательному пути сквозь все ключевые инструменты: от расчета юнит-экономики и емкости рынка до креативного сторителлинга, аудио-айдентики и перформанс-закупок.
            </p>
            <p>
              Каждый модуль отрабатывается на учебных брифах под присмотром кураторов из Northwell, Helix, MediaNorth и Brick & Pitch.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#151518] border border-white/5">
                <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1">Выбор брифа</div>
                <div className="text-sm font-semibold text-white">Свой реальный проект или учебный бриф от бренда</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#151518] border border-white/5">
                <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1">Финальный артефакт</div>
                <div className="text-sm font-semibold text-white">Готовая рабочая стратегия + эталонный темплейт</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/10]">
              <img src="./photos/workshop.jpg" alt="Стратегическая сессия на курсе" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#18181C] to-[#121215] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#1DBF98]/10 text-[#1DBF98] flex items-center justify-center mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-unbounded text-xl font-bold text-white mb-3">Результат курса</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Полноценная маркетинговая стратегия, которую вы защищаете перед коллегией топ-экспертов и HR-директорами ведущих агентств.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#D4D4D8]">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A]"></span>Темплейт стратегического документа индустриального уровня</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A]"></span>Подготовка к собеседованиям и карьерный трек</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A]"></span>Рассылка вашего портфолио в топовые агентства</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A]"></span>Закрытые нетворкинг-ивенты с директорами по маркетингу</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

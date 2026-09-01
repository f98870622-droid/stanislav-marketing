import React from 'react';
import { Users, Briefcase, CheckCircle2 } from 'lucide-react';

export const PracticeSection: React.FC = () => {
  return (
    <section
      id="practice"
      className="relative bg-[#F6F6F5] text-[#121214] py-24 sm:py-32 px-6 sm:px-10 border-t border-black/5"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#121214_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#3F3F46] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>02 / Практика и трекинг</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121214]">
            Сертификат на собеседовании не открывают. Открывают кейс.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            Четыре месяца вы делаете одну работу до конца. Куратор бьёт по слабым местам каждую неделю — пока документ не перестанет разваливаться.
          </p>
        </div>

        {/* Two contrasting cards: Новички vs Опытные */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white border border-black/10 hover:border-black/20 transition-all duration-300 flex flex-col overflow-hidden shadow-sm">
            <img
              src="./photos/team.jpg"
              alt="Работа в мини-группе"
              className="w-full h-44 sm:h-52 object-cover"
              loading="lazy"
            />
            <div className="p-8 sm:p-10 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-[#E8E8E6] text-xs font-mono text-[#3F3F46]">
                  ОПЫТ ДО 3 ЛЕТ
                </span>
                <Users className="w-6 h-6 text-[#1DBF98]" />
              </div>
              <h3 className="font-unbounded text-2xl font-bold text-[#121214] mb-4">
                Нет своего бренда — соберём учебный
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6">
                Иначе на интервью снова «я проходил модули». Здесь выносите командный кейс: роли, бриф, защита.
              </p>
              <ul className="space-y-3.5 text-sm text-[#3F3F46] mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Бриф с цифрами, не «придумайте что-нибудь креативное»</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Понятно, кто за исследование, кто за медиа, кто за презентацию</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>Разбор ошибок каждую неделю — не «молодец» в конце модуля</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF98] shrink-0 mt-1" />
                  <span>В портфолио появляется работа, которую можно рассказать за 5 минут</span>
                </li>
              </ul>
              <div className="mt-auto pt-6 border-t border-black/10 text-xs text-[#71717A] font-mono">
                ФОРМАТ: МИНИ-ГРУППЫ + РОЛИ
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border-2 border-[#121214] hover:border-[#121214] transition-all duration-300 flex flex-col overflow-hidden shadow-sm">
            <img
              src="./photos/office.jpg"
              alt="Работа над своим проектом"
              className="w-full h-44 sm:h-52 object-cover"
              loading="lazy"
            />
            <div className="p-8 sm:p-10 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-[#121214] text-xs font-mono text-[#D8F83A]">
                  ОПЫТ 3+ ГОДА
                </span>
                <Briefcase className="w-6 h-6 text-[#D8F83A]" />
              </div>
              <h3 className="font-unbounded text-2xl font-bold text-[#121214] mb-4">
                Продукт уже горит — несите его
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6">
                Хватит чинить чужие брифы, пока свой маркетинг живёт в табличке «потом». Четыре месяца — ваша задача под надзором.
              </p>
              <ul className="space-y-3.5 text-sm text-[#3F3F46] mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#121214] shrink-0 mt-1" />
                  <span>Стратегия вашего бизнеса, не абстрактный «рынок снеков»</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#121214] shrink-0 mt-1" />
                  <span>Условие: предоставление вводных данных за первые 2 недели после старта</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#121214] shrink-0 mt-1" />
                  <span>Нет цифр за две недели — берёте учебный бриф, время не сгорает</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#121214] shrink-0 mt-1" />
                  <span>Ревью решений до защиты, а не сюрприз в день питча</span>
                </li>
              </ul>
              <div className="mt-auto pt-6 border-t border-black/10 text-xs text-[#3F3F46] font-mono">
                ФОРМАТ: СВОЙ ПРОЕКТ ИЛИ УЧЕБНЫЙ БРИФ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

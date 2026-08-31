import React from 'react';
import { Award } from 'lucide-react';
import { WHO_ITEMS } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-20 sm:py-24 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto text-left">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>01 / О курсе</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-unbounded text-2xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#F6F6F5]">
              Собственник спрашивает «зачем этот бюджет» — и в голове пусто.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Таргет, контент, агентство — по отдельности. На планёрке это не складывается в выручку. Курс собирает работу в одну стратегию, которую можно положить на стол собственнику.
            </p>
            <p className="mt-4 text-sm text-[#71717A] leading-relaxed">
              Рассчитан на тех, кто уже ведёт каналы in-house или у клиента — не на полный ноль в маркетинге.
            </p>
            <p className="mt-5 text-base text-[#D4D4D8] leading-relaxed">
              Вы учитесь не «ещё одному каналу», а отвечать: кому продаём, почему они купят, сколько это стоит и что будет, если срезать бюджет. Каждый блок закрывается работой, не конспектом. В конце — документ и защита. Не сертификат в PDF.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#151518] border border-white/5">
                <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1">
                  Если нет своего бренда
                </div>
                <div className="text-sm font-semibold text-white leading-snug">
                  Дадим учебный бриф — будет что показать на собеседовании
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#151518] border border-white/5">
                <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1">
                  Если продукт уже есть
                </div>
                <div className="text-sm font-semibold text-white leading-snug">
                  Четыре месяца пилите свою задачу, не чужой кейс из учебника
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10]">
              <img
                src="./photos/workshop.jpg"
                alt="Стратегическая сессия на курсе"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#151518] border border-white/10 flex-1">
              <div className="w-10 h-10 rounded-xl bg-[#1DBF98]/10 text-[#1DBF98] flex items-center justify-center mb-5">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-unbounded text-xl font-bold text-white mb-2">С чем выходите</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">
                Не «я прошёл курс», а файл, который можно открыть на планёрке.
              </p>
              <ul className="space-y-2.5 text-sm text-[#D4D4D8]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A] shrink-0 mt-1.5"></span>
                  Стратегия с цифрами, не мудборд
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A] shrink-0 mt-1.5"></span>
                  Репетиция защиты вслух
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A] shrink-0 mt-1.5"></span>
                  Кейс в портфолио, а не список вебинаров
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A] shrink-0 mt-1.5"></span>
                  Еженедельный разбор слайдов куратором
                </li>
              </ul>
            </div>
          </div>

          <div id="who" className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHO_ITEMS.map((item) => (
              <div key={item.num} className="p-5 rounded-2xl bg-[#151518] border border-white/5 h-full">
                <div className="text-xs font-mono text-[#71717A] mb-2">{item.num}</div>
                <h3 className="font-unbounded text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

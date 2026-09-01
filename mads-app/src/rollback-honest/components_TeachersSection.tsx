import React, { useState } from 'react';
import { AUTHOR_DATA, CURATORS_DATA, SPEAKERS_DATA } from '../data';
import { BookOpen, ChevronRight, X } from 'lucide-react';
import { PersonPhoto } from './PersonPhoto';

export const TeachersSection: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <section
      id="teachers"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>10 / Преподаватели и кураторы</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Не звёзды с обложки. Люди, которые режут слабые слайды.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Вам нужен тот, кто скажет «это не стратегия», а не тот, кого приятно тегать в LinkedIn.
          </p>
        </div>

        {/* Author Showcase */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#18181C] to-[#121215] border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Avatar & Badges */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="relative w-40 h-52 sm:w-48 sm:h-60 rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <PersonPhoto
                  src={AUTHOR_DATA.photo}
                  alt={AUTHOR_DATA.name}
                  className="w-full h-full"
                />
              </div>

              <span className="px-3.5 py-1 rounded-full bg-[#D8F83A]/10 text-[#D8F83A] text-xs font-mono mb-2">
                АВТОР КУРСА
              </span>
              <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white">
                {AUTHOR_DATA.name}
              </h3>
              <p className="text-xs font-mono text-[#A1A1AA] mt-1">
                {AUTHOR_DATA.role}
              </p>

              <button
                onClick={() => setIsLetterOpen(true)}
                className="btn-magnetic mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#D8F83A]" />
                <span>Читать письмо автора</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Col: Detailed Bio facts */}
            <div className="lg:col-span-8 space-y-3.5">
              <h4 className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
                ОПЫТ И ДОСТИЖЕНИЯ:
              </h4>
              <ul className="space-y-3 text-sm text-[#D4D4D8]">
                {AUTHOR_DATA.bio.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A] shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Curators Section */}
        <div className="mb-16">
          <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>Кураторы групп</span>
            <span className="text-xs font-mono text-[#71717A] font-normal">Еженедельный фидбек и созвоны</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CURATORS_DATA.map((curator, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#151518] border border-white/5 hover:border-white/15 transition-all flex items-start gap-5"
              >
                <PersonPhoto
                  src={curator.avatar!}
                  alt={curator.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0"
                />
                <div>
                  <span className="text-[11px] font-mono text-[#D8F83A] uppercase tracking-wider">
                    {curator.tag}
                  </span>
                  <h4 className="font-unbounded text-lg sm:text-xl font-bold text-white mt-1 mb-1">
                    {curator.name}
                  </h4>
                  <p className="text-xs text-[#A1A1AA]">
                    {curator.role} · <strong className="text-white font-medium">{curator.company}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers Grid */}
        <div>
          <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>Приглашенные спикеры</span>
            <span className="text-xs font-mono text-[#71717A] font-normal">Шесть из одиннадцати — остальные в программе</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKERS_DATA.slice(0, 6).map((speaker, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#151518] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <PersonPhoto
                    src={speaker.avatar!}
                    alt={speaker.name}
                    className="w-full aspect-[4/5] rounded-xl mb-4"
                  />
                  <span className="text-[10px] font-mono text-[#1DBF98] uppercase tracking-wider px-2 py-0.5 rounded bg-[#1DBF98]/10 inline-block mb-3">
                    {speaker.tag}
                  </span>
                  <h4 className="font-unbounded text-base font-bold text-white mb-1">
                    {speaker.name}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {speaker.role} · <strong className="text-[#D4D4D8]">{speaker.company}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author Letter Modal */}
      {isLetterOpen && (
        <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#151518] border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative my-auto">
            <button
              onClick={() => setIsLetterOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-2">
              {AUTHOR_DATA.letter.date}
            </div>
            <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white mb-6">
              {AUTHOR_DATA.letter.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#D4D4D8] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {AUTHOR_DATA.letter.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <PersonPhoto
                  src={AUTHOR_DATA.photo}
                  alt={AUTHOR_DATA.name}
                  className="w-12 h-12 rounded-full shrink-0"
                />
                <div>
                <div className="font-unbounded font-bold text-white">{AUTHOR_DATA.name}</div>
                  <div className="text-xs text-[#71717A]">Директор по маркетингу и стратегии</div>
                </div>
              </div>
              <button
                onClick={() => setIsLetterOpen(false)}
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-unbounded font-bold uppercase tracking-wider"
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

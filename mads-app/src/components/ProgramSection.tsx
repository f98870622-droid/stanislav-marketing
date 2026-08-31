import React, { useLayoutEffect, useRef, useState } from 'react';
import { LESSONS_DATA } from '../data';
import { Calendar, Clock, User, Search } from 'lucide-react';
import type { Lesson } from '../types';

const PREVIEW_MOBILE = 2;
const PREVIEW_DESKTOP = 5;

export const ProgramSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollBackAfterCollapse = useRef(false);

  useLayoutEffect(() => {
    if (isExpanded || !scrollBackAfterCollapse.current) return;
    scrollBackAfterCollapse.current = false;
    const el = sectionRef.current;
    if (!el) return;
    const headerOffset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }, [isExpanded]);

  const filterTypes = ['Все', 'Лекция', 'Практика', 'Созвон', 'Карьера', 'Защита'];

  const filteredLessons = LESSONS_DATA.filter((lesson) => {
    const matchesFilter = activeFilter === 'Все' || lesson.type === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      lesson.title.toLowerCase().includes(q) ||
      lesson.speaker.toLowerCase().includes(q) ||
      lesson.date.toLowerCase().includes(q) ||
      lesson.module.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const previewSource = isExpanded ? filteredLessons : LESSONS_DATA.slice(0, PREVIEW_DESKTOP);
  const hiddenMobile = LESSONS_DATA.length - PREVIEW_MOBILE;
  const hiddenDesktop = LESSONS_DATA.length - PREVIEW_DESKTOP;

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Вебинар':
        return 'bg-[#D8F83A]/10 text-[#D8F83A] border-[#D8F83A]/20';
      case 'Лекция':
        return 'bg-[#1DBF98]/10 text-[#1DBF98] border-[#1DBF98]/20';
      case 'Практика':
        return 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/20';
      case 'Созвон':
        return 'bg-[#A855F7]/10 text-[#C084FC] border-[#A855F7]/20';
      case 'Карьера':
        return 'bg-[#EC4899]/10 text-[#F472B6] border-[#EC4899]/20';
      case 'Защита':
        return 'bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/30';
      default:
        return 'bg-white/10 text-white border-white/10';
    }
  };

  const renderLesson = (lesson: Lesson) => (
    <div
      className="p-5 sm:p-6 rounded-2xl bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
    >
      <div className="flex items-start md:items-center gap-4 min-w-0">
        <span className="font-mono text-xs text-[#52525B] group-hover:text-[#D8F83A] transition-colors w-8 shrink-0">
          #{lesson.id < 10 ? `0${lesson.id}` : lesson.id}
        </span>
        <div className="flex items-center gap-2 min-w-[130px] font-mono text-xs shrink-0">
          <span className="text-[#D8F83A] font-semibold">{lesson.date}</span>
          <span className="text-[#71717A]">·</span>
          <span className="text-[#A1A1AA] flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {lesson.time}
          </span>
        </div>
        <div className="space-y-1 min-w-0">
          <div className="text-sm sm:text-base font-semibold text-white">{lesson.title}</div>
          <div className="text-[11px] font-mono text-[#71717A]">{lesson.module}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
        <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA]">
          <User className="w-3.5 h-3.5 text-[#71717A]" />
          <span>{lesson.speaker}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-[11px] font-mono border ${getBadgeColor(lesson.type)}`}>
          {lesson.type}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="program"
      ref={sectionRef}
      className="relative scroll-mt-28 bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>05 / Учебный план</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
              36 занятий, 24 ноября — 20 марта
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-2xl">
              Ниже — старт потока: знакомство, стратегия, первый созвон. Остальное откроется по кнопке, страница не превратится в простыню.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] bg-[#18181C] px-4 py-2 rounded-full border border-white/5">
            <Calendar className="w-4 h-4 text-[#D8F83A]" />
            <span>4 МЕСЯЦА ИНТЕНСИВА</span>
          </div>
        </div>

        {isExpanded && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#18181C] p-4 rounded-2xl border border-white/5">
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {filterTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveFilter(type)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeFilter === type
                      ? 'bg-white text-black font-semibold'
                      : 'bg-[#222226] text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Тема или спикер"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#202025] text-base text-white placeholder-[#71717A] border border-white/5 focus:outline-none focus:border-[#D8F83A]"
              />
            </div>
          </div>
        )}

        <div className="space-y-3">
          {previewSource.map((lesson, i) => (
            <div
              key={lesson.id}
              className={!isExpanded && i >= PREVIEW_MOBILE ? 'hidden md:block' : undefined}
            >
              {renderLesson(lesson)}
            </div>
          ))}
        </div>

        {isExpanded && filteredLessons.length === 0 && (
          <p className="mt-6 text-sm text-[#71717A]">Ничего не нашлось. Сбросьте фильтр или поиск.</p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          {!isExpanded ? (
            <button
              type="button"
              aria-expanded={false}
              onClick={() => setIsExpanded(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#c9e830] transition-colors"
            >
              Показать ещё{' '}
              <span className="md:hidden">{hiddenMobile}</span>
              <span className="hidden md:inline">{hiddenDesktop}</span>{' '}
              занятий
            </button>
          ) : (
            <button
              type="button"
              aria-expanded={true}
              onClick={() => {
                scrollBackAfterCollapse.current = true;
                setActiveFilter('Все');
                setSearchQuery('');
                setIsExpanded(false);
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Свернуть{' '}
              <span className="md:hidden">до двух</span>
              <span className="hidden md:inline">до пяти</span>
            </button>
          )}
          {!isExpanded && (
            <span className="text-xs text-[#71717A] sm:ml-1">Лекции, практика, созвоны и защита — в полном списке</span>
          )}
        </div>
      </div>
    </section>
  );
};

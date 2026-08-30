import React, { useState } from 'react';
import { LESSONS_DATA } from '../data';
import { Calendar, Clock, User, Sparkles, Filter, Search } from 'lucide-react';

export const ProgramSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTypes = ['Все', 'Лекция', 'Практика', 'Созвон', 'Карьера', 'Защита'];

  const filteredLessons迷 = LESSONS_DATA.filter((lesson) => {
    const matchesFilter = activeFilter === 'Все' || lesson.type === activeFilter;
    const matchesSearch持 =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.module.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch持;
  });

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

  return (
    <section
      id="program"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>11 / Учебный план</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
              Программа: 36 занятий
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-2xl">
              24 ноября — 20 марта. 1 непрерывный сквозной раздел от понимания рынка до финальной защиты стратегии.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] bg-[#18181C] px-4 py-2 rounded-full border border-white/5">
            <Calendar className="w-4 h-4 text-[#D8F83A]" />
            <span>4 МЕСЯЦА ИНТЕНСИВА</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#18181C] p-4 rounded-2xl border border-white/5">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {filterTypes.map((type) => (
              <button
                key={type}
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
              type="text"
              placeholder="Поиск по теме или спикеру..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#202025] text-xs text-white placeholder-[#71717A] border border-white/5 focus:outline-none focus:border-[#D8F83A]"
            />
          </div>
        </div>

        {/* 36 Lessons List */}
        <div className="space-y-3">
          {filteredLessons迷.map((lesson) => (
            <div
              key={lesson.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start md:items-center gap-4">
                {/* Lesson ID / Number */}
                <span className="font-mono text-xs text-[#52525B] group-hover:text-[#D8F83A] transition-colors w-8">
                  #{lesson.id < 10 ? `0${lesson.id}` : lesson.id}
                </span>

                {/* Date & Time */}
                <div className="flex items-center gap-2 min-w-[130px] font-mono text-xs">
                  <span className="text-[#D8F83A] font-semibold">{lesson.date}</span>
                  <span className="text-[#71717A]">·</span>
                  <span className="text-[#A1A1AA] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lesson.time}
                  </span>
                </div>

                {/* Lesson Title & Module */}
                <div className="space-y-1">
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:translate-x-1 transition-transform">
                    {lesson.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#71717A]">
                    {lesson.module}
                  </div>
                </div>
              </div>

              {/* Speaker & Type Badge */}
              <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA]">
                  <User className="w-3.5 h-3.5 text-[#71717A]" />
                  <span>{lesson.speaker}</span>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-mono border ${getBadgeColor(
                    lesson.type
                  )}`}
                >
                  {lesson.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

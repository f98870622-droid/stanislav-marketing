import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onEnrollClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnrollClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'О курсе', href: '#about' },
    { label: 'Практика', href: '#practice' },
    { label: 'Форматы и цены', href: '#formats' },
    { label: 'Навыки', href: '#skills' },
    { label: 'Карьера', href: '#career' },
    { label: 'Преподаватели', href: '#teachers' },
    { label: 'Программа (36 уроков)', href: '#program' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Почему mads', href: '#why' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="topbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F6F6F5]/90 dark:bg-[#0E0E10]/90 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/5'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <a
              href="../index.html"
              className="shrink-0 text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#71717A] hover:text-[#121214] dark:hover:text-[#F6F6F5] transition-colors"
            >
              Станислав
            </a>
            <a
              id="logo"
              href="#hero"
              className="font-unbounded text-2xl sm:text-3xl font-black tracking-tighter text-[#121214] dark:text-[#F6F6F5] transition-transform duration-300 hover:scale-105"
              aria-label="mads school"
            >
              mads
            </a>
          </div>

          {/* Top-right TWO PILL BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              id="knopka-zapisatsya"
              onClick={onEnrollClick}
              className="btn-magnetic group relative inline-flex h-10 sm:h-11 items-center justify-center gap-1 px-3 sm:px-7 rounded-full bg-[#EAEAEA] hover:bg-[#DFDFDF] dark:bg-[#222226] dark:hover:bg-[#2A2A30] text-[#121214] dark:text-[#F6F6F5] text-[11px] sm:text-sm font-semibold tracking-wide sm:tracking-wider uppercase whitespace-nowrap transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>Записаться</span>
              <span aria-hidden="true">+</span>
            </button>

            <button
              id="knopka-menu"
              onClick={() => setIsMenuOpen(true)}
              className="btn-magnetic group relative inline-flex h-10 sm:h-11 items-center gap-2 px-3 sm:px-7 rounded-full bg-[#121214] hover:bg-[#222226] dark:bg-[#F6F6F5] dark:hover:bg-[#EAEAEA] text-[#F6F6F5] dark:text-[#121214] text-[11px] sm:text-sm font-bold tracking-wide sm:tracking-wider uppercase whitespace-nowrap transition-all duration-300 shadow-md"
              aria-label="Открыть меню"
            >
              <span>Меню</span>
              <div className="w-5 h-5 shrink-0 rounded-full bg-[#2A2A2E] dark:bg-[#D4D4D8] flex items-center justify-center gap-[3px] group-hover:rotate-90 transition-transform duration-300">
                <span className="w-1 h-1 rounded-full bg-white dark:bg-black"></span>
                <span className="w-1 h-1 rounded-full bg-white dark:bg-black"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-[#0E0E10] text-[#F6F6F5] flex flex-col justify-between p-6 sm:p-12 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="../index.html" className="text-xs font-semibold tracking-widest uppercase text-[#A1A1AA] hover:text-white transition-colors">
            ← Станислав
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity p-2"
          >
            <span>ЗАКРЫТЬ</span>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto max-w-5xl">
          <nav className="flex flex-col space-y-2 sm:space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-unbounded text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#A1A1AA] hover:text-white hover:translate-x-3 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-xs text-[#52525B] font-mono">0{idx + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col justify-between space-y-8 md:pl-12 md:border-l border-white/10">
            <div>
              <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest mb-2">Ближайший поток</p>
              <p className="font-unbounded text-2xl font-bold text-[#F6F6F5]">24 ноября — 20 марта</p>
              <p className="text-sm text-[#A1A1AA] mt-2">36 практических занятий · Онлайн · Защита перед жюри</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full py-4 rounded-full bg-white text-black font-unbounded text-sm font-bold tracking-wider uppercase hover:bg-[#EAEAEA] transition-colors flex items-center justify-center gap-2"
              >
                Записаться на курс <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-[#71717A]">Осталось 18 мест на живой поток</p>
            </div>

            <div className="text-xs text-[#71717A] space-y-1 font-mono">
              <p>+7 (495) 150-75-66</p>
              <p>you@madscourses.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-[#71717A] pt-6 border-t border-white/10 font-mono">
          <p>© 2026 mads school. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Telegram</a>
            <a href="https://vk.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">VK</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
};

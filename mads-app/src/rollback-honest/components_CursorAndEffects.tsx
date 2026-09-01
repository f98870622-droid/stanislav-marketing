import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const CursorAndEffects: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showGoUp, setShowGoUp] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [preloaderCounter, setPreloaderCounter] = useState(0);

  // Preloader counter effect with safe timeout fallback
  useEffect(() => {
    const interval = setInterval(() => {
      setPreloaderCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPreloaderDone(true), 250);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 45);

    // Guaranteed fallback timeout
    const fallbackTimeout = setTimeout(() => {
      setPreloaderDone(true);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Mouse cursor & scroll tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setShowGoUp(winScroll > 600);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('btn-magnetic')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Cinematic Preloader */}
      {!preloaderDone && (
        <div
          id="preloader"
          className="fixed inset-0 z-[99999] bg-[#0E0E10] text-[#F6F6F5] flex flex-col justify-between p-8 sm:p-12 transition-opacity duration-700 select-none"
        >
          <div className="flex justify-between items-center text-xs font-mono text-[#71717A]">
            <span>SREZ · КУРС МАРКЕТИНГА 2026</span>
            <span>СТАРТ 24 НОЯБРЯ</span>
          </div>

          <div className="text-center my-auto">
            <div className="font-unbounded text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
              srez
            </div>
            <div className="font-mono text-xs sm:text-sm text-[#D8F83A] uppercase tracking-widest">
              от стратегии до рекламной кампании
            </div>
          </div>

          <div className="flex justify-between items-end border-t border-white/10 pt-4">
            <span className="text-xs font-mono text-[#71717A]">LOADING EXPERIENCE</span>
            <span className="font-unbounded text-2xl sm:text-3xl font-bold text-white">
              {Math.min(preloaderCounter, 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Sticky Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent pointer-events-none">
        <div
          className="h-full bg-[#D8F83A] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Custom Desktop Difference Cursor */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          transform: `translate3d(${cursorPos.x - (isHovered ? 24 : 10)}px, ${
            cursorPos.y - (isHovered ? 24 : 10)
          }px, 0)`,
          width: isHovered ? '48px' : '20px',
          height: isHovered ? '48px' : '20px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          opacity: cursorPos.x === -100 ? 0 : 0.9,
        }}
      ></div>

      {/* Floating Go-Up Button */}
      {showGoUp && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#18181C] border border-white/10 text-white hover:text-black hover:bg-[#D8F83A] transition-all duration-300 flex items-center justify-center shadow-2xl group"
          aria-label="Наверх"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const CursorAndEffects: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setShowGoUp(winScroll > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent pointer-events-none">
        <div
          className="h-full bg-[#D8F83A] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {showGoUp && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#D8F83A] shadow-lg hover:bg-[#c9e830]"
          aria-label="Наверх"
          style={{ isolation: 'isolate', mixBlendMode: 'normal' }}
        >
          <ArrowUp className="h-5 w-5 text-[#111111]" strokeWidth={2.4} />
        </button>
      )}
    </>
  );
};

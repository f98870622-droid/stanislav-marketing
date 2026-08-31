import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const CursorAndEffects: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let raf = 0;
    let shown = false;

    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const max = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      bar.style.transform = `scaleX(${p})`;

      const next = y > 600;
      if (next !== shown) {
        shown = next;
        setShowGoUp(next);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] pointer-events-none overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-full origin-left bg-[#D8F83A]"
          style={{ transform: 'scaleX(0)', willChange: 'transform' }}
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

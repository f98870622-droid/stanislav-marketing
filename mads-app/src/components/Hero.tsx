import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowDown, Sparkles, X } from 'lucide-react';
import { SPEAKERS_DATA } from '../data';
import { PersonPhoto } from './PersonPhoto';

interface HeroProps {
  onEnrollClick: () => void;
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnrollClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize from -1 to 1
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isVideoModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isVideoModalOpen]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#F6F6F5] text-[#121214] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-10 overflow-hidden select-none"
    >
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#121214_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Top Meta Chips */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 z-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E8E8E6] text-[#27272A] flex items-center gap-1.5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DBF98] animate-pulse"></span>
            когда <strong className="font-semibold text-black">24 ноября</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#E8E8E6] text-[#27272A] tracking-wide">
            срок <strong className="font-semibold text-black">4 месяца</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#E8E8E6] text-[#27272A] tracking-wide">
            формат <strong className="font-semibold text-black">онлайн</strong>
          </span>
        </div>

        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#52525B] hover:text-black transition-colors"
        >
          <span className="relative w-14 h-10 rounded-lg overflow-hidden shrink-0 ring-1 ring-black/10">
            <img src="./photos/teaser.jpg" alt="" className="w-full h-full object-cover" />
            <span className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <Play className="w-3 h-3 fill-white text-white ml-0.5" />
            </span>
          </span>
          <span>Тизер (макет)</span>
        </button>
      </div>

      {/* Main Hero Centerpiece: Giant word + Overlapping 3D Megaphone */}
      <div className="relative max-w-7xl mx-auto w-full my-auto py-10 sm:py-16 flex flex-col items-end justify-center">
        {/* Giant word 'маркетинг' sitting slightly to the right */}
        <div className="relative w-full text-right pr-2 sm:pr-8 md:pr-12">
          <h1
            id="slovo-marketing"
            className="font-unbounded font-black tracking-[-0.07em] text-[#121214] leading-[0.82] text-[18vw] sm:text-[16vw] md:text-[14.5vw] lg:text-[13.5vw] lowercase select-none transition-transform duration-500 will-change-transform"
          >
            маркетинг
          </h1>

          {/* Over the word: Photoreal 3D Megaphone Object overlapping the text */}
          <div
            id="rupor"
            style={{
              transform: `translate3d(${mousePos.x * 24}px, ${mousePos.y * 20}px, 0px) rotate(${mousePos.x * 4}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="absolute -top-12 sm:-top-20 md:-top-28 right-[2%] sm:right-[5%] md:right-[10%] w-[38vw] max-w-[460px] min-w-[200px] aspect-square pointer-events-none z-20 will-change-transform filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
          >
            {/* SVG/Canvas render of the futuristic teal & graphite megaphone */}
            <div className="relative w-full h-full">
              <svg viewBox="0 0 500 500" className="w-full h-full transform scale-105 rotate-[-8deg]">
                <defs>
                  {/* Gradients */}
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1DBF98" />
                    <stop offset="35%" stopColor="#0E8A6D" />
                    <stop offset="70%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>

                  <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#2DD4BF" />
                    <stop offset="45%" stopColor="#14B8A6" />
                    <stop offset="85%" stopColor="#0F766E" />
                    <stop offset="100%" stopColor="#134E4A" />
                  </linearGradient>

                  <linearGradient id="metalRim" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="30%" stopColor="#94A3B8" />
                    <stop offset="70%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>

                  <linearGradient id="glowG" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D8F83A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1DBF98" stopOpacity="0" />
                  </linearGradient>

                  <filter id="glassShine" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dx="4" dy="6" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.4" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient glow circle */}
                <ellipse cx="260" cy="270" rx="190" ry="140" fill="url(#glowG)" opacity="0.15" />

                {/* Handle & Grip */}
                <path
                  d="M 210 270 L 160 410 C 155 425 168 438 185 435 L 225 425 C 238 422 245 410 248 395 L 270 280 Z"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="3"
                />
                {/* Grip grooves */}
                <line x1="175" y1="340" x2="235" y2="330" stroke="#0F172A" strokeWidth="4" />
                <line x1="180" y1="365" x2="230" y2="355" stroke="#0F172A" strokeWidth="4" />
                <line x1="185" y1="390" x2="225" y2="380" stroke="#0F172A" strokeWidth="4" />

                {/* Back Cylinder Housing */}
                <ellipse cx="160" cy="200" rx="42" ry="75" fill="#0F172A" />
                <path d="M 160 125 L 250 145 L 250 255 L 160 275 Z" fill="url(#bodyGrad)" />
                <ellipse cx="250" cy="200" rx="30" ry="55" fill="#134E4A" />

                {/* Main Conical Bell (Teal gloss) */}
                <path
                  d="M 240 150 L 400 90 L 415 310 L 240 250 Z"
                  fill="url(#coneGrad)"
                  filter="url(#glassShine)"
                />

                {/* Highlight stripe */}
                <path
                  d="M 242 165 L 398 115 L 400 135 L 242 180 Z"
                  fill="white"
                  opacity="0.3"
                />

                {/* Front Chrome Rim */}
                <ellipse cx="405" cy="200" rx="35" ry="110" fill="#090D16" />
                <ellipse cx="405" cy="200" rx="33" ry="106" fill="none" stroke="url(#metalRim)" strokeWidth="9" />

                {/* Center Core Speaker Node */}
                <ellipse cx="385" cy="200" rx="16" ry="38" fill="#1E293B" />
                <ellipse cx="388" cy="200" rx="10" ry="24" fill="#1DBF98" />
                <circle cx="390" cy="198" r="4" fill="#D8F83A" />

                {/* Top Trigger & Accents */}
                <rect x="235" y="120" width="35" height="15" rx="4" fill="#F8FAFC" opacity="0.9" />
                <circle cx="210" cy="180" r="6" fill="#D8F83A" />
              </svg>
            </div>
          </div>
        </div>

        {/* Under the giant word, left: Tagline + Description */}
        <div className="w-full mt-6 sm:mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p
              id="slogan"
              className="font-unbounded text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-[#121214] leading-tight"
            >
              связать каналы <br className="hidden sm:inline" />
              <span className="text-[#71717A] font-medium">с деньгами компании.</span>
            </p>
            <p className="text-sm sm:text-base text-[#52525B] mt-4 max-w-lg leading-relaxed font-normal">
              Учебный лендинг курса: стратегия, защита бюджета перед собственником, один кейс за четыре месяца. Имена и компании на странице выдуманы.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="flex items-center">
              {SPEAKERS_DATA.slice(0, 5).map((person) => (
                <PersonPhoto
                  key={person.name}
                  src={person.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full ring-2 ring-[#F6F6F5] -ml-2 first:ml-0"
                  fit="cover"
                />
              ))}
              <span className="ml-3 text-xs text-[#52525B]">
                Учебные роли спикеров
              </span>
            </div>
            <button
              onClick={onEnrollClick}
              className="btn-magnetic w-full sm:w-auto px-8 py-4 rounded-full bg-[#121214] text-[#F6F6F5] font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#27272A] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D8F83A]" />
              <span>Оставить заявку</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar: small gray Scroll on bottom-left + Duration badge */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-black/5 z-10">
        <a
          id="scroll"
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#71717A] hover:text-black uppercase tracking-widest transition-colors"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>Scroll</span>
        </a>

        <div className="text-xs font-mono text-[#71717A] text-right">
          <span>24 НОЯБРЯ — 20 МАРТА · 36 ЗАНЯТИЙ</span>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Тизер курса"
        >
          <div
            className="bg-[#121214] border border-white/10 rounded-2xl max-w-3xl w-full px-4 pt-2.5 pb-4 sm:px-5 sm:pt-3 sm:pb-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-1.5">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-xl overflow-hidden relative border border-white/5">
              <img src="./photos/teaser.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 sm:p-8 text-center">
                <svg
                  className="teaser-play"
                  viewBox="0 0 64 64"
                  width={64}
                  height={64}
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.22)" />
                  <path
                    d="M27 23.5v17L45 32Z"
                    fill="#D8F83A"
                    stroke="#D8F83A"
                    strokeWidth={10}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <h4 className="font-unbounded text-base sm:text-lg text-white font-bold">
                  Видео в макете нет
                </h4>
                <p className="text-xs text-[#E4E4E7] max-w-md mx-auto">
                  Здесь был бы тизер. Это учебный лендинг — ролик не подключён.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

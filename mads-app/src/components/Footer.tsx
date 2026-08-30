import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#09090B] text-[#F6F6F5] pt-20 pb-12 px-6 sm:px-10 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Logo & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="font-unbounded text-3xl font-black tracking-tighter text-white inline-block">
              mads
            </a>
            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Школа креативных и маркетинговых коммуникаций. Обучаем практиков, создающих будущее брендов с 2013 года.
            </p>
            <div className="pt-2 text-xs font-mono text-[#71717A]">
              13 ЛЕТ ОБРАЗОВАНИЯ В РЕКЛАМЕ И СТРАТЕГИИ
            </div>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-[#D8F83A] uppercase tracking-wider mb-2">
              КОНТАКТЫ
            </div>
            <p className="text-lg sm:text-xl font-unbounded font-bold text-white">
              <a href="tel:+74951507566" className="hover:text-[#D8F83A] transition-colors">
                +7 (495) 150-75-66
              </a>
            </p>
            <p className="text-sm text-[#A1A1AA] font-mono">
              <a href="mailto:you@madscourses.com" className="hover:text-white transition-colors">
                you@madscourses.com
              </a>
            </p>
            <p className="text-xs text-[#71717A] pt-1">
              Москва, Берсеневский пер., 2, стр. 1
            </p>
          </div>

          {/* Socials & Networks */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#D8F83A] uppercase tracking-wider mb-2">
              СОЦСЕТИ И МЕССЕНДЖЕРЫ
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#18181C] hover:bg-white/20 text-xs font-mono text-[#D4D4D8] transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#18181C] hover:bg-white/20 text-xs font-mono text-[#D4D4D8] transition-colors"
              >
                VK
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#18181C] hover:bg-white/20 text-xs font-mono text-[#D4D4D8] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#18181C] hover:bg-white/20 text-xs font-mono text-[#D4D4D8] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="#max"
                className="px-3.5 py-1.5 rounded-full bg-[#18181C] hover:bg-white/20 text-xs font-mono text-[#D4D4D8] transition-colors"
              >
                MAX
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal + Go Up */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A] font-mono">
          <div>
            © 2013–2026 mads school. Все права защищены.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#terms" className="hover:text-white transition-colors">Договор оферты</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <button
            id="go-up"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>НАВЕРХ</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

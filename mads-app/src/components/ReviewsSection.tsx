import React from 'react';
import { REVIEWS_DATA } from '../data';
import { PersonPhoto } from './PersonPhoto';

export const ReviewsSection: React.FC = () => {
  const messages = REVIEWS_DATA.slice(0, 2);

  return (
    <section
      id="reviews"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
            <span>06 / Чат потока</span>
          </div>
          <h2 className="font-unbounded text-2xl sm:text-4xl font-bold tracking-tight text-[#F6F6F5] text-balance">
            После защиты пишут сюда, не в форму «отзыв»
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed max-w-md">
            Кураторский чат, ноябрьский поток. Так обычно и выглядит: коротко, без галочек «рекомендую курс».
          </p>
        </div>

        <div className="lg:col-span-7 min-w-0">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#161618] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-white/10 bg-[#1C1C20]">
              <div className="w-9 h-9 rounded-full bg-[#D8F83A] text-black flex items-center justify-center font-unbounded text-xs font-bold shrink-0">
                s
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">Поток · ноябрь 2026</p>
                <p className="text-[11px] text-[#71717A]">24 участника · кураторы в чате</p>
              </div>
            </div>

            <div className="px-4 sm:px-5 py-5 space-y-6">
              {messages.map((review) => (
                <article key={review.name} className="flex items-start gap-2.5">
                  <PersonPhoto
                    src={review.photo}
                    alt=""
                    fit="cover"
                    className="w-9 h-9 rounded-full shrink-0 mt-0.5"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0 mb-1">
                      <span className="text-[13px] font-semibold text-white">{review.name}</span>
                      <span className="text-[11px] text-[#71717A]">{review.when}</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-md bg-[#222226] px-3.5 py-2.5 max-w-full">
                      <p className="text-[15px] leading-relaxed text-[#E4E4E7] font-normal">
                        {review.text}
                      </p>
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#52525B]">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

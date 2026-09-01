import React from 'react';
import { REVIEWS_DATA } from '../data';
import { Quote, Star } from 'lucide-react';
import { PersonPhoto } from './PersonPhoto';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="relative bg-[#F6F6F5] text-[#121214] py-24 sm:py-32 px-6 sm:px-10 border-t border-black/5"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#121214_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#3F3F46] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>14 / Отзывы выпускников</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121214]">
            После курса на планёрке уже не мямлят
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            Не «спасибо за знания» — что изменилось в разговоре с начальством и в портфолио.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.slice(0, 2).map((review, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 hover:border-black/20 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8F83A] text-[#D8F83A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-black/15" />
                </div>

                <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed mb-8">
                  «{review.text}»
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 flex items-center gap-3">
                <PersonPhoto
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-unbounded text-base font-bold text-[#121214]">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#52525B] mt-0.5">
                    {review.role} · <strong className="text-[#121214] font-medium">{review.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { REVIEWS_DATA } from '../data';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>14 / Отзывы выпускников</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-unbounded text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
            Что говорят студенты
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Реальные истории специалистов, внедривших методологию курса в крупнейших компаниях.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#151518] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8F83A] text-[#D8F83A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#71717A]/40" />
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed mb-8">
                  «{review.text}»
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-unbounded text-base font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    {review.role} · <strong className="text-white font-medium">{review.company}</strong>
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#71717A]">
                  GRADUATE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

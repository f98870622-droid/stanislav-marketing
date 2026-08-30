import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'СТРАТЕГИЯ',
    'БРЕНД',
    'МЕДИА',
    'КРЕАТИВ',
    'КАРЬЕРА',
    'ROI & TAM',
    'STORYTELLING',
    'MULTISENSORY',
  ];

  return (
    <div className="w-full overflow-hidden bg-[#0E0E10] text-[#D8F83A] py-3.5 border-y border-white/5 select-none">
      <div className="flex w-max animate-marquee space-x-8 font-unbounded text-xs sm:text-sm font-bold uppercase tracking-widest opacity-85">
        {[...Array(6)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center space-x-8">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-white transition-colors">{item}</span>
                <span className="text-white/30 text-[10px]">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

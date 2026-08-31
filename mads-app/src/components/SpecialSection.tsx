import React from 'react';
import { Globe2, Zap, Layers, MessageSquareCode } from 'lucide-react';

export const SpecialSection: React.FC = () => {
  const highlights = [
    {
      icon: Globe2,
      title: '15+ лет практики',
      subtitle: 'Локальный и международный опыт',
      desc: 'Авторы и лекторы применяют методы на учебных брифах: локальный рынок и экспорт без привязки к чужим офисам.'
    },
    {
      icon: Layers,
      title: 'Живая экспертиза',
      subtitle: 'Корпорации, мейджоры, стартапы',
      desc: 'Лекции и разборы от практиков Northwell Foods, Helix Consumer, MediaNorth, Houseform, Waveform Audio и Hireline.'
    },
    {
      icon: Zap,
      title: 'Плотность знаний',
      subtitle: 'Концентрированный опыт',
      desc: 'Никакой воды и устаревших парадигм: современные фреймворки, нейромаркетинг, RTB-закупки и мультисенсорика.'
    },
    {
      icon: MessageSquareCode,
      title: 'Обратная связь',
      subtitle: 'Фидбек от лидеров индустрии',
      desc: 'Вы получаете персональную критику от людей, которые создают крупнейшие рекламные кампании в стране.'
    }
  ];

  return (
    <section
      id="special"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>03 / Преимущества</span>
        </div>

        {/* Mashed heading as requested: чтоособенного? */}
        <div className="mb-16">
          <h2 className="font-unbounded text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#F6F6F5] lowercase">
            чтоособенного?
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#A1A1AA] max-w-2xl">
            Фундаментальный подход лидеров индустрии, помноженный на персональное менторство.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#D8F83A]/10 text-white group-hover:text-[#D8F83A] flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-unbounded text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#52525B]">
                  <span>0{idx + 1}</span>
                  <span>SREZ SPEC</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

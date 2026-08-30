import React, { useState } from 'react';
import { Gift, CheckCircle2, ArrowRight } from 'lucide-react';

export const BonusSection: React.FC = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    friendName: '',
    email: '',
    telegram: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.yourName && formData.friendName && (formData.email || formData.telegram)) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="bonus"
      className="relative bg-[#0E0E10] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>08 / Реферальная программа</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D8F83A]/10 border border-[#D8F83A]/20 text-[#D8F83A] text-xs font-mono mb-6">
              <Gift className="w-4 h-4" />
              <span>БОНУС ЗА РЕКОМЕНДАЦИЮ</span>
            </div>

            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5] leading-tight mb-6">
              Рекомендуйте mads и получите <span className="text-[#D8F83A]">5 000 ₽</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-6">
              Если ваш коллега или друг запишется на курс по вашей рекомендации, мы перечислим вам 5 000 ₽ или начислим их в качестве депозита на любые программы школы mads.
            </p>

            <ul className="space-y-3 text-sm text-[#D4D4D8]">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A]"></span>
                Без ограничений по количеству приглашенных друзей
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8F83A]"></span>
                Друг также получает персональную скидку на обучение
              </li>
            </ul>
          </div>

          {/* Referral Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#16161A] border border-white/10 relative">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#1DBF98]/20 text-[#1DBF98] mx-auto flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-unbounded text-2xl font-bold text-white mb-3">
                    Рекомендация принята!
                  </h3>
                  <p className="text-sm text-[#A1A1AA] max-w-md mx-auto mb-6">
                    Спасибо! Мы свяжемся с вашим другом и закрепим за вами бонус 5 000 ₽ сразу после его записи.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ yourName: '', friendName: '', email: '', telegram: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                  >
                    Рекомендовать ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-unbounded text-xl font-bold text-white mb-6">
                    Заполнить рекомендацию
                  </h3>

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                      Ваше имя и фамилия *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Алексей Смирнов"
                      value={formData.yourName}
                      onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#202025] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                      Кого вы рекомендуете (Имя) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Мария Иванова"
                      value={formData.friendName}
                      onChange={(e) => setFormData({ ...formData, friendName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#202025] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Email друга *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="friend@mail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#202025] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Telegram друга
                      </label>
                      <input
                        type="text"
                        placeholder="@username"
                        value={formData.telegram}
                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#202025] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic w-full mt-4 py-4 rounded-full bg-white text-black font-unbounded text-xs font-bold tracking-wider uppercase hover:bg-[#EAEAEA] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Отправить рекомендацию</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

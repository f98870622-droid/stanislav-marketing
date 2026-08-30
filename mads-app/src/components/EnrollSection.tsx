import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface EnrollSectionProps {
  selectedTariff?: string;
}

export const EnrollSection: React.FC<EnrollSectionProps> = ({ selectedTariff = 'Полноценный онлайн-курс' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    telegram: '',
    tariff: selectedTariff,
    agreeTerms: false,
    agreeAds: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.phone && formData.agreeTerms) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="enroll"
      className="relative bg-[#121214] text-[#F6F6F5] py-24 sm:py-32 px-6 sm:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#D8F83A] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>13 / Запись на курс</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F6F5]">
              Забронировать место или получить консультацию
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              Оставьте заявку, чтобы зафиксировать стоимость со скидкой и забронировать одно из 18 свободных мест на живом потоке. Координатор свяжется с вами, ответит на все вопросы и поможет оформить рассрочку.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#18181C] border border-white/5">
                <div className="text-xs font-mono text-[#D8F83A] uppercase">СТАРТ ПОТОКА</div>
                <div className="text-sm font-semibold text-white mt-0.5">24 ноября 2026</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#18181C] border border-white/5">
                <div className="text-xs font-mono text-[#D8F83A] uppercase">ФОРМАТ ОПЛАТЫ</div>
                <div className="text-sm font-semibold text-white mt-0.5">Рассрочка без процентов или единый платеж</div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#18181C] border border-white/10 relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1DBF98]/20 text-[#1DBF98] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white">
                    Заявка успешно принята!
                  </h3>
                  <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                    Спасибо, {formData.firstName}! Куратор курса свяжется с вами в Telegram или по телефону в течение 15 минут в рабочее время.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          telegram: '',
                          tariff: selectedTariff,
                          agreeTerms: false,
                          agreeAds: false,
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white uppercase tracking-wider transition-colors"
                    >
                      Отправить ещё заявку
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-unbounded text-xl font-bold text-white mb-6">
                    Анкета участника
                  </h3>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Имя *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Алина"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#222226] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        placeholder="Смирнова"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#222226] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#222226] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#222226] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Telegram */}
                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                      Никнейм в Telegram
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      value={formData.telegram}
                      onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#222226] border border-white/10 text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                    />
                  </div>

                  {/* Tariff Select */}
                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                      Выбранный тариф
                    </label>
                    <select
                      value={formData.tariff}
                      onChange={(e) => setFormData({ ...formData, tariff: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#222226] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D8F83A] transition-colors"
                    >
                      <option value="Полноценный онлайн-курс">Полноценный онлайн-курс — 17 259 ₽/мес</option>
                      <option value="Самостоятельное обучение">Самостоятельное обучение — 8 769 ₽/мес</option>
                    </select>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#A1A1AA]">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="mt-0.5 rounded bg-[#222226] border-white/20 text-[#D8F83A] focus:ring-0"
                      />
                      <span>
                        Я согласен на <a href="#privacy" className="underline hover:text-white">обработку персональных данных</a> и принимаю условия оферты *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#71717A]">
                      <input
                        type="checkbox"
                        checked={formData.agreeAds}
                        onChange={(e) => setFormData({ ...formData, agreeAds: e.target.checked })}
                        className="mt-0.5 rounded bg-[#222226] border-white/20 text-[#D8F83A] focus:ring-0"
                      />
                      <span>Согласен получать анонсы закрытых лекций и материалы школы mads (опционально)</span>
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-magnetic w-full mt-4 py-4 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#c9e830] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Забронировать место</span>
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

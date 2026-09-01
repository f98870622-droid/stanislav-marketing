import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const TARIFFS = [
  {
    id: 'Полноценный онлайн-курс',
    title: 'Полноценный онлайн-курс',
    price: '17 259 ₽ / мес',
    note: 'Живой поток · 10 платежей',
  },
  {
    id: 'Самостоятельное обучение',
    title: 'Самостоятельное обучение',
    price: '8 769 ₽ / мес',
    note: 'В записи · 10 платежей',
  },
] as const;

function formatRuPhone(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('8')) digits = `7${digits.slice(1)}`;
  if (digits.length > 0 && digits[0] !== '7') digits = `7${digits}`;
  digits = digits.slice(0, 11);
  if (!digits) return '';

  const rest = digits.slice(1);
  let out = '+7';
  if (!rest) return out;

  out += ` (${rest.slice(0, 3)}`;
  if (rest.length < 3) return out;
  out += ')';
  if (rest.length === 3) return out;

  out += ` ${rest.slice(3, 6)}`;
  if (rest.length <= 6) return out;
  out += `-${rest.slice(6, 8)}`;
  if (rest.length <= 8) return out;
  out += `-${rest.slice(8, 10)}`;
  return out;
}

function capitalizeName(value: string): string {
  return value
    .split(/([\s-]+)/)
    .map((part) => {
      if (!part || /^[\s-]+$/.test(part)) return part;
      return (
        part.charAt(0).toLocaleUpperCase('ru-RU') +
        part.slice(1).toLocaleLowerCase('ru-RU')
      );
    })
    .join('');
}

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

  useEffect(() => {
    setFormData((prev) => ({ ...prev, tariff: selectedTariff }));
  }, [selectedTariff]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.phone && formData.agreeTerms) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="enroll"
      className="relative bg-[#F6F6F5] text-[#121214] py-24 sm:py-32 px-6 sm:px-10 border-t border-black/5"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#121214_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#3F3F46] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D8F83A]"></span>
          <span>13 / Запись на курс</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121214]">
              Пока думаете — бюджет уже урезали
            </h2>
            <p className="text-base text-[#52525B] leading-relaxed">
              Заявка бесплатная: деньги не списываем. Координатор ответит, какой тариф вам, и как разложить оплату, если 170 тысяч сразу не поднимаются. Живой поток маленький — решаете вы, не «успеть за 18 мест».
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-black/10">
                <div className="text-xs font-mono text-[#71717A] uppercase">СТАРТ ПОТОКА</div>
                <div className="text-sm font-semibold text-[#121214] mt-0.5">24 ноября 2026</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-black/10">
                <div className="text-xs font-mono text-[#71717A] uppercase">ФОРМАТ ОПЛАТЫ</div>
                <div className="text-sm font-semibold text-[#121214] mt-0.5">Рассрочка без процентов или единый платеж</div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 relative shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1DBF98]/15 text-[#0F766E] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-[#121214]">
                    Заявка ушла. Сейчас ничего не спишется.
                  </h3>
                  <p className="text-sm text-[#52525B] max-w-md mx-auto leading-relaxed">
                    {formData.firstName}, напишем в Telegram или позвоним в рабочее время. Без автосписания и без «вы уже записаны».
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
                      className="px-6 py-2.5 rounded-full bg-[#E8E8E6] hover:bg-[#DFDFDF] text-xs font-mono text-[#121214] uppercase tracking-wider transition-colors"
                    >
                      Отправить ещё заявку
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-unbounded text-xl font-bold text-[#121214] mb-6">
                    Куда писать — и какой тариф смотреть
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
                        placeholder="Кира"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: capitalizeName(e.target.value) })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F5] border border-black/10 text-[#121214] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#121214] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-1.5">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        placeholder="Смирнова"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: capitalizeName(e.target.value) })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F5] border border-black/10 text-[#121214] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#121214] transition-colors"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F5] border border-black/10 text-[#121214] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#121214] transition-colors"
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
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={18}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: formatRuPhone(e.target.value) })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F5] border border-black/10 text-[#121214] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#121214] transition-colors"
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
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F5] border border-black/10 text-[#121214] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#121214] transition-colors"
                    />
                  </div>

                  <fieldset>
                    <legend className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
                      Выбранный тариф
                    </legend>
                    <div className="grid grid-cols-1 gap-2">
                      {TARIFFS.map((tariff) => {
                        const active = formData.tariff === tariff.id;
                        return (
                          <label
                            key={tariff.id}
                            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3.5 rounded-xl cursor-pointer border transition-colors ${
                              active
                                ? 'bg-[#F6F6F5] border-[#121214]'
                                : 'bg-[#F6F6F5] border-black/10 hover:border-black/25'
                            }`}
                          >
                            <input
                              type="radio"
                              name="tariff"
                              value={tariff.id}
                              checked={active}
                              onChange={() => setFormData({ ...formData, tariff: tariff.id })}
                              className="sr-only"
                            />
                            <span className="min-w-0">
                              <span className="block text-[15px] font-medium text-[#121214] leading-snug">
                                {tariff.title}
                              </span>
                              <span className="block text-sm text-[#52525B] mt-0.5">{tariff.note}</span>
                            </span>
                            <span className="sm:shrink-0 text-[15px] sm:text-base font-semibold text-[#121214] whitespace-nowrap">
                              {tariff.price}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#52525B]">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="mt-0.5 rounded bg-white border-black/20 text-[#121214] focus:ring-0"
                      />
                      <span>
                        Я согласен на <a href="./legal.html" className="underline hover:text-black">обработку персональных данных</a> и принимаю <a href="./legal.html#terms" className="underline hover:text-black">условия оферты</a> *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#71717A]">
                      <input
                        type="checkbox"
                        checked={formData.agreeAds}
                        onChange={(e) => setFormData({ ...formData, agreeAds: e.target.checked })}
                        className="mt-0.5 rounded bg-white border-black/20 text-[#121214] focus:ring-0"
                      />
                      <span>Согласен получать анонсы закрытых лекций и материалы школы srez (опционально)</span>
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-magnetic w-full mt-4 py-4 rounded-full bg-[#D8F83A] text-black font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#c9e830] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Оставить заявку без оплаты</span>
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

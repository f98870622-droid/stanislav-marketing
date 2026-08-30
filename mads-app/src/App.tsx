import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { PracticeSection } from './components/PracticeSection';
import { SpecialSection } from './components/SpecialSection';
import { FormatsSection } from './components/FormatsSection';
import { SkillsSection } from './components/SkillsSection';
import { CareerSection } from './components/CareerSection';
import { WhoSection } from './components/WhoSection';
import { BonusSection } from './components/BonusSection';
import { StatsSection } from './components/StatsSection';
import { TeachersSection } from './components/TeachersSection';
import { ProgramSection } from './components/ProgramSection';
import { PriceSection } from './components/PriceSection';
import { EnrollSection } from './components/EnrollSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhySection } from './components/WhySection';
import { IndustrySection } from './components/IndustrySection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CursorAndEffects } from './components/CursorAndEffects';

export default function App() {
  const [selectedTariff, setSelectedTariff] = useState<string>('Полноценный онлайн-курс');

  const handleEnrollClick = (tariffName?: string) => {
    if (tariffName) {
      setSelectedTariff(tariffName);
    }
    const enrollElement = document.getElementById('enroll');
    if (enrollElement) {
      enrollElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F5] dark:bg-[#0E0E10] text-[#121214] dark:text-[#F6F6F5] relative selection:bg-[#D8F83A] selection:text-black">
      {/* Preloader, Progress Bar, Custom Cursor, Go-up */}
      <CursorAndEffects />

      {/* 1) HEADER #topbar */}
      <Navbar onEnrollClick={() => handleEnrollClick()} />

      {/* 2) HERO #hero */}
      <Hero onEnrollClick={() => handleEnrollClick()} />

      {/* Elegant Ticker Divider */}
      <MarqueeTicker />

      {/* 3) ABOUT #about */}
      <AboutSection />

      {/* 4) PRACTICE #practice */}
      <PracticeSection />

      {/* 5) SPECIAL #special */}
      <SpecialSection />

      {/* 6) FORMATS #formats */}
      <FormatsSection onEnrollClick={handleEnrollClick} />

      {/* 7) SKILLS #skills */}
      <SkillsSection />

      {/* 8) CAREER #career */}
      <CareerSection />

      {/* 9) WHO #who */}
      <WhoSection />

      {/* 10) BONUS #bonus */}
      <BonusSection />

      {/* 11) STATS #stats */}
      <StatsSection />

      {/* 12) TEACHERS #teachers */}
      <TeachersSection />

      {/* 13) PROGRAM #program */}
      <ProgramSection />

      {/* 14) PRICE #price */}
      <PriceSection onEnrollClick={handleEnrollClick} />

      {/* 15) ENROLL #enroll */}
      <EnrollSection selectedTariff={selectedTariff} />

      {/* 16) REVIEWS #reviews */}
      <ReviewsSection />

      {/* 17) WHY #why */}
      <WhySection />

      {/* 18) INDUSTRY #industry */}
      <IndustrySection />

      {/* 19) FAQ #faq */}
      <FaqSection />

      {/* 20) CTA #cta */}
      <CtaSection onEnrollClick={() => handleEnrollClick()} />

      {/* 21) FOOTER #footer */}
      <Footer />
    </div>
  );
}

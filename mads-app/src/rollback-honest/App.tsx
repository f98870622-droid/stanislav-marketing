import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeSection } from './components/PracticeSection';
import { FormatsSection } from './components/FormatsSection';
import { TeachersSection } from './components/TeachersSection';
import { ProgramSection } from './components/ProgramSection';
import { EnrollSection } from './components/EnrollSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
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
    <div className="min-h-screen bg-[#F6F6F5] text-[#121214] relative selection:bg-[#D8F83A] selection:text-black">
      <CursorAndEffects />
      <Navbar onEnrollClick={() => handleEnrollClick()} />
      <Hero onEnrollClick={() => handleEnrollClick()} />
      <AboutSection />
      <PracticeSection />
      <FormatsSection onEnrollClick={handleEnrollClick} />
      <TeachersSection />
      <ProgramSection />
      <ReviewsSection />
      <FaqSection />
      <EnrollSection selectedTariff={selectedTariff} />
      <Footer />
    </div>
  );
}

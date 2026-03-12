'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import MeteoDash from '@/components/MeteoDash';
import EnergyTrading from '@/components/EnergyTrading';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<string>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved language preference
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
  }, []);

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-bg-color">
        <div className="w-16 h-16 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg-color text-text-primary selection:bg-accent-primary/30 selection:text-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <MeteoDash language={language} />
      <EnergyTrading language={language} />
      <Experience language={language} />
      <Education language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}

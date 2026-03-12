'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface HeaderProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = language === 'en' ? en : tr;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'tr' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-b from-navy to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-vibrant rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IS</span>
            </div>
            <span
              className={`font-bold text-xl transition-colors ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Ilayda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-navy hover:text-orange-vibrant'
                    : 'text-white hover:text-orange-vibrant'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                scrolled
                  ? 'bg-orange-vibrant text-white hover:bg-orange-vibrant/90'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-orange-vibrant transition-colors block py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

'use client';

import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface HeroProps {
  language: string;
}

export default function Hero({ language }: HeroProps) {
  const t = language === 'en' ? en : tr;
  const contact = language === 'en' ? en.contact : tr.contact;

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-navy via-navy to-brown-dark text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-vibrant/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-vibrant/10 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text */}
          <div className="animate-fadeInUp space-y-8">
            {/* Name & Title */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-orange-vibrant font-semibold">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Taglines */}
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl font-bold text-orange-vibrant">
                {t.hero.tagline1}
              </p>
              <p className="text-2xl sm:text-3xl font-bold">
                {t.hero.tagline2}
              </p>
            </div>

            {/* Focus Areas */}
            <div className="py-4 border-l-4 border-orange-vibrant pl-4">
              <p className="text-lg font-semibold text-orange-vibrant mb-2">
                Focus Areas:
              </p>
              <p className="text-xl text-white/90">{t.hero.focusAreas}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-white/80 hover:text-orange-vibrant transition-colors">
                <span className="text-2xl">📧</span>
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-orange-vibrant transition-colors">
                <span className="text-2xl">📱</span>
                <a href={`tel:${contact.phone}`} className="hover:underline">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-orange-vibrant transition-colors">
                <span className="text-2xl">💼</span>
                <a
                  href={`https://${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-orange-vibrant text-navy font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {language === 'en' ? 'Get In Touch' : 'İletişime Geçin'}
              </a>
            </div>
          </div>

          {/* Right Column - About & Personality Scores */}
          <div className="space-y-8 animate-slideInRight">
            {/* About Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-orange-vibrant/50 transition-all">
              <h2 className="text-3xl font-bold text-orange-vibrant mb-4">
                {language === 'en' ? 'About Me' : 'Hakkımda'}
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {t.hero.about}
              </p>
            </div>

            {/* Personality Scores */}
            <div className="grid grid-cols-2 gap-4">
              {/* Conscientiousness */}
              <div className="bg-gradient-to-br from-orange-vibrant to-orange-vibrant/70 rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">101</p>
                  <p className="text-sm font-semibold text-white/90 text-center">
                    {t.hero.conscientiousness}
                  </p>
                  <div className="mt-3 w-full h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Openness */}
              <div className="bg-gradient-to-br from-brown-warm to-brown-dark rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">100</p>
                  <p className="text-sm font-semibold text-white/90 text-center">
                    {t.hero.openness}
                  </p>
                  <div className="mt-3 w-full h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Description */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-sm text-white/80 italic text-center">
                {t.hero.scoreDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-12">
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-orange-vibrant"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

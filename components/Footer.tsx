'use client';

import Link from 'next/link';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-vibrant">
              Ilayda Süleymanoğlu
            </h3>
            <p className="text-white/80">
              {language === 'en'
                ? 'Energy Analyst | Meteorology Engineer | AI Enthusiast'
                : 'Energy Analyst | Meteoroloji Mühendisi | AI Meraklısı'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#home" className="hover:text-orange-vibrant transition-colors">
                  {language === 'en' ? 'Home' : 'Anasayfa'}
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-orange-vibrant transition-colors">
                  {language === 'en' ? 'Experience' : 'Deneyim'}
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-orange-vibrant transition-colors">
                  {language === 'en' ? 'Education' : 'Eğitim'}
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-orange-vibrant transition-colors">
                  {language === 'en' ? 'Skills' : 'Yetenekler'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Connect' : 'Bağlantı'}
            </h4>
            <div className="space-y-2 text-white/80">
              <p>
                <a
                  href="mailto:iisuleymanoglu@gmail.com"
                  className="hover:text-orange-vibrant transition-colors"
                >
                  ✉️ iisuleymanoglu@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+905065336002"
                  className="hover:text-orange-vibrant transition-colors"
                >
                  📱 +90 506 533 6002
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/ilayda-suleymanoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-vibrant transition-colors"
                >
                  💼 LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-orange-vibrant/30 rounded-full mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-white/70 text-sm">
          <p>
            © {currentYear} Ilayda Süleymanoğlu.{' '}
            {language === 'en'
              ? 'All rights reserved.'
              : 'Tüm hakları saklıdır.'}
          </p>
          <p className="mt-4 md:mt-0">
            {language === 'en'
              ? 'Built with React, Next.js & Tailwind CSS'
              : 'React, Next.js & Tailwind CSS ile yapılmıştır'}
          </p>
        </div>
      </div>
    </footer>
  );
}

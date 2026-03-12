'use client';

import Link from 'next/link';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12 px-4 sm:px-6 lg:px-8" style={{ background: '#000080' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FF8C00' }}>
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
                <Link href="#home" className="transition-colors hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.8)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}>
                  {language === 'en' ? 'Home' : 'Anasayfa'}
                </Link>
              </li>
              <li>
                <Link href="#experience" className="transition-colors hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.8)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}>
                  {language === 'en' ? 'Experience' : 'Deneyim'}
                </Link>
              </li>
              <li>
                <Link href="#education" className="transition-colors hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.8)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}>
                  {language === 'en' ? 'Education' : 'Eğitim'}
                </Link>
              </li>
              <li>
                <Link href="#skills" className="transition-colors hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.8)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}>
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
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  ✉️ iisuleymanoglu@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+905065336002"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  📱 +90 506 533 6002
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/ilayda-suleymanoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  💼 LinkedIn Profile
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/ilaydasuleymanoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  💻 GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://x.com/ilaydaslymnglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  🐦 X (Twitter)
                </a>
              </p>
              <p>
                <a
                  href="https://leetcode.com/u/iisuleymanogluvural/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  👨‍💻 LeetCode
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 rounded-full mb-8" style={{ background: 'rgba(255, 140, 0, 0.3)' }}></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
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

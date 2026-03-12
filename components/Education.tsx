'use client';

import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface EducationProps {
  language: string;
}

export default function Education({ language }: EducationProps) {
  const t = language === 'en' ? en : tr;
  const programs = language === 'en' ? en.education.programs : tr.education.programs;

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 128, 0.05), white, white)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#000080' }}>
            {t.education.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ background: '#FF8C00' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.education.intro}
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="animate-fadeInUp group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden card-hover"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.5)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
              >
                {/* Header */}
                <div className="text-white p-6" style={{ background: 'linear-gradient(to right, #000080, #00006b)' }}>
                  <h3 className="text-2xl font-bold mb-2">
                    {program.institution}
                  </h3>
                  <p className="font-semibold text-lg" style={{ color: '#FF8C00' }}>
                    {program.field}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="mb-4">
                    <span 
                      className="inline-block px-4 py-2 rounded-lg font-semibold text-sm mb-3"
                      style={{ background: 'rgba(255, 140, 0, 0.1)', color: '#FF8C00' }}
                    >
                      {program.degree}
                    </span>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2 text-sm">
                    <span className="text-lg">📅</span>
                    {program.period}
                  </p>
                </div>

                {/* Bottom accent */}
                <div 
                  className="h-1"
                  style={{ background: 'linear-gradient(to right, #FF8C00, transparent)' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div 
          className="text-white rounded-2xl p-8 lg:p-12 animate-slideInLeft border-l-4"
          style={{ background: 'linear-gradient(to right, #000080, #00006b)', borderColor: '#FF8C00' }}
        >
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'My Educational Vision' : 'Eğitim Vizyonum'}
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">
            {t.education.intro}
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <span className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ background: '#FF8C00' }}>
              💾 Data & Analysis
            </span>
            <span className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ background: '#FF8C00' }}>
              🌍 Climate Solutions
            </span>
            <span className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ background: '#FF8C00' }}>
              ⚙️ Software Engineering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

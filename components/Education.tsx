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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy/5 via-white to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-navy mb-4">
            {t.education.title}
          </h2>
          <div className="w-20 h-1 bg-orange-vibrant mx-auto rounded-full mb-6"></div>
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
              <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-vibrant/50 overflow-hidden card-hover">
                {/* Header */}
                <div className="bg-gradient-to-r from-navy to-navy/80 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {program.institution}
                  </h3>
                  <p className="text-orange-vibrant font-semibold text-lg">
                    {program.field}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-orange-vibrant/10 text-orange-vibrant px-4 py-2 rounded-lg font-semibold text-sm mb-3">
                      {program.degree}
                    </span>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2 text-sm">
                    <span className="text-lg">📅</span>
                    {program.period}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-orange-vibrant to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-navy to-navy/90 text-white rounded-2xl p-8 lg:p-12 animate-slideInLeft border-l-4 border-orange-vibrant">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'My Educational Vision' : 'Eğitim Vizyonum'}
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">
            {t.education.intro}
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <span className="bg-orange-vibrant px-4 py-2 rounded-lg font-semibold text-sm">
              💾 Data & Analysis
            </span>
            <span className="bg-orange-vibrant px-4 py-2 rounded-lg font-semibold text-sm">
              🌍 Climate Solutions
            </span>
            <span className="bg-orange-vibrant px-4 py-2 rounded-lg font-semibold text-sm">
              ⚙️ Software Engineering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

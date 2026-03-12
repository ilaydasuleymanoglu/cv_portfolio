'use client';

import { useState } from 'react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface ExperienceProps {
  language: string;
}

export default function Experience({ language }: ExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const t = language === 'en' ? en : tr;
  const experiences = language === 'en' ? en.experience.experiences : tr.experience.experiences;

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(to bottom, white, white, #f9fafb)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#000080' }}>
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: '#FF8C00' }}></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{ background: 'linear-gradient(to bottom, #FF8C00, #000080, #8B7355)' }}
          ></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`animate-fadeInUp ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 z-10">
                  <div 
                    className="w-6 h-6 border-4 border-white rounded-full shadow-lg hover:scale-125 transition-transform"
                    style={{ background: '#FF8C00' }}
                  ></div>
                </div>

                {/* Card */}
                <div
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer overflow-hidden card-hover"
                  style={{ borderColor: 'transparent' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF8C00')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {/* Card Header */}
                  <div className="text-white p-6" style={{ background: 'linear-gradient(to right, #000080, #00006b)' }}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                        <p className="font-semibold text-lg" style={{ color: '#FF8C00' }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/80">{exp.period}</p>
                        <p className="text-xs font-semibold" style={{ color: '#FF8C00' }}>
                          📍 {exp.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body - Expandable */}
                  {expandedIndex === index && exp.responsibilities.length > 0 && (
                    <div 
                      className="p-6 border-t-2 animate-slideInLeft"
                      style={{ background: '#f9fafb', borderColor: 'rgba(255, 140, 0, 0.2)' }}
                    >
                      <h4 className="font-semibold mb-3" style={{ color: '#000080' }}>
                        {language === 'en' ? 'Key Responsibilities:' : 'Kısaca:'}
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="font-bold flex-shrink-0" style={{ color: '#FF8C00' }}>
                              ✓
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expand Button Indicator */}
                  {exp.responsibilities.length > 0 && (
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-center">
                      <span className="font-semibold text-sm flex items-center gap-1" style={{ color: '#FF8C00' }}>
                        {expandedIndex === index ? (
                          <>
                            <span>▲</span>
                            {language === 'en' ? 'Less' : 'Daha Az'}
                          </>
                        ) : (
                          <>
                            <span>▼</span>
                            {language === 'en' ? 'More Details' : 'Daha Fazla'}
                          </>
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp">
          <p className="text-gray-600 text-lg mb-6">
            {language === 'en'
              ? 'Interested in working together?'
              : 'Birlikte çalışmak ilginizi çekti mi?'}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            style={{ background: '#FF8C00' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#000080')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FF8C00')}
          >
            {language === 'en' ? 'Let\'s Connect' : 'Bağlantı Kuralım'}
          </a>
        </div>
      </div>
    </section>
  );
}

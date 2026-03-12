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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-navy mb-4">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 bg-orange-vibrant mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-vibrant via-navy to-brown-warm"></div>

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
                  <div className="w-6 h-6 bg-orange-vibrant border-4 border-white rounded-full shadow-lg hover:scale-125 transition-transform"></div>
                </div>

                {/* Card */}
                <div
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-vibrant cursor-pointer overflow-hidden card-hover"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-navy to-navy/80 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                        <p className="text-orange-vibrant font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/80">{exp.period}</p>
                        <p className="text-xs text-orange-vibrant font-semibold">
                          📍 {exp.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body - Expandable */}
                  {expandedIndex === index && exp.responsibilities.length > 0 && (
                    <div className="p-6 bg-gray-50 border-t-2 border-orange-vibrant/20 animate-slideInLeft">
                      <h4 className="font-semibold text-navy mb-3">
                        {language === 'en' ? 'Key Responsibilities:' : 'Kısaca:'}
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="text-orange-vibrant font-bold flex-shrink-0">
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
                      <span className="text-orange-vibrant font-semibold text-sm flex items-center gap-1">
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
            className="inline-block px-8 py-4 bg-orange-vibrant text-white font-bold rounded-lg hover:bg-navy transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            {language === 'en' ? 'Let\'s Connect' : 'Bağlantı Kuralım'}
          </a>
        </div>
      </div>
    </section>
  );
}

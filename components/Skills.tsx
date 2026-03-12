'use client';

import { useState } from 'react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface SkillsProps {
  language: string;
}

export default function Skills({ language }: SkillsProps) {
  const [animatedSkills, setAnimatedSkills] = useState<boolean>(false);
  const t = language === 'en' ? en : tr;
  const skills = language === 'en' ? en.skills : tr.skills;

  // Trigger animation on mount
  if (!animatedSkills) {
    setAnimatedSkills(true);
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-navy/5 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-navy mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-orange-vibrant mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Top Skills */}
          <div className="lg:col-span-2 animate-slideInLeft">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-navy/10 hover:border-orange-vibrant/50 transition-all">
              <h3 className="text-3xl font-bold text-navy mb-8">
                {skills.topSkills.title}
              </h3>
              <div className="space-y-6">
                {skills.topSkills.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-navy text-lg">
                        {skill.name}
                      </span>
                      <span className="bg-orange-vibrant text-white px-3 py-1 rounded-lg text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-vibrant to-orange-vibrant/70 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="animate-slideInRight">
            <div className="bg-gradient-to-br from-orange-vibrant to-orange-vibrant/70 rounded-2xl shadow-lg p-8 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {skills.awards.title}
                </h3>
                <div className="space-y-4">
                  {skills.awards.items.map((award, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border-l-4 border-white font-semibold"
                    >
                      <p className="text-lg">🏆</p>
                      <p className="mt-2 text-white">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fadeInUp">
          <div className="bg-gradient-to-r from-navy/10 to-navy/5 rounded-2xl p-8 lg:p-12 border-2 border-navy/20">
            <h3 className="text-3xl font-bold text-navy mb-8">
              {skills.certifications.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-navy/10 hover:border-orange-vibrant group cursor-pointer"
                >
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">
                    📜
                  </div>
                  <p className="font-semibold text-navy text-center group-hover:text-orange-vibrant transition-colors">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Description */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12 border-l-4 border-orange-vibrant animate-slideInLeft">
          <h3 className="text-2xl font-bold text-navy mb-4">
            {language === 'en'
              ? 'Technical Expertise'
              : 'Teknik Uzmanlık'}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'en'
              ? 'My skill set combines deep expertise in CTRM (Commodity Trading and Risk Management) systems, Python programming, and advanced data visualization tools like Streamlit and Plotly. I specialize in AI prompt engineering and systematic literature research, which allows me to stay at the forefront of technological innovation. My background in meteorology engineering and energy analytics enables me to deliver data-driven solutions tailored to domain-specific challenges.'
              : 'Beceri setim CTRM (Emtia Ticaret ve Risk Yönetimi) sistemleri, Python programlama ve Streamlit ile Plotly gibi gelişmiş veri görselleştirme araçlarında derin uzmanlığı birleştirir. AI prompt engineering ve sistematik literatür taraması konularında uzmanlaşmış olup, teknolojik inovasyonun ön safında kalmayı sağlayarak. Meteoroloji mühendisliği ve enerji analitiği alanındaki geçmişim, alan spesifik zorlukları ele almak için veri odaklı çözümler sunmamı mümkün kılmaktadır.'}
          </p>
        </div>
      </div>
    </section>
  );
}

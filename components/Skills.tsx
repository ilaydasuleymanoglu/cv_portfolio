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
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(to bottom, white, rgba(0, 0, 128, 0.05), white)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#000080' }}>
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: '#FF8C00' }}></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Top Skills */}
          <div className="lg:col-span-2 animate-slideInLeft">
            <div 
              className="bg-white rounded-2xl shadow-lg p-8 border-2 transition-all"
              style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 128, 0.1)')}
            >
              <h3 className="text-3xl font-bold mb-8" style={{ color: '#000080' }}>
                {skills.topSkills.title}
              </h3>
              <div className="space-y-6">
                {skills.topSkills.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg" style={{ color: '#000080' }}>
                        {skill.name}
                      </span>
                      <span 
                        className="text-white px-3 py-1 rounded-lg text-sm font-bold"
                        style={{ background: '#FF8C00' }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills ? `${skill.level}%` : '0%',
                          background: 'linear-gradient(to right, #FF8C00, #e67e22)',
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
            <div 
              className="rounded-2xl shadow-lg p-8 text-white h-full flex flex-col justify-between"
              style={{ background: 'linear-gradient(to bottom right, #FF8C00, #e67e22)' }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {skills.awards.title}
                </h3>
                <div className="space-y-4">
                  {skills.awards.items.map((award, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-4 border-l-4 border-white font-semibold"
                      style={{ background: 'rgba(255, 255, 255, 0.2)' }}
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
          <div 
            className="rounded-2xl p-8 lg:p-12 border-2"
            style={{ background: 'linear-gradient(to right, rgba(0, 0, 128, 0.1), rgba(0, 0, 128, 0.05))', borderColor: 'rgba(0, 0, 128, 0.2)' }}
          >
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#000080' }}>
              {skills.certifications.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 cursor-pointer group"
                  style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF8C00';
                    const p = e.currentTarget.querySelector('p:nth-child(2)');
                    if (p) (p as HTMLElement).style.color = '#FF8C00';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 128, 0.1)';
                    const p = e.currentTarget.querySelector('p:nth-child(2)');
                    if (p) (p as HTMLElement).style.color = '#000080';
                  }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">
                    📜
                  </div>
                  <p className="font-semibold text-center transition-colors" style={{ color: '#000080' }}>
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Description */}
        <div 
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12 border-l-4 animate-slideInLeft"
          style={{ borderColor: '#FF8C00' }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#000080' }}>
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

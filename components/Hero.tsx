'use client';

import { motion } from 'framer-motion';
import { CloudRainWind, ThermometerSun, Mail, Linkedin, FileText, Globe } from 'lucide-react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface HeroProps {
  language: string;
}

export default function Hero({ language }: HeroProps) {
  const t = language === 'en' ? en : tr;
  const contact = language === 'en' ? en.contact : tr.contact;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/30"
          >
            <CloudRainWind className="w-5 h-5 text-accent-primary" />
            <span className="text-sm font-medium text-accent-primary">{t.hero.subtitle}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-tight"
          >
            <span className="block text-xl md:text-2xl text-text-secondary mb-2 font-normal">Hello, I'm</span>
            <span className="text-gradient drop-shadow-lg">{t.hero.title}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl font-semibold text-accent-primary">{t.hero.tagline1} | {t.hero.tagline2}</p>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              {t.hero.about}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#contact" className="px-8 py-3 rounded-full bg-accent-primary text-bg-color font-semibold hover:bg-accent-primary/90 transition-all flex items-center gap-2 hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <Mail className="w-5 h-5" /> {language === 'en' ? 'Get In Touch' : 'İletişime Geçin'}
            </a>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-all text-text-primary flex items-center gap-2 border hover:border-accent-secondary/50">
              <Linkedin className="w-5 h-5 text-accent-secondary" /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right Content - Visual/Atmospheric Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative lg:h-[600px] flex items-center justify-center p-8"
        >
          <div className="relative w-full aspect-square max-w-md">
            {/* Main glass sphere */}
            <div className="absolute inset-0 rounded-full glass-card overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)] group">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
               {/* Animated Rings */}
               <div className="w-[150%] h-[150%] absolute border-[1px] border-accent-secondary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="w-[100%] h-[100%] absolute border-[1px] border-accent-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="w-[80%] h-[80%] absolute border border-dashed border-white/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
               
               <img src="/my-photo-cv.png" alt="İlayda Süleymanoğlu" className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-full relative z-10 border-4 border-accent-primary/30 shadow-[0_0_30px_rgba(56,189,248,0.4)]" />
            </div>
            
            {/* Floating badge 1 (Scores) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-8 glass px-6 py-4 rounded-2xl flex flex-col gap-1 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">{t.hero.conscientiousness}</span>
              </div>
              <span className="text-3xl font-bold text-text-primary">101</span>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                 <div className="h-full bg-accent-primary w-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              </div>
            </motion.div>

            {/* Floating badge 2 (Scores) */}
             <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-8 -left-8 glass px-6 py-4 rounded-2xl flex flex-col gap-1 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse"></div>
                 <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">{t.hero.openness}</span>
              </div>
              <span className="text-3xl font-bold text-text-primary">100</span>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                 <div className="h-full bg-accent-secondary w-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 -right-16 glass p-3 rounded-full backdrop-blur-xl border border-white/20 shadow-xl"
            >
               <Globe className="w-6 h-6 text-green-400" />
            </motion.div>

          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-12 border-2 border-text-secondary/30 rounded-full flex justify-center pt-2 hover:border-accent-primary transition-colors hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] cursor-pointer z-20"
      >
        <div className="w-1 h-3 bg-accent-primary/80 rounded-full"></div>
      </motion.a>
    </section>
  );
}

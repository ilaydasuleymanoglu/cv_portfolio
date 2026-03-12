'use client';

import { motion } from 'framer-motion';
import { TrendingUp, LayoutDashboard, Activity, ExternalLink } from 'lucide-react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';
import { useEffect, useRef } from 'react';
import ProjectSlider from './ProjectSlider';

const netconImages = [
  '/netcon/Screenshot from 2026-03-13 00-29-56.png',
  '/netcon/Screenshot from 2026-03-13 00-30-05.png',
  '/netcon/Screenshot from 2026-03-13 00-30-12.png',
  '/netcon/Screenshot from 2026-03-13 00-30-17.png',
  '/netcon/Screenshot from 2026-03-13 00-30-23.png',
  '/netcon/Screenshot from 2026-03-13 00-30-26.png',
  '/netcon/Screenshot from 2026-03-13 00-30-32.png',
  '/netcon/Screenshot from 2026-03-13 00-30-37.png'
];

interface EnergyTradingProps {
  language: string;
}

export default function EnergyTrading({ language }: EnergyTradingProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the script is already added to prevent duplicates
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "TVC:UKOIL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "${language === 'en' ? 'en' : 'tr'}",
          "enable_publishing": false,
          "backgroundColor": "rgba(15, 23, 42, 0.4)",
          "gridColor": "rgba(255, 255, 255, 0.05)",
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": false,
          "container_id": "tradingview_ukoil",
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, [language]);

  return (
    <section id="energy-trading" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl glass-card text-accent-secondary"
          >
            <TrendingUp className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">Energy Trading</span> & Projects
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
             {language === 'en' 
               ? "Showcasing my entrepreneurial journey and expertise in energy trading, alongside custom meteorological dashboards I have developed."
               : "Girişimcilik vizyonum harmanında, enerji ticaretindeki pazar uzmanlığım ve geliştirdiğim iki özel meteorolojik veri izleme dashboard projesi."
             }
          </motion.p>
        </div>

        {/* Commodity Market (Brent Crude) */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 glass-card rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden group hover:border-accent-secondary/50 transition-all duration-500 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center border border-accent-secondary/30 text-accent-secondary">
                     <TrendingUp className="w-5 h-5" />
                 </div>
                 <h3 className="text-2xl font-bold text-text-primary">Global Commodity Markets: Brent Crude Oil</h3>
             </div>
             
             <a 
               href="https://tradingeconomics.com/commodity/brent-crude-oil" 
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-secondary transition-colors"
             >
                 Trading Economics Ref <ExternalLink className="w-4 h-4" />
             </a>
          </div>
          
          <div className="bg-gray-900/50 rounded-2xl overflow-hidden h-[450px] relative border border-white/5">
             <div className="tradingview-widget-container h-full w-full" ref={container}>
                <div className="tradingview-widget-container__widget h-full w-full"></div>
             </div>
             <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Project Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
           {/* Dashboard 1: E-Mail Harvest */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="glass-card rounded-3xl p-6 border border-white/10 hover:border-accent-primary/50 transition-all group flex flex-col min-h-[350px] shadow-xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center text-accent-primary shadow-[0_0_30px_rgba(56,189,248,0.2)] border border-white/10">
                   <LayoutDashboard className="w-7 h-7" />
                </div>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-primary hover:bg-white/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h4 className="text-2xl font-bold text-text-primary mb-2">E-Mail Harvest</h4>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed flex-1">
                {language === 'en' 
                   ? "An automated data extraction tool focusing on intelligent email harvesting for targeted business outreach and workflow optimization." 
                   : "Hedefli iş iletişimi ve iş akışı optimizasyonu için akıllı e-posta toplamaya odaklanan otomatik veri çıkarma aracı."}
              </p>

              {/* Project Image Placeholder */}
              <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-white/10 group-hover:border-accent-primary/30 transition-colors bg-gray-900">
                <img 
                  src="/email-harvest.png" 
                  alt="E-Mail Harvest Dashboard" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
           </motion.div>

           {/* Dashboard 2: NetCoN */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="glass-card rounded-3xl p-6 border border-white/10 hover:border-accent-secondary/50 transition-all group flex flex-col min-h-[350px] shadow-xl relative overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-secondary/10 rounded-br-[100px] -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-secondary/20 to-purple-500/20 flex items-center justify-center text-accent-secondary shadow-[0_0_30px_rgba(129,140,248,0.2)] border border-white/10">
                   <Activity className="w-7 h-7" />
                </div>
                <a 
                  href="https://www.netcontechnologies.tech/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-secondary hover:bg-white/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h4 className="text-2xl font-bold text-text-primary mb-2">NetCoN Technologies</h4>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed flex-1">
                 {language === 'en' 
                    ? "My entrepreneurial venture accepted into the ITU SEED Acceleration Program. Focused on sustainable tech solutions and building state-of-the-art platforms." 
                    : "İTÜ Çekirdek Hızlandırma Programına kabul edilen teknoloji girişimim. Sürdürülebilir teknoloji çözümlerine ve yenilikçi platformlar geliştirmeye odaklanan organizasyonum."}
              </p>

              {/* Project Image Slider */}
              <ProjectSlider images={netconImages} />
           </motion.div>
           {/* Dashboard 3: Financial Dashboard */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="glass-card rounded-3xl p-6 border border-white/10 hover:border-green-400/50 transition-all group flex flex-col min-h-[350px] shadow-xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-600/20 flex items-center justify-center text-green-400 shadow-[0_0_30px_rgba(74,222,128,0.2)] border border-white/10">
                   <Activity className="w-7 h-7" />
                </div>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-green-400 hover:bg-white/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h4 className="text-2xl font-bold text-text-primary mb-2">Financial Dashboard</h4>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed flex-1">
                 {language === 'en' 
                    ? "A comprehensive analytical tool bridging meteorological data and energy trading to provide actionable financial insights." 
                    : "Finansal veriler ve meteorolojik/enerji ticareti parametrelerini harmanlayıp veri-odaklı kararları destekleyen analitik dashboard."}
              </p>

              {/* Project Image Placeholder */}
              <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-white/10 group-hover:border-green-400/30 transition-colors bg-gray-900">
                <img 
                  src="/financialdash.png" 
                  alt="Financial Dashboard" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}

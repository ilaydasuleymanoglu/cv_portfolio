'use client';

import { motion } from 'framer-motion';
import { Wind, CloudSun, Map as MapIcon, ExternalLink } from 'lucide-react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface MeteoDashProps {
  language: string;
}

export default function MeteoDash({ language }: MeteoDashProps) {
  const t = language === 'en' ? en : tr;

  return (
    <section id="meteo-dash" className="py-24 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-bg-color">
         <div className="absolute inset-0 opacity-10" style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }} />
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl glass-card text-accent-primary"
          >
            <CloudSun className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meteorological <span className="text-gradient">Integrations</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
             Interactive weather models and satellite imagery demonstrating practical atmospheric data visualization.
          </motion.p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Interactive Map (Windy) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 group relative rounded-3xl overflow-hidden glass-card border border-white/10 h-[500px] shadow-2xl flex flex-col"
            >
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Wind className="w-5 h-5 text-accent-primary" />
                        <h3 className="font-semibold text-text-primary">Global Wind & Temperature Model</h3>
                    </div>
                     <span className="text-xs font-medium px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full border border-accent-primary/30">Live Data</span>
                </div>
                <div className="flex-1 w-full relative bg-gray-900/50">
                     <iframe 
                      width="650" 
                      height="450" 
                      src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=39.000&lon=35.000&detailLat=39.000&detailLon=35.000&detail=true&pressure=true&message=true" 
                      className="w-full h-[450px] border-0 outline-none"
                      allowFullScreen
                      style={{ filter: "invert(90%) hue-rotate(180deg)" }} // Creates a cool dark mode effect for windy map
                     />
                     <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
                </div>
            </motion.div>

            {/* Side Panels */}
            <div className="lg:col-span-4 flex flex-col gap-8">
                
                {/* EUMETView Link/Preview */}
                <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="flex-1 rounded-3xl p-6 glass-card border border-white/10 hover:border-accent-secondary/50 transition-all group flex flex-col"
                >
                    <div className="w-12 h-12 rounded-xl bg-accent-secondary/20 flex items-center justify-center mb-6 text-accent-secondary group-hover:scale-110 transition-transform">
                        <MapIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-text-primary">EUMETView Satellite Imagery</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                        Access real-time meteorological satellite data from EUMETSAT. Crucial for tracking cloud formations, storms, and synoptic scale weather systems.
                    </p>
                    <a 
                      href="https://view.eumetsat.int/productviewer?v=default" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-primary transition-colors"
                    >
                        Launch Interactive Viewer <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Data Stats */}
                <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="rounded-3xl p-6 glass-card border border-white/10 grid grid-cols-2 gap-4"
                >
                    <div className="col-span-2 mb-2">
                        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Atmospheric Datapoints</h4>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="text-2xl font-bold text-text-primary mb-1">GFS</div>
                        <div className="text-xs text-text-secondary">Global Forecast</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="text-2xl font-bold text-accent-primary mb-1">ECMWF</div>
                        <div className="text-xs text-text-secondary">European Model</div>
                    </div>

                     <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="text-2xl font-bold text-accent-secondary mb-1">Radar</div>
                        <div className="text-xs text-text-secondary">Doppler Scans</div>
                    </div>

                     <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="text-2xl font-bold text-green-400 mb-1">Metar</div>
                        <div className="text-xs text-text-secondary">Aviation Data</div>
                    </div>
                </motion.div>

            </div>
        </div>

      </div>
    </section>
  );
}

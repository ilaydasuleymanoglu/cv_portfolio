'use client';

import { motion } from 'framer-motion';
import { Award, Star, Lightbulb, ExternalLink } from 'lucide-react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface AffiliationsProps {
  language: string;
}

export default function Affiliations({ language }: AffiliationsProps) {
  const affiliations = [
    {
      id: 1,
      title: "Harvard Aspire Leaders",
      organization: "Harvard University",
      icon: <Star className="w-8 h-8" />,
      color: "from-red-500/20 to-rose-600/20",
      textColor: "text-red-400",
      borderColor: "hover:border-red-500/50",
      description: language === 'en' 
        ? "Selected for this fully funded leadership program designed to transform the lives of emerging young leaders worldwide." 
        : "Dünya çapında seçkin genç liderleri dönüştürmek için tasarlanmış ve tam fonlu olan bu prestijli liderlik programına seçildim."
    },
    {
      id: 2,
      title: "İTÜ Çekirdek Young Entrepreneur",
      organization: "İTÜ ARI Teknokent",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-400/20 to-orange-500/20",
      textColor: "text-yellow-400",
      borderColor: "hover:border-yellow-400/50",
      description: language === 'en' 
        ? "Admitted into one of the top university startup incubators globally, developing sustainable technology solutions." 
        : "Dünyanın en iyi üniversite kuluçka merkezlerinden birine kabul edilerek, sürdürülebilir teknoloji çözümleri geliştirmeye hak kazandım."
    },
    {
      id: 3,
      title: "McKinsey Forward Alumni",
      organization: "McKinsey & Company",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500/20 to-indigo-600/20",
      textColor: "text-blue-400",
      borderColor: "hover:border-blue-500/50",
      description: language === 'en' 
        ? "Graduated from the Forward capability-building program focusing on practical skills for the future of work." 
        : "Geleceğin iş dünyası için pratik becerilere odaklanan kapsamlı yetenek geliştirme programından mezun oldum."
    }
  ];

  return (
    <section id="affiliations" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl glass-card text-accent-primary"
          >
            <Award className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">Honors</span> & Affiliations
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
             {language === 'en' 
               ? "Proud to be part of globally recognized leadership and entrepreneurial networks."
               : "Küresel çapta tanınan ve saygı duyulan liderlik ile girişimcilik ağlarının gururlu bir üyesi."
             }
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {affiliations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`glass-card rounded-3xl p-8 border border-white/10 ${item.borderColor} transition-all group shadow-xl relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110 opacity-50`}></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.textColor} shadow-lg border border-white/10`}>
                   {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-primary transition-colors">{item.title}</h3>
              <p className={`text-sm font-semibold mb-4 ${item.textColor}`}>{item.organization}</p>
              
              <p className="text-text-secondary text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


import React from 'react';

interface FeaturesProps {
  translations: any;
}

const FeatureCard: React.FC<{ title: string; desc: string; index: number }> = ({ title, desc, index }) => {
  return (
    <div className="bg-[#052e1b] border border-[#D4AF37]/10 p-10 rounded-[2rem] hover:border-[#D4AF37]/40 transition-all duration-700 group relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-7xl font-bold font-cinzel">0{index + 1}</span>
      </div>
      <div className="w-24 h-24 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-[#052e1b] transition-all duration-500 shadow-lg">
         <span className="text-4xl font-bold">{title.charAt(0)}</span>
      </div>
      <h3 className="font-cinzel text-xl text-white font-bold mb-6 tracking-wide group-hover:text-[#D4AF37] transition-colors">
        {title}
      </h3>
      <p className="text-white/50 leading-relaxed font-light text-sm">
        {desc}
      </p>
    </div>
  );
};

const Features: React.FC<FeaturesProps> = ({ translations: t }) => {
  return (
    <section id="about" className="py-32 bg-[#0F5132]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-4xl sm:text-6xl text-white font-bold mb-6">{t.whyChoose.title}</h2>
          <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.whyChoose.features.map((feature: any, idx: number) => (
            <FeatureCard 
              key={idx}
              title={feature.title}
              desc={feature.desc}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

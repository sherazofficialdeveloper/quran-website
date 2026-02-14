
import React from 'react';

interface Props {
  translations: any;
}

const HowItWorks: React.FC<Props> = ({ translations: t }) => {
  return (
    <section className="py-32 bg-[#052e1b]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-6">{t.howItWorks.title}</h2>
          <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -z-10"></div>
          
          {t.howItWorks.steps.map((step: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#0F5132] border-4 border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-3xl font-bold mb-8 group-hover:border-[#D4AF37] group-hover:scale-110 transition-all shadow-2xl">
                {idx + 1}
              </div>
              <h3 className="font-cinzel text-xl text-white font-bold mb-4">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

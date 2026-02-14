
import React from 'react';

interface Props {
  translations: any;
}

const WhyChooseUs: React.FC<Props> = ({ translations: t }) => {
  return (
    <section className="py- bg-[#0F5132]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-6">{t.whyChoose.title}</h2>
          <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.whyChoose.features.map((f: any, i: number) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#052e1b] transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-cinzel text-xl text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

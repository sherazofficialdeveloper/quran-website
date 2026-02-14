
import React from 'react';

interface CTAProps {
  translations: any;
}

const CTA: React.FC<CTAProps> = ({ translations: t }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#D4AF37] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-[#0F5132] border border-[#D4AF37]/30 rounded-[3rem] p-12 sm:p-20 text-center shadow-2xl">
          <h2 className="font-cinzel text-4xl sm:text-6xl font-bold text-white mb-8">
            {t.cta.title}
          </h2>
          <button className="px-16 py-6 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold text-2xl hover:bg-white hover:scale-110 transition-all duration-500 shadow-2xl">
            {t.cta.btn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;


import React from 'react';

interface ExcellenceProps {
  translations: any;
}

const Excellence: React.FC<ExcellenceProps> = ({ translations: t }) => {
  return (
    <section className="py-32 bg-[#052e1b]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4">Why Academy?</div>
          <h2 className="font-cinzel text-4xl sm:text-6xl text-white font-bold mb-6">
            Excellence That <span className="text-[#D4AF37]">Sets Us Apart</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            {t.excellence.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.excellence.items.map((item: any, i: number) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:border-[#D4AF37]/50 transition-all group">
              <div className="w-20 h-20 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all">
                <span className="text-[#D4AF37] group-hover:text-[#052e1b] transition-all text-3xl">✦</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;

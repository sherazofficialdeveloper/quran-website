
import React from 'react';

interface Props {
  translations: any;
}

const Pricing: React.FC<Props> = ({ translations: t }) => {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-6">{t.pricing.title}</h2>
          <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.pricing.plans.map((plan: any, i: number) => (
            <div key={i} className={`relative bg-[#0F5132]/30 border border-[#D4AF37]/20 p-12 rounded-[3rem] flex flex-col ${i === 1 ? 'scale-110 z-10 border-[#D4AF37]/60 bg-[#0F5132]/50 shadow-2xl' : 'scale-100 opacity-80'} transition-all duration-500`}>
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#052e1b] px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="font-cinzel text-3xl text-white font-bold mb-4">{plan.name}</h3>
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[#D4AF37]">{plan.price}</span>
                <span className="text-white/40 font-medium">/month</span>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feat: string, j: number) => (
                  <li key={j} className="flex items-center gap-3 text-white/70 text-sm font-light">
                    <span className="text-[#D4AF37]">✦</span> {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${i === 1 ? 'bg-[#D4AF37] text-[#052e1b] hover:bg-white' : 'border-2 border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#052e1b]'}`}>
                Book Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';

interface RevelationProps {
  translations: any;
}

const Revelation: React.FC<RevelationProps> = ({ translations: t }) => {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[#0F5132] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="mb-6 sm:mb-8 md:mb-10 text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] opacity-40">﷽</div>
        
        <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 sm:mb-8 md:mb-10 leading-tight px-2" dir="rtl">
          {t.revelation?.arabic}
        </h2>
        
        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#D4AF37]/20 rounded-lg text-[#D4AF37] font-bold text-[10px] sm:text-xs md:text-sm mb-8 sm:mb-10 md:mb-12">
          {t.revelation?.ref}
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#D4AF37] font-cinzel font-bold mb-4 sm:mb-6 md:mb-8 italic px-4 leading-tight">
          {t.revelation?.translation}
        </p>
        
        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 md:mb-20 font-light px-4">
          {t.revelation?.desc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
          {t.revelation?.stats?.map((stat: any, i: number) => (
            <div key={i} className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#D4AF37] transition-colors">{stat.val}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Revelation;
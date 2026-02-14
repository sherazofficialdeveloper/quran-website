
import React from 'react';

interface RevelationProps {
  translations: any;
}

const Revelation: React.FC<RevelationProps> = ({ translations: t }) => {
  return (
    <section className="py-32 bg-[#0F5132] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="mb-10 text-6xl text-[#D4AF37] opacity-40">﷽</div>
        
        <h2 className="font-amiri text-5xl sm:text-7xl text-white font-bold mb-10 leading-tight" dir="rtl">
          {t.revelation.arabic}
        </h2>
        
        <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 rounded-lg text-[#D4AF37] font-bold text-sm mb-12">
          {t.revelation.ref}
        </div>

        <p className="text-3xl sm:text-4xl text-[#D4AF37] font-cinzel font-bold mb-8 italic">
          {t.revelation.translation}
        </p>
        
        <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-20 font-light">
          {t.revelation.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
          {t.revelation.stats.map((stat: any, i: number) => (
            <div key={i} className="group">
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{stat.val}</div>
              <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Revelation;


import React from 'react';

interface Props {
  translations: any;
}

const FooterCTA: React.FC<Props> = ({ translations: t }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0F5132]/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-8 animate-fade-up">
           <div className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest flex items-center gap-3">
             <span className="w-10 h-[1px] bg-[#D4AF37]"></span> {t.footerCTA.badge}
           </div>
           <h2 className="font-cinzel text-5xl lg:text-7xl font-bold text-white leading-tight">
             Begin Your <span className="text-[#D4AF37]">Sacred Quran Journey</span>
           </h2>
           <p className="text-white/70 text-xl font-light leading-relaxed">
             {t.footerCTA.subtitle}
           </p>
           
           <div className="space-y-4 pt-6">
              {['100% Satisfaction Guaranteed', 'Expert Male & Female Teachers', 'Flexible Timings Available'].map((point, i) => (
                <div key={i} className="flex items-center gap-4 text-white/60">
                  <span className="text-[#D4AF37]">✔</span> {point}
                </div>
              ))}
           </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
           <div className="bg-[#052e1b] border-4 border-[#D4AF37]/30 p-10 sm:p-16 rounded-[4rem] shadow-2xl relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#0F5132] border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] text-4xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                 ☪
              </div>
              <div className="text-center pt-8">
                 <h3 className="text-3xl font-bold text-white mb-2">{t.footerCTA.trialCard.title}</h3>
                 <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-10">{t.footerCTA.trialCard.subtitle}</p>
                 
                 <div className="space-y-4">
                   <a 
            href="https://wa.me/923030713623" 
            target="_blank" 
            rel="noopener noreferrer"> <button className="w-full py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl">
                       <span>{t.footerCTA.trialCard.whatsapp}</span>
                    </button></a>
                   <a 
            href="tel:+923030713623"> <button className="w-full mt-5 py-5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-2xl font-bold hover:bg-[#D4AF37]/10 transition-all">
                       {t.footerCTA.trialCard.call}
                    </button></a>
                    <button className="w-full py-5 text-white/40 hover:text-white transition-colors text-sm">
                       {t.footerCTA.trialCard.email}
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;


import React from 'react';

interface HeroProps {
  translations: any;
}

const Hero: React.FC<HeroProps> = ({ translations: t }) => {
  return (
    <section className="relative min-h-screen pt-20 pb-12 flex items-center px-4 overflow-hidden bg-[#021a0f]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/Quran video (2).mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#052e1b]/90 via-[#052e1b]/40 to-[#052e1b]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column Content */}
        <div className="space-y-8 text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">#{t.hero.badge}</span>
          </div>
          
          <h1 className="font-cinzel text-5xl lg:text-7xl font-bold text-white leading-tight">
            {t.hero.title.split(' ').map((word: string, i: number) => 
              word === 'Quran' || word === 'Journey' ? 
              <span key={i} className="text-[#D4AF37]"> {word} </span> : 
              word + ' '
            )}
          </h1>
          
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-3 bg-[#0F5132] px-6 py-3 rounded-2xl border border-[#D4AF37]/20">
              <span className="text-[#D4AF37]">🛡️</span>
              <span className="text-sm font-medium">{t.hero.whyChoose}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
           <a 
            href="https://wa.me/yournumberhere" 
            target="_blank" 
            rel="noopener noreferrer"> <button className="px-10 py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-sm">
              {t.hero.ctaPrimary}
            </button></a>
            <a 
            href="https://wa.me/yournumberhere" 
            target="_blank" 
            rel="noopener noreferrer"><button className="px-10 py-5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-2xl font-bold hover:bg-[#D4AF37]/10 transition-all uppercase tracking-widest text-sm">
              {t.hero.ctaSecondary}
            </button></a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-12 pt-8 opacity-60">
            <div>
               <div className="text-2xl font-bold text-white">{t.hero.stats.students}</div>
               <div className="text-xs uppercase tracking-tighter">Students Enrolled</div>
            </div>
            <div>
               <div className="text-2xl font-bold text-white">{t.hero.stats.teachers}</div>
               <div className="text-xs uppercase tracking-tighter">Certified Teachers</div>
            </div>
            <div>
               <div className="text-2xl font-bold text-[#D4AF37]">{t.hero.stats.rating}</div>
               <div className="text-xs uppercase tracking-tighter">Google Rating</div>
            </div>
          </div>
        </div>

        {/* Right Column Cards */}
        <div className="relative group animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-[#0F5132]/40 backdrop-blur-md border-2 border-[#D4AF37]/30 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
            
            {/* Video Placeholder */}
            <div className="aspect-video bg-[#052e1b] rounded-3xl border border-[#D4AF37]/20 flex flex-col items-center justify-center gap-4 group/video cursor-pointer mb-8 overflow-hidden relative">
               <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-all"></div>
               <div className="w-20 h-20 rounded-full border-4 border-[#D4AF37] flex items-center justify-center bg-[#0F5132]/80 relative z-10 group-hover/video:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#D4AF37] border-b-[10px] border-b-transparent ml-1"></div>
               </div>
               <div className="relative z-10 text-center">
                  <p className="font-bold text-[#D4AF37]">{t.hero.pricingCard.watchIntro}</p>
                  <p className="text-xs text-white/50">See how we teach</p>
               </div>
            </div>

            {/* Pricing Details */}
            <div className="bg-[#052e1b]/40 rounded-3xl p-8 border border-[#D4AF37]/10 text-center">
               <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-2">{t.hero.pricingCard.startingFrom}</p>
               <div className="flex items-center justify-center gap-1 mb-2">
                 <span className="text-6xl font-bold text-white">{t.hero.pricingCard.price}</span>
                 <span className="text-white/40">{t.hero.pricingCard.perMonth}</span>
               </div>
               <p className="text-white/50 text-sm mb-8">{t.hero.pricingCard.details}</p>
             <a 
            href="https://wa.me/yournumberhere" 
            target="_blank" 
            rel="noopener noreferrer">  <button className="w-full py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-xl">
                 {t.hero.pricingCard.btn}
               </button></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

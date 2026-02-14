
import React, { useState, useEffect } from 'react';

interface SurahCarouselProps {
  translations: any;
}

const SurahCarousel: React.FC<SurahCarouselProps> = ({ translations: t }) => {
  const [active, setActive] = useState(0);
  const surahs = [
    { name: "Al-Fatihah", ar: "الفاتحة", desc: "The Opening - The essence of the Quran, a prayer for guidance.", count: "7 Verses" },
    { name: "Al-Baqarah", ar: "البقرة", desc: "The Cow - Guidance on faith, laws, and the history of humanity.", count: "286 Verses" },
    { name: "Yaseen", ar: "يس", desc: "Heart of the Quran - Reflections on the majesty of the Creator.", count: "83 Verses" },
    { name: "Al-Kahf", ar: "الكهف", desc: "The Cave - Four powerful stories of faith, wealth, knowledge, and power.", count: "110 Verses" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % surahs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [surahs.length]);

  return (
    <section id="surahs" className="py-32 bg-[#0F5132]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-4">{t.featured.title}</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="relative bg-[#0F5132]/20 border border-[#D4AF37]/20 rounded-[3rem] p-10 sm:p-20 overflow-hidden shadow-2xl backdrop-blur-xl group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-[#D4AF37]/10 transition-all duration-1000"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
            <div className="w-full md:w-1/2 min-h-[300px] flex flex-col justify-center">
              {surahs.map((s, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-1000 ease-in-out ${active === idx ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute'}`}
                >
                  {active === idx && (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#D4AF37] font-cinzel text-sm font-bold tracking-widest uppercase">{s.count}</span>
                        <div className="h-[1px] w-12 bg-[#D4AF37]/40"></div>
                      </div>
                      <h3 className="font-cinzel text-4xl lg:text-6xl text-white font-bold mb-4">{s.name}</h3>
                      <p className="font-amiri text-5xl lg:text-7xl text-[#D4AF37] mb-8" dir="rtl">{s.ar}</p>
                      <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">{s.desc}</p>
                      <button className="px-10 py-4 bg-[#D4AF37] text-[#052e1b] rounded-xl font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl gold-glow">
                        {t.featured.readNow}
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
               <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  <div className="absolute inset-0 border-2 border-[#D4AF37]/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-8 border border-[#D4AF37]/10 rounded-full animate-spin-slow reverse-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 sm:w-60 sm:h-60 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#052e1b] font-cinzel text-7xl sm:text-9xl font-bold shadow-[0_0_60px_rgba(212,175,55,0.5)] transform hover:scale-105 transition-transform duration-500">
                      {surahs[active].name.charAt(0)}
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-12">
            {surahs.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ${active === i ? 'bg-[#D4AF37] w-12' : 'bg-[#D4AF37]/20 w-4'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .reverse-spin { animation-direction: reverse; }
      `}</style>
    </section>
  );
};

export default SurahCarousel;

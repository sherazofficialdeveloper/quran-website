
import React from 'react';

interface AyahHighlightProps {
  translations: any;
}

const AyahHighlight: React.FC<AyahHighlightProps> = ({ translations: t }) => {
  return (
    <section className="py-32 relative group">
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none flex items-center justify-center">
        <span className="font-amiri text-[25rem] text-[#D4AF37] leading-none whitespace-nowrap">القرآن الكريم</span>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12 inline-block">
          <svg className="w-24 h-24 text-[#D4AF37] mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        
        <h2 className="font-amiri text-5xl sm:text-7xl text-[#D4AF37] font-bold mb-12 leading-tight drop-shadow-lg" dir="rtl">
          {t.ayah.arabic}
        </h2>
        
        <div className="relative max-w-3xl mx-auto px-8 py-10 rounded-2xl border border-[#D4AF37]/10 bg-[#0F5132]/10 backdrop-blur-md">
          <p className="font-light text-2xl sm:text-3xl text-white/90 italic mb-8 leading-relaxed">
            "{t.ayah.translation}"
          </p>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <span className="font-cinzel text-lg text-[#D4AF37] tracking-widest font-bold">
            {t.ayah.ref}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AyahHighlight;

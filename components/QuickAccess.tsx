
import React from 'react';

interface QuickAccessProps {
  translations: any;
}

const QuickAccess: React.FC<QuickAccessProps> = ({ translations: t }) => {
  const items = [
    { title: t.quickAccess.readSurah, icon: '📖', color: 'from-amber-400 to-amber-600' },
    { title: t.quickAccess.readPara, icon: '📑', color: 'from-emerald-400 to-emerald-600' },
    { title: t.quickAccess.allAyahs, icon: '✨', color: 'from-gold-400 to-gold-600' },
    { title: t.quickAccess.exploreTopics, icon: '🔍', color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="group relative p-10 rounded-[2.5rem] bg-[#0F5132]/20 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-700 cursor-pointer flex flex-col items-center text-center hover:-translate-y-4 shadow-xl overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-transparent transition-all duration-1000"></div>
            
            <div className="relative z-10">
              <div className="text-8xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                {item.icon}
              </div>
              <h3 className="font-cinzel text-xl text-white font-bold group-hover:text-[#D4AF37] transition-colors leading-tight">
                {item.title}
              </h3>
              <div className="mt-6 w-12 h-1 bg-[#D4AF37]/20 mx-auto rounded-full group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickAccess;

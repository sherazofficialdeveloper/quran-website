
import React from 'react';

interface FeaturedSurahsProps {
  translations: any;
}

// Fixed: Explicitly typed SurahCard as React.FC to handle the 'key' prop in JSX and satisfy type checks
const SurahCard: React.FC<{ name: string; arabicName: string; desc: string; readNow: string }> = ({ name, arabicName, desc, readNow }) => (
  <div className="group bg-[#0F5132]/30 border border-[#D4AF37]/20 p-8 rounded-2xl hover:bg-[#0F5132]/50 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col items-center text-center transform hover:-translate-y-2">
    <div className="w-24 h-24 mb-6 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37]/10 transition-all duration-500">
      <span className="font-amiri text-5xl font-bold">{arabicName.charAt(0)}</span>
    </div>
    <div className="mb-2">
      <h3 className="font-cinzel text-xl text-white font-bold mb-1 tracking-wide">{name}</h3>
      <p className="font-amiri text-[#D4AF37] text-2xl font-bold mb-4">{arabicName}</p>
    </div>
    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
      {desc}
    </p>
    <button className="w-full py-3 px-6 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-sm group-hover:bg-[#D4AF37] group-hover:text-[#052e1b] transition-all duration-300">
      {readNow}
    </button>
  </div>
);

const FeaturedSurahs: React.FC<FeaturedSurahsProps> = ({ translations: t }) => {
  const surahs = [
    {
      name: "Al-Fatihah",
      arabicName: "الفاتحة",
      desc: "The Opening - A prayer for guidance, lordship and mercy of Allah. Essential for every prayer.",
    },
    {
      name: "Al-Baqarah",
      arabicName: "البقرة",
      desc: "The Cow - The longest chapter, detailing laws, stories, and the majesty of our Creator.",
    },
    {
      name: "Al-Kahf",
      arabicName: "الكهف",
      desc: "The Cave - A spiritual refuge featuring the story of the sleepers and the journey of Khidr.",
    }
  ];

  return (
    <section id="surahs" className="py-24 bg-[#052e1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl sm:text-4xl text-white font-bold mb-4">{t.featured.title}</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {surahs.map((surah, idx) => (
            <SurahCard 
              key={idx}
              name={surah.name}
              arabicName={surah.arabicName}
              desc={surah.desc}
              readNow={t.featured.readNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSurahs;


import React from 'react';

interface SearchBarProps {
  translations: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ translations: t }) => {
  return (
    <section className="py-16 relative z-20 -mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#052e1b] border-2 border-[#D4AF37]/20 rounded-[3rem] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.6)] group">
          <div className="relative flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder={t.search.placeholder}
                className="w-full bg-[#0F5132]/30 border-2 border-transparent focus:border-[#D4AF37]/50 rounded-[2rem] px-10 py-7 text-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity">
                 <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
              </div>
            </div>
            <button className="w-full sm:w-auto whitespace-nowrap px-14 py-7 bg-[#D4AF37] text-[#052e1b] font-bold text-xl rounded-[2rem] hover:bg-white hover:scale-105 transition-all duration-500 shadow-xl gold-glow">
              {t.search.button}
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6 px-6">
            <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-full hover:bg-[#D4AF37]/10 transition-colors">By Name</button>
            <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-full hover:bg-[#D4AF37]/10 transition-colors">By Number</button>
            <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-full hover:bg-[#D4AF37]/10 transition-colors">By Para</button>
            <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-full hover:bg-[#D4AF37]/10 transition-colors">By Subject</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;

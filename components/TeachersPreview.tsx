
import React from 'react';

interface Props {
  translations: any;
}

const TeachersPreview: React.FC<Props> = ({ translations: t }) => {
  return (
    <section id="teachers" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left rtl:text-right">
            <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-6">Meet Our Expert Teachers</h2>
            <p className="text-white/50 text-lg max-w-2xl font-light">Learn from certified scholars who are passionate about sharing the light of the Quran.</p>
          </div>
          <button className="px-8 py-4 border-2 border-[#D4AF37]/40 text-[#D4AF37] font-bold rounded-xl hover:bg-[#D4AF37] hover:text-[#052e1b] transition-all">
            View All Teachers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-[#0F5132]/30 rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-500">
              <div className="h-64 bg-[#052e1b] relative overflow-hidden flex items-center justify-center">
                 <div className="w-40 h-40 rounded-full border-4 border-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-700 bg-gradient-to-br from-[#D4AF37]/10 to-[#0F5132] flex items-center justify-center">
                    <span className="text-6xl">👤</span>
                 </div>
              </div>
              <div className="p-10 text-center">
                <h3 className="font-cinzel text-2xl text-white font-bold mb-2">Sheikh Hafiz {i === 1 ? 'Zubair' : i === 2 ? 'Mariam' : 'Omar'}</h3>
                <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-6">Master of Tajweed</p>
                <p className="text-white/40 text-sm italic mb-8">"Committed to making Quranic learning an easy and spiritual journey for all age groups."</p>
                <div className="flex justify-center gap-4">
                   <div className="px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 uppercase font-bold tracking-tighter">Certified Scholar</div>
                   <div className="px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 uppercase font-bold tracking-tighter">8+ Yrs Exp</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersPreview;

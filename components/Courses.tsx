
import React from 'react';

interface Props {
  translations: any;
}

const Courses: React.FC<Props> = ({ translations: t }) => {
  return (
    <section id="courses" className="py-32 bg-[#052e1b]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4">Our Course Catalog</div>
          <h2 className="font-cinzel text-4xl sm:text-6xl text-white font-bold mb-6">
            Explore Our <span className="text-[#D4AF37]">Premium Courses</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            {t.courses.subtitle}
          </p>
        </div>

        {/* Featured Big Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {t.courses.featured.map((item: any, i: number) => (
            <div key={i} className="group bg-[#0F5132]/40 border border-[#D4AF37]/20 p-10 rounded-[3rem] hover:border-[#D4AF37] transition-all flex flex-col hover:-translate-y-2 relative overflow-hidden">
               <div className="absolute top-6 right-6 px-3 py-1 bg-[#D4AF37] text-[#052e1b] rounded-full text-[10px] font-bold uppercase tracking-widest">
                 {item.tag}
               </div>
               <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-5xl mb-8 group-hover:bg-[#D4AF37] transition-all">
                 📖
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
               <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
               <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                 <span className="text-[#D4AF37] text-xs font-bold uppercase">{item.level}</span>
                 <button className="text-[#D4AF37] text-sm font-bold flex items-center gap-2 group/btn">
                   View Details <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                 </button>
               </div>
            </div>
          ))}
        </div>

        {/* Small Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.courses.grid.map((item: any, i: number) => (
            <div key={i} className="bg-[#0F5132]/20 border border-white/5 p-6 rounded-2xl hover:border-[#D4AF37]/40 transition-all group flex flex-col">
              <div className="text-3xl mb-4 opacity-40 group-hover:opacity-100 transition-opacity">📚</div>
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <div className="mt-auto flex items-center justify-between opacity-40 group-hover:opacity-100">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37]">{item.duration}</span>
                <span className="text-[10px] uppercase font-bold text-white/50">{item.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-12 py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold hover:bg-white transition-all shadow-xl">
             View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;


import React from 'react';

interface Props {
  translations: any;
}

const AboutPage: React.FC<Props> = ({ translations: t }) => {
  const content = t.aboutPage;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover opacity-50 bg-center bg-[url('https://images.unsplash.com/photo-1597505495109-7fc35bb64d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVyYW4lMjBpc2xhbWljfGVufDB8fDB8fHww')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center ">
          <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 animate-fade-up">
            {content.hero.badge}
          </div>
          <h1 className="font-cinzel text-3xl sm:text-6xl text-[#D4AF37] font-semibold mb-8 leading-tight animate-fade-up">
            {content.hero.title}
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-up">
            {content.hero.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-[#D4AF37] font-medium animate-fade-up">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{content.hero.trust}</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#0F5132]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{content.mission.badge}</div>
              <h2 className="font-cinzel text-3xl sm:text-5xl text-[#D4AF37] font-semibold mb-8">{content.mission.title}</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {content.mission.desc}
              </p>
              <p className="text-white/70 text-lg leading-relaxed italic border-l-4 border-[#D4AF37] pl-6 py-2">
                {content.mission.focus}
              </p>
            </div>
            <div className="relative reveal">
               <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-[#D4AF37]/20">
                 <img 
                   src="https://images.squarespace-cdn.com/content/v1/5b0e1647e17ba37eb617f7ca/1615264732132-RKJNCDIIO8GJHDB7UKM6/quraan1.jpg" 
                   alt="Mission" 
                   className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#D4AF37] rounded-3xl -z-10 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Teacher */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <div className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{content.teacher.badge}</div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold mb-4">{content.teacher.name}</h2>
            <p className="text-[#D4AF37] font-medium uppercase tracking-widest text-sm">{content.teacher.title}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="reveal order-2 lg:order-1">
              <p className="text-white/70 text-xl leading-relaxed mb-12">
                {content.teacher.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {content.teacher.values.map((val: any, i: number) => (
                  <div key={i} className="bg-[#0F5132]/30 p-6 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                    <h4 className="text-[#D4AF37] font-bold mb-2 group-hover:translate-x-1 transition-transform">{val.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D4AF37] rounded-[4rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
                  <img 
                    src="sajid.png" 
                    alt={content.teacher.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#052e1b]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <div className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{content.services.badge}</div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold">{content.services.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((service: any, i: number) => (
              <div key={i} className="reveal group bg-[#0F5132]/20 p-10 rounded-[2.5rem] border border-white/5 hover:border-[#D4AF37]/40 transition-all hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-3xl mb-8 group-hover:bg-[#D4AF37] group-hover:text-[#052e1b] transition-all">
                  ✨
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0F5132]/40 rounded-[4rem] p-8 sm:p-20 border border-[#D4AF37]/20 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 blur-[120px]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{content.philosophy.badge}</div>
                <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold mb-8">{content.philosophy.title}</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  {content.philosophy.desc}
                </p>
                <div className="space-y-4">
                  {content.philosophy.points.map((point: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-3xl overflow-hidden"><img src="https://res.cloudinary.com/jerrick/image/upload/c_scale%2Cf_jpg%2Cq_auto/690ab35c0f37aa001d7248f5.jpg" className="hover:scale-105 transition-all duration-500 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" /></div>
                  <div className="aspect-square rounded-3xl overflow-hidden bg-[#D4AF37]/20 flex items-center justify-center text-4xl"><img src="https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHF1cmFufGVufDB8fDB8fHww" className="hover:scale-105 transition-all duration-500 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" /></div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-[#D4AF37]/10 flex items-center justify-center text-4xl"><img src="https://plus.unsplash.com/premium_photo-1677965780516-58dbb8dd7a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHF1cmFufGVufDB8fDB8fHww" className="hover:scale-105 transition-all duration-500 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" /></div>
                  <div className="aspect-square rounded-3xl overflow-hidden"><img src="https://png.pngtree.com/thumb_back/fw800/background/20251009/pngtree-children-learning-about-islam-and-the-quran-in-a-classroom-setting-image_19788798.webp" className="hover:scale-105 transition-all duration-500 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <div className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{content.reassurance.badge}</div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold">{content.reassurance.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {content.reassurance.items.map((item: any, i: number) => (
              <div key={i} className="reveal flex gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-2xl group-hover:bg-[#D4AF37] group-hover:text-[#052e1b] transition-all duration-500">
                  {i === 0 ? '🛡️' : i === 1 ? '🤝' : i === 2 ? '💎' : '⏳'}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#D4AF37] mb-3">{item.title}</h4>
                  <p className="text-white/50 group-hover:text-white leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl reveal">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#pattern)" />
                <defs>
                  <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
              </svg>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-[#052e1b] font-bold mb-6 relative z-10">{content.cta.title}</h2>
            <p className="text-[#052e1b]/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">{content.cta.subtitle}</p>
           <a 
            href="https://wa.me/923030713623" 
            target="_blank" 
            rel="noopener noreferrer"> <button className=" px-10 py-5 bg-[#052e1b] text-[#D4AF37] rounded-2xl md:font-bold text-sm md:text-lg hover:bg-white hover:text-[#052e1b] transition-all duration-300 shadow-xl relative z-10 uppercase tracking-widest">
              {content.cta.btn}
            </button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

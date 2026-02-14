
import React, { useState } from 'react';

interface Props {
  translations: any;
}

const QiraatPage: React.FC<Props> = ({ translations: t }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isRtl = t.dir === 'rtl';
  const q = t.qiraatPage;

  if (!q) {
      return <div className="min-h-screen pt-40 text-center">Loading...</div>;
  }

  return (
    <div className={`pt-24 pb-0 bg-[#052e1b] ${isRtl ? 'font-amiri' : 'font-poppins'}`}>
      {/* Hero Section - STRICT GREEN/GOLD THEME */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 animate-fade-up ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">{q.hero?.badge}</span>
          </div>
          <h1 className="font-cinzel text-5xl lg:text-8xl font-bold text-white leading-tight">
            {q.hero?.title} <span className="text-[#D4AF37] block mt-2 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">{q.hero?.titleHighlight}</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-xl font-light italic">
            {q.hero?.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {q.hero?.boxes?.map((label: string, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center gap-5 group hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-700">
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:bg-[#D4AF37]/30 transition-all shadow-xl">
                  {i === 0 ? '📜' : i === 1 ? '🖋️' : i === 2 ? '📜' : '🏆'}
                </div>
                <span className="text-sm font-bold text-white/90 tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/yournumberhere" 
            target="_blank" 
            rel="noopener noreferrer"> <button className="px-12 mt-5 py-5 bg-[#D4AF37] text-[#052e1b] rounded-3xl font-bold hover:scale-105 transition-all shadow-2xl uppercase tracking-widest text-sm">
            {q.hero.mainBtn} →
          </button></a>
        </div>

        {/* Hero Card - GREEN/GOLD GRADIENT */}
        <div className="relative animate-fade-up group" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[120px] rounded-full group-hover:bg-[#D4AF37]/15 transition-all duration-1000"></div>
          <div className="relative bg-[#0F5132]/60 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-[5rem] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 text-white text-9xl">☪</div>
            
            <div className="bg-gradient-to-br from-[#0F5132] via-[#052e1b] to-[#0F5132] p-12 rounded-[4rem] text-center mb-12 border border-[#D4AF37]/20 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
              <h2 className="font-amiri text-5xl text-white mb-6 relative z-10 font-bold leading-relaxed">إِنَّ هَٰذَا الْقُرْآنَ أُنْزِلَ عَلَىٰ سَبْعَةِ أَحْرُفٍ</h2>
              <p className="text-[#D4AF37] text-base italic mb-4 relative z-10 font-bold">"Indeed, this Quran was revealed in multiple modes"</p>
              <div className="inline-block px-6 py-2 bg-black/40 rounded-full text-[10px] text-white/80 uppercase font-bold tracking-[0.4em] relative z-10">Hadith Al-Bukhari</div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {q.hero?.stats?.map((stat: any, i: number) => (
                <div key={i} className="text-center bg-white/[0.03] p-6 rounded-[2.5rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all group/stat">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2 group-hover/stat:scale-110 transition-transform">{stat.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.02] rounded-[3.5rem] p-10 border border-white/5 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-7xl font-bold text-white tracking-tighter">{q.hero?.price}</span>
                <div className="text-left">
                  <div className="text-white/40 text-lg uppercase font-bold tracking-widest">{q.hero?.perMonth}</div>
                  <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest leading-none">Starting From</div>
                </div>
              </div>
              <p className="text-white/30 text-xs mb-10 tracking-[0.2em] font-bold">{q.hero?.details}</p>
              <button className="w-full py-6 bg-white/[0.05] border border-[#D4AF37]/30 text-[#D4AF37] rounded-3xl font-bold transition-all shadow-xl hover:bg-[#D4AF37] hover:text-[#052e1b]">
                {q.hero?.trialBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Roadmap Section */}
      <section className="py-32 bg-[#052e1b] reveal">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-32">
             <div className="inline-block px-6 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-8">{q.roadmap?.badge}</div>
             <h2 className="font-cinzel text-5xl sm:text-8xl text-white font-bold mb-10">{q.roadmap?.title}</h2>
             <p className="text-white/40 max-w-2xl mx-auto text-xl font-light italic">{q.roadmap?.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0"></div>

            <div className="space-y-48">
              {q.roadmap?.phases?.map((phase: any, i: number) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-[45%]">
                     <div className={`bg-[#0F5132]/40 border border-white/5 p-12 rounded-[4rem] hover:border-[#D4AF37]/40 hover:bg-[#0F5132]/60 transition-all duration-1000 group shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative ${isRtl ? 'text-right' : 'text-left'}`}>
                        <div className={`flex justify-between items-start mb-10 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                           <h3 className="text-3xl font-bold text-white font-cinzel group-hover:text-[#D4AF37] transition-colors pr-10">{phase.title}</h3>
                           <span className="flex-shrink-0 text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-6 py-2 rounded-full uppercase tracking-[0.2em] bg-[#D4AF37]/5">{phase.duration}</span>
                        </div>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">{phase.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                          {phase.bullets?.map((b: string, j: number) => (
                            <li key={j} className={`flex items-center gap-4 text-white/40 text-sm ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="w-6 h-6 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-[10px] font-bold">✓</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-[#D4AF37]/5 p-8 rounded-3xl border border-[#D4AF37]/20">
                           <div className={`flex items-center gap-4 mb-3 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="text-3xl">🎓</span>
                              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.4em]">Scholarly Outcome:</span>
                           </div>
                           <p className="text-sm text-white/80 leading-relaxed italic">{phase.outcome}</p>
                        </div>
                     </div>
                  </div>
                  <div className="z-10 w-24 h-24 rounded-full bg-[#052e1b] border-4 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-4xl font-bold shadow-[0_0_80px_rgba(212,175,55,0.3)] relative">
                    <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-10"></div>
                    {i + 1}
                  </div>
                  <div className="hidden md:block w-full md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completion Milestone */}
      <section className="py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#D4AF37]/5 via-[#0F5132] to-[#D4AF37]/5 rounded-[5rem] p-16 sm:p-32 text-center border-y border-[#D4AF37]/20 relative shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-110 transition-transform duration-[10s]"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#052e1b] text-5xl mx-auto mb-12 shadow-[0_0_100px_rgba(212,175,55,0.5)]">🎖️</div>
              <h2 className="font-cinzel text-5xl sm:text-8xl font-bold text-white mb-8 tracking-tighter">{q.completion?.title}</h2>
              <p className="text-[#D4AF37] max-w-4xl mx-auto text-2xl font-light italic leading-relaxed opacity-80">
                "{q.completion?.desc}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - DARK GRID */}
      <section className="py-32 reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#D4AF37] text-xs font-bold tracking-[0.6em] uppercase mb-8 flex items-center justify-center gap-6">
             <span className="w-16 h-[1px] bg-[#D4AF37]/30"></span> {q.benefits?.badge} <span className="w-16 h-[1px] bg-[#D4AF37]/30"></span>
          </div>
          <h2 className="font-cinzel text-5xl sm:text-9xl text-white font-bold mb-24 tracking-tight">{q.benefits?.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {q.benefits?.items?.map((item: any, i: number) => (
              <div key={i} className={`bg-white/[0.02] border border-white/5 p-16 rounded-[4rem] hover:border-[#D4AF37]/50 hover:bg-white/[0.04] transition-all duration-700 flex flex-col items-center gap-10 ${isRtl ? 'text-right' : 'text-center'}`}>
                <div className="w-24 h-24 rounded-[2rem] bg-[#D4AF37]/10 flex items-center justify-center text-5xl text-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.1)]">{item.icon}</div>
                <div className="max-w-md">
                   <h3 className="text-3xl font-bold text-white mb-6 font-cinzel tracking-widest">{item.title}</h3>
                   <p className="text-white/40 text-xl leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-[5rem] p-16 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none text-9xl">✨</div>
             <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-sm mb-16">Scholarly Privileges Included</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                {q.benefits?.perks?.map((perk: string, i: number) => (
                  <div key={i} className={`flex items-center gap-5 text-white/60 text-lg font-light ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"></span> {perk}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 reveal">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-24">
             <div className="text-[#D4AF37] text-sm font-bold tracking-[0.5em] uppercase mb-6">{q.faqs?.badge}</div>
             <h2 className="font-cinzel text-5xl sm:text-7xl text-white font-bold tracking-tight">{q.faqs?.title}</h2>
          </div>
          <div className="space-y-6">
            {q.faqs?.questions?.map((item: any, i: number) => (
              <div key={i} className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-[#D4AF37]/40 transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full px-12 py-10 flex items-center justify-between hover:bg-[#D4AF37]/5 transition-all ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                >
                  <span className="font-bold text-white text-2xl">{i + 1}. {item.q}</span>
                  <span className={`text-[#D4AF37] transition-all text-4xl ${openFaq === i ? 'rotate-180' : 'opacity-40'}`}>▾</span>
                </button>
                <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                   <div className={`px-12 pb-12 text-white/50 leading-relaxed border-t border-white/5 pt-10 text-lg font-light ${isRtl ? 'text-right' : 'text-left'}`}>
                     {item.a}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-gradient-to-br from-[#0F5132] via-[#052e1b] to-[#0F5132] rounded-[6rem] p-16 sm:p-32 relative overflow-hidden group shadow-2xl border border-[#D4AF37]/20">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                 <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                    <h2 className="font-cinzel text-5xl lg:text-8xl font-bold text-white mb-10 leading-tight tracking-tighter">
                       {isRtl ? 'اپنے قرآنی سفر کا آغاز کریں' : 'Begin Your Sacred Quran Journey'}
                    </h2>
                    <p className="text-white/50 text-2xl mb-16 leading-relaxed max-w-xl font-light italic">
                       Join 10,000+ students worldwide who transformed their lives. Start your trial class today.
                    </p>
                 </div>
                 
                 <div className="bg-white rounded-[4rem] p-16 text-[#052e1b] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-12">
                       <h3 className="text-4xl font-bold mb-4 tracking-tighter">Start Your FREE Trial</h3>
                       <p className="text-gray-500 text-lg">No Credit Card • Scholarly Evaluation</p>
                    </div>
                    <div className="space-y-6">
                       <button className="w-full py-6 bg-[#25D366] text-white rounded-3xl font-bold text-xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl">
                          WhatsApp Now →
                       </button>
                       <button className="w-full py-6 bg-[#052e1b] text-white rounded-3xl font-bold text-xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl">
                          Call Us Directly
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default QiraatPage;

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
    <div className={`pt-20 sm:pt-24 pb-0 bg-[#052e1b] ${isRtl ? 'font-amiri' : 'font-poppins'}`}>
      {/* Hero Section - STRICT GREEN/GOLD THEME */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className={`space-y-6 sm:space-y-8 animate-fade-up ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">{q.hero?.badge}</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-8xl font-bold text-white leading-tight">
            {q.hero?.title} <span className="text-[#D4AF37] block mt-1 sm:mt-2 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] text-2xl sm:text-5xl lg:text-8xl break-words">{q.hero?.titleHighlight}</span>
          </h1>
          <p className="text-white/60 text-base sm:text-xl leading-relaxed max-w-xl font-light italic break-words">
            {q.hero?.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
            {q.hero?.boxes?.map((label: string, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] flex items-center gap-3 sm:gap-5 group hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-700">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#D4AF37]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 group-hover:bg-[#D4AF37]/30 transition-all shadow-xl flex-shrink-0">
                  {i === 0 ? '📜' : i === 1 ? '🖋️' : i === 2 ? '📜' : '🏆'}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white/90 tracking-wide break-words">{label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/923030713623" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-6 sm:px-12 mt-3 sm:mt-5 py-4 sm:py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl sm:rounded-3xl font-bold hover:scale-105 transition-all shadow-2xl uppercase tracking-widest text-xs sm:text-sm whitespace-normal">
              {q.hero.mainBtn} →
            </button>
          </a>
        </div>

        {/* Hero Card - GREEN/GOLD GRADIENT */}
        <div className="relative animate-fade-up group" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[80px] sm:blur-[120px] rounded-full group-hover:bg-[#D4AF37]/15 transition-all duration-1000"></div>
          <div className="relative bg-[#0F5132]/60 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-3xl sm:rounded-[3rem] lg:rounded-[5rem] p-4 sm:p-8 lg:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 text-white text-6xl sm:text-9xl">☪</div>
            
            <div className="bg-gradient-to-br from-[#0F5132] via-[#052e1b] to-[#0F5132] p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] text-center mb-6 sm:mb-8 lg:mb-12 border border-[#D4AF37]/20 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
              <h2 className="font-amiri text-2xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 lg:mb-6 relative z-10 font-bold leading-relaxed break-words">إِنَّ هَٰذَا الْقُرْآنَ أُنْزِلَ عَلَىٰ سَبْعَةِ أَحْرُفٍ</h2>
              <p className="text-[#D4AF37] text-xs sm:text-sm lg:text-base italic mb-2 sm:mb-3 lg:mb-4 relative z-10 font-bold break-words">"Indeed, this Quran was revealed in multiple modes"</p>
              <div className="inline-block px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 bg-black/40 rounded-full text-[8px] sm:text-[10px] text-white/80 uppercase font-bold tracking-[0.2em] sm:tracking-[0.4em] relative z-10">Hadith Al-Bukhari</div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
              {q.hero?.stats?.map((stat: any, i: number) => (
                <div key={i} className="text-center bg-white/[0.03] p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all group/stat">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-1 sm:mb-2 group-hover/stat:scale-110 transition-transform break-words">{stat.val}</div>
                  <div className="text-[7px] sm:text-[9px] lg:text-[10px] text-white/40 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold break-words">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.02] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3.5rem] p-4 sm:p-6 lg:p-10 border border-white/5 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 flex-wrap">
                <span className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tighter">{q.hero?.price}</span>
                <div className="text-left">
                  <div className="text-white/40 text-xs sm:text-sm lg:text-lg uppercase font-bold tracking-widest">{q.hero?.perMonth}</div>
                  <div className="text-[#D4AF37] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest leading-none">Starting From</div>
                </div>
              </div>
              <p className="text-white/30 text-[10px] sm:text-xs mb-6 sm:mb-8 lg:mb-10 tracking-[0.1em] sm:tracking-[0.2em] font-bold break-words">{q.hero?.details}</p>
              <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer" className="block w-full">
              <button className="w-full py-4 sm:py-5 lg:py-6 bg-white/[0.05] border border-[#D4AF37]/30 text-[#D4AF37] rounded-xl sm:rounded-2xl lg:rounded-3xl font-bold transition-all shadow-xl hover:bg-[#D4AF37] hover:text-[#052e1b] text-sm sm:text-base">
                {q.hero?.trialBtn}
              </button></a> 
            </div>
          </div>
        </div>
      </section>

      {/* Course Roadmap Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#052e1b] reveal">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 sm:mb-24 lg:mb-32">
             <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 lg:mb-8">{q.roadmap?.badge}</div>
             <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-8xl text-white font-bold mb-4 sm:mb-6 lg:mb-10 px-2 break-words">{q.roadmap?.title}</h2>
             <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-light italic px-2 break-words">{q.roadmap?.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] sm:w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0"></div>

            <div className="space-y-24 sm:space-y-32 lg:space-y-48">
              {q.roadmap?.phases?.map((phase: any, i: number) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-[45%]">
                     <div className={`bg-[#0F5132]/40 border border-white/5 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] hover:border-[#D4AF37]/40 hover:bg-[#0F5132]/60 transition-all duration-1000 group shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative ${isRtl ? 'text-right' : 'text-left'}`}>
                        <div className={`flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-6 sm:mb-8 lg:mb-10 ${isRtl ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                           <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-cinzel group-hover:text-[#D4AF37] transition-colors pr-4 sm:pr-6 lg:pr-10 break-words">{phase.title}</h3>
                           <span className="flex-shrink-0 text-[8px] sm:text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-4 sm:px-5 lg:px-6 py-1 sm:py-1.5 lg:py-2 rounded-full uppercase tracking-[0.1em] sm:tracking-[0.2em] bg-[#D4AF37]/5 whitespace-nowrap">{phase.duration}</span>
                        </div>
                        <p className="text-white/60 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light break-words">{phase.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                          {phase.bullets?.map((b: string, j: number) => (
                            <li key={j} className={`flex items-center gap-2 sm:gap-3 lg:gap-4 text-white/40 text-xs sm:text-sm ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-[8px] sm:text-[10px] font-bold flex-shrink-0">✓</span>
                              <span className="break-words">{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-[#D4AF37]/5 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#D4AF37]/20">
                           <div className={`flex items-center gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="text-xl sm:text-2xl lg:text-3xl">🎓</span>
                              <span className="text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] sm:tracking-[0.4em]">Scholarly Outcome:</span>
                           </div>
                           <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic break-words">{phase.outcome}</p>
                        </div>
                     </div>
                  </div>
                  <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#052e1b] border-4 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold shadow-[0_0_80px_rgba(212,175,55,0.3)] relative flex-shrink-0">
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
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#D4AF37]/5 via-[#0F5132] to-[#D4AF37]/5 rounded-3xl sm:rounded-[4rem] lg:rounded-[5rem] p-6 sm:p-12 lg:p-16 xl:p-32 text-center border-y border-[#D4AF37]/20 relative shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-110 transition-transform duration-[10s]"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#052e1b] text-3xl sm:text-4xl lg:text-5xl mx-auto mb-6 sm:mb-8 lg:mb-12 shadow-[0_0_100px_rgba(212,175,55,0.5)]">🎖️</div>
              <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 tracking-tighter px-2 break-words">{q.completion?.title}</h2>
              <p className="text-[#D4AF37] max-w-4xl mx-auto text-base sm:text-xl lg:text-2xl font-light italic leading-relaxed opacity-80 px-2 break-words">
                "{q.completion?.desc}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - DARK GRID */}
      <section className="py-16 sm:py-24 lg:py-32 reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.5em] lg:tracking-[0.6em] uppercase mb-4 sm:mb-6 lg:mb-8 flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap">
             <span className="w-8 sm:w-10 lg:w-16 h-[1px] bg-[#D4AF37]/30"></span> {q.benefits?.badge} <span className="w-8 sm:w-10 lg:w-16 h-[1px] bg-[#D4AF37]/30"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-7xl xl:text-9xl text-white font-bold mb-12 sm:mb-16 lg:mb-24 tracking-tight px-2 break-words">{q.benefits?.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            {q.benefits?.items?.map((item: any, i: number) => (
              <div key={i} className={`bg-white/[0.02] border border-white/5 p-6 sm:p-10 lg:p-12 xl:p-16 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] hover:border-[#D4AF37]/50 hover:bg-white/[0.04] transition-all duration-700 flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 ${isRtl ? 'text-right' : 'text-center'}`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] bg-[#D4AF37]/10 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl text-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.1)]">{item.icon}</div>
                <div className="max-w-md">
                   <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 font-cinzel tracking-widest break-words">{item.title}</h3>
                   <p className="text-white/40 text-base sm:text-lg lg:text-xl leading-relaxed font-light break-words">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] xl:rounded-[5rem] p-4 sm:p-8 lg:p-12 xl:p-16 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-10 sm:p-12 lg:p-16 xl:p-20 opacity-5 pointer-events-none text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">✨</div>
             <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em] text-xs sm:text-sm mb-8 sm:mb-10 lg:mb-12 xl:mb-16">Scholarly Privileges Included</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 text-left">
                {q.benefits?.perks?.map((perk: string, i: number) => (
                  <div key={i} className={`flex items-center gap-3 sm:gap-4 lg:gap-5 text-white/60 text-sm sm:text-base lg:text-lg font-light ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,1)] flex-shrink-0"></span> 
                    <span className="break-words">{perk}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 reveal">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
             <div className="text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em] uppercase mb-4 sm:mb-5 lg:mb-6">{q.faqs?.badge}</div>
             <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight px-2 break-words">{q.faqs?.title}</h2>
          </div>
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {q.faqs?.questions?.map((item: any, i: number) => (
              <div key={i} className="bg-white/[0.02] border border-white/10 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden group hover:border-[#D4AF37]/40 transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8 xl:py-10 flex items-center justify-between hover:bg-[#D4AF37]/5 transition-all ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                >
                  <span className="font-bold text-white text-base sm:text-lg lg:text-xl xl:text-2xl break-words pr-2">{i + 1}. {item.q}</span>
                  <span className={`text-[#D4AF37] transition-all text-2xl sm:text-3xl lg:text-4xl flex-shrink-0 ${openFaq === i ? 'rotate-180' : 'opacity-40'}`}>▾</span>
                </button>
                <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                   <div className={`px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 lg:pb-8 xl:pb-12 text-white/50 leading-relaxed border-t border-white/5 pt-4 sm:pt-6 lg:pt-8 xl:pt-10 text-sm sm:text-base lg:text-lg font-light ${isRtl ? 'text-right' : 'text-left'} break-words`}>
                     {item.a}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-gradient-to-br from-[#0F5132] via-[#052e1b] to-[#0F5132] rounded-3xl sm:rounded-[4rem] lg:rounded-[5rem] xl:rounded-[6rem] p-6 sm:p-12 lg:p-16 xl:p-32 relative overflow-hidden group shadow-2xl border border-[#D4AF37]/20">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center relative z-10">
                 <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                    <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 xl:mb-10 leading-tight tracking-tighter break-words">
                       {isRtl ? 'اپنے قرآنی سفر کا آغاز کریں' : 'Begin Your Sacred Quran Journey'}
                    </h2>
                    <p className="text-white/50 text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 xl:mb-16 leading-relaxed max-w-xl font-light italic break-words">
                       Join 10,000+ students worldwide who transformed their lives. Start your trial class today.
                    </p>
                 </div>
                 
                 <div className="bg-white rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-12 xl:p-16 text-[#052e1b] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
                       <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 tracking-tighter break-words">Start Your FREE Trial</h3>
                       <p className="text-gray-500 text-sm sm:text-base lg:text-lg break-words">No Credit Card • Scholarly Evaluation</p>
                    </div>
                   <div className="space-y-3 sm:space-y-4">
                      <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer" className="block w-full py-3 sm:py-4 bg-[#25D366] text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all text-sm sm:text-base"> 
                          WhatsApp Us Now →
                       </a>
                     <a 
            href="tel:+923030713623" className="block w-full py-3 sm:py-4 bg-[#0F5132] text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all text-sm sm:text-base">  
                          Call Us Directly
                       </a>
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
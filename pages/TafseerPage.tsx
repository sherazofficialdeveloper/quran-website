import React, { useState } from 'react';

interface Props {
  translations: any;
}

const TafseerPage: React.FC<Props> = ({ translations: t }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isRtl = t.dir === 'rtl';
  const q = t.tafseerPage;

  if (!q) return <div className="pt-40 text-center">Loading...</div>;

  return (
    <div className={`pt-20 sm:pt-24 pb-0 bg-[#052e1b] ${isRtl ? 'font-amiri' : 'font-poppins'}`}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className={`space-y-6 sm:space-y-8 animate-fade-up ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="text-xs sm:text-sm font-bold text-[#D4AF37]">✨</span>
            <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-widest">{q.hero?.badge}</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-7xl font-bold text-white leading-[1.1]">
            {q.hero?.title} <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] block text-2xl sm:text-4xl lg:text-7xl mt-2">{q.hero?.titleHighlight}</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl font-light">
            {q.hero?.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {q.hero?.boxes?.map((label: string, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center gap-3 sm:gap-5 group hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/40 transition-all duration-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all flex-shrink-0">
                  {i === 0 ? '📚' : i === 1 ? '🕌' : i === 2 ? '🕯️' : '📜'}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">{label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/923030713623" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full sm:w-auto"
          >  
            <button className="w-full sm:w-auto px-6 sm:px-12 mt-3 sm:mt-5 py-4 sm:py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl sm:rounded-3xl font-bold hover:scale-105 hover:bg-white transition-all shadow-2xl shadow-[#D4AF37]/20 uppercase tracking-[0.1em] sm:tracking-[0.2em] text-xs sm:text-sm">
              {q.hero?.mainBtn} →
            </button>
          </a>
        </div>

        {/* Hero Card */}
        <div className="relative animate-fade-up group mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[100px] rounded-full group-hover:bg-[#D4AF37]/20 transition-all duration-1000"></div>
          <div className="relative bg-[#0F5132]/40 backdrop-blur-xl border-2 border-[#D4AF37]/30 rounded-3xl sm:rounded-[4rem] p-4 sm:p-8 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#D4AF37]/40 via-[#B8860B]/40 to-[#D4AF37]/40 p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] text-center mb-6 sm:mb-10 border border-[#D4AF37]/20 relative overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
              <h2 className="font-amiri text-xl sm:text-2xl md:text-4xl text-white mb-3 sm:mb-4 relative z-10 font-bold leading-tight px-2">وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ</h2>
              <p className="text-white text-xs sm:text-sm italic mb-2 relative z-10 font-medium px-2">"And We have revealed to you the Book as clarification for all things"</p>
              <div className="inline-block px-3 sm:px-4 py-1 bg-black/20 rounded-full text-[8px] sm:text-[10px] text-white uppercase font-bold tracking-widest relative z-10">Surah An-Nahl (16:89)</div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-10">
              {q.hero?.stats?.map((stat: any, i: number) => (
                <div key={i} className="text-center bg-white/5 p-2 sm:p-4 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-[#D4AF37]/20 transition-all">
                  <div className="text-lg sm:text-2xl font-bold text-[#D4AF37] mb-0.5 sm:mb-1">{stat.val}</div>
                  <div className="text-[7px] sm:text-[9px] text-white/40 uppercase tracking-widest font-bold leading-tight px-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#D4AF37]/5 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 border border-[#D4AF37]/20 text-center">
              <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[#D4AF37] mb-2 sm:mb-4 font-bold">Starting From</p>
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-8">
                <span className="text-4xl sm:text-6xl font-bold text-white">{q.hero?.price}</span>
                <span className="text-white/40 text-xs sm:text-lg">{q.hero?.perMonth}</span>
              </div>
              <p className="text-white/30 text-[10px] sm:text-xs mb-4 sm:mb-8">{q.hero?.details}</p>
              <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer" className="block"> 
                <button className="w-full py-3 sm:py-5 bg-[#D4AF37] text-[#052e1b] rounded-xl sm:rounded-2xl font-bold transition-all shadow-xl hover:bg-white hover:scale-[1.02] text-xs sm:text-sm">
                  {q.hero?.trialBtn}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-16 sm:py-24 bg-[#052e1b] reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
             <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]"></span> {q.whatIs?.badge} <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-12 sm:mb-20 leading-tight px-2">{q.whatIs?.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {q.whatIs?.items?.map((item: any, i: number) => (
              <div key={i} className={`bg-[#0F5132]/20 border border-white/5 p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] hover:border-[#D4AF37]/30 transition-all ${isRtl ? 'text-right' : 'text-left'} relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-4 sm:p-8 text-6xl sm:text-8xl font-bold text-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">{i+1}</div>
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#D4AF37] text-[#052e1b] flex items-center justify-center font-bold text-2xl sm:text-4xl mb-4 sm:mb-8 group-hover:rotate-12 transition-transform shadow-lg mx-auto sm:mx-0">{i+1}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-cinzel">{item.title}</h3>
                <p className="text-white/50 leading-relaxed font-light text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Tafseer - GOLD THEME (Strict Palette) */}
      <section className="py-12 max-w-7xl mx-auto px-4 reveal">
        <div className="bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-3xl sm:rounded-[4rem] p-6 sm:p-10 md:p-16 relative overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(212,175,55,0.2)] group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className={`font-cinzel text-2xl sm:text-3xl font-bold text-[#052e1b] mb-8 sm:mb-12 flex items-center gap-3 sm:gap-6 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
               <span className="text-2xl sm:text-4xl text-[#052e1b]">✦</span> {q.whyLearn?.title}
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              {q.whyLearn?.points?.map((point: string, i: number) => (
                <div key={i} className={`flex items-start gap-3 sm:gap-5 group/item ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#052e1b]/10 border border-[#052e1b]/30 flex items-center justify-center text-[#052e1b] group-hover/item:bg-[#052e1b] group-hover/item:text-[#D4AF37] transition-all duration-300 flex-shrink-0 mt-0.5 text-xs sm:text-sm">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-[#052e1b] font-semibold group-hover/item:translate-x-1 transition-transform leading-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arabic Quote Section */}
      <section className="py-12 sm:py-16 text-center px-4 reveal">
        <div className="bg-[#D4AF37]/5 py-10 sm:py-16 rounded-3xl sm:rounded-[4rem] border-y border-[#D4AF37]/10">
          <h2 className="font-amiri text-2xl sm:text-3xl md:text-5xl text-white mb-4 sm:mb-6 leading-relaxed px-4">كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ</h2>
          <p className="text-[#D4AF37] font-cinzel text-base sm:text-xl italic mb-3 sm:mb-4 px-4">"A Book We have revealed to you so that you may bring mankind out of darkness into light"</p>
          <div className="text-[8px] sm:text-[10px] text-white/30 uppercase tracking-[0.4em] sm:tracking-[0.8em]">Surah Ibrahim (14:1)</div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 sm:py-24 bg-[#052e1b] reveal">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 sm:mb-24">
             <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-4 sm:mb-6">{q.roadmap?.badge}</div>
             <h2 className="font-cinzel text-3xl sm:text-5xl md:text-7xl text-white font-bold mb-4 sm:mb-8 px-2">{q.roadmap?.title}</h2>
             <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light px-4">{q.roadmap?.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] sm:w-[4px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0 hidden md:block"></div>

            <div className="space-y-16 sm:space-y-32">
              {q.roadmap?.phases?.map((phase: any, i: number) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-[45%]">
                     <div className={`bg-[#0F5132]/30 border border-white/5 p-6 sm:p-10 rounded-2xl sm:rounded-[3.5rem] hover:border-[#D4AF37]/40 hover:bg-[#0F5132]/40 transition-all duration-700 group shadow-2xl relative ${isRtl ? 'text-right' : 'text-left'}`}>
                        <div className={`flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-6 sm:mb-8 ${isRtl ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                           <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-cinzel group-hover:text-[#D4AF37] transition-colors pr-0 sm:pr-10">{phase.title}</h3>
                           <span className="inline-block text-[8px] sm:text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-widest bg-[#D4AF37]/5 whitespace-nowrap">{phase.duration}</span>
                        </div>
                        <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-light">{phase.desc}</p>
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {phase.bullets?.map((b: string, j: number) => (
                            <li key={j} className={`flex items-start gap-2 sm:gap-3 text-white/40 text-xs sm:text-sm ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-[8px] sm:text-[10px] flex-shrink-0 mt-0.5">✓</span>
                              <span className="leading-tight">{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-[#D4AF37]/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-[#D4AF37]/20">
                           <div className={`flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="text-lg sm:text-xl">🎓</span>
                              <span className="text-[8px] sm:text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Outcome:</span>
                           </div>
                           <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed">{phase.outcome}</p>
                        </div>
                     </div>
                  </div>
                  <div className="z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#052e1b] border-4 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-2xl sm:text-3xl font-bold shadow-[0_0_50px_rgba(212,175,55,0.4)] relative">
                    <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20"></div>
                    {i + 1}
                  </div>
                  <div className="hidden md:block w-full md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completion Banner - GOLD ACCENT (Strict Palette) */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#D4AF37]/5 via-[#0F5132] to-[#D4AF37]/5 rounded-3xl sm:rounded-[4rem] p-8 sm:p-12 md:p-20 text-center border-y border-[#D4AF37]/20 relative shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#052e1b] text-2xl sm:text-4xl mx-auto mb-6 sm:mb-10 shadow-[0_0_50px_rgba(212,175,55,0.5)]">📖</div>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">{q.completion?.title}</h2>
              <p className="text-white/70 max-w-3xl mx-auto text-base sm:text-xl font-light italic leading-relaxed px-4">
                "{q.completion?.desc}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-[#052e1b] reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
             <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]"></span> {q.benefits?.badge} <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-7xl text-white font-bold mb-12 sm:mb-16 px-2">{q.benefits?.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {q.benefits?.items?.map((item: any, i: number) => (
              <div key={i} className={`bg-[#0F5132]/20 border border-white/5 p-6 sm:p-10 rounded-2xl sm:rounded-[3.5rem] hover:border-[#D4AF37]/30 transition-all flex items-start gap-4 sm:gap-8 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] flex-shrink-0">{item.icon}</div>
                <div>
                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                   <p className="text-white/50 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-[3rem] p-6 sm:p-10">
             <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs sm:text-sm mb-6 sm:mb-10">Additional Perks Included</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                {q.benefits?.perks?.map((perk: string, i: number) => (
                  <div key={i} className={`flex items-start gap-2 sm:gap-3 text-white/60 text-xs sm:text-sm ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-[#D4AF37] flex-shrink-0">✔</span> 
                    <span className="leading-tight">{perk}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-[#052e1b]/30 reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">{q.pricing?.badge}</div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-4 sm:mb-6 px-2">{q.pricing?.title}</h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-12 sm:mb-20 text-sm sm:text-base px-4">{q.pricing?.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {q.pricing?.plans?.map((plan: any, i: number) => (
              <div key={i} className={`bg-[#0F5132]/30 border p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] relative flex flex-col group hover:-translate-y-4 transition-all ${plan.popular ? 'border-[#D4AF37] scale-105 z-10 shadow-2xl shadow-[#D4AF37]/20' : 'border-white/10 opacity-80'}`}>
                {plan.popular && <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#052e1b] px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Most Popular</div>}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-cinzel">{plan.name}</h3>
                <div className="mb-6 sm:mb-10">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-white/30 text-[10px] sm:text-xs">/mo</span>
                </div>
                <div className="text-white/60 text-xs sm:text-sm mb-6 sm:mb-10 pb-4 sm:pb-10 border-b border-white/5 font-medium">{plan.classes}</div>
                <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-12 flex-grow text-left">
                  {['Live 1-on-1 Classes', 'Digital course materials', 'Qualified Islamic Scholars', 'Advanced Discussions', 'Flexible Schedule'].map((f, j) => (
                    <li key={j} className={`text-[10px] sm:text-[11px] text-white/50 flex items-start gap-1.5 sm:gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                       <span className="text-[#D4AF37] flex-shrink-0">✔</span> 
                       <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all text-xs sm:text-sm ${plan.popular ? 'bg-[#D4AF37] text-[#052e1b]' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                   Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 reveal">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
             <div className="text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">{q.faqs?.badge}</div>
             <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white font-bold px-2">{q.faqs?.title}</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {q.faqs?.questions?.map((item: any, i: number) => (
              <div key={i} className="bg-[#0F5132]/20 border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                >
                  <span className="font-bold text-white text-sm sm:text-base lg:text-lg">{i + 1}. {item.q}</span>
                  <span className={`text-[#D4AF37] transition-transform text-xl sm:text-2xl flex-shrink-0 ml-2 ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                   <div className={`px-4 sm:px-8 pb-4 sm:pb-8 text-white/60 leading-relaxed border-t border-white/5 pt-4 sm:pt-6 text-xs sm:text-sm ${isRtl ? 'text-right' : 'text-left'}`}>
                     {item.a}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-3xl sm:rounded-[4rem] p-6 sm:p-12 md:p-20 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                 <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                    <div className={`text-[#052e1b] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                       <span className="w-6 sm:w-8 h-[1px] bg-[#052e1b]/40"></span> Limited Time Offer - Start Today!
                    </div>
                    <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#052e1b] mb-4 sm:mb-8 leading-tight">
                       {isRtl ? 'اپنے قرآنی سفر کا آغاز کریں' : 'Begin Your Sacred Quran Journey'}
                    </h2>
                    <p className="text-[#052e1b]/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed max-w-xl">
                       Join 10,000+ students worldwide. Start with your FREE trial class today - no credit card required!
                    </p>
                 </div>
                 
                 <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 text-[#052e1b] shadow-2xl">
                    <div className="text-center mb-6 sm:mb-10">
                       <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Start Your FREE Trial</h3>
                       <p className="text-gray-500 text-xs sm:text-sm">No Credit Card • No Commitment • 100% Free</p>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer" className="block w-full py-3 sm:py-4 bg-[#25D366] text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all text-sm sm:text-base"> 
                          WhatsApp Us Now →
                       </a>
                     <a 
                        href="tel:+923030713623" 
                        className="block w-full py-3 sm:py-4 bg-[#0F5132] text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all text-sm sm:text-base"
                      >  
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

export default TafseerPage;

import React, { useState } from 'react';

interface Props {
  translations: any;
}

const TajweedPage: React.FC<Props> = ({ translations: t }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const q = t.tajweedPage;
  const isRtl = t.dir === 'rtl';

  const masteryPath = [
    { 
      title: "Assessment & Revision", 
      duration: "1 week", 
      desc: "Evaluate current reading level and revise basic rules before moving to advanced Tajweed.", 
      bullets: ["Fluency check", "Makharij revision", "Common reading errors", "Personal improvement plan"],
      outcome: "Clear understanding of strengths and weaknesses" 
    },
    { 
      title: "Makharij & Sifaat", 
      duration: "2 weeks", 
      desc: "Deep mastery of pronunciation points and letter characteristics for a professional sound.", 
      bullets: ["Madd with Alif (aa sound)", "Madd with Waw (oo sound)", "Madd with Ya (ee sound)", "Correct length of elongation"],
      outcome: "Accurate and powerful pronunciation" 
    },
    { 
      title: "Rules of Noon & Meem Sakinah", 
      duration: "2 weeks", 
      desc: "Master essential Tajweed rules used throughout the Quran for smooth reading.", 
      bullets: ["Izhaar, Idghaam, Iqlab, Ikhfa", "Meem Sakinah rules", "Nasalization (Ghunnah)"],
      outcome: "Correct application of core Tajweed rules" 
    },
    { 
      title: "Madd (Elongation Rules)", 
      duration: "1 week", 
      desc: "Learn all types of elongation and correct timing for melodic recitation.", 
      bullets: ["Madd Tabee'i", "Madd Laazim", "Madd Munfasil & Muttasil", "Timing control"],
      outcome: "Balanced and accurate elongation" 
    },
    { 
      title: "Qalqalah & Special Letters", 
      duration: "1 week", 
      desc: "Learn echo letters and special pronunciation cases like Raa and Laam.", 
      bullets: ["Qalqalah letters", "Raa rules (Tafkheem & Tarqeeq)", "Laam rules"],
      outcome: "Clear and confident sound delivery" 
    },
    { 
      title: "Rules of Waqf & Ibtida", 
      duration: "1 week", 
      desc: "Master stopping and starting rules to preserve the meaning of verses.", 
      bullets: ["Types of stops", "Meaning-based pausing", "Breath control"],
      outcome: "Meaningful and smooth recitation" 
    },
    { 
      title: "Fluent Quran Reading", 
      duration: "2 weeks", 
      desc: "Apply all learned Tajweed rules while reciting full Quran pages fluently.", 
      bullets: ["Surah-based practice", "Continuous recitation", "Error correction"],
      outcome: "Fluent Quran reading with Tajweed" 
    },
    { 
      title: "Final Assessment", 
      duration: "1 week", 
      desc: "Complete evaluation and certification of your Tajweed mastery.", 
      bullets: ["Live recitation test", "Tajweed accuracy check", "Teacher feedback"],
      outcome: "Certified Quran recitation proficiency" 
    }
  ];

  const faqs = [
    { q: "Who should enroll in this course?", a: "This course is ideal for students who can read Arabic but want to improve fluency, accuracy, and Tajweed application." },
    { q: "Is this course suitable after Qaida?", a: "Yes, it is the perfect next step after completing the TanzeelQuran Qaida foundation course." },
    { q: "Do I need prior Tajweed knowledge?", a: "No, we start from the basics of Tajweed while assuming you have a basic ability to recognize Arabic script." },
    { q: "Will my mistakes be corrected live?", a: "Absolutely. Our one-on-one format ensures your teacher corrects every minor mistake in real-time." },
    { q: "Do you provide a certificate?", a: "Yes, upon successful completion and final assessment, you will receive a Tajweed Completion Certificate." }
  ];

  return (
    <div className={`pt-24 pb-0 bg-[#052e1b] ${isRtl ? 'font-amiri' : 'font-poppins'}`}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 animate-fade-up ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="text-sm font-bold text-[#D4AF37]">✨</span>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{q.hero.badge}</span>
          </div>
          <h1 className="font-cinzel text-5xl lg:text-7xl font-bold text-white leading-tight">
            {q.hero.title} <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">{q.hero.titleHighlight}</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl font-light">
            {q.hero.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {q.hero.boxes.map((label: string, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center gap-5 group hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/40 transition-all duration-500">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#D4AF37]/20 transition-all">
                  {i === 0 ? '📖' : i === 1 ? '✨' : i === 2 ? '👤' : '📜'}
                </div>
                <span className="text-sm font-semibold text-white/90">{label}</span>
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

        {/* Hero Card */}
        <div className="relative animate-fade-up group" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[100px] rounded-full group-hover:bg-[#D4AF37]/20 transition-all duration-1000"></div>
          <div className="relative bg-[#0F5132]/40 backdrop-blur-xl border-2 border-[#D4AF37]/30 rounded-[4rem] p-10 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] p-10 rounded-[3rem] text-center mb-10 border border-white/20 relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
              <h2 className="font-amiri text-4xl text-[#052e1b] mb-6 font-bold relative z-10">وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</h2>
              <p className="text-[#052e1b] text-sm italic mb-4 font-medium relative z-10">"And recite the Quran with slow, measured recitation"</p>
              <div className="inline-block px-4 py-1.5 bg-black/40 rounded-full text-[10px] text-white uppercase font-bold tracking-widest relative z-10">Surah Al-Muzzammil (73:4)</div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {q.hero.stats.map((stat: any, i: number) => (
                <div key={i} className="text-center bg-white/5 p-5 rounded-3xl border border-white/5 group hover:border-[#D4AF37]/40 transition-all">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-1">{stat.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#D4AF37]/5 rounded-[2.5rem] p-8 border border-[#D4AF37]/20 text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-bold">Starting From</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-6xl font-bold text-white">{q.hero.price}</span>
                <span className="text-white/40">{q.hero.perMonth}</span>
              </div>
              <p className="text-white/30 text-xs mb-8">{q.hero.details}</p>
              <button className="w-full py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold transition-all shadow-xl hover:bg-white">
                 {q.hero.trialBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mastery Path Journey */}
      <section className="py-24 bg-[#052e1b] reveal">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-24">
             <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-6">Course Structure</div>
             <h2 className="font-cinzel text-5xl sm:text-7xl text-white font-bold mb-8">Your <span className="text-[#D4AF37]">Tajweed Mastery Path</span></h2>
             <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">A structured 8-phase journey designed to make your Quran recitation fluent, accurate, and beautiful.</p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0"></div>

            <div className="space-y-40">
              {masteryPath.map((phase, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card Side */}
                  <div className="w-full md:w-[45%]">
                     <div className={`bg-[#0F5132]/30 border border-white/5 p-12 rounded-[3.5rem] hover:border-[#D4AF37]/40 hover:bg-[#0F5132]/40 transition-all duration-700 shadow-2xl relative group ${isRtl ? 'text-right' : 'text-left'}`}>
                        <div className={`flex justify-between items-start mb-10 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                           <h3 className="text-3xl font-bold text-white font-cinzel group-hover:text-[#D4AF37] transition-colors pr-10">{phase.title}</h3>
                           <span className="flex-shrink-0 text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-1.5 rounded-full uppercase tracking-widest bg-[#D4AF37]/5">{phase.duration}</span>
                        </div>
                        
                        <p className="text-white/60 text-base mb-10 leading-relaxed font-light">{phase.desc}</p>
                        
                        <ul className="space-y-4 mb-10">
                          {phase.bullets.map((b, j) => (
                            <li key={j} className={`flex items-center gap-4 text-white/40 text-sm ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-[10px]">✓</span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div className="bg-[#D4AF37]/10 p-6 rounded-2xl border border-[#D4AF37]/20">
                           <div className={`flex items-center gap-3 mb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Outcome:</span>
                           </div>
                           <p className="text-xs text-white/80 leading-relaxed">{phase.outcome}</p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Node */}
                  <div className="z-10 w-24 h-24 rounded-full bg-[#052e1b] border-4 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-4xl font-bold shadow-[0_0_50px_rgba(212,175,55,0.4)] relative">
                    <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20"></div>
                    {i + 1}
                  </div>

                  {/* Empty Side for Desktop Spacing */}
                  <div className="hidden md:block w-full md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completion Banner */}
      <section className="py-32 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#0F5132] to-[#D4AF37]/10 rounded-[4rem] p-16 sm:p-24 text-center border-y border-[#D4AF37]/30 relative shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="w-24 h-24 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#052e1b] text-5xl mx-auto mb-12 shadow-2xl">🎓</div>
              <h2 className="font-cinzel text-4xl sm:text-6xl font-bold text-white mb-8">Course Completion</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-2xl font-light italic leading-relaxed">
                "After completion, you will confidently recite the Quran with proper Tajweed, fluency, and spiritual connection."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 reveal">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4">FAQs</div>
             <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold">Tajweed Course – <span className="text-[#D4AF37]">FAQs</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="bg-[#0F5132]/20 border border-white/5 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full px-8 py-6 flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                >
                  <span className="font-bold text-white text-lg">{i + 1}. {item.q}</span>
                  <span className={`text-[#D4AF37] transition-transform text-2xl ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                   <div className={`px-8 pb-8 text-white/60 leading-relaxed border-t border-white/5 pt-6 text-sm ${isRtl ? 'text-right' : 'text-left'}`}>
                     {item.a}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Begin Journey Footer CTA */}
      <section className="py-24 relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-[4rem] p-12 sm:p-20 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                 <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                    <div className={`text-[#052e1b] text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                       <span className="w-8 h-[1px] bg-[#052e1b]/40"></span> Limited Time Offer - Start Today!
                    </div>
                    <h2 className="font-cinzel text-5xl lg:text-7xl font-bold text-[#052e1b] mb-8 leading-tight">
                       Begin Your Sacred Quran Journey
                    </h2>
                    <p className="text-[#052e1b]/80 text-lg mb-10 leading-relaxed max-w-xl">
                       Join 10,000+ students worldwide who transformed their lives through authentic Islamic education. Start with your FREE trial class today - no credit card required!
                    </p>
                 </div>
                 
                 <div className="bg-white rounded-[3rem] p-10 text-[#052e1b] shadow-2xl">
                    <div className="text-center mb-10">
                       <h3 className="text-3xl font-bold mb-2">Start Your FREE Trial</h3>
                       <p className="text-gray-500 text-sm">No Credit Card • No Commitment • 100% Free</p>
                    </div>
                    <div className="space-y-4">
                       <button className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all">
                          WhatsApp Us Now →
                       </button>
                       <button className="w-full py-4 bg-[#0F5132] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all">
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

export default TajweedPage;

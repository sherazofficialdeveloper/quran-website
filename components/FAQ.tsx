
import React, { useState } from 'react';

interface FAQProps {
  translations: any;
}

const FAQ: React.FC<FAQProps> = ({ translations: t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pb-10 bg-[#052e1b]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">FAQ</div>
          <h2 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-6">Frequently Asked <span className="text-[#D4AF37]">Questions</span></h2>
          <p className="text-white/50">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((item: any, i: number) => (
            <div key={i} className="bg-[#0F5132]/20 border border-white/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors"
              >
                <span className="font-bold text-white text-lg">{item.q}</span>
                <span className={`text-[#D4AF37] transition-transform text-2xl ${openIndex === i ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                 <div className="px-8 pb-8 text-white/60 leading-relaxed border-t border-white/5 pt-6">
                   {item.a}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

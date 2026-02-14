
import React from 'react';
import { Language } from '../translations';

interface FooterProps {
  translations: any;
  onLangChange: (lang: Language) => void;
}

const Footer: React.FC<FooterProps> = ({ translations: t, onLangChange }) => {
  return (
    <footer className="bg-[#052e1b] border-t border-[#D4AF37]/30 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center">
                <span className="text-[#D4AF37] -rotate-45 font-cinzel text-2xl font-bold">Q</span>
              </div>
              <span className="text-[#D4AF37] font-cinzel text-3xl font-bold tracking-widest">{t.logo}</span>
            </div>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Nurturing hearts with the wisdom of the Quran through dedicated online one-on-one sessions for everyone.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-white font-bold mb-10 tracking-widest border-b border-[#D4AF37]/20 pb-2 inline-block uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-5">
              {Object.entries(t.nav).map(([key, label]) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-white/60 hover:text-[#D4AF37] transition-all duration-300 text-lg flex items-center gap-2">
                    <span className="text-[#D4AF37] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all">→</span>
                    {label as string}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-white font-bold mb-10 tracking-widest border-b border-[#D4AF37]/20 pb-2 inline-block uppercase">
              {t.footer.courseLinks}
            </h4>
            <ul className="space-y-5">
              <li><a href="#courses" className="text-white/60 hover:text-[#D4AF37] transition-colors text-lg">Noorani Qaida</a></li>
              <li><a href="#courses" className="text-white/60 hover:text-[#D4AF37] transition-colors text-lg">Quran Reading</a></li>
              <li><a href="#courses" className="text-white/60 hover:text-[#D4AF37] transition-colors text-lg">Hifz Program</a></li>
              <li><a href="#courses" className="text-white/60 hover:text-[#D4AF37] transition-colors text-lg">Tajweed Course</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-white font-bold mb-10 tracking-widest border-b border-[#D4AF37]/20 pb-2 inline-block uppercase">
              {t.footer.languages}
            </h4>
            <div className="flex flex-col gap-5">
              <button onClick={() => onLangChange('en')} className="text-white/60 hover:text-[#D4AF37] transition-all text-lg text-left">English</button>
              <button onClick={() => onLangChange('ur')} className="text-white/60 hover:text-[#D4AF37] transition-all text-2xl text-left font-amiri">اردو</button>
              <button onClick={() => onLangChange('ar')} className="text-white/60 hover:text-[#D4AF37] transition-all text-2xl text-left font-amiri">العربية</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm tracking-[0.3em] uppercase">
            {t.footer.copyright}
          </p>
          <div className="flex gap-10">
             <a href="#" className="text-white/30 hover:text-[#D4AF37] text-sm tracking-widest uppercase transition-colors">Privacy</a>
             <a href="#" className="text-white/30 hover:text-[#D4AF37] text-sm tracking-widest uppercase transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

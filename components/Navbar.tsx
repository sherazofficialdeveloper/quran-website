
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  translations: any;
  onNavigate: (page: 'home' | 'qaida' | 'tajweed' | 'tafseer' | 'qiraat' | 'about' | 'blog' | 'contact') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLangChange, translations: t, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const coursesMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const langNames = {
    en: 'English',
    ur: 'Urdu',
    ar: 'Arabic',
  };

  const simplifiedCourses = [
    { name: 'TanzeelQuran Qaida', id: 'qaida' },
    { name: 'Quran Reading with Tajweed', id: 'tajweed' },
    { name: 'Tafseer-ul-Quran', id: 'tafseer' },
    { name: 'Qiraat Ashra Course', id: 'qiraat' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (coursesMenuRef.current && !coursesMenuRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItemClass = (id: string) => `
    relative text-sm font-bold uppercase transition-all pb-1
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
    ${currentPage === id ? 'text-[#D4AF37] after:w-full' : 'text-white/80 hover:text-[#D4AF37] after:w-0 hover:after:w-full'}
  `;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-[#052e1b]/95 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2 border-b border-[#D4AF37]/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300">
              <span className="text-[#D4AF37] group-hover:text-[#052e1b] -rotate-45 font-cinzel text-xl font-bold">Q</span>
            </div>
            <span className="text-[#D4AF37] font-cinzel text-xl sm:text-2xl font-bold tracking-wider">{t.logo}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            <button onClick={() => onNavigate('home')} className={navItemClass('home')}>{t.nav.home}</button>

            {/* Courses Dropdown (Click Based) */}
            <div className="relative" ref={coursesMenuRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className={`flex items-center gap-1 transition-all text-sm font-bold uppercase group ${simplifiedCourses.some(c => c.id === currentPage) ? 'text-[#D4AF37]' : 'text-white/80 hover:text-[#D4AF37]'}`}
              >
                {t.nav.courses}
                <svg className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#052e1b] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-6 animate-fade-up">
                  <ul className="space-y-4">
                    {simplifiedCourses.map((item, j) => (
                      <li key={j}>
                        <button 
                          onClick={() => {
                            onNavigate(item.id as any);
                            setIsCoursesOpen(false);
                          }}
                          className={`flex items-center gap-3 transition-all text-sm font-medium text-left w-full ${currentPage === item.id ? 'text-[#D4AF37]' : 'text-white/80 hover:text-[#D4AF37]'}`}
                        >
                          <span className="text-[#D4AF37] text-lg font-bold">•</span>
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button onClick={() => onNavigate('about')} className={navItemClass('about')}>{t.nav.about}</button>
            <button onClick={() => onNavigate('blog')} className={navItemClass('blog')}>{t.nav.blog}</button>
            <button onClick={() => onNavigate('contact')} className={navItemClass('contact')}>{t.nav.contact}</button>

            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)} 
                className="flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full text-xs text-white hover:bg-[#D4AF37]/20 transition-all uppercase font-bold tracking-widest"
              >
                <span>{langNames[currentLang]}</span>
                <svg className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-[#0F5132] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
                  {(Object.keys(langNames) as Language[]).map((langCode) => (
                    <button 
                      key={langCode} 
                      onClick={() => { onLangChange(langCode); setIsLangOpen(false); }} 
                      className={`w-full text-left px-5 py-4 text-sm hover:bg-[#D4AF37] hover:text-[#052e1b] transition-all ${currentLang === langCode ? 'text-[#D4AF37] font-bold' : 'text-white'}`}
                    >
                      {langNames[langCode]}
                    </button>
                  ))}
                </div>
              )}
            </div>

             <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer">
             <button onClick={() => onNavigate('contact')} className="bg-[#D4AF37] hidden xl:block text-[#052e1b] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all uppercase tracking-widest shadow-lg">
              Whatsapp
              </button></a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D4AF37] p-2 bg-[#D4AF37]/10 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}</svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#052e1b] border-t border-[#D4AF37]/20 px-4 py-8 space-y-6 animate-fade-up shadow-2xl max-h-screen overflow-y-auto">
           {/* Navigation Links */}
           <div className="space-y-2">
              <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className={`block w-full text-left py-3 px-4 rounded-xl uppercase font-bold text-sm ${currentPage === 'home' ? 'bg-[#D4AF37] text-[#052e1b]' : 'text-white/80'}`}>{t.nav.home}</button>
              <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className={`block w-full text-left py-3 px-4 rounded-xl uppercase font-bold text-sm ${currentPage === 'about' ? 'bg-[#D4AF37] text-[#052e1b]' : 'text-white/80'}`}>{t.nav.about}</button>
              <button onClick={() => { onNavigate('blog'); setIsMenuOpen(false); }} className={`block w-full text-left py-3 px-4 rounded-xl uppercase font-bold text-sm ${currentPage === 'blog' ? 'bg-[#D4AF37] text-[#052e1b]' : 'text-white/80'}`}>{t.nav.blog}</button>
              <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className={`block w-full text-left py-3 px-4 rounded-xl uppercase font-bold text-sm ${currentPage === 'contact' ? 'bg-[#D4AF37] text-[#052e1b]' : 'text-white/80'}`}>{t.nav.contact}</button>
           </div>

           {/* Mobile Courses Accordion */}
           <div className="pt-2">
              <p className="text-[#D4AF37] text-xs font-bold uppercase mb-4 px-4 tracking-widest opacity-50">Explore Courses</p>
              <div className="grid grid-cols-1 gap-2">
                {simplifiedCourses.map(c => (
                  <button 
                    key={c.id} 
                    onClick={() => { onNavigate(c.id as any); setIsMenuOpen(false); }} 
                    className={`block w-full text-left px-4 py-3 text-sm rounded-xl border border-white/5 ${currentPage === c.id ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'text-white/60'}`}
                  >
                    • {c.name}
                  </button>
                ))}
              </div>
           </div>

           {/* Mobile Language Switcher */}
           <div className="pt-4 border-t border-[#D4AF37]/10">
              <p className="text-[#D4AF37] text-xs font-bold uppercase mb-4 px-4 tracking-widest opacity-50">Select Language</p>
              <div className="flex gap-2 px-4">
                {(Object.keys(langNames) as Language[]).map((langCode) => (
                  <button 
                    key={langCode} 
                    onClick={() => { onLangChange(langCode); setIsMenuOpen(false); }}
                    className={`flex-1 py-3 text-xs font-bold rounded-xl border transition-all ${currentLang === langCode ? 'bg-[#D4AF37] text-[#052e1b] border-[#D4AF37]' : 'bg-transparent text-white/60 border-white/10'}`}
                  >
                    {langNames[langCode]}
                  </button>
                ))}
              </div>
           </div>

           {/* Enroll Now Mobile Button */}
           <div className="pt-6">
               <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer"><button 
                onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
                className="w-full py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl text-lg animate-pulse"
              >
                Whatsapp
              </button></a>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

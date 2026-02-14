
import React, { useState, useEffect } from 'react';
import { translations, Language } from './translations';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QaidaPage from './pages/QaidaPage';
import TajweedPage from './pages/TajweedPage';
import TafseerPage from './pages/TafseerPage';
import QiraatPage from './pages/QiraatPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<'home' | 'qaida' | 'tajweed' | 'tafseer' | 'qiraat' | 'blog' | 'contact'>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir || 'ltr';
    document.documentElement.lang = lang;
    window.scrollTo(0, 0);
  }, [lang, t, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen islamic-gradient text-slate-100 flex flex-col overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#052e1b] ${lang === 'ur' ? 'font-amiri' : 'font-poppins'}`}>
      <Navbar 
        currentLang={lang} 
        onLangChange={setLang} 
        translations={t} 
        onNavigate={(page) => setCurrentPage(page as any)}
        currentPage={currentPage}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home translations={t} />}
        {currentPage === 'qaida' && <QaidaPage translations={t} />}
        {currentPage === 'tajweed' && <TajweedPage translations={t} />}
        {currentPage === 'tafseer' && <TafseerPage translations={t} />}
        {currentPage === 'qiraat' && <QiraatPage translations={t} />}
        {currentPage === 'blog' && <BlogPage translations={t} />}
        {currentPage === 'contact' && <ContactPage translations={t} />}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-0 right-0 z-[90] pointer-events-none flex flex-col items-center gap-4">
        {/* Floating Scroll to Top Arrow Button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#D4AF37]/80 backdrop-blur-md text-[#052e1b] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:scale-110 transition-all animate-bounce-premium border-2 border-white/20 group"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Bottom Right WhatsApp and Call */}
        <div className="absolute bottom-0 right-4 sm:right-8 flex flex-col gap-3 pointer-events-auto">
          <a 
            href="https://wa.me/yournumberhere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group relative"
          >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.314.159.386.541 1.32.588 1.417.047.097.072.21.01.341-.062.13-.095.21-.19.324-.095.115-.199.256-.283.343-.095.099-.193.208-.083.397.11.189.488.805 1.047 1.303.719.642 1.323.841 1.512.935.189.093.3-.077.341-.125s.174-.202.299-.371c.125-.168.251-.143.424-.08s1.09.513 1.278.607c.188.094.313.141.359.221.046.08.046.464-.098.869zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.844c-1.896 0-3.665-.521-5.185-1.424l-3.704.972 1.015-3.56c-.99-1.564-1.571-3.414-1.571-5.405 0-5.441 4.403-9.844 9.844-9.844s9.844 4.403 9.844 9.844-4.403 9.844-9.844 9.844z"/>
            </svg>
          </a>
          <a 
            href="tel:+yournumberhere" 
            className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#052e1b] shadow-2xl hover:scale-110 transition-transform group relative"
          >
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
        </div>
      </div>

      <Footer translations={t} onLangChange={setLang} />
      
      <style>{`
        @keyframes bouncePremium {
          0%, 100% { 
            transform: translateY(0); 
            box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
          }
          50% { 
            transform: translateY(-20px); 
            box-shadow: 0 35px 60px rgba(212, 175, 55, 0.6);
          }
        }
        .animate-bounce-premium {
          animation: bouncePremium 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;


import React from 'react';

interface WhatsAppBannerProps {
  translations: any;
}

const WhatsAppBanner: React.FC<WhatsAppBannerProps> = ({ translations: t }) => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-transparent to-[#052e1b]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="bg-[#0F5132]/50 backdrop-blur-3xl border-2 border-[#D4AF37]/30 rounded-[4rem] p-12 sm:p-24 relative overflow-hidden group shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          {/* Background Decorative Patterns */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full -mr-40 -mt-40 group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -ml-32 -mb-32 group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="font-cinzel text-4xl sm:text-7xl font-bold text-white mb-8 leading-tight">
              {t.whatsapp.text}
            </h2>
            <p className="text-white/80 text-xl sm:text-2xl mb-4 font-light max-w-3xl mx-auto italic">
              "{t.whatsapp.sub}"
            </p>
            <p className="text-[#D4AF37] text-sm mb-16 font-bold tracking-[0.4em] uppercase opacity-70">
               {t.whatsapp.sub2}
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://wa.me/yournumberhere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-16 py-8 bg-[#25D366] text-white rounded-3xl text-2xl sm:text-3xl font-bold hover:bg-[#128C7E] transition-all duration-500 transform hover:scale-110 shadow-[0_25px_80px_rgba(37,211,102,0.4)] gold-glow"
              >
                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.314.159.386.541 1.32.588 1.417.047.097.072.21.01.341-.062.13-.095.21-.19.324-.095.115-.199.256-.283.343-.095.099-.193.208-.083.397.11.189.488.805 1.047 1.303.719.642 1.323.841 1.512.935.189.093.3-.077.341-.125s.174-.202.299-.371c.125-.168.251-.143.424-.08s1.09.513 1.278.607c.188.094.313.141.359.221.046.08.046.464-.098.869zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.844c-1.896 0-3.665-.521-5.185-1.424l-3.704.972 1.015-3.56c-.99-1.564-1.571-3.414-1.571-5.405 0-5.441 4.403-9.844 9.844-9.844s9.844 4.403 9.844 9.844-4.403 9.844-9.844 9.844z"/>
                </svg>
                <span>{t.whatsapp.btn}</span>
              </a>
              
              <p className="text-white/40 text-sm tracking-widest uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/10"></span>
                Secure & Professional
                <span className="w-12 h-[1px] bg-white/10"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppBanner;

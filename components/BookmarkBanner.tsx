
import React from 'react';

interface BookmarkBannerProps {
  translations: any;
}

const BookmarkBanner: React.FC<BookmarkBannerProps> = ({ translations: t }) => {
  return (
    <section className="py-24 border-t border-[#D4AF37]/10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-4 border-double border-[#D4AF37]/40 p-12 rounded-[2.5rem] text-center relative">
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#052e1b] px-6 py-2">
             <span className="text-[#D4AF37] text-2xl">☪</span>
           </div>
           <h3 className="font-cinzel text-3xl font-bold text-white mb-4">{t.bookmark.title}</h3>
           <p className="text-white/60 mb-0 font-light text-lg">
             {t.bookmark.desc}
           </p>
        </div>
      </div>
    </section>
  );
};

export default BookmarkBanner;

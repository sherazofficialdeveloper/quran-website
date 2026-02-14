
import React, { useState, useEffect, useCallback } from 'react';

interface Props {
  translations: any;
}

const Testimonials: React.FC<Props> = ({ translations: t }) => {
  const reviews = [
    { name: "Fatima Hassan", role: "Parent, UK", text: "My child improved Tajweed in just 2 months. Highly recommended for busy parents.", course: "Quran Reading with Tajweed" },
    { name: "Abdullah Rahman", role: "Student, USA", text: "The female teacher is very patient and knowledgeable. I feel so much more confident now.", course: "Quran Memorization (Hifz)" },
    { name: "Aisha Mohammad", role: "Parent, Canada", text: "Starting my Hifz at Quran Kareem was the best decision. The systematic approach and continuous motivation is excellent!", course: "Arabic Language" },
    { name: "Muhammad Ali", role: "Student, Australia", text: "7-year-old son struggled with reading until we found this academy. Now he reads fluently.", course: "Noorani Qaida" },
    { name: "Sarah Ahmed", role: "Student, UAE", text: "I've learned more in 3 months than I did in years elsewhere. The teacher explains the depth of every verse.", course: "Islamic Studies" },
    { name: "Omar Khan", role: "Student, Germany", text: "Interactive classes make Tajweed easy to understand. The feedback loop is very fast.", course: "Tafseer-ul-Quran" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive items calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-5 relative overflow-hidden reveal">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/quran.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay Gradient to ensure text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#052e1b] via-[#052e1b]/30 to-[#052e1b]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <div className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4">Success Stories</div>
          <h2 className="font-cinzel text-4xl sm:text-6xl text-white font-bold mb-6 drop-shadow-lg">
            Hear From Our <span className="text-[#D4AF37]">Happy Students</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-light drop-shadow-md">
            Read authentic reviews from students around the world who transformed their journey.
          </p>
        </div>

        <div className="relative group">
          {/* Main Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((rev, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-1"
                  style={{ width: `calc(${100 / itemsToShow}% - 1.5rem)` }}
                >
                  <div className="bg-[#0F5132]/40 backdrop-blur-md border border-[#D4AF37]/20 p-10 rounded-[3rem] hover:border-[#D4AF37]/50 transition-all h-full flex flex-col justify-between shadow-2xl">
                    <div>
                      <div className="flex gap-1 text-[#D4AF37] mb-6">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <p className="text-white/90 text-base leading-relaxed mb-8 italic drop-shadow-sm font-medium">"{rev.text}"</p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                       <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#052e1b] flex items-center justify-center font-bold text-xl shadow-lg">{rev.name.charAt(0)}</div>
                       <div>
                          <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                          <p className="text-white/40 text-[10px] uppercase tracking-widest">{rev.role}</p>
                          <div className="mt-1 text-[#D4AF37] text-[10px] font-bold">Course: {rev.course}</div>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 lg:-left-8 -translate-y-1/2 w-12 h-12 bg-[#0F5132]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#052e1b] transition-all z-10 shadow-xl opacity-0 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 w-12 h-12 bg-[#0F5132]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#052e1b] transition-all z-10 shadow-xl opacity-0 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3">
            {[...Array(totalSlides)].map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-[#D4AF37] w-12' : 'bg-white/10 w-4'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 py-12 border-t border-white/10 text-center animate-fade-up">
           <div className="text-6xl font-bold text-white mb-2 drop-shadow-xl">4.9</div>
           <div className="flex justify-center gap-1 text-[#D4AF37] mb-4">
              {[...Array(5)].map((_, i) => <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
           </div>
           <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Excellent Rating based on 2,500+ Student Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

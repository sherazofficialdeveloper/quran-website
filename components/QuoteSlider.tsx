
import React, { useState, useEffect } from 'react';

interface QuoteSliderProps {
  translations: any;
}

const QuoteSlider: React.FC<QuoteSliderProps> = ({ translations: t }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [t.quotes.length]);

  return (
    <section className="py-32 bg-[#0F5132]/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-[#D4AF37] text-6xl font-serif mb-8 opacity-40">"</div>
        <div className="h-40 flex items-center justify-center">
          {t.quotes.map((quote: string, i: number) => (
            <p 
              key={i} 
              className={`absolute transition-all duration-1000 text-2xl sm:text-3xl font-light italic text-white/90 leading-relaxed ${index === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              {quote}
            </p>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {t.quotes.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === i ? 'bg-[#D4AF37] w-8' : 'bg-[#D4AF37]/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;


import React from 'react';

interface Props {
  translations: any;
}

const ProblemSolution: React.FC<Props> = ({ translations: t }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#052e1b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold mb-6">{t.problemSolution.heading}</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Problems Side - Gold Themed */}
          <div className="bg-[#0F5132]/30 p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4AF37]/20 flex flex-col group hover:border-[#D4AF37]/40 transition-all">
            <h3 className="text-[#D4AF37] font-cinzel text-xl sm:text-2xl mb-8 font-bold flex items-center gap-3">
              <span className="text-2xl">💡</span> {t.problemSolution.problemsTitle}
            </h3>
            <ul className="space-y-6 flex-grow">
              {t.problemSolution.problems.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-4 text-white/70">
                  <span className="text-[#D4AF37] text-xl leading-none">•</span>
                  <span className="text-base sm:text-lg">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side - Gold Themed */}
          <div className="bg-[#D4AF37]/10 p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4AF37]/40 relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
               <span className="text-9xl font-bold">☪</span>
            </div>
            <h3 className="text-[#D4AF37] font-cinzel text-xl sm:text-2xl mb-8 font-bold flex items-center gap-3">
              <span className="text-2xl">✨</span> {t.problemSolution.solutionTitle}
            </h3>
            <p className="text-white text-lg sm:text-xl leading-relaxed font-light mb-10 flex-grow">
              {t.problemSolution.solutionDesc}
            </p>
            <button className="w-full sm:w-fit px-8 py-4 bg-[#D4AF37] text-[#052e1b] rounded-xl font-bold hover:bg-white transition-all shadow-xl uppercase tracking-widest text-sm">
              Learn How We Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
